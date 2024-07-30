var m = Object.defineProperty;
var p = (t, r, e) => r in t ? m(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var n = (t, r, e) => p(t, typeof r != "symbol" ? r + "" : r, e);
import f from "dayjs";
function o(t) {
  return t ? f(t).isValid() : !1;
}
class D {
  constructor(r) {
    n(this, "pattern");
    this.pattern = r;
  }
  format(r) {
    if (r)
      return o(r.from) ? o(r.to) ? this._formatDate(r.from) + "..." + this._formatDate(r.to) : ">" + this._formatDate(r.from) : o(r.to) ? "<" + this._formatDate(r.to) : void 0;
  }
  _formatDate(r) {
    return f(r).format(this.pattern);
  }
  parse(r) {
    var e, s;
    if (r && typeof r == "string") {
      const a = r.charAt(0);
      if (a == ">")
        e = this._parseDate(r.slice(1));
      else if (a == "<")
        s = this._parseDate(r.slice(1));
      else {
        const i = r.split("...");
        e = this._parseDate(i[0]), i[1] && (s = this._parseDate(i[1]));
      }
    }
    return { from: e, to: s };
  }
  _parseDate(r) {
    if (r)
      return f(r, this.pattern).toDate();
  }
}
export {
  D as DateTimeRangeConverter
};
