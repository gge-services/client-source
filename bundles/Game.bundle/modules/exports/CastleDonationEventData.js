Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleDonationEventDataEvent = require("gge-module:export_CastleDonationEventDataEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_DonationItemsVO = require("gge-module:export_DonationItemsVO");
var __dep_export_DonationTypeVO = require("gge-module:export_DonationTypeVO");
var __dep_export_DonationRewardVO = require("gge-module:export_DonationRewardVO");
var __dep_export_DonationSettingVO = require("gge-module:export_DonationSettingVO");
var __s0local0 = function (__s1param0) {
  function CastleDonationEventData(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseXml(__s3param0);
    __s3local0._currentSpentPointsForTypes = new Map();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDonationEventData, __s1param0);
  CastleDonationEventData.prototype.parseXml = function (__s5param0) {
    this._settings = new Map();
    var __s5local0 = __s5param0.donationSettings;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        if ((__s5local12 = __s5local2[__s5local1]) !== undefined) {
          var __s5local3 = new __dep_export_DonationSettingVO.DonationSettingVO();
          __s5local3.parseXmlNode(__s5local12);
          this._settings.set(__s5local3.donationSettingID, __s5local3);
        }
      }
    }
    this._types = new Map();
    if ((__s5local0 = __s5param0.donationTypes) != null) {
      for (var __s5local4 = 0, __s5local5 = __s5local0; __s5local4 < __s5local5.length; __s5local4++) {
        if ((__s5local12 = __s5local5[__s5local4]) !== undefined) {
          var __s5local6 = new __dep_export_DonationTypeVO.DonationTypeVO();
          __s5local6.parseXmlNode(__s5local12);
          this._types.set(__s5local6.donationTypeID, __s5local6);
        }
      }
    }
    this._items = new Map();
    if ((__s5local0 = __s5param0.donationItems) != null) {
      for (var __s5local7 = 0, __s5local8 = __s5local0; __s5local7 < __s5local8.length; __s5local7++) {
        if ((__s5local12 = __s5local8[__s5local7]) !== undefined) {
          var __s5local9 = new __dep_export_DonationItemsVO.DonationItemsVO();
          __s5local9.parseXmlNode(__s5local12);
          this._items.set(__s5local9.donationItemID, __s5local9);
        }
      }
    }
    this._rewards = new Map();
    if ((__s5local0 = __s5param0.donationRewards) != null) {
      for (var __s5local10 = 0, __s5local11 = __s5local0; __s5local10 < __s5local11.length; __s5local10++) {
        var __s5local12;
        if ((__s5local12 = __s5local11[__s5local10]) !== undefined) {
          var __s5local13 = new __dep_export_DonationRewardVO.DonationRewardVO();
          __s5local13.parseXmlNode(__s5local12);
          this._rewards.set(__s5local13.donationRewardID, __s5local13);
        }
      }
    }
  };
  CastleDonationEventData.prototype.getItemVOs_By_PointTypeSettingID = function (__s23param0) {
    var __s23local0 = [];
    this._items.forEach(function (__s25param0) {
      if (__s25param0.donationItemSetID == __s23param0) {
        __s23local0.push(__s25param0);
      }
    });
    return __s23local0;
  };
  CastleDonationEventData.prototype.getItemVOs_By_PointTypeSettingID_And_PointTypeID = function (__s28param0, __s28param1) {
    var __s28local0 = [];
    this.getItemVOs_By_PointTypeSettingID(__s28param0).forEach(function (__s30param0) {
      if (__s30param0.donationTypeID == __s28param1) {
        __s28local0.push(__s30param0);
      }
    });
    return __s28local0;
  };
  CastleDonationEventData.prototype.getRewardVOs_By_RewardSetID = function (__s33param0) {
    var __s33local0 = [];
    this._rewards.forEach(function (__s35param0) {
      if (__s35param0.rewardSetID == __s33param0) {
        __s33local0.push(__s35param0);
      }
    });
    return __s33local0;
  };
  CastleDonationEventData.prototype.getRewardVOs_By_RewardSetID_And_PointTypeID = function (__s38param0, __s38param1) {
    var __s38local0 = [];
    this.getRewardVOs_By_RewardSetID(__s38param0).forEach(function (__s40param0) {
      if (__s40param0.donationTypeID == __s38param1) {
        __s38local0.push(__s40param0);
      }
    });
    return __s38local0;
  };
  CastleDonationEventData.prototype.getPointTypeVOByID = function (__s43param0) {
    return this._types.get(__s43param0);
  };
  CastleDonationEventData.prototype.getPointTypeVOs_By_DonationSettingID = function (__s45param0) {
    var __s45local0 = [];
    var __s45local1 = this._settings.get(__s45param0);
    this.getItemVOs_By_PointTypeSettingID(__s45local1.donationItemSetID).forEach(function (__s47param0) {
      if (!__s45local0.includes(__s47param0.pointTypeVO)) {
        __s45local0.push(__s47param0.pointTypeVO);
      }
    });
    return __s45local0;
  };
  CastleDonationEventData.prototype.getSettingVOByID = function (__s50param0) {
    return this._settings.get(__s50param0);
  };
  CastleDonationEventData.prototype.parseGDTI = function (__s52param0) {
    this._currentSpentPointsForTypes = new Map();
    for (var __s52local0 = 0; __s52local0 < __s52param0.DIS.length; __s52local0++) {
      this._currentSpentPointsForTypes.set(__s52param0.DIS[__s52local0].DII, __s52param0.DIS[__s52local0].DIP);
    }
    this.dispatchEvent(new __dep_export_CastleDonationEventDataEvent.CastleDonationEventDataEvent(__dep_export_CastleDonationEventDataEvent.CastleDonationEventDataEvent.ON_CURRENT_SPENT_POINTS_UPDATED));
  };
  CastleDonationEventData.prototype.getCurrentEarnedPointsForItemID = function (__s56param0) {
    if (this._currentSpentPointsForTypes.has(__s56param0)) {
      return this._currentSpentPointsForTypes.get(__s56param0);
    } else {
      return 0;
    }
  };
  CastleDonationEventData.prototype.getCurrentRewardPointsForType = function (__s60param0, __s60param1) {
    var __s60local0 = this;
    var __s60local1 = 0;
    this.getItemVOs_By_PointTypeSettingID_And_PointTypeID(__s60param1, __s60param0).forEach(function (__s62param0) {
      __s60local1 += __s60local0.getCurrentEarnedPointsForItemID(__s62param0.donationItemID);
    });
    return __s60local1;
  };
  CastleDonationEventData.prototype.getRewardLevelByDonationRewardID = function (__s64param0) {
    var __s64local0 = this._rewards.get(__s64param0);
    if (!__s64local0) {
      return 0;
    }
    var __s64local1 = this.getRewardVOs_By_RewardSetID_And_PointTypeID(__s64local0.rewardSetID, __s64local0.donationTypeID);
    return (__s64local1 = __s64local1.sort(function (__s67param0, __s67param1) {
      return __s67param0.minPoints - __s67param1.minPoints;
    })).indexOf(__s64local0) + 1;
  };
  CastleDonationEventData.prototype.getRewardVOByID = function (__s69param0) {
    return this._rewards.get(__s69param0);
  };
  CastleDonationEventData.LEADERBOARD_DONATIONTYPE_ID = 2;
  return CastleDonationEventData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleDonationEventData = __s0local0;
