// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function MouseEvent(t, e, i, s, r, n, a, o, h, c, u) {
    this.Event_constructor(t, e, i);
    this.stageX = s;
    this.stageY = r;
    this.rawX = h == null ? s : h;
    this.rawY = c == null ? r : c;
    this.nativeEvent = n;
    this.pointerID = a;
    this.primary = !!o;
    this.relatedTarget = u;
  }
