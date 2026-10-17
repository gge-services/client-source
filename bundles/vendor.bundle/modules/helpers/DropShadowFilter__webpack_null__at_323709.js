// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function DropShadowFilter(t, e, i, s, r, n, a, o, h, c, u) {
    this._distance = t !== undefined ? t : 4;
    this._angle = e !== undefined ? (e % 360 + 360) % 360 : 45;
    this._setOffset(this._distance, this._angle);
    if (typeof i == "string") {
      i = parseInt(i.substr(1), 16);
    }
    if (isNaN(i)) {
      this._red = this._green = this._blue = 0;
    } else {
      this.color = i;
    }
    this._blurFilter = new createjs.BlurFilter(r, n, o);
    this.alpha = s !== undefined ? s : 1;
    this.strength = a !== undefined ? a <= 1 ? a : a >> 0 : 1;
    this.inner = !!h;
    this.knockout = !!c;
    this.hideObject = !!u;
  }
