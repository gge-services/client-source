// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function SoundLoader(t, e) {
    this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND);
    if (createjs.RequestUtils.isAudioTag(t)) {
      this._tag = t;
    } else if (createjs.RequestUtils.isAudioTag(t.src)) {
      this._tag = t;
    } else if (createjs.RequestUtils.isAudioTag(t.tag)) {
      this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src;
    }
    if (this._tag != null) {
      this._preferXHR = false;
    }
  }
