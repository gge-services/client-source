Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceChangeDiplomacyVO = require("gge-module:export_C2SAllianceChangeDiplomacyVO");
var __dep_export_C2SAllianceRefuseDiplomacyVO = require("gge-module:export_C2SAllianceRefuseDiplomacyVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTimedOKCharacterYesNoOKDialogProperties = require("gge-module:export_CastleTimedOKCharacterYesNoOKDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleReceivedPeaceOfferDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleReceivedPeaceOfferDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleReceivedPeaceOfferDialog, __s1param0);
  CastleReceivedPeaceOfferDialog.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_accept, this.dialogDisp.btn_decline]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_TITLE));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_decline.txt_btntxt, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_DECLINE_OFFER));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_accept.txt_btntxt, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPT_OFFER));
  };
  CastleReceivedPeaceOfferDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_accept:
        var __s7local0;
        __s7local0 = this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded > 0 ? __dep_exact_92d05af59ee2ff30_1.Localize.text(this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_ACCEPT_DEMAND_COPY : CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_ACCEPT_OFFER_COPY, [this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded, this.dialogProperties.peaceOfferVO.opposingAllianceName]) : __dep_exact_92d05af59ee2ff30_1.Localize.text(CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_NO_TRIBUTE_COPY);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTimedOKCharacterYesNoOKDialog.CastleTimedOKCharacterYesNoOKDialog, new __dep_export_CastleTimedOKCharacterYesNoOKDialogProperties.CastleTimedOKCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __s7local0, 4, this.bindFunction(this.onAcceptConfirmed), this.bindFunction(this.onAcceptRegret), true, null, 1));
        break;
      case this.dialogDisp.btn_decline:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceRefuseDiplomacyVO.C2SAllianceRefuseDiplomacyVO(this.dialogProperties.peaceOfferVO.opposingAllianceID));
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.COMMON_HELP), __dep_exact_92d05af59ee2ff30_1.Localize.text(CastleReceivedPeaceOfferDialog.TEXT_ID_HELP_DIALOG_COPY));
    }
  };
  CastleReceivedPeaceOfferDialog.prototype.onAcceptRegret = function (__s10param0 = null) {};
  CastleReceivedPeaceOfferDialog.prototype.onAcceptConfirmed = function (__s12param0 = null) {
    var __s12local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.peaceOfferVO.isDemanded ? -this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded : this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDiplomacyVO.C2SAllianceChangeDiplomacyVO(this.dialogProperties.peaceOfferVO.opposingAllianceID, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL, __s12local0));
    this.hide();
  };
  CastleReceivedPeaceOfferDialog.prototype.showLoaded = function (__s14param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s14param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onPeaceOfferTimerUpdate));
    this._acceptDeadline = this.dialogProperties.peaceOfferVO.endTimestamp;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_COPY, [this.dialogProperties.peaceOfferVO.opposingAllianceName, __dep_exact_92d05af59ee2ff30_1.Localize.datetime(this._acceptDeadline, __dep_exact_92d05af59ee2ff30.DateTimeStyle.LONG, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT)]));
    var __s14local0 = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_CONDITIONS_DEMAND : CastleReceivedPeaceOfferDialog.TEXT_ID_CONDITIONS_OFFER;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_conditions, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s14local0, [this.dialogProperties.peaceOfferVO.opposingAllianceName]));
    this.dialogProperties.peaceOfferVO.isDemanded;
    var __s14local1 = CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPT_OFFER;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_accept.txt_btntxt, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s14local1));
    var __s14local2 = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_DEMANDED_TRIBUTE : CastleReceivedPeaceOfferDialog.TEXT_ID_OFFERED_TRIBUTE;
    this.textFieldManager.registerTextField(this.dialogDisp.tribute, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s14local2));
    var __s14local3 = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_TRIBUTE_DEMANDED : CastleReceivedPeaceOfferDialog.TEXT_ID_TRIBUTE_OFFERED;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_demand_or_offer, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s14local3));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_acceptanceTime, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPTANCE_TIME, [__dep_exact_92d05af59ee2ff30_1.Localize.datetime(this._acceptDeadline, __dep_exact_92d05af59ee2ff30.DateTimeStyle.LONG, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT)]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_tribute.txt_tributepercentage, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_percentage", [this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded]));
    var __s14local4 = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_PERCENTAGE_OFFERED : CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_PERCENTAGE_DEMANDED;
    this.dialogDisp.mc_tribute.toolTipText = __dep_exact_92d05af59ee2ff30_1.Localize.text(__s14local4);
    this.dialogDisp.mc_demand_or_offer.toolTipText = this.dialogProperties.peaceOfferVO.isDemanded ? CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_DEMAND : CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_OFFERED;
    this.dialogDisp.mc_tribute.mouseChildren = false;
    this.dialogDisp.mc_demand_or_offer.gotoAndStop(this.dialogProperties.peaceOfferVO.isDemanded ? 1 : 2);
    this.disableButtonsForSeconds([this.dialogDisp.btn_accept, this.dialogDisp.btn_decline]);
  };
  CastleReceivedPeaceOfferDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onPeaceOfferTimerUpdate));
  };
  CastleReceivedPeaceOfferDialog.prototype.onPeaceOfferTimerUpdate = function (__s18param0) {
    if (this.dialogProperties.peaceOfferVO.remainingTimeInSeconds <= 0) {
      this.hide();
    }
  };
  Object.defineProperty(CastleReceivedPeaceOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleReceivedPeaceOfferDialog.__initialize_static_members = function () {
    CastleReceivedPeaceOfferDialog.NAME = "CastleReceivedPeaceOffer";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TITLE = "dialog_allianceDiplomacy_peaceOffer_title";
    CastleReceivedPeaceOfferDialog.TEXT_ID_COPY = "message_peaceOffer_copy";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONDITIONS_OFFER = "dialog_allianceDiplomacy_peaceOffer_receiveTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONDITIONS_DEMAND = "dialog_allianceDiplomacy_peaceOffer_payTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TRIBUTE_OFFERED = "dialog_allianceDiplomacy_peaceOffer_tributeOffered";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TRIBUTE_DEMANDED = "dialog_allianceDiplomacy_peaceOffer_tributeDemanded";
    CastleReceivedPeaceOfferDialog.TEXT_ID_OFFERED_TRIBUTE = "dialog_allianceDiplomacy_peaceOffer_offeredTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_DEMANDED_TRIBUTE = "dialog_allianceDiplomacy_peaceOffer_demandedTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPTANCE_TIME = "dialog_allianceDiplomacy_peaceOffer_deadline";
    CastleReceivedPeaceOfferDialog.TEXT_ID_DECLINE_OFFER = "dialog_allianceDiplomacy_peaceOffer_rejectOffer";
    CastleReceivedPeaceOfferDialog.TEXT_ID_ACCEPT_OFFER = "dialog_allianceDiplomacy_peaceOffer_acceptOffer";
    CastleReceivedPeaceOfferDialog.TEXT_ID_HELP_DIALOG_COPY = "help_diplomacy_incomingPeaceOffer";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_ACCEPT_DEMAND_COPY = "dialog_allianceDiplomacy_peaceOffer_confirm_payTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_ACCEPT_OFFER_COPY = "dialog_allianceDiplomacy_peaceOffer_confirm_receiveTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_CONFIRM_NO_TRIBUTE_COPY = "dialog_allianceDiplomacy_peaceOffer_confirm_noTribute";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_DEMAND = "dialog_allianceDiplomacy_peaceOffer_tributeDemanded_tooltip";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_OFFERED = "dialog_allianceDiplomacy_peaceOffer_tributeOffered_tooltip";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_PERCENTAGE_OFFERED = "dialog_allianceDiplomacy_peaceOffer_offeredTribute_tooltip";
    CastleReceivedPeaceOfferDialog.TEXT_ID_TOOLTIP_TRIBUTE_PERCENTAGE_DEMANDED = "dialog_allianceDiplomacy_peaceOffer_demandedTribute_tooltip";
  };
  return CastleReceivedPeaceOfferDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleReceivedPeaceOfferDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTimedOKCharacterYesNoOKDialog = require("gge-module:export_CastleTimedOKCharacterYesNoOKDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
