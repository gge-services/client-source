// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function DisplayObject() {
    this.EventDispatcher_constructor();
    this.alpha = 1;
    this.cacheCanvas = null;
    this.cacheID = 0;
    this.willReadFrequently = undefined;
    this.id = createjs.UID.get();
    this.mouseEnabled = true;
    this.tickEnabled = true;
    this.name = null;
    this.parent = null;
    this.regX = 0;
    this.regY = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.skewX = 0;
    this.skewY = 0;
    this.shadow = null;
    this.visible = true;
    this.x = 0;
    this.y = 0;
    this.transformMatrix = null;
    this.compositeOperation = null;
    this.snapToPixel = true;
    this.filters = null;
    this.mask = null;
    this.hitArea = null;
    this.cursor = null;
    this._cacheOffsetX = 0;
    this._cacheOffsetY = 0;
    this._filterOffsetX = 0;
    this._filterOffsetY = 0;
    this._cacheScale = 1;
    this._cacheDataURLID = 0;
    this._cacheDataURL = null;
    this._props = new createjs.DisplayProps();
    this._rectangle = new createjs.Rectangle();
    this._bounds = null;
  }
