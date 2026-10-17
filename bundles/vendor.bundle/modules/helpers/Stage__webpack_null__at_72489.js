// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function Stage(t) {
    this.Container_constructor();
    this.autoClear = true;
    this.canvas = typeof t == "string" ? document.getElementById(t) : t;
    this.mouseX = 0;
    this.mouseY = 0;
    this.drawRect = null;
    this.snapToPixelEnabled = false;
    this.mouseInBounds = false;
    this.tickOnUpdate = true;
    this.mouseMoveOutside = false;
    this.preventSelection = true;
    this._pointerData = {};
    this._pointerCount = 0;
    this._primaryPointerID = null;
    this._mouseOverIntervalID = null;
    this._nextStage = null;
    this._prevStage = null;
    this.enableDOMEvents(true);
  }
