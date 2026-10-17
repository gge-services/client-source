// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function GlowFilter(t, e, i, s, r, n, a, o) {
    if (typeof t == "string") {
      t = parseInt(t.substr(1), 16);
    }
    if (isNaN(t)) {
      this._red = 255;
      this._green = this._blue = 0;
    } else {
      this.color = t;
    }
    this._blurFilter = new createjs.BlurFilter(i, s, n);
    this.alpha = e !== undefined ? e : 1;
    this.strength = r !== undefined ? r : 1;
    this.inner = !!a;
    this.knockout = !!o;
  }
