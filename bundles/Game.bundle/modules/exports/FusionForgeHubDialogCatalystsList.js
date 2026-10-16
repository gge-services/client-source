Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyHorizontal = require("gge-module:export_DynamicSizeScrollStrategyHorizontal");
var __s0local0 = function (__s1param0) {
  function FusionForgeHubDialogCatalystsList(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._items = [];
    __s3local0._forgeId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._forgeId = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeHubDialogCatalystsList, __s1param0);
  FusionForgeHubDialogCatalystsList.prototype.init = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.getTitleTextId()))).autoFitToBounds = true;
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp.mc_scrollArea, this.disp.mc_container, this.disp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyHorizontal.DynamicSizeScrollStrategyHorizontal(true));
  };
  FusionForgeHubDialogCatalystsList.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    if (this._items != null) {
      for (var __s7local0 = 0, __s7local1 = this._items; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
  };
  FusionForgeHubDialogCatalystsList.prototype.onHide = function () {
    this._scrollComponent.hide();
    if (this._items != null) {
      for (var __s13local0 = 0, __s13local1 = this._items; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  FusionForgeHubDialogCatalystsList.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  FusionForgeHubDialogCatalystsList.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  FusionForgeHubDialogCatalystsList.prototype.update = function () {
    if (this._items != null) {
      for (var __s23local0 = 0, __s23local1 = this._items; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          __s23local2.destroy();
        }
      }
    }
    this._items = [];
    var __s23local3 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(this._forgeId).getAvailableCatalysts();
    var __s23local4 = 0;
    if (__s23local3 != null) {
      for (var __s23local5 = 0, __s23local6 = __s23local3; __s23local5 < __s23local6.length; __s23local5++) {
        var __s23local7 = __s23local6[__s23local5];
        if (__s23local7 !== undefined) {
          __s23local2 = new __dep_export_FusionForgeHubDialogCatalystsListItem.FusionForgeHubDialogCatalystsListItem(__s23local7);
          this._items.push(__s23local2);
          this.itemsMc.addChild(__s23local2.disp);
          if (this.isShown) {
            __s23local2.onShow();
          }
          __s23local2.disp.x = __s23local4;
          __s23local2.disp.y = 0;
          __s23local4 += __s23local2.disp.width + FusionForgeHubDialogCatalystsList.ITEM_DISTANCE_X;
        }
      }
    }
    var __s23local8 = __dep_exact_9e901e8e2483a22f.MathBase.max(this.itemsMc.width - FusionForgeHubDialogCatalystsList.ITEM_CONTAINER_WIDTH, 0);
    this._scrollComponent.init(0, __s23local8, FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DELTA, FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DELTA);
    this._scrollComponent.scrollToPercent(0);
    this.updateListScrollPosition(false);
    this._scrollComponent.setVisibility(__s23local8 > 0);
  };
  FusionForgeHubDialogCatalystsList.prototype.updateListScrollPosition = function (__s34param0 = true) {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.itemsMc);
    var __s34local0 = -this._scrollComponent.currentValue;
    if (__s34param0) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.itemsMc, FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DURATION, {
        x: __s34local0,
        ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
      });
    } else {
      this.itemsMc.x = __s34local0;
    }
  };
  FusionForgeHubDialogCatalystsList.prototype.getTitleTextId = function () {
    switch (this._forgeId) {
      case __dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID:
        return "dialog_fusionHub_catalystOverview_deco";
      default:
        return "";
    }
  };
  FusionForgeHubDialogCatalystsList.prototype.onScrollValueChanged = function () {
    this.updateListScrollPosition();
  };
  Object.defineProperty(FusionForgeHubDialogCatalystsList.prototype, "itemsMc", {
    get: function () {
      return this.disp.mc_container.mc_items;
    },
    enumerable: true,
    configurable: true
  });
  FusionForgeHubDialogCatalystsList.__initialize_static_members = function () {
    FusionForgeHubDialogCatalystsList.ITEM_DISTANCE_X = 20;
    FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DELTA = 105 + FusionForgeHubDialogCatalystsList.ITEM_DISTANCE_X;
    FusionForgeHubDialogCatalystsList.ITEM_CONTAINER_WIDTH = 725;
    FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DURATION = 0.2;
  };
  return FusionForgeHubDialogCatalystsList;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.FusionForgeHubDialogCatalystsList = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_FusionForgeHubDialogCatalystsListItem = require("gge-module:export_FusionForgeHubDialogCatalystsListItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
