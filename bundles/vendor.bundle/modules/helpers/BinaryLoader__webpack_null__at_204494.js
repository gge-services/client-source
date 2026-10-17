// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function BinaryLoader(t) {
    this.AbstractLoader_constructor(t, true, createjs.AbstractLoader.BINARY);
    this.on("initialize", this._updateXHR, this);
  }
