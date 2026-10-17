// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function ScaleBitmap(t, e, i) {
    this.DisplayObject_constructor();
    if (typeof t == "string") {
      this.image = new Image();
      this.image.src = t;
    } else {
      this.image = t;
    }
    this.drawWidth = i ? i.width : this.image.width;
    this.drawHeight = i ? i.height : this.image.height;
    this.scale9Grid = e;
    this.snapToPixel = true;
    this.sourceRect = i;
  }
