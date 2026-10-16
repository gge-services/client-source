Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SMercenaryPackageVO = require("gge-module:export_C2SMercenaryPackageVO");
var __dep_export_CastleMercenaryDataEvent = require("gge-module:export_CastleMercenaryDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function CastleMercenaryData() {
    var __s3local0 = this;
    __s3local0._currentMissionState = 0;
    __s3local0._timestampNextPackage = 0;
    __s3local0._newMissions = false;
    __s3local0._sortMissionsOnUpdate = false;
    __s3local0._waitingForServer = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._missions = [];
    __s3local0._sortMissionsOnUpdate = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMercenaryData, __s1param0);
  CastleMercenaryData.prototype.parse_MPE = function (__s5param0) {
    if (__s5param0) {
      var __s5local0;
      this._timestampNextPackage = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + (__s5param0.NM + CastleMercenaryData.NEXT_MISSIONS_TIMER_DELAY) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      if (this._nextMissionsTimer) {
        this._nextMissionsTimer.delay = this.remainingNextPackageTime;
        this._nextMissionsTimer.start();
      } else {
        this._nextMissionsTimer = new __dep_exact_81dacdf05bd32292.Timer(this.remainingNextPackageTime, 1);
        this._nextMissionsTimer.start();
      }
      this._nextMissionsTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onNewMissions));
      this._missions = [];
      this._currentMissionState = CastleMercenaryData.MISSION_STATE_DEFAULT;
      if (this._currentMissionTimer) {
        this._currentMissionTimer.stop();
      }
      for (var __s5local1 = 0, __s5local2 = __s5param0.M; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && ((__s5local0 = new __dep_export_CastleMercenaryMissionItemVO.CastleMercenaryMissionItemVO()).fillFromParamObject(__s5local3), __s5local0.state < CastleMercenaryData.MISSION_STATE_COLLECTED && (this._missions.push(__s5local0), __s5local0.state > this._currentMissionState && (this._currentMissionState = __s5local0.state, __s5local0.state == CastleMercenaryData.MISSION_STATE_STARTED)))) {
          var __s5local4 = __dep_exact_f855840627e6e145.int(__s5local0.remainingTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
          if (__s5local4 > 0) {
            if (this._currentMissionTimer) {
              this._currentMissionTimer.delay = __s5local4;
            } else {
              this._currentMissionTimer = new __dep_exact_81dacdf05bd32292.Timer(__s5local4, 1);
            }
            this._currentMissionTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onMissionFinished));
            this._currentMissionTimer.start();
          } else {
            this.onMissionFinished(null);
          }
        }
      }
      this.sortMissions();
      if (this._newMissions) {
        this._newMissions = false;
        this.dispatchEvent(new __dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.NEW_MISSIONS_ARRIVED));
      }
      this.dispatchEvent(new __dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.DATA_CHANGED));
      this.waitingForServer = false;
    }
  };
  CastleMercenaryData.prototype.sortMissions = function () {
    var __s19local0;
    if (this._sortMissionsOnUpdate) {
      this._missions.sort(this.bindFunction(this.sortMissionsByQualityAndState));
      var __s19local1 = [];
      for (var __s19local2 = 0, __s19local3 = this._missions; __s19local2 < __s19local3.length; __s19local2++) {
        __s19local0 = __s19local3[__s19local2];
        __s19local1.push(__s19local0.missionID);
      }
      this._sortOrder = __s19local1;
      this._sortMissionsOnUpdate = false;
    } else {
      var __s19local4 = [];
      for (var __s19local5 = 0; __s19local5 < this._sortOrder.length; __s19local5++) {
        if (__s19local0 = this.getMissionByID(this._sortOrder[__s19local5])) {
          __s19local4.push(__s19local0);
        }
      }
      this._missions = __s19local4;
    }
  };
  CastleMercenaryData.prototype.getMissionByID = function (__s28param0) {
    if (this._missions != null) {
      for (var __s28local0 = 0, __s28local1 = this._missions; __s28local0 < __s28local1.length; __s28local0++) {
        var __s28local2 = __s28local1[__s28local0];
        if (__s28local2 !== undefined && __s28local2.missionID == __s28param0) {
          return __s28local2;
        }
      }
    }
    return null;
  };
  CastleMercenaryData.prototype.onMissionFinished = function (__s34param0) {
    if (__dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed) {
      this._currentMissionTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onMissionFinished));
      if (this.activeMission) {
        this.changeMissionState(this.activeMission.missionID, CastleMercenaryData.MISSION_STATE_COLLECTABLE);
      }
    }
  };
  CastleMercenaryData.prototype.onNewMissions = function (__s38param0) {
    if (__dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMercenaryPackageVO.C2SMercenaryPackageVO(-1));
      this._newMissions = true;
      this._sortMissionsOnUpdate = true;
    }
  };
  CastleMercenaryData.prototype.sortMissionsByQualityAndState = function (__s41param0, __s41param1) {
    if (__s41param0.state > __s41param1.state) {
      return -1;
    } else if (__s41param0.state < __s41param1.state) {
      return 1;
    } else if (__s41param0.isFreeMission() && !__s41param1.isFreeMission()) {
      return -1;
    } else if (!__s41param0.isFreeMission() && __s41param1.isFreeMission()) {
      return 1;
    } else if (__s41param0.quality > __s41param1.quality) {
      return -1;
    } else if (__s41param0.quality < __s41param1.quality) {
      return 1;
    } else if (__s41param0.missionID > __s41param1.missionID) {
      return -1;
    } else if (__s41param0.missionID < __s41param1.missionID) {
      return 1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleMercenaryData.prototype, "currentMissionState", {
    get: function () {
      return this._currentMissionState;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryData.prototype.changeMissionState = function (__s54param0, __s54param1) {
    if (this._missions != null) {
      for (var __s54local0 = 0, __s54local1 = this._missions; __s54local0 < __s54local1.length; __s54local0++) {
        var __s54local2 = __s54local1[__s54local0];
        if (__s54local2 !== undefined && __s54param0 == __s54local2.missionID) {
          __s54local2.state = __s54param1;
          this._currentMissionState = __s54param1;
          this.dispatchEvent(new __dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.DATA_CHANGED));
        }
      }
    }
  };
  Object.defineProperty(CastleMercenaryData.prototype, "activeMission", {
    get: function () {
      if (this.missions != null) {
        for (var __s60local0 = 0, __s60local1 = this.missions; __s60local0 < __s60local1.length; __s60local0++) {
          var __s60local2 = __s60local1[__s60local0];
          if (__s60local2 !== undefined && __s60local2.state == CastleMercenaryData.MISSION_STATE_STARTED) {
            return __s60local2;
          }
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "missions", {
    get: function () {
      return this._missions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "missionCount", {
    get: function () {
      return this._missions.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "readyMissionsCount", {
    get: function () {
      if (this._currentMissionState > CastleMercenaryData.MISSION_STATE_DEFAULT) {
        return this._missions.length - 1;
      } else {
        return this._missions.length;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "remainingNextPackageTime", {
    get: function () {
      return Math.max(0, this._timestampNextPackage - __dep_export_CachedTimer.CachedTimer.getCachedTimer());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryData.prototype, "waitingForServer", {
    get: function () {
      return this._waitingForServer;
    },
    set: function (__s78param0) {
      this._waitingForServer = __s78param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryData.prototype.reset = function () {
    if (this._nextMissionsTimer) {
      this._nextMissionsTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onNewMissions));
    }
    if (this._currentMissionTimer) {
      this._currentMissionTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onMissionFinished));
    }
  };
  Object.defineProperty(CastleMercenaryData.prototype, "sortMissionsOnUpdate", {
    get: function () {
      return this._sortMissionsOnUpdate;
    },
    set: function (__s86param0) {
      this._sortMissionsOnUpdate = __s86param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryData.MISSION_STATE_DEFAULT = 0;
  CastleMercenaryData.MISSION_STATE_STARTED = 1;
  CastleMercenaryData.MISSION_STATE_COLLECTABLE = 2;
  CastleMercenaryData.MISSION_STATE_COLLECTED = 3;
  CastleMercenaryData.NEXT_MISSIONS_TIMER_DELAY = 1;
  return CastleMercenaryData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleMercenaryData = __s0local1;
var __dep_export_CastleMercenaryMissionItemVO = require("gge-module:export_CastleMercenaryMissionItemVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "IUpdatable");
