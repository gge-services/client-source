// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function SVGLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SVG);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "data";
    if (e) {
      this.setTag(document.createElement("svg"));
    } else {
      this.setTag(document.createElement("object"));
      this.getTag().type = "image/svg+xml";
    }
  }
