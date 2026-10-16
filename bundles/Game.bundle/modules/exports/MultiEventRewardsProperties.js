Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LongTermPointEventSkin = require("gge-module:export_LongTermPointEventSkin");
var __s0local0 = function (__s1param0) {
  function MultiEventRewardsProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._events = [];
    __s3local0.parseMessage(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MultiEventRewardsProperties, __s1param0);
  MultiEventRewardsProperties.prototype.parseMessage = function (__s5param0) {
    var __s5local0;
    var __s5local1;
    var __s5local2;
    var __s5local3;
    var __s5local4 = [];
    var __s5local5 = new Map();
    var __s5local6 = 0;
    var __s5local7 = 0;
    var __s5local8 = 0;
    var __s5local9 = 0;
    var __s5local10 = 0;
    var __s5local11 = 0;
    var __s5local12 = false;
    if (__s5param0 != null) {
      for (var __s5local13 = 0, __s5local14 = __s5param0; __s5local13 < __s5local14.length; __s5local13++) {
        var __s5local15 = __s5local14[__s5local13];
        if (__s5local15 !== undefined && (__s5local6 = __dep_exact_f855840627e6e145.int(__dep_export_CastlePopUpHelper.CastlePopUpHelper.getEventIDbyPopUpID(__s5local15.POP))) != -1) {
          __s5local7 = -1;
          __s5local10 = -1;
          if (__s5local2 = __s5local5.get(__s5local6)) {
            __s5local7 = __s5local2.ownRank;
            __s5local10 = __s5local2.topXCount;
          }
          __s5local3 = this.getLongTermPointEventSkin(__s5local15);
          __s5local12 = __dep_export_CastlePopUpHelper.CastlePopUpHelper.isWinner(__s5local15.POP);
          __s5local9 = __dep_exact_f855840627e6e145.int(this.getPoints(__s5local15.VAL));
          __s5local7 = __s5local7 < (__s5local8 = __dep_exact_f855840627e6e145.int(this.getRank(__s5local15.VAL))) ? __s5local8 : __s5local7;
          if (__s5local10 > (__s5local11 = __dep_exact_f855840627e6e145.int(this.getTopX(__s5local15.VAL))) && __s5local11 != -1 || __s5local10 == -1) {
            __s5local10 = __s5local11;
          }
          __s5local1 = this.getRewardList(__s5local15.VAL);
          if (__s5local5.get(__s5local6)) {
            (__s5local2 = __s5local5.get(__s5local6)).rewardList.addList(__s5local1);
            __s5local2.ownPoints = __s5local9;
            __s5local2.ownRank = __s5local7;
            __s5local2.topXCount = __dep_exact_f855840627e6e145.int(__s5local2.topXCount != 1 ? __s5local12 ? 1 : __s5local10 : __s5local2.topXCount);
          } else {
            __s5local2 = new __s0local1(__s5local1, __s5local3, __s5local9, __s5local7, __s5local12 ? 1 : __s5local10);
            __s5local5.set(__s5local6, __s5local2);
          }
        }
      }
    }
    if (__s5local5 != null) {
      for (var __s5local16 = 0, __s5local17 = Array.from(__s5local5.keys()); __s5local16 < __s5local17.length; __s5local16++) {
        var __s5local18 = __s5local17[__s5local16];
        if (__s5local18 !== undefined) {
          __s5local2 = __s5local5.get(__s5local18);
          __s5local6 = parseInt(__s5local18);
          if (__s5local2.rewardList.length != 0) {
            __s5local0 = new __dep_export_MultiEventRewardEventInfoVO.MultiEventRewardEventInfoVO(__s5local6, __s5local2.rewardList, __s5local2.ownRank, __s5local2.ownPoints, __s5local2.topXCount, __s5local2.skin);
            __s5local4.push(__s5local0);
          }
        }
      }
    }
    this._events = __s5local4;
  };
  MultiEventRewardsProperties.prototype.getTopX = function (__s20param0) {
    if (__s20param0 != undefined && isNaN(Number(__s20param0)) && __s20param0.hasOwnProperty("TX")) {
      return __dep_exact_f855840627e6e145.int(__s20param0.TX ? __s20param0.TX : -1);
    } else {
      return -1;
    }
  };
  MultiEventRewardsProperties.prototype.getLongTermPointEventSkin = function (__s24param0) {
    var __s24local0;
    if (isNaN(__s24param0.VAL) && __s24param0.VAL && __s24param0.VAL.hasOwnProperty("SID")) {
      __s24local0 = __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.getTypeById(__s24param0.VAL.SID);
    }
    return __s24local0;
  };
  MultiEventRewardsProperties.prototype.getPoints = function (__s27param0) {
    var __s27local0 = 0;
    if (__s27param0) {
      if (isNaN(Number(__s27param0))) {
        if (__s27param0.hasOwnProperty("OP")) {
          __s27local0 = parseInt(__s27param0.OP);
        } else if (__s27param0.hasOwnProperty("P")) {
          __s27local0 = __s27param0.hasOwnProperty("WID") ? __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ColossusConst.getDecoPoints(__dep_exact_f855840627e6e145.int(__s27param0.P))) : parseInt(__s27param0.P);
        }
      } else {
        __s27local0 = -1;
      }
    }
    return __s27local0;
  };
  MultiEventRewardsProperties.prototype.getRewardList = function (__s34param0) {
    var __s34local0;
    if (isNaN(Number(__s34param0))) {
      if (__s34param0 != undefined && __s34param0.hasOwnProperty("WID")) {
        __s34local0 = new __dep_export_CollectableList.CollectableList();
        var __s34local1 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO(__s34param0.WID);
        __s34local1.buildingVO.customDecoPoints = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ColossusConst.getDecoPoints(__dep_exact_f855840627e6e145.int(__s34param0.P)));
        __s34local0.addItem(__s34local1);
      } else if (__s34param0 == undefined || isNaN(Number(__s34param0.R))) {
        if (__s34param0 != undefined) {
          __s34local0 = __dep_export_CastlePopUpHelper.CastlePopUpHelper.createRewardList(__s34param0);
        }
      } else {
        __s34local0 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s34param0.R);
      }
    } else {
      __s34local0 = __dep_export_CastleModel.CastleModel.rewardData.getListById(parseInt(__s34param0.toString()));
    }
    __s34local0 ||= new __dep_export_CollectableList.CollectableList();
    this.removeBuildingDurationForBuildings(__s34local0);
    if (__s34param0 != undefined && isNaN(__s34param0) && __s34param0.hasOwnProperty("GT")) {
      this.setGrantType(__s34local0, __s34param0.GT);
    }
    return __s34local0;
  };
  MultiEventRewardsProperties.prototype.setGrantType = function (__s43param0, __s43param1) {
    for (var __s43local0 = __dep_exact_f855840627e6e145.int(__s43param0.list.length), __s43local1 = 0; __s43local1 < __s43local0; __s43local1++) {
      __s43param0.list[__s43local1].grantType = __s43param1;
    }
  };
  MultiEventRewardsProperties.prototype.removeBuildingDurationForBuildings = function (__s47param0) {
    var __s47local0 = __s47param0.getIndicesByType(__dep_export_CollectableEnum.CollectableEnum.BUILDING);
    for (var __s47local1 = __dep_exact_f855840627e6e145.int(__s47local0.length), __s47local2 = 0; __s47local2 < __s47local1; __s47local2++) {
      __s47param0.getItemByIndex(__s47local0[__s47local2]);
    }
  };
  MultiEventRewardsProperties.prototype.getRank = function (__s51param0) {
    var __s51local0 = -1;
    if (isNaN(Number(__s51param0))) {
      if (__s51param0 && __s51param0.hasOwnProperty("OR")) {
        __s51local0 = __dep_exact_f855840627e6e145.int(__s51param0.OR);
      } else if (__s51param0 && __s51param0.hasOwnProperty("R") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s51param0.R, "Array")) {
        __s51local0 = __dep_exact_f855840627e6e145.int(__s51param0.R);
      }
    } else {
      __s51local0 = parseInt(__s51param0.toString());
    }
    return __s51local0;
  };
  Object.defineProperty(MultiEventRewardsProperties.prototype, "events", {
    get: function () {
      return this._events;
    },
    enumerable: true,
    configurable: true
  });
  return MultiEventRewardsProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.MultiEventRewardsProperties = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_CastlePopUpHelper = require("gge-module:export_CastlePopUpHelper");
var __dep_export_MultiEventRewardEventInfoVO = require("gge-module:export_MultiEventRewardEventInfoVO");
var __s0local1 = function () {
  function TempVO(__s61param0, __s61param1, __s61param2, __s61param3, __s61param4) {
    this._ownPoints = -1;
    this._ownRank = -1;
    this._topXCount = -1;
    this._rewardList = __s61param0;
    this._skin = __s61param1;
    this._ownPoints = __s61param2;
    this._ownRank = __s61param3;
    this._topXCount = __s61param4;
  }
  Object.defineProperty(TempVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempVO.prototype, "skin", {
    get: function () {
      return this._skin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempVO.prototype, "ownPoints", {
    get: function () {
      return this._ownPoints;
    },
    set: function (__s69param0) {
      this._ownPoints = __s69param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempVO.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    set: function (__s73param0) {
      this._ownRank = __s73param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempVO.prototype, "topXCount", {
    get: function () {
      return this._topXCount;
    },
    set: function (__s77param0) {
      this._topXCount = __s77param0;
    },
    enumerable: true,
    configurable: true
  });
  return TempVO;
}();
