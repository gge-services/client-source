Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ACastleSocketDialog = require("gge-module:export_ACastleSocketDialog");
var __s0local0 = function (__s1param0) {
  function CastleExtractSocketDialog() {
    return __s1param0.call(this, CastleExtractSocketDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExtractSocketDialog, __s1param0);
  CastleExtractSocketDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.controller.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventoryChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gemExtract_info", [this.dialogProperties.gemVO.nameString, this.dialogProperties.eqVO.nameString]));
    this.updateOkButton();
  };
  CastleExtractSocketDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventoryChanged));
    __s1param0.prototype.hide.call(this);
  };
  CastleExtractSocketDialog.prototype.updateCosts = function () {
    __s1param0.prototype.updateCosts.call(this);
    if (this.getCosts().amount <= 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree")).autoFitToBounds = true;
    }
  };
  CastleExtractSocketDialog.prototype.updateOkButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, !__dep_export_CastleModel.CastleModel.gemData.isInventoryFull);
    this.dialogDisp.btn_ok.toolTipText = __dep_export_CastleModel.CastleModel.gemData.isInventoryFull ? "allyforge_tooltip_inventoryFull_gems" : null;
  };
  Object.defineProperty(CastleExtractSocketDialog.prototype, "titleTextID", {
    get: function () {
      return "dialog_gemExtract_title";
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleSocketDialog.ACastleSocketDialog.prototype, "titleTextID").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleExtractSocketDialog.prototype.getCosts = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties.gemVO, "CastleGemVO")) {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C2, this.dialogProperties.gemVO.levelInfos.removalCostC2);
    } else {
      return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_exact_26a421b704832cff.RelicItemConst.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS);
    }
  };
  CastleExtractSocketDialog.prototype.onGemInventoryChanged = function (__s22param0) {
    this.updateOkButton();
  };
  CastleExtractSocketDialog.prototype.onValidConfirmClicked = function () {
    __dep_export_CastleModel.CastleModel.gemData.extractGem(this.dialogProperties.eqVO, this.dialogProperties.lordID);
  };
  CastleExtractSocketDialog.NAME = "CastleExtractSocket";
  return CastleExtractSocketDialog;
}(__dep_export_ACastleSocketDialog.ACastleSocketDialog);
exports.CastleExtractSocketDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
