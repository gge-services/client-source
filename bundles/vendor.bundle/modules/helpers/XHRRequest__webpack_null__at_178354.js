// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function XHRRequest(t) {
    this.AbstractRequest_constructor(t);
    this._request = null;
    this._loadTimeout = null;
    this._xhrLevel = 1;
    this._response = null;
    this._rawResponse = null;
    this._canceled = false;
    this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this);
    this._handleProgressProxy = createjs.proxy(this._handleProgress, this);
    this._handleAbortProxy = createjs.proxy(this._handleAbort, this);
    this._handleErrorProxy = createjs.proxy(this._handleError, this);
    this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this);
    this._handleLoadProxy = createjs.proxy(this._handleLoad, this);
    this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this);
    this._createXHR(t);
  }
