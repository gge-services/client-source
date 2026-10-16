Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_PlayerGiftEvent = require("gge-module:export_PlayerGiftEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PlayerGiftVO = require("gge-module:export_PlayerGiftVO");
var __s0local0 = function (__s1param0) {
  function PlayerGiftData() {
    var __s3local0 = this;
    __s3local0._receivingPlayerID = 0;
    __s3local0._sendablePackageAmount = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._playerGifts = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlayerGiftData, __s1param0);
  PlayerGiftData.prototype.parse_PGL = function (__s5param0, __s5param1) {
    if (__s5param0) {
      var __s5local0;
      this._sendablePackageAmount = __s5param1;
      this._playerGifts = [];
      for (var __s5local1 = 0; __s5local1 < __s5param0.length; __s5local1++) {
        (__s5local0 = new __dep_export_PlayerGiftVO.PlayerGiftVO()).parseFromArray(__s5param0[__s5local1]);
        this._playerGifts.push(__s5local0);
      }
      __dep_exact_9e901e8e2483a22f.VectorSortHelper.sort(this._playerGifts, PlayerGiftData.sortOnSortOrder);
      this.dispatchEvent(new __dep_export_PlayerGiftEvent.PlayerGiftEvent(__dep_export_PlayerGiftEvent.PlayerGiftEvent.PLAYER_GIFT_LIST_RECEIVED));
    }
  };
  PlayerGiftData.sortOnSortOrder = function (__s10param0, __s10param1) {
    return __s10param0.eventPackageVO.sortOrder - __s10param1.eventPackageVO.sortOrder;
  };
  Object.defineProperty(PlayerGiftData.prototype, "playerGifts", {
    get: function () {
      return this._playerGifts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "giftEventPackageVOs", {
    get: function () {
      var __s14local0 = [];
      if (this.playerGifts != null) {
        for (var __s14local1 = 0, __s14local2 = this.playerGifts; __s14local1 < __s14local2.length; __s14local1++) {
          var __s14local3 = __s14local2[__s14local1];
          if (__s14local3 !== undefined) {
            __s14local0.push(__s14local3.eventPackageVO);
          }
        }
      }
      return __s14local0;
    },
    enumerable: true,
    configurable: true
  });
  PlayerGiftData.prototype.getGiftVOByEventPackageVO = function (__s20param0) {
    if (this.playerGifts != null) {
      for (var __s20local0 = 0, __s20local1 = this.playerGifts; __s20local0 < __s20local1.length; __s20local0++) {
        var __s20local2 = __s20local1[__s20local0];
        if (__s20local2 !== undefined && __s20local2.eventPackageVO == __s20param0) {
          return __s20local2;
        }
      }
    }
    return null;
  };
  PlayerGiftData.prototype.getPackageAmountByPackageID = function (__s26param0) {
    if (this.playerGifts != null) {
      for (var __s26local0 = 0, __s26local1 = this.playerGifts; __s26local0 < __s26local1.length; __s26local0++) {
        var __s26local2 = __s26local1[__s26local0];
        if (__s26local2 !== undefined && __s26local2.eventPackageVO.packageID == __s26param0) {
          return __s26local2.amount;
        }
      }
    }
    return 0;
  };
  PlayerGiftData.prototype.getPackageVOByID = function (__s32param0) {
    if (this.playerGifts != null) {
      for (var __s32local0 = 0, __s32local1 = this.playerGifts; __s32local0 < __s32local1.length; __s32local0++) {
        var __s32local2 = __s32local1[__s32local0];
        if (__s32local2 !== undefined && __s32local2.eventPackageVO.packageID == __s32param0) {
          return __s32local2.eventPackageVO;
        }
      }
    }
    return null;
  };
  Object.defineProperty(PlayerGiftData.prototype, "receivingPlayerID", {
    get: function () {
      return this._receivingPlayerID;
    },
    set: function (__s40param0) {
      this._receivingPlayerID = __s40param0;
      this._playerName = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_export_CastleModel.CastleModel.playerGiftData.receivingPlayerID).playerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "giftPackagesInInventoryAmount", {
    get: function () {
      var __s42local0 = 0;
      if (this._playerGifts != null) {
        for (var __s42local1 = 0, __s42local2 = this._playerGifts; __s42local1 < __s42local2.length; __s42local1++) {
          var __s42local3 = __s42local2[__s42local1];
          if (__s42local3 !== undefined) {
            __s42local0 += __s42local3.amount;
          }
        }
      }
      return __s42local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "sendablePackageAmount", {
    get: function () {
      return this._sendablePackageAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "maxBuyablePackageAmount", {
    get: function () {
      return Math.max(0, __dep_exact_26a421b704832cff.PackageConst.MAX_PLAYER_GIFT_STORAGE - this.giftPackagesInInventoryAmount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  return PlayerGiftData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.PlayerGiftData = __s0local0;
