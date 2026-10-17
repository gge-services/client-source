// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function MediaTagRequest(t, e, i) {
    this.AbstractRequest_constructor(t);
    this._tag = e;
    this._tagSrcAttribute = i;
    this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
  }
