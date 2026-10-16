Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceQuitVO = require("gge-module:export_C2SAllianceQuitVO");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleAllianceMessageToallDialogProperties = require("gge-module:export_CastleAllianceMessageToallDialogProperties");
var __dep_export_CastleChangeDescriptionDialogPrpoerties = require("gge-module:export_CastleChangeDescriptionDialogPrpoerties");
var __dep_export_CastleNameAllianceDialogProperties = require("gge-module:export_CastleNameAllianceDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogManagement(__s3param0) {
    var __s3local0 = this;
    __s3local0.warning = 0;
    __s3local0.quitAllianceWarnings = [__s3local0.bindFunction(__s3local0.firstQuitAllianceWarning), __s3local0.bindFunction(__s3local0.checkKingsTowerOwnership), __s3local0.bindFunction(__s3local0.checkCapitalAllianceOwnership), __s3local0.bindFunction(__s3local0.checkAlliTournament), __s3local0.bindFunction(__s3local0.checkMonuments), __s3local0.bindFunction(__s3local0.checkLaboratories)];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._scrollComponent = new __dep_export_ModernTextScrollComponent.ModernTextScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.subLayerDisp).addVisualElements([__s3local0.subLayerDisp.bg_slider]).addMouseWheelElements([__s3local0.subLayerDisp]), __s3local0.subLayerDisp.txt_description);
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_name"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_descriptionTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_description"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_language, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_allianceLanguage_name"));
    __s3local0.itxt_allianceName = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_allianceName.autoFitToBounds = true;
    __s3local0.itxt_allianceLanguage = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_allianceLanguage.txt_selectedLanguage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.subLayerDisp.btn_quitAllance.toolTipText = "dialog_alliance_quitAlliance";
    __s3local0.subLayerDisp.btnChangeAllianceSymbol.toolTipText = "dialog_alliance_changeAllianceCrest_tooltip";
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.btn_editName, __s3local0.subLayerDisp.btn_editDescription, __s3local0.subLayerDisp.btn_quitAllance, __s3local0.subLayerDisp.btn_mailToAll, __s3local0.subLayerDisp.btnChangeAllianceSymbol, __s3local0.subLayerDisp.btn_allianceLanguage], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogManagement, __s1param0);
  CastleAllianceDialogManagement.prototype.onMouseUp = function (__s5param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      switch (__s5param0.target) {
        case this.subLayerDisp.btn_editName:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNameAllianceDialog.CastleNameAllianceDialog, new __dep_export_CastleNameAllianceDialogProperties.CastleNameAllianceDialogProperties(this._params[0]));
          break;
        case this.subLayerDisp.btn_editDescription:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChangeDescriptionDialog.CastleChangeDescriptionDialog, new __dep_export_CastleChangeDescriptionDialogPrpoerties.CastleChangeDescriptionDialogPrpoerties(this._params[0]));
          break;
        case this.subLayerDisp.btn_quitAllance:
          this.onClickQuitAlliance();
          break;
        case this.subLayerDisp.btn_mailToAll:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceMessageToAllDialog.CastleAllianceMessageToAllDialog, new __dep_export_CastleAllianceMessageToallDialogProperties.CastleAllianceMessageToallDialogProperties(this._params[0]));
          break;
        case this.subLayerDisp.btnChangeAllianceSymbol:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceCrestCreationDialog.AllianceCrestCreationDialog, new __dep_export_CastleAllianceMessageToallDialogProperties.CastleAllianceMessageToallDialogProperties(this._params[0]));
          break;
        case this.subLayerDisp.btn_allianceLanguage:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceLanguageSelectionDialog.AllianceLanguageSelectionDialog, new __dep_export_AllianceLanguageSelectionDialogProperties.AllianceLanguageSelectionDialogProperties(this._params[0].allianceLanguage, this.bindFunction(this.onLanguageSelect)));
      }
    }
  };
  CastleAllianceDialogManagement.prototype.onLanguageSelect = function (__s9param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangeAllianceLanguageVO.C2SChangeAllianceLanguageVO(__s9param0));
  };
  CastleAllianceDialogManagement.prototype.onClickQuitAlliance = function () {
    this.warning = 0;
    this.onNextQuitAllianceWarning();
  };
  CastleAllianceDialogManagement.prototype.onNextQuitAllianceWarning = function (__s13param0 = null) {
    var __s13local0 = this.warning++;
    if (__s13local0 < this.quitAllianceWarnings.length) {
      if (!this.quitAllianceWarnings[__s13local0]()) {
        this.onNextQuitAllianceWarning();
      }
    } else {
      this.quitAlliance();
    }
  };
  CastleAllianceDialogManagement.prototype.showQuitAllianceWarning = function (__s18param0, __s18param1 = "dialog_alliance_quitTournament") {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoBiggerDialog.ModernYesNoBiggerDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_2.Localize.text(__s18param1), __dep_exact_92d05af59ee2ff30_2.Localize.text(__s18param0), this.bindFunction(this.onNextQuitAllianceWarning)));
  };
  CastleAllianceDialogManagement.prototype.firstQuitAllianceWarning = function () {
    this.showQuitAllianceWarning("dialog_alliance_quitAlliance_copy", "dialog_alliance_quitAlliance");
    return true;
  };
  CastleAllianceDialogManagement.prototype.checkKingsTowerOwnership = function () {
    return __dep_export_CastleModel.CastleModel.userData.kingstowerList.completeList.length > 0 && (this.showQuitAllianceWarning("dialog_quitAlliance_kingstower"), true);
  };
  CastleAllianceDialogManagement.prototype.checkCapitalAllianceOwnership = function () {
    if (__dep_export_CastleModel.CastleModel.userData.castleList.getCapital() != null) {
      this.showQuitAllianceWarning("alert_leaveAlliance_capitalLost");
      return true;
    } else {
      return !!__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.landmarksList.hasCapital && (this.showQuitAllianceWarning("alert_leaveAlliance_capitalUnits"), true);
    }
  };
  CastleAllianceDialogManagement.prototype.checkAlliTournament = function () {
    return (!!__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT) || !!__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TOURNAMENT)) && (this.showQuitAllianceWarning("dialog_allaince_quitTournament_copy"), true);
  };
  CastleAllianceDialogManagement.prototype.checkMonuments = function () {
    return __dep_export_CastleModel.CastleModel.userData.monumentList.amount > 0 && (this.showQuitAllianceWarning("dialog_quitAlliance_monument"), true);
  };
  CastleAllianceDialogManagement.prototype.checkLaboratories = function () {
    return __dep_export_CastleModel.CastleModel.userData.laboratoryList.amount > 0 && (this.showQuitAllianceWarning("dialog_quitAlliance_laboratory"), true);
  };
  CastleAllianceDialogManagement.prototype.quitAlliance = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceQuitVO.C2SAllianceQuitVO());
    this.layoutManager.hideAllDialogs();
  };
  CastleAllianceDialogManagement.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_allianceManagement"));
  };
  CastleAllianceDialogManagement.prototype.show = function (__s38param0) {
    this._scrollComponent.onShow();
    __s1param0.prototype.show.call(this, __s38param0);
    this.itxt_allianceName.textContentVO.stringValue = this.allianceInfoVO.allianceName;
    this.itxt_allianceLanguage.textContentVO.textId = this.allianceInfoVO.allianceLanguage ? "language_native_" + this.allianceInfoVO.allianceLanguage : "dialog_allLanguages_desc";
    this._scrollComponent.setText(__dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(this.allianceInfoVO.allianceDescription));
    this._scrollComponent.scrollToStart();
    this.subLayerDisp.btnChangeAllianceSymbol.toolTipText = "dialog_alliance_changeAllianceCrest_tooltip";
    this.initButtons();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btnChangeAllianceSymbol, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_quitAllance, __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_quitAllance) && !__dep_export_ABGHelper.ABGHelper.isOnABGServer);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_editName, __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_editName) && !__dep_export_ABGHelper.ABGHelper.isOnABGServer);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_allianceLanguage, __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_allianceLanguage) && !__dep_export_ABGHelper.ABGHelper.isOnABGServer);
    if (this.subLayerDisp.btn_allianceLanguage.cacheCanvas) {
      this.subLayerDisp.btn_allianceLanguage.updateCache();
    }
    this.controller.addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateRestrictions));
    this.updateRestrictions();
  };
  CastleAllianceDialogManagement.prototype.hide = function () {
    this._scrollComponent.onHide();
    this.controller.removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateRestrictions));
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceDialogManagement.prototype.updateRestrictions = function (__s43param0 = null) {
    var __s43local0 = this.currentSentMessageToday >= this.limitSendMaxToday;
    var __s43local1 = !__dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff_1.AllianceConst.RIGHT_NEWSLETTER);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_mailToAll, !__s43local0 && !__s43local1);
    this.subLayerDisp.btn_mailToAll.toolTipText = __s43local1 ? "dialog_alliance_rankToLow" : __s43local0 ? "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip" : "dialog_alliance_mailToAll";
  };
  Object.defineProperty(CastleAllianceDialogManagement.prototype, "messageRestriction", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.messageData.getMessageRestrictionVOByMessageType(__dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogManagement.prototype, "currentSentMessageToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.currentPlayerAmount;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogManagement.prototype, "limitSendMaxToday", {
    get: function () {
      if (this.messageRestriction) {
        return this.messageRestriction.dailyLimit;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogManagement.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_editName, __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff_1.AllianceConst.RIGHT_RENAME));
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_editName)) {
      this.subLayerDisp.btn_editName.toolTipText = "dialog_alliance_editName";
    } else {
      this.subLayerDisp.btn_editName.toolTipText = "dialog_alliance_rankToLow";
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_editDescription, __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff_1.AllianceConst.RIGHT_DESCRIPTION));
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_editDescription)) {
      this.subLayerDisp.btn_editDescription.toolTipText = "dialog_alliance_editDescription";
    } else {
      this.subLayerDisp.btn_editDescription.toolTipText = "dialog_alliance_rankToLow";
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_allianceLanguage, __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff_1.AllianceConst.RIGHT_CHANGE_LANGUAGE));
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_allianceLanguage)) {
      this.subLayerDisp.btn_allianceLanguage.toolTipText = "selectlanguage";
    } else {
      this.subLayerDisp.btn_allianceLanguage.toolTipText = "dialog_alliance_rankToLow";
    }
  };
  Object.defineProperty(CastleAllianceDialogManagement.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceDialogManagement;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceDialogManagement = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AllianceCrestCreationDialog = require("gge-module:export_AllianceCrestCreationDialog");
var __dep_export_CastleAllianceMessageToAllDialog = require("gge-module:export_CastleAllianceMessageToAllDialog");
var __dep_export_CastleChangeDescriptionDialog = require("gge-module:export_CastleChangeDescriptionDialog");
var __dep_export_CastleNameAllianceDialog = require("gge-module:export_CastleNameAllianceDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernTextScrollComponent = require("gge-module:export_ModernTextScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_AllianceLanguageSelectionDialogProperties = require("gge-module:export_AllianceLanguageSelectionDialogProperties");
var __dep_export_AllianceLanguageSelectionDialog = require("gge-module:export_AllianceLanguageSelectionDialog");
var __dep_export_C2SChangeAllianceLanguageVO = require("gge-module:export_C2SChangeAllianceLanguageVO");
var __dep_export_ModernYesNoBiggerDialog = require("gge-module:export_ModernYesNoBiggerDialog");
