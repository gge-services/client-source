// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function Bitmap(t) {
    this.DisplayObject_constructor();
    if (typeof t == "string") {
      this.image = document.createElement("img");
      this.image.src = t;
    } else {
      this.image = t;
    }
    this.sourceRect = null;
  }
