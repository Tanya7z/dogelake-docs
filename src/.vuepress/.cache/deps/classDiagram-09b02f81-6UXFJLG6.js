import {
  It,
  Lt,
  xt
} from "./chunk-LXRZVD7K.js";
import {
  R
} from "./chunk-KVTH7ZFZ.js";
import {
  L,
  js
} from "./chunk-MLGFQXRD.js";
import "./chunk-3XYPV4E6.js";
import "./chunk-7NR5DW5S.js";
import "./chunk-PRAOQV5U.js";
import {
  Ct,
  Ft,
  Tl,
  w
} from "./chunk-RX2OIAPP.js";

// node_modules/.pnpm/mermaid@10.4.0/node_modules/mermaid/dist/classDiagram-09b02f81.js
var h = {};
var g = 20;
var p = function(r) {
  const o = Object.entries(h).find((k) => k[1].label === r);
  if (o)
    return o[0];
};
var D = function(r) {
  r.append("defs").append("marker").attr("id", "extensionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), r.append("defs").append("marker").attr("id", "extensionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), r.append("defs").append("marker").attr("id", "compositionStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "compositionEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "aggregationStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "aggregationEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "dependencyStart").attr("class", "extension").attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), r.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
var $ = function(r, o, k, a) {
  const c = Ft().class;
  h = {}, w.info("Rendering diagram " + r);
  const L2 = Ft().securityLevel;
  let y;
  L2 === "sandbox" && (y = Ct("#i" + o));
  const x = L2 === "sandbox" ? Ct(y.nodes()[0].contentDocument.body) : Ct("body"), n = x.select(`[id='${o}']`);
  D(n);
  const e = new L({
    multigraph: true
  });
  e.setGraph({
    isMultiGraph: true
  }), e.setDefaultEdgeLabel(function() {
    return {};
  });
  const u = a.db.getClasses(), N = Object.keys(u);
  for (const t of N) {
    const s = u[t], i = R.drawClass(n, s, c, a);
    h[i.id] = i, e.setNode(i.id, i), w.info("Org height: " + i.height);
  }
  a.db.getRelations().forEach(function(t) {
    w.info(
      "tjoho" + p(t.id1) + p(t.id2) + JSON.stringify(t)
    ), e.setEdge(
      p(t.id1),
      p(t.id2),
      {
        relation: t
      },
      t.title || "DEFAULT"
    );
  }), a.db.getNotes().forEach(function(t) {
    w.debug(`Adding note: ${JSON.stringify(t)}`);
    const s = R.drawNote(n, t, c, a);
    h[s.id] = s, e.setNode(s.id, s), t.class && t.class in u && e.setEdge(
      t.id,
      p(t.class),
      {
        relation: {
          id1: t.id,
          id2: t.class,
          relation: {
            type1: "none",
            type2: "none",
            lineType: 10
          }
        }
      },
      "DEFAULT"
    );
  }), js(e), e.nodes().forEach(function(t) {
    t !== void 0 && e.node(t) !== void 0 && (w.debug("Node " + t + ": " + JSON.stringify(e.node(t))), x.select("#" + (a.db.lookUpDomId(t) || t)).attr(
      "transform",
      "translate(" + (e.node(t).x - e.node(t).width / 2) + "," + (e.node(t).y - e.node(t).height / 2) + " )"
    ));
  }), e.edges().forEach(function(t) {
    t !== void 0 && e.edge(t) !== void 0 && (w.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(e.edge(t))), R.drawEdge(n, e.edge(t), e.edge(t).relation, c, a));
  });
  const f = n.node().getBBox(), E = f.width + g * 2, b = f.height + g * 2;
  Tl(n, b, E, c.useMaxWidth);
  const w2 = `${f.x - g} ${f.y - g} ${E} ${b}`;
  w.debug(`viewBox ${w2}`), n.attr("viewBox", w2);
};
var B = {
  draw: $
};
var V = {
  parser: Lt,
  db: It,
  renderer: B,
  styles: xt,
  init: (r) => {
    r.class || (r.class = {}), r.class.arrowMarkerAbsolute = r.arrowMarkerAbsolute, It.clear();
  }
};
export {
  V as diagram
};
//# sourceMappingURL=classDiagram-09b02f81-6UXFJLG6.js.map
