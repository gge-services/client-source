Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function CastleAllianceDialogTreasuryBooster(__s3param0) {
    var __s3local0 = this;
    __s3local0._items = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceDialogTreasuryBooster, __s1param0);
  CastleAllianceDialogTreasuryBooster.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_treasury_alliBoosters_info"));
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  CastleAllianceDialogTreasuryBooster.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._items != null) {
      for (var __s7local0 = 0, __s7local1 = this._items; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
  };
  CastleAllianceDialogTreasuryBooster.prototype.onHide = function () {
    if (this._items != null) {
      for (var __s13local0 = 0, __s13local1 = this._items; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  CastleAllianceDialogTreasuryBooster.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleAllianceDialogTreasuryBooster.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleAllianceDialogTreasuryBooster.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    if (this._items != null) {
      for (var __s23local0 = 0, __s23local1 = this._items; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          __s23local2.destroy();
        }
      }
    }
    this._items = [];
    var __s23local3 = this.getItemMc();
    __s23local3.removeChildren();
    var __s23local4 = this.getBuffSeriesIds();
    if (__s23local4 != null) {
      for (var __s23local5 = 0, __s23local6 = __s23local4; __s23local5 < __s23local6.length; __s23local5++) {
        var __s23local7 = __s23local6[__s23local5];
        if (__s23local7 !== undefined) {
          var __s23local8 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__s23local7, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getBoostLevel(__s23local7));
          __s23local2 = new (this.getItemClassBySeriesId(__s23local7, __dep_export_CastleModel.CastleModel.allianceBuffData.getMaxBuffVOByID(__s23local8.seriesID).boni.length))(__s23local3, __s23local8);
          if (this.isShown) {
            __s23local2.onShow();
          }
          __s23local2.update();
          this._items.push(__s23local2);
        }
      }
    }
    var __s23local9 = 0;
    for (var __s23local10 = 0, __s23local11 = this._items; __s23local10 < __s23local11.length; __s23local10++) {
      (__s23local2 = __s23local11[__s23local10]).disp.y = __s23local9;
      __s23local9 += __s23local2.disp.height;
    }
    var __s23local12 = __dep_exact_f855840627e6e145.int(Math.max(0, __s23local3.height - CastleAllianceDialogTreasuryBooster.ITEM_MASK_HEIGHT));
    var __s23local13 = this._scrollComponent.currentValue;
    this._scrollComponent.init(0, __s23local12, CastleAllianceDialogTreasuryBooster.ITEM_SCROLL_DELTA, CastleAllianceDialogTreasuryBooster.ITEM_SCROLL_DELTA);
    this._scrollComponent.setVisibility(__s23local12 > 0);
    this._scrollComponent.scrollToValue(__s23local13);
  };
  CastleAllianceDialogTreasuryBooster.prototype.updateScrollPosition = function () {
    this.getItemMc().y = -this._scrollComponent.currentValue;
  };
  CastleAllianceDialogTreasuryBooster.prototype.getItemMc = function () {
    return this.disp.mc_items.mc_transform;
  };
  CastleAllianceDialogTreasuryBooster.prototype.getBuffSeriesIds = function () {
    return __dep_export_CastleModel.CastleModel.allianceBuffData.getSeriesIDsOfPurchasableBuffs();
  };
  CastleAllianceDialogTreasuryBooster.prototype.getItemClassBySeriesId = function (__s42param0, __s42param1) {
    if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isBoosterTemporary(__s42param0)) {
      if (__s42param1 <= 1) {
        return __dep_export_CastleAllianceDialogTreasuryBoosterItemTemp.CastleAllianceDialogTreasuryBoosterItemTemp;
      } else {
        return __dep_export_CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects.CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects;
      }
    } else {
      return __dep_export_CastleAllianceDialogTreasuryBoosterItem_OneEffect.CastleAllianceDialogTreasuryBoosterItem_OneEffect;
    }
  };
  CastleAllianceDialogTreasuryBooster.prototype.onScroll = function () {
    this.updateScrollPosition();
  };
  CastleAllianceDialogTreasuryBooster.ITEM_MASK_HEIGHT = 280;
  CastleAllianceDialogTreasuryBooster.ITEM_SCROLL_DELTA = 80;
  return CastleAllianceDialogTreasuryBooster;
}(require("gge-module:export_ACastleAllianceDialogTreasurySublayer").ACastleAllianceDialogTreasurySublayer);
exports.CastleAllianceDialogTreasuryBooster = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_CastleAllianceDialogTreasuryBoosterItem_OneEffect = require("gge-module:export_CastleAllianceDialogTreasuryBoosterItem_OneEffect");
var __dep_export_CastleAllianceDialogTreasuryBoosterItemTemp = require("gge-module:export_CastleAllianceDialogTreasuryBoosterItemTemp");
var __dep_export_CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects = require("gge-module:export_CastleAllianceDialogTreasuryBoosterItemTemp_TwoEffects");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
