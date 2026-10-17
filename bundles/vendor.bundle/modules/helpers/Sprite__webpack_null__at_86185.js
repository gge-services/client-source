// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function Sprite(t, e) {
    this.DisplayObject_constructor();
    this.currentFrame = 0;
    this.currentAnimation = null;
    this.paused = true;
    this.spriteSheet = t;
    this.currentAnimationFrame = 0;
    this.framerate = 0;
    this._animation = null;
    this._currentFrame = null;
    this._skipAdvance = false;
    if (e != null) {
      this.gotoAndPlay(e);
    }
  }
