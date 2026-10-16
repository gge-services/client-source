Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastlePrimeSaleReviveAllDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeSaleReviveAllDialog, __s1param0);
  CastlePrimeSaleReviveAllDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.dialogDisp.mc_medikus.visible = true;
    this.setButtonCentered(true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_primeday_primesale_healAll_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOfferDeco_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_questInfo_showMe"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_medikus.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_hospital_reviveAllButton"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_primeday_primesale_saveCosts", [this.dialogProperties.eventVO.discount]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_percentOff.txt_percentOff, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.dialogProperties.eventVO.discount]));
  };
  CastlePrimeSaleReviveAllDialog.prototype.onOkButton = function () {
    this.showHowTo();
    this.hide();
  };
  CastlePrimeSaleReviveAllDialog.prototype.isEvent = function () {
    return true;
  };
  CastlePrimeSaleReviveAllDialog.prototype.showHowTo = function () {
    if (this.layoutManager.isInMyProperCastle) {
      this.showHospitalDialog();
    } else {
      var __s11local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      var __s11local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s11local0);
      __s11local1 ||= __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
      }
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinedCastle));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__s11local1.objectId, __s11local1.kingdomID));
    }
  };
  CastlePrimeSaleReviveAllDialog.prototype.onJoinedCastle = function (__s16param0 = null) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinedCastle));
    this.showHospitalDialog();
  };
  CastlePrimeSaleReviveAllDialog.prototype.showHospitalDialog = function () {
    if (__dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.HOSPITAL) || __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_HOSPITAL)) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL));
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_primeday_primesale_healAll_alert")));
    }
  };
  CastlePrimeSaleReviveAllDialog.prototype.getRemainingTime = function () {
    return __dep_exact_f855840627e6e145.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds);
  };
  CastlePrimeSaleReviveAllDialog.prototype.timeToString = function (__s24param0) {
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_primeday_specialoffer_endTimer", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s24param0)]);
  };
  CastlePrimeSaleReviveAllDialog.prototype.onRemoveSpecialEvent = function (__s26param0) {
    if (this.dialogProperties && this.dialogProperties.eventVO && __s26param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  CastlePrimeSaleReviveAllDialog.prototype.getCharacterName = function () {
    return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MEDICUS;
  };
  Object.defineProperty(CastlePrimeSaleReviveAllDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeSaleReviveAllDialog.__initialize_static_members = function () {
    CastlePrimeSaleReviveAllDialog.NAME = "CastlePrimeSalesReviveAll";
  };
  return CastlePrimeSaleReviveAllDialog;
}(require("gge-module:export_CastleAbstractPrimeSaleDialog").CastleAbstractPrimeSaleDialog);
exports.CastlePrimeSaleReviveAllDialog = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
