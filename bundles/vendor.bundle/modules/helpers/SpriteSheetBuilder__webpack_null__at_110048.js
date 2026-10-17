// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function SpriteSheetBuilder(t) {
    this.EventDispatcher_constructor();
    this.maxWidth = 2048;
    this.maxHeight = 2048;
    this.spriteSheet = null;
    this.scale = 1;
    this.padding = 1;
    this.timeSlice = 0.3;
    this.progress = -1;
    this.framerate = t || 0;
    this._frames = [];
    this._animations = {};
    this._data = null;
    this._nextFrameIndex = 0;
    this._index = 0;
    this._timerID = null;
    this._scale = 1;
  }
