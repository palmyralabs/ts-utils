var t = Object.defineProperty;
var p = (e, r, o) => r in e ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o;
var n = (e, r, o) => p(e, typeof r != "symbol" ? r + "" : r, o);
class s {
  constructor() {
    n(this, "format", (r) => r);
    n(this, "parse", (r) => r);
  }
}
const c = new s();
export {
  c as noopConverter
};
