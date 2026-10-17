// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function Tween(t, e, i) {
    this.ignoreGlobalPause = false;
    this.loop = false;
    this.duration = 0;
    this.pluginData = i || {};
    this.target = t;
    this.position = null;
    this.passive = false;
    this._paused = false;
    this._curQueueProps = {};
    this._initQueueProps = {};
    this._steps = [];
    this._actions = [];
    this._prevPosition = 0;
    this._stepPosition = 0;
    this._prevPos = -1;
    this._target = t;
    this._useTicks = false;
    this._inited = false;
    this._registered = false;
    if (e) {
      this._useTicks = e.useTicks;
      this.ignoreGlobalPause = e.ignoreGlobalPause;
      this.loop = e.loop;
      if (e.onChange) {
        this.addEventListener("change", e.onChange);
      }
      if (e.override) {
        Tween.removeTweens(t);
      }
    }
    if (e && e.paused) {
      this._paused = true;
    } else {
      createjs.Tween._register(this, true);
    }
    if (e && e.position != null) {
      this.setPosition(e.position, Tween.NONE);
    }
  }
