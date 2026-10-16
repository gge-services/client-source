Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleShoppingCartPrimeDayData(__s3param0) {
    this._optionCount = -1;
    this.parseFromXML(__s3param0);
    this._optionCount = __dep_exact_f855840627e6e145.int(Math.min(3, __dep_exact_26a421b704832cff_1.ShoppingCartConst.SHOPPING_CART_SIZE));
  }
  CastleShoppingCartPrimeDayData.prototype.parseFromXML = function (__s5param0) {
    this.nodesByType = new Map();
    this.nodesByOption = new Map();
    for (var __s5local0 = 0, __s5local1 = __s5param0.shoppingCarts; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 != undefined) {
        try {
          var __s5local3 = new __dep_export_CastleShoppingCartPrimeDayXMLNode.CastleShoppingCartPrimeDayXMLNode();
          __s5local3.parseXML(__s5local2);
          if (!this.nodesByType.has(__s5local3.typeId)) {
            this.nodesByType.set(__s5local3.typeId, []);
          }
          this.nodesByType.get(__s5local3.typeId).push(__s5local3);
          this.nodesByOption.set(__s5local3.cartOptionId, __s5local3);
        } catch (__s12local0) {
          __dep_exact_9e901e8e2483a22f.error(__s12local0.stack);
        }
      }
    }
  };
  CastleShoppingCartPrimeDayData.prototype.getNodeByTypeAndGroup = function (__s14param0, __s14param1) {
    if (this.nodesByType.has(__s14param0)) {
      var __s14local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
      if (__s14local0) {
        return this.getNodeByTypeAndGroupWithEvent(__s14param0, __s14param1, __s14local0);
      } else {
        return null;
      }
    }
    return null;
  };
  CastleShoppingCartPrimeDayData.prototype.getNodeByTypeAndGroupWithEvent = function (__s19param0, __s19param1, __s19param2) {
    if (this.nodesByType.has(__s19param0)) {
      var __s19local0 = this.nodesByType.get(__s19param0);
      for (var __s19local1 = __dep_exact_f855840627e6e145.int(__s19local0.length - 1); __s19local1 >= 0; __s19local1--) {
        var __s19local2 = __s19local0[__s19local1];
        if (__s19param1 == __s19local2.groupId && this.getMaxTime(__s19local2, __s19param2) >= this.getLifeTimeSpent(__s19param2) && this.getMinTime(__s19local2, __s19param2) <= this.getLifeTimeSpent(__s19param2) && __s19local2.maxLevel >= __s19param2.level && __s19local2.minLevel <= __s19param2.level) {
          return __s19local2;
        }
      }
    }
    return null;
  };
  CastleShoppingCartPrimeDayData.prototype.getLifeTimeSpent = function (__s25param0) {
    return __dep_exact_f855840627e6e145.int(__s25param0.useSpent90Days ? __s25param0.spent90Days : __s25param0.lifeTimeSpent);
  };
  CastleShoppingCartPrimeDayData.prototype.getMinTime = function (__s27param0, __s27param1) {
    return __dep_exact_f855840627e6e145.int(__s27param1.useSpent90Days ? __s27param0.c290daysMin : __s27param0.c2LifetimeSpentMin);
  };
  CastleShoppingCartPrimeDayData.prototype.getMaxTime = function (__s29param0, __s29param1) {
    return __dep_exact_f855840627e6e145.int(__s29param1.useSpent90Days ? __s29param0.c290daysMax : __s29param0.c2LifetimeSpentMax);
  };
  CastleShoppingCartPrimeDayData.prototype.getNodeByOption = function (__s31param0) {
    return this.nodesByOption.get(__s31param0);
  };
  Object.defineProperty(CastleShoppingCartPrimeDayData.prototype, "optionCount", {
    get: function () {
      return this._optionCount;
    },
    enumerable: true,
    configurable: true
  });
  return CastleShoppingCartPrimeDayData;
}();
exports.CastleShoppingCartPrimeDayData = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleShoppingCartPrimeDayXMLNode = require("gge-module:export_CastleShoppingCartPrimeDayXMLNode");
