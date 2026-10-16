Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function FusionForgeHubDialogShopHard(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeHubDialogShopHard, __s1param0);
  FusionForgeHubDialogShopHard.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fusionHub_HCShop_desc"));
  };
  FusionForgeHubDialogShopHard.prototype.getEventPackages = function () {
    return __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionShopPackages(this.getBuyTypeId());
  };
  FusionForgeHubDialogShopHard.prototype.getCurrencyType = function () {
    return new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2);
  };
  FusionForgeHubDialogShopHard.prototype.getBuyType = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_FUSION);
  };
  FusionForgeHubDialogShopHard.prototype.getBuyTypeId = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_ClientConstPackages.ClientConstPackages.FUSION_SHOP_ID_HARD);
  };
  return FusionForgeHubDialogShopHard;
}(require("gge-module:export_AModernPackageShopDialogSublayer").AModernPackageShopDialogSublayer);
exports.FusionForgeHubDialogShopHard = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
