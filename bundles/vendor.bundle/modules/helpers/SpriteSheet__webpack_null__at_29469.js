// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function SpriteSheet(t) {
    this.EventDispatcher_constructor();
    this.complete = true;
    this.framerate = 0;
    this._animations = null;
    this._frames = null;
    this._images = null;
    this._data = null;
    this._loadCount = 0;
    this._frameHeight = 0;
    this._frameWidth = 0;
    this._numFrames = 0;
    this._regX = 0;
    this._regY = 0;
    this._spacing = 0;
    this._margin = 0;
    this._parseData(t);
  }
