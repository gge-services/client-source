// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function AbstractLoader(t, e, i) {
    this.EventDispatcher_constructor();
    this.loaded = false;
    this.canceled = false;
    this.progress = 0;
    this.type = i;
    this.resultFormatter = null;
    this._item = t ? createjs.LoadItem.create(t) : null;
    this._preferXHR = e;
    this._result = null;
    this._rawResult = null;
    this._loadedItems = null;
    this._tagSrcAttribute = null;
    this._tag = null;
  }
