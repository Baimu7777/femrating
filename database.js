// database.js
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);

  const PAGE_SIZE = 24;

  const state = {
    q: "",
    type: "全部",
    limit: PAGE_SIZE,
    items: []
  };

  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function toNumberScore(v) {
    if (typeof v === "number" && Number.isFinite(v)) return v;
    const n = Number(String(v ?? "").trim());
    return Number.isFinite(n) ? n : null;
  }

  function normalizeItem(raw, idx) {
    const o = raw && typeof raw === "object" ? raw : {};
    return {
      _id: String(o.id ?? idx),
      type: String(o.type ?? "未分类").trim() || "未分类",
      name: String(o.name ?? "").trim(),
      en: String(o.en ?? o.english ?? "").trim(),
      score: o.score ?? 0,
      brief: String(o.brief ?? o.comment ?? "").trim(),
      link: String(o.link ?? o.url ?? "").trim()
    };
  }

  function getAllItems() {
    const arr = Array.isArray(window.DB_ITEMS) ? window.DB_ITEMS : [];
    return arr.map(normalizeItem).filter(x => x.name);
  }

  function scoreSortKey(item) {
    const n = toNumberScore(item.score);
    // numeric scores first; null at the end
    return (n === null) ? -Infinity : n;
  }

  function uniqueTypes(items) {
    const set = new Set(items.map(x => x.type).filter(Boolean));
    return Array.from(set);
  }

  function matchQuery(item, q) {
    if (!q) return true;
    const needle = q.toLowerCase();
    const hay = [
      item.name,
      item.en,
      item.type,
      item.brief
    ].join(" ").toLowerCase();
    return hay.includes(needle);
  }

  function getFiltered() {
    const q = state.q.trim();
    const type = state.type;

    let arr = state.items.slice();

    if (type !== "全部") {
      arr = arr.filter(x => x.type === type);
    }
    if (q) {
      arr = arr.filter(x => matchQuery(x, q));
    }

    // 默认：按分数降序（数字优先），再按 name
    arr.sort((a, b) => {
      const sa = scoreSortKey(a);
      const sb = scoreSortKey(b);
      if (sb !== sa) return sb - sa;
      return String(a.name).localeCompare(String(b.name), "zh-Hans-CN");
    });

    return arr;
  }

  function renderTypeChips(types) {
    const wrap = $("#typeChips");
    if (!wrap) return;

    wrap.innerHTML = "";

    const all = ["全部", ...types];

    for (const t of all) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (state.type === t ? " active" : "");
      b.textContent = t;
      b.addEventListener("click", () => {
        state.type = t;
        state.limit = PAGE_SIZE;
        renderAll();
      });
      wrap.appendChild(b);
    }
  }

  function formatScore(score) {
    const n = toNumberScore(score);
    if (n === null) return String(score ?? "");
    // 显示 + 号更直观（可按你喜好删掉）
    if (n > 0) return `+${n}`;
    return String(n);
  }

  function renderCards() {
    const grid = $("#cardGrid");
    const empty = $("#emptyState");
    const meta = $("#resultMeta");
    const btnMore = $("#btnMore");

    const filtered = getFiltered();
    const shown = filtered.slice(0, state.limit);

    if (meta) {
      meta.textContent = `共 ${filtered.length} 条 · 当前显示 ${shown.length} 条`;
    }

    if (!grid) return;
    grid.innerHTML = "";

    if (!filtered.length) {
      if (empty) empty.style.display = "";
      if (btnMore) btnMore.style.display = "none";
      return;
    }
    if (empty) empty.style.display = "none";

    for (const item of shown) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "db-card";
      card.setAttribute("aria-label", `${item.name} ${item.en ? item.en : ""}`);
      card.innerHTML = `
        <div class="badge">${escapeHtml(item.type)}</div>
        <div class="name">${escapeHtml(item.name)}</div>
        <div class="en">${escapeHtml(item.en || " ")}</div>
        <div class="score">${escapeHtml(formatScore(item.score))}</div>
      `;
      card.addEventListener("click", () => openModal(item));
      grid.appendChild(card);
    }

    if (btnMore) {
      btnMore.style.display = (shown.length < filtered.length) ? "" : "none";
      btnMore.onclick = () => {
        state.limit += PAGE_SIZE;
        renderCards();
      };
    }
  }

  function openModal(item) {
    const modal = $("#modal");
    const modalBody = $("#modalBody");
    if (!modal || !modalBody) return;

    const scoreTxt = formatScore(item.score);

    modalBody.innerHTML = `
      <div class="modal-top">
        <div class="modal-title">
          <div class="modal-name">${escapeHtml(item.name)}</div>
          ${item.en ? `<div class="modal-en">${escapeHtml(item.en)}</div>` : ``}
        </div>
        <div class="modal-right">
          <div class="badge big">${escapeHtml(item.type)}</div>
          <div class="modal-score">${escapeHtml(scoreTxt)}</div>
        </div>
      </div>

      <div class="modal-section">
        <div class="k">简评</div>
        <div class="v">${item.brief ? `<div class="pre">${escapeHtml(item.brief)}</div>` : `<span class="muted">（无）</span>`}</div>
      </div>

      <div class="modal-section">
        <div class="k">链接</div>
        <div class="v">
          ${item.link
            ? `<a class="link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener">打开链接 ↗</a>
               <button class="btn small ghost" type="button" id="btnCopyLink">复制链接</button>`
            : `<span class="muted">（无）</span>`
          }
        </div>
      </div>
    `;

    // copy link
    const btnCopy = $("#btnCopyLink", modalBody);
    if (btnCopy) {
      btnCopy.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(item.link);
          btnCopy.textContent = "已复制";
          setTimeout(() => (btnCopy.textContent = "复制链接"), 900);
        } catch {
          // fallback
          const ta = document.createElement("textarea");
          ta.value = item.link;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); } catch {}
          ta.remove();
          btnCopy.textContent = "已复制";
          setTimeout(() => (btnCopy.textContent = "复制链接"), 900);
        }
      });
    }

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    const modal = $("#modal");
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  function bindModal() {
    const modal = $("#modal");
    const btnClose = $("#btnClose");
    if (btnClose) btnClose.addEventListener("click", closeModal);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  function bindSearch() {
    const input = $("#searchInput");
    const clear = $("#btnClear");
    if (!input) return;

    const apply = () => {
      state.q = input.value || "";
      state.limit = PAGE_SIZE;
      renderAll();
    };

    // 微防抖
    let t = null;
    input.addEventListener("input", () => {
      if (t) clearTimeout(t);
      t = setTimeout(apply, 120);
    });

    if (clear) {
      clear.addEventListener("click", () => {
        input.value = "";
        apply();
        input.focus();
      });
    }
  }

  function renderAll() {
    const filteredTypes = uniqueTypes(state.items).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
    renderTypeChips(filteredTypes);
    renderCards();
  }

  function init() {
    state.items = getAllItems();
    bindModal();
    bindSearch();

    // 初始渲染
    renderAll();

    // 顶部显示数据量
    const total = $("#totalMeta");
    if (total) total.textContent = `数据库条目：${state.items.length} 条`;
  }

  document.addEventListener("DOMContentLoaded", init);
})();
