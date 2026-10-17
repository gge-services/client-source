// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function HTMLAudioSoundInstance(t, e, i, s) {
    this.AbstractSoundInstance_constructor(t, e, i, s);
    this._audioSpriteStopTime = null;
    this._delayTimeoutId = null;
    this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
    this._readyHandler = createjs.proxy(this._handleTagReady, this);
    this._stalledHandler = createjs.proxy(this._playFailed, this);
    this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this);
    this._loopHandler = createjs.proxy(this._handleSoundComplete, this);
    if (i) {
      this._audioSpriteStopTime = (e + i) * 0.001;
    } else {
      this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
    }
  }
