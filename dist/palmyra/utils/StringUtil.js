const c = (e, n) => {
  var r = e.indexOf(n);
  return r >= 0;
}, o = (e) => c(e, "."), u = function(e, n) {
  return n ? typeof e == "string" && n instanceof Array ? e.replace(/({\d})/g, function(r) {
    let t = r.replace(/{/, "").replace(/}/, "");
    return n[t];
  }) : typeof e == "string" && n instanceof Object ? Object.keys(n).length === 0 ? e : e.replace(/({([^}]+)})/g, function(r) {
    let t = r.replace(/{/, "").replace(/}/, "");
    return n[t] ? n[t] : r;
  }) : e : e;
};
function i(e) {
  return Object.values(e).join();
}
function f(e) {
  return Object.keys(e).join();
}
export {
  u as StringFormat,
  f as concatKeys,
  i as concatValues,
  c as hasChar,
  o as hasDot
};
