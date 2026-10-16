Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function CollectableRendererList() {
    this._collectableRenderList = [];
  }
  CollectableRendererList.prototype.destroyCollectableRenderList = function () {
    for (var __s5local0 = __dep_exact_f855840627e6e145.int(this._collectableRenderList.length - 1); __s5local0 >= 0; __s5local0--) {
      this._collectableRenderList[__s5local0].destroy();
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(CollectableRendererList.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableRendererList;
}();
exports.CollectableRendererList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
