/* Rating page logic (book/film) — vanilla JS, no build tools.
   Each HTML sets window.PAGE_CONFIG before loading this file.
   questions.js should expose per-type question sets. */

   (function () {
    const $ = (sel, root = document) => root.querySelector(sel);
  
    const CFG = window.PAGE_CONFIG || {};
    const TYPE = String(CFG.type || "narrative").toLowerCase(); // narrative | socsci | film
  
    // ---- Pick question set by page type (NO mixing) ----
    function pickQuestionSet() {
      // Newest structure used by questions.js in this project:
      // window.QUESTION_BANK = { narrative:{sectionOrder,questions}, socsci:{...}, film:{...} }
      const bankKey = (CFG.questionSet || TYPE || "narrative").toString().toLowerCase();
      if (window.QUESTION_BANK && window.QUESTION_BANK[bankKey]) {
        const b = window.QUESTION_BANK[bankKey] || {};
        return {
          QUESTIONS: Array.isArray(b.questions) ? b.questions : [],
          SECTION_ORDER: Array.isArray(b.sectionOrder) ? b.sectionOrder : [],
          NOTES: b.notes || {},
          SECTION_NOTES: b.sectionNotes || {},
        };
      }

      // Preferred structure:
      // window.QUESTION_SETS = { narrative:{QUESTIONS,SECTION_ORDER,NOTES,SECTION_NOTES}, socsci:{...}, film:{...} }
      if (window.QUESTION_SETS && window.QUESTION_SETS[TYPE]) return window.QUESTION_SETS[TYPE];
  
      // Fallbacks (try common names)
      const map = {
        narrative: {
          QUESTIONS:
            window.QUESTIONS_NARRATIVE || window.NARRATIVE_QUESTIONS || window.QUESTIONS || [],
          SECTION_ORDER:
            window.SECTION_ORDER_NARRATIVE || window.NARRATIVE_SECTION_ORDER || window.SECTION_ORDER || [],
          NOTES: window.NOTES_NARRATIVE || window.NOTES || {},
          SECTION_NOTES: window.SECTION_NOTES_NARRATIVE || window.SECTION_NOTES || {},
        },
        socsci: {
          QUESTIONS:
            window.QUESTIONS_SOCCSCI || window.SOCCSCI_QUESTIONS || window.SOCCSCI_QUESTIONS || [],
          SECTION_ORDER:
            window.SECTION_ORDER_SOCCSCI || window.SOCCSCI_SECTION_ORDER || [],
          NOTES: window.NOTES_SOCCSCI || window.NOTES || {},
          SECTION_NOTES: window.SECTION_NOTES_SOCCSCI || window.SECTION_NOTES || {},
        },
        film: {
          QUESTIONS: window.QUESTIONS_FILM || window.FILM_QUESTIONS || [],
          SECTION_ORDER: window.SECTION_ORDER_FILM || window.FILM_SECTION_ORDER || [],
          NOTES: window.NOTES_FILM || window.NOTES || {},
          SECTION_NOTES: window.SECTION_NOTES_FILM || window.SECTION_NOTES || {},
        },
      };
  
      return map[TYPE] || map.narrative;
    }
  
    const SET = pickQuestionSet();
    const QUESTIONS = Array.isArray(SET.QUESTIONS) ? SET.QUESTIONS : [];
    const SECTION_ORDER = Array.isArray(SET.SECTION_ORDER) ? SET.SECTION_ORDER : [];
    const NOTES = SET.NOTES || {};
    const SECTION_NOTES = SET.SECTION_NOTES || {};

    // Per-question notes map (empty by default; you can fill later)
    // window.QUESTION_NOTES_MAP = { narrative:{Q1:"..."}, socsci:{...}, film:{...} }
    function getQuestionNote(q){
      const map = (window.QUESTION_NOTES_MAP && window.QUESTION_NOTES_MAP[TYPE]) ? window.QUESTION_NOTES_MAP[TYPE] : {};
      return (q && (q.note || map[q.id])) ? String(q.note || map[q.id]) : "";
    }
  
    // ---- storage keys ----
    const STORAGE_KEY = CFG.storageKey || `rating_state_${TYPE}_v1`;
    const NAME_KEY = CFG.nameKey || `rating_name_${TYPE}_v1`;
    const LINK_KEY = CFG.linkKey || `rating_link_${TYPE}_v1`;
  
    // ---- DOM ----
    const contentEl = $("#content");
    const summaryBody = $("#summaryBody");
    const qGrid = $("#qGrid");
    const mainScroll = $("#mainScroll") || document.querySelector(".main");
    const sideScroll = $("#sideScroll") || document.querySelector(".side");
    const sourceNoteEl = document.querySelector(".source-note");
  
    const nameInput = $("#entityName");
    const linkInput = $("#entityLink");
  
    const topTitle = $("#topTitle");
    const topSubtitle = $("#topSubtitle");
  
    const toggleRemarks = $("#toggleRemarks");
    const toggleRemarksTop = $("#toggleRemarksTop");
  
    const btnReset = $("#btnReset");
    const btnResetTop = $("#btnResetTop");
    const btnExportJpg = $("#btnExportJpg");
  
    // multi export
    let btnExportJpgMulti = $("#btnExportJpgMulti");
    if (!btnExportJpgMulti && btnExportJpg && btnExportJpg.parentElement) {
      btnExportJpgMulti = document.createElement("button");
      btnExportJpgMulti.type = "button";
      btnExportJpgMulti.id = "btnExportJpgMulti";
      btnExportJpgMulti.textContent = "分4张导出";
      btnExportJpgMulti.style.marginLeft = "8px";
      btnExportJpg.parentElement.insertBefore(btnExportJpgMulti, btnExportJpg.nextSibling);
    }
  
    function setText(el, txt) {
      if (el) el.textContent = txt;
    }
    setText(topTitle, CFG.pageTitle || "评分表");
    setText(topSubtitle, CFG.pageSubtitle || "（占位内容）");
    if (sourceNoteEl) setText(sourceNoteEl, CFG.exportSource || "");
  
    // ---- ensure sidebar Q area does NOT inherit `.grid` 8-col layout ----
    function injectEnhanceCss() {
      const id = "ratingEnhanceStyle";
      if (document.getElementById(id)) return;
  
      const style = document.createElement("style");
      style.id = id;
      style.textContent = `
        /* kill old 8-col grid on qGrid (this is why your Q text stacked/overlapped) */
        #qGrid{ display:block !important; }
        #qGrid.grid{ display:block !important; }
  
        .active-q-label{ font-size:12px; color:var(--muted); margin: 8px 0 10px; }
  
        .qnav-section{ padding-top:10px; margin-top:10px; border-top:1px dashed rgba(0,0,0,.10); }
        .qnav-section:first-child{ border-top:none; margin-top:0; padding-top:0; }
  
        .qnav-title{
          font-size:12px;
          font-weight:900;
          color:var(--muted);
          margin:0 0 8px;
        }
        .qnav-chips{
          display:flex;
          flex-wrap:wrap;
          gap:8px;
        }
        .qnav-chips .chip{
          min-width:44px;
          height:28px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          white-space:nowrap;
        }
  
        /* export stage (match your example image layout) */
        .export-stage{
          position: fixed;
          left: -10000px;
          top: 0;
          width: 1200px;
          padding: 26px 28px 30px;
          background: #fff;
          color: var(--text);
          font-family: inherit;
        }
        .export-top{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap: 14px;
        }
        .export-top-left{
          font-size: 14px;
          color:#111827;
          font-weight: 900;
          letter-spacing: .2px;
        }
        .export-top-right{
          text-align:right;
          font-size: 12px;
          color:#6b7280;
          line-height: 1.4;
          white-space: nowrap;
        }
        .export-name{
          margin: 10px 0 0;
          text-align:center;
          font-size: 44px;
          font-weight: 900;
          letter-spacing: .5px;
        }
        .export-total-line{
          margin: 8px 0 18px;
          text-align:center;
          font-size: 18px;
          font-weight: 900;
          color:#111827;
        }
        .export-table{
          width:100%;
          border-collapse:collapse;
          font-size: 13px;
        }
        .export-table th, .export-table td{
          border: 1px solid #e5e7eb;
          padding: 9px 10px;
          vertical-align: top;
        }
        .export-table th{
          background: #f6f0dc;
          text-align:center;
          font-weight: 900;
        }
        .export-sec-row td{
          background: #e7f0ff;
          font-weight: 900;
          text-align:left;
        }
        .export-score{
          text-align:center;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
          font-weight: 900;
        }
        .export-muted{ color:#6b7280; font-size: 12px; line-height: 1.35; margin-top:4px;}
      `;
      document.head.appendChild(style);
    }
    injectEnhanceCss();
  
    // ---- IMPORTANT: entity name/link should NOT be prefilled ----
    // (No URL params prefill; no localStorage persist)
    if (nameInput) nameInput.value = "";
    if (linkInput) linkInput.value = "";
    const getName = () => (nameInput ? nameInput.value : "").trim();
    const getLink = () => (linkInput ? linkInput.value : "").trim();
  
    // ---- state ----
    let state = loadState();
    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
      } catch {
        return {};
      }
    }
    function saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    function getAnswer(qid) {
      return state[qid] || { value: null, multi: {}, remark: "" };
    }
    function setAnswer(qid, patch) {
      state[qid] = { ...getAnswer(qid), ...patch };
      saveState();
      updateAll();
    }
  
    // ---- scoring ----
    function computeQuestionScore(q) {
      const a = getAnswer(q.id);
      if (q.type === "multi") {
        const selected = Object.entries(a.multi || {})
          .filter(([_, v]) => !!v)
          .map(([k]) => k);
        if (!selected.length) return null;
  
        let sum = 0;
        for (const label of selected) {
          const opt = (q.options || []).find((o) => o.label === label);
          if (opt) sum += Number(opt.value);
        }
  
        if (q.special === "single_zero_cap4") {
          if (selected.length === 1) sum = 0;
          if (sum > 4) sum = 4;
        }
        if (q.special === "single_zero_cap-4") {
          if (selected.length === 1) sum = 0;
          if (sum < -4) sum = -4;
        }
        return sum;
      }
  
      if (a.value === null || a.value === undefined) return null;
      const n = Number(a.value);
      return Number.isFinite(n) ? n : null;
    }
  
    function computeTotals() {
      const bySection = {};
      for (const s of SECTION_ORDER) bySection[s] = 0;
      let total = 0;
  
      for (const q of QUESTIONS) {
        const v = computeQuestionScore(q);
        if (typeof v === "number") {
          total += v;
          bySection[q.section] = (bySection[q.section] || 0) + v;
        }
      }
      return { total, bySection };
    }
  
    function sectionAnchorId(section) {
      return "sec-" + SECTION_ORDER.indexOf(section);
    }
  
    // ---- render main ----
    function render() {
      if (!contentEl) return;
      contentEl.innerHTML = "";
  
      for (const section of SECTION_ORDER) {
        const qs = QUESTIONS.filter((q) => q.section === section);
        if (!qs.length) continue;
  
        const sec = document.createElement("section");
        sec.className = "sec";
        sec.id = sectionAnchorId(section);
  
        const h2 = document.createElement("h2");
        h2.className = "section-title";
        h2.textContent = section;
        sec.appendChild(h2);
  
        const sn = (SECTION_NOTES[section] || []).map((n) => NOTES[n]).filter(Boolean);
        if (sn.length) {
          const p = document.createElement("div");
          p.className = "section-note";
          p.textContent = "说明：" + sn.join(" ");
          sec.appendChild(p);
        }
  
        for (const q of qs) {
          const block = document.createElement("div");
          block.className = "qblock";
          block.id = q.id;
  
          const title = document.createElement("div");
          title.className = "qtitle";
          title.textContent = q.title;

          // optional per-question note ("说明")
          const noteText = getQuestionNote(q);
          if (noteText) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "note-btn";
            btn.textContent = "说明";
            btn.addEventListener("click", () => {
              box.classList.toggle("open");
            });
            title.appendChild(btn);

            const box = document.createElement("div");
            box.className = "note-box";
            box.textContent = noteText;
            block.appendChild(title);
            block.appendChild(box);
          } else {
            block.appendChild(title);
          }
  
          const row = document.createElement("div");
          row.className = "qrow";
  
          const btnGroup = document.createElement("div");
          btnGroup.className = "btn-group";
  
          const a = getAnswer(q.id);
  
          if (q.type === "single") {
            for (const opt of q.options || []) {
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
                const next = cur.value === opt.value ? null : opt.value;
                setAnswer(q.id, { value: next });
              });
              btnGroup.appendChild(b);
            }
          } else if (q.type === "multi") {
            for (const opt of q.options || []) {
              const b = document.createElement("button");
              b.type = "button";
              b.className = "opt-btn";
              b.textContent = opt.label;
              b.dataset.qid = q.id;
              b.dataset.kind = "multi";
              b.dataset.label = opt.label;
              if (a.multi && a.multi[opt.label]) b.classList.add("active");
              b.addEventListener("click", () => {
                const cur = getAnswer(q.id);
                const multi = { ...(cur.multi || {}) };
                multi[opt.label] = !multi[opt.label];
                setAnswer(q.id, { multi });
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
  
          // show scoring range (optional)
          if (q.spec) {
            const range = document.createElement("div");
            range.className = "spec";
            range.textContent = q.spec;
            block.appendChild(range);
          }
          sec.appendChild(block);
        }
  
        contentEl.appendChild(sec);
      }
  
      renderQNav();
    }
  
    // ---- Right sidebar Q navigator (grouped by section, restart Q1.. per section) ----
    let qidToLabel = {};
    function renderQNav() {
      if (!qGrid) return;
  
      // IMPORTANT: remove old grid class so it won't force 8-col grid on the whole container
      qGrid.classList.remove("grid");
      qGrid.innerHTML = "";
      qidToLabel = {};
  
      let activeLabel = document.getElementById("activeQLabel");
      if (!activeLabel) {
        activeLabel = document.createElement("div");
        activeLabel.id = "activeQLabel";
        activeLabel.className = "active-q-label";
        activeLabel.textContent = "当前：—";
        qGrid.parentElement && qGrid.parentElement.insertBefore(activeLabel, qGrid);
      }
  
      for (const section of SECTION_ORDER) {
        const list = QUESTIONS.filter((q) => q.section === section);
        if (!list.length) continue;
  
        const sec = document.createElement("div");
        sec.className = "qnav-section";
  
        const title = document.createElement("div");
        title.className = "qnav-title";
        title.textContent = section;
        sec.appendChild(title);
  
        const chips = document.createElement("div");
        chips.className = "qnav-chips";
  
        list.forEach((q, idx) => {
          const chip = document.createElement("div");
          chip.className = "chip";
          const label = "Q" + (idx + 1);
          chip.textContent = label;
          chip.dataset.qid = q.id;
          qidToLabel[q.id] = label;
  
          chip.addEventListener("click", () => {
            const el = document.getElementById(q.id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
  
          chips.appendChild(chip);
        });
  
        sec.appendChild(chips);
        qGrid.appendChild(sec);
      }
    }
  
    // ---- summary ----
    function updateSummary() {
      if (!summaryBody) return;
      const { total, bySection } = computeTotals();
      summaryBody.innerHTML = "";
  
      function addRow(label, val, jumpSection = null) {
        const tr = document.createElement("tr");
        if (jumpSection) {
          tr.classList.add("jump");
          tr.title = "点击跳转到该分区";
          tr.addEventListener("click", () => {
            const id = sectionAnchorId(jumpSection);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
  
    function updateScoresAndChips() {
      for (const q of QUESTIONS) {
        const v = computeQuestionScore(q);
        const el = document.querySelector(`[data-score-for="${q.id}"]`);
        if (el) el.textContent = typeof v === "number" ? String(v) : "0";
      }
      for (const chip of document.querySelectorAll(".chip[data-qid]")) {
        const qid = chip.dataset.qid;
        const q = QUESTIONS.find((x) => x.id === qid);
        const v = q ? computeQuestionScore(q) : null;
        chip.classList.toggle("answered", typeof v === "number");
      }
    }
  
    function updateButtonStates() {
      const btns = document.querySelectorAll(".opt-btn[data-qid]");
      for (const b of btns) {
        const qid = b.dataset.qid;
        const kind = b.dataset.kind;
        const ans = getAnswer(qid);
  
        let on = false;
        if (kind === "single") {
          const v = Number(b.dataset.value);
          on = ans.value === v;
        } else if (kind === "multi") {
          const label = b.dataset.label;
          on = !!(ans.multi && ans.multi[label]);
        }
        b.classList.toggle("active", on);
      }
    }
  
    // ---- remarks toggle ----
    function remarkToggleChecked() {
      if (toggleRemarksTop) return !!toggleRemarksTop.checked;
      if (toggleRemarks) return !!toggleRemarks.checked;
      return true;
    }
    function setRemarkToggleChecked(checked) {
      if (toggleRemarks) toggleRemarks.checked = checked;
      if (toggleRemarksTop) toggleRemarksTop.checked = checked;
      document.documentElement.classList.toggle("hide-remarks", !checked);
  
      for (const r of document.querySelectorAll(".remark")) {
        r.classList.toggle("hidden", !checked);
      }
    }
  
    if (toggleRemarks) toggleRemarks.addEventListener("change", () => setRemarkToggleChecked(remarkToggleChecked()));
    if (toggleRemarksTop) toggleRemarksTop.addEventListener("change", () => setRemarkToggleChecked(remarkToggleChecked()));
  
    // ---- active Q by scroll (show 当前：Qxx) ----
    function updateActiveChipByScroll() {
      const labelEl = document.getElementById("activeQLabel");
      if (!labelEl) return;
  
      const blocks = document.querySelectorAll(".qblock");
      if (!blocks.length) return;
  
      const container = mainScroll || document.documentElement;
      const baseTop = container === document.documentElement ? 0 : container.getBoundingClientRect().top;
  
      let best = null;
      let bestDist = Infinity;
  
      blocks.forEach((b) => {
        const r = b.getBoundingClientRect();
        const dist = Math.abs((r.top - baseTop) - 12);
        if (r.bottom > baseTop + 20 && dist < bestDist) {
          bestDist = dist;
          best = b;
        }
      });
  
      if (!best) return;
      const qid = best.id;
      const show = qidToLabel[qid] || qid;
  
      labelEl.textContent = `当前：${show}`;
  
      for (const chip of document.querySelectorAll(".chip[data-qid]")) {
        chip.classList.toggle("active", chip.dataset.qid === qid);
      }
    }
  
    // ---- reset ----
    function doReset() {
      if (!confirm("确定清空本页所有选项与说明？")) return;
      state = {};
      saveState();
      updateAll();
    }
    if (btnReset) btnReset.addEventListener("click", doReset);
    if (btnResetTop) btnResetTop.addEventListener("click", doReset);
  
    // ---- EXPORT (learn your example): build offscreen export stage ----
    function optionText(q) {
      const a = getAnswer(q.id);
      if (q.type === "single") {
        const opt = (q.options || []).find((o) => Number(o.value) === Number(a.value));
        return opt ? opt.label : "—";
      }
      if (q.type === "multi") {
        const selected = Object.entries(a.multi || {})
          .filter(([_, v]) => !!v)
          .map(([k]) => k);
        return selected.length ? selected.join("、") : "—";
      }
      return "—";
    }
  
    function buildExportStage() {
      const old = document.getElementById("exportStage");
      if (old) old.remove();
  
      const stage = document.createElement("div");
      stage.id = "exportStage";
      stage.className = "export-stage";
  
      const { total, bySection } = computeTotals();
      const name = getName() || (TYPE === "film" ? "未命名影视" : "未命名书籍");

      // top row
      const top = document.createElement("div");
      top.className = "export-top";

      const tl = document.createElement("div");
      tl.className = "export-top-left";
      tl.textContent = (CFG.exportBrand || CFG.pageTitle || "评分表") + " · 3.0";

      const tr = document.createElement("div");
      tr.className = "export-top-right";
      const now = new Date();
      const dt = (() => {
        try {
          return now.toLocaleString("zh-CN", { year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit", hour12:false });
        } catch {
          const p = (n) => String(n).padStart(2,"0");
          return `${now.getFullYear()}/${p(now.getMonth()+1)}/${p(now.getDate())} ${p(now.getHours())}:${p(now.getMinutes())}`;
        }
      })();
      const source = CFG.exportSource || "";
      tr.innerHTML = `${escapeHtml(dt)}${source ? `<br>${escapeHtml(source)}` : ""}`;

      top.appendChild(tl);
      top.appendChild(tr);
      stage.appendChild(top);

      const nm = document.createElement("div");
      nm.className = "export-name";
      nm.textContent = name;
      stage.appendChild(nm);

      const totalLine = document.createElement("div");
      totalLine.className = "export-total-line";
      totalLine.textContent = `总分：${total}`;
      stage.appendChild(totalLine);

      const table = document.createElement("table");
      table.className = "export-table";
      table.innerHTML = `
        <thead>
          <tr>
            <th style="width: 420px;">具体条目</th>
            <th>打分范围</th>
            <th style="width: 80px;">得分</th>
            <th style="width: 320px;">评定说明或补充</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      const tb = table.querySelector("tbody");

      for (const section of SECTION_ORDER) {
        const secQs = QUESTIONS.filter((q) => q.section === section);
        if (!secQs.length) continue;

        const trSec = document.createElement("tr");
        trSec.className = "export-sec-row";
        const td = document.createElement("td");
        td.colSpan = 4;
        td.textContent = `${section}（得分：${bySection[section] ?? 0}）`;
        trSec.appendChild(td);
        tb.appendChild(trSec);

        secQs.forEach((q) => {
          const a = getAnswer(q.id);
          const score = computeQuestionScore(q);
          const noteText = getQuestionNote(q);

          const row = document.createElement("tr");
          row.innerHTML = `
            <td>
              <div>${escapeHtml(q.title || "")}</div>
              ${noteText ? `<div class="export-muted">说明：${escapeHtml(noteText)}</div>` : ""}
            </td>
            <td>${escapeHtml(q.spec || "")}</td>
            <td class="export-score">${typeof score === "number" ? score : 0}</td>
            <td>${escapeHtml((a.remark || "").trim())}</td>
          `;
          tb.appendChild(row);
        });
      }

      stage.appendChild(table);
      document.body.appendChild(stage);
      return stage;
    }
  
    function escapeHtml(s) {
      return String(s || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }
  
    async function captureExportCanvas() {
      if (typeof html2canvas !== "function") {
        alert("导出失败：缺少 html2canvas。请检查网络或脚本是否加载成功。");
        return null;
      }
      const stage = buildExportStage();
      try {
        const canvas = await html2canvas(stage, {
          backgroundColor: "#ffffff",
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
        });
        return canvas;
      } catch (e) {
        console.error(e);
        alert("导出失败：请打开控制台查看错误信息。");
        return null;
      } finally {
        stage.remove();
      }
    }
  
    function makeSafeName() {
      const title = (getName() || (TYPE === "film" ? "未命名影视" : "未命名书籍")).trim();
      const safe = title.replace(/[\\\/":*?<>|]+/g, "_").slice(0, 60) || "export";
      const stamp = new Date().toISOString().slice(0, 10);
      return { title, safe, stamp };
    }
  
    function triggerDownloadBlob(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }
  
    async function canvasToBlob(canvas) {
      return await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    }
  
    async function exportJpgSingle() {
      const canvas = await captureExportCanvas();
      if (!canvas) return;
      const { safe, stamp } = makeSafeName();
      const filename = `${TYPE}_${safe}_${stamp}.jpg`;
      const blob = await canvasToBlob(canvas);
      if (!blob) {
        alert("导出失败：无法生成图片。");
        return;
      }
      triggerDownloadBlob(blob, filename);
    }
  
    async function exportJpgSplit(parts = 4) {
      const canvas = await captureExportCanvas();
      if (!canvas) return;
  
      const { safe, stamp } = makeSafeName();
      const base = `${TYPE}_${safe}_${stamp}`;
  
      const w = canvas.width;
      const h = canvas.height;
      const partH = Math.ceil(h / parts);
  
      for (let i = 0; i < parts; i++) {
        const sy = i * partH;
        const sh = Math.min(partH, h - sy);
        if (sh <= 0) break;
  
        const piece = document.createElement("canvas");
        piece.width = w;
        piece.height = sh;
        const ctx = piece.getContext("2d");
        ctx.drawImage(canvas, 0, sy, w, sh, 0, 0, w, sh);
  
        const blob = await canvasToBlob(piece);
        if (!blob) {
          alert(`导出失败：第 ${i + 1} 张无法生成图片。`);
          return;
        }
        triggerDownloadBlob(blob, `${base}_p${i + 1}of${parts}.jpg`);
        await new Promise((r) => setTimeout(r, 250));
      }
    }
  
    if (btnExportJpg) btnExportJpg.addEventListener("click", exportJpgSingle);
    if (btnExportJpgMulti) btnExportJpgMulti.addEventListener("click", () => exportJpgSplit(4));
  
    // ---- update all ----
    function updateAll() {
      updateButtonStates();
      updateScoresAndChips();
      updateSummary();
      updateActiveChipByScroll();
    }
  
    // ---- boot ----
    render();
    setRemarkToggleChecked(remarkToggleChecked());
    updateAll();
  
    if (mainScroll) {
      mainScroll.addEventListener("scroll", () => window.requestAnimationFrame(updateActiveChipByScroll));
    }
    window.addEventListener("resize", () => window.requestAnimationFrame(updateActiveChipByScroll));

    // Make sidebar fixed/non-scrollable by redirecting wheel to the left panel
    if (sideScroll && mainScroll) {
      sideScroll.addEventListener(
        "wheel",
        (e) => {
          // Only handle vertical scrolling
          if (Math.abs(e.deltaY) < 0.5) return;
          e.preventDefault();
          mainScroll.scrollTop += e.deltaY;
        },
        { passive: false }
      );
    }
  })();
  