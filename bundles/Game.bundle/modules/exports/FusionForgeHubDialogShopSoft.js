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
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = function (__s1param0) {
  function FusionForgeHubDialogShopSoft(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeHubDialogShopSoft, __s1param0);
  FusionForgeHubDialogShopSoft.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fusionHub_FCShop_desc"));
  };
  FusionForgeHubDialogShopSoft.prototype.getEventPackages = function () {
    return __dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionShopPackages(this.getBuyTypeId());
  };
  FusionForgeHubDialogShopSoft.prototype.getCurrencyType = function () {
    return new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_FUSION_CURRENCY);
  };
  FusionForgeHubDialogShopSoft.prototype.getBuyType = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_FUSION);
  };
  FusionForgeHubDialogShopSoft.prototype.getBuyTypeId = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_ClientConstPackages.ClientConstPackages.FUSION_SHOP_ID_SOFT);
  };
  return FusionForgeHubDialogShopSoft;
}(require("gge-module:export_AModernPackageShopDialogSublayer").AModernPackageShopDialogSublayer);
exports.FusionForgeHubDialogShopSoft = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
