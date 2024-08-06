import "../../chunks/pubsub.js";
import "dayjs";
import { hasDot as t } from "./others/StringUtil.js";
const e = (n, r) => {
  if (!(r === void 0 || r == null)) {
    var o = n.indexOf(".");
    if (o < 0)
      return r[n];
    var u = n.substring(0, o), s = n.substring(o + 1);
    return e(s, r[u]);
  }
}, i = (n, r, o) => {
  var u = n.indexOf(".");
  if (u < 0) {
    r[n] = o;
    return;
  }
  var s = n.substring(0, u), v = n.substring(u + 1);
  return (r[s] === void 0 || r[s] == null) && (r[s] = {}), i(v, r[s], o);
}, K = (n) => t(n) ? (r) => e(n, r) : (r) => r == null ? void 0 : r[n], x = (n) => t(n) ? (r, o) => i(n, r, o) : (r, o) => {
  r[n] = o;
};
export {
  K as getValueAccessor,
  e as getValueByKey,
  x as getValueSetter,
  i as setValueByKey
};
