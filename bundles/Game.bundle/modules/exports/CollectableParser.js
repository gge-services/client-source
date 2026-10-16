Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableParser() {
    this._s2cParamList = new __dep_export_CollectableParserS2CParamList.CollectableParserS2CParamList();
    this._s2cParamObject = new __dep_export_CollectableParserS2CParamObject.CollectableParserS2CParamObject();
    this._s2cOldGoods = new __dep_export_CollectableParserS2COldGoods.CollectableParserS2COldGoods();
    this._c2SCosts = new __dep_export_CollectableParserC2SCosts.CollectableParserC2SCosts();
    this._x2cRewards = new __dep_export_CollectableParserX2CRewards.CollectableParserX2CRewards();
    this._x2cEventPackages = new __dep_export_CollectableParserX2CEventPackages.CollectableParserX2CEventPackages();
    this._x2cList = new __dep_export_CollectableParserX2CList.CollectableParserX2CList();
  }
  CollectableParser.prototype.createListFromRewardIdsString = function (__s5param0, __s5param1 = false, __s5param2 = CollectableParser.DEFAULT_REWARD_DELIMITER, __s5param3 = false) {
    return __dep_export_CollectableManager.CollectableManager.mergeLists(this.createListsFromRewardIdsString(__s5param0, __s5param1, __s5param2), __s5param3);
  };
  CollectableParser.prototype.createListsFromRewardIdsString = function (__s7param0, __s7param1 = false, __s7param2 = CollectableParser.DEFAULT_REWARD_DELIMITER, __s7param3 = null) {
    var __s7local0;
    for (var __s7local1 = __s7param0.split(__s7param2), __s7local2 = [], __s7local3 = 0, __s7local4 = 0; __s7local4 < __s7local1.length; ++__s7local4) {
      if (__s7param3 && __s7local1[__s7local4].indexOf(__s7param3) > -1) {
        if (__s7local0 = this.createListFromRewardIdsString(__s7local1[__s7local4], __s7param1, __s7param3)) {
          __s7local2.push(__s7local0);
        }
      } else if ((__s7local3 = parseInt(__s7local1[__s7local4])) > 0 && (__s7local0 = __s7param1 ? __dep_export_CastleModel.CastleModel.rewardData.getCopiedListById(__s7local3) : __dep_export_CastleModel.CastleModel.rewardData.getListById(__s7local3))) {
        __s7local2.push(__s7local0);
      }
    }
    return __s7local2;
  };
  CollectableParser.prototype.createGoodsList = function () {
    var __s14local0 = [];
    for (var __s14local1 = 0; __s14local1 < arguments.length; __s14local1++) {
      __s14local0[__s14local1] = arguments[__s14local1];
    }
    return this._createGoodsList(false, __s14local0);
  };
  CollectableParser.prototype.createGoodsListSave = function () {
    var __s18local0 = [];
    for (var __s18local1 = 0; __s18local1 < arguments.length; __s18local1++) {
      __s18local0[__s18local1] = arguments[__s18local1];
    }
    return this._createGoodsList(true, __s18local0);
  };
  CollectableParser.prototype.createGoodsListSavefromList = function (__s22param0) {
    return this._createGoodsList(true, __s22param0);
  };
  CollectableParser.prototype._createGoodsList = function (__s24param0) {
    var __s24local0 = [];
    for (var __s24local1 = 1; __s24local1 < arguments.length; __s24local1++) {
      __s24local0[__s24local1 - 1] = arguments[__s24local1];
    }
    var __s24local2;
    var __s24local3 = new __dep_export_CollectableList.CollectableList();
    for (var __s24local4 = __s24local0[0], __s24local5 = 0; __s24local5 < __s24local4.length; ++__s24local5) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s24local4[__s24local5], "ACollectableItemVO")) {
        __s24local2 = __s24local4[__s24local5];
        if (__s24param0 && __s24local2.amount == 0) {
          continue;
        }
        __s24local3.addItem(__s24local2);
      }
    }
    return __s24local3;
  };
  Object.defineProperty(CollectableParser.prototype, "s2cParamList", {
    get: function () {
      return this._s2cParamList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "s2cParamObject", {
    get: function () {
      return this._s2cParamObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "x2cRewards", {
    get: function () {
      return this._x2cRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "c2SCosts", {
    get: function () {
      return this._c2SCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "s2cOldGoods", {
    get: function () {
      return this._s2cOldGoods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "x2cEventPackages", {
    get: function () {
      return this._x2cEventPackages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "x2cList", {
    get: function () {
      return this._x2cList;
    },
    enumerable: true,
    configurable: true
  });
  CollectableParser.DEFAULT_REWARD_DELIMITER = ",";
  CollectableParser.DEFAULT_REWARD_SUBDELIMITER = "#";
  return CollectableParser;
}();
exports.CollectableParser = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableParserS2COldGoods = require("gge-module:export_CollectableParserS2COldGoods");
var __dep_export_CollectableParserS2CParamList = require("gge-module:export_CollectableParserS2CParamList");
var __dep_export_CollectableParserS2CParamObject = require("gge-module:export_CollectableParserS2CParamObject");
var __dep_export_CollectableParserX2CEventPackages = require("gge-module:export_CollectableParserX2CEventPackages");
var __dep_export_CollectableParserX2CList = require("gge-module:export_CollectableParserX2CList");
var __dep_export_CollectableParserX2CRewards = require("gge-module:export_CollectableParserX2CRewards");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableParserC2SCosts = require("gge-module:export_CollectableParserC2SCosts");
