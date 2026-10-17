// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function Timeline(t, e, i) {
    this.EventDispatcher_constructor();
    this.ignoreGlobalPause = false;
    this.duration = 0;
    this.loop = false;
    this.position = null;
    this._paused = false;
    this._tweens = [];
    this._labels = null;
    this._labelList = null;
    this._prevPosition = 0;
    this._prevPos = -1;
    this._useTicks = false;
    this._registered = false;
    if (i) {
      this._useTicks = i.useTicks;
      this.loop = i.loop;
      this.ignoreGlobalPause = i.ignoreGlobalPause;
      if (i.onChange) {
        this.addEventListener("change", i.onChange);
      }
    }
    if (t) {
      this.addTween.apply(this, t);
    }
    this.setLabels(e);
    if (i && i.paused) {
      this._paused = true;
    } else {
      createjs.Tween._register(this, true);
    }
    if (i && i.position != null) {
      this.setPosition(i.position, createjs.Tween.NONE);
    }
  }
