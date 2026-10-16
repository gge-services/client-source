Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleMinuteSkipEvent = require("gge-module:export_CastleMinuteSkipEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_AdvancedProgressBar = require("gge-module:export_AdvancedProgressBar");
var __dep_export_HorizontalCallbackProgressBehaviour = require("gge-module:export_HorizontalCallbackProgressBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleMinuteSkipItemScrollList = require("gge-module:export_CastleMinuteSkipItemScrollList");
var __dep_export_CastleMinuteSkipScrollItemVO = require("gge-module:export_CastleMinuteSkipScrollItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleMinuteSkipDialog() {
    var __s3local0 = this;
    __s3local0.STATE_UNDEFINED = 0;
    __s3local0.STATE_DEFAULT = 1;
    __s3local0.STATE_FREESKIP = 2;
    __s3local0.STATE_PRIMESALE = 3;
    __s3local0._currentState = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleMinuteSkipDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMinuteSkipDialog, __s1param0);
  CastleMinuteSkipDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_fullSkip, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_timeSkip_fullSkipCooldownDescription"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_freeSkipOverlay.txt_freeSkipAvailable, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_timeSkip_freeSkipOverlay"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_noMinuteSkips.txt_noMinuteSkips, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_timeSkip_inventoryEmpty")));
    this._progressBar = new __dep_export_AdvancedProgressBar.AdvancedProgressBar(this.dialogDisp.mc_progress.mc_bar, new __dep_export_HorizontalCallbackProgressBehaviour.HorizontalCallbackProgressBehaviour(this.bindFunction(this.onProgressAnimationUpdate), this.bindFunction(this.onProgressAnimationComplete)));
    this._progressBar.scaleX = 0;
    this._feedbackProgressBar = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(this.dialogDisp.mc_progress.mc_feedbackBar);
    this._feedbackProgressBar.scaleX = 0;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_progress.mouseChildren = false;
    this.dialogDisp.mc_progress.toolTipText = "resttime";
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_fullSkip, this.dialogDisp.mc_itemContainer.btn_up, this.dialogDisp.mc_itemContainer.btn_down, this.dialogDisp.mc_itemContainer.item0.btn_skip, this.dialogDisp.mc_itemContainer.item1.btn_skip]);
    this._minuteSkipList = new __dep_export_CastleMinuteSkipItemScrollList.CastleMinuteSkipItemScrollList(this.dialogDisp.mc_itemContainer, this.dialogDisp.mc_itemContainer);
    this._minuteSkipList.scrollItemClass = __dep_export_CastleMinuteSkipScrollItem.CastleMinuteSkipScrollItem;
  };
  CastleMinuteSkipDialog.prototype.onProgressAnimationUpdate = function (__s7param0, __s7param1) {
    this.updateDialog(null);
  };
  CastleMinuteSkipDialog.prototype.onProgressAnimationComplete = function () {};
  CastleMinuteSkipDialog.prototype.showLoaded = function (__s11param0 = null) {
    if (this.arePropertiesValid) {
      __s1param0.prototype.showLoaded.call(this, __s11param0);
      this._currentState = this.STATE_UNDEFINED;
      this.isWaitingForServerMessage = false;
      this.resetAnimationValues();
      this._minuteSkipList.clear();
      for (var __s11local0 = __dep_export_CastleModel.CastleModel.currencyData.getMinuteSkips(), __s11local1 = 0; __s11local1 < __s11local0.length; __s11local1++) {
        var __s11local2 = __s11local0[__s11local1];
        if (__s11local2.amount > 0) {
          this._minuteSkipList.pushContent(new __dep_export_CastleMinuteSkipScrollItemVO.CastleMinuteSkipScrollItemVO(__s11local2));
        }
      }
      this._minuteSkipList.initList(this.initialStartIndex);
      this.dialogDisp.mc_noMinuteSkips.visible = this._minuteSkipList.voList.length == 0;
      this.updateInfoArea();
      this._progressBar.kill();
      this.deduceTime(0);
    }
  };
  Object.defineProperty(CastleMinuteSkipDialog.prototype, "initialStartIndex", {
    get: function () {
      var __s17local0 = 0;
      for (var __s17local1 = 0; __s17local1 < this._minuteSkipList.voList.length; __s17local1++) {
        __s17local0 = __s17local1;
        if (this._minuteSkipList.voList[__s17local1].minuteSkipVO.xmlCurrencyVO.minutesSkipValue * __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC >= this.dialogProperties.getRemainingTime()) {
          break;
        }
      }
      return Math.max(0, __s17local0 - 1);
    },
    enumerable: true,
    configurable: true
  });
  CastleMinuteSkipDialog.prototype.resetAnimationValues = function () {
    this._feedbackProgressBar.scaleX = 0;
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateDialog));
  };
  CastleMinuteSkipDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.onAllianceHelp));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateDialog));
    this._minuteSkipList.addEventListener(__dep_exact_9e901e8e2483a22f_3.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.controller.addEventListener(__dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS, this.bindFunction(this.onUseSucess));
    this.controller.addEventListener(__dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL, this.bindFunction(this.onUseFail));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onRefreshTreasureMap));
  };
  CastleMinuteSkipDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, this.bindFunction(this.onAllianceHelp));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateDialog));
    this._minuteSkipList.removeEventListener(__dep_exact_9e901e8e2483a22f_3.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.controller.removeEventListener(__dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS, this.bindFunction(this.onUseSucess));
    this.controller.removeEventListener(__dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL, this.bindFunction(this.onUseFail));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onRefreshTreasureMap));
    if (this._progressBar) {
      this._progressBar.kill();
    }
  };
  CastleMinuteSkipDialog.prototype.onRefreshTreasureMap = function (__s29param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties, "SkippableCooldownMinuteSkipProperties")) {
      var __s29local0 = this.dialogProperties.mapobjectVO;
      if (__s29local0.mapID > 0) {
        var __s29local1 = __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(__s29local0.mapID);
        if (__s29local1) {
          __s29local0.tMapNode = __s29local1.getNodeById(__s29local0.tMapNode.nodeID);
        }
      }
    }
  };
  CastleMinuteSkipDialog.prototype.onAllianceHelp = function (__s34param0) {
    if (__s34param0.type == __dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE && __s34param0.requestVO.requestTypeId == __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD) {
      this.deduceTime(__dep_export_CastleModel.CastleModel.allianceHelpRequestData.decreaseBuildingTimeAbsolute);
    }
  };
  CastleMinuteSkipDialog.prototype.onUseSucess = function (__s37param0) {
    this.isWaitingForServerMessage = false;
  };
  CastleMinuteSkipDialog.prototype.onUseFail = function (__s39param0) {
    this.isWaitingForServerMessage = false;
    this.resetAnimationValues();
  };
  CastleMinuteSkipDialog.prototype.onCurrenciesUpdated = function (__s41param0) {
    this._minuteSkipList.initList(this._minuteSkipList.currentStartIndex);
  };
  CastleMinuteSkipDialog.prototype.updateInfoArea = function () {
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_timeUntilFreeSkip = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeUntilFreeSkip.txt_time, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_timeSkip_timeUntilFreeSkip", []));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_discount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_fullSkipCost = this.textFieldManager.registerTextField(this.dialogDisp.txt_fullSkipCost, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, this.dialogProperties.getNameText()).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_additionalInfo, this.dialogProperties.getAdditionalInfo()).autoFitToBounds = true;
    this.dialogDisp.mc_typeIcon.gotoAndStop(this.dialogProperties.getIconFrame());
    this.dialogDisp.mc_typeIcon.toolTipText = this.dialogProperties.getIconToolTipText();
    this.dialogDisp.mc_typeIcon.mouseChildren = false;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_picHolder);
    var __s43local0 = this.dialogProperties.displayPicture(this.dialogDisp.mc_picHolder);
    this.scalePicture(__s43local0);
    this.updateDialog(null);
    var __s43local1 = false;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogProperties, "SkippableCooldownMinuteSkipProperties")) {
      __s43local1 = !!this.dialogProperties.useSubscription;
    }
    __s43local1 ||= this._currentState == this.STATE_FREESKIP && __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS);
    __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_time, __s43local1, 40, new __s0local0(360, 0), this._currentState != this.STATE_FREESKIP);
  };
  CastleMinuteSkipDialog.prototype.updateDialog = function (__s46param0) {
    if (this.arePropertiesValid) {
      if (this.dialogProperties.isFreeSkipActive()) {
        this.changeState(this.STATE_FREESKIP);
      } else if (this.dialogProperties.isPrimeSaleActive()) {
        this.changeState(this.STATE_PRIMESALE);
      } else {
        this.changeState(this.STATE_DEFAULT);
      }
      this.updateTexts();
      this.setFullSkipButton(this._currentState);
      this.deduceTime(0);
    }
  };
  CastleMinuteSkipDialog.prototype.changeState = function (__s52param0) {
    if (this._currentState != __s52param0) {
      this.dialogDisp.mc_freeSkipOverlay.visible = __s52param0 == this.STATE_FREESKIP;
      this.dialogDisp.mc_discount.visible = __s52param0 == this.STATE_PRIMESALE;
      this.itxt_discount.textContentVO.textReplacements = __s52param0 == this.STATE_PRIMESALE ? [-this.dialogProperties.getPrimeSaleDiscount()] : [0];
      this.dialogDisp.mc_timeUntilFreeSkip.visible = __s52param0 != this.STATE_FREESKIP && this.dialogProperties.isFreeSkipActive();
      this._currentState = __s52param0;
      this.updateInfoArea();
    }
  };
  CastleMinuteSkipDialog.prototype.setFullSkipButton = function (__s55param0) {
    this.dialogDisp.btn_fullSkip.gotoAndStop(__s55param0);
    switch (__s55param0) {
      case this.STATE_DEFAULT:
        switch (this.dialogProperties.getSkipCost()) {
          case 0:
            this.dialogDisp.btn_fullSkip.toolTipText = {
              t: "freeSkipButton_tooltip",
              p: [this.dialogProperties.getSkipCost()]
            };
            break;
          case 1:
            this.dialogDisp.btn_fullSkip.toolTipText = {
              t: "fullSkipButtonCooldown_tooltip_singular",
              p: [this.dialogProperties.getSkipCost()]
            };
            break;
          default:
            this.dialogDisp.btn_fullSkip.toolTipText = {
              t: "fullSkipButtonCooldown_tooltip",
              p: [this.dialogProperties.getSkipCost()]
            };
        }
        break;
      case this.STATE_FREESKIP:
        this.dialogDisp.btn_fullSkip.toolTipText = "freeSkipButton_tooltip";
        break;
      case this.STATE_PRIMESALE:
        var __s55local0 = __dep_exact_92d05af59ee2ff30.Localize.text("fullSkipButton_tooltip", [this.dialogProperties.getSkipCost()]) + "\n";
        if (this.dialogProperties.getRemainingPrimeSaleTime() >= __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC) {
          if (__dep_export_ClientConstTime.ClientConstTime.isOneHour(this.dialogProperties.getRemainingPrimeSaleTime())) {
            __s55local0 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_singular", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.getPrimeSaleDiscount()])]);
          } else {
            __s55local0 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipHours_plural", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.getPrimeSaleDiscount()]), (this.dialogProperties.getRemainingPrimeSaleTime() * __dep_export_ClientConstTime.ClientConstTime.SEC_2_HOURES).toFixed(1)]);
          }
        } else if (__dep_export_ClientConstTime.ClientConstTime.isOneMinute(this.dialogProperties.getRemainingPrimeSaleTime())) {
          __s55local0 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipMinutes_singular", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.getPrimeSaleDiscount()])]);
        } else {
          __s55local0 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_timeSkip_discountedFullSkip_tooltipMinutes_plural", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.getPrimeSaleDiscount()]), (this.dialogProperties.getRemainingPrimeSaleTime() / __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC).toFixed(0)]);
        }
        this.dialogDisp.btn_fullSkip.toolTipText = __s55local0;
    }
  };
  CastleMinuteSkipDialog.prototype.updateTexts = function () {
    var __s64local0 = this.dialogProperties.getSkipCost() == 0 ? "dialog_timeSkip_freeSkipPrice" : this.dialogProperties.getSkipCost() == 1 ? "dialog_timeSkip_fullSkipPrice_singular" : "dialog_timeSkip_fullSkipPrice_plural";
    if (this.itxt_fullSkipCost.textContentVO) {
      this.itxt_fullSkipCost.textContentVO.textId = __s64local0;
      this.itxt_fullSkipCost.textContentVO.textReplacements = [this.dialogProperties.getSkipCost()];
    }
    this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getHoureMinuteSecondTimeString(this.dialogProperties.getRemainingTime());
  };
  CastleMinuteSkipDialog.prototype.getRemainingTimeScale = function (__s67param0) {
    return Math.min(Math.max(1 - __s67param0 / this.dialogProperties.getTotalTime(), 0), 1);
  };
  CastleMinuteSkipDialog.prototype.onClick = function (__s69param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s69param0.target)) {
      switch (__s69param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_timeSkip_help")));
          break;
        case this.dialogDisp.btn_fullSkip:
          if (!this.isWaitingForServerMessage && this.arePropertiesValid) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getFullSkipCommand());
          }
          this.hide();
      }
    }
  };
  CastleMinuteSkipDialog.prototype.onScrollItemClick = function (__s74param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s74param0.scrollItem.disp.btn_skip) && !this.isWaitingForServerMessage && this.arePropertiesValid && !(this.dialogProperties.getRemainingTime() <= 0) && __s74param0.originTarget == __s74param0.scrollItem.disp.btn_skip) {
      var __s74local0 = __s74param0.scrollItem.scrollItemVO.minuteSkipVO;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getMinuteSkipCommand(__dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(__s74local0.id).jsonKey));
      this.isWaitingForServerMessage = true;
      var __s74local1 = __dep_exact_f855840627e6e145.int(__s74local0.xmlCurrencyVO.minutesSkipValue * __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC);
      this.deduceTime(__s74local1);
      this.clickedSkipButton = __s74param0.scrollItem.disp.btn_skip;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.clickedSkipButton, false);
    }
  };
  CastleMinuteSkipDialog.prototype.deduceTime = function (__s77param0) {
    try {
      var __s77local0 = this.getRemainingTimeScale(this.dialogProperties.getRemainingTime() - __s77param0);
    } catch (__s80local0) {
      this.hide();
      return;
    }
    this._feedbackProgressBar.scaleX = __s77local0;
    if (__s77param0 > 0) {
      this._progressBar.fromTo(this._progressBar.scaleX, __s77local0);
    } else {
      this._progressBar.scaleX = __s77local0;
    }
  };
  Object.defineProperty(CastleMinuteSkipDialog.prototype, "arePropertiesValid", {
    get: function () {
      if (!this.dialogProperties.isSkipAppliable()) {
        this.layoutManager.hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
        this.hide();
      }
      return this.dialogProperties.isSkipAppliable();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMinuteSkipDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMinuteSkipDialog.prototype.scalePicture = function (__s89param0) {
    __s89param0.scaleX = 1;
    __s89param0.scaleY = 1;
    var __s89local0 = CastleMinuteSkipDialog.PICTURE_WIDTH / __s89param0.width;
    if (!(__s89local0 > 1)) {
      if (__s89param0.height * __s89local0 > CastleMinuteSkipDialog.PICTURE_HEIGHT) {
        __s89local0 = CastleMinuteSkipDialog.PICTURE_HEIGHT / __s89param0.height;
      }
      __s89param0.scaleX = __s89param0.scaleY = __s89local0;
    }
  };
  CastleMinuteSkipDialog.NAME = "CastleMinuteSkip";
  CastleMinuteSkipDialog.ICONFRAME_BUILDING = 1;
  CastleMinuteSkipDialog.ICONFRAME_DEMOLISH = 2;
  CastleMinuteSkipDialog.ICONFRAME_REPAIR = 3;
  CastleMinuteSkipDialog.ICONFRAME_RESOURCE_TRANSFER = 4;
  CastleMinuteSkipDialog.ICONFRAME_UNIT_TRANSFER = 5;
  CastleMinuteSkipDialog.ICONFRAME_RESEARCH = 6;
  CastleMinuteSkipDialog.ICONFRAME_ATTACK_COOLDOWN = 7;
  CastleMinuteSkipDialog.PICTURE_WIDTH = 110;
  CastleMinuteSkipDialog.PICTURE_HEIGHT = 155;
  return CastleMinuteSkipDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleMinuteSkipDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleMinuteSkipScrollItem = require("gge-module:export_CastleMinuteSkipScrollItem");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
