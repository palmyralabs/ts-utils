var i = Object.defineProperty;
var o = (n, r, t) => r in n ? i(n, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[r] = t;
var e = (n, r, t) => o(n, typeof r != "symbol" ? r + "" : r, t);
import a from "dayjs";
class m {
  constructor(r) {
    e(this, "pattern");
  }
  format(r) {
    if (r)
      return a(r).format(this.pattern);
  }
  parse(r) {
    if (r) {
      if (r instanceof Date)
        return r;
      const t = Number(r);
      return !isNaN(t) && t.toString() === r.toString() ? new Date(t) : a(r, this.pattern).toDate();
    }
    return r;
  }
}
export {
  m as DateTimeConverter
};
