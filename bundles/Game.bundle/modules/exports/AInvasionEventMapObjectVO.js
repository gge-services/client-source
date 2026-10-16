Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function AInvasionEventMapObjectVO() {
    var __s3local0 = this;
    __s3local0._victoryCount = -1;
    __s3local0._dungeonLevel = 0;
    __s3local0._serverDataRecieved = false;
    __s3local0._baseMoatBonus = 0;
    __s3local0._baseGateBonus = 0;
    __s3local0._baseWallBonus = 0;
    __s3local0.lastKnownBaseLevel = 0;
    __s3local0._eventAutoScalingCampID = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "Empty";
    __s3local0.type = "Grid";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AInvasionEventMapObjectVO, __s1param0);
  AInvasionEventMapObjectVO.prototype.parseAreaInfo = function (__s5param0) {
    this.areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_EMPTY;
    this.absAreaPosX = __s5param0[1];
    this.absAreaPosY = __s5param0[2];
  };
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  AInvasionEventMapObjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "attackCooldownEndTimestamp", {
    set: function (__s15param0) {
      this._attackCooldownEndTimestamp = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "spyInfoReceivingTime", {
    set: function (__s17param0) {
      this._spyInfoReceivingTime = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "eventType", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  AInvasionEventMapObjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return false;
  };
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "victoryCount", {
    get: function () {
      return this._victoryCount;
    },
    set: function (__s25param0) {
      this._victoryCount = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "actualVisClassName", {
    get: function () {
      return this.getVisualClassName() + "_" + __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO.kingdomName;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "actualVisClassName").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  return AInvasionEventMapObjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.AInvasionEventMapObjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
