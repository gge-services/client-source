Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleExtractGemsDialog() {
    return __s1param0.call(this, CastleExtractGemsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExtractGemsDialog, __s1param0);
  CastleExtractGemsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_forge, this.dialogDisp.btn_forgeExtract, this.dialogDisp.btn_close]);
    this.dialogDisp.mc_display.mouseChildren = true;
  };
  CastleExtractGemsDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.initTexts();
    this.fillSlotContainers(this.dialogProperties.gemVOs);
  };
  CastleExtractGemsDialog.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gemForge_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gemForge_info"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forge, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gemForge_forge_desc"));
    this.itxt_costC1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_forgeCost.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.dialogProperties.craftingCost));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_forgeCost.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("costs")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_forgeExtract, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.gemVOs.length > 1 ? "dialog_gemForge_forgeAndExtract_desc" : "dialog_gemForge_forge_desc_singular", [this.dialogProperties.gemVOs.length]));
    var __s9local0 = this.calculateRemovalCostsForGems();
    this.itxt_costC2 = __s9local0 == 0 ? this.textFieldManager.registerTextField(this.dialogDisp.mc_extractCost.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree")) : this.textFieldManager.registerTextField(this.dialogDisp.mc_extractCost.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.calculateRemovalCostsForGems()));
    this.itxt_costC2.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_extractCost.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("costs")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_forge.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gemForge_forgeOnly", [this.dialogProperties.gemVOs.length]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_forgeExtract.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gemForge_forge", [this.dialogProperties.gemVOs.length]));
    this.dialogDisp.mc_extractCost.mc_currency.gotoAndStop(2);
    this.dialogDisp.mc_extractCost.mc_currency.toolTipText = "gold";
    this.dialogDisp.mc_forgeCost.mc_currency.toolTipText = "cash";
    this.onUserCurrencyChange(null);
  };
  CastleExtractGemsDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
  };
  CastleExtractGemsDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
  };
  CastleExtractGemsDialog.prototype.onUserCurrencyChange = function (__s15param0) {
    __dep_export_CostHelper.CostHelper.setCurrencyTextFieldColor(this.itxt_costC1, new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C1), this.dialogProperties.craftingCost);
    __dep_export_CostHelper.CostHelper.setCurrencyTextFieldColor(this.itxt_costC2, new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2), this.calculateRemovalCostsForGems());
  };
  CastleExtractGemsDialog.prototype.calculateRemovalCostsForGems = function () {
    var __s17local0 = 0;
    for (var __s17local1 = 0, __s17local2 = this.dialogProperties.gemVOs; __s17local1 < __s17local2.length; __s17local1++) {
      var __s17local3 = __s17local2[__s17local1];
      if (__s17local3 !== undefined) {
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s17local3, "CastleGemVO")) {
          __s17local0 += __dep_exact_f855840627e6e145.int(__s17local3.levelInfos.removalCostC2);
        } else {
          __s17local0 += __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.RelicItemConst.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST);
        }
      }
    }
    return __s17local0;
  };
  CastleExtractGemsDialog.prototype.fillSlotContainers = function (__s24param0) {
    this.dialogDisp.mc_display.gotoAndStop(__s24param0.length);
    for (var __s24local0 = 0; __s24local0 < __s24param0.length; __s24local0++) {
      var __s24local1 = __s24param0[__s24local0];
      var __s24local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
      __s24local2.addIconMc(this.dialogDisp.mc_display["itemHolder_" + __s24local0].mc_equipmentHolder);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(__s24local2, new __dep_export_CollectableItemGemVO.CollectableItemGemVO(__s24local1.id), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(50, 50)));
    }
  };
  CastleExtractGemsDialog.prototype.showLoaded = function (__s28param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s28param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_forgeExtract, !__dep_export_CastleModel.CastleModel.gemData.isInventoryFull);
    this.dialogDisp.btn_forgeExtract.toolTipText = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull ? "allyforge_tooltip_inventoryFull_gems" : null;
  };
  CastleExtractGemsDialog.prototype.onClick = function (__s30param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target)) {
      __s1param0.prototype.onClick.call(this, __s30param0);
      switch (__s30param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_forge:
          this.dialogProperties.forgeFunction(false);
          this.hide();
          break;
        case this.dialogDisp.btn_forgeExtract:
          this.dialogProperties.forgeFunction(true);
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleExtractGemsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleExtractGemsDialog.NAME = "CastleExtractGems";
  return CastleExtractGemsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleExtractGemsDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableItemGemVO = require("gge-module:export_CollectableItemGemVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
