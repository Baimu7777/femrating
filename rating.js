/* Rating page logic (book/film) — vanilla JS, no build tools.
   Each HTML sets window.PAGE_CONFIG before loading this file. */

   (function(){
    const $ = (sel, root=document) => root.querySelector(sel);
  
    const QUESTIONS = window.QUESTIONS || [];
    const NOTES = window.NOTES || {};
    const SECTION_NOTES = window.SECTION_NOTES || {};
    const SECTION_ORDER = window.SECTION_ORDER || [];
  
    const CFG = window.PAGE_CONFIG || {};
    const STORAGE_KEY = CFG.storageKey || "rating_state_v1";
    const NAME_KEY = CFG.nameKey || "rating_name_v1";
    const LINK_KEY = CFG.linkKey || "rating_link_v1";
  
    // DOM
    const contentEl = $("#content");
    const summaryBody = $("#summaryBody");
    const qGrid = $("#qGrid");
    const mainScroll = $("#mainScroll");
    const sideScroll = $("#sideScroll");
  
    const nameInput = $("#entityName");
    const linkInput = $("#entityLink");
  
    const topTitle = $("#topTitle");
    const topSubtitle = $("#topSubtitle");
  
    const toggleRemarks = $("#toggleRemarks");
    const toggleRemarksTop = $("#toggleRemarksTop");
  
    const btnReset = $("#btnReset");
    const btnResetTop = $("#btnResetTop");
    const btnExportJpg = $("#btnExportJpg");
  
    // extra export button (multi jpg)
    let btnExportJpgMulti = $("#btnExportJpgMulti");
    if (!btnExportJpgMulti && btnExportJpg && btnExportJpg.parentElement){
      btnExportJpgMulti = document.createElement("button");
      btnExportJpgMulti.type = "button";
      btnExportJpgMulti.id = "btnExportJpgMulti";
      btnExportJpgMulti.textContent = "分4张导出";
      btnExportJpgMulti.style.marginLeft = "8px";
      btnExportJpg.parentElement.insertBefore(btnExportJpgMulti, btnExportJpg.nextSibling);
    }
  
    // small CSS helpers: keep side panel independent scroll + Q chips grouped by section
    function injectSidebarCss(){
      const id = "qgridEnhanceStyle";
      if (document.getElementById(id)) return;
  
      const topbar = document.querySelector('.topbar');
      const topbarH = topbar ? Math.ceil(topbar.getBoundingClientRect().height) : 52;
      document.documentElement.style.setProperty('--topbarH', topbarH + 'px');
  
      const style = document.createElement('style');
      style.id = id;
      style.textContent = `
        .active-q-label{font-size:12px;color:var(--muted);margin:6px 0 6px;}
        .qgrid-rows{display:flex;flex-direction:column;gap:10px;}
        .qgrid-row{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px;}
        .qgrid-row + .qgrid-row{padding-top:8px;border-top:1px dashed rgba(0,0,0,.08);}
        @media (min-width:1101px){
          html,body{height:100% !important; overflow:hidden !important;}
          .app{height:calc(100vh - var(--topbarH,52px)) !important; align-items:stretch !important;}
          .main{height:100% !important; overflow:auto !important;}
          .side{height:100% !important; overflow:auto !important;}
        }
      `;
      document.head.appendChild(style);
    }
    injectSidebarCss();
  
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
    let qidToLabel = {};
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
      // chips (grouped by section, labels reset to Q1.. per section)
      if (qGrid){
        qGrid.innerHTML = "";
        qidToLabel = {};
  
        // active label
        let activeLabel = document.getElementById('activeQLabel');
        if (!activeLabel){
          activeLabel = document.createElement('div');
          activeLabel.id = 'activeQLabel';
          activeLabel.className = 'active-q-label';
          activeLabel.textContent = '当前：—';
          if (qGrid.parentElement) qGrid.parentElement.insertBefore(activeLabel, qGrid);
        }
  
        const wrap = document.createElement('div');
        wrap.className = 'qgrid-rows';
  
        const bySection = new Map();
        for (const s of SECTION_ORDER) bySection.set(s, []);
        for (const q of QUESTIONS){
          const s = q.section || '未分区';
          if (!bySection.has(s)) bySection.set(s, []);
          bySection.get(s).push(q);
        }
  
        const sectionsInOrder = SECTION_ORDER.length ? SECTION_ORDER : Array.from(bySection.keys());
        for (const s of sectionsInOrder){
          const list = bySection.get(s) || [];
          if (!list.length) continue;
  
          const row = document.createElement('div');
          row.className = 'qgrid-row';
  
          list.forEach((q, idx) => {
            const chip = document.createElement('div');
            chip.className = 'chip';
            const label = 'Q' + (idx + 1);
            chip.textContent = label;
            chip.dataset.qid = q.id;
            qidToLabel[q.id] = label;
  
            chip.addEventListener('click', () => {
              const el = document.getElementById(q.id);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            row.appendChild(chip);
          });
  
          wrap.appendChild(row);
        }
  
        qGrid.appendChild(wrap);
      }
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
      const lab = document.getElementById('activeQLabel');
      if (lab) lab.textContent = '当前：' + (best ? (qidToLabel[best] || best) : '—');
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
  
    async function captureExportCanvas(){
      if (typeof html2canvas !== 'function'){
        alert('导出失败：缺少 html2canvas。请检查网络或脚本是否加载成功。');
        return null;
      }
      const target = document.getElementById('exportCapture') || document.querySelector('.app') || document.body;
  
      document.documentElement.classList.add('is-exporting');
      try{
        const canvas = await html2canvas(target, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false
        });
        return canvas;
      } catch (e){
        console.error(e);
        alert('导出失败：请打开控制台查看错误信息。');
        return null;
      } finally {
        document.documentElement.classList.remove('is-exporting');
      }
    }
  
    function makeSafeName(){
      const title = (getName() || (CFG.type === 'film' ? '未命名影视' : '未命名书籍')).trim();
      const safe = title.replace(/[\\\/":*?<>|]+/g, '_').slice(0, 60) || 'export';
      const stamp = new Date().toISOString().slice(0,10);
      return { title, safe, stamp };
    }
  
    function triggerDownloadBlob(blob, filename){
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }
  
    async function canvasToBlob(canvas){
      return await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.92));
    }
  
    async function exportJpgSingle(){
      const canvas = await captureExportCanvas();
      if (!canvas) return;
      const { safe, stamp } = makeSafeName();
      const filename = `${CFG.type || 'item'}_${safe}_${stamp}.jpg`;
      const blob = await canvasToBlob(canvas);
      if (!blob){ alert('导出失败：无法生成图片。'); return; }
      triggerDownloadBlob(blob, filename);
    }
  
    async function exportJpgSplit(parts=4){
      const canvas = await captureExportCanvas();
      if (!canvas) return;
  
      const { safe, stamp } = makeSafeName();
      const base = `${CFG.type || 'item'}_${safe}_${stamp}`;
  
      const w = canvas.width;
      const h = canvas.height;
      const partH = Math.ceil(h / parts);
  
      for (let i=0; i<parts; i++){
        const sy = i * partH;
        const sh = Math.min(partH, h - sy);
        if (sh <= 0) break;
  
        const piece = document.createElement('canvas');
        piece.width = w;
        piece.height = sh;
        const ctx = piece.getContext('2d');
        ctx.drawImage(canvas, 0, sy, w, sh, 0, 0, w, sh);
  
        const blob = await canvasToBlob(piece);
        if (!blob){
          alert(`导出失败：第 ${i+1} 张无法生成图片。`);
          return;
        }
        triggerDownloadBlob(blob, `${base}_p${i+1}of${parts}.jpg`);
        await new Promise(r => setTimeout(r, 350));
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
  
      if (btnExportJpg) btnExportJpg.addEventListener('click', exportJpgSingle);
      if (btnExportJpgMulti) btnExportJpgMulti.addEventListener('click', () => exportJpgSplit(4));
  
  // boot
    render();
    setRemarkToggleChecked(remarkToggleChecked());
    updateAll();
    mainScroll.addEventListener("scroll", () => window.requestAnimationFrame(updateActiveChipByScroll));
    updateActiveChipByScroll();
    placeEntityCard();
  })();