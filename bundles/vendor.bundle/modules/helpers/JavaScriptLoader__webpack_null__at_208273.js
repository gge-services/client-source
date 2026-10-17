// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function JavaScriptLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.JAVASCRIPT);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "src";
    this.setTag(document.createElement("script"));
  }
