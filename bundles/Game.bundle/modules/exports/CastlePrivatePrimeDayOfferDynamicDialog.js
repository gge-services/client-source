Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SRedeemVoucherVO = require("gge-module:export_C2SRedeemVoucherVO");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_PPDDExternalPart = require("gge-module:export_PPDDExternalPart");
var __dep_export_SkinBotPPDDExternal = require("gge-module:export_SkinBotPPDDExternal");
var __dep_export_SkinTopPPDDExternal = require("gge-module:export_SkinTopPPDDExternal");
var __dep_export_TopEyeCatcherPPDDExternal = require("gge-module:export_TopEyeCatcherPPDDExternal");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastlePrivatePrimeDayOfferDynamicDialog() {
    var __s3local0 = this;
    __s3local0.startIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastlePrivatePrimeDayOfferDynamicDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivatePrimeDayOfferDynamicDialog, __s1param0);
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new __dep_export_SimplePopoverConfig.SimplePopoverConfig("StatusPopover"));
    this._requestTimer = new __dep_exact_81dacdf05bd32292_1.Timer(CastlePrivatePrimeDayOfferDynamicDialog.REQUEST_TIMEOUT, 1);
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_left, this.dialogDisp.btn_right]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_redeem, this.dialogDisp.btn_buy_free, this.dialogDisp.btn_addC2, this.dialogDisp.btn_buy], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.dialogDisp.btn_buy_free.mouseChildren = this.dialogDisp.btn_buy.mouseChildren = this.dialogDisp.btn_addC2.mouseChildren = this.dialogDisp.btn_redeem.mouseChildren = false;
    this.dialogDisp.btn_buy.visible = false;
    this.dialogDisp.btn_buy_free.visible = false;
    this.dialogDisp.btn_addC2.visible = false;
    this.dialogDisp.mc_progressbar.visible = false;
    this.dialogDisp.mc_voucherCode.visible = false;
    this.dialogDisp.btn_redeem.visible = false;
    this.startIndex = 0;
    if (this.dialogCustomization) {
      if (this.isChestOffer) {
        this.dialogDisp.btn_buy.visible = this.chestOfferCost.costC2 > 0;
        this.dialogDisp.btn_buy_free.visible = this.chestOfferCost.costC2 == 0;
        this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.chestOfferCost.costC2));
        this.textFieldManager.registerTextField(this.dialogDisp.btn_buy_free.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree"))));
      }
      if (this.isPrimeDayOffer && !this.isVoucherOffer) {
        this.dialogDisp.btn_addC2.visible = true;
        this.dialogDisp.mc_progressbar.visible = true;
        this.addGoldComp = new __dep_export_ButtonAddGoldComponent.ButtonAddGoldComponent(this.dialogDisp.btn_addC2);
        this.textFieldManager.registerTextField(this.dialogDisp.btn_addC2.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("xRubies", [this.dialogCustomization.RM.A]));
      }
      if (this.isVoucherOffer) {
        this.defaultInputText = __dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_voucherOffer_enterCode");
        this.dialogDisp.mc_voucherCode.visible = true;
        this.dialogDisp.btn_redeem.visible = true;
        this.textFieldManager.registerTextField(this.dialogDisp.btn_redeem.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_voucherOffer_redeemCode"));
        this.itxt_inputCode = this.textFieldManager.registerTextField(this.dialogDisp.mc_voucherCode.txt_code, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30_3.Localize.text("dialog_voucherOffer_enterCode")));
        this.itxt_inputCode.restrict = "A-Z a-z 0-9";
        this.itxt_inputCode.focusIn.add(this.bindFunction(this.onFocusIn));
        this.itxt_inputCode.focusOut.add(this.bindFunction(this.onFocusOut));
        this.itxt_inputCode.change.add(this.bindFunction(this.onTextInput));
        this.onTextInput(null);
      }
      new __dep_export_SkinBotPPDDExternal.SkinBotPPDDExternal(this.dialogDisp.mc_skin_bg, this.skinID, this.botSkinTexts, this.bindFunction(this.onClose));
      this.topSkinPart = new __dep_export_SkinTopPPDDExternal.SkinTopPPDDExternal(this.dialogDisp.mc_skin_top_left, this.skinID, this.dialogProperties.offerVO);
      new __dep_export_PPDDExternalPart.PPDDExternalPart(this.dialogDisp.mc_teaserImage, this.teaserImageID);
      new __dep_export_LeftRightEyeCatcherPPDDExternal.LeftRightEyeCatcherPPDDExternal(this.dialogDisp.mc_leftEyeCatcher, this.leftEyeCatcherID, this.leftEyeCatcherTexts, this.leftCurrencyEnum);
      new __dep_export_LeftRightEyeCatcherPPDDExternal.LeftRightEyeCatcherPPDDExternal(this.dialogDisp.mc_rightEyeCatcher, this.rightEyeCatcherID, this.rightEyeCatcherTexts, this.rightCurrencyEnum);
      new __dep_export_TopEyeCatcherPPDDExternal.TopEyeCatcherPPDDExternal(this.dialogDisp.mc_topEyeCatcher, this.topEyeCatcherID);
      this.showRewards();
      this.updateProgress();
      __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
      this._popoverComponent.onShow();
      __s1param0.prototype.removeEventListenerOnHide.call(this);
    } else {
      this.hide();
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onOfferUpdated = function (__s14param0) {
    if (__s14param0.offerVO.id == this.dialogProperties.offerVO.id) {
      this.updateProgress();
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.updateProgress = function () {
    if (this.isPrimeDayOffer) {
      this.dialogDisp.mc_progressbar.mc_bar.scaleX = this.primeDayQuestCondition.currentValue / this.primeDayQuestCondition.neededValue;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_progressbar.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("numbersXY", [this.primeDayQuestCondition.currentValue, this.primeDayQuestCondition.neededValue]));
    }
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "primeDayQuestCondition", {
    get: function () {
      return this.dialogProperties.offerVO.getQuestConditionByName(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.hideLoaded = function (__s22param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s22param0);
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
    this._popoverComponent.onHide();
    this._requestTimer.reset();
    if (this.itxt_inputCode) {
      this.itxt_inputCode.focusIn.remove(this.bindFunction(this.onFocusIn));
      this.itxt_inputCode.focusOut.remove(this.bindFunction(this.onFocusOut));
      this.itxt_inputCode.change.remove(this.bindFunction(this.onTextInput));
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onFocusIn = function (__s25param0) {
    if (this.itxt_inputCode.text == this.defaultInputText) {
      this.itxt_inputCode.clearText();
    }
    this.itxt_inputCode.setSelection(0, this.itxt_inputCode.text.length);
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onFocusOut = function (__s28param0) {
    if (this.itxt_inputCode.text == "") {
      this.itxt_inputCode.textContentVO.stringValue = this.defaultInputText;
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onTextInput = function (__s31param0) {
    if (this.itxt_inputCode.text.length > 0 && this.itxt_inputCode.text != this.defaultInputText) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_redeem, true);
      this.dialogDisp.btn_redeem.toolTipText = null;
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_redeem, false);
      this.dialogDisp.btn_redeem.toolTipText = "dialog_voucherOffer_redeemCode_tt";
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onOfferRemoved = function (__s35param0) {
    if (__s35param0.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.setHighLights = function () {
    for (var __s38local0 = 0; __s38local0 < CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN; __s38local0++) {
      if (this.activeRewardList && this.activeRewardList["mc_item" + __s38local0]) {
        this.activeRewardList["mc_item" + __s38local0].gotoAndStop(1);
      }
    }
    if (this.dialogCustomization.HL) {
      for (var __s38local1 = 0; __s38local1 < this.dialogCustomization.HL.length; __s38local1++) {
        var __s38local2 = __dep_exact_f855840627e6e145.int(this.dialogCustomization.HL[__s38local1]);
        if (__s38local2 >= this.startIndex && __s38local2 < this.startIndex + CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN) {
          __s38local2 = __dep_exact_f855840627e6e145.int(__s38local2 % CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN);
          if (this.activeRewardList["mc_item" + __s38local2]) {
            this.activeRewardList["mc_item" + __s38local2].gotoAndStop(2);
          }
        }
      }
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.showRewards = function () {
    var __s48local0;
    this.setHighLights();
    __s48local0 = this.listNormalVisible ? new __s0local1(53, 53) : new __s0local1(97, 97);
    this.dialogDisp.listNormal.visible = this.listNormalVisible;
    this.dialogDisp.list1.visible = this.list1Visible;
    this.dialogDisp.list2.visible = this.list2Visible;
    this.dialogDisp.list3.visible = this.list3Visible;
    var __s48local1 = new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.activeRewardList, "mc_item");
    __s48local1.addInfoBtns("btn_info", this.activeRewardList, true);
    var __s48local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, __s48local0);
    __s48local2.tooltip.showEquipmentCountdown = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, __s48local1, this.rewardsFiltered, __s48local2, this.bindFunction(this.afterRenderFunc), this.bindFunction(this.afterRenderFunc));
    this.updateScrollButtons();
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.afterRenderFunc = function (__s50param0) {
    var __s50local0;
    if (!!__s50param0.itemVO && (__s50param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE || __s50param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS || __s50param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.RELIC_EQUIPMENT || __s50param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED)) {
      __s50local0 = __s50param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (__s50param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE) {
        __s50local0.transform.offset.x = 0;
      } else {
        __s50local0.transform.offset.x = 1;
      }
      __s50local0.transform.offset.y = this.list1Visible ? 13 : 6;
    }
    if (__s50param0.itemVO && __s50param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.BUILDING && this.listNormalVisible) {
      (__s50local0 = __s50param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM)).transform.offset.y = 1;
    }
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "activeRewardList", {
    get: function () {
      if (this.listNormalVisible) {
        return this.dialogDisp.listNormal;
      } else if (this.list1Visible) {
        return this.dialogDisp.list1;
      } else if (this.list2Visible) {
        return this.dialogDisp.list2;
      } else if (this.list3Visible) {
        return this.dialogDisp.list3;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "listNormalVisible", {
    get: function () {
      return this.allRewards.length > 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "list1Visible", {
    get: function () {
      return this.allRewards.length == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "list2Visible", {
    get: function () {
      return this.allRewards.length == 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "list3Visible", {
    get: function () {
      return this.allRewards.length == 3;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.updateScrollButtons = function () {
    this.dialogDisp.btn_left.visible = this.startIndex > 0;
    this.dialogDisp.btn_right.visible = this.allRewards.length > this.startIndex + CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN;
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.scrollLeft = function () {
    this.setStartIndex(this.startIndex - CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN);
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.scrollRight = function () {
    this.setStartIndex(this.startIndex + CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN);
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.setStartIndex = function (__s77param0) {
    this.startIndex = __s77param0;
    this.showRewards();
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onClick = function (__s79param0) {
    __s1param0.prototype.onClick.call(this, __s79param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s79param0.target)) {
      switch (__s79param0.target) {
        case this.dialogDisp.btn_buy:
        case this.dialogDisp.btn_buy_free:
          __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id, 0);
          break;
        case this.dialogDisp.btn_addC2:
          this.addGoldComp.onClickButton(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_PRIVATE_PRIME_DAY_OFFER, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_PRIVATE_PRIME_DAY_OFFER);
          break;
        case this.dialogDisp.btn_left:
          this.scrollLeft();
          break;
        case this.dialogDisp.btn_right:
          this.scrollRight();
          break;
        case this.dialogDisp.btn_redeem:
          this.redeemVoucherCode();
      }
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.redeemVoucherCode = function () {
    this._requestTimer.reset();
    if (this.itxt_inputCode) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRedeemVoucherVO.C2SRedeemVoucherVO(this.itxt_inputCode.text));
      this._requestTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onCodeTimeOut));
      this._requestTimer.start();
      var __s83local0 = this._popoverComponent.config;
      __s83local0.waitDuration = CastlePrivatePrimeDayOfferDynamicDialog.REQUEST_TIMEOUT / __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      __s83local0.useClickArea = false;
      __s83local0.closeOnClick = false;
      this._popoverComponent.resetTimer();
      var __s83local1 = this._popoverComponent.getAssetDisp();
      __s83local1.mc_icon.gotoAndStop(CastlePrivatePrimeDayOfferDynamicDialog.POPOVER_PENDING);
      this.textFieldManager.registerTextField(__s83local1.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("codeCheck")).autoFitToBounds = true;
      this._popoverComponent.startSequence();
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.showInvalidCodePopover = function () {
    var __s86local0 = this._popoverComponent.config;
    __s86local0.waitDuration = 5;
    __s86local0.useClickArea = true;
    __s86local0.closeOnClick = true;
    this._popoverComponent.resetTimer();
    var __s86local1 = this._popoverComponent.getAssetDisp();
    __s86local1.mc_icon.gotoAndStop(CastlePrivatePrimeDayOfferDynamicDialog.POPOVER_ALERT);
    this.textFieldManager.registerTextField(__s86local1.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("codeInvalid")).autoFitToBounds = true;
    this._popoverComponent.startSequence();
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onCodeTimeOut = function (__s88param0) {
    this.showInvalidCodePopover();
    this._requestTimer.reset();
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "rewardsFiltered", {
    get: function () {
      var __s90local0 = new __dep_export_CollectableList.CollectableList();
      for (var __s90local1 = this.startIndex; __s90local1 < this.startIndex + CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN; __s90local1++) {
        if (__s90local1 < this.allRewards.length) {
          __s90local0.addItem(this.allRewards.getItemByIndex(__s90local1));
        }
      }
      return __s90local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "allRewards", {
    get: function () {
      return this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onClose = function () {
    this.topSkinPart.onHide();
    this.hide();
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "skinID", {
    get: function () {
      return String(this.dialogCustomization.SID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "teaserImageID", {
    get: function () {
      return "PivatePrimeDayDynamicDialog_TeaserImage_" + this.dialogCustomization.TSID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "topEyeCatcherID", {
    get: function () {
      return String(this.dialogCustomization.TEID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "leftEyeCatcherID", {
    get: function () {
      return String(this.dialogCustomization.LEID ? this.dialogCustomization.LEID.ID : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "rightEyeCatcherID", {
    get: function () {
      return String(this.dialogCustomization.REID ? this.dialogCustomization.REID.ID : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "leftCurrencyEnum", {
    get: function () {
      return CastlePrivatePrimeDayOfferDynamicDialog.getCollectableEnum(this.dialogCustomization.LEID ? this.dialogCustomization.LEID.ICON : null);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "rightCurrencyEnum", {
    get: function () {
      return CastlePrivatePrimeDayOfferDynamicDialog.getCollectableEnum(this.dialogCustomization.REID ? this.dialogCustomization.REID.ICON : null);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.getCollectableEnum = function (__s113param0) {
    switch (__s113param0) {
      case "icon_hc_rubi_rm":
        return __dep_export_CollectableEnum.CollectableEnum.C2;
    }
    return null;
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "botSkinTexts", {
    get: function () {
      return [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogCustomization.TID), new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogCustomization.STID)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "isUsingRealMoney", {
    get: function () {
      return this.dialogCustomization.RM.T == 1;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.getByButtonText = function () {
    if (this.isPrimeDayOffer) {
      if (this.isUsingRealMoney) {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("You are not prepared!");
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("xRubies", [this.dialogCustomization.RM.A]);
      }
    } else if (this.isChestOffer) {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("buy");
    } else {
      return null;
    }
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "rightEyeCatcherTexts", {
    get: function () {
      if (!this.dialogCustomization.REID) {
        return null;
      }
      if (!this.dialogCustomization.REID.TXT) {
        return null;
      }
      var __s127local0 = [];
      if (this.dialogCustomization.REID.TXT.TXT0) {
        __s127local0.push(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogCustomization.REID.TXT.TXT0.ID, this.dialogCustomization.REID.TXT.TXT0.A));
      }
      if (this.dialogCustomization.REID.TXT.TXT1) {
        __s127local0.push(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogCustomization.REID.TXT.TXT1.ID, this.dialogCustomization.REID.TXT.TXT1.A));
      }
      return __s127local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "leftEyeCatcherTexts", {
    get: function () {
      if (!this.dialogCustomization.LEID) {
        return null;
      }
      if (!this.dialogCustomization.LEID.TXT) {
        return null;
      }
      var __s133local0 = [];
      if (this.dialogCustomization.LEID.TXT.TXT0) {
        __s133local0.push(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogCustomization.LEID.TXT.TXT0.ID, this.dialogCustomization.LEID.TXT.TXT0.A));
      }
      if (this.dialogCustomization.LEID.TXT.TXT1) {
        __s133local0.push(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogCustomization.LEID.TXT.TXT1.ID, this.dialogCustomization.LEID.TXT.TXT1.A));
      }
      return __s133local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "chestOfferCost", {
    get: function () {
      if (this.dialogProperties.offerVO.descriptions && this.dialogProperties.offerVO.descriptions[0]) {
        return this.dialogProperties.offerVO.descriptions[0].get("costCurrencyPremium");
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "isChestOffer", {
    get: function () {
      return this.chestOfferCost != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "isPrimeDayOffer", {
    get: function () {
      return this.primeDayQuestCondition != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "isVoucherOffer", {
    get: function () {
      return this.dialogProperties.offerVO.descriptions && this.dialogCustomization.RM.T == 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "dialogCustomization", {
    get: function () {
      try {
        return this.dialogProperties.offerVO.descriptions[0].get("visualComponents").visuals.get("questDialog").dialogCustomization;
      } catch (__s152local0) {
        __dep_exact_9e901e8e2483a22f.error("false configured offer: ID:" + this.dialogProperties.offerVO.id + "\noffer description:" + (this.dialogProperties.offerVO.descriptions ? this.dialogProperties.offerVO.descriptions[0] : "undefinded") + "\n" + __s152local0.stack);
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.NAME = "CastlePrivatePrimeDayDynamicDialog_I";
  CastlePrivatePrimeDayOfferDynamicDialog.OFFER_NAME = "CastlePrivatePrimeDayDynamicDialog";
  CastlePrivatePrimeDayOfferDynamicDialog.POPOVER_PENDING = 2;
  CastlePrivatePrimeDayOfferDynamicDialog.POPOVER_ALERT = 3;
  CastlePrivatePrimeDayOfferDynamicDialog.REQUEST_TIMEOUT = 5000;
  CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN = 12;
  return CastlePrivatePrimeDayOfferDynamicDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePrivatePrimeDayOfferDynamicDialog = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_ButtonAddGoldComponent = require("gge-module:export_ButtonAddGoldComponent");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_LeftRightEyeCatcherPPDDExternal = require("gge-module:export_LeftRightEyeCatcherPPDDExternal");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
