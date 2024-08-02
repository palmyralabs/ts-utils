import "../../chunks/pubsub.js";
import "dayjs";
import { hasDot as u } from "./others/StringUtil.js";
const e = (n, r) => {
  if (!(r === void 0 || r == null)) {
    var t = n.indexOf(".");
    if (t < 0)
      return r[n];
    var s = n.substring(0, t), o = n.substring(t + 1);
    return e(o, r[s]);
  }
}, i = (n, r, t) => {
  var s = n.indexOf(".");
  if (s < 0) {
    r[n] = t;
    return;
  }
  var o = n.substring(0, s), v = n.substring(s + 1);
  return (r[o] === void 0 || r[o] == null) && (r[o] = {}), i(v, r[o], t);
}, K = (n) => u(n) ? (r) => e(n, r) : (r) => r[n], x = (n) => u(n) ? (r, t) => i(n, r, t) : (r, t) => {
  r[n] = t;
};
export {
  K as getValueAccessor,
  e as getValueByKey,
  x as getValueSetter,
  i as setValueByKey
};
