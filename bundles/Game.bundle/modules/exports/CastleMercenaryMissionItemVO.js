Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function CastleMercenaryMissionItemVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.missionID = 0;
    __s3local0.duration = NaN;
    __s3local0.price = 0;
    __s3local0.quality = 0;
    __s3local0.state = 0;
    __s3local0.endTimeStamp = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMercenaryMissionItemVO, __s1param0);
  CastleMercenaryMissionItemVO.prototype.fillFromParamObject = function (__s5param0) {
    this.missionID = __s5param0.ID;
    this.rewards = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param0.R);
    this.duration = __s5param0.D;
    this.price = __s5param0.P;
    this.quality = __s5param0.Q;
    this.state = __s5param0.S;
    if (__s5param0.RD) {
      this.endTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param0.RD * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    }
  };
  Object.defineProperty(CastleMercenaryMissionItemVO.prototype, "remainingTime", {
    get: function () {
      return (this.endTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) / __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryMissionItemVO.prototype.getMissionTypeTextID = function () {
    switch (this.quality) {
      case CastleMercenaryMissionItemVO.RARITY_FREE:
        return "dialog_mission_free";
      case CastleMercenaryMissionItemVO.RARITY_COMMON:
        return "dialog_mission_common";
      case CastleMercenaryMissionItemVO.RARITY_RARE:
        return "dialog_mission_rare";
      case CastleMercenaryMissionItemVO.RARITY_EPIC:
        return "dialog_mission_epic";
      case CastleMercenaryMissionItemVO.RARITY_LEGENDARY:
        return "dialog_mission_legendary";
      default:
        return "";
    }
  };
  Object.defineProperty(CastleMercenaryMissionItemVO.prototype, "skipCost", {
    get: function () {
      return __dep_exact_26a421b704832cff.MercenaryConst.getSkipC2Cost(this.remainingTime);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItemVO.prototype, "missionProgress", {
    get: function () {
      return 1 - this.remainingTime / this.duration;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryMissionItemVO.prototype.isFreeMission = function () {
    return this.quality == CastleMercenaryMissionItemVO.RARITY_FREE;
  };
  CastleMercenaryMissionItemVO.__initialize_static_members = function () {
    CastleMercenaryMissionItemVO.RARITY_FREE = 0;
    CastleMercenaryMissionItemVO.RARITY_COMMON = 1;
    CastleMercenaryMissionItemVO.RARITY_RARE = 2;
    CastleMercenaryMissionItemVO.RARITY_EPIC = 3;
    CastleMercenaryMissionItemVO.RARITY_LEGENDARY = 4;
  };
  return CastleMercenaryMissionItemVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.CastleMercenaryMissionItemVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
__s0local0.__initialize_static_members();
