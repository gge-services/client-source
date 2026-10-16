Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_AVisualVO = require("gge-module:export_AVisualVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_LordFactory = require("gge-module:export_LordFactory");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_DummyMapobjectVO = require("gge-module:export_DummyMapobjectVO");
var __s0local0 = function (__s1param0) {
  function BasicMapmovementVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._passedTime = 0;
    __s3local0._passedTimeMs = 0;
    __s3local0._totalTime = 0;
    __s3local0._totalTimeMs = 0;
    __s3local0._arivalTimeStamp = 0;
    __s3local0._direction = 0;
    __s3local0._sourceOwnerID = 0;
    __s3local0._targetOwnerID = 0;
    __s3local0._movementOwnerID = 0;
    __s3local0._passedWaitDuration = 0;
    __s3local0._totalWaitDuration = 0;
    __s3local0._endWaitTimeStamp = 0;
    __s3local0._isNPCMovement = false;
    __s3local0._horseBoosterWod = 0;
    __s3local0._kingdomID = 0;
    __s3local0._advisorType = 0;
    __s3local0._advisorMovementCount = 0;
    __s3local0._advisorMovementNumber = 0;
    __s3local0._advisorIsLastAttack = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicMapmovementVO, __s1param0);
  BasicMapmovementVO.prototype.loadFromParamObject = function (__s5param0) {
    var __s5local0 = __s5param0.M;
    this._objectId = __s5local0.MID;
    this._passedTime = __dep_exact_f855840627e6e145.int(__s5local0.PT);
    this._passedTimeMs = __s5local0.PT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._totalTimeMs = __s5local0.TT * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._totalTime = __dep_exact_f855840627e6e145.int(__s5local0.TT);
    this._arivalTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + (this._totalTime - this._passedTime) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._direction = __dep_exact_f855840627e6e145.int(__s5local0.D);
    this._sourceArea = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5local0.SA);
    this._sourceOwnerID = __dep_exact_f855840627e6e145.int(this._sourceArea && this._sourceArea.ownerInfo ? this._sourceArea.ownerInfo.playerID : __s5local0.SID);
    this._targetOwnerID = __dep_exact_f855840627e6e145.int(__s5local0.TID);
    this._movementOwnerID = __dep_exact_f855840627e6e145.int(__s5local0.OID);
    this._sourceOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._sourceOwnerID);
    this._targetOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._targetOwnerID);
    this._movementOwnerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._movementOwnerID);
    this._kingdomID = __dep_exact_f855840627e6e145.int(__s5local0.KID);
    if (this._sourceArea) {
      this._sourceArea.ownerInfo = this._sourceOwnerInfo;
    } else {
      this._sourceArea = new __dep_export_DummyMapobjectVO.DummyMapobjectVO();
    }
    this._targetArea = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5local0.TA);
    if (this._targetArea) {
      if (this._targetArea.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
        this._targetArea.ownerInfo = this._targetOwnerInfo;
      }
    } else {
      this._targetArea = new __dep_export_DummyMapobjectVO.DummyMapobjectVO();
    }
    this._horseBoosterWod = __dep_exact_f855840627e6e145.int(__s5local0.HBW);
    if (__s5param0.UM) {
      this.parseUnitMovement(__s5param0.UM);
    }
    if (this._sourceArea && this._sourceArea.ownerInfo) {
      this._isNPCMovement = this._sourceArea.ownerInfo.isDungeonOwner;
    }
  };
  BasicMapmovementVO.prototype.updateOwnerInfos = function (__s14param0) {
    if (this._sourceOwnerInfo && __s14param0.playerID == this._sourceOwnerInfo.playerID) {
      this._sourceOwnerInfo = __s14param0;
    }
    if (this._targetOwnerInfo && __s14param0.playerID == this._targetOwnerInfo.playerID) {
      this._targetOwnerInfo = __s14param0;
    }
    if (this._movementOwnerInfo && __s14param0.playerID == this._movementOwnerInfo.playerID) {
      this._movementOwnerInfo = __s14param0;
    }
  };
  BasicMapmovementVO.prototype.parseUnitMovement = function (__s19param0) {
    this._passedWaitDuration = __dep_exact_f855840627e6e145.int(__s19param0.PWD);
    this._totalWaitDuration = __dep_exact_f855840627e6e145.int(__s19param0.TWD);
    this._endWaitTimeStamp = __dep_exact_f855840627e6e145.int(this.getTimeUntiMovmentReachTargetInMilliSeconds() + __dep_export_CachedTimer.CachedTimer.getCachedTimer() + (this._totalWaitDuration - this._passedWaitDuration) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    if (__s19param0.L) {
      this._lordVO = __dep_export_LordFactory.LordFactory.createLord(__s19param0.L, true);
    }
    if (__s19param0.AAT) {
      this._advisorType = __s19param0.AAT;
    }
    if (__s19param0.AAC) {
      this._advisorMovementCount = __s19param0.AAC;
    }
    if (__s19param0.AAN) {
      this._advisorMovementNumber = __s19param0.AAN;
    }
    if (__s19param0.AAL == 1) {
      this._advisorIsLastAttack = true;
    }
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "isVisibleOnWorldMap", {
    get: function () {
      return this.kingdomID == __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "currentProgress", {
    get: function () {
      if (this._totalWaitDuration > 0 && this.movementProgress == 1) {
        return this.waitProgress;
      } else {
        return this.movementProgress;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.prototype.shouldBeShown = function () {
    if (this._totalWaitDuration > 0 && this.movementProgress == 1) {
      return this.getTimeUntilWaitOverInSeconds() > 0;
    } else {
      return this.getTimeUnitMovmentReachTargetInSeconds() > 0;
    }
  };
  BasicMapmovementVO.prototype.currentEndTimeInSeconds = function () {
    if (this._totalWaitDuration > 0 && this.movementProgress == 1) {
      return this.getTimeUntilWaitOverInSeconds();
    } else {
      return this.getTimeUnitMovmentReachTargetInSeconds();
    }
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "movementProgress", {
    get: function () {
      var __s40local0 = this.getPassedTimeInMiliSeconds() / this.getTotalTimeInMiliSeconds();
      if (__s40local0 > 1) {
        return 1;
      } else {
        return __s40local0;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.prototype.getTimeUntiMovmentReachTargetInMilliSeconds = function () {
    return Math.max(0, this._arivalTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer());
  };
  BasicMapmovementVO.prototype.getTimeUnitMovmentReachTargetInSeconds = function () {
    return __dep_exact_f855840627e6e145.int(this.getTimeUntiMovmentReachTargetInMilliSeconds() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  BasicMapmovementVO.prototype.getPassedTimeInSeconds = function () {
    return this.getTotalTimeInSeconds() - this.getTimeUnitMovmentReachTargetInSeconds();
  };
  BasicMapmovementVO.prototype.getPassedTimeInMiliSeconds = function () {
    return this.getTotalTimeInMiliSeconds() - this.getTimeUntiMovmentReachTargetInMilliSeconds();
  };
  BasicMapmovementVO.prototype.getTotalTimeInSeconds = function () {
    return Math.max(1, this._totalTime);
  };
  BasicMapmovementVO.prototype.getTotalTimeInMiliSeconds = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(1, this._totalTimeMs));
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "waitProgress", {
    get: function () {
      var __s56local0 = this.getWaitedTimeInSeconds() / this._totalWaitDuration;
      if (__s56local0 > 1) {
        return 1;
      } else {
        return __s56local0;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.prototype.getTimeUntiWaitOverInMilliSeconds = function () {
    return Math.max(0, this._endWaitTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer());
  };
  BasicMapmovementVO.prototype.getTimeUntilWaitOverInSeconds = function () {
    return __dep_exact_f855840627e6e145.int(this.getTimeUntiWaitOverInMilliSeconds() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  BasicMapmovementVO.prototype.getWaitedTimeInSeconds = function () {
    return this._totalWaitDuration - this.getTimeUntilWaitOverInSeconds();
  };
  BasicMapmovementVO.prototype.getTotalWaitTimeInSeconds = function () {
    return this._totalWaitDuration;
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "distance", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.MathBase.round(__dep_export_MapHelper.MapHelper.getDistanceByMapobjects(this.sourceArea, this.targetArea), 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "targetAreaPos", {
    get: function () {
      return this._targetArea.absAreaPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "sourceAreaPos", {
    get: function () {
      return this._sourceArea.absAreaPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "sourceOwnerID", {
    get: function () {
      return this._sourceOwnerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "targetOwnerID", {
    get: function () {
      return this._targetOwnerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "movementOwnerID", {
    get: function () {
      return this._movementOwnerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "sourceOwnerInfo", {
    get: function () {
      return this._sourceOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "targetOwnerInfo", {
    get: function () {
      return this._targetOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "movementOwnerInfo", {
    get: function () {
      return this._movementOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "movementOwnerCrestVO", {
    get: function () {
      if (this._movementOwnerInfo) {
        if (this.kingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
          if (this._movementOwnerInfo.factionID == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION) {
            return __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO;
          } else {
            return __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
          }
        } else {
          return this._movementOwnerInfo.crest;
        }
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "needGeneral", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return !this.isReturnHome || this.advisorType > 0 && !this.advisorIsLastAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "canBeSendHome", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isMyMovement", {
    get: function () {
      return this._movementOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isAttackingMovement", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isAllyAttackingMovement", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "sourceArea", {
    get: function () {
      return this._sourceArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "targetArea", {
    get: function () {
      return this._targetArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "horseBoosterWod", {
    get: function () {
      return this._horseBoosterWod;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isNPCMovement", {
    get: function () {
      return this._isNPCMovement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isReturnHome", {
    get: function () {
      return this._direction == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "lordVO", {
    get: function () {
      return this._lordVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "showAsAllianceAttackWarning", {
    get: function () {
      return !!this._movementOwnerInfo && !this._movementOwnerInfo.isDungeonOwner;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isStationed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "isSourceAreaStillMine", {
    get: function () {
      if (!this.sourceArea.isOwnMapobject) {
        return false;
      }
      var __s126local0 = __dep_export_CastleModel.CastleModel.userData.getOwnMapObjects(this.sourceArea.areaType, this.sourceArea.kingdomID);
      if (__s126local0 != null) {
        for (var __s126local1 = 0, __s126local2 = __s126local0; __s126local1 < __s126local2.length; __s126local1++) {
          var __s126local3 = __s126local2[__s126local1];
          if (__s126local3 !== undefined && __s126local3.absAreaPos.equals(this.sourceArea.absAreaPos)) {
            return true;
          }
        }
      }
      return this.sourceArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.prototype.isSubscriptionBuffed = function () {
    return false;
  };
  Object.defineProperty(BasicMapmovementVO.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "advisorMovementCount", {
    get: function () {
      return this._advisorMovementCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "advisorMovementNumber", {
    get: function () {
      return this._advisorMovementNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovementVO.prototype, "advisorIsLastAttack", {
    get: function () {
      return this._advisorIsLastAttack;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovementVO.TRAVELSTATE_MOVING_TO_TARGET = 0;
  BasicMapmovementVO.TRAVELSTATE_RETURN_HOME = 1;
  return BasicMapmovementVO;
}(__dep_export_AVisualVO.AVisualVO);
exports.BasicMapmovementVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO");
