Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ACollectableRenderComponent() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableRenderComponent, __s1param0);
  ACollectableRenderComponent.prototype.init = function (__s5param0) {
    this._renderer = __s5param0;
  };
  ACollectableRenderComponent.prototype.addListener = function () {};
  ACollectableRenderComponent.prototype.removeListener = function () {};
  ACollectableRenderComponent.prototype.reset = function () {};
  ACollectableRenderComponent.prototype.update = function () {};
  ACollectableRenderComponent.prototype.setVisibility = function (__s15param0) {};
  ACollectableRenderComponent.prototype.onLoadedIcon = function () {};
  Object.defineProperty(ACollectableRenderComponent.prototype, "renderer", {
    get: function () {
      return this._renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableRenderComponent.prototype, "clips", {
    get: function () {
      return this._renderer.clips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableRenderComponent.prototype, "itemVO", {
    get: function () {
      return this._renderer.itemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableRenderComponent.prototype, "itemVE", {
    get: function () {
      return this._renderer.itemVE;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableRenderComponent;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.ACollectableRenderComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
