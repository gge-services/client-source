Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlePackageEvent = require("gge-module:export_CastlePackageEvent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __s0local0 = function (__s1param0) {
  function InfiniteScrollPackageShopList(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._buyType = -1;
    __s3local0._buyTypeId = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._assetName = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InfiniteScrollPackageShopList, __s1param0);
  InfiniteScrollPackageShopList.prototype.init = function () {
    var __s5local0 = new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.disp);
    __s5local0.addMaskMc(this.disp.mc_items.mask);
    var __s5local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_InfiniteScrollPackageShopListItem.InfiniteScrollPackageShopListItem, InfiniteScrollPackageShopList.ITEM_ASSET_NAME, this._assetName);
    __s5local1.isMultiColumn = true;
    __s5local1.useSmoothScroll = true;
    __s5local1.itemPaddingY = 4;
    __s5local1.itemPaddingX = 4;
    this._scrollComponent = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(__s5local0, __s5local1);
  };
  InfiniteScrollPackageShopList.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.onShow();
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoUpdated));
  };
  InfiniteScrollPackageShopList.prototype.onHide = function () {
    if (this._scrollComponent) {
      this._scrollComponent.onHide();
    }
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoUpdated));
  };
  InfiniteScrollPackageShopList.prototype.updateWithNewData = function (__s12param0, __s12param1, __s12param2 = -1, __s12param3 = -1) {
    this._eventVO = __s12param1;
    this._currentEventPackages = __s12param0;
    this._buyType = __s12param2;
    this._buyTypeId = __s12param3;
    var __s12local0 = this._currentEventPackages.map(function (__s14param0) {
      return new __dep_export_InfiniteScrollPackageShopListItemVO.InfiniteScrollPackageShopListItemVO(__s14param0, __s12param1, __s12param2, __s12param3);
    });
    this._scrollComponent.updateWithNewData(__s12local0);
  };
  InfiniteScrollPackageShopList.prototype.scrollToPackage = function (__s16param0) {
    var __s16local0 = null;
    this._scrollComponent.items.forEach(function (__s18param0) {
      if (__s18param0.data && __s18param0.data.eventPackageVO.packageID == __s16param0.packageID) {
        __s16local0 = __s18param0;
      }
    });
    if (__s16local0) {
      this._scrollComponent.scrollToItem(__s16local0);
    }
  };
  InfiniteScrollPackageShopList.prototype.onPackageInfoUpdated = function (__s22param0) {
    this._scrollComponent.updateWithNewData(this._scrollComponent.dataList, false);
  };
  Object.defineProperty(InfiniteScrollPackageShopList.prototype, "buyType", {
    get: function () {
      return this._buyType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollPackageShopList.prototype, "buyTypeId", {
    get: function () {
      return this._buyTypeId;
    },
    enumerable: true,
    configurable: true
  });
  InfiniteScrollPackageShopList.ITEM_ASSET_NAME = "ModernFilterableShop_ShopItem";
  return InfiniteScrollPackageShopList;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.InfiniteScrollPackageShopList = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_InfiniteScrollPackageShopListItem = require("gge-module:export_InfiniteScrollPackageShopListItem");
var __dep_export_InfiniteScrollPackageShopListItemVO = require("gge-module:export_InfiniteScrollPackageShopListItemVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IPackageShopList");
