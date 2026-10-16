Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __s0local0 = createjs.Container;
var __dep_class_LoaderInfo = require("gge-module:class_LoaderInfo");
var __s0local1 = function (__s1param0) {
  function Loader() {
    return __s1param0.call(this) || this;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(Loader, __s1param0);
  Loader.prototype.load = function (__s5param0) {
    this.loadQueue.loadFile(this.urlRequest.url);
  };
  Object.defineProperty(Loader.prototype, "contentLoaderInfo", {
    get: function () {
      return new __dep_class_LoaderInfo.LoaderInfo();
    },
    enumerable: true,
    configurable: true
  });
  return Loader;
}(__s0local0);
exports.Loader = __s0local1;
