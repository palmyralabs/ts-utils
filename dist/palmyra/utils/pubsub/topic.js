var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var d = { exports: {} };
d.exports;
(function(u, c) {
  (function(i, e) {
    var p = {};
    i.PubSub ? (p = i.PubSub, console.warn("PubSub already loaded, using existing version")) : (i.PubSub = p, e(p)), u !== void 0 && u.exports && (c = u.exports = p), c.PubSub = p, u.exports = c = p;
  })(typeof window == "object" && window || A, function(i) {
    var e = {}, p = -1, O = "*";
    function S(t) {
      var r;
      for (r in t)
        if (Object.prototype.hasOwnProperty.call(t, r))
          return !0;
      return !1;
    }
    function j(t) {
      return function() {
        throw t;
      };
    }
    function T(t, r, n) {
      try {
        t(r, n);
      } catch (o) {
        setTimeout(j(o), 0);
      }
    }
    function E(t, r, n) {
      t(r, n);
    }
    function h(t, r, n, o) {
      var s = e[r], f = o ? E : T, l;
      if (Object.prototype.hasOwnProperty.call(e, r))
        for (l in s)
          Object.prototype.hasOwnProperty.call(s, l) && f(s[l], t, n);
    }
    function k(t, r, n) {
      return function() {
        var s = String(t), f = s.lastIndexOf(".");
        for (h(t, t, r, n); f !== -1; )
          s = s.substr(0, f), f = s.lastIndexOf("."), h(t, s, r, n);
        h(t, O, r, n);
      };
    }
    function w(t) {
      var r = String(t), n = !!(Object.prototype.hasOwnProperty.call(e, r) && S(e[r]));
      return n;
    }
    function I(t) {
      for (var r = String(t), n = w(r) || w(O), o = r.lastIndexOf("."); !n && o !== -1; )
        r = r.substr(0, o), o = r.lastIndexOf("."), n = w(r);
      return n;
    }
    function v(t, r, n, o) {
      t = typeof t == "symbol" ? t.toString() : t;
      var s = k(t, r, o), f = I(t);
      return f ? (n === !0 ? s() : setTimeout(s, 0), !0) : !1;
    }
    i.publish = function(t, r) {
      return v(t, r, !1, i.immediateExceptions);
    }, i.publishSync = function(t, r) {
      return v(t, r, !0, i.immediateExceptions);
    }, i.subscribe = function(t, r) {
      if (typeof r != "function")
        return !1;
      t = typeof t == "symbol" ? t.toString() : t, Object.prototype.hasOwnProperty.call(e, t) || (e[t] = {});
      var n = "uid_" + String(++p);
      return e[t][n] = r, n;
    }, i.subscribeAll = function(t) {
      return i.subscribe(O, t);
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
      var n, o, s = 0;
      for (n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && n.indexOf(r) === 0) {
          for (o in e[n])
            s++;
          break;
        }
      return s;
    }, i.getSubscriptions = function(r) {
      var n, o = [];
      for (n in e)
        Object.prototype.hasOwnProperty.call(e, n) && n.indexOf(r) === 0 && o.push(n);
      return o;
    }, i.unsubscribe = function(t) {
      var r = function(g) {
        var x;
        for (x in e)
          if (Object.prototype.hasOwnProperty.call(e, x) && x.indexOf(g) === 0)
            return !0;
        return !1;
      }, n = typeof t == "string" && (Object.prototype.hasOwnProperty.call(e, t) || r(t)), o = !n && typeof t == "string", s = typeof t == "function", f = !1, l, a, y;
      if (n) {
        i.clearSubscriptions(t);
        return;
      }
      for (l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          if (a = e[l], o && a[t]) {
            delete a[t], f = t;
            break;
          }
          if (s)
            for (y in a)
              Object.prototype.hasOwnProperty.call(a, y) && a[y] === t && (delete a[y], f = !0);
        }
      return f;
    };
  });
})(d, d.exports);
var D = d.exports;
const b = /* @__PURE__ */ _(D);
class F {
  subscribe(c, i) {
    const e = b.subscribe(c, i);
    if (e)
      return e;
    throw new Error("Not able to subscribe to topic " + c);
  }
  publish(c, i) {
    return b.publish(c, i);
  }
  unsubscribe(c) {
    b.unsubscribe(c);
  }
  unsubsribeTopic(c) {
    b.unsubscribe(c);
  }
  reset() {
    b.clearAllSubscriptions();
  }
}
const P = new F();
export {
  P as topic
};
