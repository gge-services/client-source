// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function DOMElement(t) {
    this.DisplayObject_constructor();
    if (typeof t == "string") {
      t = document.getElementById(t);
    }
    this.mouseEnabled = false;
    var e = t.style;
    e.position = "absolute";
    e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%";
    this.htmlElement = t;
    this._oldProps = null;
  }
