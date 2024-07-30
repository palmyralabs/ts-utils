var n = Object.defineProperty;
var o = (e, r, s) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[r] = s;
var t = (e, r, s) => o(e, typeof r != "symbol" ? r + "" : r, s);
class a {
  constructor(r, s) {
    t(this, "min", 0);
    t(this, "max", 100);
    this.min = r || this.min, this.max = s || this.max;
  }
  format(r) {
    if (r)
      return r.from + "..." + r.to;
  }
  parse(r) {
    var s, i;
    if (r && typeof r == "string") {
      const m = r.split("...");
      s = this._parseNumber(m[0]), i = this._parseNumber(m[1]);
    }
    return { from: s, to: i };
  }
  _parseNumber(r) {
    if (r)
      return Number.parseInt(r);
  }
}
export {
  a as NumberRangeConverter
};
