Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleVIPDataEvent = require("gge-module:export_CastleVIPDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextScrollVO = require("gge-module:export_CastleTextScrollVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleVIPBuyPointsTimeDialogProperties = require("gge-module:export_CastleVIPBuyPointsTimeDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastlePremiumMarketPlaceDialogVIP(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentLevel = 1;
    __s3local0._currentHighlightLevel = 1;
    __s3local0._vipPointsDiscount = 0;
    __s3local0._vipTimeDiscount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePremiumMarketPlaceDialogVIP, __s1param0);
  CastlePremiumMarketPlaceDialogVIP.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.initBasicButtons([this.subLayerDisp.btn_activateVIP, this.subLayerDisp.btn_addPremiumPoints, this.subLayerDisp.btn_progressMarker_level1, this.subLayerDisp.btn_progressMarker_level2, this.subLayerDisp.btn_progressMarker_level3, this.subLayerDisp.btn_progressMarker_level4, this.subLayerDisp.btn_progressMarker_level5, this.subLayerDisp.btn_progressMarker_level6, this.subLayerDisp.btn_progressMarker_level7, this.subLayerDisp.btn_progressMarker_level8, this.subLayerDisp.btn_progressMarker_level9, this.subLayerDisp.btn_progressMarker_level10, this.subLayerDisp.btn_scrollVIPLevel_down, this.subLayerDisp.btn_scrollVIPLevel_left, this.subLayerDisp.btn_scrollVIPLevel_right, this.subLayerDisp.btn_scrollVIPLevel_up]);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_VipScreen_description_copy_v2", [__dep_exact_26a421b704832cff_1.PlayerConst.DAILY_VIP_POINTS_LOSS]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_runtimeLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_VipScreen_vipTime")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_premiumPointsLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_VipScreen_premiumPoints_v2")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.subLayerDisp.mc_progressbar.mouseChildren = false;
    this.levelMarkers = [];
    for (var __s5local0 = 1; __s5local0 <= 10; __s5local0++) {
      var __s5local1 = this.subLayerDisp.getChildByName("btn_progressMarker_level" + __s5local0);
      this.textFieldManager.registerTextField(__s5local1.txt_level, new __dep_exact_92d05af59ee2ff30_2.NumberVO(__s5local0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      __s5local1.toolTipText = {
        t: "dialog_VipScreen_vipLevel_v2",
        p: [__s5local0]
      };
      this.levelMarkers.push(__s5local1);
    }
    this._buyVipTimeButton = new __dep_export_ButtonBuyVipTimeComponent.ButtonBuyVipTimeComponent(this.subLayerDisp.btn_activateVIP.basicButton, this.subLayerDisp.btn_activateVIP.txt_activate);
    this._scrollComponent = new __dep_export_CastleTextScrollComponent.CastleTextScrollComponent(new __dep_export_CastleTextScrollVO.CastleTextScrollVO(this.subLayerDisp.txt_bonusDesc_middle, this.subLayerDisp.btn_scrollVIPLevel_up, this.subLayerDisp.btn_scrollVIPLevel_down, null, null, [this.subLayerDisp.levelScrollBackground]));
    this._scrollComponent.invisibleOnFit = true;
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
    this.itxt_BonusLevelContent = this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_middle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_CastleVIPLevelInfoTextComposer.CastleVIPLevelInfoTextComposer.generateBonusText(__dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentHighlightLevel))), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    this.updateVIPData();
    this._currentHighlightLevel = this._currentLevel;
    this.setLevelBonusText();
    __dep_export_CastleModel.CastleModel.vipData.addEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    this.checkVipPackagePrimeSale();
    this.handleDiscountIcons();
    this._buyVipTimeButton.onShow();
    this._scrollComponent.onShow();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.onEventsChange = function (__s9param0) {
    this.checkVipPackagePrimeSale();
    this.handleDiscountIcons();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.handleDiscountIcons = function () {
    if (this._vipPointsDiscount > 0) {
      if (!this._vipPointsDiscountIcon) {
        this._vipPointsDiscountIcon = new Library.CastleInterfaceElements_Icons.Icon_Generic_Discount();
        __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.scaleToFit(this._vipPointsDiscountIcon, 40, 45);
        this._vipPointsDiscountIcon.x = -this.subLayerDisp.btn_addPremiumPoints.width / 2;
        this._vipPointsDiscountIcon.y = -this.subLayerDisp.btn_addPremiumPoints.height / 2 + CastlePremiumMarketPlaceDialogVIP.DISCOUNT_ICON_OFFSET;
      }
      this.textFieldManager.registerTextField(this._vipPointsDiscountIcon.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this._vipPointsDiscount]));
      this.subLayerDisp.btn_addPremiumPoints.addChild(this._vipPointsDiscountIcon);
    } else if (this._vipPointsDiscountIcon && this._vipPointsDiscountIcon.stage) {
      this._vipPointsDiscountIcon.parent.removeChild(this._vipPointsDiscountIcon);
    }
    if (this._vipTimeDiscount > 0) {
      if (!this._vipTimeDiscountIcon) {
        this._vipTimeDiscountIcon = new Library.CastleInterfaceElements_Icons.Icon_Generic_Discount();
        __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.scaleToFit(this._vipTimeDiscountIcon, 40, 45);
        this._vipTimeDiscountIcon.x = -this.subLayerDisp.btn_activateVIP.width / 2;
        this._vipTimeDiscountIcon.y = -this.subLayerDisp.btn_activateVIP.height / 2 + CastlePremiumMarketPlaceDialogVIP.DISCOUNT_ICON_OFFSET;
      }
      this.textFieldManager.registerTextField(this._vipTimeDiscountIcon.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this._vipTimeDiscount]));
      this.subLayerDisp.btn_activateVIP.addChild(this._vipTimeDiscountIcon);
    } else if (this._vipTimeDiscountIcon && this._vipTimeDiscountIcon.stage) {
      this._vipTimeDiscountIcon.parent.removeChild(this._vipTimeDiscountIcon);
    }
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.vipData.removeEventListener(__dep_export_CastleVIPDataEvent.CastleVIPDataEvent.VIP_DATA_UPDATED, this.bindFunction(this.onDataChanged));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChange));
    if (this._buyVipTimeButton) {
      this._buyVipTimeButton.onHide();
    }
    if (this._scrollComponent) {
      this._scrollComponent.onHide();
    }
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.onDataChanged = function (__s23param0) {
    this.updateVIPData();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.onTimerUpdate = function (__s25param0) {
    if (__dep_export_CastleModel.CastleModel.vipData.vipModeActive) {
      this.itxt_runtimeValue.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__dep_export_CastleModel.CastleModel.vipData.remainingVIPTimeInSeconds);
    } else {
      this.itxt_runtimeValue = this.textFieldManager.registerTextField(this.subLayerDisp.txt_runtimeValue, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_VipScreen_vipTime_notActive"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
    this.itxt_runtimeValue.color = __dep_export_CastleModel.CastleModel.vipData.vipModeActive ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.updateVIPData = function () {
    this._currentLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.vipData.currentVIPLevel);
    if (__dep_export_CastleModel.CastleModel.vipData.vipModeActive) {
      var __s29local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__dep_export_CastleModel.CastleModel.vipData.remainingVIPTimeInSeconds);
      this.itxt_runtimeValue = this.textFieldManager.registerTextField(this.subLayerDisp.txt_runtimeValue, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s29local0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    } else {
      this.itxt_runtimeValue = this.textFieldManager.registerTextField(this.subLayerDisp.txt_runtimeValue, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_VipScreen_vipTime_notActive"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    }
    this.itxt_runtimeValue.color = __dep_export_CastleModel.CastleModel.vipData.vipModeActive ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN : __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_premiumPointsValue, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.vipData.currentPremiumPoints), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    this._currentHighlightLevel = this._currentLevel;
    this.setButtonVisibility();
    this.setProgressbar();
    this.setLevelBonusText();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.setProgressbar = function () {
    var __s33local0 = __dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentLevel + 1);
    if (__s33local0) {
      var __s33local1 = __dep_exact_f855840627e6e145.int(__s33local0.minVIPPoints - __dep_export_CastleModel.CastleModel.vipData.currentPremiumPoints);
      this.subLayerDisp.mc_progressbar.toolTipText = __s33local1 == 1 ? {
        t: "dialog_VipScreen_vipPointsThreshold_singular_v2",
        p: [__s33local0.levelID]
      } : {
        t: "dialog_VipScreen_vipPointsThreshold_v2",
        p: [__s33local1, __s33local0.levelID]
      };
    } else {
      this.subLayerDisp.mc_progressbar.toolTipText = {
        t: "dialog_VipBonus_message_header_v2",
        p: [__dep_export_CastleModel.CastleModel.vipData.maxLevel]
      };
    }
    this.subLayerDisp.mc_progressbar.mc_mask.scaleX = this.calcProgressbarScale();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.calcProgressbarScale = function () {
    if (this._currentLevel == __dep_export_CastleModel.CastleModel.vipData.maxLevel) {
      return 1;
    }
    var __s37local0 = 1 / (__dep_export_CastleModel.CastleModel.vipData.maxLevel - 1);
    var __s37local1 = __dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentLevel);
    var __s37local2 = Number(__dep_export_CastleModel.CastleModel.vipData.currentPremiumPoints - __s37local1.minVIPPoints) / (__s37local1.maxVIPPoints - __s37local1.minVIPPoints);
    return (this._currentLevel - 1) * __s37local0 + __s37local2 * __s37local0;
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.checkVipPackagePrimeSale = function () {
    this._vipPointsDiscount = 0;
    this._vipTimeDiscount = 0;
    var __s40local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES), "EventPackagePrimeSaleEventVO");
    if (__s40local0) {
      for (var __s40local1 = 0, __s40local2 = __s40local0.packageIDs; __s40local1 < __s40local2.length; __s40local1++) {
        var __s40local3 = __s40local2[__s40local1];
        if (__s40local3 !== undefined) {
          var __s40local4 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s40local3);
          if (__s40local4 && __s40local4.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_VIP) {
            if (__s40local4.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_POINTS) {
              this._vipPointsDiscount = __s40local0.discount;
            } else if (__s40local4.reward.itemType == __dep_export_CollectableEnum.CollectableEnum.VIP_TIME) {
              this._vipTimeDiscount = __s40local0.discount;
            }
          }
        }
      }
    }
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.setButtonVisibility = function () {
    if (__dep_export_CastleModel.CastleModel.vipData.currentPremiumPoints >= __dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(__dep_export_CastleModel.CastleModel.vipData.maxLevel).minVIPPoints) {
      this.subLayerDisp.btn_addPremiumPoints.toolTipText = "dialog_buyVipPoints_maxAmountTotal_v2";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_addPremiumPoints, false);
    } else {
      this.subLayerDisp.btn_addPremiumPoints.toolTipText = "dialog_VipScreen_buyPoints_tooltip_v2";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_addPremiumPoints, true);
    }
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.setLevelBonusText = function () {
    if (this._currentHighlightLevel <= 1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_left, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_left, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_scrollVIPLevel_left, false);
      this.subLayerDisp.mc_BonusHeader_left.visible = false;
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_left, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_VipScreen_vipLevel_v2", [this._currentHighlightLevel - 1]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_left, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_CastleVIPLevelInfoTextComposer.CastleVIPLevelInfoTextComposer.generateBonusText(__dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentHighlightLevel - 1), CastlePremiumMarketPlaceDialogVIP.MAX_BONUS_LINES)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_scrollVIPLevel_left, true);
      this.subLayerDisp.mc_BonusHeader_left.visible = true;
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_middle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_VipScreen_vipLevel_v2", [this._currentHighlightLevel]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    this.itxt_BonusLevelContent.textContentVO.stringValue = __dep_export_CastleVIPLevelInfoTextComposer.CastleVIPLevelInfoTextComposer.generateBonusText(__dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentHighlightLevel));
    if (this._currentHighlightLevel >= __dep_export_CastleModel.CastleModel.vipData.maxLevel) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_right, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_right, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_scrollVIPLevel_right, false);
      this.subLayerDisp.mc_BonusHeader_right.visible = false;
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_BonusHead_right, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_VipScreen_vipLevel_v2", [this._currentHighlightLevel + 1]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_bonusDesc_right, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_CastleVIPLevelInfoTextComposer.CastleVIPLevelInfoTextComposer.generateBonusText(__dep_export_CastleModel.CastleModel.vipData.getVIPLevelInfoVOByLevel(this._currentHighlightLevel + 1), CastlePremiumMarketPlaceDialogVIP.MAX_BONUS_LINES)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_scrollVIPLevel_right, true);
      this.subLayerDisp.mc_BonusHeader_right.visible = true;
    }
    for (var __s53local0 = [this.subLayerDisp.mc_BonusHeader_left, this.subLayerDisp.mc_BonusHeader_middle, this.subLayerDisp.mc_BonusHeader_right], __s53local1 = this._currentLevel - this._currentHighlightLevel + 1, __s53local2 = 0; __s53local2 < __s53local0.length; __s53local2++) {
      __s53local0[__s53local2].gotoAndStop(1);
    }
    if (__s53local1 >= 0 && __s53local1 < __s53local0.length) {
      __s53local0[__s53local1].gotoAndStop(2);
    }
    this._scrollComponent.scrollToStart();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.scrollLevelBonus = function (__s62param0) {
    this._currentHighlightLevel += __s62param0;
    this.setLevelBonusText();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.jumpToLevelBonus = function (__s64param0) {
    this._currentHighlightLevel = __s64param0;
    this.setLevelBonusText();
  };
  CastlePremiumMarketPlaceDialogVIP.prototype.onClick = function (__s66param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s66param0.target)) {
      __s1param0.prototype.onClick.call(this, __s66param0);
      switch (__s66param0.target) {
        case this.subLayerDisp.btn_activateVIP:
          this._buyVipTimeButton.onClickButton();
          break;
        case this.subLayerDisp.btn_addPremiumPoints:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleVIPBuyPointsTimeDialog.CastleVIPBuyPointsTimeDialog, new __dep_export_CastleVIPBuyPointsTimeDialogProperties.CastleVIPBuyPointsTimeDialogProperties(__dep_export_CollectableEnum.CollectableEnum.VIP_POINTS));
          break;
        case this.subLayerDisp.btn_scrollVIPLevel_left:
          this.scrollLevelBonus(CastlePremiumMarketPlaceDialogVIP.SCROLL_LEFT);
          break;
        case this.subLayerDisp.btn_scrollVIPLevel_right:
          this.scrollLevelBonus(CastlePremiumMarketPlaceDialogVIP.SCROLL_RIGHT);
      }
      if (this.levelMarkers != null) {
        for (var __s66local0 = 0, __s66local1 = this.levelMarkers; __s66local0 < __s66local1.length; __s66local0++) {
          var __s66local2 = __s66local1[__s66local0];
          if (__s66local2 !== undefined && __s66param0.target == __s66local2) {
            var __s66local3 = __dep_exact_f855840627e6e145.int(this.levelMarkers.indexOf(__s66local2) + 1);
            this.jumpToLevelBonus(__s66local3);
          }
        }
      }
    }
  };
  CastlePremiumMarketPlaceDialogVIP.__initialize_static_members = function () {
    CastlePremiumMarketPlaceDialogVIP.NAME = "CastlePremiumMarketPlaceDialogVIP";
    CastlePremiumMarketPlaceDialogVIP.MAX_BONUS_LINES = 10;
    CastlePremiumMarketPlaceDialogVIP.SCROLL_RIGHT = 1;
    CastlePremiumMarketPlaceDialogVIP.DISCOUNT_ICON_OFFSET = 10;
  };
  CastlePremiumMarketPlaceDialogVIP.SCROLL_LEFT = -1;
  return CastlePremiumMarketPlaceDialogVIP;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastlePremiumMarketPlaceDialogVIP = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonBuyVipTimeComponent = require("gge-module:export_ButtonBuyVipTimeComponent");
var __dep_export_CastleTextScrollComponent = require("gge-module:export_CastleTextScrollComponent");
var __dep_export_CastleVIPLevelInfoTextComposer = require("gge-module:export_CastleVIPLevelInfoTextComposer");
var __dep_export_CastleVIPBuyPointsTimeDialog = require("gge-module:export_CastleVIPBuyPointsTimeDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
