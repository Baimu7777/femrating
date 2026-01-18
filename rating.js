/* Rating page logic (book/film) — vanilla JS, no build tools.
   Each HTML sets window.PAGE_CONFIG before loading this file. */

   (function(){
    const $ = (sel, root=document) => root.querySelector(sel);
  
    const CFG = window.PAGE_CONFIG || {};
  
    // ---- Question bank selection ----
    // questions.js provides window.QUESTION_BANK = { narrative, socsci, film }.
    // Older pages used window.QUESTIONS / window.SECTION_ORDER.
    // If rating.js keeps reading the legacy globals, every page will fall back to
    // the narrative set (because questions.js sets legacy globals to narrative).
    const BANK = window.QUESTION_BANK || {};
  
    let bankKey = (CFG.questionSet || "").trim();
    if (!bankKey){
      if (CFG.type === "film") bankKey = "film";
      else if (CFG.type === "socsci") bankKey = "socsci";
      else bankKey = "narrative"; // default: narrative books
    }
  
    const picked = BANK[bankKey] || null;
    const QUESTIONS = (picked && Array.isArray(picked.questions)) ? picked.questions : (window.QUESTIONS || []);
    const SECTION_ORDER = (picked && Array.isArray(picked.sectionOrder)) ? picked.sectionOrder : (window.SECTION_ORDER || []);
  
    const NOTES = window.NOTES || {};
    const SECTION_NOTES = window.SECTION_NOTES || {};
    const STORAGE_KEY = CFG.storageKey || "rating_state_v1";
    const NAME_KEY = CFG.nameKey || "rating_name_v1";
    const LINK_KEY = CFG.linkKey || "rating_link_v1";
  
    // DOM
    const contentEl = $("#content");
    const summaryBody = $("#summaryBody");
    const qGrid = $("#qGrid");
    const mainScroll = $("#mainScroll");
    const sideScroll = $("#sideScroll");
  
    // Sidebar: active question indicator (created if missing)
    let activeQLabelEl = $("#activeQLabel");
    if (!activeQLabelEl && sideScroll){
      activeQLabelEl = document.createElement("div");
      activeQLabelEl.id = "activeQLabel";
      activeQLabelEl.className = "active-q-label";
      // Insert right above the question grid
      if (qGrid && qGrid.parentElement === sideScroll) sideScroll.insertBefore(activeQLabelEl, qGrid);
      else sideScroll.appendChild(activeQLabelEl);
    }
  
    // Runtime style patch (keep this in JS so you only need to replace rating.js)
    (function injectSidebarCss(){
      const id = "ratingjs-inline-style";
      if (document.getElementById(id)) return;
      const style = document.createElement("style");
      style.id = id;
      style.textContent = `
        .active-q-label{font-size:12px;color:var(--muted);margin:2px 0 6px;}
        /* make section rows visually separated */
        .qgrid-rows{display:flex;flex-direction:column;gap:10px;}
        .qgrid-row{display:flex;flex-wrap:wrap;gap:8px;}
        .qgrid-row + .qgrid-row{padding-top:8px;border-top:1px dashed rgba(0,0,0,.08);}
        /* active chip hint */
        .chip.active{outline:2px solid rgba(124,58,237,.55);outline-offset:1px;}
      `;
      document.head.appendChild(style);
    })();
  
    const nameInput = $("#entityName");
    const linkInput = $("#entityLink");
  
    const topTitle = $("#topTitle");
    const topSubtitle = $("#topSubtitle");
  
    const toggleRemarks = $("#toggleRemarks");
    const toggleRemarksTop = $("#toggleRemarksTop");
  
    const btnReset = $("#btnReset");
    const btnResetTop = $("#btnResetTop");
    const btnExportJpg = $("#btnExportJpg");
  
    function setText(el, txt){ if (el) el.textContent = txt; }
  
    setText(topTitle, CFG.pageTitle || "评分表");
    setText(topSubtitle, CFG.pageSubtitle || "（占位内容，稍后可改题库）");
  
    // Load query params (optional prefill)
    try{
      const url = new URL(location.href);
      const pn = (url.searchParams.get("name") || "").trim();
      const pl = (url.searchParams.get("link") || "").trim();
      if (pn && nameInput && !nameInput.value) nameInput.value = pn;
      if (pl && linkInput && !linkInput.value) linkInput.value = pl;
    }catch{}
  
    // localStorage for name/link
    if (nameInput){
      nameInput.value = nameInput.value || (localStorage.getItem(NAME_KEY) || "");
      nameInput.addEventListener("input", () => localStorage.setItem(NAME_KEY, nameInput.value));
    }
    if (linkInput){
      linkInput.value = linkInput.value || (localStorage.getItem(LINK_KEY) || "");
      linkInput.addEventListener("input", () => localStorage.setItem(LINK_KEY, linkInput.value));
    }
    const getName = () => (nameInput ? nameInput.value : (localStorage.getItem(NAME_KEY)||"")).trim();
    const getLink = () => (linkInput ? linkInput.value : (localStorage.getItem(LINK_KEY)||"")).trim();
  
    // state
    let state = loadState();
  
    // Display labels in the sidebar (Q1/Q2... per section)
    const qidToDisplayLabel = new Map();
  
    function loadState(){
      try{
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return (parsed && typeof parsed === "object") ? parsed : {};
      }catch{ return {}; }
    }
    function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    function getAnswer(qid){ return state[qid] || { value:null, multi:{}, remark:"" }; }
    function setAnswer(qid, patch){
      state[qid] = { ...getAnswer(qid), ...patch };
      saveState();
      updateAll();
    }
  
    // scoring
    function computeQuestionScore(q){
      const a = getAnswer(q.id);
      if (q.type === "multi"){
        const selected = Object.entries(a.multi || {}).filter(([_,v])=>!!v).map(([k])=>k);
        if (!selected.length) return null;
        let sum = 0;
        for (const label of selected){
          const opt = (q.options||[]).find(o=>o.label===label);
          if (opt) sum += Number(opt.value);
        }
        if (q.special === "single_zero_cap4"){
          if (selected.length === 1) sum = 0;
          if (sum > 4) sum = 4;
        }
        if (q.special === "single_zero_cap-4"){
          if (selected.length === 1) sum = 0;
          if (sum < -4) sum = -4;
        }
        return sum;
      }
      if (a.value === null || a.value === undefined) return null;
      const n = Number(a.value);
      return Number.isFinite(n) ? n : null;
    }
  
    function computeTotals(){
      const bySection = {};
      for (const s of SECTION_ORDER) bySection[s] = 0;
      let total = 0;
      for (const q of QUESTIONS){
        const v = computeQuestionScore(q);
        if (typeof v === "number"){
          total += v;
          bySection[q.section] = (bySection[q.section] || 0) + v;
        }
      }
      return { total, bySection };
    }
  
    function sectionAnchorId(section){
      return "sec-" + SECTION_ORDER.indexOf(section);
    }
  
    // render
    function render(){
      contentEl.innerHTML = "";
  
      for (const section of SECTION_ORDER){
        const qs = QUESTIONS.filter(q => q.section === section);
        if (!qs.length) continue;
  
        const sec = document.createElement("section");
        sec.className = "sec";
        sec.id = sectionAnchorId(section);
  
        const h2 = document.createElement("h2");
        h2.className = "section-title";
        h2.textContent = section;
        sec.appendChild(h2);
  
        const sn = (SECTION_NOTES[section] || []).map(n => NOTES[n]).filter(Boolean);
        if (sn.length){
          const p = document.createElement("div");
          p.className = "section-note";
          p.textContent = "说明：" + sn.join(" ");
          sec.appendChild(p);
        }
  
        for (const q of qs){
          const block = document.createElement("div");
          block.className = "qblock";
          block.id = q.id;
  
          const title = document.createElement("div");
          title.className = "qtitle";
          title.textContent = q.title;
          block.appendChild(title);
  
          const row = document.createElement("div");
          row.className = "qrow";
  
          const btnGroup = document.createElement("div");
          btnGroup.className = "btn-group";
  
          const a = getAnswer(q.id);
  
          if (q.type === "single"){
            for (const opt of (q.options || [])){
              const b = document.createElement("button");
              b.type = "button";
              b.className = "opt-btn";
              b.textContent = opt.label;
              b.dataset.qid = q.id;
              b.dataset.kind = "single";
              b.dataset.value = String(opt.value);
              if (a.value === opt.value) b.classList.add("active");
              b.addEventListener("click", () => {
                const cur = getAnswer(q.id);
                const next = (cur.value === opt.value) ? null : opt.value;
                setAnswer(q.id, { value: next });
              });
              btnGroup.appendChild(b);
            }
          } else if (q.type === "scale"){
            for (let v=q.min; v<=q.max; v+=(q.step||1)){
              const b = document.createElement("button");
              b.type = "button";
              b.className = "opt-btn small";
              b.textContent = String(v);
              b.dataset.qid = q.id;
              b.dataset.kind = "single";
              b.dataset.value = String(v);
              if (a.value === v) b.classList.add("active");
              b.addEventListener("click", () => {
                const cur = getAnswer(q.id);
                const next = (cur.value === v) ? null : v;
                setAnswer(q.id, { value: next });
              });
              btnGroup.appendChild(b);
            }
          } else if (q.type === "multi"){
            for (const opt of (q.options || [])){
              const b = document.createElement("button");
              b.type = "button";
              b.className = "opt-btn";
              b.textContent = opt.label;
              b.dataset.qid = q.id;
              b.dataset.kind = "multi";
              b.dataset.label = opt.label;
  
              const on = !!(a.multi && a.multi[opt.label]);
              if (on) b.classList.add("active");
  
              b.addEventListener("click", () => {
                const cur = getAnswer(q.id);
                const nextMulti = { ...(cur.multi || {}) };
                nextMulti[opt.label] = !nextMulti[opt.label];
                setAnswer(q.id, { multi: nextMulti });
              });
              btnGroup.appendChild(b);
            }
          }
  
          const score = document.createElement("div");
          score.className = "score";
          score.dataset.scoreFor = q.id;
  
          const remark = document.createElement("div");
          remark.className = "remark";
          remark.dataset.remarkFor = q.id;
  
          const ta = document.createElement("textarea");
          ta.placeholder = "评定说明或补充";
          ta.value = a.remark || "";
          ta.addEventListener("input", () => {
            const cur = getAnswer(q.id);
            state[q.id] = { ...cur, remark: ta.value };
            saveState();
          });
          remark.appendChild(ta);
  
          row.appendChild(btnGroup);
          row.appendChild(score);
          row.appendChild(remark);
          block.appendChild(row);
  
          if (q.note){
            const spec = document.createElement("div");
            spec.className = "spec";
            spec.textContent = "说明：" + q.note;
            block.appendChild(spec);
          }
  
          sec.appendChild(block);
        }
  
        contentEl.appendChild(sec);
      }
  
      // chips (grouped by section; each section starts from Q1)
      qidToDisplayLabel.clear();
      qGrid.innerHTML = "";
  
      const rows = document.createElement("div");
      rows.className = "qgrid-rows";
  
      for (const section of SECTION_ORDER){
        const qs = QUESTIONS.filter(q => q.section === section);
        if (!qs.length) continue;
  
        const row = document.createElement("div");
        row.className = "qgrid-row";
        row.dataset.section = section;
  
        qs.forEach((q, idx) => {
          const label = `Q${idx + 1}`;
          qidToDisplayLabel.set(q.id, label);
  
          const chip = document.createElement("div");
          chip.className = "chip";
          chip.textContent = label;
          chip.dataset.qid = q.id;
          chip.dataset.display = label;
          chip.addEventListener("click", () => {
            const el = document.getElementById(q.id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
          row.appendChild(chip);
        });
  
        rows.appendChild(row);
      }
  
      qGrid.appendChild(rows);
    }
  
    // updates
    function updateSummary(){
      const { total, bySection } = computeTotals();
      summaryBody.innerHTML = "";
  
      function addRow(label, val, jumpSection=null){
        const tr = document.createElement("tr");
        if (jumpSection){
          tr.classList.add("jump");
          tr.title = "点击跳转到该分区";
          tr.addEventListener("click", () => {
            const id = sectionAnchorId(jumpSection);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
          });
        }
        const td1 = document.createElement("td");
        td1.textContent = label;
        const td2 = document.createElement("td");
        td2.textContent = String(val);
        tr.appendChild(td1);
        tr.appendChild(td2);
        summaryBody.appendChild(tr);
      }
  
      addRow("总分", total);
      for (const s of SECTION_ORDER) addRow(s, bySection[s] ?? 0, s);
    }
  
    function updateScoresAndChips(){
      for (const q of QUESTIONS){
        const v = computeQuestionScore(q);
        const el = document.querySelector(`[data-score-for="${q.id}"]`);
        if (el) el.textContent = (typeof v === "number") ? String(v) : "0";
      }
      for (const chip of document.querySelectorAll(".chip")){
        const qid = chip.dataset.qid;
        const q = QUESTIONS.find(x => x.id === qid);
        const v = q ? computeQuestionScore(q) : null;
        chip.classList.toggle("answered", typeof v === "number");
      }
    }
  
    function updateButtonStates(){
      const btns = document.querySelectorAll(".opt-btn[data-qid]");
      for (const b of btns){
        const qid = b.dataset.qid;
        const kind = b.dataset.kind;
        const ans = getAnswer(qid);
  
        let on = false;
        if (kind === "single"){
          const v = Number(b.dataset.value);
          on = (ans.value === v);
        } else if (kind === "multi"){
          const label = b.dataset.label;
          on = !!(ans.multi && ans.multi[label]);
        }
        b.classList.toggle("active", on);
      }
    }
  
    function remarkToggleChecked(){
      const top = toggleRemarksTop;
      const side = toggleRemarks;
      if (top) return !!top.checked;
      return !!(side && side.checked);
    }
    function setRemarkToggleChecked(val){
      if (toggleRemarksTop) toggleRemarksTop.checked = val;
      if (toggleRemarks) toggleRemarks.checked = val;
    }
    function applyRemarkToggle(){
      const show = remarkToggleChecked();
      document.querySelectorAll(".remark").forEach(el => el.classList.toggle("hidden", !show));
    }
  
    function updateActiveChipByScroll(){
      const rectMain = mainScroll.getBoundingClientRect();
      let best = null;
      let bestDist = Infinity;
  
      for (const q of QUESTIONS){
        const el = document.getElementById(q.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top - rectMain.top - 20);
        if (r.bottom > rectMain.top && r.top < rectMain.bottom){
          if (dist < bestDist){ bestDist = dist; best = q.id; }
        }
      }
      document.querySelectorAll(".chip").forEach(ch => ch.classList.toggle("active", ch.dataset.qid === best));
  
      // show current question label (e.g., 当前：Q3)
      if (activeQLabelEl){
        if (!best){
          activeQLabelEl.textContent = "";
        } else {
          const chip = document.querySelector(`.chip[data-qid="${best}"]`);
          const label = (chip && chip.dataset.display) ? chip.dataset.display : (qidToDisplayLabel.get(best) || best);
          activeQLabelEl.textContent = `当前：${label}`;
        }
      }
    }
  
    function updateAll(){
      updateSummary();
      updateScoresAndChips();
      updateButtonStates();
      applyRemarkToggle();
    }
  
    // toggle events
    if (toggleRemarks){
      toggleRemarks.addEventListener("change", () => {
        setRemarkToggleChecked(toggleRemarks.checked);
        applyRemarkToggle();
      });
    }
    if (toggleRemarksTop){
      toggleRemarksTop.addEventListener("change", () => {
        setRemarkToggleChecked(toggleRemarksTop.checked);
        applyRemarkToggle();
      });
    }
  
    // reset
    function doResetAll(){
      if (!confirm("确定清空所有得分与备注吗？")) return;
      state = {};
      localStorage.removeItem(STORAGE_KEY);
      render();
      updateAll();
    }
    if (btnReset) btnReset.addEventListener("click", doResetAll);
    if (btnResetTop) btnResetTop.addEventListener("click", doResetAll);
  
    // export JSON (for manual database curation)
    function downloadText(text, filename, mime="application/json"){
      const blob = new Blob([text], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    }
  
    
    async function exportAsJpg(){
      // Requires html2canvas (loaded from CDN in HTML)
      if (typeof html2canvas !== "function"){
        alert("导出失败：缺少 html2canvas。请检查网络或脚本是否加载成功。");
        return;
      }
      const target = document.getElementById("exportCapture") || document.querySelector(".app") || document.body;
      const title = (getName() || (CFG.type === "film" ? "未命名影视" : "未命名书籍")).trim();
      const safe = title.replace(/[\\\/:"*?<>|]+/g, "_").slice(0, 60) || "export";
      const stamp = new Date().toISOString().slice(0,10);
      const filename = `${CFG.type || "item"}_${safe}_${stamp}.jpg`;
  
      // temporarily add class to avoid hover/active weirdness
      document.documentElement.classList.add("is-exporting");
      try{
        const canvas = await html2canvas(target, {
          backgroundColor: "#ffffff",
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false
        });
  
        const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", 0.92));
        if (!blob){
          alert("导出失败：无法生成图片。");
          return;
        }
  
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      } catch (e){
        console.error(e);
        alert("导出失败：请打开控制台查看错误信息。");
      } finally {
        document.documentElement.classList.remove("is-exporting");
      }
    }
  
  // mobile: move entity card to top host
    const MQL = window.matchMedia("(max-width: 680px)");
    function placeEntityCard(){
      const card = document.querySelector(".card.entity-card");
      const host = document.getElementById("mobileEntityHost");
      if (!card || !host || !sideScroll) return;
  
      if (MQL.matches){
        if (card.parentElement !== host) host.appendChild(card);
      } else {
        if (card.parentElement !== sideScroll) sideScroll.insertBefore(card, sideScroll.children[1] || sideScroll.firstElementChild);
      }
    }
    if (MQL.addEventListener) MQL.addEventListener("change", placeEntityCard);
    else if (MQL.addListener) MQL.addListener(placeEntityCard);
    window.addEventListener("orientationchange", placeEntityCard);
  
      if (btnExportJpg) btnExportJpg.addEventListener("click", exportAsJpg);
  
  // boot
    render();
    setRemarkToggleChecked(remarkToggleChecked());
    updateAll();
    mainScroll.addEventListener("scroll", () => window.requestAnimationFrame(updateActiveChipByScroll));
    updateActiveChipByScroll();
    placeEntityCard();
  })();