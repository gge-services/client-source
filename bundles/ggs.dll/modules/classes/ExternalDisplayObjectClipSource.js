Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_DisplayObjectClipSource = require("gge-module:class_DisplayObjectClipSource");
var __dep_class_GoodgameBitmapEngine = require("gge-module:class_GoodgameBitmapEngine");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local0 = createjs.Event;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local1 = function (__s1param0) {
  function ExternalDisplayObjectClipSource() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.animData = [];
    __s3local0._isLoaded = false;
    __s3local0._clipLoadedAndConverted = new __dep_exact_becd07da092f4a09.Signal();
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ExternalDisplayObjectClipSource, __s1param0);
  Object.defineProperty(ExternalDisplayObjectClipSource.prototype, "isLoaded", {
    get: function () {
      return this._isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExternalDisplayObjectClipSource.prototype, "clipLoadedAndConverted", {
    get: function () {
      return this._clipLoadedAndConverted;
    },
    enumerable: true,
    configurable: true
  });
  ExternalDisplayObjectClipSource.prototype.initExternalClipSource = function (__s9param0, __s9param1, __s9param2 = null, __s9param3 = 0, __s9param4 = false, __s9param5 = 1) {
    this._sourcePath = __s9param1;
    this.sourceClassName = __s9param0;
    this._colorData = __s9param2;
    this.debugColor = __s9param3;
    this.hasSubLayer = __s9param4;
    this._isLoaded = false;
    var __s9local0 = __s9param1.substring(__s9param1.lastIndexOf("/") + 1, __s9param1.length);
    var __s9local1 = __dep_class_GoodgameBitmapEngine.GoodgameBitmapEngine.bulkLoader.addAssetBundle(this._sourcePath, {
      id: __s9local0.replace(/--\d+/, ""),
      priority: __s9param5
    });
    if (__s9local1) {
      if (__s9local1.isLoaded) {
        this.onLoaded(null);
      } else {
        __s9local1.addEventListener(__s0local0.COMPLETE, this.bindFunction(this.onLoaded));
      }
    }
  };
  ExternalDisplayObjectClipSource.prototype.onLoaded = function (__s14param0 = null) {
    if (__s14param0 != null) {
      __s14param0.target.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onLoaded));
    }
    this._isLoaded = true;
    this.sourceClass = __dep_export_CSSMouseCursor.getDefinitionByNameFromLibrary(this.sourceClassName);
    if (this.sourceClass) {
      this.convertClass(this.sourceClass, this._colorData, this.debugColor, this.hasSubLayer);
      this._clipLoadedAndConverted.dispatch(this);
    }
  };
  ExternalDisplayObjectClipSource.surpressWarnings = false;
  return ExternalDisplayObjectClipSource;
}(__dep_class_DisplayObjectClipSource.DisplayObjectClipSource);
exports.ExternalDisplayObjectClipSource = __s0local1;
