// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function LoadItem() {
    this.src = null;
    this.type = null;
    this.id = null;
    this.maintainOrder = false;
    this.callback = null;
    this.data = null;
    this.method = createjs.LoadItem.GET;
    this.values = null;
    this.headers = null;
    this.withCredentials = false;
    this.mimeType = null;
    this.crossOrigin = null;
    this.loadTimeout = e.LOAD_TIMEOUT_DEFAULT;
  }
