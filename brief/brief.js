(() => {
  const $ = (sel, root = document) => root.querySelector(sel);

  const KEY = "brief_entries_v1";

  const elName = $("#briefName");
  const elType = $("#briefType"); // ✅ 现在是 hidden input
  const elCustom = $("#briefCustomTag");
  const elSelected = $("#briefSelected");
  const elText = $("#briefText");

  const btnAddCustom = $("#btnAddCustomTag");
  const btnSave = $("#btnSaveBrief");
  const btnClearInput = $("#btnClearInput");
  const btnClearPageData = $("#btnClearPageData");

  const elSearch = $("#briefSearch");
  const elList = $("#briefList");
  const elPresets = $("#briefPresets");

  // =========================
  // ✅ 自绘下拉：类型 dropdown
  // =========================
  const dd = $("#briefTypeDD");
  const ddBtn = $("#briefTypeBtn");
  const ddText = $("#briefTypeText");
  const ddPanel = $("#briefTypePanel");
  const ddItems = ddPanel ? Array.from(ddPanel.querySelectorAll(".dd-item")) : [];

  function ddOpen() {
    if (!dd) return;
    dd.classList.add("open");
    ddBtn?.setAttribute("aria-expanded", "true");

    // focus 到当前 active 项
    const active = ddPanel?.querySelector(".dd-item.is-active") || ddItems[0];
    active && active.focus();
  }

  function ddClose() {
    if (!dd) return;
    dd.classList.remove("open");
    ddBtn?.setAttribute("aria-expanded", "false");
  }

  function ddSetValue(val) {
    const v = norm(val) || "叙事书籍";

    // 写入 hidden input（保存时从这里读）
    if (elType) elType.value = v;

    // 更新按钮显示
    if (ddText) ddText.textContent = v;

    // 更新选中态
    ddItems.forEach((it) => {
      const on = it.dataset.value === v;
      it.classList.toggle("is-active", on);
      it.setAttribute("aria-selected", on ? "true" : "false");
      it.tabIndex = on ? 0 : -1;
    });
  }

  // 绑定 dropdown 事件
  if (ddBtn && dd) {
    ddBtn.addEventListener("click", () => {
      if (dd.classList.contains("open")) ddClose();
      else ddOpen();
    });
  }

  ddItems.forEach((it) => {
    it.addEventListener("click", () => {
      ddSetValue(it.dataset.value);
      ddClose();
      ddBtn?.focus();
    });

    it.addEventListener("keydown", (e) => {
      const idx = ddItems.indexOf(it);

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        ddSetValue(it.dataset.value);
        ddClose();
        ddBtn?.focus();
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = ddItems[Math.min(ddItems.length - 1, idx + 1)];
        next && next.focus();
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = ddItems[Math.max(0, idx - 1)];
        prev && prev.focus();
        return;
      }

      if (e.key === "Escape") {
        e.preventDefault();
        ddClose();
        ddBtn?.focus();
      }
    });
  });

  // 点击外部关闭
  document.addEventListener("click", (e) => {
    if (!dd) return;
    if (!dd.contains(e.target)) ddClose();
  });

  // ---- state ----
  let selectedTags = [];
  let entries = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }

  function persist() {
    localStorage.setItem(KEY, JSON.stringify(entries));
  }

  function norm(s) {
    return String(s || "").trim();
  }

  function addTag(tag) {
    const t = norm(tag);
    if (!t) return;
    if (!selectedTags.includes(t)) selectedTags.push(t);
    renderSelectedTags();
  }

  function removeTag(tag) {
    selectedTags = selectedTags.filter((x) => x !== tag);
    renderSelectedTags();
  }

  function renderSelectedTags() {
    elSelected.innerHTML = "";
    if (!selectedTags.length) return;

    for (const t of selectedTags) {
      const chip = document.createElement("span");
      chip.className = "brief-tagchip";
      chip.textContent = t;

      const x = document.createElement("button");
      x.type = "button";
      x.className = "brief-tagx";
      x.textContent = "×";
      x.addEventListener("click", () => removeTag(t));

      chip.appendChild(x);
      elSelected.appendChild(chip);
    }
  }

  function clearInput() {
    if (elName) elName.value = "";

    // ✅ 清空时同步重置 dropdown + hidden input
    ddSetValue("叙事书籍");

    if (elCustom) elCustom.value = "";
    if (elText) elText.value = "";
    selectedTags = [];
    renderSelectedTags();
  }

  function saveEntry() {
    const name = norm(elName?.value);
    const type = norm(elType?.value); // ✅ 从 hidden input 读
    const text = norm(elText?.value);

    if (!name) {
      alert("请先填写名称。");
      return;
    }

    const item = {
      id: String(Date.now()),
      name,
      type,
      tags: [...selectedTags],
      text,
      createdAt: new Date().toISOString(),
    };

    entries.unshift(item);
    persist();
    clearInput();
    renderList();
  }

  function matches(item, q) {
    if (!q) return true;
    const hay = [
      item.name,
      item.type,
      (item.tags || []).join(" "),
      item.text,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q.toLowerCase());
  }

  function renderList() {
    const q = norm(elSearch?.value);
    const list = entries.filter((it) => matches(it, q));

    elList.innerHTML = "";

    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "brief-empty";
      empty.textContent = "暂无记录。";
      elList.appendChild(empty);
      return;
    }

    for (const it of list) {
      const card = document.createElement("div");
      card.className = "brief-card";

      const head = document.createElement("div");
      head.className = "brief-head";

      const title = document.createElement("div");
      title.className = "brief-title";
      title.textContent = it.name;

      const meta = document.createElement("div");
      meta.className = "brief-meta";
      meta.textContent = it.type;

      head.appendChild(title);
      head.appendChild(meta);

      const tags = document.createElement("div");
      tags.className = "brief-badges";
      for (const t of it.tags || []) {
        const b = document.createElement("span");
        b.className = "badge";
        b.textContent = t;
        tags.appendChild(b);
      }

      const text = document.createElement("div");
      text.className = "brief-text";
      text.textContent = it.text || "";

      const actions = document.createElement("div");
      actions.className = "brief-actions-row";

      const del = document.createElement("button");
      del.type = "button";
      del.className = "brief-del";
      del.textContent = "删除";
      del.addEventListener("click", () => {
        if (!confirm("确定删除这条记录？")) return;
        entries = entries.filter((x) => x.id !== it.id);
        persist();
        renderList();
      });

      actions.appendChild(del);

      card.appendChild(head);
      if ((it.tags || []).length) card.appendChild(tags);
      if (it.text) card.appendChild(text);
      card.appendChild(actions);

      elList.appendChild(card);
    }
  }

  // ---- events ----
  elPresets?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-tag]");
    if (!btn) return;
    addTag(btn.dataset.tag);
  });

  function handleAddCustomTag() {
    addTag(elCustom?.value);
    if (elCustom) elCustom.value = "";
    elCustom?.focus();
  }

  btnAddCustom?.addEventListener("click", handleAddCustomTag);

  elCustom?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCustomTag();
    }
  });

  btnSave?.addEventListener("click", saveEntry);
  btnClearInput?.addEventListener("click", clearInput);

  btnClearPageData?.addEventListener("click", () => {
    if (!confirm("确定清空本页所有数据？（不可恢复）")) return;
    entries = [];
    persist();
    renderList();
  });

  elSearch?.addEventListener("input", renderList);

  // boot
  ddSetValue(elType?.value || "叙事书籍"); // ✅ 初始化 dropdown 显示
  renderSelectedTags();
  renderList();
})();
