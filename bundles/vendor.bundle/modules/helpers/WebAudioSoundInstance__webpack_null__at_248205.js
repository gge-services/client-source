// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function WebAudioSoundInstance(t, i, s, r) {
    this.AbstractSoundInstance_constructor(t, i, s, r);
    this.gainNode = e.context.createGain();
    this.panNode = e.context.createPanner();
    this.panNode.panningModel = e._panningModel;
    this.panNode.connect(this.gainNode);
    this._updatePan();
    this.sourceNode = null;
    this._soundCompleteTimeout = null;
    this._sourceNodeNext = null;
    this._playbackStartTime = 0;
    this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
  }
