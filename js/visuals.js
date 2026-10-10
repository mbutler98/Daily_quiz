/* ==========================================================
   WAYPOINT — visuals
   Figures that can sit inside a lesson's story or a quiz question.
   A figure is a plain object; `type` picks the renderer:

   { type: "chart", kind: "column" | "bar" | "line" | "waterfall", ... }
       Consulting-style charts: an action title that states the takeaway,
       grey context with one highlighted mark, direct labels, no gridlines,
       a source line, and a data table for screen readers.
   { type: "scene", steps: [...] }
       3Blue1Brown-style animated maths: curves draw themselves, shift and
       morph step by step with a caption (which can be read aloud).
   { type: "image", src, alt, caption, credit }
   { type: "video", youtube: "id" | src: "media/clip.mp4", title, by }
       YouTube loads only when tapped (privacy + data). Local mp4s suit
       clips rendered with Manim.

   Public API: WPV.render(spec, opts) -> HTML string;
               WPV.mount(root) wires up anything rendered inside root;
               WPV.speak (set by the app) narrates scene captions.
   ========================================================== */
(function () {
  "use strict";
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const specs = {};
  let seq = 0;
  const reg = (spec) => { const id = "fig" + ++seq; specs[id] = spec; return id; };
  const num = (v, f = {}) => {
    const d = f.decimals != null ? f.decimals : Math.abs(v) < 10 && v % 1 ? 1 : 0;
    const s = Math.abs(v).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
    return (v < 0 ? "−" : f.sign && v > 0 ? "+" : "") + (f.prefix || "") + s + (f.suffix || "");
  };
  // Plain-language summary of a figure (alt text, audio, data table title).
  function describe(s) {
    if (s.type === "chart") return [s.title, s.sub, s.source ? "Source: " + s.source : ""].filter(Boolean).join(". ");
    if (s.type === "scene") return [s.title].concat((s.steps || []).map((x) => x.say)).filter(Boolean).join(" ");
    if (s.type === "video") return `Video: ${s.title || ""}${s.by ? " by " + s.by : ""}.`;
    return [s.alt, s.caption].filter(Boolean).join(". ");
  }

  /* ---------------------------------------------------------
     Charts
     --------------------------------------------------------- */
  const W = 480;
  // Break a category label onto lines that fit its slot (~9.5px per char at 18px).
  function wrap(label, max) {
    const lines = [];
    String(label).split(" ").forEach((w) => {
      const last = lines[lines.length - 1];
      if (last && (last + " " + w).length <= max) lines[lines.length - 1] = last + " " + w;
      else lines.push(w);
    });
    return lines;
  }
  const catText = (lines, x, y) => `<text class="v-cat" x="${x}" y="${y}" text-anchor="middle">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? "1.15em" : 0}">${esc(l)}</tspan>`).join("")}</text>`; // narrow canvas so text stays legible when scaled to a phone
  function chart(s, opts) {
    const f = { suffix: s.suffix, prefix: s.prefix, decimals: s.decimals };
    let svg = "", rows = [];
    if (s.kind === "column" || s.kind === "waterfall") {
      const data = s.data;
      const n = data.length;
      const maxChars = Math.max(4, Math.floor((W - 8) / n / 9.5));
      const twoLine = data.some(([label]) => wrap(label, maxChars).length > 1);
      const H = twoLine ? 300 : 280, top = 30, bottom = twoLine ? 60 : 40, left = 4, right = 4;
      const ph = H - top - bottom;
      // Waterfall: running total; "total" bars start from zero.
      let run = 0;
      const bars = data.map(([label, v, kind]) => {
        let a, b;
        if (s.kind === "waterfall") {
          if (kind === "total") { a = 0; b = v; run = v; } else { a = run; b = run + v; run = b; }
        } else { a = 0; b = v; }
        return { label, v, a, b, total: kind === "total" };
      });
      const lo = Math.min(0, ...bars.map((x) => Math.min(x.a, x.b)));
      const hi = Math.max(0, ...bars.map((x) => Math.max(x.a, x.b)));
      const y = (v) => top + ph - ((v - lo) / (hi - lo || 1)) * ph;
      const slot = (W - left - right) / n;
      const bw = Math.min(56, slot * 0.66);
      const hiSet = new Set([].concat(s.highlight == null ? [] : s.highlight));
      bars.forEach((x, i) => {
        const cx = left + slot * (i + 0.5);
        const y1 = y(Math.max(x.a, x.b)), y2 = y(Math.min(x.a, x.b));
        const h = Math.max(1, y2 - y1);
        const isHi = s.kind === "waterfall" ? x.total || hiSet.has(i) || hiSet.has(x.label) : hiSet.has(i) || hiSet.has(x.label);
        const r = Math.min(4, h / 2, bw / 2);
        const up = x.b >= x.a;
        // Rounded data-end only (away from the baseline / previous total).
        const d = up
          ? `M${cx - bw / 2},${y2}V${y1 + r}q0,-${r} ${r},-${r}h${bw - 2 * r}q${r},0 ${r},${r}V${y2}Z`
          : `M${cx - bw / 2},${y1}V${y2 - r}q0,${r} ${r},${r}h${bw - 2 * r}q${r},0 ${r},-${r}V${y1}Z`;
        const shown = s.kind === "waterfall" && !x.total ? num(x.v, Object.assign({ sign: true }, f)) : num(x.v, f);
        svg += `<path class="v-mark ${isHi ? "hi" : ""}" d="${d}" data-tip="${esc(x.label)}: ${esc(shown)}"><title>${esc(x.label)}: ${esc(shown)}</title></path>`;
        svg += `<text class="v-val ${isHi ? "hi" : ""}" x="${cx}" y="${(up ? y1 : y2) + (up ? -8 : 22)}" text-anchor="middle">${esc(shown)}</text>`;
        svg += catText(wrap(x.label, maxChars), cx, H - bottom + 24);
        if (s.kind === "waterfall" && i < n - 1) {
          const nx = left + slot * (i + 1.5);
          svg += `<path class="v-conn" d="M${cx + bw / 2},${y(x.b)}H${nx - bw / 2}"/>`;
        }
        rows.push([x.label, shown]);
      });
      svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(describe(s))}">${svg}<path class="v-base" d="M${left},${y(0)}H${W - right}"/></svg>`;
    } else if (s.kind === "bar") {
      const data = s.data;
      const rowH = 40, lw = 178, H = data.length * rowH + 8, vw = 72;
      const max = Math.max(...data.map((d) => Math.abs(d[1])));
      const hiSet = new Set([].concat(s.highlight == null ? [] : s.highlight));
      data.forEach(([label, v], i) => {
        const yy = 4 + i * rowH;
        const w = Math.max(2, (Math.abs(v) / (max || 1)) * (W - lw - vw));
        const isHi = hiSet.has(i) || hiSet.has(label);
        const shown = num(v, f);
        svg += `<text class="v-cat ${isHi ? "strong" : ""}" x="${lw - 10}" y="${yy + rowH / 2 + 6}" text-anchor="end">${esc(label)}</text>`;
        svg += `<path class="v-mark ${isHi ? "hi" : ""}" d="M${lw},${yy + 6}h${w - 4}q4,0 4,4v${rowH - 20}q0,4 -4,4h-${w - 4}Z" data-tip="${esc(label)}: ${esc(shown)}"><title>${esc(label)}: ${esc(shown)}</title></path>`;
        svg += `<text class="v-val ${isHi ? "hi" : ""}" x="${lw + w + 8}" y="${yy + rowH / 2 + 6}">${esc(shown)}</text>`;
        rows.push([label, shown]);
      });
      svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(describe(s))}">${svg}<path class="v-base" d="M${lw},0V${H}"/></svg>`;
    } else if (s.kind === "line") {
      const xs = s.x;
      const series = s.series;
      const H = 290, top = 24, bottom = 36, left = 10, right = 118;
      const all = series.flatMap((x) => x.values).filter((v) => v != null);
      const lo = s.min != null ? s.min : Math.min(0, ...all), hi = Math.max(...all);
      const X = (i) => left + (i / (xs.length - 1)) * (W - left - right);
      const Y = (v) => top + (H - top - bottom) * (1 - (v - lo) / (hi - lo || 1));
      // Context series first so the highlighted one draws on top.
      const order = series.map((x, i) => i).sort((a, b) => (series[a].highlight ? 1 : 0) - (series[b].highlight ? 1 : 0));
      const ends = [];
      order.forEach((si) => {
        const se = series[si];
        const pts = se.values.map((v, i) => (v == null ? null : [X(i), Y(v)])).filter(Boolean);
        svg += `<path class="v-line ${se.highlight ? "hi" : ""}" d="M${pts.map((p) => p.join(",")).join("L")}"/>`;
        se.values.forEach((v, i) => {
          if (v == null) return;
          const tip = `${se.name} · ${xs[i]}: ${num(v, f)}`;
          svg += `<circle class="v-hit" cx="${X(i)}" cy="${Y(v)}" r="12" data-tip="${esc(tip)}"><title>${esc(tip)}</title></circle>`;
        });
        (se.mark || []).forEach((i) => {
          svg += `<circle class="v-dot ${se.highlight ? "hi" : ""}" cx="${X(i)}" cy="${Y(se.values[i])}" r="5"/>`;
          svg += `<text class="v-val ${se.highlight ? "hi" : ""}" x="${X(i)}" y="${Y(se.values[i]) - 12}" text-anchor="middle">${esc(num(se.values[i], f))}</text>`;
        });
        const li = se.values.length - 1;
        svg += `<circle class="v-dot ${se.highlight ? "hi" : ""}" cx="${X(li)}" cy="${Y(se.values[li])}" r="5"/>`;
        ends.push({ y: Y(se.values[li]), se, v: se.values[li] });
      });
      // Direct end labels, nudged apart so they never collide.
      ends.sort((a, b) => a.y - b.y);
      for (let i = 1; i < ends.length; i++) if (ends[i].y - ends[i - 1].y < 42) ends[i].y = ends[i - 1].y + 42;
      ends.forEach((e) => {
        svg += `<text class="v-end ${e.se.highlight ? "hi" : ""}" x="${W - right + 12}" y="${e.y - 2}">${esc(num(e.v, f))}</text>`;
        svg += `<text class="v-cat" x="${W - right + 12}" y="${e.y + 18}">${esc(e.se.name)}</text>`;
      });
      const every = Math.max(1, Math.ceil(xs.length / 4));
      xs.forEach((x, i) => {
        if (i % every === 0 || i === xs.length - 1) svg += `<text class="v-cat" x="${X(i)}" y="${H - bottom + 26}" text-anchor="middle">${esc(x)}</text>`;
      });
      svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(describe(s))}"><path class="v-base" d="M${left},${Y(lo)}H${W - right}"/>${svg}</svg>`;
      rows = xs.map((x, i) => [x].concat(series.map((se) => (se.values[i] == null ? "—" : num(se.values[i], f)))));
    }
    const head = s.kind === "line" ? ["", ...s.series.map((x) => x.name)] : ["", s.unit || "Value"];
    const table = opts.compact ? "" : `<details class="v-table"><summary>Data</summary><table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${r.map((c, k) => (k ? `<td>${esc(c)}</td>` : `<th>${esc(c)}</th>`)).join("")}</tr>`).join("")}</tbody></table></details>`;
    const legend = s.kind === "line" && s.series.length > 1
      ? `<div class="v-legend">${s.series.map((x) => `<span><i class="${x.highlight ? "hi" : ""}"></i>${esc(x.name)}</span>`).join("")}</div>` : "";
    return `<figure class="viz chart" data-say="${esc("Chart. " + describe(s))}">
      ${s.title ? `<figcaption class="v-title">${esc(s.title)}</figcaption>` : ""}
      ${s.sub ? `<div class="v-sub">${esc(s.sub)}</div>` : ""}
      ${legend}
      <div class="v-plot">${svg}</div>
      <div class="v-tip" aria-live="polite"></div>
      ${s.source || s.note ? `<div class="v-src">${s.note ? esc(s.note) + " " : ""}${s.source ? "Source: " + esc(s.source) : ""}</div>` : ""}
      ${table}
    </figure>`;
  }

  /* ---------------------------------------------------------
     Scenes (3Blue1Brown style)
     Coordinates are in maths units; the scene maps them to pixels.
     Each step adds shapes, or moves/morphs ones that already exist:
       { fn: x => ..., id, color, label, labelX, dash, width }   a curve
       { morph: "id", fn: x => ... }                    reshape an existing curve
       { pt: [x, y], id, color, label }                 a dot
       { move: "id", to: [x, y] }                       slide an existing dot
       { line: [[x1, y1], [x2, y2]], color, dash }      a segment
       { arrow: [[x1, y1], [x2, y2]], color }           a segment with a head
       { area: x => ..., from, to, color }              shade under a curve
       { text: "label", at: [x, y], color, size, anchor }
       { dim: ["id", ...] }                             fade earlier objects
     --------------------------------------------------------- */
  const SW = 640, SH = 360;
  const COLORS = { blue: "#58C4DD", yellow: "#FFE14D", green: "#83C167", red: "#FC6255", teal: "#5CD0B3", gold: "#F0AC5F", purple: "#B189C6", grey: "#8A94A6", white: "#ECEFF4" };
  const col = (c) => COLORS[c] || c || COLORS.blue;
  function frame(s) {
    const [x0, x1] = s.x || [0, 10], [y0, y1] = s.y || [0, 10];
    const L = 52, R = 24, T = 20, B = s.ticks && s.ticks.x ? 58 : 44;
    return {
      x0, x1, y0, y1, L, R, T, B,
      px: (x) => L + ((x - x0) / (x1 - x0)) * (SW - L - R),
      py: (y) => SH - B - ((y - y0) / (y1 - y0)) * (SH - T - B),
    };
  }
  function sample(F, fn) {
    const pts = [];
    const n = 160;
    for (let i = 0; i <= n; i++) {
      const x = F.x0 + ((F.x1 - F.x0) * i) / n;
      let y;
      try { y = fn(x); } catch (e) { y = NaN; }
      pts.push([x, y]);
    }
    return pts;
  }
  function pathFrom(F, pts) {
    let d = "", pen = false;
    const pad = (F.y1 - F.y0) * 0.5;
    pts.forEach(([x, y]) => {
      if (!isFinite(y) || y < F.y0 - pad || y > F.y1 + pad) { pen = false; return; }
      d += (pen ? "L" : "M") + F.px(x).toFixed(1) + "," + F.py(y).toFixed(1);
      pen = true;
    });
    return d;
  }
  function axes(s, F) {
    let g = `<path class="s-axis" d="M${F.L},${F.py(F.y0)}H${SW - F.R}M${F.px(F.x0)},${SH - F.B}V${F.T}"/>`;
    if (s.ticks) {
      const tx = s.ticks.x || [], ty = s.ticks.y || [];
      tx.forEach((v) => { g += `<path class="s-axis" d="M${F.px(v)},${F.py(F.y0) - 4}v8"/><text class="s-tick" x="${F.px(v)}" y="${F.py(F.y0) + 20}" text-anchor="middle">${esc(v)}</text>`; });
      ty.forEach((v) => { g += `<path class="s-axis" d="M${F.px(F.x0) - 4},${F.py(v)}h8"/><text class="s-tick" x="${F.px(F.x0) - 10}" y="${F.py(v) + 5}" text-anchor="end">${esc(v)}</text>`; });
    }
    if (s.xlabel) g += `<text class="s-axlabel" x="${SW - F.R}" y="${SH - 8}" text-anchor="end">${esc(s.xlabel)}</text>`;
    if (s.ylabel) g += `<text class="s-axlabel" x="${F.L - 8}" y="${F.T - 4}" text-anchor="start" dx="10">${esc(s.ylabel)}</text>`;
    return g;
  }
  // Rebuild the scene state up to step k. Returns SVG for every object,
  // plus animation instructions for the objects that step k introduced.
  function buildScene(s, F, k) {
    const objs = {};   // id -> {kind, html-producing state}
    const order = [];
    const anims = [];
    let auto = 0;
    for (let si = 0; si <= k; si++) {
      const st = s.steps[si];
      const isNow = si === k;
      (st.add || []).forEach((sh) => {
        if (sh.morph) {
          const o = objs[sh.morph];
          if (!o) return;
          const from = o.fn;
          o.fn = sh.fn;
          if (sh.color) o.color = sh.color;
          if (isNow) anims.push({ type: "morph", id: sh.morph, from, to: sh.fn });
          return;
        }
        if (sh.move) {
          const o = objs[sh.move];
          if (!o) return;
          const from = o.at;
          o.at = sh.to;
          if (isNow) anims.push({ type: "move", id: sh.move, from, to: sh.to });
          return;
        }
        if (sh.dim) { sh.dim.forEach((id) => { if (objs[id]) objs[id].dim = true; }); return; }
        const id = sh.id || "_" + auto++;
        const o = Object.assign({}, sh, { id, born: si });
        if (sh.pt) o.at = sh.pt;
        objs[id] = o;
        order.push(id);
        if (isNow) anims.push({ type: "in", id });
      });
    }
    let html = "";
    order.forEach((id) => {
      const o = objs[id];
      const c = col(o.color);
      const cls = `s-obj ${o.dim ? "dim" : ""}`;
      const at = `data-oid="${esc(id)}"`;
      if (o.fn && !o.area) {
        html += `<g class="${cls}" ${at}><path class="s-curve" d="${pathFrom(F, sample(F, o.fn))}" stroke="${c}" stroke-width="${o.width || 4}" ${o.dash ? 'stroke-dasharray="8 8"' : ""} pathLength="1"/>`;
        if (o.label) {
          // labelX keeps the label on the curve (even after a morph); labelAt pins it.
          const lx = o.labelAt ? o.labelAt[0] : o.labelX != null ? o.labelX : F.x1 - (F.x1 - F.x0) * 0.04;
          const ly = o.labelAt ? o.labelAt[1] : o.fn(lx);
          html += `<text class="s-label" x="${F.px(lx)}" y="${F.py(ly) - 12}" text-anchor="end" fill="${c}">${esc(o.label)}</text>`;
        }
        html += `</g>`;
      } else if (o.area) {
        const a = o.from != null ? o.from : F.x0, b = o.to != null ? o.to : F.x1;
        const pts = [];
        for (let i = 0; i <= 80; i++) { const x = a + ((b - a) * i) / 80; pts.push([x, o.area(x)]); }
        const d = `M${F.px(a)},${F.py(Math.max(F.y0, 0))}` + pts.map(([x, y]) => `L${F.px(x).toFixed(1)},${F.py(y).toFixed(1)}`).join("") + `L${F.px(b)},${F.py(Math.max(F.y0, 0))}Z`;
        html += `<g class="${cls}" ${at}><path class="s-area" d="${d}" fill="${c}"/></g>`;
      } else if (o.at) {
        html += `<g class="${cls}" ${at}><circle class="s-dot" cx="${F.px(o.at[0])}" cy="${F.py(o.at[1])}" r="${o.r || 7}" fill="${c}"/>${o.label ? `<text class="s-label" x="${F.px(o.at[0]) + 12}" y="${F.py(o.at[1]) - 12}" fill="${c}">${esc(o.label)}</text>` : ""}</g>`;
      } else if (o.line || o.arrow) {
        const [[ax, ay], [bx, by]] = o.line || o.arrow;
        const X1 = F.px(ax), Y1 = F.py(ay), X2 = F.px(bx), Y2 = F.py(by);
        let head = "";
        if (o.arrow) {
          const ang = Math.atan2(Y2 - Y1, X2 - X1), hl = 13;
          head = `M${X2},${Y2}L${X2 - hl * Math.cos(ang - 0.45)},${Y2 - hl * Math.sin(ang - 0.45)}M${X2},${Y2}L${X2 - hl * Math.cos(ang + 0.45)},${Y2 - hl * Math.sin(ang + 0.45)}`;
        }
        html += `<g class="${cls}" ${at}><path class="s-curve" d="M${X1},${Y1}L${X2},${Y2}${head}" stroke="${c}" stroke-width="${o.width || 3}" ${o.dash ? 'stroke-dasharray="6 7"' : ""} pathLength="1"/></g>`;
      }
      // Text objects are drawn by sceneSvg, above the clipped plot area.
    });
    return { html, anims, objs };
  }
  // Text objects use `at` too; keep it separate from a dot's position.
  function normaliseScene(s) {
    (s.steps || []).forEach((st) => (st.add || []).forEach((sh) => {
      if (sh.text != null && sh.at && !sh.textAt) { sh.textAt = sh.at; delete sh.at; }
    }));
    return s;
  }
  function sceneSvg(s, F, k) {
    const b = buildScene(s, F, k);
    // Text objects drawn here (needs frame coordinates).
    let texts = "";
    Object.values(b.objs).forEach((o) => {
      if (o.text == null || !o.textAt) return;
      texts += `<g class="s-obj ${o.dim ? "dim" : ""}" data-oid="${esc(o.id)}"><text class="s-text" x="${F.px(o.textAt[0])}" y="${F.py(o.textAt[1])}" fill="${col(o.color || "white")}" font-size="${o.size || 20}" text-anchor="${o.anchor || "middle"}">${esc(o.text)}</text></g>`;
    });
    return { svg: `<defs><clipPath id="clip-${s._id}"><rect x="${F.L}" y="${F.T - 10}" width="${SW - F.L - F.R + 10}" height="${SH - F.T - F.B + 10}"/></clipPath></defs>${axes(s, F)}<g clip-path="url(#clip-${s._id})">${b.html}</g>${texts}`, anims: b.anims };
  }
  function scene(s, opts) {
    normaliseScene(s);
    const id = reg(s);
    s._id = id;
    const F = frame(s);
    const last = s.steps.length - 1;
    const start = opts.static ? last : 0;
    const { svg } = sceneSvg(s, F, start);
    const say = s.steps[start].say || "";
    return `<figure class="viz scene" data-fig="${id}" data-step="${start}" data-say="${esc("Animation. " + describe(s))}">
      ${s.title ? `<figcaption class="s-title">${esc(s.title)}</figcaption>` : ""}
      <div class="s-stage"><svg viewBox="0 0 ${SW} ${SH}" role="img" aria-label="${esc(describe(s))}">${svg}</svg></div>
      ${opts.static ? "" : `<div class="s-caption" aria-live="polite">${esc(say)}</div>
      <div class="s-ctrl">
        <button class="s-btn" data-s="prev" aria-label="Previous step"><svg viewBox="0 0 24 24"><path d="M15 6 9 12l6 6"/></svg></button>
        <span class="s-dots">${s.steps.map((_, i) => `<i class="${i === start ? "on" : ""}"></i>`).join("")}</span>
        <button class="s-btn" data-s="next" aria-label="Next step"><svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg></button>
        <button class="s-btn play" data-s="play" aria-label="Play animation"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7Z" fill="currentColor"/></svg><span>Play</span></button>
      </div>`}
    </figure>`;
  }
  function animateIn(svgEl, anims, s, F) {
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    anims.forEach((a) => {
      const g = svgEl.querySelector(`[data-oid="${CSS.escape(a.id)}"]`);
      if (!g) return;
      if (a.type === "in") {
        if (reduce) return;
        g.querySelectorAll(".s-curve").forEach((p) => {
          if (p.getAttribute("stroke-dasharray")) { g.classList.add("fade-in"); return; }
          p.style.strokeDasharray = "1"; p.style.strokeDashoffset = "1";
          requestAnimationFrame(() => requestAnimationFrame(() => { p.style.transition = "stroke-dashoffset 1.4s cubic-bezier(.45,0,.2,1)"; p.style.strokeDashoffset = "0"; }));
        });
        if (!g.querySelector(".s-curve")) g.classList.add("fade-in");
        else g.querySelectorAll("text").forEach((t) => t.classList.add("fade-in-late"));
      } else if (a.type === "morph" && !reduce) {
        const p = g.querySelector(".s-curve");
        const A = sample(F, a.from), B = sample(F, a.to);
        tween(900, (t) => p.setAttribute("d", pathFrom(F, A.map(([x, y], i) => [x, y + (B[i][1] - y) * t]))));
        const lbl = g.querySelector(".s-label");
        if (lbl) { lbl.classList.add("fade-in-late"); }
      } else if (a.type === "move" && !reduce) {
        const c = g.querySelector("circle"), t = g.querySelector("text");
        const [fx, fy] = a.from, [tx, ty] = a.to;
        tween(900, (k) => {
          const x = F.px(fx + (tx - fx) * k), y = F.py(fy + (ty - fy) * k);
          c.setAttribute("cx", x); c.setAttribute("cy", y);
          if (t) { t.setAttribute("x", x + 12); t.setAttribute("y", y - 12); }
        });
      }
    });
  }
  function tween(ms, fn) {
    const t0 = performance.now();
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2); // smooth, Manim-like
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / ms);
      fn(ease(t));
      if (t < 1) requestAnimationFrame(tick);
    };
    fn(0);
    requestAnimationFrame(tick);
  }
  function mountScene(fig) {
    const s = specs[fig.dataset.fig];
    if (!s || fig.dataset.mounted) return;
    fig.dataset.mounted = "1";
    const F = frame(s);
    const svgEl = fig.querySelector("svg");
    const cap = fig.querySelector(".s-caption");
    const dots = fig.querySelectorAll(".s-dots i");
    const playBtn = fig.querySelector('[data-s="play"]');
    if (!cap) return;
    let k = +fig.dataset.step || 0, timer = null, playing = false, voiced = false, onDone = null;
    const show = (n, animate) => {
      k = Math.max(0, Math.min(s.steps.length - 1, n));
      fig.dataset.step = k;
      const r = sceneSvg(s, F, k);
      svgEl.innerHTML = r.svg;
      if (animate) animateIn(svgEl, r.anims, s, F);
      cap.textContent = s.steps[k].say || "";
      dots.forEach((d, i) => d.classList.toggle("on", i === k));
    };
    // Interrupted: silence our narration (and any page reader driving us).
    const stop = () => {
      const wasVoiced = playing && voiced;
      playing = false;
      onDone = null;
      clearTimeout(timer);
      if (wasVoiced && WPV.stopSpeech) WPV.stopSpeech();
      idle();
    };
    const PLAY = '<path d="M8 5v14l11-7Z" fill="currentColor"/>';
    const PAUSE = '<rect x="7" y="5" width="3.5" height="14" fill="currentColor"/><rect x="13.5" y="5" width="3.5" height="14" fill="currentColor"/>';
    const idle = () => {
      playBtn.querySelector("svg").innerHTML = PLAY;
      playBtn.classList.remove("on");
      playBtn.querySelector("span").textContent = k >= s.steps.length - 1 ? "Replay" : "Play";
    };
    const advance = () => {
      if (!playing) return;
      if (k >= s.steps.length - 1) {
        // Finished naturally: hand back to whoever started us.
        playing = false;
        idle();
        const cb = onDone;
        onDone = null;
        if (cb) cb();
        return;
      }
      show(k + 1, true);
      step();
    };
    // Narrate each caption when audio is on, otherwise pace by reading time.
    const step = () => {
      const say = s.steps[k].say || "";
      const wait = Math.max(2600, say.split(/\s+/).length * 330);
      if (voiced && WPV.speak) WPV.speak(say, () => { if (playing) timer = setTimeout(advance, 600); });
      else timer = setTimeout(advance, wait);
    };
    const start = (withVoice, done) => {
      voiced = withVoice;
      onDone = done || null;
      playing = true;
      playBtn.classList.add("on");
      playBtn.querySelector("svg").innerHTML = PAUSE;
      playBtn.querySelector("span").textContent = "Pause";
      if (done || k >= s.steps.length - 1) show(0, true); else show(k, true);
      step();
    };
    fig.querySelector('[data-s="prev"]').onclick = () => { stop(); show(k - 1, false); };
    fig.querySelector('[data-s="next"]').onclick = () => { stop(); show(k + 1, true); };
    playBtn.onclick = () => (playing ? stop() : start(!!WPV.narrate));
    fig._stop = stop;
    // Used by the lesson reader: play from the top with narration, then continue.
    fig._play = (done) => start(true, done);
    // Draw the opening frame once the figure scrolls into view.
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { io.disconnect(); show(k, true); } }, { threshold: 0.4 });
      io.observe(fig);
    }
  }

  /* ---------------------------------------------------------
     Image & video
     --------------------------------------------------------- */
  function image(s) {
    return `<figure class="viz image" data-say="${esc(describe(s))}">
      <img src="${esc(s.src)}" alt="${esc(s.alt || "")}" loading="lazy" decoding="async">
      ${s.caption || s.credit ? `<figcaption class="v-src">${esc(s.caption || "")}${s.credit ? ` <span class="credit">${esc(s.credit)}</span>` : ""}</figcaption>` : ""}
    </figure>`;
  }
  function video(s) {
    if (s.src) {
      return `<figure class="viz video" data-say="${esc(describe(s))}">
        <video src="${esc(s.src)}" ${s.poster ? `poster="${esc(s.poster)}"` : ""} controls playsinline preload="none"></video>
        <figcaption class="v-src">${esc(s.title || "")}${s.by ? ` · ${esc(s.by)}` : ""}</figcaption></figure>`;
    }
    const id = esc(s.youtube);
    return `<figure class="viz video" data-say="${esc(describe(s))}">
      <button class="yt" data-yt="${id}" data-start="${+s.start || 0}" aria-label="Play video: ${esc(s.title || "")}" style="background-image:url('https://i.ytimg.com/vi/${id}/hqdefault.jpg')">
        <span class="yt-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7Z" fill="currentColor"/></svg></span>
        <span class="yt-meta"><b>${esc(s.title || "Watch")}</b>${s.by ? `<small>${esc(s.by)}${s.mins ? ` · ${s.mins} min` : ""}</small>` : ""}</span>
      </button>
      <figcaption class="v-src">${s.why ? esc(s.why) + " " : ""}<a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Open on YouTube</a></figcaption>
    </figure>`;
  }

  function render(spec, opts = {}) {
    if (!spec || typeof spec !== "object") return "";
    try {
      if (spec.type === "chart") return chart(spec, opts);
      if (spec.type === "scene") return scene(spec, opts);
      if (spec.type === "image") return image(spec, opts);
      if (spec.type === "video") return video(spec, opts);
    } catch (e) {
      console.warn("Figure failed to render", spec, e);
    }
    return "";
  }
  function mount(root) {
    root = root || document;
    root.querySelectorAll(".viz.scene").forEach(mountScene);
    root.querySelectorAll(".yt").forEach((b) => (b.onclick = () => {
      const f = document.createElement("iframe");
      f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0&start=${b.dataset.start}`;
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      f.title = b.getAttribute("aria-label");
      f.className = "yt-frame";
      b.replaceWith(f);
      if (WPV.stopSpeech) WPV.stopSpeech();
    }));
    // Tap a bar or point to read its exact value (no hover on phones).
    root.querySelectorAll(".viz.chart").forEach((fig) => {
      const tip = fig.querySelector(".v-tip");
      fig.querySelectorAll("[data-tip]").forEach((m) => (m.onclick = () => {
        fig.querySelectorAll(".sel").forEach((x) => x.classList.remove("sel"));
        m.classList.add("sel");
        tip.textContent = m.dataset.tip;
      }));
    });
  }
  function stopAll() {
    document.querySelectorAll(".viz.scene").forEach((f) => f._stop && f._stop());
  }

  window.WPV = { render, mount, stopAll, describe, speak: null, stopSpeech: null, narrate: false };
})();
