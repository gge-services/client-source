// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function ProgressEvent(t, e) {
    this.Event_constructor("progress");
    this.loaded = t;
    this.total = e == null ? 1 : e;
    this.progress = e == 0 ? 0 : this.loaded / this.total;
  }
