Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_PPDDExternalPart = require("gge-module:export_PPDDExternalPart");
var __dep_export_TopEyeCatcherPPDDExternal = require("gge-module:export_TopEyeCatcherPPDDExternal");
var __dep_export_CastlePrivateBestsellerShopItem = require("gge-module:export_CastlePrivateBestsellerShopItem");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __s0local0 = function (__s1param0) {
  function CastlePrivateBestsellerShopDialog() {
    var __s3local0 = __s1param0.call(this, CastlePrivateBestsellerShopDialog.NAME) || this;
    __s3local0.subOfferItems = [];
    __s3local0._bestsellerSubOfferID = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateBestsellerShopDialog, __s1param0);
  CastlePrivateBestsellerShopDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_privateBestsellerShop_title")));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.dialogDisp.mc_timer.toolTipText = "resttime";
    this.dialogDisp.mc_timer.mouseChildren = false;
    this.bestsellerSubOfferItem = new __dep_export_CastlePrivateBestsellerShopItem.CastlePrivateBestsellerShopItem(this.dialogDisp.mc_bestseller);
    var __s5local0 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, this.dialogDisp.mc_list.mask.height, true);
    var __s5local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addSliderBackground(this.dialogDisp.mc_slider.bg_cached).addMouseWheelElements([this.dialogDisp]);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s5local1, __s5local0);
  };
  CastlePrivateBestsellerShopDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    new __dep_export_PPDDExternalPart.PPDDExternalPart(this.dialogDisp.mc_teaser, this.teaserImageID);
    new __dep_export_TopEyeCatcherPPDDExternal.TopEyeCatcherPPDDExternal(this.dialogDisp.mc_topEyeCatcher, this.topEyeCatcherID);
    this.showSubOffers();
    this.dialogDisp.mc_timer.visible = !this.dialogProperties.offerVO.hasInfiniteTime;
    if (!this.dialogProperties.offerVO.hasInfiniteTime) {
      this.onTimerUpdate(null);
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onSubOfferStateChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onSubOfferStateChanged));
  };
  CastlePrivateBestsellerShopDialog.prototype.hideLoaded = function (__s10param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
    this.clearSubOfferItems();
    if (this.bestsellerSubOfferItem) {
      this.bestsellerSubOfferItem.onHide();
    }
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onSubOfferStateChanged));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onSubOfferStateChanged));
  };
  CastlePrivateBestsellerShopDialog.prototype.showSubOffers = function (__s13param0 = true) {
    this.validateBestsellerSubOffer();
    this.fillBestsellerItem();
    this.fillListItems();
    var __s13local0 = Math.max(0, this.dialogDisp.mc_list.height - CastlePrivateBestsellerShopDialog.MASK_HEIGHT);
    var __s13local1 = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, __s13local0, CastlePrivateBestsellerShopDialog.ROW_HEIGHT, CastlePrivateBestsellerShopDialog.ROW_HEIGHT / 2);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    if (__s13param0) {
      this._scrollComponent.scrollToValue(0);
    } else {
      this._scrollComponent.scrollToValue(__s13local1);
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.validateBestsellerSubOffer = function () {
    this._bestsellerSubOfferID = 0;
    if (this.dialogCustomization) {
      if (this.validateOffer(this.dialogCustomization.BSOID)) {
        this._bestsellerSubOfferID = this.dialogCustomization.BSOID;
      } else {
        for (var __s17local0 = 0, __s17local1 = this.subOfferIDs; __s17local0 < __s17local1.length; __s17local0++) {
          var __s17local2 = __s17local1[__s17local0];
          if (this.validateOffer(__s17local2)) {
            this._bestsellerSubOfferID = __s17local2;
            break;
          }
        }
      }
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.fillBestsellerItem = function () {
    if (this._bestsellerSubOfferID > 0) {
      this.bestsellerSubOfferItem.showOffer(this._bestsellerSubOfferID, this.dialogProperties.offerVO.id);
      this.bestsellerSubOfferItem.setVisibility(true);
      this.bestsellerSubOfferItem.onShow();
    } else {
      this.bestsellerSubOfferItem.setVisibility(false);
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.fillListItems = function () {
    this.clearSubOfferItems();
    var __s29local0 = 0;
    var __s29local1 = __dep_exact_81dacdf05bd32292.getDefinitionByName(CastlePrivateBestsellerShopDialog.ITEM_NAME);
    for (var __s29local2 = 0, __s29local3 = this.subOfferIDs; __s29local2 < __s29local3.length; __s29local2++) {
      var __s29local4 = __s29local3[__s29local2];
      if (__s29local4 != this._bestsellerSubOfferID && this.validateOffer(__s29local4)) {
        var __s29local5 = new __s29local1();
        var __s29local6 = new __dep_export_CastlePrivateBestsellerShopItem.CastlePrivateBestsellerShopItem(__s29local5);
        __s29local5.x = Math.floor(__s29local0 % CastlePrivateBestsellerShopDialog.ITEMS_PER_ROW) * (__s29local5.width + CastlePrivateBestsellerShopDialog.ITEM_GAP);
        __s29local5.y = Math.floor(__s29local0 / CastlePrivateBestsellerShopDialog.ITEMS_PER_ROW) * (__s29local5.height + CastlePrivateBestsellerShopDialog.ITEM_GAP);
        __s29local6.showOffer(__s29local4, this.dialogProperties.offerVO.id);
        __s29local6.onShow();
        this.subOfferItems.push(__s29local6);
        this.dialogDisp.mc_list.addChild(__s29local5);
        __s29local0++;
      }
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.validateOffer = function (__s34param0) {
    return __dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(__s34param0) && __dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(__s34param0).offerState != __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.PRECONDITION;
  };
  CastlePrivateBestsellerShopDialog.prototype.onScrollValueChange = function () {
    this.dialogDisp.mc_list.y = CastlePrivateBestsellerShopDialog.LIST_START_Y - this._scrollComponent.currentValue;
  };
  CastlePrivateBestsellerShopDialog.prototype.clearSubOfferItems = function () {
    for (var __s38local0 = 0, __s38local1 = this.subOfferItems; __s38local0 < __s38local1.length; __s38local0++) {
      var __s38local2 = __s38local1[__s38local0];
      __s38local2.onHide();
      __s38local2.destroy();
    }
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list);
    this.dialogDisp.mc_list.y = CastlePrivateBestsellerShopDialog.LIST_START_Y;
    this.subOfferItems = [];
  };
  CastlePrivateBestsellerShopDialog.prototype.onTimerUpdate = function (__s42param0) {
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingSeconds);
  };
  CastlePrivateBestsellerShopDialog.prototype.onOfferRemoved = function (__s44param0) {
    if (__s44param0.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.onSubOfferStateChanged = function (__s47param0) {
    if (this.subOfferIDs.indexOf(__s47param0.offerVO.id) > -1) {
      this.showSubOffers(false);
    }
  };
  CastlePrivateBestsellerShopDialog.prototype.onClick = function (__s50param0) {
    __s1param0.prototype.onClick.call(this, __s50param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s50param0.target)) {
      switch (__s50param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "subOfferIDs", {
    get: function () {
      if (this.dialogCustomization) {
        return this.dialogCustomization.OIDS;
      } else {
        return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "teaserImageID", {
    get: function () {
      return "PivatePrimeDayDynamicDialog_TeaserImage_" + (this.dialogCustomization ? this.dialogCustomization.TSID : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "topEyeCatcherID", {
    get: function () {
      return String(this.dialogCustomization ? this.dialogCustomization.TEID : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "dialogCustomization", {
    get: function () {
      var __s62local0 = this.dialogProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
      if (__s62local0) {
        return __s62local0.dialogCustomization;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateBestsellerShopDialog.NAME = "CastlePrivateBestsellerShopOfferExternal";
  CastlePrivateBestsellerShopDialog.OFFER_NAME = "BestsellerShopDialog";
  CastlePrivateBestsellerShopDialog.ITEM_NAME = "CastlePrivateBestsellerShopOfferExternal_Item";
  CastlePrivateBestsellerShopDialog.LIST_START_Y = 66;
  CastlePrivateBestsellerShopDialog.MASK_HEIGHT = 292;
  CastlePrivateBestsellerShopDialog.ROW_HEIGHT = 146;
  CastlePrivateBestsellerShopDialog.ITEM_GAP = 4;
  CastlePrivateBestsellerShopDialog.ITEMS_PER_ROW = 3;
  return CastlePrivateBestsellerShopDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePrivateBestsellerShopDialog = __s0local0;
