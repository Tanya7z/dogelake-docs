// node_modules/.pnpm/mermaid@10.4.0/node_modules/mermaid/dist/mermaid-d733041c.js
function dh(t9) {
  for (var e = [], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  var r = Array.from(typeof t9 == "string" ? [t9] : t9);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = r.reduce(function(a, l) {
    var h = l.match(/\n([\t ]+|(?!\s).)/g);
    return h ? a.concat(h.map(function(c) {
      var u, g;
      return (g = (u = c.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && g !== void 0 ? g : 0;
    })) : a;
  }, []);
  if (n.length) {
    var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    r = r.map(function(a) {
      return a.replace(o, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var s = r[0];
  return e.forEach(function(a, l) {
    var h = s.match(/(?:^|\n)( *)$/), c = h ? h[1] : "", u = a;
    typeof a == "string" && a.includes(`
`) && (u = String(a).split(`
`).map(function(g, p) {
      return p === 0 ? g : "" + c + g;
    }).join(`
`)), s += u + r[l + 1];
  }), s;
}
var ph = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gh(t9) {
  return t9 && t9.__esModule && Object.prototype.hasOwnProperty.call(t9, "default") ? t9.default : t9;
}
var As = { exports: {} };
(function(t9, e) {
  (function(i, r) {
    t9.exports = r();
  })(ph, function() {
    var i = 1e3, r = 6e4, n = 36e5, o = "millisecond", s = "second", a = "minute", l = "hour", h = "day", c = "week", u = "month", g = "quarter", p = "year", _ = "date", v = "Invalid Date", O = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
      var T = ["th", "st", "nd", "rd"], x = E % 100;
      return "[" + E + (T[(x - 20) % 10] || T[x] || T[0]) + "]";
    } }, z = function(E, T, x) {
      var M = String(E);
      return !M || M.length >= T ? E : "" + Array(T + 1 - M.length).join(x) + E;
    }, Q = { s: z, z: function(E) {
      var T = -E.utcOffset(), x = Math.abs(T), M = Math.floor(x / 60), y = x % 60;
      return (T <= 0 ? "+" : "-") + z(M, 2, "0") + ":" + z(y, 2, "0");
    }, m: function E(T, x) {
      if (T.date() < x.date())
        return -E(x, T);
      var M = 12 * (x.year() - T.year()) + (x.month() - T.month()), y = T.clone().add(M, u), D = x - y < 0, k = T.clone().add(M + (D ? -1 : 1), u);
      return +(-(M + (x - y) / (D ? y - k : k - y)) || 0);
    }, a: function(E) {
      return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
    }, p: function(E) {
      return { M: u, y: p, w: c, d: h, D: _, h: l, m: a, s, ms: o, Q: g }[E] || String(E || "").toLowerCase().replace(/s$/, "");
    }, u: function(E) {
      return E === void 0;
    } }, X = "en", G = {};
    G[X] = S;
    var W = function(E) {
      return E instanceof Nt;
    }, Vt = function E(T, x, M) {
      var y;
      if (!T)
        return X;
      if (typeof T == "string") {
        var D = T.toLowerCase();
        G[D] && (y = D), x && (G[D] = x, y = D);
        var k = T.split("-");
        if (!y && k.length > 1)
          return E(k[0]);
      } else {
        var H = T.name;
        G[H] = T, y = H;
      }
      return !M && y && (X = y), y || !M && X;
    }, K = function(E, T) {
      if (W(E))
        return E.clone();
      var x = typeof T == "object" ? T : {};
      return x.date = E, x.args = arguments, new Nt(x);
    }, I = Q;
    I.l = Vt, I.i = W, I.w = function(E, T) {
      return K(E, { locale: T.$L, utc: T.$u, x: T.$x, $offset: T.$offset });
    };
    var Nt = function() {
      function E(x) {
        this.$L = Vt(x.locale, null, true), this.parse(x);
      }
      var T = E.prototype;
      return T.parse = function(x) {
        this.$d = function(M) {
          var y = M.date, D = M.utc;
          if (y === null)
            return /* @__PURE__ */ new Date(NaN);
          if (I.u(y))
            return /* @__PURE__ */ new Date();
          if (y instanceof Date)
            return new Date(y);
          if (typeof y == "string" && !/Z$/i.test(y)) {
            var k = y.match(O);
            if (k) {
              var H = k[2] - 1 || 0, R = (k[7] || "0").substring(0, 3);
              return D ? new Date(Date.UTC(k[1], H, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, R)) : new Date(k[1], H, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, R);
            }
          }
          return new Date(y);
        }(x), this.$x = x.x || {}, this.init();
      }, T.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, T.$utils = function() {
        return I;
      }, T.isValid = function() {
        return this.$d.toString() !== v;
      }, T.isSame = function(x, M) {
        var y = K(x);
        return this.startOf(M) <= y && y <= this.endOf(M);
      }, T.isAfter = function(x, M) {
        return K(x) < this.startOf(M);
      }, T.isBefore = function(x, M) {
        return this.endOf(M) < K(x);
      }, T.$g = function(x, M, y) {
        return I.u(x) ? this[M] : this.set(y, x);
      }, T.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, T.valueOf = function() {
        return this.$d.getTime();
      }, T.startOf = function(x, M) {
        var y = this, D = !!I.u(M) || M, k = I.p(x), H = function(Pt, it) {
          var st = I.w(y.$u ? Date.UTC(y.$y, it, Pt) : new Date(y.$y, it, Pt), y);
          return D ? st : st.endOf(h);
        }, R = function(Pt, it) {
          return I.w(y.toDate()[Pt].apply(y.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(it)), y);
        }, U = this.$W, q = this.$M, ct = this.$D, pt = "set" + (this.$u ? "UTC" : "");
        switch (k) {
          case p:
            return D ? H(1, 0) : H(31, 11);
          case u:
            return D ? H(1, q) : H(0, q + 1);
          case c:
            var Xt = this.$locale().weekStart || 0, Rt = (U < Xt ? U + 7 : U) - Xt;
            return H(D ? ct - Rt : ct + (6 - Rt), q);
          case h:
          case _:
            return R(pt + "Hours", 0);
          case l:
            return R(pt + "Minutes", 1);
          case a:
            return R(pt + "Seconds", 2);
          case s:
            return R(pt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, T.endOf = function(x) {
        return this.startOf(x, false);
      }, T.$set = function(x, M) {
        var y, D = I.p(x), k = "set" + (this.$u ? "UTC" : ""), H = (y = {}, y[h] = k + "Date", y[_] = k + "Date", y[u] = k + "Month", y[p] = k + "FullYear", y[l] = k + "Hours", y[a] = k + "Minutes", y[s] = k + "Seconds", y[o] = k + "Milliseconds", y)[D], R = D === h ? this.$D + (M - this.$W) : M;
        if (D === u || D === p) {
          var U = this.clone().set(_, 1);
          U.$d[H](R), U.init(), this.$d = U.set(_, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          H && this.$d[H](R);
        return this.init(), this;
      }, T.set = function(x, M) {
        return this.clone().$set(x, M);
      }, T.get = function(x) {
        return this[I.p(x)]();
      }, T.add = function(x, M) {
        var y, D = this;
        x = Number(x);
        var k = I.p(M), H = function(q) {
          var ct = K(D);
          return I.w(ct.date(ct.date() + Math.round(q * x)), D);
        };
        if (k === u)
          return this.set(u, this.$M + x);
        if (k === p)
          return this.set(p, this.$y + x);
        if (k === h)
          return H(1);
        if (k === c)
          return H(7);
        var R = (y = {}, y[a] = r, y[l] = n, y[s] = i, y)[k] || 1, U = this.$d.getTime() + x * R;
        return I.w(U, this);
      }, T.subtract = function(x, M) {
        return this.add(-1 * x, M);
      }, T.format = function(x) {
        var M = this, y = this.$locale();
        if (!this.isValid())
          return y.invalidDate || v;
        var D = x || "YYYY-MM-DDTHH:mm:ssZ", k = I.z(this), H = this.$H, R = this.$m, U = this.$M, q = y.weekdays, ct = y.months, pt = function(it, st, St, Kt) {
          return it && (it[st] || it(M, D)) || St[st].slice(0, Kt);
        }, Xt = function(it) {
          return I.s(H % 12 || 12, it, "0");
        }, Rt = y.meridiem || function(it, st, St) {
          var Kt = it < 12 ? "AM" : "PM";
          return St ? Kt.toLowerCase() : Kt;
        }, Pt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: I.s(U + 1, 2, "0"), MMM: pt(y.monthsShort, U, ct, 3), MMMM: pt(ct, U), D: this.$D, DD: I.s(this.$D, 2, "0"), d: String(this.$W), dd: pt(y.weekdaysMin, this.$W, q, 2), ddd: pt(y.weekdaysShort, this.$W, q, 3), dddd: q[this.$W], H: String(H), HH: I.s(H, 2, "0"), h: Xt(1), hh: Xt(2), a: Rt(H, R, true), A: Rt(H, R, false), m: String(R), mm: I.s(R, 2, "0"), s: String(this.$s), ss: I.s(this.$s, 2, "0"), SSS: I.s(this.$ms, 3, "0"), Z: k };
        return D.replace(P, function(it, st) {
          return st || Pt[it] || k.replace(":", "");
        });
      }, T.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, T.diff = function(x, M, y) {
        var D, k = I.p(M), H = K(x), R = (H.utcOffset() - this.utcOffset()) * r, U = this - H, q = I.m(this, H);
        return q = (D = {}, D[p] = q / 12, D[u] = q, D[g] = q / 3, D[c] = (U - R) / 6048e5, D[h] = (U - R) / 864e5, D[l] = U / n, D[a] = U / r, D[s] = U / i, D)[k] || U, y ? q : I.a(q);
      }, T.daysInMonth = function() {
        return this.endOf(u).$D;
      }, T.$locale = function() {
        return G[this.$L];
      }, T.locale = function(x, M) {
        if (!x)
          return this.$L;
        var y = this.clone(), D = Vt(x, M, true);
        return D && (y.$L = D), y;
      }, T.clone = function() {
        return I.w(this.$d, this);
      }, T.toDate = function() {
        return new Date(this.valueOf());
      }, T.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, T.toISOString = function() {
        return this.$d.toISOString();
      }, T.toString = function() {
        return this.$d.toUTCString();
      }, E;
    }(), At = Nt.prototype;
    return K.prototype = At, [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", h], ["$M", u], ["$y", p], ["$D", _]].forEach(function(E) {
      At[E[1]] = function(T) {
        return this.$g(T, E[0], E[1]);
      };
    }), K.extend = function(E, T) {
      return E.$i || (E(T, Nt, K), E.$i = true), K;
    }, K.locale = Vt, K.isDayjs = W, K.unix = function(E) {
      return K(1e3 * E);
    }, K.en = G[X], K.Ls = G, K.p = {}, K;
  });
})(As);
var mh = As.exports;
var _h = gh(mh);
var Wt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
};
var w = {
  trace: (...t9) => {
  },
  debug: (...t9) => {
  },
  info: (...t9) => {
  },
  warn: (...t9) => {
  },
  error: (...t9) => {
  },
  fatal: (...t9) => {
  }
};
var vn = function(t9 = "fatal") {
  let e = Wt.fatal;
  typeof t9 == "string" ? (t9 = t9.toLowerCase(), t9 in Wt && (e = Wt[t9])) : typeof t9 == "number" && (e = t9), w.trace = () => {
  }, w.debug = () => {
  }, w.info = () => {
  }, w.warn = () => {
  }, w.error = () => {
  }, w.fatal = () => {
  }, e <= Wt.fatal && (w.fatal = console.error ? console.error.bind(console, yt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", yt("FATAL"))), e <= Wt.error && (w.error = console.error ? console.error.bind(console, yt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", yt("ERROR"))), e <= Wt.warn && (w.warn = console.warn ? console.warn.bind(console, yt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", yt("WARN"))), e <= Wt.info && (w.info = console.info ? console.info.bind(console, yt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", yt("INFO"))), e <= Wt.debug && (w.debug = console.debug ? console.debug.bind(console, yt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", yt("DEBUG"))), e <= Wt.trace && (w.trace = console.debug ? console.debug.bind(console, yt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", yt("TRACE")));
};
var yt = (t9) => `%c${_h().format("ss.SSS")} : ${t9} : `;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: true });
var Es = kn.sanitizeUrl = void 0;
var yh = /^([^\w]*)(javascript|data|vbscript)/im;
var Ch = /&#(\w+)(^\w|;)?/g;
var xh = /&(newline|tab);/gi;
var bh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var Th = /^.+(:|&colon;)/gim;
var Sh = [".", "/"];
function vh(t9) {
  return Sh.indexOf(t9[0]) > -1;
}
function kh(t9) {
  return t9.replace(Ch, function(e, i) {
    return String.fromCharCode(i);
  });
}
function wh(t9) {
  var e = kh(t9 || "").replace(xh, "").replace(bh, "").trim();
  if (!e)
    return "about:blank";
  if (vh(e))
    return e;
  var i = e.match(Th);
  if (!i)
    return e;
  var r = i[0];
  return yh.test(r) ? "about:blank" : e;
}
Es = kn.sanitizeUrl = wh;
var Bh = { value: () => {
} };
function Os() {
  for (var t9 = 0, e = arguments.length, i = {}, r; t9 < e; ++t9) {
    if (!(r = arguments[t9] + "") || r in i || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    i[r] = [];
  }
  return new Fi(i);
}
function Fi(t9) {
  this._ = t9;
}
function Fh(t9, e) {
  return t9.trim().split(/^|\s+/).map(function(i) {
    var r = "", n = i.indexOf(".");
    if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i))
      throw new Error("unknown type: " + i);
    return { type: i, name: r };
  });
}
Fi.prototype = Os.prototype = {
  constructor: Fi,
  on: function(t9, e) {
    var i = this._, r = Fh(t9 + "", i), n, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((n = (t9 = r[o]).type) && (n = Lh(i[n], t9.name)))
          return n;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (n = (t9 = r[o]).type)
        i[n] = Co(i[n], t9.name, e);
      else if (e == null)
        for (n in i)
          i[n] = Co(i[n], t9.name, null);
    return this;
  },
  copy: function() {
    var t9 = {}, e = this._;
    for (var i in e)
      t9[i] = e[i].slice();
    return new Fi(t9);
  },
  call: function(t9, e) {
    if ((n = arguments.length - 2) > 0)
      for (var i = new Array(n), r = 0, n, o; r < n; ++r)
        i[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t9))
      throw new Error("unknown type: " + t9);
    for (o = this._[t9], r = 0, n = o.length; r < n; ++r)
      o[r].value.apply(e, i);
  },
  apply: function(t9, e, i) {
    if (!this._.hasOwnProperty(t9))
      throw new Error("unknown type: " + t9);
    for (var r = this._[t9], n = 0, o = r.length; n < o; ++n)
      r[n].value.apply(e, i);
  }
};
function Lh(t9, e) {
  for (var i = 0, r = t9.length, n; i < r; ++i)
    if ((n = t9[i]).name === e)
      return n.value;
}
function Co(t9, e, i) {
  for (var r = 0, n = t9.length; r < n; ++r)
    if (t9[r].name === e) {
      t9[r] = Bh, t9 = t9.slice(0, r).concat(t9.slice(r + 1));
      break;
    }
  return i != null && t9.push({ name: e, value: i }), t9;
}
var en = "http://www.w3.org/1999/xhtml";
var xo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: en,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function cr(t9) {
  var e = t9 += "", i = e.indexOf(":");
  return i >= 0 && (e = t9.slice(0, i)) !== "xmlns" && (t9 = t9.slice(i + 1)), xo.hasOwnProperty(e) ? { space: xo[e], local: t9 } : t9;
}
function Ah(t9) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === en && e.documentElement.namespaceURI === en ? e.createElement(t9) : e.createElementNS(i, t9);
  };
}
function Eh(t9) {
  return function() {
    return this.ownerDocument.createElementNS(t9.space, t9.local);
  };
}
function Ms(t9) {
  var e = cr(t9);
  return (e.local ? Eh : Ah)(e);
}
function Oh() {
}
function wn(t9) {
  return t9 == null ? Oh : function() {
    return this.querySelector(t9);
  };
}
function Mh(t9) {
  typeof t9 != "function" && (t9 = wn(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = new Array(s), l, h, c = 0; c < s; ++c)
      (l = o[c]) && (h = t9.call(l, l.__data__, c, o)) && ("__data__" in l && (h.__data__ = l.__data__), a[c] = h);
  return new mt(r, this._parents);
}
function $h(t9) {
  return t9 == null ? [] : Array.isArray(t9) ? t9 : Array.from(t9);
}
function Ih() {
  return [];
}
function $s(t9) {
  return t9 == null ? Ih : function() {
    return this.querySelectorAll(t9);
  };
}
function Dh(t9) {
  return function() {
    return $h(t9.apply(this, arguments));
  };
}
function Nh(t9) {
  typeof t9 == "function" ? t9 = Dh(t9) : t9 = $s(t9);
  for (var e = this._groups, i = e.length, r = [], n = [], o = 0; o < i; ++o)
    for (var s = e[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && (r.push(t9.call(l, l.__data__, h, s)), n.push(l));
  return new mt(r, n);
}
function Is(t9) {
  return function() {
    return this.matches(t9);
  };
}
function Ds(t9) {
  return function(e) {
    return e.matches(t9);
  };
}
var Rh = Array.prototype.find;
function Ph(t9) {
  return function() {
    return Rh.call(this.children, t9);
  };
}
function qh() {
  return this.firstElementChild;
}
function zh(t9) {
  return this.select(t9 == null ? qh : Ph(typeof t9 == "function" ? t9 : Ds(t9)));
}
var Wh = Array.prototype.filter;
function Hh() {
  return Array.from(this.children);
}
function jh(t9) {
  return function() {
    return Wh.call(this.children, t9);
  };
}
function Uh(t9) {
  return this.selectAll(t9 == null ? Hh : jh(typeof t9 == "function" ? t9 : Ds(t9)));
}
function Yh(t9) {
  typeof t9 != "function" && (t9 = Is(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t9.call(l, l.__data__, h, o) && a.push(l);
  return new mt(r, this._parents);
}
function Ns(t9) {
  return new Array(t9.length);
}
function Gh() {
  return new mt(this._enter || this._groups.map(Ns), this._parents);
}
function qi(t9, e) {
  this.ownerDocument = t9.ownerDocument, this.namespaceURI = t9.namespaceURI, this._next = null, this._parent = t9, this.__data__ = e;
}
qi.prototype = {
  constructor: qi,
  appendChild: function(t9) {
    return this._parent.insertBefore(t9, this._next);
  },
  insertBefore: function(t9, e) {
    return this._parent.insertBefore(t9, e);
  },
  querySelector: function(t9) {
    return this._parent.querySelector(t9);
  },
  querySelectorAll: function(t9) {
    return this._parent.querySelectorAll(t9);
  }
};
function Vh(t9) {
  return function() {
    return t9;
  };
}
function Xh(t9, e, i, r, n, o) {
  for (var s = 0, a, l = e.length, h = o.length; s < h; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : i[s] = new qi(t9, o[s]);
  for (; s < l; ++s)
    (a = e[s]) && (n[s] = a);
}
function Kh(t9, e, i, r, n, o, s) {
  var a, l, h = /* @__PURE__ */ new Map(), c = e.length, u = o.length, g = new Array(c), p;
  for (a = 0; a < c; ++a)
    (l = e[a]) && (g[a] = p = s.call(l, l.__data__, a, e) + "", h.has(p) ? n[a] = l : h.set(p, l));
  for (a = 0; a < u; ++a)
    p = s.call(t9, o[a], a, o) + "", (l = h.get(p)) ? (r[a] = l, l.__data__ = o[a], h.delete(p)) : i[a] = new qi(t9, o[a]);
  for (a = 0; a < c; ++a)
    (l = e[a]) && h.get(g[a]) === l && (n[a] = l);
}
function Zh(t9) {
  return t9.__data__;
}
function Jh(t9, e) {
  if (!arguments.length)
    return Array.from(this, Zh);
  var i = e ? Kh : Xh, r = this._parents, n = this._groups;
  typeof t9 != "function" && (t9 = Vh(t9));
  for (var o = n.length, s = new Array(o), a = new Array(o), l = new Array(o), h = 0; h < o; ++h) {
    var c = r[h], u = n[h], g = u.length, p = Qh(t9.call(c, c && c.__data__, h, r)), _ = p.length, v = a[h] = new Array(_), O = s[h] = new Array(_), P = l[h] = new Array(g);
    i(c, u, v, O, P, p, e);
    for (var S = 0, z = 0, Q, X; S < _; ++S)
      if (Q = v[S]) {
        for (S >= z && (z = S + 1); !(X = O[z]) && ++z < _; )
          ;
        Q._next = X || null;
      }
  }
  return s = new mt(s, r), s._enter = a, s._exit = l, s;
}
function Qh(t9) {
  return typeof t9 == "object" && "length" in t9 ? t9 : Array.from(t9);
}
function tc() {
  return new mt(this._exit || this._groups.map(Ns), this._parents);
}
function ec(t9, e, i) {
  var r = this.enter(), n = this, o = this.exit();
  return typeof t9 == "function" ? (r = t9(r), r && (r = r.selection())) : r = r.append(t9 + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? o.remove() : i(o), r && n ? r.merge(n).order() : n;
}
function ic(t9) {
  for (var e = t9.selection ? t9.selection() : t9, i = this._groups, r = e._groups, n = i.length, o = r.length, s = Math.min(n, o), a = new Array(n), l = 0; l < s; ++l)
    for (var h = i[l], c = r[l], u = h.length, g = a[l] = new Array(u), p, _ = 0; _ < u; ++_)
      (p = h[_] || c[_]) && (g[_] = p);
  for (; l < n; ++l)
    a[l] = i[l];
  return new mt(a, this._parents);
}
function rc() {
  for (var t9 = this._groups, e = -1, i = t9.length; ++e < i; )
    for (var r = t9[e], n = r.length - 1, o = r[n], s; --n >= 0; )
      (s = r[n]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function nc(t9) {
  t9 || (t9 = oc);
  function e(u, g) {
    return u && g ? t9(u.__data__, g.__data__) : !u - !g;
  }
  for (var i = this._groups, r = i.length, n = new Array(r), o = 0; o < r; ++o) {
    for (var s = i[o], a = s.length, l = n[o] = new Array(a), h, c = 0; c < a; ++c)
      (h = s[c]) && (l[c] = h);
    l.sort(e);
  }
  return new mt(n, this._parents).order();
}
function oc(t9, e) {
  return t9 < e ? -1 : t9 > e ? 1 : t9 >= e ? 0 : NaN;
}
function sc() {
  var t9 = arguments[0];
  return arguments[0] = this, t9.apply(null, arguments), this;
}
function ac() {
  return Array.from(this);
}
function lc() {
  for (var t9 = this._groups, e = 0, i = t9.length; e < i; ++e)
    for (var r = t9[e], n = 0, o = r.length; n < o; ++n) {
      var s = r[n];
      if (s)
        return s;
    }
  return null;
}
function hc() {
  let t9 = 0;
  for (const e of this)
    ++t9;
  return t9;
}
function cc() {
  return !this.node();
}
function uc(t9) {
  for (var e = this._groups, i = 0, r = e.length; i < r; ++i)
    for (var n = e[i], o = 0, s = n.length, a; o < s; ++o)
      (a = n[o]) && t9.call(a, a.__data__, o, n);
  return this;
}
function fc(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
function dc(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
function pc(t9, e) {
  return function() {
    this.setAttribute(t9, e);
  };
}
function gc(t9, e) {
  return function() {
    this.setAttributeNS(t9.space, t9.local, e);
  };
}
function mc(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t9) : this.setAttribute(t9, i);
  };
}
function _c(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t9.space, t9.local) : this.setAttributeNS(t9.space, t9.local, i);
  };
}
function yc(t9, e) {
  var i = cr(t9);
  if (arguments.length < 2) {
    var r = this.node();
    return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
  }
  return this.each((e == null ? i.local ? dc : fc : typeof e == "function" ? i.local ? _c : mc : i.local ? gc : pc)(i, e));
}
function Rs(t9) {
  return t9.ownerDocument && t9.ownerDocument.defaultView || t9.document && t9 || t9.defaultView;
}
function Cc(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
function xc(t9, e, i) {
  return function() {
    this.style.setProperty(t9, e, i);
  };
}
function bc(t9, e, i) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t9) : this.style.setProperty(t9, r, i);
  };
}
function Tc(t9, e, i) {
  return arguments.length > 1 ? this.each((e == null ? Cc : typeof e == "function" ? bc : xc)(t9, e, i ?? "")) : Le(this.node(), t9);
}
function Le(t9, e) {
  return t9.style.getPropertyValue(e) || Rs(t9).getComputedStyle(t9, null).getPropertyValue(e);
}
function Sc(t9) {
  return function() {
    delete this[t9];
  };
}
function vc(t9, e) {
  return function() {
    this[t9] = e;
  };
}
function kc(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t9] : this[t9] = i;
  };
}
function wc(t9, e) {
  return arguments.length > 1 ? this.each((e == null ? Sc : typeof e == "function" ? kc : vc)(t9, e)) : this.node()[t9];
}
function Ps(t9) {
  return t9.trim().split(/^|\s+/);
}
function Bn(t9) {
  return t9.classList || new qs(t9);
}
function qs(t9) {
  this._node = t9, this._names = Ps(t9.getAttribute("class") || "");
}
qs.prototype = {
  add: function(t9) {
    var e = this._names.indexOf(t9);
    e < 0 && (this._names.push(t9), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t9) {
    var e = this._names.indexOf(t9);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t9) {
    return this._names.indexOf(t9) >= 0;
  }
};
function zs(t9, e) {
  for (var i = Bn(t9), r = -1, n = e.length; ++r < n; )
    i.add(e[r]);
}
function Ws(t9, e) {
  for (var i = Bn(t9), r = -1, n = e.length; ++r < n; )
    i.remove(e[r]);
}
function Bc(t9) {
  return function() {
    zs(this, t9);
  };
}
function Fc(t9) {
  return function() {
    Ws(this, t9);
  };
}
function Lc(t9, e) {
  return function() {
    (e.apply(this, arguments) ? zs : Ws)(this, t9);
  };
}
function Ac(t9, e) {
  var i = Ps(t9 + "");
  if (arguments.length < 2) {
    for (var r = Bn(this.node()), n = -1, o = i.length; ++n < o; )
      if (!r.contains(i[n]))
        return false;
    return true;
  }
  return this.each((typeof e == "function" ? Lc : e ? Bc : Fc)(i, e));
}
function Ec() {
  this.textContent = "";
}
function Oc(t9) {
  return function() {
    this.textContent = t9;
  };
}
function Mc(t9) {
  return function() {
    var e = t9.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function $c(t9) {
  return arguments.length ? this.each(t9 == null ? Ec : (typeof t9 == "function" ? Mc : Oc)(t9)) : this.node().textContent;
}
function Ic() {
  this.innerHTML = "";
}
function Dc(t9) {
  return function() {
    this.innerHTML = t9;
  };
}
function Nc(t9) {
  return function() {
    var e = t9.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Rc(t9) {
  return arguments.length ? this.each(t9 == null ? Ic : (typeof t9 == "function" ? Nc : Dc)(t9)) : this.node().innerHTML;
}
function Pc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function qc() {
  return this.each(Pc);
}
function zc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Wc() {
  return this.each(zc);
}
function Hc(t9) {
  var e = typeof t9 == "function" ? t9 : Ms(t9);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function jc() {
  return null;
}
function Uc(t9, e) {
  var i = typeof t9 == "function" ? t9 : Ms(t9), r = e == null ? jc : typeof e == "function" ? e : wn(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Yc() {
  var t9 = this.parentNode;
  t9 && t9.removeChild(this);
}
function Gc() {
  return this.each(Yc);
}
function Vc() {
  var t9 = this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
function Xc() {
  var t9 = this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
function Kc(t9) {
  return this.select(t9 ? Xc : Vc);
}
function Zc(t9) {
  return arguments.length ? this.property("__data__", t9) : this.node().__data__;
}
function Jc(t9) {
  return function(e) {
    t9.call(this, e, this.__data__);
  };
}
function Qc(t9) {
  return t9.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: i };
  });
}
function tu(t9) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, r = -1, n = e.length, o; i < n; ++i)
        o = e[i], (!t9.type || o.type === t9.type) && o.name === t9.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function eu(t9, e, i) {
  return function() {
    var r = this.__on, n, o = Jc(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((n = r[s]).type === t9.type && n.name === t9.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = o, n.options = i), n.value = e;
          return;
        }
    }
    this.addEventListener(t9.type, o, i), n = { type: t9.type, name: t9.name, value: e, listener: o, options: i }, r ? r.push(n) : this.__on = [n];
  };
}
function iu(t9, e, i) {
  var r = Qc(t9 + ""), n, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, h = a.length, c; l < h; ++l)
        for (n = 0, c = a[l]; n < o; ++n)
          if ((s = r[n]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = e ? eu : tu, n = 0; n < o; ++n)
    this.each(a(r[n], e, i));
  return this;
}
function Hs(t9, e, i) {
  var r = Rs(t9), n = r.CustomEvent;
  typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, false, false)), t9.dispatchEvent(n);
}
function ru(t9, e) {
  return function() {
    return Hs(this, t9, e);
  };
}
function nu(t9, e) {
  return function() {
    return Hs(this, t9, e.apply(this, arguments));
  };
}
function ou(t9, e) {
  return this.each((typeof e == "function" ? nu : ru)(t9, e));
}
function* su() {
  for (var t9 = this._groups, e = 0, i = t9.length; e < i; ++e)
    for (var r = t9[e], n = 0, o = r.length, s; n < o; ++n)
      (s = r[n]) && (yield s);
}
var js = [null];
function mt(t9, e) {
  this._groups = t9, this._parents = e;
}
function li() {
  return new mt([[document.documentElement]], js);
}
function au() {
  return this;
}
mt.prototype = li.prototype = {
  constructor: mt,
  select: Mh,
  selectAll: Nh,
  selectChild: zh,
  selectChildren: Uh,
  filter: Yh,
  data: Jh,
  enter: Gh,
  exit: tc,
  join: ec,
  merge: ic,
  selection: au,
  order: rc,
  sort: nc,
  call: sc,
  nodes: ac,
  node: lc,
  size: hc,
  empty: cc,
  each: uc,
  attr: yc,
  style: Tc,
  property: wc,
  classed: Ac,
  text: $c,
  html: Rc,
  raise: qc,
  lower: Wc,
  append: Hc,
  insert: Uc,
  remove: Gc,
  clone: Kc,
  datum: Zc,
  on: iu,
  dispatch: ou,
  [Symbol.iterator]: su
};
function Ct(t9) {
  return typeof t9 == "string" ? new mt([[document.querySelector(t9)]], [document.documentElement]) : new mt([[t9]], js);
}
function Fn(t9, e, i) {
  t9.prototype = e.prototype = i, i.constructor = t9;
}
function Us(t9, e) {
  var i = Object.create(t9.prototype);
  for (var r in e)
    i[r] = e[r];
  return i;
}
function hi() {
}
var Ke = 0.7;
var zi = 1 / Ke;
var Fe = "\\s*([+-]?\\d+)\\s*";
var Ze = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var Ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var lu = /^#([0-9a-f]{3,8})$/;
var hu = new RegExp(`^rgb\\(${Fe},${Fe},${Fe}\\)$`);
var cu = new RegExp(`^rgb\\(${Ot},${Ot},${Ot}\\)$`);
var uu = new RegExp(`^rgba\\(${Fe},${Fe},${Fe},${Ze}\\)$`);
var fu = new RegExp(`^rgba\\(${Ot},${Ot},${Ot},${Ze}\\)$`);
var du = new RegExp(`^hsl\\(${Ze},${Ot},${Ot}\\)$`);
var pu = new RegExp(`^hsla\\(${Ze},${Ot},${Ot},${Ze}\\)$`);
var bo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Fn(hi, Je, {
  copy(t9) {
    return Object.assign(new this.constructor(), this, t9);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: To,
  // Deprecated! Use color.formatHex.
  formatHex: To,
  formatHex8: gu,
  formatHsl: mu,
  formatRgb: So,
  toString: So
});
function To() {
  return this.rgb().formatHex();
}
function gu() {
  return this.rgb().formatHex8();
}
function mu() {
  return Ys(this).formatHsl();
}
function So() {
  return this.rgb().formatRgb();
}
function Je(t9) {
  var e, i;
  return t9 = (t9 + "").trim().toLowerCase(), (e = lu.exec(t9)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? vo(e) : i === 3 ? new ft(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? Ci(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? Ci(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = hu.exec(t9)) ? new ft(e[1], e[2], e[3], 1) : (e = cu.exec(t9)) ? new ft(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = uu.exec(t9)) ? Ci(e[1], e[2], e[3], e[4]) : (e = fu.exec(t9)) ? Ci(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = du.exec(t9)) ? Bo(e[1], e[2] / 100, e[3] / 100, 1) : (e = pu.exec(t9)) ? Bo(e[1], e[2] / 100, e[3] / 100, e[4]) : bo.hasOwnProperty(t9) ? vo(bo[t9]) : t9 === "transparent" ? new ft(NaN, NaN, NaN, 0) : null;
}
function vo(t9) {
  return new ft(t9 >> 16 & 255, t9 >> 8 & 255, t9 & 255, 1);
}
function Ci(t9, e, i, r) {
  return r <= 0 && (t9 = e = i = NaN), new ft(t9, e, i, r);
}
function _u(t9) {
  return t9 instanceof hi || (t9 = Je(t9)), t9 ? (t9 = t9.rgb(), new ft(t9.r, t9.g, t9.b, t9.opacity)) : new ft();
}
function rn(t9, e, i, r) {
  return arguments.length === 1 ? _u(t9) : new ft(t9, e, i, r ?? 1);
}
function ft(t9, e, i, r) {
  this.r = +t9, this.g = +e, this.b = +i, this.opacity = +r;
}
Fn(ft, rn, Us(hi, {
  brighter(t9) {
    return t9 = t9 == null ? zi : Math.pow(zi, t9), new ft(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Ke : Math.pow(Ke, t9), new ft(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ft(ce(this.r), ce(this.g), ce(this.b), Wi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ko,
  // Deprecated! Use color.formatHex.
  formatHex: ko,
  formatHex8: yu,
  formatRgb: wo,
  toString: wo
}));
function ko() {
  return `#${he(this.r)}${he(this.g)}${he(this.b)}`;
}
function yu() {
  return `#${he(this.r)}${he(this.g)}${he(this.b)}${he((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function wo() {
  const t9 = Wi(this.opacity);
  return `${t9 === 1 ? "rgb(" : "rgba("}${ce(this.r)}, ${ce(this.g)}, ${ce(this.b)}${t9 === 1 ? ")" : `, ${t9})`}`;
}
function Wi(t9) {
  return isNaN(t9) ? 1 : Math.max(0, Math.min(1, t9));
}
function ce(t9) {
  return Math.max(0, Math.min(255, Math.round(t9) || 0));
}
function he(t9) {
  return t9 = ce(t9), (t9 < 16 ? "0" : "") + t9.toString(16);
}
function Bo(t9, e, i, r) {
  return r <= 0 ? t9 = e = i = NaN : i <= 0 || i >= 1 ? t9 = e = NaN : e <= 0 && (t9 = NaN), new kt(t9, e, i, r);
}
function Ys(t9) {
  if (t9 instanceof kt)
    return new kt(t9.h, t9.s, t9.l, t9.opacity);
  if (t9 instanceof hi || (t9 = Je(t9)), !t9)
    return new kt();
  if (t9 instanceof kt)
    return t9;
  t9 = t9.rgb();
  var e = t9.r / 255, i = t9.g / 255, r = t9.b / 255, n = Math.min(e, i, r), o = Math.max(e, i, r), s = NaN, a = o - n, l = (o + n) / 2;
  return a ? (e === o ? s = (i - r) / a + (i < r) * 6 : i === o ? s = (r - e) / a + 2 : s = (e - i) / a + 4, a /= l < 0.5 ? o + n : 2 - o - n, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new kt(s, a, l, t9.opacity);
}
function Cu(t9, e, i, r) {
  return arguments.length === 1 ? Ys(t9) : new kt(t9, e, i, r ?? 1);
}
function kt(t9, e, i, r) {
  this.h = +t9, this.s = +e, this.l = +i, this.opacity = +r;
}
Fn(kt, Cu, Us(hi, {
  brighter(t9) {
    return t9 = t9 == null ? zi : Math.pow(zi, t9), new kt(this.h, this.s, this.l * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Ke : Math.pow(Ke, t9), new kt(this.h, this.s, this.l * t9, this.opacity);
  },
  rgb() {
    var t9 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t9) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
    return new ft(
      Pr(t9 >= 240 ? t9 - 240 : t9 + 120, n, r),
      Pr(t9, n, r),
      Pr(t9 < 120 ? t9 + 240 : t9 - 120, n, r),
      this.opacity
    );
  },
  clamp() {
    return new kt(Fo(this.h), xi(this.s), xi(this.l), Wi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t9 = Wi(this.opacity);
    return `${t9 === 1 ? "hsl(" : "hsla("}${Fo(this.h)}, ${xi(this.s) * 100}%, ${xi(this.l) * 100}%${t9 === 1 ? ")" : `, ${t9})`}`;
  }
}));
function Fo(t9) {
  return t9 = (t9 || 0) % 360, t9 < 0 ? t9 + 360 : t9;
}
function xi(t9) {
  return Math.max(0, Math.min(1, t9 || 0));
}
function Pr(t9, e, i) {
  return (t9 < 60 ? e + (i - e) * t9 / 60 : t9 < 180 ? i : t9 < 240 ? e + (i - e) * (240 - t9) / 60 : e) * 255;
}
var Ln = (t9) => () => t9;
function Gs(t9, e) {
  return function(i) {
    return t9 + i * e;
  };
}
function xu(t9, e, i) {
  return t9 = Math.pow(t9, i), e = Math.pow(e, i) - t9, i = 1 / i, function(r) {
    return Math.pow(t9 + r * e, i);
  };
}
function Gb(t9, e) {
  var i = e - t9;
  return i ? Gs(t9, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : Ln(isNaN(t9) ? e : t9);
}
function bu(t9) {
  return (t9 = +t9) == 1 ? Vs : function(e, i) {
    return i - e ? xu(e, i, t9) : Ln(isNaN(e) ? i : e);
  };
}
function Vs(t9, e) {
  var i = e - t9;
  return i ? Gs(t9, i) : Ln(isNaN(t9) ? e : t9);
}
var Lo = function t(e) {
  var i = bu(e);
  function r(n, o) {
    var s = i((n = rn(n)).r, (o = rn(o)).r), a = i(n.g, o.g), l = i(n.b, o.b), h = Vs(n.opacity, o.opacity);
    return function(c) {
      return n.r = s(c), n.g = a(c), n.b = l(c), n.opacity = h(c), n + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Qt(t9, e) {
  return t9 = +t9, e = +e, function(i) {
    return t9 * (1 - i) + e * i;
  };
}
var nn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var qr = new RegExp(nn.source, "g");
function Tu(t9) {
  return function() {
    return t9;
  };
}
function Su(t9) {
  return function(e) {
    return t9(e) + "";
  };
}
function vu(t9, e) {
  var i = nn.lastIndex = qr.lastIndex = 0, r, n, o, s = -1, a = [], l = [];
  for (t9 = t9 + "", e = e + ""; (r = nn.exec(t9)) && (n = qr.exec(e)); )
    (o = n.index) > i && (o = e.slice(i, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (n = n[0]) ? a[s] ? a[s] += n : a[++s] = n : (a[++s] = null, l.push({ i: s, x: Qt(r, n) })), i = qr.lastIndex;
  return i < e.length && (o = e.slice(i), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? l[0] ? Su(l[0].x) : Tu(e) : (e = l.length, function(h) {
    for (var c = 0, u; c < e; ++c)
      a[(u = l[c]).i] = u.x(h);
    return a.join("");
  });
}
var Ao = 180 / Math.PI;
var on = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xs(t9, e, i, r, n, o) {
  var s, a, l;
  return (s = Math.sqrt(t9 * t9 + e * e)) && (t9 /= s, e /= s), (l = t9 * i + e * r) && (i -= t9 * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t9 * r < e * i && (t9 = -t9, e = -e, l = -l, s = -s), {
    translateX: n,
    translateY: o,
    rotate: Math.atan2(e, t9) * Ao,
    skewX: Math.atan(l) * Ao,
    scaleX: s,
    scaleY: a
  };
}
var bi;
function ku(t9) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t9 + "");
  return e.isIdentity ? on : Xs(e.a, e.b, e.c, e.d, e.e, e.f);
}
function wu(t9) {
  return t9 == null || (bi || (bi = document.createElementNS("http://www.w3.org/2000/svg", "g")), bi.setAttribute("transform", t9), !(t9 = bi.transform.baseVal.consolidate())) ? on : (t9 = t9.matrix, Xs(t9.a, t9.b, t9.c, t9.d, t9.e, t9.f));
}
function Ks(t9, e, i, r) {
  function n(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, c, u, g, p, _) {
    if (h !== u || c !== g) {
      var v = p.push("translate(", null, e, null, i);
      _.push({ i: v - 4, x: Qt(h, u) }, { i: v - 2, x: Qt(c, g) });
    } else
      (u || g) && p.push("translate(" + u + e + g + i);
  }
  function s(h, c, u, g) {
    h !== c ? (h - c > 180 ? c += 360 : c - h > 180 && (h += 360), g.push({ i: u.push(n(u) + "rotate(", null, r) - 2, x: Qt(h, c) })) : c && u.push(n(u) + "rotate(" + c + r);
  }
  function a(h, c, u, g) {
    h !== c ? g.push({ i: u.push(n(u) + "skewX(", null, r) - 2, x: Qt(h, c) }) : c && u.push(n(u) + "skewX(" + c + r);
  }
  function l(h, c, u, g, p, _) {
    if (h !== u || c !== g) {
      var v = p.push(n(p) + "scale(", null, ",", null, ")");
      _.push({ i: v - 4, x: Qt(h, u) }, { i: v - 2, x: Qt(c, g) });
    } else
      (u !== 1 || g !== 1) && p.push(n(p) + "scale(" + u + "," + g + ")");
  }
  return function(h, c) {
    var u = [], g = [];
    return h = t9(h), c = t9(c), o(h.translateX, h.translateY, c.translateX, c.translateY, u, g), s(h.rotate, c.rotate, u, g), a(h.skewX, c.skewX, u, g), l(h.scaleX, h.scaleY, c.scaleX, c.scaleY, u, g), h = c = null, function(p) {
      for (var _ = -1, v = g.length, O; ++_ < v; )
        u[(O = g[_]).i] = O.x(p);
      return u.join("");
    };
  };
}
var Bu = Ks(ku, "px, ", "px)", "deg)");
var Fu = Ks(wu, ", ", ")", ")");
var Ae = 0;
var He = 0;
var Pe = 0;
var Zs = 1e3;
var Hi;
var je;
var ji = 0;
var de = 0;
var ur = 0;
var Qe = typeof performance == "object" && performance.now ? performance : Date;
var Js = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t9) {
  setTimeout(t9, 17);
};
function An() {
  return de || (Js(Lu), de = Qe.now() + ur);
}
function Lu() {
  de = 0;
}
function Ui() {
  this._call = this._time = this._next = null;
}
Ui.prototype = Qs.prototype = {
  constructor: Ui,
  restart: function(t9, e, i) {
    if (typeof t9 != "function")
      throw new TypeError("callback is not a function");
    i = (i == null ? An() : +i) + (e == null ? 0 : +e), !this._next && je !== this && (je ? je._next = this : Hi = this, je = this), this._call = t9, this._time = i, sn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, sn());
  }
};
function Qs(t9, e, i) {
  var r = new Ui();
  return r.restart(t9, e, i), r;
}
function Au() {
  An(), ++Ae;
  for (var t9 = Hi, e; t9; )
    (e = de - t9._time) >= 0 && t9._call.call(void 0, e), t9 = t9._next;
  --Ae;
}
function Eo() {
  de = (ji = Qe.now()) + ur, Ae = He = 0;
  try {
    Au();
  } finally {
    Ae = 0, Ou(), de = 0;
  }
}
function Eu() {
  var t9 = Qe.now(), e = t9 - ji;
  e > Zs && (ur -= e, ji = t9);
}
function Ou() {
  for (var t9, e = Hi, i, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t9 = e, e = e._next) : (i = e._next, e._next = null, e = t9 ? t9._next = i : Hi = i);
  je = t9, sn(r);
}
function sn(t9) {
  if (!Ae) {
    He && (He = clearTimeout(He));
    var e = t9 - de;
    e > 24 ? (t9 < 1 / 0 && (He = setTimeout(Eo, t9 - Qe.now() - ur)), Pe && (Pe = clearInterval(Pe))) : (Pe || (ji = Qe.now(), Pe = setInterval(Eu, Zs)), Ae = 1, Js(Eo));
  }
}
function Oo(t9, e, i) {
  var r = new Ui();
  return e = e == null ? 0 : +e, r.restart((n) => {
    r.stop(), t9(n + e);
  }, e, i), r;
}
var Mu = Os("start", "end", "cancel", "interrupt");
var $u = [];
var ta = 0;
var Mo = 1;
var an = 2;
var Li = 3;
var $o = 4;
var ln = 5;
var Ai = 6;
function fr(t9, e, i, r, n, o) {
  var s = t9.__transition;
  if (!s)
    t9.__transition = {};
  else if (i in s)
    return;
  Iu(t9, i, {
    name: e,
    index: r,
    // For context during callback.
    group: n,
    // For context during callback.
    on: Mu,
    tween: $u,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ta
  });
}
function En(t9, e) {
  var i = Lt(t9, e);
  if (i.state > ta)
    throw new Error("too late; already scheduled");
  return i;
}
function It(t9, e) {
  var i = Lt(t9, e);
  if (i.state > Li)
    throw new Error("too late; already running");
  return i;
}
function Lt(t9, e) {
  var i = t9.__transition;
  if (!i || !(i = i[e]))
    throw new Error("transition not found");
  return i;
}
function Iu(t9, e, i) {
  var r = t9.__transition, n;
  r[e] = i, i.timer = Qs(o, 0, i.time);
  function o(h) {
    i.state = Mo, i.timer.restart(s, i.delay, i.time), i.delay <= h && s(h - i.delay);
  }
  function s(h) {
    var c, u, g, p;
    if (i.state !== Mo)
      return l();
    for (c in r)
      if (p = r[c], p.name === i.name) {
        if (p.state === Li)
          return Oo(s);
        p.state === $o ? (p.state = Ai, p.timer.stop(), p.on.call("interrupt", t9, t9.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = Ai, p.timer.stop(), p.on.call("cancel", t9, t9.__data__, p.index, p.group), delete r[c]);
      }
    if (Oo(function() {
      i.state === Li && (i.state = $o, i.timer.restart(a, i.delay, i.time), a(h));
    }), i.state = an, i.on.call("start", t9, t9.__data__, i.index, i.group), i.state === an) {
      for (i.state = Li, n = new Array(g = i.tween.length), c = 0, u = -1; c < g; ++c)
        (p = i.tween[c].value.call(t9, t9.__data__, i.index, i.group)) && (n[++u] = p);
      n.length = u + 1;
    }
  }
  function a(h) {
    for (var c = h < i.duration ? i.ease.call(null, h / i.duration) : (i.timer.restart(l), i.state = ln, 1), u = -1, g = n.length; ++u < g; )
      n[u].call(t9, c);
    i.state === ln && (i.on.call("end", t9, t9.__data__, i.index, i.group), l());
  }
  function l() {
    i.state = Ai, i.timer.stop(), delete r[e];
    for (var h in r)
      return;
    delete t9.__transition;
  }
}
function Du(t9, e) {
  var i = t9.__transition, r, n, o = true, s;
  if (i) {
    e = e == null ? null : e + "";
    for (s in i) {
      if ((r = i[s]).name !== e) {
        o = false;
        continue;
      }
      n = r.state > an && r.state < ln, r.state = Ai, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t9, t9.__data__, r.index, r.group), delete i[s];
    }
    o && delete t9.__transition;
  }
}
function Nu(t9) {
  return this.each(function() {
    Du(this, t9);
  });
}
function Ru(t9, e) {
  var i, r;
  return function() {
    var n = It(this, t9), o = n.tween;
    if (o !== i) {
      r = i = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    n.tween = r;
  };
}
function Pu(t9, e, i) {
  var r, n;
  if (typeof i != "function")
    throw new Error();
  return function() {
    var o = It(this, t9), s = o.tween;
    if (s !== r) {
      n = (r = s).slice();
      for (var a = { name: e, value: i }, l = 0, h = n.length; l < h; ++l)
        if (n[l].name === e) {
          n[l] = a;
          break;
        }
      l === h && n.push(a);
    }
    o.tween = n;
  };
}
function qu(t9, e) {
  var i = this._id;
  if (t9 += "", arguments.length < 2) {
    for (var r = Lt(this.node(), i).tween, n = 0, o = r.length, s; n < o; ++n)
      if ((s = r[n]).name === t9)
        return s.value;
    return null;
  }
  return this.each((e == null ? Ru : Pu)(i, t9, e));
}
function On(t9, e, i) {
  var r = t9._id;
  return t9.each(function() {
    var n = It(this, r);
    (n.value || (n.value = {}))[e] = i.apply(this, arguments);
  }), function(n) {
    return Lt(n, r).value[e];
  };
}
function ea(t9, e) {
  var i;
  return (typeof e == "number" ? Qt : e instanceof Je ? Lo : (i = Je(e)) ? (e = i, Lo) : vu)(t9, e);
}
function zu(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
function Wu(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
function Hu(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttribute(t9);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function ju(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttributeNS(t9.space, t9.local);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Uu(t9, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttribute(t9) : (s = this.getAttribute(t9), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function Yu(t9, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttributeNS(t9.space, t9.local) : (s = this.getAttributeNS(t9.space, t9.local), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function Gu(t9, e) {
  var i = cr(t9), r = i === "transform" ? Fu : ea;
  return this.attrTween(t9, typeof e == "function" ? (i.local ? Yu : Uu)(i, r, On(this, "attr." + t9, e)) : e == null ? (i.local ? Wu : zu)(i) : (i.local ? ju : Hu)(i, r, e));
}
function Vu(t9, e) {
  return function(i) {
    this.setAttribute(t9, e.call(this, i));
  };
}
function Xu(t9, e) {
  return function(i) {
    this.setAttributeNS(t9.space, t9.local, e.call(this, i));
  };
}
function Ku(t9, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Xu(t9, o)), i;
  }
  return n._value = e, n;
}
function Zu(t9, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Vu(t9, o)), i;
  }
  return n._value = e, n;
}
function Ju(t9, e) {
  var i = "attr." + t9;
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  var r = cr(t9);
  return this.tween(i, (r.local ? Ku : Zu)(r, e));
}
function Qu(t9, e) {
  return function() {
    En(this, t9).delay = +e.apply(this, arguments);
  };
}
function tf(t9, e) {
  return e = +e, function() {
    En(this, t9).delay = e;
  };
}
function ef(t9) {
  var e = this._id;
  return arguments.length ? this.each((typeof t9 == "function" ? Qu : tf)(e, t9)) : Lt(this.node(), e).delay;
}
function rf(t9, e) {
  return function() {
    It(this, t9).duration = +e.apply(this, arguments);
  };
}
function nf(t9, e) {
  return e = +e, function() {
    It(this, t9).duration = e;
  };
}
function of(t9) {
  var e = this._id;
  return arguments.length ? this.each((typeof t9 == "function" ? rf : nf)(e, t9)) : Lt(this.node(), e).duration;
}
function sf(t9, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    It(this, t9).ease = e;
  };
}
function af(t9) {
  var e = this._id;
  return arguments.length ? this.each(sf(e, t9)) : Lt(this.node(), e).ease;
}
function lf(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function")
      throw new Error();
    It(this, t9).ease = i;
  };
}
function hf(t9) {
  if (typeof t9 != "function")
    throw new Error();
  return this.each(lf(this._id, t9));
}
function cf(t9) {
  typeof t9 != "function" && (t9 = Is(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t9.call(l, l.__data__, h, o) && a.push(l);
  return new Yt(r, this._parents, this._name, this._id);
}
function uf(t9) {
  if (t9._id !== this._id)
    throw new Error();
  for (var e = this._groups, i = t9._groups, r = e.length, n = i.length, o = Math.min(r, n), s = new Array(r), a = 0; a < o; ++a)
    for (var l = e[a], h = i[a], c = l.length, u = s[a] = new Array(c), g, p = 0; p < c; ++p)
      (g = l[p] || h[p]) && (u[p] = g);
  for (; a < r; ++a)
    s[a] = e[a];
  return new Yt(s, this._parents, this._name, this._id);
}
function ff(t9) {
  return (t9 + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function df(t9, e, i) {
  var r, n, o = ff(e) ? En : It;
  return function() {
    var s = o(this, t9), a = s.on;
    a !== r && (n = (r = a).copy()).on(e, i), s.on = n;
  };
}
function pf(t9, e) {
  var i = this._id;
  return arguments.length < 2 ? Lt(this.node(), i).on.on(t9) : this.each(df(i, t9, e));
}
function gf(t9) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition)
      if (+i !== t9)
        return;
    e && e.removeChild(this);
  };
}
function mf() {
  return this.on("end.remove", gf(this._id));
}
function _f(t9) {
  var e = this._name, i = this._id;
  typeof t9 != "function" && (t9 = wn(t9));
  for (var r = this._groups, n = r.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = r[s], l = a.length, h = o[s] = new Array(l), c, u, g = 0; g < l; ++g)
      (c = a[g]) && (u = t9.call(c, c.__data__, g, a)) && ("__data__" in c && (u.__data__ = c.__data__), h[g] = u, fr(h[g], e, i, g, h, Lt(c, i)));
  return new Yt(o, this._parents, e, i);
}
function yf(t9) {
  var e = this._name, i = this._id;
  typeof t9 != "function" && (t9 = $s(t9));
  for (var r = this._groups, n = r.length, o = [], s = [], a = 0; a < n; ++a)
    for (var l = r[a], h = l.length, c, u = 0; u < h; ++u)
      if (c = l[u]) {
        for (var g = t9.call(c, c.__data__, u, l), p, _ = Lt(c, i), v = 0, O = g.length; v < O; ++v)
          (p = g[v]) && fr(p, e, i, v, g, _);
        o.push(g), s.push(c);
      }
  return new Yt(o, s, e, i);
}
var Cf = li.prototype.constructor;
function xf() {
  return new Cf(this._groups, this._parents);
}
function bf(t9, e) {
  var i, r, n;
  return function() {
    var o = Le(this, t9), s = (this.style.removeProperty(t9), Le(this, t9));
    return o === s ? null : o === i && s === r ? n : n = e(i = o, r = s);
  };
}
function ia(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
function Tf(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = Le(this, t9);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Sf(t9, e, i) {
  var r, n, o;
  return function() {
    var s = Le(this, t9), a = i(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t9), Le(this, t9))), s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a));
  };
}
function vf(t9, e) {
  var i, r, n, o = "style." + e, s = "end." + o, a;
  return function() {
    var l = It(this, t9), h = l.on, c = l.value[o] == null ? a || (a = ia(e)) : void 0;
    (h !== i || n !== c) && (r = (i = h).copy()).on(s, n = c), l.on = r;
  };
}
function kf(t9, e, i) {
  var r = (t9 += "") == "transform" ? Bu : ea;
  return e == null ? this.styleTween(t9, bf(t9, r)).on("end.style." + t9, ia(t9)) : typeof e == "function" ? this.styleTween(t9, Sf(t9, r, On(this, "style." + t9, e))).each(vf(this._id, t9)) : this.styleTween(t9, Tf(t9, r, e), i).on("end.style." + t9, null);
}
function wf(t9, e, i) {
  return function(r) {
    this.style.setProperty(t9, e.call(this, r), i);
  };
}
function Bf(t9, e, i) {
  var r, n;
  function o() {
    var s = e.apply(this, arguments);
    return s !== n && (r = (n = s) && wf(t9, s, i)), r;
  }
  return o._value = e, o;
}
function Ff(t9, e, i) {
  var r = "style." + (t9 += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, Bf(t9, e, i ?? ""));
}
function Lf(t9) {
  return function() {
    this.textContent = t9;
  };
}
function Af(t9) {
  return function() {
    var e = t9(this);
    this.textContent = e ?? "";
  };
}
function Ef(t9) {
  return this.tween("text", typeof t9 == "function" ? Af(On(this, "text", t9)) : Lf(t9 == null ? "" : t9 + ""));
}
function Of(t9) {
  return function(e) {
    this.textContent = t9.call(this, e);
  };
}
function Mf(t9) {
  var e, i;
  function r() {
    var n = t9.apply(this, arguments);
    return n !== i && (e = (i = n) && Of(n)), e;
  }
  return r._value = t9, r;
}
function $f(t9) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t9 == null)
    return this.tween(e, null);
  if (typeof t9 != "function")
    throw new Error();
  return this.tween(e, Mf(t9));
}
function If() {
  for (var t9 = this._name, e = this._id, i = ra(), r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      if (l = s[h]) {
        var c = Lt(l, e);
        fr(l, t9, i, h, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Yt(r, this._parents, t9, i);
}
function Df() {
  var t9, e, i = this, r = i._id, n = i.size();
  return new Promise(function(o, s) {
    var a = { value: s }, l = { value: function() {
      --n === 0 && o();
    } };
    i.each(function() {
      var h = It(this, r), c = h.on;
      c !== t9 && (e = (t9 = c).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), h.on = e;
    }), n === 0 && o();
  });
}
var Nf = 0;
function Yt(t9, e, i, r) {
  this._groups = t9, this._parents = e, this._name = i, this._id = r;
}
function ra() {
  return ++Nf;
}
var Ht = li.prototype;
Yt.prototype = {
  constructor: Yt,
  select: _f,
  selectAll: yf,
  selectChild: Ht.selectChild,
  selectChildren: Ht.selectChildren,
  filter: cf,
  merge: uf,
  selection: xf,
  transition: If,
  call: Ht.call,
  nodes: Ht.nodes,
  node: Ht.node,
  size: Ht.size,
  empty: Ht.empty,
  each: Ht.each,
  on: pf,
  attr: Gu,
  attrTween: Ju,
  style: kf,
  styleTween: Ff,
  text: Ef,
  textTween: $f,
  remove: mf,
  tween: qu,
  delay: ef,
  duration: of,
  ease: af,
  easeVarying: hf,
  end: Df,
  [Symbol.iterator]: Ht[Symbol.iterator]
};
function Rf(t9) {
  return ((t9 *= 2) <= 1 ? t9 * t9 * t9 : (t9 -= 2) * t9 * t9 + 2) / 2;
}
var Pf = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Rf
};
function qf(t9, e) {
  for (var i; !(i = t9.__transition) || !(i = i[e]); )
    if (!(t9 = t9.parentNode))
      throw new Error(`transition ${e} not found`);
  return i;
}
function zf(t9) {
  var e, i;
  t9 instanceof Yt ? (e = t9._id, t9 = t9._name) : (e = ra(), (i = Pf).time = An(), t9 = t9 == null ? null : t9 + "");
  for (var r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && fr(l, t9, e, h, s, i || qf(l, e));
  return new Yt(r, this._parents, t9, e);
}
li.prototype.interrupt = Nu;
li.prototype.transition = zf;
var Vb = Math.abs;
var Xb = Math.atan2;
var Kb = Math.cos;
var Zb = Math.max;
var Jb = Math.min;
var Qb = Math.sin;
var t1 = Math.sqrt;
var Io = 1e-12;
var Mn = Math.PI;
var Do = Mn / 2;
var e1 = 2 * Mn;
function i1(t9) {
  return t9 > 1 ? 0 : t9 < -1 ? Mn : Math.acos(t9);
}
function r1(t9) {
  return t9 >= 1 ? Do : t9 <= -1 ? -Do : Math.asin(t9);
}
function na(t9) {
  this._context = t9;
}
na.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t9, e);
        break;
    }
  }
};
function Wf(t9) {
  return new na(t9);
}
var oa = class {
  constructor(e, i) {
    this._context = e, this._x = i;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
};
function Hf(t9) {
  return new oa(t9, true);
}
function jf(t9) {
  return new oa(t9, false);
}
function ie() {
}
function Yi(t9, e, i) {
  t9._context.bezierCurveTo(
    (2 * t9._x0 + t9._x1) / 3,
    (2 * t9._y0 + t9._y1) / 3,
    (t9._x0 + 2 * t9._x1) / 3,
    (t9._y0 + 2 * t9._y1) / 3,
    (t9._x0 + 4 * t9._x1 + e) / 6,
    (t9._y0 + 4 * t9._y1 + i) / 6
  );
}
function dr(t9) {
  this._context = t9;
}
dr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Yi(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Yi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function Uf(t9) {
  return new dr(t9);
}
function sa(t9) {
  this._context = t9;
}
sa.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t9, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t9, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t9, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t9) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        Yi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function Yf(t9) {
  return new sa(t9);
}
function aa(t9) {
  this._context = t9;
}
aa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i = (this._x0 + 4 * this._x1 + t9) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
        break;
      case 3:
        this._point = 4;
      default:
        Yi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function Gf(t9) {
  return new aa(t9);
}
function la(t9, e) {
  this._basis = new dr(t9), this._beta = e;
}
la.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t9 = this._x, e = this._y, i = t9.length - 1;
    if (i > 0)
      for (var r = t9[0], n = e[0], o = t9[i] - r, s = e[i] - n, a = -1, l; ++a <= i; )
        l = a / i, this._basis.point(
          this._beta * t9[a] + (1 - this._beta) * (r + l * o),
          this._beta * e[a] + (1 - this._beta) * (n + l * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }
};
var Vf = function t2(e) {
  function i(r) {
    return e === 1 ? new dr(r) : new la(r, e);
  }
  return i.beta = function(r) {
    return t2(+r);
  }, i;
}(0.85);
function Gi(t9, e, i) {
  t9._context.bezierCurveTo(
    t9._x1 + t9._k * (t9._x2 - t9._x0),
    t9._y1 + t9._k * (t9._y2 - t9._y0),
    t9._x2 + t9._k * (t9._x1 - e),
    t9._y2 + t9._k * (t9._y1 - i),
    t9._x2,
    t9._y2
  );
}
function $n(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
$n.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Gi(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2, this._x1 = t9, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        Gi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Xf = function t3(e) {
  function i(r) {
    return new $n(r, e);
  }
  return i.tension = function(r) {
    return t3(+r);
  }, i;
}(0);
function In(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
In.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        Gi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Kf = function t4(e) {
  function i(r) {
    return new In(r, e);
  }
  return i.tension = function(r) {
    return t4(+r);
  }, i;
}(0);
function Dn(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
Dn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Gi(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Zf = function t5(e) {
  function i(r) {
    return new Dn(r, e);
  }
  return i.tension = function(r) {
    return t5(+r);
  }, i;
}(0);
function Nn(t9, e, i) {
  var r = t9._x1, n = t9._y1, o = t9._x2, s = t9._y2;
  if (t9._l01_a > Io) {
    var a = 2 * t9._l01_2a + 3 * t9._l01_a * t9._l12_a + t9._l12_2a, l = 3 * t9._l01_a * (t9._l01_a + t9._l12_a);
    r = (r * a - t9._x0 * t9._l12_2a + t9._x2 * t9._l01_2a) / l, n = (n * a - t9._y0 * t9._l12_2a + t9._y2 * t9._l01_2a) / l;
  }
  if (t9._l23_a > Io) {
    var h = 2 * t9._l23_2a + 3 * t9._l23_a * t9._l12_a + t9._l12_2a, c = 3 * t9._l23_a * (t9._l23_a + t9._l12_a);
    o = (o * h + t9._x1 * t9._l23_2a - e * t9._l12_2a) / c, s = (s * h + t9._y1 * t9._l23_2a - i * t9._l12_2a) / c;
  }
  t9._context.bezierCurveTo(r, n, o, s, t9._x2, t9._y2);
}
function ha(t9, e) {
  this._context = t9, this._alpha = e;
}
ha.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        Nn(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Jf = function t6(e) {
  function i(r) {
    return e ? new ha(r, e) : new $n(r, 0);
  }
  return i.alpha = function(r) {
    return t6(+r);
  }, i;
}(0.5);
function ca(t9, e) {
  this._context = t9, this._alpha = e;
}
ca.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        Nn(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Qf = function t7(e) {
  function i(r) {
    return e ? new ca(r, e) : new In(r, 0);
  }
  return i.alpha = function(r) {
    return t7(+r);
  }, i;
}(0.5);
function ua(t9, e) {
  this._context = t9, this._alpha = e;
}
ua.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Nn(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var td = function t8(e) {
  function i(r) {
    return e ? new ua(r, e) : new Dn(r, 0);
  }
  return i.alpha = function(r) {
    return t8(+r);
  }, i;
}(0.5);
function fa(t9) {
  this._context = t9;
}
fa.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t9, e) {
    t9 = +t9, e = +e, this._point ? this._context.lineTo(t9, e) : (this._point = 1, this._context.moveTo(t9, e));
  }
};
function ed(t9) {
  return new fa(t9);
}
function No(t9) {
  return t9 < 0 ? -1 : 1;
}
function Ro(t9, e, i) {
  var r = t9._x1 - t9._x0, n = e - t9._x1, o = (t9._y1 - t9._y0) / (r || n < 0 && -0), s = (i - t9._y1) / (n || r < 0 && -0), a = (o * n + s * r) / (r + n);
  return (No(o) + No(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(a)) || 0;
}
function Po(t9, e) {
  var i = t9._x1 - t9._x0;
  return i ? (3 * (t9._y1 - t9._y0) / i - e) / 2 : e;
}
function zr(t9, e, i) {
  var r = t9._x0, n = t9._y0, o = t9._x1, s = t9._y1, a = (o - r) / 3;
  t9._context.bezierCurveTo(r + a, n + a * e, o - a, s - a * i, o, s);
}
function Vi(t9) {
  this._context = t9;
}
Vi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        zr(this, this._t0, Po(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    var i = NaN;
    if (t9 = +t9, e = +e, !(t9 === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, zr(this, Po(this, i = Ro(this, t9, e)), i);
          break;
        default:
          zr(this, this._t0, i = Ro(this, t9, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e, this._t0 = i;
    }
  }
};
function da(t9) {
  this._context = new pa(t9);
}
(da.prototype = Object.create(Vi.prototype)).point = function(t9, e) {
  Vi.prototype.point.call(this, e, t9);
};
function pa(t9) {
  this._context = t9;
}
pa.prototype = {
  moveTo: function(t9, e) {
    this._context.moveTo(e, t9);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t9, e) {
    this._context.lineTo(e, t9);
  },
  bezierCurveTo: function(t9, e, i, r, n, o) {
    this._context.bezierCurveTo(e, t9, r, i, o, n);
  }
};
function id(t9) {
  return new Vi(t9);
}
function rd(t9) {
  return new da(t9);
}
function ga(t9) {
  this._context = t9;
}
ga.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t9 = this._x, e = this._y, i = t9.length;
    if (i)
      if (this._line ? this._context.lineTo(t9[0], e[0]) : this._context.moveTo(t9[0], e[0]), i === 2)
        this._context.lineTo(t9[1], e[1]);
      else
        for (var r = qo(t9), n = qo(e), o = 0, s = 1; s < i; ++o, ++s)
          this._context.bezierCurveTo(r[0][o], n[0][o], r[1][o], n[1][o], t9[s], e[s]);
    (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }
};
function qo(t9) {
  var e, i = t9.length - 1, r, n = new Array(i), o = new Array(i), s = new Array(i);
  for (n[0] = 0, o[0] = 2, s[0] = t9[0] + 2 * t9[1], e = 1; e < i - 1; ++e)
    n[e] = 1, o[e] = 4, s[e] = 4 * t9[e] + 2 * t9[e + 1];
  for (n[i - 1] = 2, o[i - 1] = 7, s[i - 1] = 8 * t9[i - 1] + t9[i], e = 1; e < i; ++e)
    r = n[e] / o[e - 1], o[e] -= r, s[e] -= r * s[e - 1];
  for (n[i - 1] = s[i - 1] / o[i - 1], e = i - 2; e >= 0; --e)
    n[e] = (s[e] - n[e + 1]) / o[e];
  for (o[i - 1] = (t9[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e)
    o[e] = 2 * t9[e + 1] - n[e + 1];
  return [n, o];
}
function nd(t9) {
  return new ga(t9);
}
function pr(t9, e) {
  this._context = t9, this._t = e;
}
pr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t9, e);
        else {
          var i = this._x * (1 - this._t) + t9 * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t9, this._y = e;
  }
};
function od(t9) {
  return new pr(t9, 0.5);
}
function sd(t9) {
  return new pr(t9, 0);
}
function ad(t9) {
  return new pr(t9, 1);
}
function Ue(t9, e, i) {
  this.k = t9, this.x = e, this.y = i;
}
Ue.prototype = {
  constructor: Ue,
  scale: function(t9) {
    return t9 === 1 ? this : new Ue(this.k * t9, this.x, this.y);
  },
  translate: function(t9, e) {
    return t9 === 0 & e === 0 ? this : new Ue(this.k, this.x + this.k * t9, this.y + this.k * e);
  },
  apply: function(t9) {
    return [t9[0] * this.k + this.x, t9[1] * this.k + this.y];
  },
  applyX: function(t9) {
    return t9 * this.k + this.x;
  },
  applyY: function(t9) {
    return t9 * this.k + this.y;
  },
  invert: function(t9) {
    return [(t9[0] - this.x) / this.k, (t9[1] - this.y) / this.k];
  },
  invertX: function(t9) {
    return (t9 - this.x) / this.k;
  },
  invertY: function(t9) {
    return (t9 - this.y) / this.k;
  },
  rescaleX: function(t9) {
    return t9.copy().domain(t9.range().map(this.invertX, this).map(t9.invert, t9));
  },
  rescaleY: function(t9) {
    return t9.copy().domain(t9.range().map(this.invertY, this).map(t9.invert, t9));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ue.prototype;
var {
  entries: ma,
  setPrototypeOf: zo,
  isFrozen: ld,
  getPrototypeOf: hd,
  getOwnPropertyDescriptor: cd
} = Object;
var {
  freeze: ht,
  seal: Bt,
  create: ud
} = Object;
var {
  apply: hn,
  construct: cn
} = typeof Reflect < "u" && Reflect;
hn || (hn = function(e, i, r) {
  return e.apply(i, r);
});
ht || (ht = function(e) {
  return e;
});
Bt || (Bt = function(e) {
  return e;
});
cn || (cn = function(e, i) {
  return new e(...i);
});
var fd = bt(Array.prototype.forEach);
var Wo = bt(Array.prototype.pop);
var qe = bt(Array.prototype.push);
var Ei = bt(String.prototype.toLowerCase);
var Wr = bt(String.prototype.toString);
var dd = bt(String.prototype.match);
var vt = bt(String.prototype.replace);
var pd = bt(String.prototype.indexOf);
var gd = bt(String.prototype.trim);
var gt = bt(RegExp.prototype.test);
var ze = md(TypeError);
function bt(t9) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return hn(t9, e, r);
  };
}
function md(t9) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return cn(t9, i);
  };
}
function N(t9, e, i) {
  var r;
  i = (r = i) !== null && r !== void 0 ? r : Ei, zo && zo(t9, null);
  let n = e.length;
  for (; n--; ) {
    let o = e[n];
    if (typeof o == "string") {
      const s = i(o);
      s !== o && (ld(e) || (e[n] = s), o = s);
    }
    t9[o] = true;
  }
  return t9;
}
function ve(t9) {
  const e = ud(null);
  for (const [i, r] of ma(t9))
    e[i] = r;
  return e;
}
function Ti(t9, e) {
  for (; t9 !== null; ) {
    const r = cd(t9, e);
    if (r) {
      if (r.get)
        return bt(r.get);
      if (typeof r.value == "function")
        return bt(r.value);
    }
    t9 = hd(t9);
  }
  function i(r) {
    return console.warn("fallback value for", r), null;
  }
  return i;
}
var Ho = ht(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var Hr = ht(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var jr = ht(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var _d = ht(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var Ur = ht(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var yd = ht(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var jo = ht(["#text"]);
var Uo = ht(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var Yr = ht(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Yo = ht(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var Si = ht(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var Cd = Bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var xd = Bt(/<%[\w\W]*|[\w\W]*%>/gm);
var bd = Bt(/\${[\w\W]*}/gm);
var Td = Bt(/^data-[\-\w.\u00B7-\uFFFF]/);
var Sd = Bt(/^aria-[\-\w]+$/);
var _a = Bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var vd = Bt(/^(?:\w+script|data):/i);
var kd = Bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var ya = Bt(/^html$/i);
var Go = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Cd,
  ERB_EXPR: xd,
  TMPLIT_EXPR: bd,
  DATA_ATTR: Td,
  ARIA_ATTR: Sd,
  IS_ALLOWED_URI: _a,
  IS_SCRIPT_OR_DATA: vd,
  ATTR_WHITESPACE: kd,
  DOCTYPE_NAME: ya
});
var wd = () => typeof window > "u" ? null : window;
var Bd = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function Ca() {
  let t9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wd();
  const e = (B) => Ca(B);
  if (e.version = "3.0.5", e.removed = [], !t9 || !t9.document || t9.document.nodeType !== 9)
    return e.isSupported = false, e;
  const i = t9.document, r = i.currentScript;
  let {
    document: n
  } = t9;
  const {
    DocumentFragment: o,
    HTMLTemplateElement: s,
    Node: a,
    Element: l,
    NodeFilter: h,
    NamedNodeMap: c = t9.NamedNodeMap || t9.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: g,
    trustedTypes: p
  } = t9, _ = l.prototype, v = Ti(_, "cloneNode"), O = Ti(_, "nextSibling"), P = Ti(_, "childNodes"), S = Ti(_, "parentNode");
  if (typeof s == "function") {
    const B = n.createElement("template");
    B.content && B.content.ownerDocument && (n = B.content.ownerDocument);
  }
  let z, Q = "";
  const {
    implementation: X,
    createNodeIterator: G,
    createDocumentFragment: W,
    getElementsByTagName: Vt
  } = n, {
    importNode: K
  } = i;
  let I = {};
  e.isSupported = typeof ma == "function" && typeof S == "function" && X && X.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Nt,
    ERB_EXPR: At,
    TMPLIT_EXPR: E,
    DATA_ATTR: T,
    ARIA_ATTR: x,
    IS_SCRIPT_OR_DATA: M,
    ATTR_WHITESPACE: y
  } = Go;
  let {
    IS_ALLOWED_URI: D
  } = Go, k = null;
  const H = N({}, [...Ho, ...Hr, ...jr, ...Ur, ...jo]);
  let R = null;
  const U = N({}, [...Uo, ...Yr, ...Yo, ...Si]);
  let q = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), ct = null, pt = null, Xt = true, Rt = true, Pt = false, it = true, st = false, St = false, Kt = false, Ar = false, Ce = false, di = false, pi = false, io = true, ro = false;
  const nh = "user-content-";
  let Er = true, Re = false, xe = {}, be = null;
  const no = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let oo = null;
  const so = N({}, ["audio", "video", "img", "source", "image", "track"]);
  let Or = null;
  const ao = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gi = "http://www.w3.org/1998/Math/MathML", mi = "http://www.w3.org/2000/svg", qt = "http://www.w3.org/1999/xhtml";
  let Te = qt, Mr = false, $r = null;
  const oh = N({}, [gi, mi, qt], Wr);
  let oe;
  const sh = ["application/xhtml+xml", "text/html"], ah = "text/html";
  let tt, Se = null;
  const lh = n.createElement("form"), lo = function(f) {
    return f instanceof RegExp || f instanceof Function;
  }, Ir = function(f) {
    if (!(Se && Se === f)) {
      if ((!f || typeof f != "object") && (f = {}), f = ve(f), oe = // eslint-disable-next-line unicorn/prefer-includes
      sh.indexOf(f.PARSER_MEDIA_TYPE) === -1 ? oe = ah : oe = f.PARSER_MEDIA_TYPE, tt = oe === "application/xhtml+xml" ? Wr : Ei, k = "ALLOWED_TAGS" in f ? N({}, f.ALLOWED_TAGS, tt) : H, R = "ALLOWED_ATTR" in f ? N({}, f.ALLOWED_ATTR, tt) : U, $r = "ALLOWED_NAMESPACES" in f ? N({}, f.ALLOWED_NAMESPACES, Wr) : oh, Or = "ADD_URI_SAFE_ATTR" in f ? N(
        ve(ao),
        // eslint-disable-line indent
        f.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        tt
        // eslint-disable-line indent
      ) : ao, oo = "ADD_DATA_URI_TAGS" in f ? N(
        ve(so),
        // eslint-disable-line indent
        f.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        tt
        // eslint-disable-line indent
      ) : so, be = "FORBID_CONTENTS" in f ? N({}, f.FORBID_CONTENTS, tt) : no, ct = "FORBID_TAGS" in f ? N({}, f.FORBID_TAGS, tt) : {}, pt = "FORBID_ATTR" in f ? N({}, f.FORBID_ATTR, tt) : {}, xe = "USE_PROFILES" in f ? f.USE_PROFILES : false, Xt = f.ALLOW_ARIA_ATTR !== false, Rt = f.ALLOW_DATA_ATTR !== false, Pt = f.ALLOW_UNKNOWN_PROTOCOLS || false, it = f.ALLOW_SELF_CLOSE_IN_ATTR !== false, st = f.SAFE_FOR_TEMPLATES || false, St = f.WHOLE_DOCUMENT || false, Ce = f.RETURN_DOM || false, di = f.RETURN_DOM_FRAGMENT || false, pi = f.RETURN_TRUSTED_TYPE || false, Ar = f.FORCE_BODY || false, io = f.SANITIZE_DOM !== false, ro = f.SANITIZE_NAMED_PROPS || false, Er = f.KEEP_CONTENT !== false, Re = f.IN_PLACE || false, D = f.ALLOWED_URI_REGEXP || _a, Te = f.NAMESPACE || qt, q = f.CUSTOM_ELEMENT_HANDLING || {}, f.CUSTOM_ELEMENT_HANDLING && lo(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = f.CUSTOM_ELEMENT_HANDLING.tagNameCheck), f.CUSTOM_ELEMENT_HANDLING && lo(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), f.CUSTOM_ELEMENT_HANDLING && typeof f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), st && (Rt = false), di && (Ce = true), xe && (k = N({}, [...jo]), R = [], xe.html === true && (N(k, Ho), N(R, Uo)), xe.svg === true && (N(k, Hr), N(R, Yr), N(R, Si)), xe.svgFilters === true && (N(k, jr), N(R, Yr), N(R, Si)), xe.mathMl === true && (N(k, Ur), N(R, Yo), N(R, Si))), f.ADD_TAGS && (k === H && (k = ve(k)), N(k, f.ADD_TAGS, tt)), f.ADD_ATTR && (R === U && (R = ve(R)), N(R, f.ADD_ATTR, tt)), f.ADD_URI_SAFE_ATTR && N(Or, f.ADD_URI_SAFE_ATTR, tt), f.FORBID_CONTENTS && (be === no && (be = ve(be)), N(be, f.FORBID_CONTENTS, tt)), Er && (k["#text"] = true), St && N(k, ["html", "head", "body"]), k.table && (N(k, ["tbody"]), delete ct.tbody), f.TRUSTED_TYPES_POLICY) {
        if (typeof f.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof f.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = f.TRUSTED_TYPES_POLICY, Q = z.createHTML("");
      } else
        z === void 0 && (z = Bd(p, r)), z !== null && typeof Q == "string" && (Q = z.createHTML(""));
      ht && ht(f), Se = f;
    }
  }, ho = N({}, ["mi", "mo", "mn", "ms", "mtext"]), co = N({}, ["foreignobject", "desc", "title", "annotation-xml"]), hh = N({}, ["title", "style", "font", "a", "script"]), _i = N({}, Hr);
  N(_i, jr), N(_i, _d);
  const Dr = N({}, Ur);
  N(Dr, yd);
  const ch = function(f) {
    let m = S(f);
    (!m || !m.tagName) && (m = {
      namespaceURI: Te,
      tagName: "template"
    });
    const b = Ei(f.tagName), j = Ei(m.tagName);
    return $r[f.namespaceURI] ? f.namespaceURI === mi ? m.namespaceURI === qt ? b === "svg" : m.namespaceURI === gi ? b === "svg" && (j === "annotation-xml" || ho[j]) : !!_i[b] : f.namespaceURI === gi ? m.namespaceURI === qt ? b === "math" : m.namespaceURI === mi ? b === "math" && co[j] : !!Dr[b] : f.namespaceURI === qt ? m.namespaceURI === mi && !co[j] || m.namespaceURI === gi && !ho[j] ? false : !Dr[b] && (hh[b] || !_i[b]) : !!(oe === "application/xhtml+xml" && $r[f.namespaceURI]) : false;
  }, se = function(f) {
    qe(e.removed, {
      element: f
    });
    try {
      f.parentNode.removeChild(f);
    } catch {
      f.remove();
    }
  }, Nr = function(f, m) {
    try {
      qe(e.removed, {
        attribute: m.getAttributeNode(f),
        from: m
      });
    } catch {
      qe(e.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(f), f === "is" && !R[f])
      if (Ce || di)
        try {
          se(m);
        } catch {
        }
      else
        try {
          m.setAttribute(f, "");
        } catch {
        }
  }, uo = function(f) {
    let m, b;
    if (Ar)
      f = "<remove></remove>" + f;
    else {
      const _t = dd(f, /^[\r\n\t ]+/);
      b = _t && _t[0];
    }
    oe === "application/xhtml+xml" && Te === qt && (f = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + f + "</body></html>");
    const j = z ? z.createHTML(f) : f;
    if (Te === qt)
      try {
        m = new g().parseFromString(j, oe);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = X.createDocument(Te, "template", null);
      try {
        m.documentElement.innerHTML = Mr ? Q : j;
      } catch {
      }
    }
    const et = m.body || m.documentElement;
    return f && b && et.insertBefore(n.createTextNode(b), et.childNodes[0] || null), Te === qt ? Vt.call(m, St ? "html" : "body")[0] : St ? m.documentElement : et;
  }, fo = function(f) {
    return G.call(
      f.ownerDocument || f,
      f,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT,
      null,
      false
    );
  }, uh = function(f) {
    return f instanceof u && (typeof f.nodeName != "string" || typeof f.textContent != "string" || typeof f.removeChild != "function" || !(f.attributes instanceof c) || typeof f.removeAttribute != "function" || typeof f.setAttribute != "function" || typeof f.namespaceURI != "string" || typeof f.insertBefore != "function" || typeof f.hasChildNodes != "function");
  }, yi = function(f) {
    return typeof a == "object" ? f instanceof a : f && typeof f == "object" && typeof f.nodeType == "number" && typeof f.nodeName == "string";
  }, zt = function(f, m, b) {
    I[f] && fd(I[f], (j) => {
      j.call(e, m, b, Se);
    });
  }, po = function(f) {
    let m;
    if (zt("beforeSanitizeElements", f, null), uh(f))
      return se(f), true;
    const b = tt(f.nodeName);
    if (zt("uponSanitizeElement", f, {
      tagName: b,
      allowedTags: k
    }), f.hasChildNodes() && !yi(f.firstElementChild) && (!yi(f.content) || !yi(f.content.firstElementChild)) && gt(/<[/\w]/g, f.innerHTML) && gt(/<[/\w]/g, f.textContent))
      return se(f), true;
    if (!k[b] || ct[b]) {
      if (!ct[b] && mo(b) && (q.tagNameCheck instanceof RegExp && gt(q.tagNameCheck, b) || q.tagNameCheck instanceof Function && q.tagNameCheck(b)))
        return false;
      if (Er && !be[b]) {
        const j = S(f) || f.parentNode, et = P(f) || f.childNodes;
        if (et && j) {
          const _t = et.length;
          for (let V = _t - 1; V >= 0; --V)
            j.insertBefore(v(et[V], true), O(f));
        }
      }
      return se(f), true;
    }
    return f instanceof l && !ch(f) || (b === "noscript" || b === "noembed" || b === "noframes") && gt(/<\/no(script|embed|frames)/i, f.innerHTML) ? (se(f), true) : (st && f.nodeType === 3 && (m = f.textContent, m = vt(m, Nt, " "), m = vt(m, At, " "), m = vt(m, E, " "), f.textContent !== m && (qe(e.removed, {
      element: f.cloneNode()
    }), f.textContent = m)), zt("afterSanitizeElements", f, null), false);
  }, go = function(f, m, b) {
    if (io && (m === "id" || m === "name") && (b in n || b in lh))
      return false;
    if (!(Rt && !pt[m] && gt(T, m))) {
      if (!(Xt && gt(x, m))) {
        if (!R[m] || pt[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(mo(f) && (q.tagNameCheck instanceof RegExp && gt(q.tagNameCheck, f) || q.tagNameCheck instanceof Function && q.tagNameCheck(f)) && (q.attributeNameCheck instanceof RegExp && gt(q.attributeNameCheck, m) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && gt(q.tagNameCheck, b) || q.tagNameCheck instanceof Function && q.tagNameCheck(b)))
          )
            return false;
        } else if (!Or[m]) {
          if (!gt(D, vt(b, y, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && f !== "script" && pd(b, "data:") === 0 && oo[f])) {
              if (!(Pt && !gt(M, vt(b, y, "")))) {
                if (b)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, mo = function(f) {
    return f.indexOf("-") > 0;
  }, _o = function(f) {
    let m, b, j, et;
    zt("beforeSanitizeAttributes", f, null);
    const {
      attributes: _t
    } = f;
    if (!_t)
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: R
    };
    for (et = _t.length; et--; ) {
      m = _t[et];
      const {
        name: Et,
        namespaceURI: Rr
      } = m;
      if (b = Et === "value" ? m.value : gd(m.value), j = tt(Et), V.attrName = j, V.attrValue = b, V.keepAttr = true, V.forceKeepAttr = void 0, zt("uponSanitizeAttribute", f, V), b = V.attrValue, V.forceKeepAttr || (Nr(Et, f), !V.keepAttr))
        continue;
      if (!it && gt(/\/>/i, b)) {
        Nr(Et, f);
        continue;
      }
      st && (b = vt(b, Nt, " "), b = vt(b, At, " "), b = vt(b, E, " "));
      const yo = tt(f.nodeName);
      if (go(yo, j, b)) {
        if (ro && (j === "id" || j === "name") && (Nr(Et, f), b = nh + b), z && typeof p == "object" && typeof p.getAttributeType == "function" && !Rr)
          switch (p.getAttributeType(yo, j)) {
            case "TrustedHTML": {
              b = z.createHTML(b);
              break;
            }
            case "TrustedScriptURL": {
              b = z.createScriptURL(b);
              break;
            }
          }
        try {
          Rr ? f.setAttributeNS(Rr, Et, b) : f.setAttribute(Et, b), Wo(e.removed);
        } catch {
        }
      }
    }
    zt("afterSanitizeAttributes", f, null);
  }, fh = function B(f) {
    let m;
    const b = fo(f);
    for (zt("beforeSanitizeShadowDOM", f, null); m = b.nextNode(); )
      zt("uponSanitizeShadowNode", m, null), !po(m) && (m.content instanceof o && B(m.content), _o(m));
    zt("afterSanitizeShadowDOM", f, null);
  };
  return e.sanitize = function(B) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m, b, j, et;
    if (Mr = !B, Mr && (B = "<!-->"), typeof B != "string" && !yi(B))
      if (typeof B.toString == "function") {
        if (B = B.toString(), typeof B != "string")
          throw ze("dirty is not a string, aborting");
      } else
        throw ze("toString is not a function");
    if (!e.isSupported)
      return B;
    if (Kt || Ir(f), e.removed = [], typeof B == "string" && (Re = false), Re) {
      if (B.nodeName) {
        const Et = tt(B.nodeName);
        if (!k[Et] || ct[Et])
          throw ze("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (B instanceof a)
      m = uo("<!---->"), b = m.ownerDocument.importNode(B, true), b.nodeType === 1 && b.nodeName === "BODY" || b.nodeName === "HTML" ? m = b : m.appendChild(b);
    else {
      if (!Ce && !st && !St && // eslint-disable-next-line unicorn/prefer-includes
      B.indexOf("<") === -1)
        return z && pi ? z.createHTML(B) : B;
      if (m = uo(B), !m)
        return Ce ? null : pi ? Q : "";
    }
    m && Ar && se(m.firstChild);
    const _t = fo(Re ? B : m);
    for (; j = _t.nextNode(); )
      po(j) || (j.content instanceof o && fh(j.content), _o(j));
    if (Re)
      return B;
    if (Ce) {
      if (di)
        for (et = W.call(m.ownerDocument); m.firstChild; )
          et.appendChild(m.firstChild);
      else
        et = m;
      return (R.shadowroot || R.shadowrootmode) && (et = K.call(i, et, true)), et;
    }
    let V = St ? m.outerHTML : m.innerHTML;
    return St && k["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && gt(ya, m.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + V), st && (V = vt(V, Nt, " "), V = vt(V, At, " "), V = vt(V, E, " ")), z && pi ? z.createHTML(V) : V;
  }, e.setConfig = function(B) {
    Ir(B), Kt = true;
  }, e.clearConfig = function() {
    Se = null, Kt = false;
  }, e.isValidAttribute = function(B, f, m) {
    Se || Ir({});
    const b = tt(B), j = tt(f);
    return go(b, j, m);
  }, e.addHook = function(B, f) {
    typeof f == "function" && (I[B] = I[B] || [], qe(I[B], f));
  }, e.removeHook = function(B) {
    if (I[B])
      return Wo(I[B]);
  }, e.removeHooks = function(B) {
    I[B] && (I[B] = []);
  }, e.removeAllHooks = function() {
    I = {};
  }, e;
}
var Xi = Ca();
var gr = /<br\s*\/?>/gi;
var Fd = (t9) => t9 ? ba(t9).replace(/\\n/g, "#br#").split("#br#") : [""];
var xa = (t9) => Xi.sanitize(t9);
var Vo = (t9, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== false) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t9 = xa(t9) : r !== "loose" && (t9 = ba(t9), t9 = t9.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t9 = t9.replace(/=/g, "&equals;"), t9 = Od(t9));
  }
  return t9;
};
var ti = (t9, e) => t9 && (e.dompurifyConfig ? t9 = Xi.sanitize(Vo(t9, e), e.dompurifyConfig).toString() : t9 = Xi.sanitize(Vo(t9, e), {
  FORBID_TAGS: ["style"]
}).toString(), t9);
var Ld = (t9, e) => typeof t9 == "string" ? ti(t9, e) : t9.flat().map((i) => ti(i, e));
var Ad = (t9) => gr.test(t9);
var Ed = (t9) => t9.split(gr);
var Od = (t9) => t9.replace(/#br#/g, "<br/>");
var ba = (t9) => t9.replace(gr, "#br#");
var Md = (t9) => {
  let e = "";
  return t9 && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
};
var Ta = (t9) => !(t9 === false || ["false", "null", "0"].includes(String(t9).trim().toLowerCase()));
var $d = function(...t9) {
  const e = t9.filter((i) => !isNaN(i));
  return Math.max(...e);
};
var Id = function(...t9) {
  const e = t9.filter((i) => !isNaN(i));
  return Math.min(...e);
};
var Dd = function(t9) {
  let e = t9;
  if (t9.split("~").length - 1 >= 2) {
    let i = e;
    do
      e = i, i = e.replace(/~([^\s,:;]+)~/, "<$1>");
    while (i != e);
    return Dd(i);
  } else
    return e;
};
var Rn = {
  getRows: Fd,
  sanitizeText: ti,
  sanitizeTextOrArray: Ld,
  hasBreaks: Ad,
  splitBreaks: Ed,
  lineBreakRegex: gr,
  removeScript: xa,
  getUrl: Md,
  evaluate: Ta,
  getMax: $d,
  getMin: Id
};
var Oi = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    g: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    b: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    h: (t9) => t9 % 360,
    s: (t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9,
    l: (t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9,
    a: (t9) => t9 >= 1 ? 1 : t9 < 0 ? 0 : t9
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t9) => {
    const e = t9 / 255;
    return t9 > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t9, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t9 + (e - t9) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t9 + (e - t9) * (2 / 3 - i) * 6 : t9),
  hsl2rgb: ({ h: t9, s: e, l: i }, r) => {
    if (!e)
      return i * 2.55;
    t9 /= 360, e /= 100, i /= 100;
    const n = i < 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - n;
    switch (r) {
      case "r":
        return Oi.hue2rgb(o, n, t9 + 1 / 3) * 255;
      case "g":
        return Oi.hue2rgb(o, n, t9) * 255;
      case "b":
        return Oi.hue2rgb(o, n, t9 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t9, g: e, b: i }, r) => {
    t9 /= 255, e /= 255, i /= 255;
    const n = Math.max(t9, e, i), o = Math.min(t9, e, i), s = (n + o) / 2;
    if (r === "l")
      return s * 100;
    if (n === o)
      return 0;
    const a = n - o, l = s > 0.5 ? a / (2 - n - o) : a / (n + o);
    if (r === "s")
      return l * 100;
    switch (n) {
      case t9:
        return ((e - i) / a + (e < i ? 6 : 0)) * 60;
      case e:
        return ((i - t9) / a + 2) * 60;
      case i:
        return ((t9 - e) / a + 4) * 60;
      default:
        return -1;
    }
  }
};
var Nd = Oi;
var Rd = {
  /* API */
  clamp: (t9, e, i) => e > i ? Math.min(e, Math.max(i, t9)) : Math.min(i, Math.max(e, t9)),
  round: (t9) => Math.round(t9 * 1e10) / 1e10
};
var Pd = Rd;
var qd = {
  /* API */
  dec2hex: (t9) => {
    const e = Math.round(t9).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
};
var zd = qd;
var Wd = {
  channel: Nd,
  lang: Pd,
  unit: zd
};
var $ = Wd;
var Jt = {};
for (let t9 = 0; t9 <= 255; t9++)
  Jt[t9] = $.unit.dec2hex(t9);
var rt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
var Hd = class {
  constructor() {
    this.type = rt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = rt.ALL;
  }
  is(e) {
    return this.type === e;
  }
};
var jd = Hd;
var Ud = class {
  /* CONSTRUCTOR */
  constructor(e, i) {
    this.color = i, this.changed = false, this.data = e, this.type = new jd();
  }
  /* API */
  set(e, i) {
    return this.color = i, this.changed = false, this.data = e, this.type.type = rt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: i, s: r, l: n } = e;
    i === void 0 && (e.h = $.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = $.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = $.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: i, g: r, b: n } = e;
    i === void 0 && (e.r = $.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = $.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = $.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, i = e.r;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, i = e.g;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, i = e.b;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, i = e.h;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, i = e.s;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, i = e.l;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.r = e;
  }
  set g(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.g = e;
  }
  set b(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.b = e;
  }
  set h(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.h = e;
  }
  set s(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.s = e;
  }
  set l(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.l = e;
  }
  set a(e) {
    this.changed = true, this.data.a = e;
  }
};
var Yd = Ud;
var Gd = new Yd({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
var mr = Gd;
var Sa = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t9) => {
    if (t9.charCodeAt(0) !== 35)
      return;
    const e = t9.match(Sa.re);
    if (!e)
      return;
    const i = e[1], r = parseInt(i, 16), n = i.length, o = n % 4 === 0, s = n > 4, a = s ? 1 : 17, l = s ? 8 : 4, h = o ? 0 : -1, c = s ? 255 : 15;
    return mr.set({
      r: (r >> l * (h + 3) & c) * a,
      g: (r >> l * (h + 2) & c) * a,
      b: (r >> l * (h + 1) & c) * a,
      a: o ? (r & c) * a / 255 : 1
    }, t9);
  },
  stringify: (t9) => {
    const { r: e, g: i, b: r, a: n } = t9;
    return n < 1 ? `#${Jt[Math.round(e)]}${Jt[Math.round(i)]}${Jt[Math.round(r)]}${Jt[Math.round(n * 255)]}` : `#${Jt[Math.round(e)]}${Jt[Math.round(i)]}${Jt[Math.round(r)]}`;
  }
};
var Ye = Sa;
var Mi = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t9) => {
    const e = t9.match(Mi.hueRe);
    if (e) {
      const [, i, r] = e;
      switch (r) {
        case "grad":
          return $.channel.clamp.h(parseFloat(i) * 0.9);
        case "rad":
          return $.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
        case "turn":
          return $.channel.clamp.h(parseFloat(i) * 360);
      }
    }
    return $.channel.clamp.h(parseFloat(t9));
  },
  /* API */
  parse: (t9) => {
    const e = t9.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const i = t9.match(Mi.re);
    if (!i)
      return;
    const [, r, n, o, s, a] = i;
    return mr.set({
      h: Mi._hue2deg(r),
      s: $.channel.clamp.s(parseFloat(n)),
      l: $.channel.clamp.l(parseFloat(o)),
      a: s ? $.channel.clamp.a(a ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, t9);
  },
  stringify: (t9) => {
    const { h: e, s: i, l: r, a: n } = t9;
    return n < 1 ? `hsla(${$.lang.round(e)}, ${$.lang.round(i)}%, ${$.lang.round(r)}%, ${n})` : `hsl(${$.lang.round(e)}, ${$.lang.round(i)}%, ${$.lang.round(r)}%)`;
  }
};
var vi = Mi;
var $i = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t9) => {
    t9 = t9.toLowerCase();
    const e = $i.colors[t9];
    if (e)
      return Ye.parse(e);
  },
  stringify: (t9) => {
    const e = Ye.stringify(t9);
    for (const i in $i.colors)
      if ($i.colors[i] === e)
        return i;
  }
};
var Xo = $i;
var va = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t9) => {
    const e = t9.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const i = t9.match(va.re);
    if (!i)
      return;
    const [, r, n, o, s, a, l, h, c] = i;
    return mr.set({
      r: $.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: $.channel.clamp.g(s ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: $.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: h ? $.channel.clamp.a(c ? parseFloat(h) / 100 : parseFloat(h)) : 1
    }, t9);
  },
  stringify: (t9) => {
    const { r: e, g: i, b: r, a: n } = t9;
    return n < 1 ? `rgba(${$.lang.round(e)}, ${$.lang.round(i)}, ${$.lang.round(r)}, ${$.lang.round(n)})` : `rgb(${$.lang.round(e)}, ${$.lang.round(i)}, ${$.lang.round(r)})`;
  }
};
var ki = va;
var Vd = {
  /* VARIABLES */
  format: {
    keyword: Xo,
    hex: Ye,
    rgb: ki,
    rgba: ki,
    hsl: vi,
    hsla: vi
  },
  /* API */
  parse: (t9) => {
    if (typeof t9 != "string")
      return t9;
    const e = Ye.parse(t9) || ki.parse(t9) || vi.parse(t9) || Xo.parse(t9);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t9}"`);
  },
  stringify: (t9) => !t9.changed && t9.color ? t9.color : t9.type.is(rt.HSL) || t9.data.r === void 0 ? vi.stringify(t9) : t9.a < 1 || !Number.isInteger(t9.r) || !Number.isInteger(t9.g) || !Number.isInteger(t9.b) ? ki.stringify(t9) : Ye.stringify(t9)
};
var $t = Vd;
var Xd = (t9, e) => {
  const i = $t.parse(t9);
  for (const r in e)
    i[r] = $.channel.clamp[r](e[r]);
  return $t.stringify(i);
};
var ka = Xd;
var Kd = (t9, e, i = 0, r = 1) => {
  if (typeof t9 != "number")
    return ka(t9, { a: e });
  const n = mr.set({
    r: $.channel.clamp.r(t9),
    g: $.channel.clamp.g(e),
    b: $.channel.clamp.b(i),
    a: $.channel.clamp.a(r)
  });
  return $t.stringify(n);
};
var Ge = Kd;
var Zd = (t9) => {
  const { r: e, g: i, b: r } = $t.parse(t9), n = 0.2126 * $.channel.toLinear(e) + 0.7152 * $.channel.toLinear(i) + 0.0722 * $.channel.toLinear(r);
  return $.lang.round(n);
};
var Jd = Zd;
var Qd = (t9) => Jd(t9) >= 0.5;
var tp = Qd;
var ep = (t9) => !tp(t9);
var ci = ep;
var ip = (t9, e, i) => {
  const r = $t.parse(t9), n = r[e], o = $.channel.clamp[e](n + i);
  return n !== o && (r[e] = o), $t.stringify(r);
};
var wa = ip;
var rp = (t9, e) => wa(t9, "l", e);
var F = rp;
var np = (t9, e) => wa(t9, "l", -e);
var A = np;
var op = (t9, e) => {
  const i = $t.parse(t9), r = {};
  for (const n in e)
    e[n] && (r[n] = i[n] + e[n]);
  return ka(t9, r);
};
var d = op;
var sp = (t9, e, i = 50) => {
  const { r, g: n, b: o, a: s } = $t.parse(t9), { r: a, g: l, b: h, a: c } = $t.parse(e), u = i / 100, g = u * 2 - 1, p = s - c, v = ((g * p === -1 ? g : (g + p) / (1 + g * p)) + 1) / 2, O = 1 - v, P = r * v + a * O, S = n * v + l * O, z = o * v + h * O, Q = s * u + c * (1 - u);
  return Ge(P, S, z, Q);
};
var ap = sp;
var lp = (t9, e = 100) => {
  const i = $t.parse(t9);
  return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, ap(i, t9, e);
};
var C = lp;
var lt = (t9, e) => e ? d(t9, { s: -40, l: 10 }) : d(t9, { s: -40, l: -10 });
var _r = "#ffffff";
var yr = "#f2f2f2";
var hp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || d(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || d(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || lt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || lt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || C(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || C(this.tertiaryColor), this.lineColor = this.lineColor || C(this.background), this.arrowheadColor = this.arrowheadColor || C(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || A(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || C(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || F(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this.darkMode)
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
        this["cScale" + i] = A(this["cScale" + i], 75);
    else
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
        this["cScale" + i] = A(this["cScale" + i], 25);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this["cScaleInv" + i] = this["cScaleInv" + i] || C(this["cScale" + i]);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this.darkMode ? this["cScalePeer" + i] = this["cScalePeer" + i] || F(this["cScale" + i], 10) : this["cScalePeer" + i] = this["cScalePeer" + i] || A(this["cScale" + i], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++)
      this["surface" + i] = this["surface" + i] || d(this.mainBkg, { h: 180, s: -15, l: e * (5 + i * 3) }), this["surfacePeer" + i] = this["surfacePeer" + i] || d(this.mainBkg, { h: 180, s: -15, l: e * (8 + i * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || d(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || d(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || d(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || d(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || d(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || _r, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || yr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var cp = (t9) => {
  const e = new hp();
  return e.calculate(t9), e;
};
var up = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = F(this.primaryColor, 16), this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = C(this.background), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = F(C("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = Ge(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = A("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = A(this.sectionBkgColor, 10), this.taskBorderColor = Ge(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Ge(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    this.secondBkg = F(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = F(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = F(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || C(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScalePeer" + e] = this["cScalePeer" + e] || F(this["cScale" + e], 10);
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(-10 + e * 4) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(-7 + e * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = F(this.secondaryColor, 20), this.git1 = F(this.pie2 || this.secondaryColor, 20), this.git2 = F(this.pie3 || this.tertiaryColor, 20), this.git3 = F(this.pie4 || d(this.primaryColor, { h: -30 }), 20), this.git4 = F(this.pie5 || d(this.primaryColor, { h: -60 }), 20), this.git5 = F(this.pie6 || d(this.primaryColor, { h: -90 }), 10), this.git6 = F(this.pie7 || d(this.primaryColor, { h: 60 }), 10), this.git7 = F(this.pie8 || d(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || F(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || F(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var fp = (t9) => {
  const e = new up();
  return e.calculate(t9), e;
};
var dp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = d(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = Ge(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || A(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || A(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = A(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || d(this["cScale" + e], { h: 180 });
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, l: -(7 + e * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || C(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || C(this.labelTextColor);
      for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
        this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = F(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || d(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(C(this.git0), 25), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || _r, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || yr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var pp = (t9) => {
  const e = new dp();
  return e.calculate(t9), e;
};
var gp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = F("#cde498", 10), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.primaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.actorBorder = A(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || A(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || A(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = A(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || d(this["cScale" + e], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = F(this.git0, 25), this.git1 = F(this.git1, 25), this.git2 = F(this.git2, 25), this.git3 = F(this.git3, 25), this.git4 = F(this.git4, 25), this.git5 = F(this.git5, 25), this.git6 = F(this.git6, 25), this.git7 = F(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || C(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || C(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || _r, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || yr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var mp = (t9) => {
  const e = new gp();
  return e.calculate(t9), e;
};
var _p = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = F(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = C(this.primaryColor), this.secondaryTextColor = C(this.secondaryColor), this.tertiaryTextColor = C(this.tertiaryColor), this.lineColor = C(this.background), this.textColor = C(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.secondBkg = F(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = F(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || C(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || F(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = F(this.contrast, 30), this.sectionBkgColor2 = F(this.contrast, 30), this.taskBorderColor = A(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = F(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = A(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? F(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = A(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || d(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || d(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || d(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || d(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || d(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || C(this.git0), this.gitInv1 = this.gitInv1 || C(this.git1), this.gitInv2 = this.gitInv2 || C(this.git2), this.gitInv3 = this.gitInv3 || C(this.git3), this.gitInv4 = this.gitInv4 || C(this.git4), this.gitInv5 = this.gitInv5 || C(this.git5), this.gitInv6 = this.gitInv6 || C(this.git6), this.gitInv7 = this.gitInv7 || C(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || _r, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || yr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var yp = (t9) => {
  const e = new _p();
  return e.calculate(t9), e;
};
var Ut = {
  base: {
    getThemeVariables: cp
  },
  dark: {
    getThemeVariables: fp
  },
  default: {
    getThemeVariables: pp
  },
  forest: {
    getThemeVariables: mp
  },
  neutral: {
    getThemeVariables: yp
  }
};
var Zt = {
  flowchart: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    htmlLabels: true,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: true,
    hideUnusedParticipants: false,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: true,
    forceMenus: false,
    bottomMarginAdj: 1,
    rightAngles: false,
    showSequenceNumbers: false,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: false,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: true,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: false,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: true,
    titleTopMargin: 25,
    arrowMarkerAbsolute: false,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: false
  },
  state: {
    useMaxWidth: true,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: true,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: true,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  requirement: {
    useMaxWidth: true,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: true,
    padding: 10,
    maxNodeWidth: 200
  },
  timeline: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: false
  },
  gitGraph: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: true,
    showBranches: true,
    rotateCommitLabel: true,
    arrowMarkerAbsolute: false
  },
  c4: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: true,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: true,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: true,
    prefix: "",
    suffix: ""
  },
  theme: "default",
  maxTextSize: 5e4,
  darkMode: false,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: true,
  arrowMarkerAbsolute: false,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize"
  ],
  deterministicIds: false,
  fontSize: 16
};
var Ba = {
  ...Zt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Ut.default.getThemeVariables(),
  sequence: {
    ...Zt.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...Zt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Zt.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...Zt.pie,
    useWidth: 984
  },
  requirement: {
    ...Zt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...Zt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: false
  },
  sankey: {
    ...Zt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: false
  }
};
var Fa = (t9, e = "") => Object.keys(t9).reduce((i, r) => Array.isArray(t9[r]) ? i : typeof t9[r] == "object" && t9[r] !== null ? [...i, e + r, ...Fa(t9[r], "")] : [...i, e + r], []);
var Cp = new Set(Fa(Ba, ""));
var xp = Ba;
var La = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
var Ii = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var bp = /\s*%%.*\n/gm;
var Aa = class extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
};
var Ee = {};
var Cr = function(t9, e) {
  t9 = t9.replace(La, "").replace(Ii, "").replace(bp, `
`);
  for (const [i, { detector: r }] of Object.entries(Ee))
    if (r(t9, e))
      return i;
  throw new Aa(
    `No diagram type detected matching given configuration for text: ${t9}`
  );
};
var Ea = (...t9) => {
  for (const { id: e, detector: i, loader: r } of t9)
    Oa(e, i, r);
};
var Oa = (t9, e, i) => {
  Ee[t9] ? w.error(`Detector with key ${t9} already exists`) : Ee[t9] = { detector: e, loader: i }, w.debug(`Detector with key ${t9} added${i ? " with loader" : ""}`);
};
var Tp = (t9) => Ee[t9].loader;
var un = (t9, e, { depth: i = 2, clobber: r = false } = {}) => {
  const n = { depth: i, clobber: r };
  return Array.isArray(e) && !Array.isArray(t9) ? (e.forEach((o) => un(t9, o, n)), t9) : Array.isArray(e) && Array.isArray(t9) ? (e.forEach((o) => {
    t9.includes(o) || t9.push(o);
  }), t9) : t9 === void 0 || i <= 0 ? t9 != null && typeof t9 == "object" && typeof e == "object" ? Object.assign(t9, e) : e : (e !== void 0 && typeof t9 == "object" && typeof e == "object" && Object.keys(e).forEach((o) => {
    typeof e[o] == "object" && (t9[o] === void 0 || typeof t9[o] == "object") ? (t9[o] === void 0 && (t9[o] = Array.isArray(e[o]) ? [] : {}), t9[o] = un(t9[o], e[o], { depth: i - 1, clobber: r })) : (r || typeof t9[o] != "object" && typeof e[o] != "object") && (t9[o] = e[o]);
  }), t9);
};
var nt = un;
var Sp = typeof global == "object" && global && global.Object === Object && global;
var Ma = Sp;
var vp = typeof self == "object" && self && self.Object === Object && self;
var kp = Ma || vp || Function("return this")();
var Dt = kp;
var wp = Dt.Symbol;
var Ki = wp;
var $a = Object.prototype;
var Bp = $a.hasOwnProperty;
var Fp = $a.toString;
var We = Ki ? Ki.toStringTag : void 0;
function Lp(t9) {
  var e = Bp.call(t9, We), i = t9[We];
  try {
    t9[We] = void 0;
    var r = true;
  } catch {
  }
  var n = Fp.call(t9);
  return r && (e ? t9[We] = i : delete t9[We]), n;
}
var Ap = Object.prototype;
var Ep = Ap.toString;
function Op(t9) {
  return Ep.call(t9);
}
var Mp = "[object Null]";
var $p = "[object Undefined]";
var Ko = Ki ? Ki.toStringTag : void 0;
function Ie(t9) {
  return t9 == null ? t9 === void 0 ? $p : Mp : Ko && Ko in Object(t9) ? Lp(t9) : Op(t9);
}
function me(t9) {
  var e = typeof t9;
  return t9 != null && (e == "object" || e == "function");
}
var Ip = "[object AsyncFunction]";
var Dp = "[object Function]";
var Np = "[object GeneratorFunction]";
var Rp = "[object Proxy]";
function Pn(t9) {
  if (!me(t9))
    return false;
  var e = Ie(t9);
  return e == Dp || e == Np || e == Ip || e == Rp;
}
var Pp = Dt["__core-js_shared__"];
var Gr = Pp;
var Zo = function() {
  var t9 = /[^.]+$/.exec(Gr && Gr.keys && Gr.keys.IE_PROTO || "");
  return t9 ? "Symbol(src)_1." + t9 : "";
}();
function qp(t9) {
  return !!Zo && Zo in t9;
}
var zp = Function.prototype;
var Wp = zp.toString;
function _e(t9) {
  if (t9 != null) {
    try {
      return Wp.call(t9);
    } catch {
    }
    try {
      return t9 + "";
    } catch {
    }
  }
  return "";
}
var Hp = /[\\^$.*+?()[\]{}|]/g;
var jp = /^\[object .+?Constructor\]$/;
var Up = Function.prototype;
var Yp = Object.prototype;
var Gp = Up.toString;
var Vp = Yp.hasOwnProperty;
var Xp = RegExp(
  "^" + Gp.call(Vp).replace(Hp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Kp(t9) {
  if (!me(t9) || qp(t9))
    return false;
  var e = Pn(t9) ? Xp : jp;
  return e.test(_e(t9));
}
function Zp(t9, e) {
  return t9 == null ? void 0 : t9[e];
}
function ye(t9, e) {
  var i = Zp(t9, e);
  return Kp(i) ? i : void 0;
}
var Jp = ye(Object, "create");
var ei = Jp;
function Qp() {
  this.__data__ = ei ? ei(null) : {}, this.size = 0;
}
function tg(t9) {
  var e = this.has(t9) && delete this.__data__[t9];
  return this.size -= e ? 1 : 0, e;
}
var eg = "__lodash_hash_undefined__";
var ig = Object.prototype;
var rg = ig.hasOwnProperty;
function ng(t9) {
  var e = this.__data__;
  if (ei) {
    var i = e[t9];
    return i === eg ? void 0 : i;
  }
  return rg.call(e, t9) ? e[t9] : void 0;
}
var og = Object.prototype;
var sg = og.hasOwnProperty;
function ag(t9) {
  var e = this.__data__;
  return ei ? e[t9] !== void 0 : sg.call(e, t9);
}
var lg = "__lodash_hash_undefined__";
function hg(t9, e) {
  var i = this.__data__;
  return this.size += this.has(t9) ? 0 : 1, i[t9] = ei && e === void 0 ? lg : e, this;
}
function pe(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
pe.prototype.clear = Qp;
pe.prototype.delete = tg;
pe.prototype.get = ng;
pe.prototype.has = ag;
pe.prototype.set = hg;
function cg() {
  this.__data__ = [], this.size = 0;
}
function xr(t9, e) {
  return t9 === e || t9 !== t9 && e !== e;
}
function br(t9, e) {
  for (var i = t9.length; i--; )
    if (xr(t9[i][0], e))
      return i;
  return -1;
}
var ug = Array.prototype;
var fg = ug.splice;
function dg(t9) {
  var e = this.__data__, i = br(e, t9);
  if (i < 0)
    return false;
  var r = e.length - 1;
  return i == r ? e.pop() : fg.call(e, i, 1), --this.size, true;
}
function pg(t9) {
  var e = this.__data__, i = br(e, t9);
  return i < 0 ? void 0 : e[i][1];
}
function gg(t9) {
  return br(this.__data__, t9) > -1;
}
function mg(t9, e) {
  var i = this.__data__, r = br(i, t9);
  return r < 0 ? (++this.size, i.push([t9, e])) : i[r][1] = e, this;
}
function Gt(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
Gt.prototype.clear = cg;
Gt.prototype.delete = dg;
Gt.prototype.get = pg;
Gt.prototype.has = gg;
Gt.prototype.set = mg;
var _g = ye(Dt, "Map");
var ii = _g;
function yg() {
  this.size = 0, this.__data__ = {
    hash: new pe(),
    map: new (ii || Gt)(),
    string: new pe()
  };
}
function Cg(t9) {
  var e = typeof t9;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t9 !== "__proto__" : t9 === null;
}
function Tr(t9, e) {
  var i = t9.__data__;
  return Cg(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function xg(t9) {
  var e = Tr(this, t9).delete(t9);
  return this.size -= e ? 1 : 0, e;
}
function bg(t9) {
  return Tr(this, t9).get(t9);
}
function Tg(t9) {
  return Tr(this, t9).has(t9);
}
function Sg(t9, e) {
  var i = Tr(this, t9), r = i.size;
  return i.set(t9, e), this.size += i.size == r ? 0 : 1, this;
}
function ne(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
ne.prototype.clear = yg;
ne.prototype.delete = xg;
ne.prototype.get = bg;
ne.prototype.has = Tg;
ne.prototype.set = Sg;
var vg = "Expected a function";
function ui(t9, e) {
  if (typeof t9 != "function" || e != null && typeof e != "function")
    throw new TypeError(vg);
  var i = function() {
    var r = arguments, n = e ? e.apply(this, r) : r[0], o = i.cache;
    if (o.has(n))
      return o.get(n);
    var s = t9.apply(this, r);
    return i.cache = o.set(n, s) || o, s;
  };
  return i.cache = new (ui.Cache || ne)(), i;
}
ui.Cache = ne;
function kg() {
  this.__data__ = new Gt(), this.size = 0;
}
function wg(t9) {
  var e = this.__data__, i = e.delete(t9);
  return this.size = e.size, i;
}
function Bg(t9) {
  return this.__data__.get(t9);
}
function Fg(t9) {
  return this.__data__.has(t9);
}
var Lg = 200;
function Ag(t9, e) {
  var i = this.__data__;
  if (i instanceof Gt) {
    var r = i.__data__;
    if (!ii || r.length < Lg - 1)
      return r.push([t9, e]), this.size = ++i.size, this;
    i = this.__data__ = new ne(r);
  }
  return i.set(t9, e), this.size = i.size, this;
}
function De(t9) {
  var e = this.__data__ = new Gt(t9);
  this.size = e.size;
}
De.prototype.clear = kg;
De.prototype.delete = wg;
De.prototype.get = Bg;
De.prototype.has = Fg;
De.prototype.set = Ag;
var Eg = function() {
  try {
    var t9 = ye(Object, "defineProperty");
    return t9({}, "", {}), t9;
  } catch {
  }
}();
var Zi = Eg;
function qn(t9, e, i) {
  e == "__proto__" && Zi ? Zi(t9, e, {
    configurable: true,
    enumerable: true,
    value: i,
    writable: true
  }) : t9[e] = i;
}
function fn(t9, e, i) {
  (i !== void 0 && !xr(t9[e], i) || i === void 0 && !(e in t9)) && qn(t9, e, i);
}
function Og(t9) {
  return function(e, i, r) {
    for (var n = -1, o = Object(e), s = r(e), a = s.length; a--; ) {
      var l = s[t9 ? a : ++n];
      if (i(o[l], l, o) === false)
        break;
    }
    return e;
  };
}
var Mg = Og();
var $g = Mg;
var Ia = typeof exports == "object" && exports && !exports.nodeType && exports;
var Jo = Ia && typeof module == "object" && module && !module.nodeType && module;
var Ig = Jo && Jo.exports === Ia;
var Qo = Ig ? Dt.Buffer : void 0;
var ts = Qo ? Qo.allocUnsafe : void 0;
function Dg(t9, e) {
  if (e)
    return t9.slice();
  var i = t9.length, r = ts ? ts(i) : new t9.constructor(i);
  return t9.copy(r), r;
}
var Ng = Dt.Uint8Array;
var es = Ng;
function Rg(t9) {
  var e = new t9.constructor(t9.byteLength);
  return new es(e).set(new es(t9)), e;
}
function Pg(t9, e) {
  var i = e ? Rg(t9.buffer) : t9.buffer;
  return new t9.constructor(i, t9.byteOffset, t9.length);
}
function qg(t9, e) {
  var i = -1, r = t9.length;
  for (e || (e = Array(r)); ++i < r; )
    e[i] = t9[i];
  return e;
}
var is = Object.create;
var zg = function() {
  function t9() {
  }
  return function(e) {
    if (!me(e))
      return {};
    if (is)
      return is(e);
    t9.prototype = e;
    var i = new t9();
    return t9.prototype = void 0, i;
  };
}();
var Wg = zg;
function Da(t9, e) {
  return function(i) {
    return t9(e(i));
  };
}
var Hg = Da(Object.getPrototypeOf, Object);
var Na = Hg;
var jg = Object.prototype;
function Sr(t9) {
  var e = t9 && t9.constructor, i = typeof e == "function" && e.prototype || jg;
  return t9 === i;
}
function Ug(t9) {
  return typeof t9.constructor == "function" && !Sr(t9) ? Wg(Na(t9)) : {};
}
function fi(t9) {
  return t9 != null && typeof t9 == "object";
}
var Yg = "[object Arguments]";
function rs(t9) {
  return fi(t9) && Ie(t9) == Yg;
}
var Ra = Object.prototype;
var Gg = Ra.hasOwnProperty;
var Vg = Ra.propertyIsEnumerable;
var Xg = rs(function() {
  return arguments;
}()) ? rs : function(t9) {
  return fi(t9) && Gg.call(t9, "callee") && !Vg.call(t9, "callee");
};
var Ji = Xg;
var Kg = Array.isArray;
var Qi = Kg;
var Zg = 9007199254740991;
function Pa(t9) {
  return typeof t9 == "number" && t9 > -1 && t9 % 1 == 0 && t9 <= Zg;
}
function vr(t9) {
  return t9 != null && Pa(t9.length) && !Pn(t9);
}
function Jg(t9) {
  return fi(t9) && vr(t9);
}
function Qg() {
  return false;
}
var qa = typeof exports == "object" && exports && !exports.nodeType && exports;
var ns = qa && typeof module == "object" && module && !module.nodeType && module;
var t0 = ns && ns.exports === qa;
var os = t0 ? Dt.Buffer : void 0;
var e0 = os ? os.isBuffer : void 0;
var i0 = e0 || Qg;
var zn = i0;
var r0 = "[object Object]";
var n0 = Function.prototype;
var o0 = Object.prototype;
var za = n0.toString;
var s0 = o0.hasOwnProperty;
var a0 = za.call(Object);
function l0(t9) {
  if (!fi(t9) || Ie(t9) != r0)
    return false;
  var e = Na(t9);
  if (e === null)
    return true;
  var i = s0.call(e, "constructor") && e.constructor;
  return typeof i == "function" && i instanceof i && za.call(i) == a0;
}
var h0 = "[object Arguments]";
var c0 = "[object Array]";
var u0 = "[object Boolean]";
var f0 = "[object Date]";
var d0 = "[object Error]";
var p0 = "[object Function]";
var g0 = "[object Map]";
var m0 = "[object Number]";
var _0 = "[object Object]";
var y0 = "[object RegExp]";
var C0 = "[object Set]";
var x0 = "[object String]";
var b0 = "[object WeakMap]";
var T0 = "[object ArrayBuffer]";
var S0 = "[object DataView]";
var v0 = "[object Float32Array]";
var k0 = "[object Float64Array]";
var w0 = "[object Int8Array]";
var B0 = "[object Int16Array]";
var F0 = "[object Int32Array]";
var L0 = "[object Uint8Array]";
var A0 = "[object Uint8ClampedArray]";
var E0 = "[object Uint16Array]";
var O0 = "[object Uint32Array]";
var Y = {};
Y[v0] = Y[k0] = Y[w0] = Y[B0] = Y[F0] = Y[L0] = Y[A0] = Y[E0] = Y[O0] = true;
Y[h0] = Y[c0] = Y[T0] = Y[u0] = Y[S0] = Y[f0] = Y[d0] = Y[p0] = Y[g0] = Y[m0] = Y[_0] = Y[y0] = Y[C0] = Y[x0] = Y[b0] = false;
function M0(t9) {
  return fi(t9) && Pa(t9.length) && !!Y[Ie(t9)];
}
function $0(t9) {
  return function(e) {
    return t9(e);
  };
}
var Wa = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ve = Wa && typeof module == "object" && module && !module.nodeType && module;
var I0 = Ve && Ve.exports === Wa;
var Vr = I0 && Ma.process;
var D0 = function() {
  try {
    var t9 = Ve && Ve.require && Ve.require("util").types;
    return t9 || Vr && Vr.binding && Vr.binding("util");
  } catch {
  }
}();
var ss = D0;
var as = ss && ss.isTypedArray;
var N0 = as ? $0(as) : M0;
var Wn = N0;
function dn(t9, e) {
  if (!(e === "constructor" && typeof t9[e] == "function") && e != "__proto__")
    return t9[e];
}
var R0 = Object.prototype;
var P0 = R0.hasOwnProperty;
function q0(t9, e, i) {
  var r = t9[e];
  (!(P0.call(t9, e) && xr(r, i)) || i === void 0 && !(e in t9)) && qn(t9, e, i);
}
function z0(t9, e, i, r) {
  var n = !i;
  i || (i = {});
  for (var o = -1, s = e.length; ++o < s; ) {
    var a = e[o], l = r ? r(i[a], t9[a], a, i, t9) : void 0;
    l === void 0 && (l = t9[a]), n ? qn(i, a, l) : q0(i, a, l);
  }
  return i;
}
function W0(t9, e) {
  for (var i = -1, r = Array(t9); ++i < t9; )
    r[i] = e(i);
  return r;
}
var H0 = 9007199254740991;
var j0 = /^(?:0|[1-9]\d*)$/;
function Ha(t9, e) {
  var i = typeof t9;
  return e = e ?? H0, !!e && (i == "number" || i != "symbol" && j0.test(t9)) && t9 > -1 && t9 % 1 == 0 && t9 < e;
}
var U0 = Object.prototype;
var Y0 = U0.hasOwnProperty;
function G0(t9, e) {
  var i = Qi(t9), r = !i && Ji(t9), n = !i && !r && zn(t9), o = !i && !r && !n && Wn(t9), s = i || r || n || o, a = s ? W0(t9.length, String) : [], l = a.length;
  for (var h in t9)
    (e || Y0.call(t9, h)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Ha(h, l))) && a.push(h);
  return a;
}
function V0(t9) {
  var e = [];
  if (t9 != null)
    for (var i in Object(t9))
      e.push(i);
  return e;
}
var X0 = Object.prototype;
var K0 = X0.hasOwnProperty;
function Z0(t9) {
  if (!me(t9))
    return V0(t9);
  var e = Sr(t9), i = [];
  for (var r in t9)
    r == "constructor" && (e || !K0.call(t9, r)) || i.push(r);
  return i;
}
function ja(t9) {
  return vr(t9) ? G0(t9, true) : Z0(t9);
}
function J0(t9) {
  return z0(t9, ja(t9));
}
function Q0(t9, e, i, r, n, o, s) {
  var a = dn(t9, i), l = dn(e, i), h = s.get(l);
  if (h) {
    fn(t9, i, h);
    return;
  }
  var c = o ? o(a, l, i + "", t9, e, s) : void 0, u = c === void 0;
  if (u) {
    var g = Qi(l), p = !g && zn(l), _ = !g && !p && Wn(l);
    c = l, g || p || _ ? Qi(a) ? c = a : Jg(a) ? c = qg(a) : p ? (u = false, c = Dg(l, true)) : _ ? (u = false, c = Pg(l, true)) : c = [] : l0(l) || Ji(l) ? (c = a, Ji(a) ? c = J0(a) : (!me(a) || Pn(a)) && (c = Ug(l))) : u = false;
  }
  u && (s.set(l, c), n(c, l, r, o, s), s.delete(l)), fn(t9, i, c);
}
function Ua(t9, e, i, r, n) {
  t9 !== e && $g(e, function(o, s) {
    if (n || (n = new De()), me(o))
      Q0(t9, e, s, i, Ua, r, n);
    else {
      var a = r ? r(dn(t9, s), o, s + "", t9, e, n) : void 0;
      a === void 0 && (a = o), fn(t9, s, a);
    }
  }, ja);
}
function Ya(t9) {
  return t9;
}
function tm(t9, e, i) {
  switch (i.length) {
    case 0:
      return t9.call(e);
    case 1:
      return t9.call(e, i[0]);
    case 2:
      return t9.call(e, i[0], i[1]);
    case 3:
      return t9.call(e, i[0], i[1], i[2]);
  }
  return t9.apply(e, i);
}
var ls = Math.max;
function em(t9, e, i) {
  return e = ls(e === void 0 ? t9.length - 1 : e, 0), function() {
    for (var r = arguments, n = -1, o = ls(r.length - e, 0), s = Array(o); ++n < o; )
      s[n] = r[e + n];
    n = -1;
    for (var a = Array(e + 1); ++n < e; )
      a[n] = r[n];
    return a[e] = i(s), tm(t9, this, a);
  };
}
function im(t9) {
  return function() {
    return t9;
  };
}
var rm = Zi ? function(t9, e) {
  return Zi(t9, "toString", {
    configurable: true,
    enumerable: false,
    value: im(e),
    writable: true
  });
} : Ya;
var nm = rm;
var om = 800;
var sm = 16;
var am = Date.now;
function lm(t9) {
  var e = 0, i = 0;
  return function() {
    var r = am(), n = sm - (r - i);
    if (i = r, n > 0) {
      if (++e >= om)
        return arguments[0];
    } else
      e = 0;
    return t9.apply(void 0, arguments);
  };
}
var hm = lm(nm);
var cm = hm;
function um(t9, e) {
  return cm(em(t9, e, Ya), t9 + "");
}
function fm(t9, e, i) {
  if (!me(i))
    return false;
  var r = typeof e;
  return (r == "number" ? vr(i) && Ha(e, i.length) : r == "string" && e in i) ? xr(i[e], t9) : false;
}
function dm(t9) {
  return um(function(e, i) {
    var r = -1, n = i.length, o = n > 1 ? i[n - 1] : void 0, s = n > 2 ? i[2] : void 0;
    for (o = t9.length > 3 && typeof o == "function" ? (n--, o) : void 0, s && fm(i[0], i[1], s) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++r < n; ) {
      var a = i[r];
      a && t9(e, a, r, o);
    }
    return e;
  });
}
var pm = dm(function(t9, e, i) {
  Ua(t9, e, i);
});
var gm = pm;
var mm = "​";
var _m = {
  curveBasis: Uf,
  curveBasisClosed: Yf,
  curveBasisOpen: Gf,
  curveBumpX: Hf,
  curveBumpY: jf,
  curveBundle: Vf,
  curveCardinalClosed: Kf,
  curveCardinalOpen: Zf,
  curveCardinal: Xf,
  curveCatmullRomClosed: Qf,
  curveCatmullRomOpen: td,
  curveCatmullRom: Jf,
  curveLinear: Wf,
  curveLinearClosed: ed,
  curveMonotoneX: id,
  curveMonotoneY: rd,
  curveNatural: nd,
  curveStep: od,
  curveStepAfter: ad,
  curveStepBefore: sd
};
var ym = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var Cm = function(t9, e) {
  const i = Ga(t9, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const o = i.map((s) => s.args);
    ri(o), r = nt(r, [...o]);
  } else
    r = i.args;
  if (!r)
    return;
  let n = Cr(t9, e);
  return ["config"].forEach((o) => {
    r[o] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[o], delete r[o]);
  }), r;
};
var Ga = function(t9, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${ym.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t9 = t9.trim().replace(i, "").replace(/'/gm, '"'), w.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t9}`
    );
    let r;
    const n = [];
    for (; (r = Ii.exec(t9)) !== null; )
      if (r.index === Ii.lastIndex && Ii.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const o = r[1] ? r[1] : r[2], s = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({ type: o, args: s });
      }
    return n.length === 0 && n.push({ type: t9, args: null }), n.length === 1 ? n[0] : n;
  } catch (i) {
    return w.error(
      `ERROR: ${i.message} - Unable to parse directive
      ${e !== null ? " type:" + e : ""} based on the text:${t9}`
    ), { type: null, args: null };
  }
};
var xm = function(t9, e) {
  for (const [i, r] of e.entries())
    if (r.match(t9))
      return i;
  return -1;
};
function bm(t9, e) {
  if (!t9)
    return e;
  const i = `curve${t9.charAt(0).toUpperCase() + t9.slice(1)}`;
  return _m[i] || e;
}
function Tm(t9, e) {
  const i = t9.trim();
  if (i)
    return e.securityLevel !== "loose" ? Es(i) : i;
}
var Sm = (t9, ...e) => {
  const i = t9.split("."), r = i.length - 1, n = i[r];
  let o = window;
  for (let s = 0; s < r; s++)
    if (o = o[i[s]], !o)
      return;
  o[n](...e);
};
function tr(t9, e) {
  return t9 && e ? Math.sqrt(Math.pow(e.x - t9.x, 2) + Math.pow(e.y - t9.y, 2)) : 0;
}
function vm(t9) {
  let e, i = 0;
  t9.forEach((o) => {
    i += tr(o, e), e = o;
  });
  let r = i / 2, n;
  return e = void 0, t9.forEach((o) => {
    if (e && !n) {
      const s = tr(o, e);
      if (s < r)
        r -= s;
      else {
        const a = r / s;
        a <= 0 && (n = e), a >= 1 && (n = { x: o.x, y: o.y }), a > 0 && a < 1 && (n = {
          x: (1 - a) * e.x + a * o.x,
          y: (1 - a) * e.y + a * o.y
        });
      }
    }
    e = o;
  }), n;
}
function km(t9) {
  return t9.length === 1 ? t9[0] : vm(t9);
}
var wm = (t9, e, i) => {
  let r;
  w.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  let o = 25, s;
  r = void 0, e.forEach((c) => {
    if (r && !s) {
      const u = tr(c, r);
      if (u < o)
        o -= u;
      else {
        const g = o / u;
        g <= 0 && (s = r), g >= 1 && (s = { x: c.x, y: c.y }), g > 0 && g < 1 && (s = {
          x: (1 - g) * r.x + g * c.x,
          y: (1 - g) * r.y + g * c.y
        });
      }
    }
    r = c;
  });
  const a = t9 ? 10 : 5, l = Math.atan2(e[0].y - s.y, e[0].x - s.x), h = { x: 0, y: 0 };
  return h.x = Math.sin(l) * a + (e[0].x + s.x) / 2, h.y = -Math.cos(l) * a + (e[0].y + s.y) / 2, h;
};
function Bm(t9, e, i) {
  let r = JSON.parse(JSON.stringify(i)), n;
  w.info("our points", r), e !== "start_left" && e !== "start_right" && (r = r.reverse()), r.forEach((u) => {
    n = u;
  });
  let s = 25 + t9, a;
  n = void 0, r.forEach((u) => {
    if (n && !a) {
      const g = tr(u, n);
      if (g < s)
        s -= g;
      else {
        const p = s / g;
        p <= 0 && (a = n), p >= 1 && (a = { x: u.x, y: u.y }), p > 0 && p < 1 && (a = {
          x: (1 - p) * n.x + p * u.x,
          y: (1 - p) * n.y + p * u.y
        });
      }
    }
    n = u;
  });
  const l = 10 + t9 * 0.5, h = Math.atan2(r[0].y - a.y, r[0].x - a.x), c = { x: 0, y: 0 };
  return c.x = Math.sin(h) * l + (r[0].x + a.x) / 2, c.y = -Math.cos(h) * l + (r[0].y + a.y) / 2, e === "start_left" && (c.x = Math.sin(h + Math.PI) * l + (r[0].x + a.x) / 2, c.y = -Math.cos(h + Math.PI) * l + (r[0].y + a.y) / 2), e === "end_right" && (c.x = Math.sin(h - Math.PI) * l + (r[0].x + a.x) / 2 - 5, c.y = -Math.cos(h - Math.PI) * l + (r[0].y + a.y) / 2 - 5), e === "end_left" && (c.x = Math.sin(h) * l + (r[0].x + a.x) / 2 - 5, c.y = -Math.cos(h) * l + (r[0].y + a.y) / 2 - 5), c;
}
function Fm(t9) {
  let e = "", i = "";
  for (const r of t9)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
var hs = 0;
var Lm = () => (hs++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + hs);
function Am(t9) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let n = 0; n < t9; n++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
var Em = (t9) => Am(t9.length);
var Om = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0
  };
};
var Mm = function(t9, e) {
  const i = e.text.replace(Rn.lineBreakRegex, " "), [, r] = jn(e.fontSize), n = t9.append("text");
  n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
  const o = n.append("tspan");
  return o.attr("x", e.x + e.textMargin * 2), o.attr("fill", e.fill), o.text(i), n;
};
var $m = ui(
  (t9, e, i) => {
    if (!t9 || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), Rn.lineBreakRegex.test(t9)))
      return t9;
    const r = t9.split(" "), n = [];
    let o = "";
    return r.forEach((s, a) => {
      const l = er(`${s} `, i), h = er(o, i);
      if (l > e) {
        const { hyphenatedStrings: g, remainingWord: p } = Im(s, e, "-", i);
        n.push(o, ...g), o = p;
      } else
        h + l >= e ? (n.push(o), o = s) : o = [o, s].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(o);
    }), n.filter((s) => s !== "").join(i.joinWith);
  },
  (t9, e, i) => `${t9}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
);
var Im = ui(
  (t9, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const n = [...t9], o = [];
    let s = "";
    return n.forEach((a, l) => {
      const h = `${s}${a}`;
      if (er(h, r) >= e) {
        const u = l + 1, g = n.length === u, p = `${h}${i}`;
        o.push(g ? h : p), s = "";
      } else
        s = h;
    }), { hyphenatedStrings: o, remainingWord: s };
  },
  (t9, e, i = "-", r) => `${t9}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function Dm(t9, e) {
  return e = Object.assign(
    { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 15 },
    e
  ), Hn(t9, e).height;
}
function er(t9, e) {
  return e = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial" }, e), Hn(t9, e).width;
}
var Hn = ui(
  (t9, e) => {
    e = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial" }, e);
    const { fontSize: i, fontFamily: r, fontWeight: n } = e;
    if (!t9)
      return { width: 0, height: 0 };
    const [, o] = jn(i), s = ["sans-serif", r], a = t9.split(Rn.lineBreakRegex), l = [], h = Ct("body");
    if (!h.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const c = h.append("svg");
    for (const g of s) {
      let p = 0;
      const _ = { width: 0, height: 0, lineHeight: 0 };
      for (const v of a) {
        const O = Om();
        O.text = v || mm;
        const P = Mm(c, O).style("font-size", o).style("font-weight", n).style("font-family", g), S = (P._groups || P)[0][0].getBBox();
        if (S.width === 0 && S.height === 0)
          throw new Error("svg element not in render tree");
        _.width = Math.round(Math.max(_.width, S.width)), p = Math.round(S.height), _.height += p, _.lineHeight = Math.round(Math.max(_.lineHeight, p));
      }
      l.push(_);
    }
    c.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (t9, e) => `${t9}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
var Nm = class {
  constructor(e, i) {
    this.deterministic = e, this.seed = i, this.count = i ? i.length : 0;
  }
  next() {
    return this.deterministic ? this.count++ : Date.now();
  }
};
var wi;
var Rm = function(t9) {
  return wi = wi || document.createElement("div"), t9 = escape(t9).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), wi.innerHTML = t9, unescape(wi.textContent);
};
var ri = (t9) => {
  if (w.debug("sanitizeDirective called with", t9), !(typeof t9 != "object" || t9 == null)) {
    if (Array.isArray(t9)) {
      t9.forEach((e) => ri(e));
      return;
    }
    for (const e of Object.keys(t9)) {
      if (w.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !Cp.has(e) || t9[e] == null) {
        w.debug("sanitize deleting key: ", e), delete t9[e];
        continue;
      }
      if (typeof t9[e] == "object") {
        w.debug("sanitizing object", e), ri(t9[e]);
        continue;
      }
      const i = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const r of i)
        e.includes(r) && (w.debug("sanitizing css option", e), t9[e] = Va(t9[e]));
    }
    if (t9.themeVariables)
      for (const e of Object.keys(t9.themeVariables)) {
        const i = t9.themeVariables[e];
        i != null && i.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (t9.themeVariables[e] = "");
      }
    w.debug("After sanitization", t9);
  }
};
var Va = (t9) => {
  let e = 0, i = 0;
  for (const r of t9) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t9;
};
function Xa(t9) {
  return "str" in t9;
}
var Pm = (t9, e, i, r) => {
  if (!r)
    return;
  const n = t9.node().getBBox();
  t9.append("text").text(r).attr("x", n.x + n.width / 2).attr("y", -i).attr("class", e);
};
var jn = (t9) => {
  if (typeof t9 == "number")
    return [t9, t9 + "px"];
  const e = parseInt(t9, 10);
  return Number.isNaN(e) ? [void 0, void 0] : t9 === String(e) ? [e, t9 + "px"] : [e, t9];
};
function qm(t9, e) {
  return gm({}, t9, e);
}
var Di = {
  assignWithDepth: nt,
  wrapLabel: $m,
  calculateTextHeight: Dm,
  calculateTextWidth: er,
  calculateTextDimensions: Hn,
  cleanAndMerge: qm,
  detectInit: Cm,
  detectDirective: Ga,
  isSubstringInArray: xm,
  interpolateToCurve: bm,
  calcLabelPosition: km,
  calcCardinalityPosition: wm,
  calcTerminalLabelPosition: Bm,
  formatUrl: Tm,
  getStylesFromArray: Fm,
  generateId: Lm,
  random: Em,
  runFunc: Sm,
  entityDecode: Rm,
  initIdGenerator: Nm,
  sanitizeDirective: ri,
  sanitizeCss: Va,
  insertTitle: Pm,
  parseFontSize: jn
};
var Ka = "comm";
var Za = "rule";
var Ja = "decl";
var zm = "@import";
var Wm = "@keyframes";
var Hm = Math.abs;
var Un = String.fromCharCode;
function Qa(t9) {
  return t9.trim();
}
function pn(t9, e, i) {
  return t9.replace(e, i);
}
function jm(t9, e) {
  return t9.indexOf(e);
}
function ni(t9, e) {
  return t9.charCodeAt(e) | 0;
}
function oi(t9, e, i) {
  return t9.slice(e, i);
}
function te(t9) {
  return t9.length;
}
function tl(t9) {
  return t9.length;
}
function Bi(t9, e) {
  return e.push(t9), t9;
}
var kr = 1;
var Oe = 1;
var el = 0;
var Tt = 0;
var Z = 0;
var Ne = "";
function Yn(t9, e, i, r, n, o, s) {
  return { value: t9, root: e, parent: i, type: r, props: n, children: o, line: kr, column: Oe, length: s, return: "" };
}
function Um() {
  return Z;
}
function Ym() {
  return Z = Tt > 0 ? ni(Ne, --Tt) : 0, Oe--, Z === 10 && (Oe = 1, kr--), Z;
}
function wt() {
  return Z = Tt < el ? ni(Ne, Tt++) : 0, Oe++, Z === 10 && (Oe = 1, kr++), Z;
}
function ue() {
  return ni(Ne, Tt);
}
function Ni() {
  return Tt;
}
function wr(t9, e) {
  return oi(Ne, t9, e);
}
function gn(t9) {
  switch (t9) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gm(t9) {
  return kr = Oe = 1, el = te(Ne = t9), Tt = 0, [];
}
function Vm(t9) {
  return Ne = "", t9;
}
function Xr(t9) {
  return Qa(wr(Tt - 1, mn(t9 === 91 ? t9 + 2 : t9 === 40 ? t9 + 1 : t9)));
}
function Xm(t9) {
  for (; (Z = ue()) && Z < 33; )
    wt();
  return gn(t9) > 2 || gn(Z) > 3 ? "" : " ";
}
function Km(t9, e) {
  for (; --e && wt() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return wr(t9, Ni() + (e < 6 && ue() == 32 && wt() == 32));
}
function mn(t9) {
  for (; wt(); )
    switch (Z) {
      case t9:
        return Tt;
      case 34:
      case 39:
        t9 !== 34 && t9 !== 39 && mn(Z);
        break;
      case 40:
        t9 === 41 && mn(t9);
        break;
      case 92:
        wt();
        break;
    }
  return Tt;
}
function Zm(t9, e) {
  for (; wt() && t9 + Z !== 47 + 10; )
    if (t9 + Z === 42 + 42 && ue() === 47)
      break;
  return "/*" + wr(e, Tt - 1) + "*" + Un(t9 === 47 ? t9 : wt());
}
function Jm(t9) {
  for (; !gn(ue()); )
    wt();
  return wr(t9, Tt);
}
function Qm(t9) {
  return Vm(Ri("", null, null, null, [""], t9 = Gm(t9), 0, [0], t9));
}
function Ri(t9, e, i, r, n, o, s, a, l) {
  for (var h = 0, c = 0, u = s, g = 0, p = 0, _ = 0, v = 1, O = 1, P = 1, S = 0, z = "", Q = n, X = o, G = r, W = z; O; )
    switch (_ = S, S = wt()) {
      case 40:
        if (_ != 108 && ni(W, u - 1) == 58) {
          jm(W += pn(Xr(S), "&", "&\f"), "&\f") != -1 && (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        W += Xr(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        W += Xm(_);
        break;
      case 92:
        W += Km(Ni() - 1, 7);
        continue;
      case 47:
        switch (ue()) {
          case 42:
          case 47:
            Bi(t_(Zm(wt(), Ni()), e, i), l);
            break;
          default:
            W += "/";
        }
        break;
      case 123 * v:
        a[h++] = te(W) * P;
      case 125 * v:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            O = 0;
          case 59 + c:
            p > 0 && te(W) - u && Bi(p > 32 ? us(W + ";", r, i, u - 1) : us(pn(W, " ", "") + ";", r, i, u - 2), l);
            break;
          case 59:
            W += ";";
          default:
            if (Bi(G = cs(W, e, i, h, c, n, a, z, Q = [], X = [], u), o), S === 123)
              if (c === 0)
                Ri(W, e, G, G, Q, o, u, a, X);
              else
                switch (g === 99 && ni(W, 3) === 110 ? 100 : g) {
                  case 100:
                  case 109:
                  case 115:
                    Ri(t9, G, G, r && Bi(cs(t9, G, G, 0, 0, n, a, z, n, Q = [], u), X), n, X, u, a, r ? Q : X);
                    break;
                  default:
                    Ri(W, G, G, G, [""], X, 0, a, X);
                }
        }
        h = c = p = 0, v = P = 1, z = W = "", u = s;
        break;
      case 58:
        u = 1 + te(W), p = _;
      default:
        if (v < 1) {
          if (S == 123)
            --v;
          else if (S == 125 && v++ == 0 && Ym() == 125)
            continue;
        }
        switch (W += Un(S), S * v) {
          case 38:
            P = c > 0 ? 1 : (W += "\f", -1);
            break;
          case 44:
            a[h++] = (te(W) - 1) * P, P = 1;
            break;
          case 64:
            ue() === 45 && (W += Xr(wt())), g = ue(), c = u = te(z = W += Jm(Ni())), S++;
            break;
          case 45:
            _ === 45 && te(W) == 2 && (v = 0);
        }
    }
  return o;
}
function cs(t9, e, i, r, n, o, s, a, l, h, c) {
  for (var u = n - 1, g = n === 0 ? o : [""], p = tl(g), _ = 0, v = 0, O = 0; _ < r; ++_)
    for (var P = 0, S = oi(t9, u + 1, u = Hm(v = s[_])), z = t9; P < p; ++P)
      (z = Qa(v > 0 ? g[P] + " " + S : pn(S, /&\f/g, g[P]))) && (l[O++] = z);
  return Yn(t9, e, i, n === 0 ? Za : a, l, h, c);
}
function t_(t9, e, i) {
  return Yn(t9, e, i, Ka, Un(Um()), oi(t9, 2, -2), 0);
}
function us(t9, e, i, r) {
  return Yn(t9, e, i, Ja, oi(t9, 0, r), oi(t9, r + 1, -1), r);
}
function _n(t9, e) {
  for (var i = "", r = tl(t9), n = 0; n < r; n++)
    i += e(t9[n], n, t9, e) || "";
  return i;
}
function e_(t9, e, i, r) {
  switch (t9.type) {
    case zm:
    case Ja:
      return t9.return = t9.return || t9.value;
    case Ka:
      return "";
    case Wm:
      return t9.return = t9.value + "{" + _n(t9.children, r) + "}";
    case Za:
      t9.value = t9.props.join(",");
  }
  return te(i = _n(t9.children, r)) ? t9.return = t9.value + "{" + i + "}" : "";
}
var fs = "10.4.0";
var si = Object.freeze(xp);
var ut = nt({}, si);
var il;
var Me = [];
var Xe = nt({}, si);
var Br = (t9, e) => {
  let i = nt({}, t9), r = {};
  for (const n of e)
    nl(n), r = nt(r, n);
  if (i = nt(i, r), r.theme && r.theme in Ut) {
    const n = nt({}, il), o = nt(
      n.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in Ut && (i.themeVariables = Ut[i.theme].getThemeVariables(o));
  }
  return Xe = i, ol(Xe), Xe;
};
var i_ = (t9) => (ut = nt({}, si), ut = nt(ut, t9), t9.theme && Ut[t9.theme] && (ut.themeVariables = Ut[t9.theme].getThemeVariables(t9.themeVariables)), Br(ut, Me), ut);
var r_ = (t9) => {
  il = nt({}, t9);
};
var n_ = (t9) => (ut = nt(ut, t9), Br(ut, Me), ut);
var rl = () => nt({}, ut);
var o_ = (t9) => (ol(t9), nt(Xe, t9), Ft());
var Ft = () => nt({}, Xe);
var nl = (t9) => {
  t9 && (["secure", ...ut.secure ?? []].forEach((e) => {
    Object.hasOwn(t9, e) && (w.debug(`Denied attempt to modify a secure key ${e}`, t9[e]), delete t9[e]);
  }), Object.keys(t9).forEach((e) => {
    e.startsWith("__") && delete t9[e];
  }), Object.keys(t9).forEach((e) => {
    typeof t9[e] == "string" && (t9[e].includes("<") || t9[e].includes(">") || t9[e].includes("url(data:")) && delete t9[e], typeof t9[e] == "object" && nl(t9[e]);
  }));
};
var ir = (t9) => {
  ri(t9), t9.fontFamily && (!t9.themeVariables || !t9.themeVariables.fontFamily) && (t9.themeVariables = { fontFamily: t9.fontFamily }), Me.push(t9), Br(ut, Me);
};
var rr = (t9 = ut) => {
  Me = [], Br(t9, Me);
};
var s_ = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
};
var ds = {};
var a_ = (t9) => {
  ds[t9] || (w.warn(s_[t9]), ds[t9] = true);
};
var ol = (t9) => {
  t9 && (t9.lazyLoadedDiagrams || t9.loadExternalDiagramsAtStartup) && a_("LAZY_LOAD_DEPRECATED");
};
var sl = "c4";
var l_ = (t9) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t9);
var h_ = async () => {
  const { diagram: t9 } = await import("./c4Diagram-01b08bdc-2GUEHILO.js");
  return { id: sl, diagram: t9 };
};
var c_ = {
  id: sl,
  detector: l_,
  loader: h_
};
var u_ = c_;
var al = "flowchart";
var f_ = (t9, e) => {
  var i, r;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t9);
};
var d_ = async () => {
  const { diagram: t9 } = await import("./flowDiagram-5d2b0cd4-QMDS4BNN.js");
  return { id: al, diagram: t9 };
};
var p_ = {
  id: al,
  detector: f_,
  loader: d_
};
var g_ = p_;
var ll = "flowchart-v2";
var m_ = (t9, e) => {
  var i, r, n;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t9) && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(t9);
};
var __ = async () => {
  const { diagram: t9 } = await import("./flowDiagram-v2-c8096018-3PU4MMAW.js");
  return { id: ll, diagram: t9 };
};
var y_ = {
  id: ll,
  detector: m_,
  loader: __
};
var C_ = y_;
var hl = "er";
var x_ = (t9) => /^\s*erDiagram/.test(t9);
var b_ = async () => {
  const { diagram: t9 } = await import("./erDiagram-9aadf2be-CKLLTNNY.js");
  return { id: hl, diagram: t9 };
};
var T_ = {
  id: hl,
  detector: x_,
  loader: b_
};
var S_ = T_;
var cl = "gitGraph";
var v_ = (t9) => /^\s*gitGraph/.test(t9);
var k_ = async () => {
  const { diagram: t9 } = await import("./gitGraphDiagram-4c126424-BI42QT22.js");
  return { id: cl, diagram: t9 };
};
var w_ = {
  id: cl,
  detector: v_,
  loader: k_
};
var B_ = w_;
var ul = "gantt";
var F_ = (t9) => /^\s*gantt/.test(t9);
var L_ = async () => {
  const { diagram: t9 } = await import("./ganttDiagram-3d9d1ab4-CXBJCGZW.js");
  return { id: ul, diagram: t9 };
};
var A_ = {
  id: ul,
  detector: F_,
  loader: L_
};
var E_ = A_;
var fl = "info";
var O_ = (t9) => /^\s*info/.test(t9);
var M_ = async () => {
  const { diagram: t9 } = await import("./infoDiagram-6cbe7c6f-PPDGBUL6.js");
  return { id: fl, diagram: t9 };
};
var $_ = {
  id: fl,
  detector: O_,
  loader: M_
};
var dl = "pie";
var I_ = (t9) => /^\s*pie/.test(t9);
var D_ = async () => {
  const { diagram: t9 } = await import("./pieDiagram-16330908-F3OG5CML.js");
  return { id: dl, diagram: t9 };
};
var N_ = {
  id: dl,
  detector: I_,
  loader: D_
};
var pl = "quadrantChart";
var R_ = (t9) => /^\s*quadrantChart/.test(t9);
var P_ = async () => {
  const { diagram: t9 } = await import("./quadrantDiagram-6f203608-75IQDGD7.js");
  return { id: pl, diagram: t9 };
};
var q_ = {
  id: pl,
  detector: R_,
  loader: P_
};
var z_ = q_;
var gl = "requirement";
var W_ = (t9) => /^\s*requirement(Diagram)?/.test(t9);
var H_ = async () => {
  const { diagram: t9 } = await import("./requirementDiagram-e64784ea-SRAH6OKB.js");
  return { id: gl, diagram: t9 };
};
var j_ = {
  id: gl,
  detector: W_,
  loader: H_
};
var U_ = j_;
var ml = "sequence";
var Y_ = (t9) => /^\s*sequenceDiagram/.test(t9);
var G_ = async () => {
  const { diagram: t9 } = await import("./sequenceDiagram-b5c34a98-OL4N2AQS.js");
  return { id: ml, diagram: t9 };
};
var V_ = {
  id: ml,
  detector: Y_,
  loader: G_
};
var X_ = V_;
var _l = "class";
var K_ = (t9, e) => {
  var i;
  return ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(t9);
};
var Z_ = async () => {
  const { diagram: t9 } = await import("./classDiagram-09b02f81-6UXFJLG6.js");
  return { id: _l, diagram: t9 };
};
var J_ = {
  id: _l,
  detector: K_,
  loader: Z_
};
var Q_ = J_;
var yl = "classDiagram";
var ty = (t9, e) => {
  var i;
  return /^\s*classDiagram/.test(t9) && ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(t9);
};
var ey = async () => {
  const { diagram: t9 } = await import("./classDiagram-v2-441552b7-G6QSA7WV.js");
  return { id: yl, diagram: t9 };
};
var iy = {
  id: yl,
  detector: ty,
  loader: ey
};
var ry = iy;
var Cl = "state";
var ny = (t9, e) => {
  var i;
  return ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(t9);
};
var oy = async () => {
  const { diagram: t9 } = await import("./stateDiagram-c6f77c62-QM5UQNRN.js");
  return { id: Cl, diagram: t9 };
};
var sy = {
  id: Cl,
  detector: ny,
  loader: oy
};
var ay = sy;
var xl = "stateDiagram";
var ly = (t9, e) => {
  var i;
  return !!(/^\s*stateDiagram-v2/.test(t9) || /^\s*stateDiagram/.test(t9) && ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
};
var hy = async () => {
  const { diagram: t9 } = await import("./stateDiagram-v2-7af7da00-GA3MWYDH.js");
  return { id: xl, diagram: t9 };
};
var cy = {
  id: xl,
  detector: ly,
  loader: hy
};
var uy = cy;
var bl = "journey";
var fy = (t9) => /^\s*journey/.test(t9);
var dy = async () => {
  const { diagram: t9 } = await import("./journeyDiagram-f3c7ca51-VWPY5IHL.js");
  return { id: bl, diagram: t9 };
};
var py = {
  id: bl,
  detector: fy,
  loader: dy
};
var gy = py;
var my = (t9) => {
  var n;
  const { securityLevel: e } = Ft();
  let i = Ct("body");
  if (e === "sandbox") {
    const s = ((n = Ct(`#i${t9}`).node()) == null ? void 0 : n.contentDocument) ?? document;
    i = Ct(s.body);
  }
  return i.select(`#${t9}`);
};
var _y = function(t9, e) {
  for (let i of e)
    t9.attr(i[0], i[1]);
};
var yy = function(t9, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t9), r.set("width", e)), r;
};
var Tl = function(t9, e, i, r) {
  const n = yy(e, i, r);
  _y(t9, n);
};
var Cy = function(t9, e, i, r) {
  const n = e.node().getBBox(), o = n.width, s = n.height;
  w.info(`SVG bounds: ${o}x${s}`, n);
  let a = 0, l = 0;
  w.info(`Graph bounds: ${a}x${l}`, t9), a = o + i * 2, l = s + i * 2, w.info(`Calculated bounds: ${a}x${l}`), Tl(e, l, a, r);
  const h = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
  e.attr("viewBox", h);
};
var xy = (t9, e, i) => {
  w.debug(`renering svg for syntax error
`);
  const r = my(e);
  r.attr("viewBox", "0 0 2412 512"), Tl(r, 100, 512, true);
  const n = r.append("g");
  n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
};
var Sl = { draw: xy };
var by = Sl;
var Ty = {
  db: {},
  renderer: Sl,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
};
var Sy = Ty;
var vl = "flowchart-elk";
var vy = (t9, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t9) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t9) && ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
};
var ky = async () => {
  const { diagram: t9 } = await import("./flowchart-elk-definition-32a627c1-CS6ZTFMX.js");
  return { id: vl, diagram: t9 };
};
var wy = {
  id: vl,
  detector: vy,
  loader: ky
};
var By = wy;
var kl = "timeline";
var Fy = (t9) => /^\s*timeline/.test(t9);
var Ly = async () => {
  const { diagram: t9 } = await import("./timeline-definition-e6c31e7d-XOOQ4VW2.js");
  return { id: kl, diagram: t9 };
};
var Ay = {
  id: kl,
  detector: Fy,
  loader: Ly
};
var Ey = Ay;
var wl = "mindmap";
var Oy = (t9) => /^\s*mindmap/.test(t9);
var My = async () => {
  const { diagram: t9 } = await import("./mindmap-definition-6e51e9e7-ZKBKG3X3.js");
  return { id: wl, diagram: t9 };
};
var $y = {
  id: wl,
  detector: Oy,
  loader: My
};
var Iy = $y;
var Bl = "sankey";
var Dy = (t9) => /^\s*sankey-beta/.test(t9);
var Ny = async () => {
  const { diagram: t9 } = await import("./sankeyDiagram-80078f5f-ZNN6THSE.js");
  return { id: Bl, diagram: t9 };
};
var Ry = {
  id: Bl,
  detector: Dy,
  loader: Ny
};
var Py = Ry;
var Pi = {};
var qy = (t9, e, i) => {
  let r = "";
  return t9 in Pi && Pi[t9] ? r = Pi[t9](i) : w.warn(`No theme found for ${t9}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
};
var zy = (t9, e) => {
  e !== void 0 && (Pi[t9] = e);
};
var Wy = qy;
var Gn = "";
var Fr = "";
var Vn = "";
var Xn = (t9) => ti(t9, Ft());
var Fl = function() {
  Gn = "", Vn = "", Fr = "";
};
var Ll = function(t9) {
  Gn = Xn(t9).replace(/^\s+/g, "");
};
var Al = function() {
  return Gn || Fr;
};
var El = function(t9) {
  Vn = Xn(t9).replace(/\n\s+/g, `
`);
};
var Ol = function() {
  return Vn;
};
var Ml = function(t9) {
  Fr = Xn(t9);
};
var $l = function() {
  return Fr;
};
var Hy = {
  getAccTitle: Al,
  setAccTitle: Ll,
  getDiagramTitle: $l,
  setDiagramTitle: Ml,
  getAccDescription: Ol,
  setAccDescription: El,
  clear: Fl
};
var jy = Object.freeze(Object.defineProperty({
  __proto__: null,
  clear: Fl,
  default: Hy,
  getAccDescription: Ol,
  getAccTitle: Al,
  getDiagramTitle: $l,
  setAccDescription: El,
  setAccTitle: Ll,
  setDiagramTitle: Ml
}, Symbol.toStringTag, { value: "Module" }));
var ae = {};
var Il = function(t9, e, i, r) {
  w.debug("parseDirective is being called", e, i, r);
  try {
    if (e !== void 0)
      switch (e = e.trim(), i) {
        case "open_directive":
          ae = {};
          break;
        case "type_directive":
          if (!ae)
            throw new Error("currentDirective is undefined");
          ae.type = e.toLowerCase();
          break;
        case "arg_directive":
          if (!ae)
            throw new Error("currentDirective is undefined");
          ae.args = JSON.parse(e);
          break;
        case "close_directive":
          Uy(t9, ae, r), ae = void 0;
          break;
      }
  } catch (n) {
    w.error(
      `Error while rendering sequenceDiagram directive: ${e} jison context: ${i}`
    ), w.error(n.message);
  }
};
var Uy = function(t9, e, i) {
  switch (w.info(`Directive type=${e.type} with args:`, e.args), e.type) {
    case "init":
    case "initialize": {
      ["config"].forEach((r) => {
        e.args[r] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), e.args[i] = e.args[r], delete e.args[r]);
      }), ir(e.args);
      break;
    }
    case "wrap":
    case "nowrap":
      t9 && t9.setWrap && t9.setWrap(e.type === "wrap");
      break;
    case "themeCss":
      w.warn("themeCss encountered");
      break;
    default:
      w.warn(
        `Unhandled directive: source: '%%{${e.type}: ${JSON.stringify(
          e.args ? e.args : {}
        )}}%%`,
        e
      );
      break;
  }
};
var Yy = w;
var Gy = vn;
var Dl = Ft;
var Vy = (t9) => ti(t9, Dl());
var Xy = Cy;
var Ky = () => jy;
var Zy = (t9, e, i, r) => Il(t9, e, i, r);
var nr = {};
var or = (t9, e, i) => {
  if (nr[t9])
    throw new Error(`Diagram ${t9} already registered.`);
  nr[t9] = e, i && Oa(t9, i), zy(t9, e.styles), e.injectUtils && e.injectUtils(
    Yy,
    Gy,
    Dl,
    Vy,
    Xy,
    Ky(),
    Zy
  );
};
var Kn = (t9) => {
  if (t9 in nr)
    return nr[t9];
  throw new Jy(t9);
};
var Jy = class extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
};
var ps = false;
var Zn = () => {
  ps || (ps = true, or("error", Sy, (t9) => t9.toLowerCase().trim() === "error"), or(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {},
      // should never be used
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t9) => t9.toLowerCase().trimStart().startsWith("---")
  ), Ea(
    u_,
    ry,
    Q_,
    S_,
    E_,
    $_,
    N_,
    U_,
    X_,
    By,
    C_,
    g_,
    Iy,
    Ey,
    B_,
    uy,
    ay,
    gy,
    z_,
    Py
  ));
};
function Nl(t9) {
  return typeof t9 > "u" || t9 === null;
}
function Qy(t9) {
  return typeof t9 == "object" && t9 !== null;
}
function tC(t9) {
  return Array.isArray(t9) ? t9 : Nl(t9) ? [] : [t9];
}
function eC(t9, e) {
  var i, r, n, o;
  if (e)
    for (o = Object.keys(e), i = 0, r = o.length; i < r; i += 1)
      n = o[i], t9[n] = e[n];
  return t9;
}
function iC(t9, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t9;
  return i;
}
function rC(t9) {
  return t9 === 0 && Number.NEGATIVE_INFINITY === 1 / t9;
}
var nC = Nl;
var oC = Qy;
var sC = tC;
var aC = iC;
var lC = rC;
var hC = eC;
var at = {
  isNothing: nC,
  isObject: oC,
  toArray: sC,
  repeat: aC,
  isNegativeZero: lC,
  extend: hC
};
function Rl(t9, e) {
  var i = "", r = t9.reason || "(unknown reason)";
  return t9.mark ? (t9.mark.name && (i += 'in "' + t9.mark.name + '" '), i += "(" + (t9.mark.line + 1) + ":" + (t9.mark.column + 1) + ")", !e && t9.mark.snippet && (i += `

` + t9.mark.snippet), r + " " + i) : r;
}
function ai(t9, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t9, this.mark = e, this.message = Rl(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
ai.prototype = Object.create(Error.prototype);
ai.prototype.constructor = ai;
ai.prototype.toString = function(e) {
  return this.name + ": " + Rl(this, e);
};
var jt = ai;
function Kr(t9, e, i, r, n) {
  var o = "", s = "", a = Math.floor(n / 2) - 1;
  return r - e > a && (o = " ... ", e = r - a + o.length), i - r > a && (s = " ...", i = r + a - s.length), {
    str: o + t9.slice(e, i).replace(/\t/g, "→") + s,
    pos: r - e + o.length
    // relative position
  };
}
function Zr(t9, e) {
  return at.repeat(" ", e - t9.length) + t9;
}
function cC(t9, e) {
  if (e = Object.create(e || null), !t9.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], n = [], o, s = -1; o = i.exec(t9.buffer); )
    n.push(o.index), r.push(o.index + o[0].length), t9.position <= o.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  var a = "", l, h, c = Math.min(t9.line + e.linesAfter, n.length).toString().length, u = e.maxLength - (e.indent + c + 3);
  for (l = 1; l <= e.linesBefore && !(s - l < 0); l++)
    h = Kr(
      t9.buffer,
      r[s - l],
      n[s - l],
      t9.position - (r[s] - r[s - l]),
      u
    ), a = at.repeat(" ", e.indent) + Zr((t9.line - l + 1).toString(), c) + " | " + h.str + `
` + a;
  for (h = Kr(t9.buffer, r[s], n[s], t9.position, u), a += at.repeat(" ", e.indent) + Zr((t9.line + 1).toString(), c) + " | " + h.str + `
`, a += at.repeat("-", e.indent + c + 3 + h.pos) + `^
`, l = 1; l <= e.linesAfter && !(s + l >= n.length); l++)
    h = Kr(
      t9.buffer,
      r[s + l],
      n[s + l],
      t9.position - (r[s] - r[s + l]),
      u
    ), a += at.repeat(" ", e.indent) + Zr((t9.line + l + 1).toString(), c) + " | " + h.str + `
`;
  return a.replace(/\n$/, "");
}
var uC = cC;
var fC = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var dC = [
  "scalar",
  "sequence",
  "mapping"
];
function pC(t9) {
  var e = {};
  return t9 !== null && Object.keys(t9).forEach(function(i) {
    t9[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function gC(t9, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (fC.indexOf(i) === -1)
      throw new jt('Unknown option "' + i + '" is met in definition of "' + t9 + '" YAML type.');
  }), this.options = e, this.tag = t9, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return true;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || false, this.styleAliases = pC(e.styleAliases || null), dC.indexOf(this.kind) === -1)
    throw new jt('Unknown kind "' + this.kind + '" is specified for "' + t9 + '" YAML type.');
}
var ot = gC;
function gs(t9, e) {
  var i = [];
  return t9[e].forEach(function(r) {
    var n = i.length;
    i.forEach(function(o, s) {
      o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (n = s);
    }), i[n] = r;
  }), i;
}
function mC() {
  var t9 = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, i;
  function r(n) {
    n.multi ? (t9.multi[n.kind].push(n), t9.multi.fallback.push(n)) : t9[n.kind][n.tag] = t9.fallback[n.tag] = n;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t9;
}
function yn(t9) {
  return this.extend(t9);
}
yn.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof ot)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new jt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(o) {
    if (!(o instanceof ot))
      throw new jt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new jt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new jt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(o) {
    if (!(o instanceof ot))
      throw new jt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(yn.prototype);
  return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = gs(n, "implicit"), n.compiledExplicit = gs(n, "explicit"), n.compiledTypeMap = mC(n.compiledImplicit, n.compiledExplicit), n;
};
var _C = yn;
var yC = new ot("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t9) {
    return t9 !== null ? t9 : "";
  }
});
var CC = new ot("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t9) {
    return t9 !== null ? t9 : [];
  }
});
var xC = new ot("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t9) {
    return t9 !== null ? t9 : {};
  }
});
var bC = new _C({
  explicit: [
    yC,
    CC,
    xC
  ]
});
function TC(t9) {
  if (t9 === null)
    return true;
  var e = t9.length;
  return e === 1 && t9 === "~" || e === 4 && (t9 === "null" || t9 === "Null" || t9 === "NULL");
}
function SC() {
  return null;
}
function vC(t9) {
  return t9 === null;
}
var kC = new ot("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: TC,
  construct: SC,
  predicate: vC,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function wC(t9) {
  if (t9 === null)
    return false;
  var e = t9.length;
  return e === 4 && (t9 === "true" || t9 === "True" || t9 === "TRUE") || e === 5 && (t9 === "false" || t9 === "False" || t9 === "FALSE");
}
function BC(t9) {
  return t9 === "true" || t9 === "True" || t9 === "TRUE";
}
function FC(t9) {
  return Object.prototype.toString.call(t9) === "[object Boolean]";
}
var LC = new ot("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: wC,
  construct: BC,
  predicate: FC,
  represent: {
    lowercase: function(t9) {
      return t9 ? "true" : "false";
    },
    uppercase: function(t9) {
      return t9 ? "TRUE" : "FALSE";
    },
    camelcase: function(t9) {
      return t9 ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function AC(t9) {
  return 48 <= t9 && t9 <= 57 || 65 <= t9 && t9 <= 70 || 97 <= t9 && t9 <= 102;
}
function EC(t9) {
  return 48 <= t9 && t9 <= 55;
}
function OC(t9) {
  return 48 <= t9 && t9 <= 57;
}
function MC(t9) {
  if (t9 === null)
    return false;
  var e = t9.length, i = 0, r = false, n;
  if (!e)
    return false;
  if (n = t9[i], (n === "-" || n === "+") && (n = t9[++i]), n === "0") {
    if (i + 1 === e)
      return true;
    if (n = t9[++i], n === "b") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (n !== "0" && n !== "1")
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (!AC(t9.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (!EC(t9.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
  }
  if (n === "_")
    return false;
  for (; i < e; i++)
    if (n = t9[i], n !== "_") {
      if (!OC(t9.charCodeAt(i)))
        return false;
      r = true;
    }
  return !(!r || n === "_");
}
function $C(t9) {
  var e = t9, i = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return i * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return i * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return i * parseInt(e.slice(2), 8);
  }
  return i * parseInt(e, 10);
}
function IC(t9) {
  return Object.prototype.toString.call(t9) === "[object Number]" && t9 % 1 === 0 && !at.isNegativeZero(t9);
}
var DC = new ot("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: MC,
  construct: $C,
  predicate: IC,
  represent: {
    binary: function(t9) {
      return t9 >= 0 ? "0b" + t9.toString(2) : "-0b" + t9.toString(2).slice(1);
    },
    octal: function(t9) {
      return t9 >= 0 ? "0o" + t9.toString(8) : "-0o" + t9.toString(8).slice(1);
    },
    decimal: function(t9) {
      return t9.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t9) {
      return t9 >= 0 ? "0x" + t9.toString(16).toUpperCase() : "-0x" + t9.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var NC = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function RC(t9) {
  return !(t9 === null || !NC.test(t9) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t9[t9.length - 1] === "_");
}
function PC(t9) {
  var e, i;
  return e = t9.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var qC = /^[-+]?[0-9]+e/;
function zC(t9, e) {
  var i;
  if (isNaN(t9))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t9)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t9)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (at.isNegativeZero(t9))
    return "-0.0";
  return i = t9.toString(10), qC.test(i) ? i.replace("e", ".e") : i;
}
function WC(t9) {
  return Object.prototype.toString.call(t9) === "[object Number]" && (t9 % 1 !== 0 || at.isNegativeZero(t9));
}
var HC = new ot("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: RC,
  construct: PC,
  predicate: WC,
  represent: zC,
  defaultStyle: "lowercase"
});
var Pl = bC.extend({
  implicit: [
    kC,
    LC,
    DC,
    HC
  ]
});
var jC = Pl;
var ql = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var zl = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function UC(t9) {
  return t9 === null ? false : ql.exec(t9) !== null || zl.exec(t9) !== null;
}
function YC(t9) {
  var e, i, r, n, o, s, a, l = 0, h = null, c, u, g;
  if (e = ql.exec(t9), e === null && (e = zl.exec(t9)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(i, r, n));
  if (o = +e[4], s = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (c = +e[10], u = +(e[11] || 0), h = (c * 60 + u) * 6e4, e[9] === "-" && (h = -h)), g = new Date(Date.UTC(i, r, n, o, s, a, l)), h && g.setTime(g.getTime() - h), g;
}
function GC(t9) {
  return t9.toISOString();
}
var VC = new ot("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: UC,
  construct: YC,
  instanceOf: Date,
  represent: GC
});
function XC(t9) {
  return t9 === "<<" || t9 === null;
}
var KC = new ot("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: XC
});
var Jn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function ZC(t9) {
  if (t9 === null)
    return false;
  var e, i, r = 0, n = t9.length, o = Jn;
  for (i = 0; i < n; i++)
    if (e = o.indexOf(t9.charAt(i)), !(e > 64)) {
      if (e < 0)
        return false;
      r += 6;
    }
  return r % 8 === 0;
}
function JC(t9) {
  var e, i, r = t9.replace(/[\r\n=]/g, ""), n = r.length, o = Jn, s = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(r.charAt(e));
  return i = n % 4 * 6, i === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : i === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : i === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
}
function QC(t9) {
  var e = "", i = 0, r, n, o = t9.length, s = Jn;
  for (r = 0; r < o; r++)
    r % 3 === 0 && r && (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]), i = (i << 8) + t9[r];
  return n = o % 3, n === 0 ? (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]) : n === 2 ? (e += s[i >> 10 & 63], e += s[i >> 4 & 63], e += s[i << 2 & 63], e += s[64]) : n === 1 && (e += s[i >> 2 & 63], e += s[i << 4 & 63], e += s[64], e += s[64]), e;
}
function tx(t9) {
  return Object.prototype.toString.call(t9) === "[object Uint8Array]";
}
var ex = new ot("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: ZC,
  construct: JC,
  predicate: tx,
  represent: QC
});
var ix = Object.prototype.hasOwnProperty;
var rx = Object.prototype.toString;
function nx(t9) {
  if (t9 === null)
    return true;
  var e = [], i, r, n, o, s, a = t9;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (n = a[i], s = false, rx.call(n) !== "[object Object]")
      return false;
    for (o in n)
      if (ix.call(n, o))
        if (!s)
          s = true;
        else
          return false;
    if (!s)
      return false;
    if (e.indexOf(o) === -1)
      e.push(o);
    else
      return false;
  }
  return true;
}
function ox(t9) {
  return t9 !== null ? t9 : [];
}
var sx = new ot("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: nx,
  construct: ox
});
var ax = Object.prototype.toString;
function lx(t9) {
  if (t9 === null)
    return true;
  var e, i, r, n, o, s = t9;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1) {
    if (r = s[e], ax.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
      return false;
    o[e] = [n[0], r[n[0]]];
  }
  return true;
}
function hx(t9) {
  if (t9 === null)
    return [];
  var e, i, r, n, o, s = t9;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1)
    r = s[e], n = Object.keys(r), o[e] = [n[0], r[n[0]]];
  return o;
}
var cx = new ot("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: lx,
  construct: hx
});
var ux = Object.prototype.hasOwnProperty;
function fx(t9) {
  if (t9 === null)
    return true;
  var e, i = t9;
  for (e in i)
    if (ux.call(i, e) && i[e] !== null)
      return false;
  return true;
}
function dx(t9) {
  return t9 !== null ? t9 : {};
}
var px = new ot("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: fx,
  construct: dx
});
var gx = jC.extend({
  implicit: [
    VC,
    KC
  ],
  explicit: [
    ex,
    sx,
    cx,
    px
  ]
});
var re = Object.prototype.hasOwnProperty;
var sr = 1;
var Wl = 2;
var Hl = 3;
var ar = 4;
var Jr = 1;
var mx = 2;
var ms = 3;
var _x = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var yx = /[\x85\u2028\u2029]/;
var Cx = /[,\[\]\{\}]/;
var jl = /^(?:!|!!|![a-z\-]+!)$/i;
var Ul = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _s(t9) {
  return Object.prototype.toString.call(t9);
}
function Mt(t9) {
  return t9 === 10 || t9 === 13;
}
function fe(t9) {
  return t9 === 9 || t9 === 32;
}
function dt(t9) {
  return t9 === 9 || t9 === 32 || t9 === 10 || t9 === 13;
}
function we(t9) {
  return t9 === 44 || t9 === 91 || t9 === 93 || t9 === 123 || t9 === 125;
}
function xx(t9) {
  var e;
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : (e = t9 | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function bx(t9) {
  return t9 === 120 ? 2 : t9 === 117 ? 4 : t9 === 85 ? 8 : 0;
}
function Tx(t9) {
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : -1;
}
function ys(t9) {
  return t9 === 48 ? "\0" : t9 === 97 ? "\x07" : t9 === 98 ? "\b" : t9 === 116 || t9 === 9 ? "	" : t9 === 110 ? `
` : t9 === 118 ? "\v" : t9 === 102 ? "\f" : t9 === 114 ? "\r" : t9 === 101 ? "\x1B" : t9 === 32 ? " " : t9 === 34 ? '"' : t9 === 47 ? "/" : t9 === 92 ? "\\" : t9 === 78 ? "" : t9 === 95 ? " " : t9 === 76 ? "\u2028" : t9 === 80 ? "\u2029" : "";
}
function Sx(t9) {
  return t9 <= 65535 ? String.fromCharCode(t9) : String.fromCharCode(
    (t9 - 65536 >> 10) + 55296,
    (t9 - 65536 & 1023) + 56320
  );
}
var Yl = new Array(256);
var Gl = new Array(256);
for (ke = 0; ke < 256; ke++)
  Yl[ke] = ys(ke) ? 1 : 0, Gl[ke] = ys(ke);
var ke;
function vx(t9, e) {
  this.input = t9, this.filename = e.filename || null, this.schema = e.schema || gx, this.onWarning = e.onWarning || null, this.legacy = e.legacy || false, this.json = e.json || false, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t9.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Vl(t9, e) {
  var i = {
    name: t9.filename,
    buffer: t9.input.slice(0, -1),
    // omit trailing \0
    position: t9.position,
    line: t9.line,
    column: t9.position - t9.lineStart
  };
  return i.snippet = uC(i), new jt(e, i);
}
function L(t9, e) {
  throw Vl(t9, e);
}
function lr(t9, e) {
  t9.onWarning && t9.onWarning.call(null, Vl(t9, e));
}
var Cs = {
  YAML: function(e, i, r) {
    var n, o, s;
    e.version !== null && L(e, "duplication of %YAML directive"), r.length !== 1 && L(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && L(e, "ill-formed argument of the YAML directive"), o = parseInt(n[1], 10), s = parseInt(n[2], 10), o !== 1 && L(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, s !== 1 && s !== 2 && lr(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var n, o;
    r.length !== 2 && L(e, "TAG directive accepts exactly two arguments"), n = r[0], o = r[1], jl.test(n) || L(e, "ill-formed tag handle (first argument) of the TAG directive"), re.call(e.tagMap, n) && L(e, 'there is a previously declared suffix for "' + n + '" tag handle'), Ul.test(o) || L(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      L(e, "tag prefix is malformed: " + o);
    }
    e.tagMap[n] = o;
  }
};
function ee(t9, e, i, r) {
  var n, o, s, a;
  if (e < i) {
    if (a = t9.input.slice(e, i), r)
      for (n = 0, o = a.length; n < o; n += 1)
        s = a.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || L(t9, "expected valid JSON character");
    else
      _x.test(a) && L(t9, "the stream contains non-printable characters");
    t9.result += a;
  }
}
function xs(t9, e, i, r) {
  var n, o, s, a;
  for (at.isObject(i) || L(t9, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), s = 0, a = n.length; s < a; s += 1)
    o = n[s], re.call(e, o) || (e[o] = i[o], r[o] = true);
}
function Be(t9, e, i, r, n, o, s, a, l) {
  var h, c;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), h = 0, c = n.length; h < c; h += 1)
      Array.isArray(n[h]) && L(t9, "nested arrays are not supported inside keys"), typeof n == "object" && _s(n[h]) === "[object Object]" && (n[h] = "[object Object]");
  if (typeof n == "object" && _s(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (h = 0, c = o.length; h < c; h += 1)
        xs(t9, e, o[h], i);
    else
      xs(t9, e, o, i);
  else
    !t9.json && !re.call(i, n) && re.call(e, n) && (t9.line = s || t9.line, t9.lineStart = a || t9.lineStart, t9.position = l || t9.position, L(t9, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: o
    }) : e[n] = o, delete i[n];
  return e;
}
function Qn(t9) {
  var e;
  e = t9.input.charCodeAt(t9.position), e === 10 ? t9.position++ : e === 13 ? (t9.position++, t9.input.charCodeAt(t9.position) === 10 && t9.position++) : L(t9, "a line break is expected"), t9.line += 1, t9.lineStart = t9.position, t9.firstTabInLine = -1;
}
function J(t9, e, i) {
  for (var r = 0, n = t9.input.charCodeAt(t9.position); n !== 0; ) {
    for (; fe(n); )
      n === 9 && t9.firstTabInLine === -1 && (t9.firstTabInLine = t9.position), n = t9.input.charCodeAt(++t9.position);
    if (e && n === 35)
      do
        n = t9.input.charCodeAt(++t9.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Mt(n))
      for (Qn(t9), n = t9.input.charCodeAt(t9.position), r++, t9.lineIndent = 0; n === 32; )
        t9.lineIndent++, n = t9.input.charCodeAt(++t9.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t9.lineIndent < i && lr(t9, "deficient indentation"), r;
}
function Lr(t9) {
  var e = t9.position, i;
  return i = t9.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t9.input.charCodeAt(e + 1) && i === t9.input.charCodeAt(e + 2) && (e += 3, i = t9.input.charCodeAt(e), i === 0 || dt(i)));
}
function to(t9, e) {
  e === 1 ? t9.result += " " : e > 1 && (t9.result += at.repeat(`
`, e - 1));
}
function kx(t9, e, i) {
  var r, n, o, s, a, l, h, c, u = t9.kind, g = t9.result, p;
  if (p = t9.input.charCodeAt(t9.position), dt(p) || we(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = t9.input.charCodeAt(t9.position + 1), dt(n) || i && we(n)))
    return false;
  for (t9.kind = "scalar", t9.result = "", o = s = t9.position, a = false; p !== 0; ) {
    if (p === 58) {
      if (n = t9.input.charCodeAt(t9.position + 1), dt(n) || i && we(n))
        break;
    } else if (p === 35) {
      if (r = t9.input.charCodeAt(t9.position - 1), dt(r))
        break;
    } else {
      if (t9.position === t9.lineStart && Lr(t9) || i && we(p))
        break;
      if (Mt(p))
        if (l = t9.line, h = t9.lineStart, c = t9.lineIndent, J(t9, false, -1), t9.lineIndent >= e) {
          a = true, p = t9.input.charCodeAt(t9.position);
          continue;
        } else {
          t9.position = s, t9.line = l, t9.lineStart = h, t9.lineIndent = c;
          break;
        }
    }
    a && (ee(t9, o, s, false), to(t9, t9.line - l), o = s = t9.position, a = false), fe(p) || (s = t9.position + 1), p = t9.input.charCodeAt(++t9.position);
  }
  return ee(t9, o, s, false), t9.result ? true : (t9.kind = u, t9.result = g, false);
}
function wx(t9, e) {
  var i, r, n;
  if (i = t9.input.charCodeAt(t9.position), i !== 39)
    return false;
  for (t9.kind = "scalar", t9.result = "", t9.position++, r = n = t9.position; (i = t9.input.charCodeAt(t9.position)) !== 0; )
    if (i === 39)
      if (ee(t9, r, t9.position, true), i = t9.input.charCodeAt(++t9.position), i === 39)
        r = t9.position, t9.position++, n = t9.position;
      else
        return true;
    else
      Mt(i) ? (ee(t9, r, n, true), to(t9, J(t9, false, e)), r = n = t9.position) : t9.position === t9.lineStart && Lr(t9) ? L(t9, "unexpected end of the document within a single quoted scalar") : (t9.position++, n = t9.position);
  L(t9, "unexpected end of the stream within a single quoted scalar");
}
function Bx(t9, e) {
  var i, r, n, o, s, a;
  if (a = t9.input.charCodeAt(t9.position), a !== 34)
    return false;
  for (t9.kind = "scalar", t9.result = "", t9.position++, i = r = t9.position; (a = t9.input.charCodeAt(t9.position)) !== 0; ) {
    if (a === 34)
      return ee(t9, i, t9.position, true), t9.position++, true;
    if (a === 92) {
      if (ee(t9, i, t9.position, true), a = t9.input.charCodeAt(++t9.position), Mt(a))
        J(t9, false, e);
      else if (a < 256 && Yl[a])
        t9.result += Gl[a], t9.position++;
      else if ((s = bx(a)) > 0) {
        for (n = s, o = 0; n > 0; n--)
          a = t9.input.charCodeAt(++t9.position), (s = xx(a)) >= 0 ? o = (o << 4) + s : L(t9, "expected hexadecimal character");
        t9.result += Sx(o), t9.position++;
      } else
        L(t9, "unknown escape sequence");
      i = r = t9.position;
    } else
      Mt(a) ? (ee(t9, i, r, true), to(t9, J(t9, false, e)), i = r = t9.position) : t9.position === t9.lineStart && Lr(t9) ? L(t9, "unexpected end of the document within a double quoted scalar") : (t9.position++, r = t9.position);
  }
  L(t9, "unexpected end of the stream within a double quoted scalar");
}
function Fx(t9, e) {
  var i = true, r, n, o, s = t9.tag, a, l = t9.anchor, h, c, u, g, p, _ = /* @__PURE__ */ Object.create(null), v, O, P, S;
  if (S = t9.input.charCodeAt(t9.position), S === 91)
    c = 93, p = false, a = [];
  else if (S === 123)
    c = 125, p = true, a = {};
  else
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = a), S = t9.input.charCodeAt(++t9.position); S !== 0; ) {
    if (J(t9, true, e), S = t9.input.charCodeAt(t9.position), S === c)
      return t9.position++, t9.tag = s, t9.anchor = l, t9.kind = p ? "mapping" : "sequence", t9.result = a, true;
    i ? S === 44 && L(t9, "expected the node content, but found ','") : L(t9, "missed comma between flow collection entries"), O = v = P = null, u = g = false, S === 63 && (h = t9.input.charCodeAt(t9.position + 1), dt(h) && (u = g = true, t9.position++, J(t9, true, e))), r = t9.line, n = t9.lineStart, o = t9.position, $e(t9, e, sr, false, true), O = t9.tag, v = t9.result, J(t9, true, e), S = t9.input.charCodeAt(t9.position), (g || t9.line === r) && S === 58 && (u = true, S = t9.input.charCodeAt(++t9.position), J(t9, true, e), $e(t9, e, sr, false, true), P = t9.result), p ? Be(t9, a, _, O, v, P, r, n, o) : u ? a.push(Be(t9, null, _, O, v, P, r, n, o)) : a.push(v), J(t9, true, e), S = t9.input.charCodeAt(t9.position), S === 44 ? (i = true, S = t9.input.charCodeAt(++t9.position)) : i = false;
  }
  L(t9, "unexpected end of the stream within a flow collection");
}
function Lx(t9, e) {
  var i, r, n = Jr, o = false, s = false, a = e, l = 0, h = false, c, u;
  if (u = t9.input.charCodeAt(t9.position), u === 124)
    r = false;
  else if (u === 62)
    r = true;
  else
    return false;
  for (t9.kind = "scalar", t9.result = ""; u !== 0; )
    if (u = t9.input.charCodeAt(++t9.position), u === 43 || u === 45)
      Jr === n ? n = u === 43 ? ms : mx : L(t9, "repeat of a chomping mode identifier");
    else if ((c = Tx(u)) >= 0)
      c === 0 ? L(t9, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? L(t9, "repeat of an indentation width identifier") : (a = e + c - 1, s = true);
    else
      break;
  if (fe(u)) {
    do
      u = t9.input.charCodeAt(++t9.position);
    while (fe(u));
    if (u === 35)
      do
        u = t9.input.charCodeAt(++t9.position);
      while (!Mt(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Qn(t9), t9.lineIndent = 0, u = t9.input.charCodeAt(t9.position); (!s || t9.lineIndent < a) && u === 32; )
      t9.lineIndent++, u = t9.input.charCodeAt(++t9.position);
    if (!s && t9.lineIndent > a && (a = t9.lineIndent), Mt(u)) {
      l++;
      continue;
    }
    if (t9.lineIndent < a) {
      n === ms ? t9.result += at.repeat(`
`, o ? 1 + l : l) : n === Jr && o && (t9.result += `
`);
      break;
    }
    for (r ? fe(u) ? (h = true, t9.result += at.repeat(`
`, o ? 1 + l : l)) : h ? (h = false, t9.result += at.repeat(`
`, l + 1)) : l === 0 ? o && (t9.result += " ") : t9.result += at.repeat(`
`, l) : t9.result += at.repeat(`
`, o ? 1 + l : l), o = true, s = true, l = 0, i = t9.position; !Mt(u) && u !== 0; )
      u = t9.input.charCodeAt(++t9.position);
    ee(t9, i, t9.position, false);
  }
  return true;
}
function bs(t9, e) {
  var i, r = t9.tag, n = t9.anchor, o = [], s, a = false, l;
  if (t9.firstTabInLine !== -1)
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = o), l = t9.input.charCodeAt(t9.position); l !== 0 && (t9.firstTabInLine !== -1 && (t9.position = t9.firstTabInLine, L(t9, "tab characters must not be used in indentation")), !(l !== 45 || (s = t9.input.charCodeAt(t9.position + 1), !dt(s)))); ) {
    if (a = true, t9.position++, J(t9, true, -1) && t9.lineIndent <= e) {
      o.push(null), l = t9.input.charCodeAt(t9.position);
      continue;
    }
    if (i = t9.line, $e(t9, e, Hl, false, true), o.push(t9.result), J(t9, true, -1), l = t9.input.charCodeAt(t9.position), (t9.line === i || t9.lineIndent > e) && l !== 0)
      L(t9, "bad indentation of a sequence entry");
    else if (t9.lineIndent < e)
      break;
  }
  return a ? (t9.tag = r, t9.anchor = n, t9.kind = "sequence", t9.result = o, true) : false;
}
function Ax(t9, e, i) {
  var r, n, o, s, a, l, h = t9.tag, c = t9.anchor, u = {}, g = /* @__PURE__ */ Object.create(null), p = null, _ = null, v = null, O = false, P = false, S;
  if (t9.firstTabInLine !== -1)
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = u), S = t9.input.charCodeAt(t9.position); S !== 0; ) {
    if (!O && t9.firstTabInLine !== -1 && (t9.position = t9.firstTabInLine, L(t9, "tab characters must not be used in indentation")), r = t9.input.charCodeAt(t9.position + 1), o = t9.line, (S === 63 || S === 58) && dt(r))
      S === 63 ? (O && (Be(t9, u, g, p, _, null, s, a, l), p = _ = v = null), P = true, O = true, n = true) : O ? (O = false, n = true) : L(t9, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t9.position += 1, S = r;
    else {
      if (s = t9.line, a = t9.lineStart, l = t9.position, !$e(t9, i, Wl, false, true))
        break;
      if (t9.line === o) {
        for (S = t9.input.charCodeAt(t9.position); fe(S); )
          S = t9.input.charCodeAt(++t9.position);
        if (S === 58)
          S = t9.input.charCodeAt(++t9.position), dt(S) || L(t9, "a whitespace character is expected after the key-value separator within a block mapping"), O && (Be(t9, u, g, p, _, null, s, a, l), p = _ = v = null), P = true, O = false, n = false, p = t9.tag, _ = t9.result;
        else if (P)
          L(t9, "can not read an implicit mapping pair; a colon is missed");
        else
          return t9.tag = h, t9.anchor = c, true;
      } else if (P)
        L(t9, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t9.tag = h, t9.anchor = c, true;
    }
    if ((t9.line === o || t9.lineIndent > e) && (O && (s = t9.line, a = t9.lineStart, l = t9.position), $e(t9, e, ar, true, n) && (O ? _ = t9.result : v = t9.result), O || (Be(t9, u, g, p, _, v, s, a, l), p = _ = v = null), J(t9, true, -1), S = t9.input.charCodeAt(t9.position)), (t9.line === o || t9.lineIndent > e) && S !== 0)
      L(t9, "bad indentation of a mapping entry");
    else if (t9.lineIndent < e)
      break;
  }
  return O && Be(t9, u, g, p, _, null, s, a, l), P && (t9.tag = h, t9.anchor = c, t9.kind = "mapping", t9.result = u), P;
}
function Ex(t9) {
  var e, i = false, r = false, n, o, s;
  if (s = t9.input.charCodeAt(t9.position), s !== 33)
    return false;
  if (t9.tag !== null && L(t9, "duplication of a tag property"), s = t9.input.charCodeAt(++t9.position), s === 60 ? (i = true, s = t9.input.charCodeAt(++t9.position)) : s === 33 ? (r = true, n = "!!", s = t9.input.charCodeAt(++t9.position)) : n = "!", e = t9.position, i) {
    do
      s = t9.input.charCodeAt(++t9.position);
    while (s !== 0 && s !== 62);
    t9.position < t9.length ? (o = t9.input.slice(e, t9.position), s = t9.input.charCodeAt(++t9.position)) : L(t9, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !dt(s); )
      s === 33 && (r ? L(t9, "tag suffix cannot contain exclamation marks") : (n = t9.input.slice(e - 1, t9.position + 1), jl.test(n) || L(t9, "named tag handle cannot contain such characters"), r = true, e = t9.position + 1)), s = t9.input.charCodeAt(++t9.position);
    o = t9.input.slice(e, t9.position), Cx.test(o) && L(t9, "tag suffix cannot contain flow indicator characters");
  }
  o && !Ul.test(o) && L(t9, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    L(t9, "tag name is malformed: " + o);
  }
  return i ? t9.tag = o : re.call(t9.tagMap, n) ? t9.tag = t9.tagMap[n] + o : n === "!" ? t9.tag = "!" + o : n === "!!" ? t9.tag = "tag:yaml.org,2002:" + o : L(t9, 'undeclared tag handle "' + n + '"'), true;
}
function Ox(t9) {
  var e, i;
  if (i = t9.input.charCodeAt(t9.position), i !== 38)
    return false;
  for (t9.anchor !== null && L(t9, "duplication of an anchor property"), i = t9.input.charCodeAt(++t9.position), e = t9.position; i !== 0 && !dt(i) && !we(i); )
    i = t9.input.charCodeAt(++t9.position);
  return t9.position === e && L(t9, "name of an anchor node must contain at least one character"), t9.anchor = t9.input.slice(e, t9.position), true;
}
function Mx(t9) {
  var e, i, r;
  if (r = t9.input.charCodeAt(t9.position), r !== 42)
    return false;
  for (r = t9.input.charCodeAt(++t9.position), e = t9.position; r !== 0 && !dt(r) && !we(r); )
    r = t9.input.charCodeAt(++t9.position);
  return t9.position === e && L(t9, "name of an alias node must contain at least one character"), i = t9.input.slice(e, t9.position), re.call(t9.anchorMap, i) || L(t9, 'unidentified alias "' + i + '"'), t9.result = t9.anchorMap[i], J(t9, true, -1), true;
}
function $e(t9, e, i, r, n) {
  var o, s, a, l = 1, h = false, c = false, u, g, p, _, v, O;
  if (t9.listener !== null && t9.listener("open", t9), t9.tag = null, t9.anchor = null, t9.kind = null, t9.result = null, o = s = a = ar === i || Hl === i, r && J(t9, true, -1) && (h = true, t9.lineIndent > e ? l = 1 : t9.lineIndent === e ? l = 0 : t9.lineIndent < e && (l = -1)), l === 1)
    for (; Ex(t9) || Ox(t9); )
      J(t9, true, -1) ? (h = true, a = o, t9.lineIndent > e ? l = 1 : t9.lineIndent === e ? l = 0 : t9.lineIndent < e && (l = -1)) : a = false;
  if (a && (a = h || n), (l === 1 || ar === i) && (sr === i || Wl === i ? v = e : v = e + 1, O = t9.position - t9.lineStart, l === 1 ? a && (bs(t9, O) || Ax(t9, O, v)) || Fx(t9, v) ? c = true : (s && Lx(t9, v) || wx(t9, v) || Bx(t9, v) ? c = true : Mx(t9) ? (c = true, (t9.tag !== null || t9.anchor !== null) && L(t9, "alias node should not have any properties")) : kx(t9, v, sr === i) && (c = true, t9.tag === null && (t9.tag = "?")), t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result)) : l === 0 && (c = a && bs(t9, O))), t9.tag === null)
    t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result);
  else if (t9.tag === "?") {
    for (t9.result !== null && t9.kind !== "scalar" && L(t9, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t9.kind + '"'), u = 0, g = t9.implicitTypes.length; u < g; u += 1)
      if (_ = t9.implicitTypes[u], _.resolve(t9.result)) {
        t9.result = _.construct(t9.result), t9.tag = _.tag, t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result);
        break;
      }
  } else if (t9.tag !== "!") {
    if (re.call(t9.typeMap[t9.kind || "fallback"], t9.tag))
      _ = t9.typeMap[t9.kind || "fallback"][t9.tag];
    else
      for (_ = null, p = t9.typeMap.multi[t9.kind || "fallback"], u = 0, g = p.length; u < g; u += 1)
        if (t9.tag.slice(0, p[u].tag.length) === p[u].tag) {
          _ = p[u];
          break;
        }
    _ || L(t9, "unknown tag !<" + t9.tag + ">"), t9.result !== null && _.kind !== t9.kind && L(t9, "unacceptable node kind for !<" + t9.tag + '> tag; it should be "' + _.kind + '", not "' + t9.kind + '"'), _.resolve(t9.result, t9.tag) ? (t9.result = _.construct(t9.result, t9.tag), t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result)) : L(t9, "cannot resolve a node with !<" + t9.tag + "> explicit tag");
  }
  return t9.listener !== null && t9.listener("close", t9), t9.tag !== null || t9.anchor !== null || c;
}
function $x(t9) {
  var e = t9.position, i, r, n, o = false, s;
  for (t9.version = null, t9.checkLineBreaks = t9.legacy, t9.tagMap = /* @__PURE__ */ Object.create(null), t9.anchorMap = /* @__PURE__ */ Object.create(null); (s = t9.input.charCodeAt(t9.position)) !== 0 && (J(t9, true, -1), s = t9.input.charCodeAt(t9.position), !(t9.lineIndent > 0 || s !== 37)); ) {
    for (o = true, s = t9.input.charCodeAt(++t9.position), i = t9.position; s !== 0 && !dt(s); )
      s = t9.input.charCodeAt(++t9.position);
    for (r = t9.input.slice(i, t9.position), n = [], r.length < 1 && L(t9, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; fe(s); )
        s = t9.input.charCodeAt(++t9.position);
      if (s === 35) {
        do
          s = t9.input.charCodeAt(++t9.position);
        while (s !== 0 && !Mt(s));
        break;
      }
      if (Mt(s))
        break;
      for (i = t9.position; s !== 0 && !dt(s); )
        s = t9.input.charCodeAt(++t9.position);
      n.push(t9.input.slice(i, t9.position));
    }
    s !== 0 && Qn(t9), re.call(Cs, r) ? Cs[r](t9, r, n) : lr(t9, 'unknown document directive "' + r + '"');
  }
  if (J(t9, true, -1), t9.lineIndent === 0 && t9.input.charCodeAt(t9.position) === 45 && t9.input.charCodeAt(t9.position + 1) === 45 && t9.input.charCodeAt(t9.position + 2) === 45 ? (t9.position += 3, J(t9, true, -1)) : o && L(t9, "directives end mark is expected"), $e(t9, t9.lineIndent - 1, ar, false, true), J(t9, true, -1), t9.checkLineBreaks && yx.test(t9.input.slice(e, t9.position)) && lr(t9, "non-ASCII line breaks are interpreted as content"), t9.documents.push(t9.result), t9.position === t9.lineStart && Lr(t9)) {
    t9.input.charCodeAt(t9.position) === 46 && (t9.position += 3, J(t9, true, -1));
    return;
  }
  if (t9.position < t9.length - 1)
    L(t9, "end of the stream or a document separator is expected");
  else
    return;
}
function Xl(t9, e) {
  t9 = String(t9), e = e || {}, t9.length !== 0 && (t9.charCodeAt(t9.length - 1) !== 10 && t9.charCodeAt(t9.length - 1) !== 13 && (t9 += `
`), t9.charCodeAt(0) === 65279 && (t9 = t9.slice(1)));
  var i = new vx(t9, e), r = t9.indexOf("\0");
  for (r !== -1 && (i.position = r, L(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    $x(i);
  return i.documents;
}
function Ix(t9, e, i) {
  e !== null && typeof e == "object" && typeof i > "u" && (i = e, e = null);
  var r = Xl(t9, i);
  if (typeof e != "function")
    return r;
  for (var n = 0, o = r.length; n < o; n += 1)
    e(r[n]);
}
function Dx(t9, e) {
  var i = Xl(t9, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new jt("expected a single document in the stream, but found more");
  }
}
var Nx = Ix;
var Rx = Dx;
var Px = {
  loadAll: Nx,
  load: Rx
};
var qx = Pl;
var zx = Px.load;
function Kl(t9, e, i) {
  var o, s;
  const r = t9.match(La);
  if (!r)
    return t9;
  const n = zx(r[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: qx
  });
  return n != null && n.title && ((o = e.setDiagramTitle) == null || o.call(e, n.title.toString())), n != null && n.displayMode && ((s = e.setDisplayMode) == null || s.call(e, n.displayMode.toString())), n != null && n.config && (i == null || i(n.config)), t9.slice(r[0].length);
}
var Wx = (t9) => t9.trimStart().replace(/^\s*%%(?!{)[^\n]+\n?/gm, "");
var Zl = class {
  constructor(e) {
    this.text = e, this.type = "graph", this.text += `
`;
    const i = Ft();
    try {
      this.type = Cr(e, i);
    } catch (o) {
      this.type = "error", this.detectError = o;
    }
    const r = Kn(this.type);
    w.debug("Type " + this.type), this.db = r.db, this.renderer = r.renderer, this.parser = r.parser;
    const n = this.parser.parse.bind(this.parser);
    this.parser.parse = (o) => n(Wx(Kl(o, this.db, ir))), this.parser.parser.yy = this.db, this.init = r.init, this.parse();
  }
  parse() {
    var e, i, r;
    if (this.detectError)
      throw this.detectError;
    (i = (e = this.db).clear) == null || i.call(e), (r = this.init) == null || r.call(this, Ft()), this.parser.parse(this.text);
  }
  async render(e, i) {
    await this.renderer.draw(this.text, e, i, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
};
var eo = async (t9) => {
  const e = Cr(t9, Ft());
  try {
    Kn(e);
  } catch {
    const r = Tp(e);
    if (!r)
      throw new Aa(`Diagram ${e} not found.`);
    const { id: n, diagram: o } = await r();
    or(n, o);
  }
  return new Zl(t9);
};
var Cn = [];
var h1 = (t9) => {
  Cn.push(t9);
};
var Hx = () => {
  Cn.forEach((t9) => {
    t9();
  }), Cn = [];
};
var jx = Da(Object.keys, Object);
var Ux = jx;
var Yx = Object.prototype;
var Gx = Yx.hasOwnProperty;
function Vx(t9) {
  if (!Sr(t9))
    return Ux(t9);
  var e = [];
  for (var i in Object(t9))
    Gx.call(t9, i) && i != "constructor" && e.push(i);
  return e;
}
var Xx = ye(Dt, "DataView");
var xn = Xx;
var Kx = ye(Dt, "Promise");
var bn = Kx;
var Zx = ye(Dt, "Set");
var Tn = Zx;
var Jx = ye(Dt, "WeakMap");
var Sn = Jx;
var Ts = "[object Map]";
var Qx = "[object Object]";
var Ss = "[object Promise]";
var vs = "[object Set]";
var ks = "[object WeakMap]";
var ws = "[object DataView]";
var tb = _e(xn);
var eb = _e(ii);
var ib = _e(bn);
var rb = _e(Tn);
var nb = _e(Sn);
var le = Ie;
(xn && le(new xn(new ArrayBuffer(1))) != ws || ii && le(new ii()) != Ts || bn && le(bn.resolve()) != Ss || Tn && le(new Tn()) != vs || Sn && le(new Sn()) != ks) && (le = function(t9) {
  var e = Ie(t9), i = e == Qx ? t9.constructor : void 0, r = i ? _e(i) : "";
  if (r)
    switch (r) {
      case tb:
        return ws;
      case eb:
        return Ts;
      case ib:
        return Ss;
      case rb:
        return vs;
      case nb:
        return ks;
    }
  return e;
});
var ob = le;
var sb = "[object Map]";
var ab = "[object Set]";
var lb = Object.prototype;
var hb = lb.hasOwnProperty;
function Qr(t9) {
  if (t9 == null)
    return true;
  if (vr(t9) && (Qi(t9) || typeof t9 == "string" || typeof t9.splice == "function" || zn(t9) || Wn(t9) || Ji(t9)))
    return !t9.length;
  var e = ob(t9);
  if (e == sb || e == ab)
    return !t9.size;
  if (Sr(t9))
    return !Vx(t9).length;
  for (var i in t9)
    if (hb.call(t9, i))
      return false;
  return true;
}
var cb = "graphics-document document";
function ub(t9, e) {
  t9.attr("role", cb), e !== "" && t9.attr("aria-roledescription", e);
}
function fb(t9, e, i, r) {
  if (t9.insert !== void 0) {
    if (i) {
      const n = `chart-desc-${r}`;
      t9.attr("aria-describedby", n), t9.insert("desc", ":first-child").attr("id", n).text(i);
    }
    if (e) {
      const n = `chart-title-${r}`;
      t9.attr("aria-labelledby", n), t9.insert("title", ":first-child").attr("id", n).text(e);
    }
  }
}
var Jl = [
  "graph",
  "flowchart",
  "flowchart-v2",
  "flowchart-elk",
  "stateDiagram",
  "stateDiagram-v2"
];
var db = 5e4;
var pb = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var gb = "sandbox";
var mb = "loose";
var _b = "http://www.w3.org/2000/svg";
var yb = "http://www.w3.org/1999/xlink";
var Cb = "http://www.w3.org/1999/xhtml";
var xb = "100%";
var bb = "100%";
var Tb = "border:0;margin:0;";
var Sb = "margin:0";
var vb = "allow-top-navigation-by-user-activation allow-popups";
var kb = 'The "iframe" tag is not supported by your browser.';
var wb = ["foreignobject"];
var Bb = ["dominant-baseline"];
async function Fb(t9, e) {
  Zn();
  try {
    await eo(t9);
  } catch (i) {
    if (e != null && e.suppressErrors)
      return false;
    throw i;
  }
  return true;
}
var Lb = function(t9) {
  let e = t9;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
};
var Ab = function(t9) {
  return t9.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
var Bs = (t9, e, i = []) => `
.${t9} ${e} { ${i.join(" !important; ")} !important; }`;
var Eb = (t9, e, i = {}) => {
  var n;
  let r = "";
  if (t9.themeCSS !== void 0 && (r += `
${t9.themeCSS}`), t9.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${t9.fontFamily}}`), t9.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${t9.altFontFamily}}`), !Qr(i) && Jl.includes(e)) {
    const l = t9.htmlLabels || ((n = t9.flowchart) == null ? void 0 : n.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const h in i) {
      const c = i[h];
      Qr(c.styles) || l.forEach((u) => {
        r += Bs(c.id, u, c.styles);
      }), Qr(c.textStyles) || (r += Bs(c.id, "tspan", c.textStyles));
    }
  }
  return r;
};
var Ob = (t9, e, i, r) => {
  const n = Eb(t9, e, i), o = Wy(e, n, t9.themeVariables);
  return _n(Qm(`${r}{${o}}`), e_);
};
var Mb = (t9 = "", e, i) => {
  let r = t9;
  return !i && !e && (r = r.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), r = Ab(r), r = r.replace(/<br>/g, "<br/>"), r;
};
var $b = (t9 = "", e) => {
  var n, o;
  const i = (o = (n = e == null ? void 0 : e.viewBox) == null ? void 0 : n.baseVal) != null && o.height ? e.viewBox.baseVal.height + "px" : bb, r = btoa('<body style="' + Sb + '">' + t9 + "</body>");
  return `<iframe style="width:${xb};height:${i};${Tb}" src="data:text/html;base64,${r}" sandbox="${vb}">
  ${kb}
</iframe>`;
};
var Fs = (t9, e, i, r, n) => {
  const o = t9.append("div");
  o.attr("id", i), r && o.attr("style", r);
  const s = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", _b);
  return n && s.attr("xmlns:xlink", n), s.append("g"), t9;
};
function Ls(t9, e) {
  return t9.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var Ib = (t9, e, i, r) => {
  var n, o, s;
  (n = t9.getElementById(e)) == null || n.remove(), (o = t9.getElementById(i)) == null || o.remove(), (s = t9.getElementById(r)) == null || s.remove();
};
var Db = async function(t9, e, i) {
  var E, T, x, M;
  Zn(), rr(), Kl(e, {}, ir);
  const r = Di.detectInit(e);
  r && ir(r);
  const n = Ft();
  w.debug(n), e.length > ((n == null ? void 0 : n.maxTextSize) ?? db) && (e = pb), e = e.replace(/\r\n?/g, `
`), e = e.replace(
    /<(\w+)([^>]*)>/g,
    (y, D, k) => "<" + D + k.replace(/="([^"]*)"/g, "='$1'") + ">"
  );
  const o = "#" + t9, s = "i" + t9, a = "#" + s, l = "d" + t9, h = "#" + l;
  let c = Ct("body");
  const u = n.securityLevel === gb, g = n.securityLevel === mb, p = n.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), u) {
      const y = Ls(Ct(i), s);
      c = Ct(y.nodes()[0].contentDocument.body), c.node().style.margin = 0;
    } else
      c = Ct(i);
    Fs(c, t9, l, `font-family: ${p}`, yb);
  } else {
    if (Ib(document, t9, l, s), u) {
      const y = Ls(Ct("body"), s);
      c = Ct(y.nodes()[0].contentDocument.body), c.node().style.margin = 0;
    } else
      c = Ct("body");
    Fs(c, t9, l);
  }
  e = Lb(e);
  let _, v;
  try {
    _ = await eo(e);
  } catch (y) {
    _ = new Zl("error"), v = y;
  }
  const O = c.select(h).node(), P = _.type, S = O.firstChild, z = S.firstChild, Q = Jl.includes(P) ? _.renderer.getClasses(e, _) : {}, X = Ob(n, P, Q, o), G = document.createElement("style");
  G.innerHTML = X, S.insertBefore(G, z);
  try {
    await _.renderer.draw(e, t9, fs, _);
  } catch (y) {
    throw by.draw(e, t9, fs), y;
  }
  const W = c.select(`${h} svg`), Vt = (T = (E = _.db).getAccTitle) == null ? void 0 : T.call(E), K = (M = (x = _.db).getAccDescription) == null ? void 0 : M.call(x);
  Rb(P, W, Vt, K), c.select(`[id="${t9}"]`).selectAll("foreignobject > *").attr("xmlns", Cb);
  let I = c.select(h).node().innerHTML;
  if (w.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), I = Mb(I, u, Ta(n.arrowMarkerAbsolute)), u) {
    const y = c.select(h + " svg").node();
    I = $b(I, y);
  } else
    g || (I = Xi.sanitize(I, {
      ADD_TAGS: wb,
      ADD_ATTR: Bb
    }));
  if (Hx(), v)
    throw v;
  const At = Ct(u ? a : h).node();
  return At && "remove" in At && At.remove(), {
    svg: I,
    bindFunctions: _.db.bindFunctions
  };
};
function Nb(t9 = {}) {
  var i;
  t9 != null && t9.fontFamily && !((i = t9.themeVariables) != null && i.fontFamily) && (t9.themeVariables || (t9.themeVariables = {}), t9.themeVariables.fontFamily = t9.fontFamily), r_(t9), t9 != null && t9.theme && t9.theme in Ut ? t9.themeVariables = Ut[t9.theme].getThemeVariables(
    t9.themeVariables
  ) : t9 && (t9.themeVariables = Ut.default.getThemeVariables(t9.themeVariables));
  const e = typeof t9 == "object" ? i_(t9) : rl();
  vn(e.logLevel), Zn();
}
function Rb(t9, e, i, r) {
  ub(e, t9), fb(e, i, r, e.attr("id"));
}
var ge = Object.freeze({
  render: Db,
  parse: Fb,
  parseDirective: Il,
  getDiagramFromText: eo,
  initialize: Nb,
  getConfig: Ft,
  setConfig: o_,
  getSiteConfig: rl,
  updateSiteConfig: n_,
  reset: () => {
    rr();
  },
  globalReset: () => {
    rr(si);
  },
  defaultConfig: si
});
vn(Ft().logLevel);
rr(Ft());
var Pb = async () => {
  w.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(Ee).map(async ([i, { detector: r, loader: n }]) => {
      if (n)
        try {
          Kn(i);
        } catch {
          try {
            const { diagram: s, id: a } = await n();
            or(a, s, r);
          } catch (s) {
            throw w.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete Ee[i], s;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    w.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      w.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
};
var qb = (t9, e, i) => {
  w.warn(t9), Xa(t9) ? (i && i(t9.str, t9.hash), e.push({ ...t9, message: t9.str, error: t9 })) : (i && i(t9), t9 instanceof Error && e.push({
    str: t9.message,
    message: t9.message,
    hash: t9.name,
    error: t9
  }));
};
var Ql = async function(t9 = {
  querySelector: ".mermaid"
}) {
  try {
    await zb(t9);
  } catch (e) {
    if (Xa(e) && w.error(e.str), xt.parseError && xt.parseError(e), !t9.suppressErrors)
      throw w.error("Use the suppressErrors option to suppress these errors"), e;
  }
};
var zb = async function({ postRenderCallback: t9, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = ge.getConfig();
  w.debug(`${t9 ? "" : "No "}Callback function found`);
  let n;
  if (i)
    n = i;
  else if (e)
    n = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  w.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && (w.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), ge.updateSiteConfig({ startOnLoad: r == null ? void 0 : r.startOnLoad }));
  const o = new Di.initIdGenerator(r.deterministicIds, r.deterministicIDSeed);
  let s;
  const a = [];
  for (const l of Array.from(n)) {
    w.info("Rendering diagram: " + l.id);
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const h = `mermaid-${o.next()}`;
    s = l.innerHTML, s = dh(Di.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const c = Di.detectInit(s);
    c && w.debug("Detected early reinit: ", c);
    try {
      const { svg: u, bindFunctions: g } = await rh(h, s, l);
      l.innerHTML = u, t9 && await t9(h), g && g(l);
    } catch (u) {
      qb(u, a, xt.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
};
var th = function(t9) {
  ge.initialize(t9);
};
var Wb = async function(t9, e, i) {
  w.warn("mermaid.init is deprecated. Please use run instead."), t9 && th(t9);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await Ql(r);
};
var Hb = async (t9, {
  lazyLoad: e = true
} = {}) => {
  Ea(...t9), e === false && await Pb();
};
var eh = function() {
  if (xt.startOnLoad) {
    const { startOnLoad: t9 } = ge.getConfig();
    t9 && xt.run().catch((e) => w.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", eh, false);
}
var jb = function(t9) {
  xt.parseError = t9;
};
var hr = [];
var tn = false;
var ih = async () => {
  if (!tn) {
    for (tn = true; hr.length > 0; ) {
      const t9 = hr.shift();
      if (t9)
        try {
          await t9();
        } catch (e) {
          w.error("Error executing queue", e);
        }
    }
    tn = false;
  }
};
var Ub = async (t9, e) => new Promise((i, r) => {
  const n = () => new Promise((o, s) => {
    ge.parse(t9, e).then(
      (a) => {
        o(a), i(a);
      },
      (a) => {
        var l;
        w.error("Error parsing", a), (l = xt.parseError) == null || l.call(xt, a), s(a), r(a);
      }
    );
  });
  hr.push(n), ih().catch(r);
});
var rh = (t9, e, i) => new Promise((r, n) => {
  const o = () => new Promise((s, a) => {
    ge.render(t9, e, i).then(
      (l) => {
        s(l), r(l);
      },
      (l) => {
        var h;
        w.error("Error parsing", l), (h = xt.parseError) == null || h.call(xt, l), a(l), n(l);
      }
    );
  });
  hr.push(o), ih().catch(n);
});
var xt = {
  startOnLoad: true,
  mermaidAPI: ge,
  parse: Ub,
  render: rh,
  init: Wb,
  run: Ql,
  registerExternalDiagrams: Hb,
  initialize: th,
  parseError: void 0,
  contentLoaded: eh,
  setParseErrorHandler: jb,
  detectType: Cr
};

export {
  dh,
  ph,
  gh,
  _h,
  w,
  Es,
  $h,
  js,
  mt,
  Ct,
  Fn,
  Us,
  hi,
  Je,
  _u,
  ft,
  Ln,
  Gb,
  Vs,
  Lo,
  Qt,
  vu,
  Vb,
  Xb,
  Kb,
  Zb,
  Jb,
  Qb,
  t1,
  Io,
  Mn,
  Do,
  e1,
  i1,
  r1,
  Wf,
  Uf,
  gr,
  ti,
  Ta,
  Dd,
  Rn,
  $,
  $t,
  Ge,
  ci,
  F,
  A,
  pp,
  xp,
  nt,
  Dt,
  Ki,
  Ie,
  me,
  Pn,
  xr,
  ne,
  ui,
  De,
  qn,
  $g,
  Dg,
  es,
  Rg,
  Pg,
  qg,
  Na,
  Ug,
  fi,
  Ji,
  Qi,
  Pa,
  vr,
  Jg,
  zn,
  l0,
  $0,
  ss,
  Wn,
  q0,
  z0,
  Ha,
  G0,
  ja,
  Ya,
  em,
  im,
  cm,
  um,
  fm,
  gm,
  mm,
  bm,
  Fm,
  Lm,
  Em,
  $m,
  Dm,
  er,
  jn,
  qm,
  Di,
  si,
  o_,
  Ft,
  my,
  Tl,
  Cy,
  Fl,
  Ll,
  Al,
  El,
  Ol,
  Ml,
  $l,
  jy,
  Il,
  Dl,
  Xy,
  h1,
  Vx,
  Tn,
  ob,
  Qr,
  Ab,
  ge,
  xt
};
/*! Bundled license information:

mermaid/dist/mermaid-d733041c.js:
  (*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE *)
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
  (*! Check if previously processed *)
  (*!
   * Wait for document loaded before starting the execution
   *)
*/
//# sourceMappingURL=chunk-RX2OIAPP.js.map
