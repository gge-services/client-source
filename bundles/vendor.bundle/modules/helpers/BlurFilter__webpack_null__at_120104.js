// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function BlurFilter(t, e, i) {
    if (isNaN(t) || t < 0) {
      t = 0;
    }
    if (isNaN(e) || e < 0) {
      e = 0;
    }
    if (isNaN(i) || i < 1) {
      i = 1;
    }
    this.blurX = t | 0;
    this.blurY = e | 0;
    this.quality = i | 0;
  }
