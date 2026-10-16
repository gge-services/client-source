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
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SAllianceChangeDiplomacyVO = require("gge-module:export_C2SAllianceChangeDiplomacyVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTimedOKCharacterYesNoOKDialogProperties = require("gge-module:export_CastleTimedOKCharacterYesNoOKDialogProperties");
var __dep_export_CastleTributeValueChangerController = require("gge-module:export_CastleTributeValueChangerController");
var __s0local0 = function (__s1param0) {
  function CastleSuggestPeaceDialog() {
    var __s3local0 = this;
    __s3local0._numberOfDaysToAccept = __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME;
    __s3local0._currentTributePercentage = 0;
    __s3local0._isDemanding = true;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSuggestPeaceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSuggestPeaceDialog, __s1param0);
  CastleSuggestPeaceDialog.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_demand, this.dialogDisp.btn_offer, this.dialogDisp.btn_less, this.dialogDisp.btn_more]);
  };
  CastleSuggestPeaceDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._itxt_tributeDemanded = this.textFieldManager.registerTextField(this.dialogDisp.infotxt_demand.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleSuggestPeaceDialog.demandTextId));
    this._itxt_tributeOffered = this.textFieldManager.registerTextField(this.dialogDisp.infotxt_offer.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleSuggestPeaceDialog.offerTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_acceptanceTime, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleSuggestPeaceDialog.acceptanceTextId, [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._numberOfDaysToAccept)]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleSuggestPeaceDialog.titleTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleSuggestPeaceDialog.copyTextId, [new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.peaceOfferVO.opposingAllianceName)]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_ok, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(CastleSuggestPeaceDialog.sendOfferTextId));
    this._itxt_tributePercentage = this.textFieldManager.registerTextField(this.dialogDisp.mc_tribute.txt_tributepercentage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage", [50]));
    this._tributeSliderValueController = new __dep_export_CastleTributeValueChangerController.CastleTributeValueChangerController(CastleSuggestPeaceDialog.maximumTributePercentage / 2, CastleSuggestPeaceDialog.minimumTributePercentage, CastleSuggestPeaceDialog.maximumTributePercentage, CastleSuggestPeaceDialog.sliderTooltipTextId);
    this._tributeSliderValueController.addButtons(this.dialogDisp, CastleSuggestPeaceDialog.sliderPlusMinusButtonIncrement);
    this._tributeSliderValueController.addSlider(this.dialogDisp.sliderContainer);
    this._tributeSliderValueController.valueUpdatedSignal.add(this.bindFunction(this.onTributeChange));
    this.switchMarkedAsDemanding(this.dialogProperties.peaceOfferVO.isDemanded);
    this._tributeSliderValueController.setValue(this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleSuggestPeaceDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.confirmSend();
        break;
      case this.dialogDisp.btn_demand:
        this.switchMarkedAsDemanding(true);
        break;
      case this.dialogDisp.btn_offer:
        this.switchMarkedAsDemanding(false);
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.COMMON_HELP), __dep_exact_92d05af59ee2ff30.Localize.text(CastleSuggestPeaceDialog.helpDialogCopyTextID));
    }
  };
  CastleSuggestPeaceDialog.prototype.confirmSend = function () {
    var __s12local0 = __dep_exact_92d05af59ee2ff30.Localize.text(this._isDemanding ? CastleSuggestPeaceDialog.confirmDemandCopyTextID : CastleSuggestPeaceDialog.confirmOfferCopyTextID, [this._currentTributePercentage]);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTimedOKCharacterYesNoOKDialog.CastleTimedOKCharacterYesNoOKDialog, new __dep_export_CastleTimedOKCharacterYesNoOKDialogProperties.CastleTimedOKCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __s12local0, 4, this.bindFunction(this.onAcceptConfirmed), this.bindFunction(this.onAcceptRegret), true, null, 1));
  };
  CastleSuggestPeaceDialog.prototype.onAcceptRegret = function (__s14param0 = null) {};
  CastleSuggestPeaceDialog.prototype.onAcceptConfirmed = function (__s16param0 = null) {
    this.sendTermsOfPeace();
    this.hide();
  };
  CastleSuggestPeaceDialog.prototype.sendTermsOfPeace = function () {
    this.dialogProperties.peaceOfferVO.isDemanded = this._isDemanding;
    this.dialogProperties.peaceOfferVO.percentageOfferedOrDemanded = this._currentTributePercentage;
    var __s18local0 = __dep_exact_f855840627e6e145.int(this._isDemanding ? -1 : 1);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceChangeDiplomacyVO.C2SAllianceChangeDiplomacyVO(this.dialogProperties.peaceOfferVO.opposingAllianceID, __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL, this._currentTributePercentage * __s18local0));
  };
  CastleSuggestPeaceDialog.prototype.switchMarkedAsDemanding = function (__s20param0) {
    this._isDemanding = __s20param0;
    this.dialogDisp.btn_demand.gotoAndStop(this._isDemanding ? 2 : 1);
    this.dialogDisp.btn_demand.toolTipText = this._isDemanding ? CastleSuggestPeaceDialog.demandTooltipActiveTextId : CastleSuggestPeaceDialog.demandTooltipTextId;
    this.dialogDisp.infotxt_demand.gotoAndStop(this._isDemanding ? 2 : 1);
    this._itxt_tributeDemanded.color = this._isDemanding ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_DIRTY_RED : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.dialogDisp.btn_offer.gotoAndStop(this._isDemanding ? 1 : 2);
    this.dialogDisp.btn_offer.toolTipText = this._isDemanding ? CastleSuggestPeaceDialog.offerTooltipTextId : CastleSuggestPeaceDialog.offerTooltipActiveTextId;
    this.dialogDisp.infotxt_offer.gotoAndStop(this._isDemanding ? 1 : 2);
    this._itxt_tributeOffered.color = this._isDemanding ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.GENERIC_DIRTY_RED;
    this.dialogDisp.mc_tribute.toolTipText = this._isDemanding ? CastleSuggestPeaceDialog.percentageDemandedTooltipTextId : CastleSuggestPeaceDialog.percentageOfferedTooltipTextId;
    this.dialogDisp.mc_tribute.mouseChildren = false;
  };
  CastleSuggestPeaceDialog.prototype.onTributeChange = function () {
    this._currentTributePercentage = __dep_exact_f855840627e6e145.int(this._tributeSliderValueController.value);
    this._itxt_tributePercentage.text = __dep_exact_92d05af59ee2ff30.Localize.text("value_percentage", [this._currentTributePercentage]);
  };
  CastleSuggestPeaceDialog.prototype.hideLoaded = function (__s24param0 = null) {
    this._tributeSliderValueController.valueUpdatedSignal.remove(this.bindFunction(this.onTributeChange));
    this._tributeSliderValueController.dispose();
    __s1param0.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(CastleSuggestPeaceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSuggestPeaceDialog.__initialize_static_members = function () {
    CastleSuggestPeaceDialog.NAME = "CastleSuggestPeace";
    CastleSuggestPeaceDialog.sliderPlusMinusButtonIncrement = 5;
    CastleSuggestPeaceDialog.minimumTributePercentage = 0;
    CastleSuggestPeaceDialog.maximumTributePercentage = 50;
    CastleSuggestPeaceDialog.copyTextId = "dialog_allianceDiplomacy_offerPeace_copy";
    CastleSuggestPeaceDialog.titleTextId = "dialog_allianceDiplomacy_offerPeace_title";
    CastleSuggestPeaceDialog.acceptanceTextId = "dialog_allianceDiplomacy_offerPeace_timeLimit";
    CastleSuggestPeaceDialog.helpDialogCopyTextID = "help_diplomacy_peaceOffer";
    CastleSuggestPeaceDialog.demandTextId = "dialog_allianceDiplomacy_demandTribute";
    CastleSuggestPeaceDialog.offerTextId = "dialog_allianceDiplomacy_offerTribute";
    CastleSuggestPeaceDialog.demandTooltipTextId = "dialog_allianceDiplomacy_demandTribute_tooltip";
    CastleSuggestPeaceDialog.demandTooltipActiveTextId = "dialog_allianceDiplomacy_demandTribute_active_tooltip";
    CastleSuggestPeaceDialog.offerTooltipTextId = "dialog_allianceDiplomacy_offerTribute_tooltip";
    CastleSuggestPeaceDialog.offerTooltipActiveTextId = "dialog_allianceDiplomacy_offerTribute_active_tooltip";
    CastleSuggestPeaceDialog.sendOfferTextId = "dialog_allianceDiplomacy_offerPeace_sendOffer";
    CastleSuggestPeaceDialog.confirmOfferCopyTextID = "dialog_allianceDiplomacy_offerPeace_confirm_offerTribute";
    CastleSuggestPeaceDialog.confirmDemandCopyTextID = "dialog_allianceDiplomacy_offerPeace_confirm_demandTribute";
    CastleSuggestPeaceDialog.confirmNoTributeCopyTextID = "dialog_allianceDiplomacy_peaceOffer_confirm_noTribute";
    CastleSuggestPeaceDialog.sliderTooltipTextId = "dialog_allianceDiplomacy_offerPeace_slider_tooltip";
    CastleSuggestPeaceDialog.percentageDemandedTooltipTextId = "dialog_allianceDiplomacy_peaceOffer_demandedTribute_tooltip";
    CastleSuggestPeaceDialog.percentageOfferedTooltipTextId = "dialog_allianceDiplomacy_peaceOffer_offeredTribute_tooltip";
  };
  return CastleSuggestPeaceDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSuggestPeaceDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTimedOKCharacterYesNoOKDialog = require("gge-module:export_CastleTimedOKCharacterYesNoOKDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
