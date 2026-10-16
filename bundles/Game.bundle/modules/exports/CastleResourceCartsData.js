Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleResourceCartsDataEvent = require("gge-module:export_CastleResourceCartsDataEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleResourceCartsData() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._resourceCarts = [];
    for (var __s3local1 = 0; __s3local1 < CastleResourceCartsData.RESOURCE_TYPE_COUNT; ++__s3local1) {
      __s3local0._resourceCarts.push(new __dep_export_ResourceCartData.ResourceCartData());
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourceCartsData, __s1param0);
  CastleResourceCartsData.prototype.parse_RCC = function (__s7param0) {
    var __s7local0 = CastleResourceCartsData.getEnumItemFromIndex(__s7param0.RT);
    var __s7local1 = __dep_exact_f855840627e6e145.int(__s7param0.A);
    if (__s7param0.grc) {
      __dep_export_CastleModel.CastleModel.areaData.activeArea.updater.parseGRC(__s7param0.grc);
    }
    if (__s7param0.rci) {
      this.parse_RCI(__s7param0.rci);
    }
    if (__s7local1 > 0) {
      this.dispatchEvent(new __dep_export_CastleResourceCartsDataEvent.CastleResourceCartsDataEvent(__dep_export_CastleResourceCartsDataEvent.CastleResourceCartsDataEvent.ON_RESOURCE_DROPPED, [__s7local0, __s7local1]));
    }
  };
  CastleResourceCartsData.prototype.parse_RCI = function (__s12param0) {
    for (var __s12local0 = 0; __s12local0 < CastleResourceCartsData.RESOURCE_TYPE_COUNT; ++__s12local0) {
      this._resourceCarts[__s12local0].parseRciItem(__s12param0.RC[__s12local0]);
    }
    this.dispatchEvent(new __dep_export_CastleResourceCartsDataEvent.CastleResourceCartsDataEvent(__dep_export_CastleResourceCartsDataEvent.CastleResourceCartsDataEvent.DATA_CHANGED));
  };
  CastleResourceCartsData.prototype.getResourceCartData = function (__s16param0) {
    return this._resourceCarts[CastleResourceCartsData.getIndexFromEnumItem(__s16param0)];
  };
  CastleResourceCartsData.getEnumItemFromIndex = function (__s18param0) {
    switch (__s18param0) {
      case 0:
        return __dep_export_CollectableEnum.CollectableEnum.WOOD;
      case 1:
        return __dep_export_CollectableEnum.CollectableEnum.STONE;
      case 2:
        return __dep_export_CollectableEnum.CollectableEnum.FOOD;
      default:
        return __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    }
  };
  CastleResourceCartsData.getIndexFromEnumItem = function (__s21param0) {
    switch (__s21param0) {
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        return 0;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        return 1;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        return 2;
      default:
        return -1;
    }
  };
  CastleResourceCartsData.__initialize_static_members = function () {
    CastleResourceCartsData.RESOURCE_TYPE_COUNT = 3;
  };
  return CastleResourceCartsData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleResourceCartsData = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourceCartData = require("gge-module:export_ResourceCartData");
__s0local0.__initialize_static_members();
