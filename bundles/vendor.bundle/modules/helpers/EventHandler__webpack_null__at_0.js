// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function EventHandler() {
  return {
    addEventListener: function addEventListener(t, e, i) {
      if (t.addEventListener) {
        t.addEventListener(e, i);
      } else {
        if (/domcontentloaded/i.test(e)) {
          e = "load";
        }
        t.attachEvent("on" + e, i);
      }
    }
  };
}
