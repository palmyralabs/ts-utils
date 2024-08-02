const t = (e) => {
  if (e && e > 0) {
    var r;
    return function(n, ...l) {
      clearTimeout(r), r = setTimeout(n.bind(null, ...l), e);
    };
  } else
    return (n, ...l) => n.apply(null, l);
};
export {
  t as delayGenerator
};
