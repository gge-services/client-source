Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = createjs.Event;
var __s0local2 = function (__s1param0) {
  function LoadingItem() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isLoaded = false;
    __s3local0._errorOccured = false;
    __s3local0.errorTryCount = 0;
    __s3local0.onLoadingComplete = function (__s5param0) {
      __s3local0._isLoaded = true;
    };
    __s3local0.addEventListener(__s0local1.COMPLETE, __s3local0.onLoadingComplete);
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LoadingItem, __s1param0);
  LoadingItem.prototype.onLoadingErrorOccured = function () {
    this._errorOccured = true;
    this.errorTryCount++;
  };
  Object.defineProperty(LoadingItem.prototype, "isLoaded", {
    get: function () {
      return this._isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoadingItem.prototype, "hasLoadingErrorOccured", {
    get: function () {
      return this._errorOccured;
    },
    enumerable: true,
    configurable: true
  });
  return LoadingItem;
}(__s0local0);
exports.LoadingItem = __s0local2;
