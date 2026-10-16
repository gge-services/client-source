Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AIsoViewComponent() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoViewComponent, __s1param0);
  AIsoViewComponent.prototype.init = function (__s5param0) {
    this._isoRenderer = __s5param0;
  };
  AIsoViewComponent.prototype.reset = function () {};
  AIsoViewComponent.prototype.setup = function () {};
  Object.defineProperty(AIsoViewComponent.prototype, "isoRenderer", {
    get: function () {
      return this._isoRenderer;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoViewComponent;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.AIsoViewComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
