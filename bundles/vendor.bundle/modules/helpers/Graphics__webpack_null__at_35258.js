// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function Graphics() {
    this.command = null;
    this._stroke = null;
    this._strokeStyle = null;
    this._oldStrokeStyle = null;
    this._strokeDash = null;
    this._oldStrokeDash = null;
    this._strokeIgnoreScale = false;
    this._fill = null;
    this._instructions = [];
    this._commitIndex = 0;
    this._activeInstructions = [];
    this._dirty = false;
    this._storeIndex = 0;
    this.clear();
  }
