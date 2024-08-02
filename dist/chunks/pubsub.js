var g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var b = { exports: {} };
b.exports;
(function(f, y) {
  (function(i, e) {
    var p = {};
    i.PubSub ? (p = i.PubSub, console.warn("PubSub already loaded, using existing version")) : (i.PubSub = p, e(p)), f !== void 0 && f.exports && (y = f.exports = p), y.PubSub = p, f.exports = y = p;
  })(typeof window == "object" && window || g, function(i) {
    var e = {}, p = -1, d = "*";
    function v(t) {
      var r;
      for (r in t)
        if (Object.prototype.hasOwnProperty.call(t, r))
          return !0;
      return !1;
    }
    function S(t) {
      return function() {
        throw t;
      };
    }
    function j(t, r, n) {
      try {
        t(r, n);
      } catch (o) {
        setTimeout(S(o), 0);
      }
    }
    function T(t, r, n) {
      t(r, n);
    }
    function O(t, r, n, o) {
      var c = e[r], s = o ? T : j, u;
      if (Object.prototype.hasOwnProperty.call(e, r))
        for (u in c)
          Object.prototype.hasOwnProperty.call(c, u) && s(c[u], t, n);
    }
    function k(t, r, n) {
      return function() {
        var c = String(t), s = c.lastIndexOf(".");
        for (O(t, t, r, n); s !== -1; )
          c = c.substr(0, s), s = c.lastIndexOf("."), O(t, c, r, n);
        O(t, d, r, n);
      };
    }
    function h(t) {
      var r = String(t), n = !!(Object.prototype.hasOwnProperty.call(e, r) && v(e[r]));
      return n;
    }
    function E(t) {
      for (var r = String(t), n = h(r) || h(d), o = r.lastIndexOf("."); !n && o !== -1; )
        r = r.substr(0, o), o = r.lastIndexOf("."), n = h(r);
      return n;
    }
    function x(t, r, n, o) {
      t = typeof t == "symbol" ? t.toString() : t;
      var c = k(t, r, o), s = E(t);
      return s ? (n === !0 ? c() : setTimeout(c, 0), !0) : !1;
    }
    i.publish = function(t, r) {
      return x(t, r, !1, i.immediateExceptions);
    }, i.publishSync = function(t, r) {
      return x(t, r, !0, i.immediateExceptions);
    }, i.subscribe = function(t, r) {
      if (typeof r != "function")
        return !1;
      t = typeof t == "symbol" ? t.toString() : t, Object.prototype.hasOwnProperty.call(e, t) || (e[t] = {});
      var n = "uid_" + String(++p);
      return e[t][n] = r, n;
    }, i.subscribeAll = function(t) {
      return i.subscribe(d, t);
    }, i.subscribeOnce = function(t, r) {
      var n = i.subscribe(t, function() {
        i.unsubscribe(n), r.apply(this, arguments);
      });
      return i;
    }, i.clearAllSubscriptions = function() {
      e = {};
    }, i.clearSubscriptions = function(r) {
      var n;
      for (n in e)
        Object.prototype.hasOwnProperty.call(e, n) && n.indexOf(r) === 0 && delete e[n];
    }, i.countSubscriptions = function(r) {
      var n, o, c = 0;
      for (n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && n.indexOf(r) === 0) {
          for (o in e[n])
            c++;
          break;
        }
      return c;
    }, i.getSubscriptions = function(r) {
      var n, o = [];
      for (n in e)
        Object.prototype.hasOwnProperty.call(e, n) && n.indexOf(r) === 0 && o.push(n);
      return o;
    }, i.unsubscribe = function(t) {
      var r = function(I) {
        var w;
        for (w in e)
          if (Object.prototype.hasOwnProperty.call(e, w) && w.indexOf(I) === 0)
            return !0;
        return !1;
      }, n = typeof t == "string" && (Object.prototype.hasOwnProperty.call(e, t) || r(t)), o = !n && typeof t == "string", c = typeof t == "function", s = !1, u, l, a;
      if (n) {
        i.clearSubscriptions(t);
        return;
      }
      for (u in e)
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          if (l = e[u], o && l[t]) {
            delete l[t], s = t;
            break;
          }
          if (c)
            for (a in l)
              Object.prototype.hasOwnProperty.call(l, a) && l[a] === t && (delete l[a], s = !0);
        }
      return s;
    };
  });
})(b, b.exports);
var _ = b.exports;
const A = /* @__PURE__ */ P(_);
export {
  A as P
};
