Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AAutoSellDialogSublayer(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AAutoSellDialogSublayer, __s1param0);
  Object.defineProperty(AAutoSellDialogSublayer.prototype, "autoSellVO", {
    get: function () {
      return this._autoSellVO;
    },
    set: function (__s7param0) {
      this._autoSellVO = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  return AAutoSellDialogSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.AAutoSellDialogSublayer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
