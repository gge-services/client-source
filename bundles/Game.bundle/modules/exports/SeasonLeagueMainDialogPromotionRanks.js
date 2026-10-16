Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyHorizontal = require("gge-module:export_DynamicSizeScrollStrategyHorizontal");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueMainDialogPromotionRanks(__s3param0) {
    var __s3local0 = this;
    __s3local0._items = [];
    __s3local0._currentSelectedId = -1;
    __s3local0._onSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogPromotionRanks, __s1param0);
  SeasonLeagueMainDialogPromotionRanks.prototype.init = function () {
    this._scrollComponent = new __s0local1(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]), new __dep_export_DynamicSizeScrollStrategyHorizontal.DynamicSizeScrollStrategyHorizontal(true));
    this._scrollComponent.init(0, __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getNumberOfPromotions() - SeasonLeagueMainDialogPromotionRanks.NUMBER_OF_ITEMS);
    for (var __s5local0 = 0; __s5local0 < SeasonLeagueMainDialogPromotionRanks.NUMBER_OF_ITEMS; ++__s5local0) {
      this._items.push(new __dep_export_SeasonLeagueMainDialogPromotionRanksItem.SeasonLeagueMainDialogPromotionRanksItem(this.disp.getChildByName("mc_item" + __s5local0)));
    }
    this._tooltip = new __dep_export_SeasonLeagueMainDialogPromotionTooltip.SeasonLeagueMainDialogPromotionTooltip(this.disp.mc_tooltip);
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    this._tooltip.onShow();
    if (this._items != null) {
      for (var __s9local0 = 0, __s9local1 = this._items; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          __s9local2.onShow();
        }
      }
    }
    this._currentSelectedId = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id);
    this._scrollComponent.scrollToPercent(0);
    this._tooltip.setVisibility(false);
    __dep_export_CastleModel.CastleModel.seasonLeagueData.server.requestKLH();
    this.update();
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onHide = function () {
    this._scrollComponent.hide();
    this._tooltip.onHide();
    if (this._items != null) {
      for (var __s15local0 = 0, __s15local1 = this._items; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    if (this._items != null) {
      for (var __s21local0 = 0, __s21local1 = this._items; __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (__s21local2 !== undefined) {
          __s21local2.onClickedSignal.add(this.bindFunction(this.onItemClicked));
        }
      }
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    if (this._items != null) {
      for (var __s27local0 = 0, __s27local1 = this._items; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          __s27local2.onClickedSignal.remove(this.bindFunction(this.onItemClicked));
        }
      }
    }
    __s1param0.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.update = function () {
    this.updateItems();
    this._tooltip.update();
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.updateItems = function () {
    for (var __s35local0 = 0; __s35local0 < this._items.length; ++__s35local0) {
      this._items[__s35local0].updateWithNewData(__dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotion(this._scrollComponent.currentValue + __s35local0 + 1));
    }
    this.updateSelection();
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.updateSelection = function (__s39param0 = -1) {
    if (__s39param0 >= 0) {
      this._currentSelectedId = __s39param0;
    }
    if (this._items != null) {
      for (var __s39local0 = 0, __s39local1 = this._items; __s39local0 < __s39local1.length; __s39local0++) {
        var __s39local2 = __s39local1[__s39local0];
        if (__s39local2 !== undefined) {
          __s39local2.setSelection(this._currentSelectedId == __s39local2.promotionVO.id);
        }
      }
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.getTooltipAlignByItemIndex = function (__s46param0) {
    if (__s46param0 <= 0) {
      return __dep_export_SeasonLeagueMainDialogPromotionTooltip.SeasonLeagueMainDialogPromotionTooltip.ALIGN_LEFT;
    } else if (__s46param0 >= SeasonLeagueMainDialogPromotionRanks.NUMBER_OF_ITEMS - 1) {
      return __dep_export_SeasonLeagueMainDialogPromotionTooltip.SeasonLeagueMainDialogPromotionTooltip.ALIGN_RIGHT;
    } else {
      return __dep_export_SeasonLeagueMainDialogPromotionTooltip.SeasonLeagueMainDialogPromotionTooltip.ALIGN_CENTER;
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onScroll = function () {
    this._scrollComponent.scrollToValue(this._scrollComponent.currentValue, false);
    this.updateItems();
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onItemClicked = function (__s53param0) {
    if (__s53param0 != this._currentSelectedId) {
      this.updateSelection(__s53param0);
      this.onSelectionChanged.dispatch();
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onMouseOver = function (__s56param0) {
    __s1param0.prototype.onMouseOver.call(this, __s56param0);
    for (var __s56local0 = 0; __s56local0 < this._items.length; ++__s56local0) {
      var __s56local1 = this._items[__s56local0];
      if (__s56param0.target == __s56local1.disp && __s56local1.canShowTooltip()) {
        this._tooltip.setVisibility(true);
        this._tooltip.setPosition(__s56local1.disp.x, this.getTooltipAlignByItemIndex(__s56local0));
      }
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onMouseOut = function (__s61param0) {
    __s1param0.prototype.onMouseOut.call(this, __s61param0);
    if (this._items != null) {
      for (var __s61local0 = 0, __s61local1 = this._items; __s61local0 < __s61local1.length; __s61local0++) {
        var __s61local2 = __s61local1[__s61local0];
        if (__s61local2 !== undefined && __s61param0.target == __s61local2.disp) {
          this._tooltip.setVisibility(false);
        }
      }
    }
  };
  SeasonLeagueMainDialogPromotionRanks.prototype.onPlayerRankUpdated = function (__s67param0) {
    this._tooltip.update();
  };
  Object.defineProperty(SeasonLeagueMainDialogPromotionRanks.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueMainDialogPromotionRanks.prototype, "currentSelectedId", {
    get: function () {
      return this._currentSelectedId;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueMainDialogPromotionRanks.NUMBER_OF_ITEMS = 5;
  return SeasonLeagueMainDialogPromotionRanks;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeagueMainDialogPromotionRanks = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SeasonLeagueMainDialogPromotionRanksItem = require("gge-module:export_SeasonLeagueMainDialogPromotionRanksItem");
var __dep_export_SeasonLeagueMainDialogPromotionTooltip = require("gge-module:export_SeasonLeagueMainDialogPromotionTooltip");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __s0local1 = function (__s73param0) {
  function SeasonLeaguePromotionRanksSliderScrollComponent() {
    return __s73param0 !== null && __s73param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeaguePromotionRanksSliderScrollComponent, __s73param0);
  SeasonLeaguePromotionRanksSliderScrollComponent.prototype.onSliderLineClick = function (__s77param0) {
    if (this.isEnabled) {
      this.scrollToPercent(this.strategy.getPercentFactorOfMousePos(-this.scrollVO.sliderButton.width / 2));
    }
  };
  return SeasonLeaguePromotionRanksSliderScrollComponent;
}(__dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent);
