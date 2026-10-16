Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_C2SAllianceKickMemberVO = require("gge-module:export_C2SAllianceKickMemberVO");
var __dep_export_C2SAllianceRerankMemberVO = require("gge-module:export_C2SAllianceRerankMemberVO");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AllianceRankVO = require("gge-module:export_AllianceRankVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceMemberSettingsDialog() {
    var __s3local0 = this;
    __s3local0._newRank = 0;
    __s3local0.warning = 0;
    __s3local0.kickFromAllianceWarnings = [__s3local0.bindFunction(__s3local0.firstQuitAllianceWarning), __s3local0.bindFunction(__s3local0.checkKingsTowerOwnership), __s3local0.bindFunction(__s3local0.checkCapitalAllianceOwnership), __s3local0.bindFunction(__s3local0.checkMetropolisAllianceOwnership), __s3local0.bindFunction(__s3local0.checkMonuments), __s3local0.bindFunction(__s3local0.checkLaboratories)];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceMemberSettingsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceMemberSettingsDialog, __s1param0);
  CastleAllianceMemberSettingsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_kickMember, this.dialogDisp.btn_newLeader, this.dialogDisp.mc_rankList.btn_up, this.dialogDisp.mc_rankList.btn_down]);
    this.scroller = new __dep_exact_9e901e8e2483a22f_1.ItemScrollList(this.dialogDisp.mc_rankList);
    this.scroller.scrollItemClass = __dep_export_CastleAllianceRankItem.CastleAllianceRankItem;
  };
  CastleAllianceMemberSettingsDialog.prototype.selectRank = function (__s7param0) {
    this._newRank = __s7param0;
    this.itxt_rankInfo.textContentVO.textId = "dialog_alliance_rankinfo" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(this._newRank);
    this.itxt_rankName.textContentVO.textId = "dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(this._newRank);
    this.dialogDisp.ico_selectedRank1.gotoAndStop(__s7param0 + 1);
    this.dialogDisp.ico_selectedRank2.gotoAndStop(__s7param0 + 1);
    this._scrollComponent.scrollToStart();
  };
  CastleAllianceMemberSettingsDialog.prototype.initScroller = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_newLeader, __dep_export_CastleModel.CastleModel.userData.allianceRank == __dep_exact_26a421b704832cff.AllianceConst.RANK_LEADER);
    this.scroller.clear();
    for (var __s9local0 = __dep_export_ClientConstAlliance.ClientConstAlliance.getInferiorRanks(__dep_export_CastleModel.CastleModel.userData.allianceRank), __s9local1 = 0, __s9local2 = 0; __s9local2 < __s9local0.length; __s9local2++) {
      if (__s9local0[__s9local2] == this.dialogProperties.playerInfoVO.allianceRank) {
        __s9local1 = __s9local2;
      }
      this.scroller.pushContent(new __dep_export_AllianceRankVO.AllianceRankVO(__s9local0[__s9local2], this.dialogProperties.playerInfoVO.allianceRank));
    }
    this.scroller.initList(Math.max(0, __s9local1 - 1));
    this.scroller.addEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClicked));
    this.scroller.addEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollerScrolled));
  };
  CastleAllianceMemberSettingsDialog.prototype.onClick = function (__s14param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      __s1param0.prototype.onClick.call(this, __s14param0);
      switch (__s14param0.target) {
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceReRank"));
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.changeMemberRank();
          break;
        case this.dialogDisp.btn_kickMember:
          this.onClickKickMember();
          break;
        case this.dialogDisp.btn_newLeader:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDelayedYesNoDialog.CastleDelayedYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("alliance_newLeader_title"), __dep_exact_92d05af59ee2ff30.Localize.text("alliance_newLeader_copy", [this.dialogProperties.playerInfoVO.playerName]), this.bindFunction(this.sendNewLeader)));
      }
    }
  };
  CastleAllianceMemberSettingsDialog.prototype.sendNewLeader = function (__s18param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceRerankMemberVO.C2SAllianceRerankMemberVO(this.dialogProperties.playerInfoVO.playerID, __dep_exact_26a421b704832cff.AllianceConst.RANK_LEADER));
    this.hide();
  };
  CastleAllianceMemberSettingsDialog.prototype.onClickKickMember = function () {
    this.warning = 0;
    this.onNextKickFromAllianceWarning();
  };
  CastleAllianceMemberSettingsDialog.prototype.onNextKickFromAllianceWarning = function (__s22param0 = null) {
    var __s22local0 = this.warning++;
    if (__s22local0 < this.kickFromAllianceWarnings.length) {
      if (!this.kickFromAllianceWarnings[__s22local0]()) {
        this.onNextKickFromAllianceWarning();
      }
    } else {
      this.onKickMember();
    }
  };
  CastleAllianceMemberSettingsDialog.prototype.showKickFromAllianceWarning = function (__s27param0, __s27param1 = "dialog_alliance_kickUser_title") {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text(__s27param1), __dep_exact_92d05af59ee2ff30.Localize.text(__s27param0), this.bindFunction(this.onNextKickFromAllianceWarning)));
  };
  CastleAllianceMemberSettingsDialog.prototype.firstQuitAllianceWarning = function () {
    this.showKickFromAllianceWarning("dialog_alliance_kickUser_copy");
    return true;
  };
  CastleAllianceMemberSettingsDialog.prototype.checkCapitalAllianceOwnership = function () {
    return !!this.dialogProperties.playerInfoVO.hasCapital && (this.showKickFromAllianceWarning("alert_dismissAlliance_capitalLost"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.checkMetropolisAllianceOwnership = function () {
    return !!this.dialogProperties.playerInfoVO.hasMetropolis && (this.showKickFromAllianceWarning("alert_dismissAlliance_metropolisLost"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.checkMonuments = function () {
    return !!this.dialogProperties.playerInfoVO.hasMonument && (this.showKickFromAllianceWarning("dialog_banFromAlliance_monument"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.checkLaboratories = function () {
    return !!this.dialogProperties.playerInfoVO.hasLaboratory && (this.showKickFromAllianceWarning("dialog_banFromAlliance_laboratory"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.checkKingsTowerOwnership = function () {
    return !!this.dialogProperties.playerInfoVO.hasKingstower && (this.showKickFromAllianceWarning("dialog_banFromAlliance_kingstower"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.onKickMember = function () {
    this.hide();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceKickMemberVO.C2SAllianceKickMemberVO(this.dialogProperties.playerInfoVO.playerID));
  };
  CastleAllianceMemberSettingsDialog.prototype.changeMemberRank = function () {
    this.hide();
    if (this._newRank != this.dialogProperties.playerInfoVO.allianceRank) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceRerankMemberVO.C2SAllianceRerankMemberVO(this.dialogProperties.playerInfoVO.playerID, this._newRank));
    }
  };
  CastleAllianceMemberSettingsDialog.prototype.onScrollItemClicked = function (__s46param0) {
    this.scroller.resetItems();
    __s46param0.scrollItem.checked = true;
    this._newRank = __dep_exact_f855840627e6e145.int(__s46param0.scrollItem.scrollItemVO.rankID);
    this.selectRank(this._newRank);
  };
  CastleAllianceMemberSettingsDialog.prototype.hideLoaded = function (__s48param0 = null) {
    this.scroller.removeEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClicked));
    this.scroller.removeEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollerScrolled));
    __s1param0.prototype.hideLoaded.call(this, __s48param0);
    if (this._scrollComponent) {
      this._scrollComponent.onHide();
    }
  };
  CastleAllianceMemberSettingsDialog.prototype.showLoaded = function (__s51param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s51param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_changeRank, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_changeRank"));
    this.dialogDisp.btn_kickMember.toolTipText = "dialog_alliance_kickUser";
    if (__dep_export_CastleModel.CastleModel.userData.allianceRank == __dep_exact_26a421b704832cff.AllianceConst.RANK_LEADER) {
      this.dialogDisp.btn_newLeader.toolTipText = "dialog_alliance_newLeader";
    } else {
      this.dialogDisp.btn_newLeader.toolTipText = "dialog_alliance_rankToLow";
    }
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.dialogDisp.txt_rankInfo, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.playerInfoVO.playerName));
    this.itxt_rankName = this.textFieldManager.registerTextField(this.dialogDisp.txt_rankName, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_rankInfo = this.textFieldManager.registerTextField(this.dialogDisp.txt_rankInfo, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.initScroller();
    this.selectRank(this.dialogProperties.playerInfoVO.allianceRank);
    this._scrollComponent.scrollToStart();
    if (this._scrollComponent) {
      this._scrollComponent.onShow();
    }
    this.dialogDisp.btn_kickMember.visible = !__dep_export_ABGHelper.ABGHelper.isOnABGServer;
  };
  Object.defineProperty(CastleAllianceMemberSettingsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceMemberSettingsDialog.prototype.onScrollerScrolled = function (__s58param0) {
    for (var __s58local0 = 0, __s58local1 = this.scroller.veList; __s58local0 < __s58local1.length; __s58local0++) {
      var __s58local2 = __s58local1[__s58local0];
      if (__s58local2 !== undefined) {
        if (!__s58local2.itemVO) {
          break;
        }
        __s58local2.checked = __s58local2.itemVO.rankID == this._newRank;
      }
    }
  };
  CastleAllianceMemberSettingsDialog.NAME = "CastleAllianceMemberSettingsEx";
  return CastleAllianceMemberSettingsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAllianceMemberSettingsDialog = __s0local0;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleDelayedYesNoDialog = require("gge-module:export_CastleDelayedYesNoDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastleAllianceRankItem = require("gge-module:export_CastleAllianceRankItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
