Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ACastleSocketDialog = require("gge-module:export_ACastleSocketDialog");
var __s0local0 = function (__s1param0) {
  function CastleReplaceSocketDialog() {
    return __s1param0.call(this, CastleReplaceSocketDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleReplaceSocketDialog, __s1param0);
  CastleReplaceSocketDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_extract);
    this.dialogDisp.mc_gem2.mouseChildren = false;
    this.dialogDisp.mc_eq.mouseChildren = false;
  };
  CastleReplaceSocketDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventoryChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_gem2, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.oldGemVO.nameString)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.btn_extract.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_gems_replaceGems_extractAndInsert")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_gems_replaceGems_text", [this.dialogProperties.gemVO.nameString, this.dialogProperties.eqVO.nameString, this.dialogProperties.oldGemVO.nameString]));
    this.updateOkButton();
  };
  CastleReplaceSocketDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventoryChanged));
    __s1param0.prototype.hide.call(this);
  };
  CastleReplaceSocketDialog.prototype.updateOkButton = function () {
    var __s11local0 = __dep_export_CastleModel.CastleModel.gemData.inventorySpace < 0;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_extract, !__s11local0);
    this.dialogDisp.btn_extract.toolTipText = __s11local0 ? "allyforge_tooltip_inventoryFull_gems" : null;
  };
  CastleReplaceSocketDialog.prototype.updateCosts = function () {
    __s1param0.prototype.updateCosts.call(this);
    var __s13local0 = this.getRemovalCosts();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_cost2), __s13local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, __dep_export_ACastleSocketDialog.ACastleSocketDialog.COST_ICON_DIMENSION));
    if (__s13local0.amount <= 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree")).autoFitToBounds = true;
    }
  };
  CastleReplaceSocketDialog.prototype.renderIcons = function () {
    __s1param0.prototype.renderIcons.call(this);
    this.dialogDisp.mc_gem2.equipmentVO = this.dialogProperties.oldGemVO;
    this.dialogDisp.mc_gem2.addChild(__dep_export_CastleGemRenderer.CastleGemRenderer.renderAssetBroken(this.dialogProperties.oldGemVO));
  };
  CastleReplaceSocketDialog.prototype.sendBindGem = function (__s18param0) {
    __dep_export_CastleModel.CastleModel.gemData.bindGem(this.dialogProperties.gemVO, this.dialogProperties.eqVO, this.dialogProperties.lordID, __s18param0);
  };
  CastleReplaceSocketDialog.prototype.getRemovalCosts = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.gemVO, "CastleGemVO")) {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C2, this.dialogProperties.oldGemVO.levelInfos.removalCostC2);
    } else {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_exact_26a421b704832cff.RelicItemConst.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS);
    }
  };
  CastleReplaceSocketDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      switch (__s24param0.target) {
        case this.dialogDisp.btn_extract:
          this.onExtractButtonClicked();
      }
    }
  };
  CastleReplaceSocketDialog.prototype.onExtractButtonClicked = function () {
    if (this.checkAndShowNotEnoughCurrencyMessage(this.getRemovalCosts())) {
      this.sendBindGem(true);
      if (this.dialogProperties.onConfirm) {
        this.dialogProperties.onConfirm();
      }
      this.hide();
    }
  };
  CastleReplaceSocketDialog.prototype.onGemInventoryChanged = function (__s32param0) {
    this.updateOkButton();
  };
  CastleReplaceSocketDialog.prototype.onValidConfirmClicked = function () {
    this.sendBindGem(false);
  };
  CastleReplaceSocketDialog.NAME = "CastleReplaceSocket";
  return CastleReplaceSocketDialog;
}(__dep_export_ACastleSocketDialog.ACastleSocketDialog);
exports.CastleReplaceSocketDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleGemRenderer = require("gge-module:export_CastleGemRenderer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
