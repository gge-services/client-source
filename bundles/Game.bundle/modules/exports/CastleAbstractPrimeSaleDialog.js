Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAbstractPrimeSaleDialog() {
    var __s3local0 = __s1param0.call(this, CastleAbstractPrimeSaleDialog.NAME) || this;
    CastleAbstractPrimeSaleDialog.initCharacterOffsets();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAbstractPrimeSaleDialog, __s1param0);
  CastleAbstractPrimeSaleDialog.initCharacterOffsets = function () {
    if (!CastleAbstractPrimeSaleDialog.characterOffsets) {
      CastleAbstractPrimeSaleDialog.characterOffsets = new Map();
      CastleAbstractPrimeSaleDialog.characterOffsets.set(__dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_GIFT_TRADER, new __s0local1(10, -40));
      CastleAbstractPrimeSaleDialog.characterOffsets.set(__dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MERCHANT, new __s0local1(0, -35, 0.9));
      CastleAbstractPrimeSaleDialog.characterOffsets.set(__dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SEA_QUEEN, new __s0local1(40));
      CastleAbstractPrimeSaleDialog.characterOffsets.set(__dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MEDICUS, new __s0local1(0, 20, 1.37));
      CastleAbstractPrimeSaleDialog.characterOffsets.set(__dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_RELIC_ENCHANTER_PRIME_SALE, new __s0local1(16, 40));
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.initLoaded = function (__s8param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s8param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.mc_package_container.btn_info, this.dialogDisp.btn_show_me]);
  };
  CastleAbstractPrimeSaleDialog.prototype.showLoaded = function (__s10param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s10param0);
    this.dialogDisp.mc_limited_offer.gotoAndStop(1);
    this.dialogDisp.mc_skip_discount.visible = false;
    this.dialogDisp.mc_buildingClip.visible = false;
    this.dialogDisp.mc_package_container.visible = false;
    this.dialogDisp.mc_medikus.visible = false;
    this.dialogDisp.mc_booster_container.visible = false;
    this.dialogDisp.mc_booster_container.technicus_icon.visible = false;
    this.dialogDisp.mc_booster_container.relicus_icon.visible = false;
    this.dialogDisp.mc_stamp_offer.visible = false;
    this.dialogDisp.prime_sale_list.visible = false;
    this.dialogDisp.btn_show_me.visible = false;
    this.updateCharacter();
    this.setRemainingTime();
  };
  CastleAbstractPrimeSaleDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    if (this.isEvent()) {
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    }
    if (this.isOffer()) {
      __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onRemoveOffer));
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    if (this.isEvent()) {
      __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    }
    if (this.isOffer()) {
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onRemoveOffer));
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.setRemainingTime = function (__s20param0 = null) {
    var __s20local0 = this.getRemainingTime();
    if (__s20local0 <= 0) {
      this.hide();
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_offer_timeleft, this.timeToString(__s20local0));
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, __s20local0);
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.timeToString = function (__s24param0) {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_specialoffer_endTimer", [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s24param0)]);
  };
  CastleAbstractPrimeSaleDialog.prototype.onClick = function (__s26param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      switch (__s26param0.target) {
        case this.dialogDisp.btn_show_me:
        case this.dialogDisp.btn_ok:
          this.onOkButton();
          break;
        case this.dialogDisp.btn_close:
          this.onCloseButton();
          this.hide();
      }
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.setButtonCentered = function (__s30param0) {
    this.dialogDisp.btn_ok.x = __s30param0 ? CastleAbstractPrimeSaleDialog.SHOW_ME_BTN_XPOS_CENTERED : CastleAbstractPrimeSaleDialog.SHOW_ME_BTN_XPOS_ORIGINAL;
    this.dialogDisp.mc_cross.visible = this.dialogDisp.mc_old_costs.visible = this.dialogDisp.mc_costs.visible = !__s30param0;
  };
  CastleAbstractPrimeSaleDialog.prototype.getCharacterName = function () {
    return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARCHITECT;
  };
  CastleAbstractPrimeSaleDialog.prototype.updateCharacter = function () {
    var __s34local0 = this.getCharacterName();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_character);
    var __s34local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s34local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s34local0), null, 0, false);
    var __s34local2 = CastleAbstractPrimeSaleDialog.characterOffsets.get(__s34local0);
    if (__s34local2) {
      __s34local1.x = __s34local2.x;
      __s34local1.y = __s34local2.y;
      __s34local1.scaleX = __s34local2.scale;
      __s34local1.scaleY = __s34local2.scale;
    }
    var __s34local3 = this.bindFunction(function () {
      this.dialogDisp.mc_character.addChild(__s34local1.asDisplayObject());
      if (CastleAbstractPrimeSaleDialog._initialBoundsLeft == -1) {
        CastleAbstractPrimeSaleDialog._initialBoundsLeft = __dep_exact_f855840627e6e145.int(this.dispBounds.left);
      }
      this.dispBounds.left = CastleAbstractPrimeSaleDialog._initialBoundsLeft - ((__s34local1.width * __s34local1.scaleX >> 1) - this.dialogDisp.mc_character.x);
      this.updatePosition();
      this.updateBackground();
    });
    if (__s34local1.isLoaded) {
      __s34local3();
    } else {
      __s34local1.clipLoaded.addOnce(__s34local3);
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.onOkButton = function () {};
  CastleAbstractPrimeSaleDialog.prototype.onRemoveOffer = function (__s44param0) {};
  CastleAbstractPrimeSaleDialog.prototype.onRemoveSpecialEvent = function (__s46param0) {};
  CastleAbstractPrimeSaleDialog.prototype.getRemainingTime = function () {
    return 0;
  };
  Object.defineProperty(CastleAbstractPrimeSaleDialog.prototype, "isPrivateOffer", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties");
    },
    enumerable: true,
    configurable: true
  });
  CastleAbstractPrimeSaleDialog.prototype.isOffer = function () {
    return false;
  };
  CastleAbstractPrimeSaleDialog.prototype.isEvent = function () {
    return false;
  };
  CastleAbstractPrimeSaleDialog.prototype.onCloseButton = function () {};
  CastleAbstractPrimeSaleDialog.NAME = "CastlePrimeSaleDialogExternal_H";
  CastleAbstractPrimeSaleDialog.SPECIAL_PRICE = "dialog_privateOffer_whaleChest_newPrice";
  CastleAbstractPrimeSaleDialog.SAVE_COSTS = "dialog_primeday_primesale_saveCosts";
  CastleAbstractPrimeSaleDialog.SHOW_ME_BTN_XPOS_ORIGINAL = 426;
  CastleAbstractPrimeSaleDialog.SHOW_ME_BTN_XPOS_CENTERED = 311;
  CastleAbstractPrimeSaleDialog._initialBoundsLeft = -1;
  return CastleAbstractPrimeSaleDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAbstractPrimeSaleDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __s0local1 = function () {
  return function CharacterOffset(__s60param0 = 0, __s60param1 = 0, __s60param2 = 1) {
    this.x = 0;
    this.y = 0;
    this.scale = 0;
    this.x = __s60param0;
    this.y = __s60param1;
    this.scale = __s60param2;
  };
}();
