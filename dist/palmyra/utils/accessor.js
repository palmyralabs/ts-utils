import "../../chunks/pubsub.js";
import { hasDot as o } from "./others/StringUtil.js";
const e = (n, r) => {
  if (!(r === void 0 || r == null)) {
    var t = n.indexOf(".");
    if (t < 0)
      return r[n];
    var u = n.substring(0, t), s = n.substring(t + 1);
    return e(s, r[u]);
  }
}, i = (n, r, t) => {
  var u = n.indexOf(".");
  if (u < 0) {
    r[n] = t;
    return;
  }
  var s = n.substring(0, u), v = n.substring(u + 1);
  return (r[s] === void 0 || r[s] == null) && (r[s] = {}), i(v, r[s], t);
}, c = (n) => o(n) ? (r) => e(n, r) : (r) => r?.[n], K = (n) => o(n) ? (r, t) => i(n, r, t) : (r, t) => {
  r[n] = t;
};
export {
  c as getValueAccessor,
  e as getValueByKey,
  K as getValueSetter,
  i as setValueByKey
};
