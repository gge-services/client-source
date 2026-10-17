// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function WebAudioPlugin() {
    this.AbstractPlugin_constructor();
    this._panningModel = e._panningModel;
    this.context = e.context;
    this.dynamicsCompressorNode = this.context.createDynamicsCompressor();
    this.dynamicsCompressorNode.connect(this.context.destination);
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.dynamicsCompressorNode);
    createjs.WebAudioSoundInstance.destinationNode = this.gainNode;
    this._capabilities = e._capabilities;
    this._loaderClass = createjs.WebAudioLoader;
    this._soundInstanceClass = createjs.WebAudioSoundInstance;
    this._addPropsToClasses();
  }
