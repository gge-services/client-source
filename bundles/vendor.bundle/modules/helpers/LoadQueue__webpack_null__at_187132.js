// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function LoadQueue(t, e, i) {
    this.AbstractLoader_constructor();
    this._plugins = [];
    this._typeCallbacks = {};
    this._extensionCallbacks = {};
    this.next = null;
    this.maintainScriptOrder = true;
    this.stopOnError = false;
    this._maxConnections = 1;
    this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader];
    this._defaultLoaderLength = this._availableLoaders.length;
    this.init(t, e, i);
  }
