Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function AllianceRaidBossCardVO() {
    this._portalBossID = 0;
    this._cardStatus = __dep_exact_26a421b704832cff.AllianceRaidConst.BOSS_CARD_STATUS_AVAILABLE;
    this._unlockedLevel = 0;
    CONSTRUCTOR_HACK;
  }
  AllianceRaidBossCardVO.prototype.parse = function (__s5param0) {
    this._portalBossID = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.PORTAL_BOSS_ID]);
    this._cardStatus = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.RAID_BOSS_CARD_STATUS]);
    this._unlockedLevel = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.UNLOCKED_LEVEL]);
  };
  AllianceRaidBossCardVO.prototype.getXMLBossDataVO = function () {
    return __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByID(this._portalBossID);
  };
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "portalBossID", {
    get: function () {
      return this._portalBossID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "cardStatus", {
    get: function () {
      return this._cardStatus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "unlockedLevel", {
    get: function () {
      return this._unlockedLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "isAvailable", {
    get: function () {
      return this._cardStatus == __dep_exact_26a421b704832cff.AllianceRaidConst.BOSS_CARD_STATUS_AVAILABLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "isUnavailable", {
    get: function () {
      return this._cardStatus == __dep_exact_26a421b704832cff.AllianceRaidConst.BOSS_CARD_STATUS_UNAVAILABLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "isOngoing", {
    get: function () {
      return this._cardStatus == __dep_exact_26a421b704832cff.AllianceRaidConst.BOSS_CARD_STATUS_ONGOING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "isLockedFinalDefeated", {
    get: function () {
      return this._cardStatus == __dep_exact_26a421b704832cff.AllianceRaidConst.BOSS_CARD_STATUS_LOCKED_FINAL_DEFEATED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "isLockedAborted", {
    get: function () {
      return this._cardStatus == __dep_exact_26a421b704832cff.AllianceRaidConst.BOSS_CARD_STATUS_LOCKED_ABORTED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "isLocked", {
    get: function () {
      return this.isLockedFinalDefeated || this.isLockedAborted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossCardVO.prototype, "isSelectable", {
    get: function () {
      return this.isAvailable;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidBossCardVO;
}();
exports.AllianceRaidBossCardVO = __s0local0;
