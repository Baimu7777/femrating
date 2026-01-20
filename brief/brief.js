(() => {
  const $ = (id) => document.getElementById(id);

  const KEY = "brief_bailai_v1";
  const TAG_KEY = "brief_custom_tags_v1";

function loadCustomTags(){
  try{
    const raw = localStorage.getItem(TAG_KEY);
    const arr = JSON.parse(raw || "[]");
    return Array.isArray(arr) ? arr : [];
  }catch{
    return [];
  }
}

function saveCustomTags(tags){
  localStorage.setItem(TAG_KEY, JSON.stringify(tags));
}


  // 你给的 tag 示例 + 留几个常用槽位（你随时改这个数组）
  const DEFAULT_TAGS = [
    "VGBTQ友好",
    "支持身体剥削",
    "情色合法化等",
    "男凝严重",
    "美化虐女",
    "强制阍育叙事",
    "雌竞/荡妇羞辱",
    "其她（自定义）"
  ];

  const elName = $("name");
  const elType = $("type");
  const elNote = $("note");
  const elTagBar = $("tagBar");
  const elCustomTag = $("customTag");
  const elSearch = $("search");
  const elList = $("list");

  const btnSave = $("btnSave");
  const btnClear = $("btnClear");
  const btnAddTag = $("btnAddTag");
  const btnWipe = $("btnWipe");

  let selectedTags = new Set();
  let customTags = loadCustomTags();
  let data = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function uid() {
    return "b_" + Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
  }

  function renderTags() {
    elTagBar.innerHTML = "";
  
    // ✅ 默认tag + 自定义tag（去重）
    const all = [...DEFAULT_TAGS, ...customTags].filter((t, i, arr) => arr.indexOf(t) === i);
  
    for (const t of all) {
      const chip = document.createElement("div");
      chip.className = "tag-chip" + (selectedTags.has(t) ? " active" : "");
      chip.textContent = t;
  
      chip.addEventListener("click", () => {
        if (selectedTags.has(t)) selectedTags.delete(t);
        else selectedTags.add(t);
        renderTags();
      });
  
      elTagBar.appendChild(chip);
    }
  }

  function clearInput() {
    elName.value = "";
    elType.value = "narrative";
    elNote.value = "";
    elCustomTag.value = "";
    selectedTags = new Set();
    renderTags();
  }

  function typeLabel(v) {
    return v === "film" ? "电影" : (v === "socsci" ? "社科书籍" : "叙事书籍");
  }

  function matchQuery(item, q) {
    if (!q) return true;
    const hay = [
      item.name || "",
      typeLabel(item.type),
      (item.tags || []).join(" "),
      item.note || ""
    ].join(" ").toLowerCase();
    return hay.includes(q.toLowerCase());
  }

  function renderList() {
    const q = (elSearch.value || "").trim();
    const list = data
      .slice()
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
      .filter((x) => matchQuery(x, q));

    elList.innerHTML = "";
    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "item";
      empty.textContent = "暂无记录。";
      elList.appendChild(empty);
      return;
    }

    for (const it of list) {
      const card = document.createElement("div");
      card.className = "item";

      const top = document.createElement("div");
      top.className = "item-top";

      const left = document.createElement("div");
      const title = document.createElement("div");
      title.className = "item-title";
      title.textContent = it.name || "（未命名）";
      const meta = document.createElement("div");
      meta.className = "item-meta";
      const dt = it.createdAt ? new Date(it.createdAt) : null;
      meta.textContent = `${typeLabel(it.type)} · ${dt ? dt.toLocaleString() : ""}`;
      left.appendChild(title);
      left.appendChild(meta);

      top.appendChild(left);
      card.appendChild(top);

      if (it.tags && it.tags.length) {
        const tags = document.createElement("div");
        tags.className = "item-tags";
        it.tags.forEach((t) => {
          const s = document.createElement("span");
          s.textContent = t;
          tags.appendChild(s);
        });
        card.appendChild(tags);
      }

      const note = document.createElement("div");
      note.className = "item-note";
      note.textContent = it.note || "";
      card.appendChild(note);

      const actions = document.createElement("div");
      actions.className = "item-actions";

      const del = document.createElement("button");
      del.className = "btn danger";
      del.type = "button";
      del.textContent = "删除";
      del.addEventListener("click", () => {
        if (!confirm("确定删除这条简评？")) return;
        data = data.filter((x) => x.id !== it.id);
        save();
        renderList();
      });

      actions.appendChild(del);
      card.appendChild(actions);

      elList.appendChild(card);
    }
  }

  function addCustomTag() {
    const t = (elCustomTag.value || "").trim();
    if (!t) return;
  
    // ✅ 如果不是默认tag，也不在自定义tag里，就加入自定义tag列表
    const isDefault = DEFAULT_TAGS.includes(t);
    const isCustom = customTags.includes(t);
    if (!isDefault && !isCustom) {
      customTags.push(t);
      saveCustomTags(customTags);
    }
  
    // ✅ 自动选中
    selectedTags.add(t);
  
    elCustomTag.value = "";
    renderTags();
  }
  

  btnAddTag.addEventListener("click", addCustomTag);
  elCustomTag.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomTag();
    }
  });

  btnClear.addEventListener("click", clearInput);

  btnSave.addEventListener("click", () => {
    const name = (elName.value || "").trim();
    const note = (elNote.value || "").trim();
    const type = elType.value;

    if (!name) {
      alert("请先填写名称。");
      return;
    }

    const item = {
      id: uid(),
      name,
      type,
      tags: Array.from(selectedTags),
      note,
      createdAt: Date.now()
    };

    data.push(item);
    save();
    renderList();
    clearInput();
  });

  elSearch.addEventListener("input", renderList);

  btnWipe.addEventListener("click", () => {
    if (!confirm("确定清空本页所有记录？")) return;
    data = [];
    save();
    renderList();
  });

  // boot
  renderTags();
  renderList();
})();
