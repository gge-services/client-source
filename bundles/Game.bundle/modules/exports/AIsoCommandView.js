Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AIsoCommandView() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoCommandView, __s1param0);
  Object.defineProperty(AIsoCommandView.prototype, "isoRenderer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoCommandView.prototype, "viewObjects", {
    get: function () {
      return this.isoRenderer.objects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoCommandView.prototype, "mouseHandler", {
    get: function () {
      return this.isoRenderer.mouse;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoCommandView;
}(require("gge-module:export_AIsoCommand").AIsoCommand);
exports.AIsoCommandView = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
