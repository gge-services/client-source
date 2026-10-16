Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopBuyElementInfo() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementInfo, __s1param0);
  ModernPackageShopBuyElementInfo.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    if (this.parentDialog.dialogProperties.eventPackageVO.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.RELIC_EQUIPMENT) {
      this.setTextByRelic();
    }
  };
  ModernPackageShopBuyElementInfo.prototype.setTextByRelic = function () {
    var __s8local0 = "";
    __s8local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.relicVO, "RelicEquipmentVO") && __dep_export_CastleModel.CastleModel.equipData.isInventoryFull ? "generic_inventoryFull_item_tooltip" : __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.relicVO, "RelicGemVO") && __dep_export_CastleModel.CastleModel.gemData.isInventoryFull ? "generic_inventoryFull_gem_tooltip" : this.parentDialog.dialogProperties.eventPackageVO.descriptionTextID;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s8local0, this.parentDialog.dialogProperties.eventPackageVO.descriptionParams));
    this.disp.mc_warning.visible = false;
    this.disp.mc_info.visible = true;
    this.setVisibility(__s8local0 != "");
  };
  Object.defineProperty(ModernPackageShopBuyElementInfo.prototype, "relicVO", {
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
  return ModernPackageShopBuyElementInfo;
}(require("gge-module:export_AModernPackageShopBuyElement").AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementInfo = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
