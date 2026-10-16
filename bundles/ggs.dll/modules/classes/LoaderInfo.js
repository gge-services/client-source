Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = function (__s1param0) {
  function LoaderInfo() {
    return __s1param0.call(this) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(LoaderInfo, __s1param0);
  Object.defineProperty(LoaderInfo.prototype, "content", {
    get: function () {
      return new Object();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderInfo.prototype, "url", {
    get: function () {
      return window.location.origin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LoaderInfo.prototype, "parameters", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  return LoaderInfo;
}(createjs.EventDispatcher);
exports.LoaderInfo = __s0local0;
