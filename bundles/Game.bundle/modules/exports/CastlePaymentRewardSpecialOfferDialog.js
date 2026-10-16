Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SOneTimeOfferCancelled = require("gge-module:export_C2SOneTimeOfferCancelled");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleHardCurrencyHelper = require("gge-module:export_CastleHardCurrencyHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleYesNoOrangeWarningDialogProperties = require("gge-module:export_CastleYesNoOrangeWarningDialogProperties");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_CastlePaymentRewardHelper = require("gge-module:export_CastlePaymentRewardHelper");
var __dep_export_CastlePaymentRewardSpecialOfferConstants = require("gge-module:export_CastlePaymentRewardSpecialOfferConstants");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePaymentRewardSpecialOfferDialog(__s3param0 = CastlePaymentRewardSpecialOfferDialog.CLASS_NAME) {
    var __s3local0 = this;
    __s3local0._boughtCountOnOpen = 0;
    __s3local0._currencyBonus = 0;
    __s3local0.rewardItemSet = null;
    __s3local0.additionalTeaser = null;
    __s3local0.additionalTeaserGGSTF = null;
    __s3local0.titleTxt = null;
    __s3local0.titleGGSTF = null;
    __s3local0.bonusTxt = null;
    __s3local0.bonusGGSTF = null;
    __s3local0.buyBtn = null;
    __s3local0.buyBtnGGSTF = null;
    __s3local0.closeBtn = null;
    __s3local0.descriptionBar = null;
    __s3local0.descriptionGGSTF = null;
    __s3local0.endTimeBar = null;
    __s3local0.endTimeTxt = null;
    __s3local0.colors = [];
    __s3local0.timerGGSTF = null;
    __s3local0.payCountTxt = null;
    __s3local0.payCountGGSTF = null;
    __s3local0.progressBar = null;
    __s3local0.progressBarGGSTF = null;
    __s3local0.remainingPercentageBar = null;
    __s3local0.rubiesAmountMC = null;
    __s3local0.rubiesAmountGGSTF = null;
    __s3local0.okBtn = null;
    __s3local0.sendSMSDescGGSTF = null;
    __s3local0.sendSMSCodeGGSTF = null;
    __s3local0.sendSMSPhoneGGSTF = null;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).setTextIDs();
    __s3local0.colors.push(__dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_1);
    __s3local0.colors.push(__dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_2);
    __s3local0.colors.push(__dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_3);
    __s3local0.colors.push(__dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_4);
    __s3local0.colors.push(__dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_5);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaymentRewardSpecialOfferDialog, __s1param0);
  CastlePaymentRewardSpecialOfferDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.hideOnLoading_0 = function () {
    this.hide();
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onTitleLoaded = function (__s9param0) {
    if (__s9param0) {
      this.titleTxt = __s9param0.currentshownDisplayObject;
    }
    this.titleTxt.name = "TITLE_TXT";
    this.setupComponent(this.titleTxt);
    this.closeBtn = this.setupComponent(this.checkLoad(this.closeBtn, "CloseBtn", "CLOSE_BTN", true));
    switch (this.offerType) {
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT:
        this.bonusTxt = this.setupComponent(this.checkLoad(this.bonusTxt, "BonusTxt", "BONUS_TXT"));
        this.endTimeBar = this.setupComponent(this.checkLoad(this.endTimeBar, "EndTimeBar", "END_TIME_BAR"));
        this.remainingPercentageBar = this.setupComponent(this.checkLoad(this.remainingPercentageBar, "RemainingPercentageBar", "REMAINING_PERCENTAGE_BAR"));
        this.endTimeTxt = this.setupComponent(this.checkLoad(this.endTimeTxt, "EndTimeTxt", "END_TIME_TXT"));
        this.descriptionBar = this.setupComponent(this.checkLoad(this.descriptionBar, "DescriptionBar", "DESCRIPTION_BAR"));
        this.handleHangingDeco(this.descriptionBar);
        if (!!this.isPrivateOffer || !this.dialogProperties || this.dialogProperties.eventVO.eventId != __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
          this.additionalTeaser = this.setupComponent(this.checkLoad(this.additionalTeaser, "AdditionalTeaser", "ADDITIONAL_TEASER"));
        }
        this.createRewardItems("REWARDS");
        this.progressBar = this.setupComponent(this.checkLoad(this.progressBar, "ProgressBarLong", "PROGRESS_BAR_LONG"));
        this.progressBar.bkgrArea.visible = false;
        this.buyBtn = this.setupComponent(this.checkLoad(this.buyBtn, "BuyBtnWIcon", "BUY_BTN_W_ICON", true));
        if (!this.isOneTimeOffer) {
          this.payCountTxt = this.setupComponent(this.checkLoad(this.payCountTxt, "PayCountTxt", "PAY_COUNT_TXT"));
        }
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY:
        this.bonusTxt = this.setupComponent(this.checkLoad(this.bonusTxt, "BonusTxt", "BONUS_TXT"));
        this.endTimeBar = this.setupComponent(this.checkLoad(this.endTimeBar, "EndTimeBar", "END_TIME_BAR"));
        this.endTimeTxt = this.setupComponent(this.checkLoad(this.endTimeTxt, "EndTimeTxt", "END_TIME_TXT"));
        this.handleHangingDeco(this.endTimeBar);
        this.createRewardItems("REWARDS_REAL_CURRENCY");
        this.rubiesAmountMC = this.setupComponent(this.checkLoad(this.rubiesAmountMC, "RubiesAmountMC", "RUBIES_AMOUNT_MC"));
        this.buyBtn = this.setupComponent(this.checkLoad(this.buyBtn, "BuyBtn", "BUY_BTN", true));
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS:
        this.bonusTxt = this.setupComponent(this.checkLoad(this.bonusTxt, "BonusTxt", "BONUS_TXT"));
        this.endTimeBar = this.setupComponent(this.checkLoad(this.endTimeBar, "EndTimeBar", "END_TIME_BAR"));
        this.remainingPercentageBar = this.setupComponent(this.checkLoad(this.remainingPercentageBar, "RemainingPercentageBar", "REMAINING_PERCENTAGE_BAR"));
        this.endTimeTxt = this.setupComponent(this.checkLoad(this.endTimeTxt, "EndTimeTxt", "END_TIME_TXT"));
        this.descriptionBar = this.setupComponent(this.checkLoad(this.descriptionBar, "DescriptionBar", "DESCRIPTION_BAR"));
        this.handleHangingDeco(this.descriptionBar);
        this.additionalTeaser = this.setupComponent(this.checkLoad(this.additionalTeaser, "PricePerSMS", "PRICE_PER_SMS"));
        this.createRewardItems("REWARDS");
        this.infoSMS = this.setupComponent(this.checkLoad(this.infoSMS, "SMSInfo", "SMS_INFO"));
        this.sendInfoSMS = this.setupComponent(this.checkLoad(this.sendInfoSMS, "SMSSendInfo", "SMS_SEND_INFO", true));
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH:
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_SMS:
        this.descriptionBar = this.setupComponent(this.checkLoad(this.descriptionBar, "DescriptionBar", "DESCRIPTION_BAR"));
        this.handleHangingDeco(this.descriptionBar);
        this.createRewardItems("REWARDS");
        this.payCountTxt = this.setupComponent(this.checkLoad(this.payCountTxt, "PayCountTxt", "PAY_COUNT_TXT"));
        this.okBtn = this.setupComponent(this.checkLoad(this.okBtn, "OkBtn", "OK_BTN", true));
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY:
        this.handleHangingDeco(null);
        this.createRewardItems("REWARDS_REAL_CURRENCY");
        this.rubiesAmountMC = this.setupComponent(this.checkLoad(this.rubiesAmountMC, "RubiesAmountMC", "RUBIES_AMOUNT_MC"));
        this.okBtn = this.setupComponent(this.checkLoad(this.okBtn, "OkBtn", "OK_BTN", true));
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    this.customizeAppearenceOfComponents();
    this.setupDialogComponents();
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.createRewardItems = function (__s15param0) {
    this.destroyRewardItems();
    this.rewardItemSet = new __dep_export_CastlePaymentRewardSpecialOfferItemSet.CastlePaymentRewardSpecialOfferItemSet(__dep_export_CastlePaymentRewardHelper.CastlePaymentRewardHelper.getNameOfItemSet(this.rewards.length));
    this.rewardItemSet.componentDisp.name = __s15param0;
    this.setupComponent(this.rewardItemSet.componentDisp);
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.checkLoad = function (__s17param0, __s17param1, __s17param2, __s17param3 = false) {
    var __s17local0 = __s17param0;
    var __s17local1 = false;
    if (!__s17param0) {
      __s17local1 = __s17param3;
      this.temporaryExternalClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s17param1, __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.COMPONENTS_ASSET_NAME, null, 0, false);
      (__s17local0 = this.temporaryExternalClip.currentshownDisplayObject).name = __s17param2;
      if (__s17local1) {
        this.buttonArray ||= [];
        __s17local0.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(__s17local0, true);
        this.buttonArray.push(__s17local0.basicButton);
      }
    }
    return __s17local0;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.setupComponent = function (__s21param0) {
    this.dialogDisp.addChild(__s21param0);
    __s21param0.x = __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants[__s21param0.name + "_X"] + __dep_export_CastlePaymentRewardHelper.CastlePaymentRewardHelper.getSkinOffsetX(this.skinType);
    __s21param0.y = __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants[__s21param0.name + "_Y"] + __dep_export_CastlePaymentRewardHelper.CastlePaymentRewardHelper.getSkinOffsetY(this.skinType);
    return __s21param0;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.setupDialogComponents = function () {
    switch (this.offerType) {
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT:
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY:
        this.endTimeTxt.textArea.textColor = __dep_export_ClientConstColor.ClientConstColor.PRIME_DAY_PERCENTAGE_COLOR;
        if (this.buyBtn) {
          this._buttonPaymentComp = new __dep_export_ButtonAddGoldComponent.ButtonAddGoldComponent(this.buyBtn);
          this.buyBtn.mouseChildren = false;
        }
        if (this.progressBar) {
          this.progressBar.mouseChildren = false;
        }
        this.addListeners();
        this._boughtCountOnOpen = this.canBeBoughtTimes;
        if (this._buttonPaymentComp) {
          this._buttonPaymentComp.init();
        }
        if (this.remainingPercentageBar) {
          this.remainingPercentageBar.visible = false;
        }
        this.timerGGSTF ||= this.textFieldManager.registerTextField(this.endTimeTxt.textArea, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("limitedOffer", []));
        this.timerGGSTF.autoFitToBounds = true;
        this.timerGGSTFLocalizedTextVO = this.timerGGSTF.textContentVO;
        if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO && this.dialogPropertiesPrivateOffer.offerVO.isTimeDisplayedInPercentage) {
          if (this.remainingPercentageBar) {
            this.remainingPercentageBar.visible = true;
          }
          this.timerGGSTFLocalizedTextVO.textId = "limitedOffer";
        } else if (this.isOneTimeOffer) {
          this.timerGGSTFLocalizedTextVO.textId = "dialog_primeday_oneTimeOffer_copy1";
        } else if (!this.isPrivateOffer && this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.isTimeDisplayedInPercentage) {
          if (this.remainingPercentageBar) {
            this.remainingPercentageBar.visible = true;
          }
          this.timerGGSTFLocalizedTextVO.textId = "limitedOffer";
        }
        this.timerGGSTF.autoFitToBounds = true;
        if (this.rubiesAmountMC) {
          this.rubiesAmountMC.mouseChildren = false;
        }
        this.updateTexts();
        this.updateRewardItems();
        this.updateProgressBar();
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS:
        this.endTimeTxt.textArea.textColor = __dep_export_ClientConstColor.ClientConstColor.PRIME_DAY_PERCENTAGE_COLOR;
        this.addListeners();
        this.timerGGSTF ||= this.textFieldManager.registerTextField(this.endTimeTxt.textArea, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("limitedOffer", []));
        this.timerGGSTF.autoFitToBounds = true;
        this.timerGGSTFLocalizedTextVO = this.timerGGSTF.textContentVO;
        if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer) {
          if (this.dialogPropertiesPrivateOffer.offerVO && this.dialogPropertiesPrivateOffer.offerVO.isTimeDisplayedInPercentage) {
            if (this.remainingPercentageBar) {
              this.remainingPercentageBar.visible = true;
            }
            this.timerGGSTFLocalizedTextVO.textId = "limitedOffer";
            this.timerGGSTF.autoFitToBounds = true;
          }
        } else if (!this.isPrivateOffer && this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.isTimeDisplayedInPercentage) {
          if (this.remainingPercentageBar) {
            this.remainingPercentageBar.visible = true;
          }
          this.timerGGSTFLocalizedTextVO.textId = "limitedOffer";
          this.timerGGSTF.autoFitToBounds = true;
        }
        this.infoSMS.visible = false;
        this.updateTexts();
        this.updateRewardItems();
        break;
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH:
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_SMS:
      case __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY:
        this.updateTexts();
        this.updateRewardItems();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.showLoaded = function (__s41param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s41param0);
    if (this.remainingEventTimeInSeconds <= 0) {
      this.hide();
    }
    this.setTextIDs();
    if (this.offerType != __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT && this.offerType != __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY || this.isPrivateOffer || !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this.eventID)) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(this.hideOnLoading_0), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
      if (this.titleTxt) {
        this.onTitleLoaded(null);
      } else {
        this.temporaryExternalClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("TitleTxt", __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.COMPONENTS_ASSET_NAME, null, 0, false);
        if (this.temporaryExternalClip.isLoaded) {
          this.onTitleLoaded(this.temporaryExternalClip);
        } else {
          this.temporaryExternalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.onTitleLoaded), 3);
        }
      }
    } else {
      this.hide();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.addListeners = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onUpdateEvent));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onPaymentUpdate));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onPaymentUpdate = function (__s52param0) {
    try {
      if (this.boughtC2SinceLastStep >= this.currentC2ForReward) {
        this.hide();
      }
    } catch (__s56local0) {
      this.hide();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.removeListeners = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onUpdateEvent));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onPaymentUpdate));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.hideLoaded = function (__s60param0 = null) {
    this.destroyRewardItems();
    if (this._buttonPaymentComp) {
      this._buttonPaymentComp.destroy();
    }
    this.removeListeners();
    this.destroyComponents();
    __s1param0.prototype.hideLoaded.call(this, __s60param0);
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.destroyComponents = function () {
    if (this.additionalTeaser) {
      if (this.additionalTeaserGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.additionalTeaserGGSTF);
      }
      this.additionalTeaserGGSTF = null;
      this.dialogDisp.removeChild(this.additionalTeaser);
    }
    this.additionalTeaser = null;
    if (this.titleTxt) {
      if (this.titleGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.titleGGSTF);
      }
      this.titleGGSTF = null;
      this.dialogDisp.removeChild(this.titleTxt);
    }
    this.titleTxt = null;
    if (this.bonusTxt) {
      if (this.bonusGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.bonusGGSTF);
      }
      this.bonusGGSTF = null;
      this.dialogDisp.removeChild(this.bonusTxt);
    }
    this.bonusTxt = null;
    if (this.buyBtn) {
      this.buyBtn.basicButton = null;
      if (this.buyBtnGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.buyBtnGGSTF);
      }
      this.buyBtnGGSTF = null;
      this.dialogDisp.removeChild(this.buyBtn);
    }
    this.buyBtn = null;
    if (this.closeBtn) {
      this.closeBtn.basicButton = null;
      this.dialogDisp.removeChild(this.closeBtn);
    }
    this.closeBtn = null;
    if (this.descriptionBar) {
      if (this.descriptionGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.descriptionGGSTF);
      }
      this.descriptionGGSTF = null;
      this.dialogDisp.removeChild(this.descriptionBar);
    }
    this.descriptionBar = null;
    if (this.endTimeBar) {
      this.dialogDisp.removeChild(this.endTimeBar);
    }
    this.endTimeBar = null;
    if (this.endTimeTxt) {
      this.timerGGSTFLocalizedTextVO = null;
      if (this.timerGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.timerGGSTF);
      }
      this.timerGGSTF = null;
      this.dialogDisp.removeChild(this.endTimeTxt);
    }
    this.endTimeTxt = null;
    if (this.payCountTxt) {
      if (this.payCountGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.payCountGGSTF);
      }
      this.payCountGGSTF = null;
      this.dialogDisp.removeChild(this.payCountTxt);
    }
    this.payCountTxt = null;
    if (this.progressBar) {
      if (this.progressBarGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.progressBarGGSTF);
      }
      this.progressBarGGSTF = null;
      this.dialogDisp.removeChild(this.progressBar);
    }
    this.progressBar = null;
    if (this.remainingPercentageBar) {
      this.dialogDisp.removeChild(this.remainingPercentageBar);
    }
    this.remainingPercentageBar = null;
    if (this.rubiesAmountMC) {
      if (this.rubiesAmountGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.rubiesAmountGGSTF);
      }
      this.rubiesAmountGGSTF = null;
      this.dialogDisp.removeChild(this.rubiesAmountMC);
    }
    this.rubiesAmountMC = null;
    if (this.okBtn) {
      this.okBtn.basicButton = null;
      this.dialogDisp.removeChild(this.okBtn);
    }
    this.okBtn = null;
    if (this.infoSMS) {
      this.dialogDisp.removeChild(this.infoSMS);
    }
    this.infoSMS = null;
    if (this.sendInfoSMS) {
      if (this.sendSMSDescGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.sendSMSDescGGSTF);
      }
      this.sendSMSDescGGSTF = null;
      if (this.sendSMSCodeGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.sendSMSCodeGGSTF);
      }
      this.sendSMSCodeGGSTF = null;
      if (this.sendSMSPhoneGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.sendSMSPhoneGGSTF);
      }
      this.sendSMSPhoneGGSTF = null;
      this.dialogDisp.removeChild(this.sendInfoSMS);
    }
    this.sendInfoSMS = null;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.setTextIDs = function () {
    this.titleTextID = "dialog_primeday_specialoffer_title";
    this.descriptionTextID = "dialog_primeday_specialoffer_description";
    this.dialogPrimedaySpecialofferEndTimerTextID = "dialog_primeday_specialoffer_endTimer";
    this.addGoldTextID = "add_Gold";
    this.realCurrencyTextID = "dialog_primeday_realCurrency_additionalRubies";
    this.leftTeaserText = null;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.updateTexts = function () {
    var __s94local0;
    var __s94local1;
    var __s94local2;
    var __s94local3;
    var __s94local4 = __dep_export_CastleHardCurrencyHelper.CastleHardCurrencyHelper.currencyTextID;
    __s94local0 = __dep_exact_f855840627e6e145.int(this.shownOfferBonus);
    this._currencyBonus = this.currencyValue;
    __s94local1 = this.currentC2ForReward;
    __s94local2 = __dep_exact_f855840627e6e145.int(__s94local1 * (__s94local0 / 100));
    this.titleGGSTF ||= this.textFieldManager.registerTextField(this.titleTxt.textArea, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.titleTextID));
    if (this.isOneTimeOffer) {
      this.titleGGSTF.textContentVO.textId = "dialog_primeday_oneTimeOffer_header";
    } else {
      this.titleGGSTF.textContentVO.textId = this.titleTextID;
    }
    this.titleGGSTF.autoFitToBounds = true;
    this.titleGGSTF.verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
    if (this.additionalTeaser) {
      if (!this.additionalTeaserGGSTF) {
        this.additionalTeaserGGSTF = this.textFieldManager.registerTextField(this.additionalTeaser.textArea, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.leftTeaserText, false));
        this.additionalTeaser.textArea.defaultCacheScale = 2;
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.additionalTeaser.textArea);
        this.additionalTeaser.textArea.doCache(0, 2);
      }
      if (!this.leftTeaserText) {
        var __s94local5 = __s94local4 == __dep_export_ClientConstTextIds.ClientConstTextIds.C2 ? "privateOffer_valueShort_rubies" : "privateOffer_valueShort";
        var __s94local6 = this.additionalTeaserGGSTF.textContentVO;
        __s94local6.textId = __s94local5;
        if (this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS) {
          __s94local6.textId = "dialog_primeday_smsOffer_messageCost";
          __s94local6.textReplacements = [new __dep_exact_92d05af59ee2ff30_3.TextVO(this.smsPriceInMajorCurrencyUnit), __s94local4];
        } else {
          __s94local6.textId = __s94local5;
          __s94local6.textReplacements = [this._currencyBonus, __s94local4];
        }
      }
      this.additionalTeaserGGSTF.autoFitToBounds = true;
      this.additionalTeaserGGSTF.verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
    }
    if (this.buyBtn) {
      this.buyBtnGGSTF ||= this.textFieldManager.registerTextField(this.buyBtn.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.addGoldTextID));
      if (this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY) {
        this.buyBtnGGSTF.textContentVO.textReplacements = [this.dialogProperties.eventVO.realPrice];
      }
      if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
        this._buttonPaymentComp.targetMC.disp.toolTipText = "";
      }
    }
    if (this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT || this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS) {
      if (this.hasTimer) {
        this.updateWithTimer();
      }
    }
    if (this.bonusTxt) {
      this.bonusGGSTF ||= this.textFieldManager.registerTextField(this.bonusTxt.textArea, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      this.bonusGGSTF.autoFitToBounds = true;
      if (this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY || this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY) {
        if (__dep_export_CastleHardCurrencyHelper.CastleHardCurrencyHelper.currencyFactor != __dep_export_CastleHardCurrencyHelper.CastleHardCurrencyHelper.RUBIES2EUROS_FACTOR && this.dialogProperties.eventVO.realPrice) {
          this.bonusGGSTF.textContentVO.textId = "dialog_primeday_specialoffer_bonus";
          var __s94local7 = /([0-9]+[,.][0-9]{2})/g.exec(this.dialogProperties.eventVO.realPrice)[0];
          __s94local7 = __s94local7.replace(",", ".");
          var __s94local8 = Number(__s94local7);
          var __s94local9 = __dep_exact_f855840627e6e145.int((this.currencyValue + __s94local8) / __s94local8 * 100);
          this.bonusGGSTF.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s94local9)];
        } else {
          this.bonusGGSTF.textContentVO.textId = "dialog_primeday_realCurrency_bonus_general";
        }
      } else if (!this.isPrivateOffer && this.dialogProperties && this.dialogProperties.eventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
        var __s94local10 = __s94local4 == __dep_export_ClientConstTextIds.ClientConstTextIds.C2 ? "privateOffer_valueShort_rubies" : "privateOffer_valueShort";
        this.bonusGGSTF.textContentVO.textId = __s94local10;
        this.bonusGGSTF.textContentVO.textReplacements = [this._currencyBonus, __s94local4];
      } else if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
        if (__s94local4 == __dep_export_ClientConstTextIds.ClientConstTextIds.C2) {
          this.bonusGGSTF.textContentVO.textId = "privateOffer_valueLong_rubies";
          this.bonusGGSTF.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this._currencyBonus), __s94local4];
        } else {
          this.bonusGGSTF.textContentVO.textId = "privateOffer_valueLong";
          this.bonusGGSTF.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this._currencyBonus), __s94local4];
        }
      } else {
        this.bonusGGSTF.textContentVO.textId = "dialog_primeday_specialoffer_bonus";
        this.bonusGGSTF.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s94local0)];
      }
      this.bonusGGSTF.autoFitToBounds = true;
    }
    if (this.payCountTxt) {
      this.payCountGGSTF ||= this.textFieldManager.registerTextField(this.payCountTxt.textArea, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      this.payCountGGSTF.autoFitToBounds = true;
      if (this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH || this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY && this.canBeBoughtTimes <= 0 || this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_SMS) {
        this.payCountGGSTF.textContentVO.textId = "";
      } else if (this.canBeBoughtTimes == 1) {
        this.payCountGGSTF.textContentVO.textId = "dialog_primeday_specialoffer_charges_singular";
      } else {
        this.payCountGGSTF.textContentVO.textId = "dialog_primeday_specialoffer_charges";
        this.payCountGGSTF.textContentVO.textReplacements = [this.canBeBoughtTimes];
      }
    }
    if (this.rubiesAmountMC) {
      this.rubiesAmountGGSTF ||= this.textFieldManager.registerTextField(this.rubiesAmountMC.valueTxt, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      if (this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY) {
        this.rubiesAmountGGSTF.textContentVO.textId = this.realCurrencyTextID;
        this.rubiesAmountGGSTF.textContentVO.textReplacements = [this.dialogProperties.eventVO.realPrice];
      } else {
        this.rubiesAmountGGSTF.textContentVO.textId = "dialog_timeSkip_fullSkipPrice_plural";
        this.rubiesAmountGGSTF.textContentVO.textReplacements = [this.rubiesAmountMCValue];
      }
    }
    if (this.descriptionBar) {
      this.descriptionGGSTF ||= this.textFieldManager.registerTextField(this.descriptionBar.textArea, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      (__s94local3 = this.descriptionGGSTF.textContentVO).textId = this.descriptionTextID;
      if (this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS) {
        var __s94local11 = __dep_exact_92d05af59ee2ff30.Localize.text(__s94local4);
        __s94local3.textReplacements = [this._currencyBonus + __s94local11, this.smsPriceInMajorCurrencyUnit + __s94local11];
        this.descriptionGGSTF.autoFitToBounds = true;
      } else if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
        __s94local3.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.currentC2ForReward, false)];
      } else if (this.shownOfferBonus == 0) {
        __s94local3.textId = "dialog_primeday_specialoffer_hideValue_description";
        __s94local3.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s94local1, false)];
      } else {
        __s94local3.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s94local1, false), new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s94local2, false)];
      }
      if (this.descriptionInfoTextID) {
        var __s94local12 = this.properties;
        if (__s94local12 && __s94local12.shoppingCartEventVO) {
          var __s94local13 = __s94local12.shoppingCartEventVO.cartsPaid > 1 ? this.descriptionInfoTextID : "dialog_rewardsReceived_purchasedTotal_singular_desc";
          this.descriptionGGSTF.text += "\n" + __dep_exact_92d05af59ee2ff30.Localize.text(__s94local13, [__s94local12.shoppingCartEventVO.cartsPaid]);
        }
      }
    }
    if (this.sendInfoSMS) {
      this.sendSMSDescGGSTF ||= this.textFieldManager.registerTextField(this.sendInfoSMS.descTxt, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      this.sendSMSDescGGSTF.autoFitToBounds = true;
      this.sendSMSDescGGSTF.textContentVO.textId = "dialog_primeday_smsOffer_sendMessage_decription";
      this.sendSMSCodeGGSTF ||= this.textFieldManager.registerTextField(this.sendInfoSMS.codeTxt, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("", false));
      this.sendSMSCodeGGSTF.autoFitToBounds = true;
      this.sendSMSCodeGGSTF.textContentVO.textId = "dialog_primeday_smsOffer_sendMessage_code_decription";
      this.sendSMSCodeGGSTF.textContentVO.textReplacements = [this.rewardCode];
      this.sendSMSPhoneGGSTF ||= this.textFieldManager.registerTextField(this.sendInfoSMS.phoneTxt, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("", false));
      this.sendSMSPhoneGGSTF.autoFitToBounds = true;
      this.sendSMSPhoneGGSTF.textContentVO.textId = "dialog_primeday_smsOffer_sendMessage_phoneNumber_decription";
      this.sendSMSPhoneGGSTF.textContentVO.textReplacements = [this.phoneNumber];
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "hasTimer", {
    get: function () {
      var __s132local0 = false;
      if (!this.isPrivateOffer && this.dialogProperties.eventVO && this.dialogProperties.eventVO.isTimeDisplayedInPercentage) {
        __s132local0 = true;
      }
      return !this.isOneTimeOffer && (this.isPrivateOffer && !!this.dialogPropertiesPrivateOffer.offerVO || this.remainingEventTimeInSeconds <= __dep_export_PaymentrewardEventVO.PaymentrewardEventVO.REMAINING_TIME_ALERT || __s132local0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDialog.prototype.updateWithTimer = function () {
    var __s135local0 = false;
    if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer) {
      if (this.dialogPropertiesPrivateOffer.offerVO && this.dialogPropertiesPrivateOffer.offerVO.isTimeDisplayedInPercentage) {
        __s135local0 = true;
        this.displayTimeInPercentage(this.dialogPropertiesPrivateOffer.offerVO.startTimestamp, this.dialogPropertiesPrivateOffer.offerVO.endTimestamp);
      }
    } else if (!this.isPrivateOffer && this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.isTimeDisplayedInPercentage) {
      __s135local0 = true;
      this.displayTimeInPercentage(this.dialogProperties.eventVO.startTimestamp, this.dialogProperties.eventVO.endTimestamp);
    }
    if (!__s135local0) {
      this.timerGGSTFLocalizedTextVO.textId = this.dialogPrimedaySpecialofferEndTimerTextID;
      this.timerGGSTFLocalizedTextVO.textReplacements = [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.remainingEventTimeInSeconds)];
      this.timerGGSTF.autoFitToBounds = true;
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "isOneTimeOffer", {
    get: function () {
      return this.isPrivateOffer && !!this.dialogPropertiesPrivateOffer && !!this.dialogPropertiesPrivateOffer.offerVO && this.dialogPropertiesPrivateOffer.offerVO.isOneTimeOffer;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDialog.prototype.displayTimeInPercentage = function (__s143param0, __s143param1) {
    var __s143local0 = __dep_exact_f855840627e6e145.int(__s143param0);
    var __s143local1 = __dep_exact_f855840627e6e145.int(__s143param1);
    var __s143local2 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    var __s143local3 = __dep_export_CastleMathHelper.CastleMathHelper.clamp(this.calculateRemainingPercentage(__dep_export_CastleMathHelper.CastleMathHelper.clamp((__s143local1 - __s143local2) / (__s143local1 - __s143local0), 0, 1)), 0.01, 1);
    this.setRemainingPercentageTime(__s143local3);
    this.timerGGSTFLocalizedTextVO.textId = "dialog_primeday_timelessPrimeday_amount";
    this.timerGGSTFLocalizedTextVO.textReplacements = [__dep_exact_f855840627e6e145.int(__s143local3 * 100)];
    this.timerGGSTF.autoFitToBounds = true;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.calculateRemainingPercentage = function (__s145param0) {
    var __s145local0 = 1 - __s145param0;
    if (__s145local0 > 0.9) {
      return (__s145local0 * -99 + 99) / 109.091;
    } else {
      return (1 / (Math.pow(__s145local0 + 0.0033, 2) + 0.01) + 9.2) / 109.091;
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.setRemainingPercentageTime = function (__s149param0) {
    if (this.remainingPercentageBar) {
      this.remainingPercentageBar.bar.scaleX = __s149param0;
      var __s149local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s149local0.color = this.colors[Math.min(this.colors.length - 1, Math.floor((1 - __s149param0) * this.colors.length))];
      this.remainingPercentageBar.bar.useFilters([new createjs.ColorFilter(__s149local0.redMultiplier, __s149local0.greenMultiplier, __s149local0.blueMultiplier, __s149local0.alphaMultiplier, __s149local0.redOffset, __s149local0.greenOffset, __s149local0.blueOffset, __s149local0.alphaOffset)]);
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.updateProgressBar = function () {
    if (this.progressBar) {
      var __s152local0 = this.currentC2ForReward;
      var __s152local1 = this.boughtC2SinceLastStep;
      this.progressBarGGSTF ||= this.textFieldManager.registerTextField(this.progressBar.textArea, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("", false));
      this.progressBarGGSTF.autoFitToBounds = true;
      this.progressBarGGSTF.textContentVO.textId = "value_proportional_value";
      this.progressBarGGSTF.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s152local1, false), new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s152local0, false)];
      this.progressBar.mc_background.width = __s152local1 / __s152local0 * __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.PROGRESSBAR_END_WIDTH;
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.updateRewardItems = function () {
    if (this.rewardItemSet && this.rewardItemSet.disp) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.rewardItemSet.componentDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addEquipmentBgMcs("parent.mc_equipmentBackground"), this.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(__dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.REWARD_ICON_WIDTH, __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.REWARD_ICON_WIDTH)));
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.destroyRewardItems = function () {
    if (this.rewardItemSet) {
      if (this.rewardItemSet.componentDisp && this.rewardItemSet.componentDisp.parent) {
        this.rewardItemSet.componentDisp.parent.removeChild(this.rewardItemSet.componentDisp);
      }
      this.rewardItemSet.destroy();
      this.rewardItemSet = null;
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onOfferRemoved = function (__s162param0) {
    if (this.isPrivateOffer && __s162param0.offerVO.id == this.dialogPropertiesPrivateOffer.offerVO.id) {
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      this.hide();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onRemoveEvent = function (__s165param0) {
    if (__s165param0.specialEventVO.eventId == this.eventID) {
      var __s165local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getDialog(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog);
      if (__s165local0) {
        __s165local0.hide();
      }
      this.hide();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onUpdateEvent = function (__s169param0) {
    if (__s169param0.specialEventVO.eventId == this.eventID) {
      if (this.canBeBoughtTimes <= 0 || this._boughtCountOnOpen > this.canBeBoughtTimes) {
        this.hide();
      } else {
        this.updateProgressBar();
        this.updateTexts();
        if (this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY || this.offerType == __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY) {
          this.createRewardItems("REWARDS_REAL_CURRENCY");
        } else {
          this.createRewardItems("REWARDS");
        }
        this.updateRewardItems();
      }
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onTimerUpdate = function (__s176param0) {
    if (this.hasTimer) {
      this.updateWithTimer();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onClick = function (__s179param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s179param0.target)) {
      __s1param0.prototype.onClick.call(this, __s179param0);
      if (this.buyBtn == __s179param0.target) {
        this._buttonPaymentComp.onClickButton(this.paymentSourceId, this.paymentCXFSourceId, this.getShopTab());
      } else if (this.closeBtn == __s179param0.target) {
        if (this.isOneTimeOffer) {
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleYesNoOrangeWarningDialog.CastleYesNoOrangeWarningDialog, new __dep_export_CastleYesNoOrangeWarningDialogProperties.CastleYesNoOrangeWarningDialogProperties("dialog_primeday_oneTimeOffer_confirm_header", "dialog_primeday_oneTimeOffer_confirm_copy", this.bindFunction(this.cancelOneTimeOffer)), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
        } else {
          this.hide();
        }
      } else if (this.okBtn == __s179param0.target) {
        this.hide();
      }
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.getShopTab = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292_3.instanceOfClass(this, "CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog") ? __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SHOP_TAB_ONE_TIME_SPECIAL_OFFER : __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SHOP_TAB_RUBIES);
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.cancelOneTimeOffer = function () {
    var __s189local0 = -1;
    if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
      __s189local0 = __dep_exact_f855840627e6e145.int(this.dialogPropertiesPrivateOffer.offerVO.id);
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SOneTimeOfferCancelled.C2SOneTimeOfferCancelled(__s189local0));
    this.hide();
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onMouseOver = function (__s192param0) {
    __s1param0.prototype.onCursorOver.call(this, __s192param0);
    this.controller.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_CastleDialogEvent.CastleDialogEvent, __dep_export_CastleDialogEvent.CastleDialogEvent.MOUSE_ON_DIALOG));
    if (__s192param0.target == this.buyBtn && __s192param0.target.toolTipText != "") {
      this.layoutManager.tooltipManager.show(__s192param0.target.toolTipText, __s192param0.target);
    } else if (__dep_exact_9e901e8e2483a22f.BasicToolTipManager.TOOLTIP_LABEL in __s192param0.target && __s192param0.target.toolTipText) {
      this.layoutManager.tooltipManager.showWithScale(__s192param0.target.toolTipText, __dep_export_CastlePaymentRewardHelper.CastlePaymentRewardHelper.getIconWidth(this.rewards.length), __dep_export_CastlePaymentRewardHelper.CastlePaymentRewardHelper.getIconHeight(this.rewards.length), __s192param0.target);
    } else if (__s192param0.target instanceof __dep_exact_81dacdf05bd32292_1.TextField && __s192param0.target.selectable) {
      this.layoutManager.customCursor.hideCustomCursor();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.hide = function () {
    this.destroyRewardItems();
    __s1param0.prototype.hide.call(this);
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "phoneNumber", {
    get: function () {
      return this.dialogPropertiesPrivateOffer.offerVO.premiumSmsVO.callNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "rewardCode", {
    get: function () {
      return this.dialogPropertiesPrivateOffer.offerVO.premiumSmsVO.premiumSmsCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "smsPriceInMajorCurrencyUnit", {
    get: function () {
      if (this.dialogPropertiesPrivateOffer.offerVO.premiumSmsVO) {
        return __dep_exact_92d05af59ee2ff30.Localize.integer(parseFloat(this.dialogPropertiesPrivateOffer.offerVO.premiumSmsVO.price) / 100);
      } else {
        return "error";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "paymentSourceId", {
    get: function () {
      return __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_SPECIAL_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "paymentCXFSourceId", {
    get: function () {
      return __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_PAYMENT_REWARD_SPECIAL_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "canBeBoughtTimes", {
    get: function () {
      if (this.isPrivateOffer) {
        return 1;
      } else {
        return this.dialogProperties.eventVO.maxBuyCount - this.dialogProperties.eventVO.getBoughtCount();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "shownOfferBonus", {
    get: function () {
      if (this.isPrivateOffer) {
        return __dep_export_CastleHardCurrencyHelper.CastleHardCurrencyHelper.currencyFactor;
      } else if (this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.firstReward) {
        return this.dialogProperties.eventVO.firstReward.shownOfferBonus;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "currencyValue", {
    get: function () {
      if (this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.firstReward.shownValue) {
        return this.dialogProperties.eventVO.firstReward.shownValue;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "eventID", {
    get: function () {
      if (this.isPrivateOffer) {
        return this.dialogPropertiesPrivateOffer.offerVO.id;
      } else {
        return this.dialogProperties.eventVO.eventId;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      if (this.isPrivateOffer) {
        return this.dialogPropertiesPrivateOffer.offerVO.remainingSeconds;
      } else {
        return this.dialogProperties.eventVO.remainingEventTimeInSeconds;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "currentC2ForReward", {
    get: function () {
      if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
        var __s232local0 = this.dialogPropertiesPrivateOffer.offerVO.getQuestConditionByName(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE);
        if (__s232local0) {
          return __s232local0.neededValue;
        }
      } else if (this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.firstReward.c2ForReward) {
        return this.dialogProperties.eventVO.firstReward.c2ForReward;
      }
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "boughtC2SinceLastStep", {
    get: function () {
      if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO.getQuestConditionByName(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE)) {
        return this.dialogPropertiesPrivateOffer.offerVO.getQuestConditionByName(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE).currentValue;
      } else if (this.dialogProperties.eventVO) {
        return this.dialogProperties.eventVO.boughtC2 % this.currentC2ForReward;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "rewards", {
    get: function () {
      if (this.isPrivateOffer) {
        return this.dialogPropertiesPrivateOffer.offerVO.getTotalRewardListFromOfferVO();
      } else {
        return this.dialogProperties.eventVO.firstReward.rewardList;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "isPrivateOffer", {
    get: function () {
      return __dep_exact_81dacdf05bd32292_3.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "dialogPropertiesPrivateOffer", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "rubiesAmountMCValue", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "offerType", {
    get: function () {
      return __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDialog.prototype.handleHangingDeco = function (__s256param0) {
    if (__s256param0 || !this.dialogDisp.hangingDeco) {
      if (this.dialogDisp.hangingDeco) {
        this.dialogDisp.hangingDeco.visible = true;
        this.dialogDisp.hangingDeco.y = __s256param0.y + __s256param0.height;
      }
    } else {
      this.dialogDisp.hangingDeco.visible = false;
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.customizeAppearenceOfComponents = function () {
    __dep_export_CastlePaymentRewardHelper.CastlePaymentRewardHelper.customizeSkinComponents(this.skinType, this.titleTxt, this.closeBtn, this.bonusTxt, this.rewardItemSet.componentDisp, this.buyBtn, this.payCountTxt, this.additionalTeaser, this.descriptionBar, this.progressBar, this.rubiesAmountMC);
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "skinType", {
    get: function () {
      return __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDialog.NAME = "CastlePaymentRewardSpecialOffer";
  CastlePaymentRewardSpecialOfferDialog.CLASS_NAME = "CastlePaymentRewardSpecialOffer";
  CastlePaymentRewardSpecialOfferDialog.showOfferIDsInTitle = false;
  return CastlePaymentRewardSpecialOfferDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePaymentRewardSpecialOfferDialog = __s0local1;
var __dep_export_PaymentrewardEventVO = require("gge-module:export_PaymentrewardEventVO");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ButtonAddGoldComponent = require("gge-module:export_ButtonAddGoldComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleYesNoOrangeWarningDialog = require("gge-module:export_CastleYesNoOrangeWarningDialog");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastlePaymentRewardSpecialOfferItemSet = require("gge-module:export_CastlePaymentRewardSpecialOfferItemSet");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
