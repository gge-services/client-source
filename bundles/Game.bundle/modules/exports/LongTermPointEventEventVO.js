Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_LongTermPointEventSkin = require("gge-module:export_LongTermPointEventSkin");
var __dep_export_ALeagueTypeScoreEventVO = require("gge-module:export_ALeagueTypeScoreEventVO");
var __dep_export_ScoreConditionVO = require("gge-module:export_ScoreConditionVO");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventEventVO() {
    var __s3local0 = this;
    __s3local0.scoreConditions = new Map();
    __s3local0._upcomingEvents = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventEventVO, __s1param0);
  LongTermPointEventEventVO.prototype.parseParamObject = function (__s5param0) {
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
    if (__s5param0.UE) {
      this._upcomingEvents = __s5param0.UE;
    }
    if (__s5param0.SID) {
      this.setSkinBySkinID(__s5param0.SID);
    }
  };
  LongTermPointEventEventVO.prototype.setSkinBySkinID = function (__s9param0) {
    this._skin = __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.getTypeById(__s9param0);
  };
  LongTermPointEventEventVO.prototype.parseAdditionalXmlFromRoot = function (__s11param0) {
    __s1param0.prototype.parseAdditionalXmlFromRoot.call(this, __s11param0);
    var __s11local0 = __s11param0.longtermpointeventquests;
    if (__s11local0 != null) {
      for (var __s11local1 = 0, __s11local2 = __s11local0; __s11local1 < __s11local2.length; __s11local1++) {
        var __s11local3 = __s11local2[__s11local1];
        if (__s11local3 !== undefined) {
          if (parseInt(__s11local3.leaguetypeID || "") == this._leagueID) {
            this.parseLongTermPointEventQuest(__s11local3);
          }
        }
      }
    }
    if (this._upcomingEvents != null) {
      for (var __s11local4 = 0, __s11local5 = this._upcomingEvents; __s11local4 < __s11local5.length; __s11local4++) {
        var __s11local6 = __s11local5[__s11local4];
        if (__s11local6 !== undefined && !this.scoreConditions.has(__s11local6)) {
          throw new Error("Did not find matching longtermpointeventquest XML node for event ID " + this._eventId + ", league ID " + this._leagueID + " and subtype " + this.subTypeID + ".");
        }
      }
    }
  };
  LongTermPointEventEventVO.prototype.parseLongTermPointEventQuest = function (__s22param0) {
    var __s22local0 = parseInt(__s22param0.subEventID || "");
    var __s22local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s22param0.pointsPerTier || "", ",");
    for (var __s22local2 = (__s22param0.conditions || "").split("#"), __s22local3 = [], __s22local4 = 0; __s22local4 < __s22local2.length; __s22local4++) {
      __s22local3[__s22local4] = __s22local2[__s22local4].toString().split("+");
    }
    if (__s22local1.length != __s22local3.length) {
      throw new Error("The length of pointsPerTier and conditions in longtermpointeventquest XML node with id " + (__s22param0.pointEventQuestID || "") + ":  must be the same!");
    }
    this.scoreConditions.set(__s22local0, []);
    for (var __s22local5 = 0; __s22local5 < __s22local3.length; ++__s22local5) {
      this.scoreConditions.get(__s22local0).push(new __dep_export_ScoreConditionVO.ScoreConditionVO(__s22local1[__s22local5], __s22local3[__s22local5]));
    }
  };
  Object.defineProperty(LongTermPointEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_longPointEvent" + this._skin.textSuffix;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO.prototype, "eventBuildingNameId").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return this._skin.buildingWod;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO.prototype, "eventBuildingWOD").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventEventVO.prototype.openDialog = function (__s37param0 = true) {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_LONGTERM_POINT_EVENT_DIALOG);
  };
  LongTermPointEventEventVO.prototype.getCondition = function (__s39param0, __s39param1) {
    return this.scoreConditions.get(__s39param0)[__s39param1];
  };
  LongTermPointEventEventVO.prototype.getConditionCount = function (__s41param0) {
    return __dep_exact_f855840627e6e145.int(this.scoreConditions.get(__s41param0).length);
  };
  Object.defineProperty(LongTermPointEventEventVO.prototype, "upcomingEvents", {
    get: function () {
      return this._upcomingEvents;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventEventVO.prototype, "skin", {
    get: function () {
      return this._skin;
    },
    set: function (__s47param0) {
      this._skin = __s47param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventEventVO.prototype, "skinId", {
    get: function () {
      return this._skin.id;
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventEventVO;
}(__dep_export_ALeagueTypeScoreEventVO.ALeagueTypeScoreEventVO);
exports.LongTermPointEventEventVO = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable", "ISkinnable");
