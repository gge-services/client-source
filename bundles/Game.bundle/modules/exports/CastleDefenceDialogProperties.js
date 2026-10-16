Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleDefenceDialogProperties(__s3param0, __s3param1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DefenseConst.TOOL_TYPE_WALL)) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.preselectedShopCategory = 0;
    __s3local0.worldMapObjectVO = __s3param0;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s3local0.worldMapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      __s3local0.preselectedShopCategory = __dep_export_CastleDefenceDialog.CastleDefenceDialog.NO_SHOP;
    } else {
      __s3local0.preselectedShopCategory = __s3param1;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDefenceDialogProperties, __s1param0);
  return CastleDefenceDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleDefenceDialogProperties = __s0local0;
var __dep_export_CastleDefenceDialog = require("gge-module:export_CastleDefenceDialog");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
