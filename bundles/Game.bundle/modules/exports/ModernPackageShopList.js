Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastlePackageEvent = require("gge-module:export_CastlePackageEvent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopList(__s3param0) {
    var __s3local0 = this;
    __s3local0._items = [];
    __s3local0._buyType = -1;
    __s3local0._buyTypeId = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopList, __s1param0);
  ModernPackageShopList.prototype.init = function () {
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL * ModernPackageShopList.VISIBLE_ITEMS_VERTICAL));
    this._scrollComponent.triggerSignalOnlyOnValueChanged = true;
    for (var __s5local0 = 0;; ++__s5local0) {
      var __s5local1 = this.disp.getChildByName("item" + __s5local0);
      if (!__s5local1) {
        break;
      }
      this._items.push(new __dep_export_ModernPackageShopListItem.ModernPackageShopListItem(__s5local1));
    }
  };
  ModernPackageShopList.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoUpdated));
    this._scrollComponent.show();
    if (this._items != null) {
      for (var __s10local0 = 0, __s10local1 = this._items; __s10local0 < __s10local1.length; __s10local0++) {
        var __s10local2 = __s10local1[__s10local0];
        if (__s10local2 !== undefined) {
          __s10local2.onShow();
        }
      }
    }
  };
  ModernPackageShopList.prototype.onHide = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoUpdated));
    this._scrollComponent.hide();
    if (this._items != null) {
      for (var __s16local0 = 0, __s16local1 = this._items; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined) {
          __s16local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  ModernPackageShopList.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  ModernPackageShopList.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
  };
  ModernPackageShopList.prototype.updateWithNewData = function (__s26param0, __s26param1, __s26param2 = -1, __s26param3 = -1) {
    this._eventVO = __s26param1;
    this._currentEventPackages = __s26param0;
    this._buyType = __s26param2;
    this._buyTypeId = __s26param3;
    var __s26local0 = Math.max(0, __s26param0.length - ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL * ModernPackageShopList.VISIBLE_ITEMS_VERTICAL);
    __s26local0 = Math.ceil(__s26local0 / ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL);
    this._scrollComponent.init(0, __s26local0);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.setVisibility(__s26local0 > 0);
  };
  ModernPackageShopList.prototype.updateItems = function () {
    var __s28local0 = this.getCurrentPackageStartIndex();
    for (var __s28local1 = 0; __s28local1 < this._items.length; ++__s28local1) {
      var __s28local2 = this._items[__s28local1];
      var __s28local3 = __s28local0 + __s28local1 < this._currentEventPackages.length ? this._currentEventPackages[__s28local0 + __s28local1] : null;
      __s28local2.updateWithNewData(__s28local3, this._eventVO, this.buyType, this.buyTypeId);
    }
  };
  ModernPackageShopList.prototype.getCurrentPackageStartIndex = function () {
    return __dep_exact_f855840627e6e145.int(this._scrollComponent.currentValue * ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL);
  };
  ModernPackageShopList.prototype.onScrollValueChanged = function () {
    this.updateItems();
  };
  ModernPackageShopList.prototype.onPackageInfoUpdated = function (__s36param0) {
    this.updateItems();
  };
  Object.defineProperty(ModernPackageShopList.prototype, "buyType", {
    get: function () {
      return this._buyType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopList.prototype, "buyTypeId", {
    get: function () {
      return this._buyTypeId;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopList.__initialize_static_members = function () {
    ModernPackageShopList.VISIBLE_ITEMS_HORIZONTAL = 3;
    ModernPackageShopList.VISIBLE_ITEMS_VERTICAL = 3;
  };
  return ModernPackageShopList;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ModernPackageShopList = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_ModernPackageShopListItem = require("gge-module:export_ModernPackageShopListItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IPackageShopList");
__s0local0.__initialize_static_members();
