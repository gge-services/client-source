// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function MovieClip(t, e, i, s) {
    this.Container_constructor();
    if (!MovieClip.inited) {
      MovieClip.init();
    }
    this.mode = t || MovieClip.INDEPENDENT;
    this.startPosition = e || 0;
    this.loop = i;
    this.currentFrame = 0;
    this.timeline = new createjs.Timeline(null, s, {
      paused: true,
      position: e,
      useTicks: true
    });
    this.paused = false;
    this.actionsEnabled = true;
    this.autoReset = true;
    this.frameBounds = this.frameBounds || null;
    this.framerate = null;
    this._synchOffset = 0;
    this._prevPos = -1;
    this._prevPosition = 0;
    this._t = 0;
    this._managed = {};
  }
