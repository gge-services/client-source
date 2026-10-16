Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceBattleGroundJoinedPlayerVO = require("gge-module:export_C2SAllianceBattleGroundJoinedPlayerVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattleGroundBuyInfoDialog() {
    return __s1param0.call(this, CastleAllianceBattleGroundBuyInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattleGroundBuyInfoDialog, __s1param0);
  CastleAllianceBattleGroundBuyInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("attention")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_beyondTheHorizon_preEnter_desc_" + __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring));
    this.dialogDisp.mc_alliance.toolTipText = "allianceName";
    this.dialogDisp.mc_member.toolTipText = "dialog_alliance_member";
    this.dialogDisp.mc_rank.toolTipText = "rank";
    this.getAlliInfo();
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.getAlliInfo = function () {
    __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundJoinedPlayerVO.C2SAllianceBattleGroundJoinedPlayerVO());
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.AJP_ARRIVED, this.bindFunction(this.onInfoArrived));
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.AJP_ARRIVED, this.bindFunction(this.onInfoArrived));
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.onInfoArrived = function (__s15param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s15param0.params[0].N));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_memberCount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_proportional_value", [__s15param0.params[0].M, __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.maxAllianceSize]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(__s15param0.params[0].R)));
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  CastleAllianceBattleGroundBuyInfoDialog.prototype.onOK = function () {
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().registerDialogs(__dep_export_CastleSpecialServerPreBuildCastleSelectionDialog.CastleSpecialServerPreBuildCastleSelectionDialog, new __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties(__dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG));
    this.hide();
  };
  CastleAllianceBattleGroundBuyInfoDialog.NAME = "CastleAllianceBattleGroundBuyInfo";
  return CastleAllianceBattleGroundBuyInfoDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceBattleGroundBuyInfoDialog = __s0local0;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialog = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleSpecialServerPreBuildCastleSelectionDialogProperties = require("gge-module:export_CastleSpecialServerPreBuildCastleSelectionDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
