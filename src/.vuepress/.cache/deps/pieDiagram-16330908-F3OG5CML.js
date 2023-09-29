import {
  h
} from "./chunk-G5CX3I3Y.js";
import {
  hn
} from "./chunk-6H5H5K4A.js";
import "./chunk-L7EG42PN.js";
import {
  t
} from "./chunk-7NR5DW5S.js";
import {
  E
} from "./chunk-PRAOQV5U.js";
import {
  $l,
  Al,
  El,
  Fl,
  Ft,
  Il,
  Ll,
  Ml,
  Ol,
  Tl,
  e1,
  jn,
  my,
  qm,
  ti,
  w,
  xp
} from "./chunk-RX2OIAPP.js";

// node_modules/.pnpm/mermaid@10.4.0/node_modules/mermaid/dist/pieDiagram-16330908.js
function wt(t2, c) {
  return c < t2 ? -1 : c > t2 ? 1 : c >= t2 ? 0 : NaN;
}
function At(t2) {
  return t2;
}
function Dt() {
  var t2 = At, c = wt, d = null, g = E(0), k = E(e1), b = E(0);
  function h2(r) {
    var u, p = (r = t(r)).length, I, x, D = 0, _ = new Array(p), o = new Array(p), $ = +g.apply(this, arguments), V = Math.min(e1, Math.max(-e1, k.apply(this, arguments) - $)), w2, P = Math.min(Math.abs(V) / p, b.apply(this, arguments)), N = P * (V < 0 ? -1 : 1), S;
    for (u = 0; u < p; ++u)
      (S = o[_[u] = u] = +t2(r[u], u, r)) > 0 && (D += S);
    for (c != null ? _.sort(function(A, m) {
      return c(o[A], o[m]);
    }) : d != null && _.sort(function(A, m) {
      return d(r[A], r[m]);
    }), u = 0, x = D ? (V - p * N) / D : 0; u < p; ++u, $ = w2)
      I = _[u], S = o[I], w2 = $ + (S > 0 ? S * x : 0) + N, o[I] = {
        data: r[I],
        index: u,
        value: S,
        startAngle: $,
        endAngle: w2,
        padAngle: P
      };
    return o;
  }
  return h2.value = function(r) {
    return arguments.length ? (t2 = typeof r == "function" ? r : E(+r), h2) : t2;
  }, h2.sortValues = function(r) {
    return arguments.length ? (c = r, d = null, h2) : c;
  }, h2.sort = function(r) {
    return arguments.length ? (d = r, c = null, h2) : d;
  }, h2.startAngle = function(r) {
    return arguments.length ? (g = typeof r == "function" ? r : E(+r), h2) : g;
  }, h2.endAngle = function(r) {
    return arguments.length ? (k = typeof r == "function" ? r : E(+r), h2) : k;
  }, h2.padAngle = function(r) {
    return arguments.length ? (b = typeof r == "function" ? r : E(+r), h2) : b;
  }, h2;
}
var K = function() {
  var t2 = function(m, e, n, s) {
    for (n = n || {}, s = m.length; s--; n[m[s]] = e)
      ;
    return n;
  }, c = [1, 4], d = [1, 5], g = [1, 6], k = [1, 7], b = [1, 9], h2 = [1, 11, 13, 15, 17, 19, 20, 26, 27, 28, 29], r = [2, 5], u = [1, 6, 11, 13, 15, 17, 19, 20, 26, 27, 28, 29], p = [26, 27, 28], I = [2, 8], x = [1, 18], D = [1, 19], _ = [1, 20], o = [1, 21], $ = [1, 22], V = [1, 23], w2 = [1, 28], P = [6, 26, 27, 28, 29], N = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, directive: 5, PIE: 6, document: 7, showData: 8, line: 9, statement: 10, txt: 11, value: 12, title: 13, title_value: 14, acc_title: 15, acc_title_value: 16, acc_descr: 17, acc_descr_value: 18, acc_descr_multiline_value: 19, section: 20, openDirective: 21, typeDirective: 22, closeDirective: 23, ":": 24, argDirective: 25, NEWLINE: 26, ";": 27, EOF: 28, open_directive: 29, type_directive: 30, arg_directive: 31, close_directive: 32, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "PIE", 8: "showData", 11: "txt", 12: "value", 13: "title", 14: "title_value", 15: "acc_title", 16: "acc_title_value", 17: "acc_descr", 18: "acc_descr_value", 19: "acc_descr_multiline_value", 20: "section", 24: ":", 26: "NEWLINE", 27: ";", 28: "EOF", 29: "open_directive", 30: "type_directive", 31: "arg_directive", 32: "close_directive" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [3, 3], [7, 0], [7, 2], [9, 2], [10, 0], [10, 2], [10, 2], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [5, 3], [5, 5], [4, 1], [4, 1], [4, 1], [21, 1], [22, 1], [25, 1], [23, 1]],
    performAction: function(e, n, s, a, l, i, T) {
      var f = i.length - 1;
      switch (l) {
        case 4:
          a.setShowData(true);
          break;
        case 7:
          this.$ = i[f - 1];
          break;
        case 9:
          a.addSection(i[f - 1], a.cleanupValue(i[f]));
          break;
        case 10:
          this.$ = i[f].trim(), a.setDiagramTitle(this.$);
          break;
        case 11:
          this.$ = i[f].trim(), a.setAccTitle(this.$);
          break;
        case 12:
        case 13:
          this.$ = i[f].trim(), a.setAccDescription(this.$);
          break;
        case 14:
          a.addSection(i[f].substr(8)), this.$ = i[f].substr(8);
          break;
        case 21:
          a.parseDirective("%%{", "open_directive");
          break;
        case 22:
          a.parseDirective(i[f], "type_directive");
          break;
        case 23:
          i[f] = i[f].trim().replace(/'/g, '"'), a.parseDirective(i[f], "arg_directive");
          break;
        case 24:
          a.parseDirective("}%%", "close_directive", "pie");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: c, 21: 8, 26: d, 27: g, 28: k, 29: b }, { 1: [3] }, { 3: 10, 4: 2, 5: 3, 6: c, 21: 8, 26: d, 27: g, 28: k, 29: b }, { 3: 11, 4: 2, 5: 3, 6: c, 21: 8, 26: d, 27: g, 28: k, 29: b }, t2(h2, r, { 7: 12, 8: [1, 13] }), t2(u, [2, 18]), t2(u, [2, 19]), t2(u, [2, 20]), { 22: 14, 30: [1, 15] }, { 30: [2, 21] }, { 1: [2, 1] }, { 1: [2, 2] }, t2(p, I, { 21: 8, 9: 16, 10: 17, 5: 24, 1: [2, 3], 11: x, 13: D, 15: _, 17: o, 19: $, 20: V, 29: b }), t2(h2, r, { 7: 25 }), { 23: 26, 24: [1, 27], 32: w2 }, t2([24, 32], [2, 22]), t2(h2, [2, 6]), { 4: 29, 26: d, 27: g, 28: k }, { 12: [1, 30] }, { 14: [1, 31] }, { 16: [1, 32] }, { 18: [1, 33] }, t2(p, [2, 13]), t2(p, [2, 14]), t2(p, [2, 15]), t2(p, I, { 21: 8, 9: 16, 10: 17, 5: 24, 1: [2, 4], 11: x, 13: D, 15: _, 17: o, 19: $, 20: V, 29: b }), t2(P, [2, 16]), { 25: 34, 31: [1, 35] }, t2(P, [2, 24]), t2(h2, [2, 7]), t2(p, [2, 9]), t2(p, [2, 10]), t2(p, [2, 11]), t2(p, [2, 12]), { 23: 36, 32: w2 }, { 32: [2, 23] }, t2(P, [2, 17])],
    defaultActions: { 9: [2, 21], 10: [2, 1], 11: [2, 2], 35: [2, 23] },
    parseError: function(e, n) {
      if (n.recoverable)
        this.trace(e);
      else {
        var s = new Error(e);
        throw s.hash = n, s;
      }
    },
    parse: function(e) {
      var n = this, s = [0], a = [], l = [null], i = [], T = this.table, f = "", R = 0, M = 0, B = 2, tt = 1, at = i.slice.call(arguments, 1), y = Object.create(this.lexer), F = { yy: {} };
      for (var Z in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Z) && (F.yy[Z] = this.yy[Z]);
      y.setInput(e, F.yy), F.yy.lexer = y, F.yy.parser = this, typeof y.yylloc > "u" && (y.yylloc = {});
      var X = y.yylloc;
      i.push(X);
      var lt = y.options && y.options.ranges;
      typeof F.yy.parseError == "function" ? this.parseError = F.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ct() {
        var O;
        return O = a.pop() || y.lex() || tt, typeof O != "number" && (O instanceof Array && (a = O, O = a.pop()), O = n.symbols_[O] || O), O;
      }
      for (var v, L, E2, q, j = {}, W, C, et, G; ; ) {
        if (L = s[s.length - 1], this.defaultActions[L] ? E2 = this.defaultActions[L] : ((v === null || typeof v > "u") && (v = ct()), E2 = T[L] && T[L][v]), typeof E2 > "u" || !E2.length || !E2[0]) {
          var H = "";
          G = [];
          for (W in T[L])
            this.terminals_[W] && W > B && G.push("'" + this.terminals_[W] + "'");
          y.showPosition ? H = "Parse error on line " + (R + 1) + `:
` + y.showPosition() + `
Expecting ` + G.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : H = "Parse error on line " + (R + 1) + ": Unexpected " + (v == tt ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), this.parseError(H, {
            text: y.match,
            token: this.terminals_[v] || v,
            line: y.yylineno,
            loc: X,
            expected: G
          });
        }
        if (E2[0] instanceof Array && E2.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + L + ", token: " + v);
        switch (E2[0]) {
          case 1:
            s.push(v), l.push(y.yytext), i.push(y.yylloc), s.push(E2[1]), v = null, M = y.yyleng, f = y.yytext, R = y.yylineno, X = y.yylloc;
            break;
          case 2:
            if (C = this.productions_[E2[1]][1], j.$ = l[l.length - C], j._$ = {
              first_line: i[i.length - (C || 1)].first_line,
              last_line: i[i.length - 1].last_line,
              first_column: i[i.length - (C || 1)].first_column,
              last_column: i[i.length - 1].last_column
            }, lt && (j._$.range = [
              i[i.length - (C || 1)].range[0],
              i[i.length - 1].range[1]
            ]), q = this.performAction.apply(j, [
              f,
              M,
              R,
              F.yy,
              E2[1],
              l,
              i
            ].concat(at)), typeof q < "u")
              return q;
            C && (s = s.slice(0, -1 * C * 2), l = l.slice(0, -1 * C), i = i.slice(0, -1 * C)), s.push(this.productions_[E2[1]][0]), l.push(j.$), i.push(j._$), et = T[s[s.length - 2]][s[s.length - 1]], s.push(et);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, S = function() {
    var m = {
      EOF: 1,
      parseError: function(n, s) {
        if (this.yy.parser)
          this.yy.parser.parseError(n, s);
        else
          throw new Error(n);
      },
      // resets the lexer, sets new input
      setInput: function(e, n) {
        return this.yy = n || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var e = this._input[0];
        this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
        var n = e.match(/(?:\r\n?|\n).*/g);
        return n ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
      },
      // unshifts one char (or a string) into the input
      unput: function(e) {
        var n = e.length, s = e.split(/(?:\r\n?|\n)/g);
        this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - n), this.offset -= n;
        var a = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), s.length - 1 && (this.yylineno -= s.length - 1);
        var l = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: s ? (s.length === a.length ? this.yylloc.first_column : 0) + a[a.length - s.length].length - s[0].length : this.yylloc.first_column - n
        }, this.options.ranges && (this.yylloc.range = [l[0], l[0] + this.yyleng - n]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(e) {
        this.unput(this.match.slice(e));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var e = this.matched.substr(0, this.matched.length - this.match.length);
        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var e = this.match;
        return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var e = this.pastInput(), n = new Array(e.length + 1).join("-");
        return e + this.upcomingInput() + `
` + n + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(e, n) {
        var s, a, l;
        if (this.options.backtrack_lexer && (l = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (l.yylloc.range = this.yylloc.range.slice(0))), a = e[0].match(/(?:\r\n?|\n).*/g), a && (this.yylineno += a.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
        }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(e[0].length), this.matched += e[0], s = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), s)
          return s;
        if (this._backtrack) {
          for (var i in l)
            this[i] = l[i];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var e, n, s, a;
        this._more || (this.yytext = "", this.match = "");
        for (var l = this._currentRules(), i = 0; i < l.length; i++)
          if (s = this._input.match(this.rules[l[i]]), s && (!n || s[0].length > n[0].length)) {
            if (n = s, a = i, this.options.backtrack_lexer) {
              if (e = this.test_match(s, l[i]), e !== false)
                return e;
              if (this._backtrack) {
                n = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return n ? (e = this.test_match(n, l[a]), e !== false ? e : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var n = this.next();
        return n || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(n) {
        this.conditionStack.push(n);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var n = this.conditionStack.length - 1;
        return n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(n) {
        return n = this.conditionStack.length - 1 - Math.abs(n || 0), n >= 0 ? this.conditionStack[n] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(n) {
        this.begin(n);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(n, s, a, l) {
        switch (a) {
          case 0:
            return this.begin("open_directive"), 29;
          case 1:
            return this.begin("type_directive"), 30;
          case 2:
            return this.popState(), this.begin("arg_directive"), 24;
          case 3:
            return this.popState(), this.popState(), 32;
          case 4:
            return 31;
          case 5:
            break;
          case 6:
            break;
          case 7:
            return 26;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return this.begin("title"), 13;
          case 11:
            return this.popState(), "title_value";
          case 12:
            return this.begin("acc_title"), 15;
          case 13:
            return this.popState(), "acc_title_value";
          case 14:
            return this.begin("acc_descr"), 17;
          case 15:
            return this.popState(), "acc_descr_value";
          case 16:
            this.begin("acc_descr_multiline");
            break;
          case 17:
            this.popState();
            break;
          case 18:
            return "acc_descr_multiline_value";
          case 19:
            this.begin("string");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return "txt";
          case 22:
            return 6;
          case 23:
            return 8;
          case 24:
            return "value";
          case 25:
            return 28;
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:[\s]+)/i, /^(?:title\b)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:pie\b)/i, /^(?:showData\b)/i, /^(?::[\s]*[\d]+(?:\.[\d]+)?)/i, /^(?:$)/i],
      conditions: { acc_descr_multiline: { rules: [17, 18], inclusive: false }, acc_descr: { rules: [15], inclusive: false }, acc_title: { rules: [13], inclusive: false }, close_directive: { rules: [], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, open_directive: { rules: [1], inclusive: false }, title: { rules: [11], inclusive: false }, string: { rules: [20, 21], inclusive: false }, INITIAL: { rules: [0, 5, 6, 7, 8, 9, 10, 12, 14, 16, 19, 22, 23, 24, 25], inclusive: true } }
    };
    return m;
  }();
  N.lexer = S;
  function A() {
    this.yy = {};
  }
  return A.prototype = N, N.Parser = A, new A();
}();
K.parser = K;
var $t = K;
var rt = xp.pie;
var U = {
  sections: {},
  showData: false,
  config: rt
};
var Y = U.sections;
var Q = U.showData;
var Tt = structuredClone(rt);
var It = () => structuredClone(Tt);
var Vt = (t2, c, d) => {
  Il(void 0, t2, c, d);
};
var Ct = () => {
  Y = structuredClone(U.sections), Q = U.showData, Fl();
};
var Ot = (t2, c) => {
  t2 = ti(t2, Ft()), Y[t2] === void 0 && (Y[t2] = c, w.debug(`added new section: ${t2}, with value: ${c}`));
};
var Pt = () => Y;
var Nt = (t2) => (t2.substring(0, 1) === ":" && (t2 = t2.substring(1).trim()), Number(t2.trim()));
var Ft2 = (t2) => {
  Q = t2;
};
var Lt = () => Q;
var zt = {
  getConfig: It,
  parseDirective: Vt,
  clear: Ct,
  setDiagramTitle: Ml,
  getDiagramTitle: $l,
  setAccTitle: Ll,
  getAccTitle: Al,
  setAccDescription: El,
  getAccDescription: Ol,
  addSection: Ot,
  getSections: Pt,
  cleanupValue: Nt,
  setShowData: Ft2,
  getShowData: Lt
};
var Rt = (t2) => `
  .pieCircle{
    stroke: ${t2.pieStrokeColor};
    stroke-width : ${t2.pieStrokeWidth};
    opacity : ${t2.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t2.pieOuterStrokeColor};
    stroke-width: ${t2.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t2.pieTitleTextSize};
    fill: ${t2.pieTitleTextColor};
    font-family: ${t2.fontFamily};
  }
  .slice {
    font-family: ${t2.fontFamily};
    fill: ${t2.pieSectionTextColor};
    font-size:${t2.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t2.pieLegendTextColor};
    font-family: ${t2.fontFamily};
    font-size: ${t2.pieLegendTextSize};
  }
`;
var jt = Rt;
var Mt = (t2) => {
  const c = Object.entries(t2).map(
    (g) => ({
      label: g[0],
      value: g[1]
    })
  );
  return Dt().value(
    (g) => g.value
  )(c);
};
var Wt = (t2, c, d, g) => {
  var a, l;
  w.debug(`rendering pie chart
` + t2);
  const k = g.db, b = Ft(), h2 = qm(k.getConfig(), b.pie), r = 450, u = ((l = (a = document.getElementById(c)) == null ? void 0 : a.parentElement) == null ? void 0 : l.offsetWidth) ?? h2.useWidth, p = my(c);
  p.attr("viewBox", `0 0 ${u} ${r}`), Tl(p, r, u, h2.useMaxWidth);
  const I = 40, x = 18, D = 4, _ = p.append("g");
  _.attr("transform", "translate(" + u / 2 + "," + r / 2 + ")");
  const { themeVariables: o } = b;
  let [$] = jn(o.pieOuterStrokeWidth);
  $ ?? ($ = 2);
  const V = h2.textPosition, w2 = Math.min(u, r) / 2 - I, P = hn().innerRadius(0).outerRadius(w2), N = hn().innerRadius(w2 * V).outerRadius(w2 * V);
  _.append("circle").attr("cx", 0).attr("cy", 0).attr("r", w2 + $ / 2).attr("class", "pieOuterCircle");
  const S = k.getSections(), A = Mt(S), m = [
    o.pie1,
    o.pie2,
    o.pie3,
    o.pie4,
    o.pie5,
    o.pie6,
    o.pie7,
    o.pie8,
    o.pie9,
    o.pie10,
    o.pie11,
    o.pie12
  ], e = h(m);
  _.selectAll("mySlices").data(A).enter().append("path").attr("d", P).attr("fill", (i) => e(i.data.label)).attr("class", "pieCircle");
  let n = 0;
  Object.keys(S).forEach((i) => {
    n += S[i];
  }), _.selectAll("mySlices").data(A).enter().append("text").text((i) => (i.data.value / n * 100).toFixed(0) + "%").attr("transform", (i) => "translate(" + N.centroid(i) + ")").style("text-anchor", "middle").attr("class", "slice"), _.append("text").text(k.getDiagramTitle()).attr("x", 0).attr("y", -(r - 50) / 2).attr("class", "pieTitleText");
  const s = _.selectAll(".legend").data(e.domain()).enter().append("g").attr("class", "legend").attr("transform", (i, T) => {
    const f = x + D, R = f * e.domain().length / 2, M = 12 * x, B = T * f - R;
    return "translate(" + M + "," + B + ")";
  });
  s.append("rect").attr("width", x).attr("height", x).style("fill", e).style("stroke", e), s.data(A).append("text").attr("x", x + D).attr("y", x - D).text((i) => {
    const { label: T, value: f } = i.data;
    return k.getShowData() ? `${T} [${f}]` : T;
  });
};
var Gt = { draw: Wt };
var Ht = {
  parser: $t,
  db: zt,
  renderer: Gt,
  styles: jt
};
export {
  Ht as diagram
};
//# sourceMappingURL=pieDiagram-16330908-F3OG5CML.js.map
