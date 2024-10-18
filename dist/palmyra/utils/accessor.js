import "../../chunks/pubsub.js";
import { hasDot as e } from "./others/StringUtil.js";
const t = (n, r) => {
  if (!(r === void 0 || r == null)) {
    var s = n.indexOf(".");
    if (s < 0)
      return r[n];
    var o = n.substring(0, s), u = n.substring(s + 1);
    return t(u, r[o]);
  }
}, i = (n, r, s) => {
  var o = n.indexOf(".");
  if (o < 0) {
    r[n] = s;
    return;
  }
  var u = n.substring(0, o), v = n.substring(o + 1);
  return (r[u] === void 0 || r[u] == null) && (r[u] = {}), i(v, r[u], s);
}, c = (n) => e(n) ? (r) => t(n, r) : (r) => r == null ? void 0 : r[n], K = (n) => e(n) ? (r, s) => i(n, r, s) : (r, s) => {
  r[n] = s;
};
export {
  c as getValueAccessor,
  t as getValueByKey,
  K as getValueSetter,
  i as setValueByKey
};
