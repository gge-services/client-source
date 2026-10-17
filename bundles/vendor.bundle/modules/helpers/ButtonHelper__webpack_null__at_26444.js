// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function ButtonHelper(t, e, i, s, r, n, a) {
    if (t.addEventListener) {
      this.target = t;
      this.overLabel = i == null ? "over" : i;
      this.outLabel = e == null ? "out" : e;
      this.downLabel = s == null ? "down" : s;
      this.play = r;
      this._isPressed = false;
      this._isOver = false;
      this._enabled = false;
      t.mouseChildren = false;
      this.enabled = true;
      this.handleEvent({});
      if (n) {
        if (a) {
          n.actionsEnabled = false;
          if (n.gotoAndStop) {
            n.gotoAndStop(a);
          }
        }
        t.hitArea = n;
      }
    }
  }
