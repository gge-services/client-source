Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function AllianceQuestSlotVO() {
    this._slotID = -1;
    this._allianceQuestID = -1;
    this._playerID = -1;
    this._playerName = "";
    this._remainingTimeTimestamp = 0;
    this._eventID = 0;
  }
  AllianceQuestSlotVO.prototype.fillFromParams = function (__s5param0, __s5param1) {
    this._slotID = __s5param0;
    this._allianceQuestID = parseInt(__s5param1[__dep_exact_26a421b704832cff.CommKeys.QUEST_ID]);
    this._playerID = parseInt(__s5param1[__dep_exact_26a421b704832cff.CommKeys.PLAYER_ID]);
    this._playerName = __s5param1[__dep_exact_26a421b704832cff.CommKeys.PLAYER_NAME] || "";
    this._remainingTimeTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + parseInt(__s5param1[__dep_exact_26a421b704832cff.CommKeys.REMAINING_SECONDS]) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._allianceQuestVO = __dep_export_CastleModel.CastleModel.allianceQuestData.getAllianceQuestByID(this._allianceQuestID);
    if (this._allianceQuestVO) {
      this._questVO = __dep_export_CastleModel.CastleModel.questData.createQuest(this._allianceQuestVO.questID);
      this._questVO.fillFromParams(__s5param1.QL[0] || {});
    }
  };
  Object.defineProperty(AllianceQuestSlotVO.prototype, "slotID", {
    get: function () {
      return this._slotID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestSlotVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    set: function (__s12param0) {
      this._eventID = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestSlotVO.prototype, "allianceQuestID", {
    get: function () {
      return this._allianceQuestID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestSlotVO.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestSlotVO.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestSlotVO.prototype, "remainingTimeTimestamp", {
    get: function () {
      return this._remainingTimeTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  AllianceQuestSlotVO.prototype.getRemainingTimeInSeconds = function () {
    return Math.max((this._remainingTimeTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
  };
  Object.defineProperty(AllianceQuestSlotVO.prototype, "allianceQuestVO", {
    get: function () {
      return this._allianceQuestVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestSlotVO.prototype, "questVO", {
    get: function () {
      return this._questVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestSlotVO.prototype, "isValid", {
    get: function () {
      return !!this._allianceQuestVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestSlotVO.prototype, "state", {
    get: function () {
      if (this.playerID > 0) {
        if (this._questVO.isCompleted) {
          return AllianceQuestSlotVO.QUEST_COLLECT;
        } else if (this.playerID === __dep_export_CastleModel.CastleModel.userData.playerID) {
          return AllianceQuestSlotVO.QUEST_ASSIGNED_SELF;
        } else {
          return AllianceQuestSlotVO.QUEST_ASSIGNED;
        }
      } else if (this._remainingTimeTimestamp > __dep_export_CachedTimer.CachedTimer.getCachedTimer()) {
        return AllianceQuestSlotVO.QUEST_COOLDOWN;
      } else {
        return AllianceQuestSlotVO.QUEST_UNASSIGNED;
      }
    },
    enumerable: true,
    configurable: true
  });
  AllianceQuestSlotVO.prototype.getCooldownSkipCosts = function () {
    return 999;
  };
  AllianceQuestSlotVO.QUEST_UNASSIGNED = "unassigned";
  AllianceQuestSlotVO.QUEST_ASSIGNED = "assigned";
  AllianceQuestSlotVO.QUEST_ASSIGNED_SELF = "assigned_self";
  AllianceQuestSlotVO.QUEST_COOLDOWN = "cooldown";
  AllianceQuestSlotVO.QUEST_COLLECT = "collect";
  return AllianceQuestSlotVO;
}();
exports.AllianceQuestSlotVO = __s0local0;
