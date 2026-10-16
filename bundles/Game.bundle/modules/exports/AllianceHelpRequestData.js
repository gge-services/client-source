Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleAllianceHelpFeedbackComponentProperties = require("gge-module:export_CastleAllianceHelpFeedbackComponentProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceHelpRequestParamsFactory = require("gge-module:export_AllianceHelpRequestParamsFactory");
var __dep_export_AllianceHelpRequestVO = require("gge-module:export_AllianceHelpRequestVO");
var __s0local0 = function (__s1param0) {
  function AllianceHelpRequestData(__s3param0) {
    var __s3local0 = this;
    __s3local0._unitHealTimeReduction = 0;
    __s3local0._decreaseBuildingTimeAbsolute = 0;
    __s3local0._nextHelpRepairTimeStamp = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseNeededProgressValues(__s3param0);
    __s3local0._requests = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceHelpRequestData, __s1param0);
  AllianceHelpRequestData.prototype.parseNeededProgressValues = function (__s5param0) {
    this._neededProgressValues = new Map();
    var __s5local0 = __s5param0.alliancehelprequests;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = parseInt(__s5local3.allianceHelpRequestID || "");
          var __s5local5 = parseInt(__s5local3.maxHelpersCount || "");
          this._neededProgressValues.set(__s5local4, __s5local5);
          if (__s5local4 == __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_HEAL_UNIT) {
            this._unitHealTimeReduction = parseInt(__s5local3.unitHealTimeReduction || "");
          } else if (__s5local4 == __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD) {
            this._decreaseBuildingTimeAbsolute = parseInt(__s5local3.decreaseBuildingTimeAbsolute || "");
          }
        }
      }
    }
  };
  Object.defineProperty(AllianceHelpRequestData.prototype, "visibleRequests", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
        var __s13local0 = this._requests.filter(this.bindFunction(this.isVisibleInList));
        __s13local0.sort(this.bindFunction(this.sortList));
        return __s13local0;
      }
      return [];
    },
    enumerable: true,
    configurable: true
  });
  AllianceHelpRequestData.prototype.executeUpdate = function (__s16param0) {
    var __s16local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    var __s16local1 = 0;
    var __s16local2 = false;
    for (var __s16local3 = __dep_exact_f855840627e6e145.int(this._requests.length - 1); __s16local3 > -1; __s16local3--) {
      var __s16local4 = this._requests[__s16local3];
      __s16local1 = __s16local0 - __s16local4.timeStamp;
      var __s16local5 = __s16local4.remainingTime != -1 && __s16local4.remainingTime - __s16local1 <= 0;
      var __s16local6 = __s16local4.alreadyConfirmed && !__s16local4.isOwnPlayer;
      if (__s16local5 || __s16local6) {
        this._requests.splice(__s16local3, 1);
        __s16local2 = true;
      }
    }
    if (__s16local2) {
      this.dispatchUpdateEvent();
    }
  };
  Object.defineProperty(AllianceHelpRequestData.prototype, "clickAbleRequestCount", {
    get: function () {
      return this.visibleRequests.filter(this.bindFunction(this.isClickAbleRequest)).length;
    },
    enumerable: true,
    configurable: true
  });
  AllianceHelpRequestData.prototype.cleanRequests = function () {
    this._requests = [];
  };
  AllianceHelpRequestData.prototype.parse_AHF = function (__s26param0) {
    var __s26local0 = __s26param0.PN;
    var __s26local1 = this.getRequestVOById(__s26param0.LID);
    var __s26local2 = __dep_exact_f855840627e6e145.int(__s26param0.WID ? __s26param0.WID : 0);
    if (__s26local1) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().showFlashUIComponent(__dep_export_CastleAllianceHelpFeedbackComponent.CastleAllianceHelpFeedbackComponent, new __dep_export_CastleAllianceHelpFeedbackComponentProperties.CastleAllianceHelpFeedbackComponentProperties(__s26local0, __s26local1, __s26local2));
    }
  };
  AllianceHelpRequestData.prototype.parse_AHL = function (__s29param0) {
    if (__s29param0) {
      this._requests = [];
      var __s29local0;
      var __s29local1 = __s29param0.AHL;
      if (__s29local1 != null) {
        for (var __s29local2 = 0, __s29local3 = __s29local1; __s29local2 < __s29local3.length; __s29local2++) {
          var __s29local4 = __s29local3[__s29local2];
          if (__s29local4 !== undefined) {
            __s29local0 = new __dep_export_AllianceHelpRequestVO.AllianceHelpRequestVO();
            this.parseHelpRequestEntry(__s29local0, __s29local4);
            this._requests.push(__s29local0);
          }
        }
      }
      this._nextHelpRepairTimeStamp = __s29param0.TSL != -1 ? __dep_export_CachedTimer.CachedTimer.getCachedTimer() + (__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC - __s29param0.TSL * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC) : __s29param0.TSL;
      this.dispatchUpdateEvent();
    }
  };
  AllianceHelpRequestData.prototype.parse_AHH = function (__s36param0) {
    var __s36local0 = __dep_exact_f855840627e6e145.int(__s36param0.LID);
    var __s36local1 = this.getRequestVOById(__s36local0);
    if (__s36local1) {
      this.parseHelpRequestEntry(__s36local1, __s36param0);
      if (__s36local1.progress == __s36local1.neededProgress) {
        this.dispatchEvent(new __dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.REQUEST_COMPLETE, __s36local1));
      }
    } else {
      __s36local1 = new __dep_export_AllianceHelpRequestVO.AllianceHelpRequestVO();
      this.parseHelpRequestEntry(__s36local1, __s36param0);
      this._requests.push(__s36local1);
    }
    this._nextHelpRepairTimeStamp = __s36param0.TSL != -1 ? __dep_export_CachedTimer.CachedTimer.getCachedTimer() + (__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC - __s36param0.TSL * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC) : __s36param0.TSL;
    this.dispatchUpdateEvent(__s36local1);
  };
  AllianceHelpRequestData.prototype.parse_AHD = function (__s41param0) {
    var __s41local0 = __dep_exact_f855840627e6e145.int(__s41param0.LID);
    if (this.getRequestVOById(__s41local0)) {
      this._requests.splice(this._requests.indexOf(this.getRequestVOById(__s41local0)), 1);
      this.dispatchUpdateEvent();
    }
  };
  AllianceHelpRequestData.prototype.getStatusOfOwnRequestByID = function (__s44param0, __s44param1 = null) {
    if (this._requests != null) {
      for (var __s44local0 = 0, __s44local1 = this._requests; __s44local0 < __s44local1.length; __s44local0++) {
        var __s44local2 = __s44local1[__s44local0];
        if (__s44local2 !== undefined && __s44local2.isOwnPlayer && __s44local2.requestTypeId == __s44param0 && this.isSameRequest(__s44local2.optionalParams, __s44param1)) {
          return __dep_exact_f855840627e6e145.int(this.getStatusOfRequest(__s44local2));
        }
      }
    }
    return __dep_exact_f855840627e6e145.int(__dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_POSSIBLE);
  };
  AllianceHelpRequestData.prototype.getOwnRequestVOByParams = function (__s50param0, __s50param1) {
    if (this._requests != null) {
      for (var __s50local0 = 0, __s50local1 = this._requests; __s50local0 < __s50local1.length; __s50local0++) {
        var __s50local2 = __s50local1[__s50local0];
        if (__s50local2 !== undefined && __s50local2.isOwnPlayer && __s50local2.requestTypeId == __s50param0 && this.isSameRequest(__s50local2.optionalParams, __s50param1)) {
          return __s50local2;
        }
      }
    }
    return null;
  };
  AllianceHelpRequestData.prototype.isVisibleInList = function (__s56param0) {
    var __s56local0 = [];
    for (var __s56local1 = 1; __s56local1 < arguments.length; __s56local1++) {
      __s56local0[__s56local1 - 1] = arguments[__s56local1];
    }
    return __s56param0.progress != __s56param0.neededProgress && !__s56param0.alreadyConfirmed;
  };
  AllianceHelpRequestData.prototype.isClickAbleRequest = function (__s60param0) {
    var __s60local0 = [];
    for (var __s60local1 = 1; __s60local1 < arguments.length; __s60local1++) {
      __s60local0[__s60local1 - 1] = arguments[__s60local1];
    }
    return !__s60param0.isOwnPlayer;
  };
  AllianceHelpRequestData.prototype.parseHelpRequestEntry = function (__s64param0, __s64param1) {
    __s64param0.alreadyConfirmed = __s64param1.AC;
    __s64param0.listID = __dep_exact_f855840627e6e145.int(__s64param1.LID);
    __s64param0.playerName = __s64param1.PN;
    __s64param0.progress = __dep_exact_f855840627e6e145.int(__s64param1.P);
    __s64param0.playerID = __dep_exact_f855840627e6e145.int(__s64param1.PID);
    __s64param0.requestTypeId = __dep_exact_f855840627e6e145.int(__s64param1.TID);
    __s64param0.optionalParams = __dep_export_AllianceHelpRequestParamsFactory.AllianceHelpRequestParamsFactory.parseParams(__s64param1.TID, __s64param1.OP);
    __s64param0.neededProgress = this.getNeededProgress(__s64param0.requestTypeId);
    __s64param0.isOwnPlayer = __s64param0.playerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    __s64param0.remainingTime = __s64param1.RT > -1 ? __s64param1.RT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC : -1;
    __s64param0.timeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
  };
  AllianceHelpRequestData.prototype.getStatusOfRequest = function (__s66param0) {
    if (__s66param0.progress == __s66param0.neededProgress) {
      return __dep_exact_f855840627e6e145.int(__dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_CONFIRMED);
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_ClientConstAlliance.ClientConstAlliance.STATUS_REQUEST_PROCESSING);
    }
  };
  AllianceHelpRequestData.prototype.isSameRequest = function (__s70param0, __s70param1) {
    return __s70param0 == null && __s70param1 == null || __s70param0.isSameAs(__s70param1);
  };
  AllianceHelpRequestData.prototype.getRequestVOById = function (__s72param0) {
    if (this._requests != null) {
      for (var __s72local0 = 0, __s72local1 = this._requests; __s72local0 < __s72local1.length; __s72local0++) {
        var __s72local2 = __s72local1[__s72local0];
        if (__s72local2 !== undefined && __s72local2.listID == __s72param0) {
          return __s72local2;
        }
      }
    }
    return null;
  };
  AllianceHelpRequestData.prototype.sortList = function (__s78param0, __s78param1) {
    if (__s78param0.isOwnPlayer) {
      return 1;
    } else if (__s78param1.isOwnPlayer) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceHelpRequestData.prototype.getNeededProgress = function (__s83param0) {
    return __dep_exact_f855840627e6e145.int(this._neededProgressValues.get(__s83param0));
  };
  AllianceHelpRequestData.prototype.dispatchUpdateEvent = function (__s85param0 = null) {
    this.dispatchEvent(new __dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, __s85param0));
  };
  AllianceHelpRequestData.prototype.getRemainingRepairHelpCooldown = function () {
    return __dep_exact_f855840627e6e145.int((this._nextHelpRepairTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  Object.defineProperty(AllianceHelpRequestData.prototype, "unitHealTimeReduction", {
    get: function () {
      return this._unitHealTimeReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceHelpRequestData.prototype, "decreaseBuildingTimeAbsolute", {
    get: function () {
      return this._decreaseBuildingTimeAbsolute;
    },
    enumerable: true,
    configurable: true
  });
  AllianceHelpRequestData.prototype.isBuildHelpAvailable = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.mapID <= 0 && __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished();
  };
  AllianceHelpRequestData.prototype.hasBuildHelpAbTestLevelRestriction = function () {
    if (__dep_export_CastleModel.CastleModel.userData.splitRunData.getBooleanParam(__dep_exact_26a421b704832cff_2.SplitRunConst.SKIP_GROUP_PARAM)) {
      return __dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    } else {
      return __dep_export_CastleModel.CastleModel.userData.userLevel < __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_HELP_BUILD_MINLEVEL;
    }
  };
  return AllianceHelpRequestData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.AllianceHelpRequestData = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAllianceHelpFeedbackComponent = require("gge-module:export_CastleAllianceHelpFeedbackComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
