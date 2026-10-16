Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_ModernPackageShopResourceTipEnum = require("gge-module:export_ModernPackageShopResourceTipEnum");
var __s0local0 = function (__s1param0) {
  function ModernPackageShopResourceTipDialogProperties(__s3param0 = null, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._relevantCurrencyTypes = [];
    __s3local0._eventPackageVO = __s3param0;
    __s3local0._currencyTypes = __s3param1;
    __s3local0._relevantCurrencyTypes = __s3local0.getRelevantCurrencyTypes();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopResourceTipDialogProperties, __s1param0);
  ModernPackageShopResourceTipDialogProperties.prototype.getRelevantCurrencyTypes = function () {
    var __s5local0 = [];
    if (this.eventPackageVO) {
      for (var __s5local1 = 0, __s5local2 = this.eventPackageVO.getCostList().list; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          if (!__dep_export_CostHelper.CostHelper.canAfford(__dep_export_CollectableHelper.CollectableHelper.createCostList([__s5local3]))) {
            __s5local0.push(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(__s5local3));
          }
        }
      }
    } else if (this.currencyTypes) {
      return this.currencyTypes;
    }
    return __s5local0;
  };
  ModernPackageShopResourceTipDialogProperties.prototype.isHandledByTipDialog = function () {
    if (this.relevantCurrencyTypes != null) {
      for (var __s13local0 = 0, __s13local1 = this.relevantCurrencyTypes; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined && __dep_export_ModernPackageShopResourceTipEnum.ModernPackageShopResourceTipEnum.getTypeByVO(__s13local2) != __dep_export_ModernPackageShopResourceTipEnum.ModernPackageShopResourceTipEnum.NONE) {
          return true;
        }
      }
    }
    return false;
  };
  ModernPackageShopResourceTipDialogProperties.prototype.extractCurrencyIds = function () {
    var __s19local0 = [];
    if (this.relevantCurrencyTypes != null) {
      for (var __s19local1 = 0, __s19local2 = this.relevantCurrencyTypes; __s19local1 < __s19local2.length; __s19local1++) {
        var __s19local3 = __s19local2[__s19local1];
        if (__s19local3 !== undefined && __s19local3.id >= 0) {
          __s19local0.push(__s19local3.id);
        }
      }
    }
    return __s19local0;
  };
  Object.defineProperty(ModernPackageShopResourceTipDialogProperties.prototype, "eventPackageVO", {
    get: function () {
      return this._eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipDialogProperties.prototype, "currencyTypes", {
    get: function () {
      return this._currencyTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopResourceTipDialogProperties.prototype, "relevantCurrencyTypes", {
    get: function () {
      return this._relevantCurrencyTypes;
    },
    enumerable: true,
    configurable: true
  });
  return ModernPackageShopResourceTipDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.ModernPackageShopResourceTipDialogProperties = __s0local0;
