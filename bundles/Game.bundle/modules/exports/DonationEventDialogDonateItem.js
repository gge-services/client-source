Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_SliderEvent = require("gge-module:export_SliderEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_ScrollComponent = require("gge-module:export_ScrollComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_DonationEventDialog = require("gge-module:export_DonationEventDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function DonationEventDialogDonateItem(__s3param0, __s3param1) {
    this.donationItemVO = __s3param0;
    this.clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("DonateEventItemMC", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_DonationEventDialog.DonationEventDialog.NAME));
    this.onSelectionChangedSignal = __s3param1;
    if (this.clip.isLoaded) {
      this.fill();
    } else {
      this.clip.doWhenLoaded(this.bindFunction(this.fill));
    }
  }
  DonationEventDialogDonateItem.prototype.show = function () {
    this.itemMC.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.amountSlider.addEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
  };
  DonationEventDialogDonateItem.prototype.hide = function () {
    this.itemMC.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.amountSlider.removeEventListener(__dep_export_SliderEvent.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
  };
  DonationEventDialogDonateItem.prototype.fill = function () {
    this.itxt_amount = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMC.mc_amount.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_deco_specialCurrency_counter", []));
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.itemMC.mc_amount.btn_minus, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.itemMC.mc_amount.btn_plus, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.itemMC.mc_amount.mc_slider.btn_slider, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.itemMC.mc_amount.btn_max, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.amountSlider = new __dep_export_ScrollComponent.ScrollComponent(new __dep_export_BasicSliderVO.BasicSliderVO(this.itemMC.mc_amount.mc_slider.sliderBar, this.itemMC.mc_amount.mc_slider.btn_slider, this.maxAmountOfPackages, 0, this.itemMC), __dep_export_ScrollComponent.ScrollComponent.HORIZONTAL_SLIDER);
    this.amountSlider.setSelectedIndex(0, false);
    this.onSliderValueChange(null, false);
    var __s11local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local1(52, 52));
    __s11local0.tooltip.useAmount = false;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMC.mc_icon);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.itemMC.mc_icon).addInfoBtn(this.itemMC.btn_info), this.donationItemVO.collectableVO, __s11local0);
    this.itemMC.mc_recycle.visible = this.donationItemVO.currencyID > 0 && this.donationItemVO.collectableVO.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_DONATION_CURRENCY));
    this.itemMC.mc_recycle.toolTipText = "dialog_mainDonationEvent_sliders_ResetCurrencyIcon";
    var __s11local1 = this.donationItemVO.ratio <= this.currentAmountInInventory;
    var __s11local2 = this.donationItemVO.maxPointLimit > 0 && this.currentEarnedPoints >= this.donationItemVO.maxPointLimit;
    this.itemMC.mc_amount.btn_minus.visible = this.itemMC.mc_amount.btn_plus.visible = this.itemMC.mc_amount.mc_slider.visible = this.itemMC.mc_amount.mc_barBG.visible = this.itemMC.mc_amount.mc_fill.visible = this.itemMC.mc_amount.btn_max.visible = __s11local1;
    var __s11local3 = "";
    if (__s11local2) {
      __s11local3 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mainDonationEvent_sliders_maxLimitReached");
    } else if (!__s11local1) {
      __s11local3 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mainDonationEvent_sliders_ratio", [this.donationItemVO.ratio]);
    }
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMC.mc_amount.txt_min, new __dep_exact_92d05af59ee2ff30.TextVO(__s11local3)).visible = __s11local3 != "";
    this.itemMC.mc_limit.visible = this.donationItemVO.maxPointLimit > 0;
    this.itemMC.mc_limit.toolTipText = "dialog_mainDonationEvent_sliders_limitTooltip";
    var __s11local4 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMC.txt_max, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [this.currentEarnedPoints * this.donationItemVO.ratio, this.donationItemVO.maxPointLimit * this.donationItemVO.ratio]));
    __s11local4.visible = this.donationItemVO.maxPointLimit > 0;
    __s11local4.color = __s11local2 ? "#F3C24A" : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    this.itxt_amount.color = __s11local2 || __s11local1 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.MODERN_RED;
    this.itxt_amount.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    if (!__s11local2 && !__s11local1 || __s11local2) {
      this.itxt_amount = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMC.mc_amount.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.unfilteredAmountInInventory));
    }
    this.itemMC.mc_amount.y = this.donationItemVO.maxPointLimit > 0 ? 36 : 44;
  };
  DonationEventDialogDonateItem.prototype.onClick = function (__s16param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.itemMC.mc_amount.btn_minus:
          if (this.amountSlider.selectedIndex > 0) {
            this.amountSlider.setSelectedIndex(this.amountSlider.selectedIndex - 1);
          }
          break;
        case this.itemMC.mc_amount.btn_plus:
          if (this.amountSlider.selectedIndex < this.amountSlider.maxSliderSteps) {
            this.amountSlider.setSelectedIndex(this.amountSlider.selectedIndex + 1);
          }
          break;
        case this.itemMC.mc_amount.btn_max:
          this.amountSlider.setSelectedIndex(this.amountSlider.maxSliderSteps);
      }
    }
  };
  DonationEventDialogDonateItem.prototype.onSliderValueChange = function (__s22param0 = null, __s22param1 = true) {
    this.itxt_amount.textContentVO.textReplacements = [this.selectedAmount, this.unfilteredAmountInInventory];
    this.itemMC.mc_amount.mc_fill.scaleX = this.amountSlider.selectedIndex / this.amountSlider.maxSliderSteps;
    if (__s22param1) {
      this.onSelectionChangedSignal.dispatch();
    }
  };
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "unfilteredAmountInInventory", {
    get: function () {
      if (this.donationItemVO.resourceID > 0) {
        if (this.donationItemVO.resourceEnum == __dep_export_CollectableEnum.CollectableEnum.C1) {
          return __dep_export_CastleModel.CastleModel.currencyData.c1Amount;
        } else if (this.donationItemVO.resourceEnum == __dep_export_CollectableEnum.CollectableEnum.C2) {
          return __dep_export_CastleModel.CastleModel.currencyData.c2Amount;
        } else {
          return __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(this.donationItemVO.resourceEnum).amount;
        }
      } else {
        return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.donationItemVO.currencyID);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "currentAmountInInventory", {
    get: function () {
      var __s32local0 = this.unfilteredAmountInInventory;
      if (this.donationItemVO.maxPointLimit <= 0) {
        return Math.floor(__s32local0 / this.donationItemVO.ratio) * this.donationItemVO.ratio;
      } else {
        return Math.min(__s32local0, this.donationItemVO.maxPointLimit * this.donationItemVO.ratio - __dep_export_CastleModel.CastleModel.donationEventData.getCurrentEarnedPointsForItemID(this.donationItemVO.donationItemID) * this.donationItemVO.ratio);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "maxAmountOfPackages", {
    get: function () {
      return Math.floor(this.currentAmountInInventory / this.donationItemVO.ratio);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "selectedAmount", {
    get: function () {
      return this.amountSlider.selectedIndex * this.donationItemVO.ratio;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "selectedPoints", {
    get: function () {
      return this.amountSlider.selectedIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "currentEarnedPoints", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.donationEventData.getCurrentEarnedPointsForItemID(this.donationItemVO.donationItemID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonateItem.prototype, "itemMC", {
    get: function () {
      return this.clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventDialogDonateItem;
}();
exports.DonationEventDialogDonateItem = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "ISublayer");
