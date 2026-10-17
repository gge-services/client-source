// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function BitmapData(t, e, i, s) {
    t = t >> 0 || 300;
    e = e >> 0 || 150;
    this.transparent = !!i;
    var r = this.canvas = createCanvas(t, e);
    this.context = r.getContext("2d");
    this.name = null;
    if (s !== undefined) {
      this.fillRect(new createjs.Rectangle(0, 0, t, e), s);
    }
    this._contextChanged = false;
  }
