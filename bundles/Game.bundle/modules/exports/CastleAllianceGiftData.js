Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_CastleAllianceGiftEvent = require("gge-module:export_CastleAllianceGiftEvent");
var __s0local0 = function (__s1param0) {
  function CastleAllianceGiftData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._gifts = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceGiftData, __s1param0);
  CastleAllianceGiftData.prototype.parse_AGC = function (__s5param0) {
    if (!__s5param0) {
      return null;
    }
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0.ID);
    this.removeGift(__s5local0);
    this.propagateChange();
    return __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param0.R);
  };
  CastleAllianceGiftData.prototype.removeGift = function (__s8param0) {
    var __s8local0 = this._gifts.filter(this.byGiftID(__s8param0));
    if (__s8local0.length > 0) {
      var __s8local1 = __s8local0[0];
      var __s8local2 = __dep_exact_f855840627e6e145.int(this._gifts.indexOf(__s8local1));
      if (__s8local2 > -1) {
        this._gifts.splice(__s8local2, 1);
      }
    }
  };
  CastleAllianceGiftData.prototype.byGiftID = function (__s12param0) {
    return function (__s14param0) {
      var __s14local0 = [];
      for (var __s14local1 = 1; __s14local1 < arguments.length; __s14local1++) {
        __s14local0[__s14local1 - 1] = arguments[__s14local1];
      }
      return __s14param0.id == __s12param0;
    };
  };
  CastleAllianceGiftData.prototype.parse_AGR = function (__s18param0) {
    if (__s18param0 && __s18param0.G) {
      var __s18local0 = new __dep_export_AllianceGiftVO.AllianceGiftVO();
      __s18local0.parseArray(__s18param0.G);
      this._gifts.push(__s18local0);
      this._gifts.sort(__dep_export_ClientConstSort.ClientConstSort.sortByExpireTime);
      this.propagateChange();
    }
  };
  CastleAllianceGiftData.prototype.propagateChange = function () {
    this._dataUpdateEvent ||= new __dep_export_CastleAllianceGiftEvent.CastleAllianceGiftEvent(__dep_export_CastleAllianceGiftEvent.CastleAllianceGiftEvent.DATA_UPDATED);
    this.dispatchEvent(this._dataUpdateEvent);
  };
  CastleAllianceGiftData.prototype.executeUpdate = function (__s23param0) {
    var __s23local0 = __dep_exact_f855840627e6e145.int(this._gifts.length);
    var __s23local1 = this._gifts.filter(this.createNonExpiredGiftsFilter(__s23param0));
    if (__s23local0 != __s23local1.length) {
      this._gifts = __s23local1;
      this.propagateChange();
    }
  };
  CastleAllianceGiftData.prototype.createNonExpiredGiftsFilter = function (__s26param0) {
    return function (__s28param0) {
      var __s28local0 = [];
      for (var __s28local1 = 1; __s28local1 < arguments.length; __s28local1++) {
        __s28local0[__s28local1 - 1] = arguments[__s28local1];
      }
      return __s28param0.expiredTimeStamp > __s26param0;
    };
  };
  CastleAllianceGiftData.prototype.hasGifts = function (__s32param0) {
    return this._gifts.length > 0 && __s32param0 >= __dep_export_ClientConstAlliance.ClientConstAlliance.MIN_LEVEL_ALLIANCE_GIFTS;
  };
  Object.defineProperty(CastleAllianceGiftData.prototype, "giftCount", {
    get: function () {
      return this._gifts.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceGiftData.prototype, "gifts", {
    get: function () {
      return this._gifts;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceGiftData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleAllianceGiftData = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_AllianceGiftVO = require("gge-module:export_AllianceGiftVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
