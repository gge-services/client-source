Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopBuyElementCommonInfoBundle() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementCommonInfoBundle, __s1param0);
  ModernPackageShopBuyElementCommonInfoBundle.prototype.updateText = function () {
    var __s5local0;
    var __s5local1 = this.parentDialog.dialogProperties.eventPackageVO;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local1.nameTextID, __s5local1.nameParams)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local1.descriptionTextID, __s5local1.descriptionParams)).autoFitToBounds = true;
    __s5local0 = __s5local1.isNotRebuyable ? __s5local1.remainingStock > 1 ? "dialog_bundlePackage_purchase_stockCounter_multi" : __s5local1.remainingStock == 1 ? "dialog_bundlePackage_purchase_stockCounter_single" : "dialog_shop_soldOut" : " ";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_left, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local0, [__s5local1.remainingStock])).autoFitToBounds = true;
  };
  return ModernPackageShopBuyElementCommonInfoBundle;
}(require("gge-module:export_ModernPackageShopBuyElementCommonInfo").ModernPackageShopBuyElementCommonInfo);
exports.ModernPackageShopBuyElementCommonInfoBundle = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
