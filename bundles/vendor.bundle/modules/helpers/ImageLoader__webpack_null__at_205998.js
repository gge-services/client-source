// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function ImageLoader(t, e) {
    this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.IMAGE);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "src";
    if (createjs.RequestUtils.isImageTag(t)) {
      this._tag = t;
    } else if (createjs.RequestUtils.isImageTag(t.src)) {
      this._tag = t.src;
    } else if (createjs.RequestUtils.isImageTag(t.tag)) {
      this._tag = t.tag;
    }
    if (this._tag != null) {
      this._preferXHR = false;
    } else {
      this._tag = document.createElement("img");
    }
    this.on("initialize", this._updateXHR, this);
  }
