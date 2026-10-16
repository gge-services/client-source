Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleShoppingCartPrimeDayProgressBar(__s3param0, __s3param1) {
    this.textRubiesPaid = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 1]));
    this.progressBar = __s3param1;
  }
  CastleShoppingCartPrimeDayProgressBar.prototype.updatePlaceholders = function (__s5param0, __s5param1) {
    if (!(__s5param1 < 0)) {
      var __s5local0 = __s5param0;
      __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleMathHelper.CastleMathHelper.clamp(__s5local0, 0, __s5param1));
      this.textRubiesPaid.textContentVO.textReplacements = [__s5local0, __s5param1];
      this.progressBar.scaleX = __s5local0 / __s5param1;
    }
  };
  return CastleShoppingCartPrimeDayProgressBar;
}();
exports.CastleShoppingCartPrimeDayProgressBar = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
