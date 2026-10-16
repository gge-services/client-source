Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleShoppingCartPrimeDayEvent = require("gge-module:export_CastleShoppingCartPrimeDayEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ShoppingCartPrimeSaleEventVO() {
    var __s3local0 = this;
    __s3local0._typeIds = [];
    __s3local0._lifeTimeSpent = -1;
    __s3local0._useSpent90Days = false;
    __s3local0._spent90Days = 0;
    __s3local0._level = -1;
    __s3local0._limit = -1;
    __s3local0._timesBuyable = -1;
    __s3local0._c2Payed = 0;
    __s3local0._cartsPaid = 0;
    __s3local0._c2Needed = 1337;
    __s3local0._shoppingCartOptionIds = [];
    __s3local0._shoppingCartOptionsIdsByCategory = [];
    __s3local0._averageBonus = 0;
    __s3local0._valid = true;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ShoppingCartPrimeSaleEventVO, __s1param0);
  ShoppingCartPrimeSaleEventVO.prototype.parseParamObject = function (__s5param0) {
    var __s5local0 = __s5param0[__dep_exact_26a421b704832cff.CommKeys.TYPE_IDS];
    if (!__s5local0) {
      this._valid = false;
      __dep_exact_9e901e8e2483a22f.error("ShoppingCart event needs type ids!");
      return;
    }
    var __s5local1 = __s5local0.length;
    if (__s5local1 != ShoppingCartPrimeSaleEventVO.TYPE_COUNT) {
      this._valid = false;
      __dep_exact_9e901e8e2483a22f.error("ShoppingCart event needs " + ShoppingCartPrimeSaleEventVO.TYPE_COUNT + " type ids!");
      return;
    }
    this._level = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.LEVEL]);
    if (__s5param0.hasOwnProperty(__dep_exact_26a421b704832cff.CommKeys.SHOPPING_CART) && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param0[__dep_exact_26a421b704832cff.CommKeys.SHOPPING_CART], "Array")) {
      this._shoppingCartOptionIds = __s5param0[__dep_exact_26a421b704832cff.CommKeys.SHOPPING_CART];
    } else {
      this._shoppingCartOptionIds = [];
    }
    this._c2Needed = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.CURRENCY_2]);
    this._limit = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.LIMIT]);
    this.c2Payed = __s5param0[__dep_exact_26a421b704832cff.CommKeys.PAYED_C2];
    this._lifeTimeSpent = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.LIFETIME_SPENT_C2]);
    this._useSpent90Days = __s5param0[__dep_exact_26a421b704832cff.CommKeys.USE_90_DAYS_SPENT] != 0;
    this._spent90Days = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.C2_SPENT_90_DAYS]);
    this._typeIds = [];
    var __s5local2 = 0;
    var __s5local3 = 0;
    for (var __s5local4 = 0; __s5local4 < __s5local1; __s5local4++) {
      if (__s5local4 % __dep_exact_26a421b704832cff_1.ShoppingCartConst.OPTIONS_PER_GROUP == 0) {
        __s5local2++;
      }
      var __s5local5 = __dep_exact_f855840627e6e145.int(__s5local0[__s5local4]);
      var __s5local6 = __dep_export_CastleModel.CastleModel.shoppingCartPrimeDayData.getNodeByTypeAndGroupWithEvent(__s5local5, __s5local2, this);
      if (!__s5local6) {
        this._valid = false;
        __dep_exact_9e901e8e2483a22f.error("No node found for type " + __s5local5 + " and group " + __s5local2);
        break;
      }
      __s5local3 += __s5local6.shownOfferBonus;
      this._typeIds.push(__s5local5);
    }
    this._averageBonus = __dep_exact_f855840627e6e145.int(__s5local3 / __s5local1);
    this._valid = this._timesBuyable > 0;
  };
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "shoppingCartOptionIds", {
    get: function () {
      return this._shoppingCartOptionIds;
    },
    set: function (__s17param0) {
      this._shoppingCartOptionIds = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "shoppingCartOptionsIdsByCategory", {
    get: function () {
      return this._shoppingCartOptionsIdsByCategory;
    },
    set: function (__s21param0) {
      this._shoppingCartOptionsIdsByCategory = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "typeIds", {
    get: function () {
      return this._typeIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "averageBonus", {
    get: function () {
      return this._averageBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "lifeTimeSpent", {
    get: function () {
      return this._lifeTimeSpent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "c2Payed", {
    get: function () {
      return this._c2Payed % this._c2Needed;
    },
    set: function (__s31param0) {
      this._c2Payed = __s31param0;
      this._timesBuyable = __dep_exact_f855840627e6e145.int(this._limit - __dep_exact_f855840627e6e145.int(this._c2Payed / this._c2Needed));
      if (this._timesBuyable > 0) {
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent(__dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent.UPDATE_DIALOG));
      } else {
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent(__dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent.SOLD_OUT));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "c2Needed", {
    get: function () {
      return this._c2Needed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "rewardCount", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(this._c2Payed / this._c2Needed);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "cartsPaid", {
    get: function () {
      return this._cartsPaid;
    },
    set: function (__s41param0) {
      this._cartsPaid = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "timesBuyable", {
    get: function () {
      return this._timesBuyable;
    },
    enumerable: true,
    configurable: true
  });
  ShoppingCartPrimeSaleEventVO.prototype.canBeAddedToActiveEvents = function () {
    return this._valid;
  };
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "spent90Days", {
    get: function () {
      return this._spent90Days;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "useSpent90Days", {
    get: function () {
      return this._useSpent90Days;
    },
    enumerable: true,
    configurable: true
  });
  ShoppingCartPrimeSaleEventVO.prototype.openDialog = function (__s53param0 = true) {
    this.executeOpenDialog(__s53param0, __dep_export_CastleShoppingCartPrimeDayDialog.CastleShoppingCartPrimeDayDialog, null);
  };
  ShoppingCartPrimeSaleEventVO.TYPE_COUNT = 18;
  return ShoppingCartPrimeSaleEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.ShoppingCartPrimeSaleEventVO = __s0local0;
var __dep_export_CastleShoppingCartPrimeDayDialog = require("gge-module:export_CastleShoppingCartPrimeDayDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
