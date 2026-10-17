// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function CSSLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.CSS);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "href";
    this._tag = e ? document.createElement("style") : document.createElement("link");
    this._tag.rel = "stylesheet";
    this._tag.type = "text/css";
  }
