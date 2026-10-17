// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function ColorFilter(t, e, i, s, r, n, a, o) {
    this.redMultiplier = t ?? 1;
    this.greenMultiplier = e ?? 1;
    this.blueMultiplier = i ?? 1;
    this.alphaMultiplier = s ?? 1;
    this.redOffset = r || 0;
    this.greenOffset = n || 0;
    this.blueOffset = a || 0;
    this.alphaOffset = o || 0;
  }
