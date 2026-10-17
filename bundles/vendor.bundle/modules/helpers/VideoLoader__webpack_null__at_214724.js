// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function VideoLoader(t, e) {
    this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.VIDEO);
    if (createjs.RequestUtils.isVideoTag(t) || createjs.RequestUtils.isVideoTag(t.src)) {
      this.setTag(createjs.RequestUtils.isVideoTag(t) ? t : t.src);
      this._preferXHR = false;
    } else {
      this.setTag(this._createTag());
    }
  }
