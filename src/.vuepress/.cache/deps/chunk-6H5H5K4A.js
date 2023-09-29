import {
  C,
  E
} from "./chunk-PRAOQV5U.js";
import {
  Do,
  Io,
  Jb,
  Kb,
  Mn,
  Qb,
  Vb,
  Xb,
  Zb,
  e1,
  i1,
  r1,
  t1
} from "./chunk-RX2OIAPP.js";

// node_modules/.pnpm/mermaid@10.4.0/node_modules/mermaid/dist/arc-1026bbaf.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, D, q, h, v, Z, r) {
  var s = D - l, n = q - x, m = Z - h, i = r - v, a = i * s - m * n;
  if (!(a * a < Io))
    return a = (m * (x - v) - i * (l - h)) / a, [l + a * s, x + a * n];
}
function L(l, x, D, q, h, v, Z) {
  var r = l - D, s = x - q, n = (Z ? v : -v) / t1(r * r + s * s), m = n * s, i = -n * r, a = l + m, f = x + i, c = D + m, E2 = q + i, o = (a + c) / 2, I = (f + E2) / 2, p = c - a, g = E2 - f, A = p * p + g * g, O = h - v, b = a * E2 - c * f, S = (g < 0 ? -1 : 1) * t1(Zb(0, O * O * A - b * b)), X = (b * g - p * S) / A, d = (-b * p - g * S) / A, R = (b * g + p * S) / A, T = (-b * p + g * S) / A, e = X - o, u = d - I, $ = R - o, j = T - I;
  return e * e + u * u > $ * $ + j * j && (X = R, d = T), {
    cx: X,
    cy: d,
    x01: -m,
    y01: -i,
    x11: X * (h / O - 1),
    y11: d * (h / O - 1)
  };
}
function hn() {
  var l = fn, x = cn, D = E(0), q = null, h = yn, v = gn, Z = mn, r = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), a = +x.apply(this, arguments), f = h.apply(this, arguments) - Do, c = v.apply(this, arguments) - Do, E2 = Vb(c - f), o = c > f;
    if (r || (r = n = C()), a < i && (m = a, a = i, i = m), !(a > Io))
      r.moveTo(0, 0);
    else if (E2 > e1 - Io)
      r.moveTo(a * Kb(f), a * Qb(f)), r.arc(0, 0, a, f, c, !o), i > Io && (r.moveTo(i * Kb(c), i * Qb(c)), r.arc(0, 0, i, c, f, o));
    else {
      var I = f, p = c, g = f, A = c, O = E2, b = E2, S = Z.apply(this, arguments) / 2, X = S > Io && (q ? +q.apply(this, arguments) : t1(i * i + a * a)), d = Jb(Vb(a - i) / 2, +D.apply(this, arguments)), R = d, T = d, e, u;
      if (X > Io) {
        var $ = r1(X / i * Qb(S)), j = r1(X / a * Qb(S));
        (O -= $ * 2) > Io ? ($ *= o ? 1 : -1, g += $, A -= $) : (O = 0, g = A = (f + c) / 2), (b -= j * 2) > Io ? (j *= o ? 1 : -1, I += j, p -= j) : (b = 0, I = p = (f + c) / 2);
      }
      var B = a * Kb(I), C2 = a * Qb(I), G = i * Kb(A), H = i * Qb(A);
      if (d > Io) {
        var J = a * Kb(p), K = a * Qb(p), M = i * Kb(g), N = i * Qb(g), w;
        if (E2 < Mn && (w = pn(B, C2, M, N, J, K, G, H))) {
          var Q = B - w[0], U = C2 - w[1], V = J - w[0], W = K - w[1], _ = 1 / Qb(i1((Q * V + U * W) / (t1(Q * Q + U * U) * t1(V * V + W * W))) / 2), nn = t1(w[0] * w[0] + w[1] * w[1]);
          R = Jb(d, (i - nn) / (_ - 1)), T = Jb(d, (a - nn) / (_ + 1));
        }
      }
      b > Io ? T > Io ? (e = L(M, N, B, C2, a, T, o), u = L(J, K, G, H, a, T, o), r.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? r.arc(e.cx, e.cy, T, Xb(e.y01, e.x01), Xb(u.y01, u.x01), !o) : (r.arc(e.cx, e.cy, T, Xb(e.y01, e.x01), Xb(e.y11, e.x11), !o), r.arc(0, 0, a, Xb(e.cy + e.y11, e.cx + e.x11), Xb(u.cy + u.y11, u.cx + u.x11), !o), r.arc(u.cx, u.cy, T, Xb(u.y11, u.x11), Xb(u.y01, u.x01), !o))) : (r.moveTo(B, C2), r.arc(0, 0, a, I, p, !o)) : r.moveTo(B, C2), !(i > Io) || !(O > Io) ? r.lineTo(G, H) : R > Io ? (e = L(G, H, J, K, i, -R, o), u = L(B, C2, M, N, i, -R, o), r.lineTo(e.cx + e.x01, e.cy + e.y01), R < d ? r.arc(e.cx, e.cy, R, Xb(e.y01, e.x01), Xb(u.y01, u.x01), !o) : (r.arc(e.cx, e.cy, R, Xb(e.y01, e.x01), Xb(e.y11, e.x11), !o), r.arc(0, 0, i, Xb(e.cy + e.y11, e.cx + e.x11), Xb(u.cy + u.y11, u.cx + u.x11), o), r.arc(u.cx, u.cy, R, Xb(u.y11, u.x11), Xb(u.y01, u.x01), !o))) : r.arc(0, 0, i, A, g, o);
    }
    if (r.closePath(), n)
      return r = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - Mn / 2;
    return [Kb(m) * n, Qb(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (D = typeof n == "function" ? n : E(+n), s) : D;
  }, s.padRadius = function(n) {
    return arguments.length ? (q = n == null ? null : typeof n == "function" ? n : E(+n), s) : q;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (Z = typeof n == "function" ? n : E(+n), s) : Z;
  }, s.context = function(n) {
    return arguments.length ? (r = n ?? null, s) : r;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-6H5H5K4A.js.map
