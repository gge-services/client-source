Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceUpgradeVO = require("gge-module:export_C2SAllianceUpgradeVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBuyStandardBoostDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceBuyStandardBoostDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBuyStandardBoostDialog, __s1param0);
  CastleAllianceBuyStandardBoostDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle, this.dialogDisp.btn_close]);
  };
  CastleAllianceBuyStandardBoostDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_boostDesctiption = this.textFieldManager.registerTextField(this.dialogDisp.txt_boostDesctiption, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_boostAmount = this.textFieldManager.registerTextField(this.dialogDisp.txt_boostAmount, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_title.textContentVO.stringValue = this.dialogProperties.boostTitle;
    this.itxt_boostDesctiption.textContentVO.stringValue = this.dialogProperties.boostDescription;
    this.itxt_boostAmount.textContentVO.stringValue = this.dialogProperties.boostAmount;
    this.costList = new __dep_export_CastleResourceListComponent.CastleResourceListComponent(this.dialogDisp.mc_boostCost, Library.CastleInterfaceElements.ResourceListCompnent_Item, 4);
    this.costList.displayAsCosts = true;
    this.costList.otherResourceStorageForCosts = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage;
    this.costList.updateComponent(this.dialogProperties.boostCosts, __dep_exact_92d05af59ee2ff30.Localize.text("costs"));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_UPGRADE));
    if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_UPGRADE)) {
      this.dialogDisp.btn_ok.toolTipText = null;
    } else {
      this.dialogDisp.btn_ok.toolTipText = "dialog_alliance_rankToLow";
    }
  };
  CastleAllianceBuyStandardBoostDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onBuyBoost();
          this.hide();
      }
    }
  };
  CastleAllianceBuyStandardBoostDialog.prototype.hideLoaded = function (__s15param0 = null) {
    this.costList.destroy();
    __s1param0.prototype.hideLoaded.call(this);
    if (this.dialogProperties.targetAllianceSublayer) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(this.dialogProperties.targetAllianceSublayer));
      this.dialogProperties.targetAllianceSublayer = null;
    }
  };
  CastleAllianceBuyStandardBoostDialog.prototype.onBuyBoost = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceUpgradeVO.C2SAllianceUpgradeVO(this.dialogProperties.buffType));
  };
  Object.defineProperty(CastleAllianceBuyStandardBoostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBuyStandardBoostDialog.__initialize_static_members = function () {
    CastleAllianceBuyStandardBoostDialog.NAME = "CastleAllianceBuyBoostEx";
  };
  return CastleAllianceBuyStandardBoostDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAllianceBuyStandardBoostDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
