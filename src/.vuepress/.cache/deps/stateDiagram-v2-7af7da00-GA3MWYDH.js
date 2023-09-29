import {
  Ie,
  Ne,
  Oe,
  Re,
  Rt,
  Tt,
  re,
  xt
} from "./chunk-5D4XL2MY.js";
import {
  gt
} from "./chunk-MLYXTDMZ.js";
import "./chunk-54I6UHZ4.js";
import "./chunk-EB6LAHXC.js";
import "./chunk-KVTH7ZFZ.js";
import {
  L
} from "./chunk-MLGFQXRD.js";
import "./chunk-3XYPV4E6.js";
import "./chunk-7NR5DW5S.js";
import "./chunk-PRAOQV5U.js";
import {
  Ct,
  Di,
  Ft,
  Rn,
  Tl,
  w
} from "./chunk-RX2OIAPP.js";

// node_modules/.pnpm/mermaid@10.4.0/node_modules/mermaid/dist/stateDiagram-v2-7af7da00.js
var h = "rect";
var C = "rectWithTitle";
var nt = "start";
var ct = "end";
var it = "divider";
var rt = "roundedWithTitle";
var lt = "note";
var at = "noteGroup";
var _ = "statediagram";
var dt = "state";
var Et = `${_}-${dt}`;
var U = "transition";
var St = "note";
var Tt2 = "note-edge";
var pt = `${U} ${Tt2}`;
var _t = `${_}-${St}`;
var ut = "cluster";
var ft = `${_}-${ut}`;
var Dt = "cluster-alt";
var bt = `${_}-${Dt}`;
var V = "parent";
var Y = "note";
var At = "state";
var N = "----";
var ht = `${N}${Y}`;
var v = `${N}${V}`;
var W = "fill:none";
var z = "fill: #333";
var m = "c";
var j = "text";
var q = "normal";
var y = {};
var d = 0;
var yt = function(t) {
  const n = Object.keys(t);
  for (const e of n)
    t[e];
};
var gt2 = function(t, n) {
  return n.db.extract(n.db.getRootDocV2()), n.db.getClasses();
};
function xt2(t) {
  return t == null ? "" : t.classes ? t.classes.join(" ") : "";
}
function R(t = "", n = 0, e = "", c = N) {
  const i = e !== null && e.length > 0 ? `${c}${e}` : "";
  return `${At}-${t}${i}-${n}`;
}
var A = (t, n, e, c, i, r) => {
  const o = e.id, u = xt2(c[o]);
  if (o !== "root") {
    let T = h;
    e.start === true && (T = nt), e.start === false && (T = ct), e.type !== xt && (T = e.type), y[o] || (y[o] = {
      id: o,
      shape: T,
      description: Rn.sanitizeText(o, Ft()),
      classes: `${u} ${Et}`
    });
    const s = y[o];
    e.description && (Array.isArray(s.description) ? (s.shape = C, s.description.push(e.description)) : s.description.length > 0 ? (s.shape = C, s.description === o ? s.description = [e.description] : s.description = [s.description, e.description]) : (s.shape = h, s.description = e.description), s.description = Rn.sanitizeTextOrArray(s.description, Ft())), s.description.length === 1 && s.shape === C && (s.shape = h), !s.type && e.doc && (w.info("Setting cluster for ", o, G(e)), s.type = "group", s.dir = G(e), s.shape = e.type === re ? it : rt, s.classes = s.classes + " " + ft + " " + (r ? bt : ""));
    const p = {
      labelStyle: "",
      shape: s.shape,
      labelText: s.description,
      // typeof newNode.description === 'object'
      //   ? newNode.description[0]
      //   : newNode.description,
      classes: s.classes,
      style: "",
      //styles.style,
      id: o,
      dir: s.dir,
      domId: R(o, d),
      type: s.type,
      padding: 15
      //getConfig().flowchart.padding
    };
    if (p.centerLabel = true, e.note) {
      const l = {
        labelStyle: "",
        shape: lt,
        labelText: e.note.text,
        classes: _t,
        // useHtmlLabels: false,
        style: "",
        // styles.style,
        id: o + ht + "-" + d,
        domId: R(o, d, Y),
        type: s.type,
        padding: 15
        //getConfig().flowchart.padding
      }, a = {
        labelStyle: "",
        shape: at,
        labelText: e.note.text,
        classes: s.classes,
        style: "",
        // styles.style,
        id: o + v,
        domId: R(o, d, V),
        type: "group",
        padding: 0
        //getConfig().flowchart.padding
      };
      d++;
      const f = o + v;
      t.setNode(f, a), t.setNode(l.id, l), t.setNode(o, p), t.setParent(o, f), t.setParent(l.id, f);
      let S = o, D = l.id;
      e.note.position === "left of" && (S = l.id, D = o), t.setEdge(S, D, {
        arrowhead: "none",
        arrowType: "",
        style: W,
        labelStyle: "",
        classes: pt,
        arrowheadStyle: z,
        labelpos: m,
        labelType: j,
        thickness: q
      });
    } else
      t.setNode(o, p);
  }
  n && n.id !== "root" && (w.trace("Setting node ", o, " to be child of its parent ", n.id), t.setParent(o, n.id)), e.doc && (w.trace("Adding nodes children "), $t(t, e, e.doc, c, i, !r));
};
var $t = (t, n, e, c, i, r) => {
  w.trace("items", e), e.forEach((o) => {
    switch (o.stmt) {
      case Tt:
        A(t, n, o, c, i, r);
        break;
      case xt:
        A(t, n, o, c, i, r);
        break;
      case Rt:
        {
          A(t, n, o.state1, c, i, r), A(t, n, o.state2, c, i, r);
          const u = {
            id: "edge" + d,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: W,
            labelStyle: "",
            label: Rn.sanitizeText(o.description, Ft()),
            arrowheadStyle: z,
            labelpos: m,
            labelType: j,
            thickness: q,
            classes: U
          };
          t.setEdge(o.state1.id, o.state2.id, u, d), d++;
        }
        break;
    }
  });
};
var G = (t, n = Oe) => {
  let e = n;
  if (t.doc)
    for (let c = 0; c < t.doc.length; c++) {
      const i = t.doc[c];
      i.stmt === "dir" && (e = i.value);
    }
  return e;
};
var Ct2 = async function(t, n, e, c) {
  w.info("Drawing state diagram (v2)", n), y = {}, c.db.getDirection();
  const { securityLevel: i, state: r } = Ft(), o = r.nodeSpacing || 50, u = r.rankSpacing || 50;
  w.info(c.db.getRootDocV2()), c.db.extract(c.db.getRootDocV2()), w.info(c.db.getRootDocV2());
  const T = c.db.getStates(), s = new L({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: G(c.db.getRootDocV2()),
    nodesep: o,
    ranksep: u,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  A(s, void 0, c.db.getRootDocV2(), T, c.db, true);
  let p;
  i === "sandbox" && (p = Ct("#i" + n));
  const l = i === "sandbox" ? Ct(p.nodes()[0].contentDocument.body) : Ct("body"), a = l.select(`[id="${n}"]`), f = l.select("#" + n + " g");
  await gt(f, s, ["barb"], _, n);
  const S = 8;
  Di.insertTitle(a, "statediagramTitleText", r.titleTopMargin, c.db.getDiagramTitle());
  const D = a.node().getBBox(), L2 = D.width + S * 2, P = D.height + S * 2;
  a.attr("class", _);
  const O = a.node().getBBox();
  Tl(a, P, L2, r.useMaxWidth);
  const k = `${O.x - S} ${O.y - S} ${L2} ${P}`;
  w.debug(`viewBox ${k}`), a.attr("viewBox", k);
  const K = document.querySelectorAll('[id="' + n + '"] .edgeLabel .label');
  for (const x of K) {
    const B = x.getBBox(), b = document.createElementNS("http://www.w3.org/2000/svg", h);
    b.setAttribute("rx", 0), b.setAttribute("ry", 0), b.setAttribute("width", B.width), b.setAttribute("height", B.height), x.insertBefore(b, x.firstChild);
  }
};
var Rt2 = {
  setConf: yt,
  getClasses: gt2,
  draw: Ct2
};
var Ht = {
  parser: Ie,
  db: Ne,
  renderer: Rt2,
  styles: Re,
  init: (t) => {
    t.state || (t.state = {}), t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute, Ne.clear();
  }
};
export {
  Ht as diagram
};
//# sourceMappingURL=stateDiagram-v2-7af7da00-GA3MWYDH.js.map
