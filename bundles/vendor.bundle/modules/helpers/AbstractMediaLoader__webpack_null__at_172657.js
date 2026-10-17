// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function AbstractMediaLoader(t, e, i) {
    this.AbstractLoader_constructor(t, e, i);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "src";
    this.on("initialize", this._updateXHR, this);
  }
