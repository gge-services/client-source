Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopBuyElementCommonInfoRelic() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementCommonInfoRelic, __s1param0);
  ModernPackageShopBuyElementCommonInfoRelic.prototype.updateText = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.parentDialog.dialogProperties.eventPackageVO.nameTextID, this.parentDialog.dialogProperties.eventPackageVO.nameParams)));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new __dep_exact_92d05af59ee2ff30.TextVO(this.getDescriptionText()));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_sell, new __dep_exact_92d05af59ee2ff30.TextVO(this.getSellPriceText()));
  };
  ModernPackageShopBuyElementCommonInfoRelic.prototype.getSellPriceText = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.relicVO, "RelicEquipmentVO")) {
      return this.relicVO.relicInfoVO.getSellPriceText();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.relicVO, "RelicGemVO")) {
      return this.relicVO.relicInfoVO.getSellPriceText();
    } else {
      return "";
    }
  };
  Object.defineProperty(ModernPackageShopBuyElementCommonInfoRelic.prototype, "relicVO", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.parentDialog.dialogProperties.eventPackageVO.reward, "CollectableItemRelicVO")) {
        return this.parentDialog.dialogProperties.eventPackageVO.reward.vo;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementCommonInfoRelic.prototype.getDescriptionText = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.relicVO, "RelicEquipmentVO")) {
      return this.relicVO.getDescriptionText();
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.relicVO, "RelicGemVO")) {
      return this.relicVO.getDescriptionText();
    } else {
      return null;
    }
  };
  ModernPackageShopBuyElementCommonInfoRelic.prototype.getRewardIconOptions = function () {
    var __s21local0 = __s1param0.prototype.getRewardIconOptions.call(this);
    __s21local0.renderMask = __dep_exact_f855840627e6e145.int(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC ^ __dep_export_CollectableRenderOptions.CollectableRenderOptions.TOOLTIP);
    return __s21local0;
  };
  return ModernPackageShopBuyElementCommonInfoRelic;
}(require("gge-module:export_ModernPackageShopBuyElementCommonInfo").ModernPackageShopBuyElementCommonInfo);
exports.ModernPackageShopBuyElementCommonInfoRelic = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
