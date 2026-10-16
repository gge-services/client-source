Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ACastleTournamentEventDialogProperties = require("gge-module:export_ACastleTournamentEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function TournamentEventVO() {
    var __s3local0 = this;
    __s3local0._famePerDay = 0;
    __s3local0._ownRank = 0;
    __s3local0._ownEarnedFamePoints = 0;
    __s3local0._minimumFamepointsForBoobyprice = 0;
    __s3local0._ownLeague = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._ranking = new Map();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TournamentEventVO, __s1param0);
  TournamentEventVO.prototype.parseEventXmlNode = function (__s5param0) {
    this._famePerDay = parseInt(__s5param0.famePerDay || "");
  };
  TournamentEventVO.prototype.parseParamObject = function (__s7param0) {
    this._winnerRewardList = __dep_export_CastleModel.CastleModel.rewardData.getListById(parseInt(__s7param0.WR));
    this._topXRewardList = __dep_export_CastleModel.CastleModel.rewardData.getListById(parseInt(__s7param0.TR));
    this._boobyRewardList = __dep_export_CastleModel.CastleModel.rewardData.getListById(parseInt(__s7param0.BR));
    if (__s7param0.R) {
      for (var __s7local0 = 0, __s7local1 = __s7param0.R; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          this._ranking.set(__s7local2[0], {
            O: __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s7local2[2]),
            EFP: __dep_exact_f855840627e6e145.int(__s7local2[1])
          });
        }
      }
    }
    this._ownRank = __dep_exact_f855840627e6e145.int(__s7param0.OR);
    this._ownEarnedFamePoints = __dep_exact_f855840627e6e145.int(__s7param0.OEP);
    this._minimumFamepointsForBoobyprice = __dep_exact_f855840627e6e145.int(__s7param0.MFB);
  };
  Object.defineProperty(TournamentEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return TournamentEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Tournement";
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "famePerDay", {
    get: function () {
      return this._famePerDay;
    },
    enumerable: true,
    configurable: true
  });
  TournamentEventVO.prototype.getRankObject = function (__s23param0) {
    return this._ranking.get(__s23param0);
  };
  Object.defineProperty(TournamentEventVO.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "ownEarnedFamePoints", {
    get: function () {
      return this._ownEarnedFamePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "minimumFamepointsForBoobyprice", {
    get: function () {
      return this._minimumFamepointsForBoobyprice;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "winnerRewardList", {
    get: function () {
      return this._winnerRewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "topXRewardList", {
    get: function () {
      return this._topXRewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "boobyRewardList", {
    get: function () {
      return this._boobyRewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "ownLeague", {
    get: function () {
      return this._ownLeague;
    },
    enumerable: true,
    configurable: true
  });
  TournamentEventVO.prototype.openDialog = function (__s39param0 = true) {
    this.executeOpenDialog(__s39param0, __dep_export_CastleTournamentEventDialog.CastleTournamentEventDialog, new __dep_export_ACastleTournamentEventDialogProperties.ACastleTournamentEventDialogProperties(this));
  };
  TournamentEventVO.__initialize_static_members = function () {
    TournamentEventVO.EVENT_BUILDING_WOD = 217;
  };
  return TournamentEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.TournamentEventVO = __s0local0;
var __dep_export_CastleTournamentEventDialog = require("gge-module:export_CastleTournamentEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
