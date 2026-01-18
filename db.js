/* Database search page — reads ./ratings.json (manually curated). */
(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  const qInput = $("#q");
  const resultsEl = $("#results");
  const countEl = $("#count");
  const emptyEl = $("#empty");

  let all = [];
  let filterType = "all"; // all|narrative|socsci|film

  function norm(s){
    return (s || "")
      .toString()
      .trim()
      .toLowerCase();
  }

  function prettyType(t){
    if (t === "narrative") return "叙事书籍";
    if (t === "socsci") return "社科书籍";
    if (t === "film") return "影视";
    // backward compat
    if (t === "book") return "书籍";
    return t;
  }

  function safeText(s){
    return (s || "").toString();
  }

  function parseDate(s){
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }

  function formatDate(s){
    const d = parseDate(s);
    if (!d) return "";
    try{
      return d.toLocaleString("zh-CN", { year:"numeric", month:"2-digit", day:"2-digit" });
    }catch{
      return d.toISOString().slice(0,10);
    }
  }

  function buildOpenRatingUrl(item){
    const t = item.type;
    const base = (t === "film") ? "film.html" : (t === "socsci" ? "socsci.html" : "index.html");
    const url = new URL(base, location.href);
    if (item.title) url.searchParams.set("name", item.title);
    if (item.link) url.searchParams.set("link", item.link);
    return url.toString();
  }

  function render(){
    const q = norm(qInput.value);
    let list = all.slice();

    if (filterType !== "all"){
      list = list.filter(x => x.type === filterType);
    }

    if (q){
      list = list.filter(x => {
        const hay = norm([x.title, x.link, x.id].filter(Boolean).join(" "));
        return hay.includes(q);
      });
    }

    // default sort: updatedAt desc, fallback to title
    list.sort((a,b) => {
      const da = parseDate(a.updatedAt)?.getTime() || 0;
      const db = parseDate(b.updatedAt)?.getTime() || 0;
      if (db !== da) return db - da;
      return safeText(a.title).localeCompare(safeText(b.title), "zh");
    });

    resultsEl.innerHTML = "";
    setText(countEl, String(list.length));

    emptyEl.style.display = list.length ? "none" : "";

    for (const item of list){
      const card = document.createElement("div");
      card.className = "db-card";

      const h = document.createElement("h3");
      h.textContent = item.title || "(未命名)";
      card.appendChild(h);

      const meta = document.createElement("div");
      meta.className = "db-meta";

      const b1 = document.createElement("span");
      b1.className = "badge";
      b1.textContent = prettyType(item.type);
      meta.appendChild(b1);

      const b2 = document.createElement("span");
      b2.className = "badge";
      b2.textContent = "总分：" + (typeof item.totalScore === "number" ? item.totalScore : "");
      meta.appendChild(b2);

      const dt = document.createElement("span");
      dt.textContent = item.updatedAt ? ("更新：" + formatDate(item.updatedAt)) : "";
      meta.appendChild(dt);

      card.appendChild(meta);

      const actions = document.createElement("div");
      actions.className = "db-actions";

      if (item.link){
        const a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "外链";
        actions.appendChild(a);
      }

      const openRating = document.createElement("a");
      openRating.href = buildOpenRatingUrl(item);
      openRating.className = "primary";
      openRating.textContent = "在评分表中打开";
      actions.appendChild(openRating);

      card.appendChild(actions);

      resultsEl.appendChild(card);
    }
  }

  function setText(el, t){ if (el) el.textContent = t; }

  async function load(){
    try{
      const res = await fetch("./ratings.json", { cache: "no-store" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error("ratings.json 不是数组");
      all = data;
    }catch(e){
      all = [];
      console.warn("Failed to load ratings.json:", e);
      $("#loadError").style.display = "";
    }
    render();
  }

  // filter buttons
  $$("#filter button").forEach(btn => {
    btn.addEventListener("click", () => {
      $$("#filter button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterType = btn.dataset.type;
      render();
    });
  });

  qInput.addEventListener("input", render);

  load();
})();