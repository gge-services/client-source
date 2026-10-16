Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_UnitBaseLocationEnum = require("gge-module:export_UnitBaseLocationEnum");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function UpgradableLandmarkMapobjectVO() {
    var __s3local0 = this;
    __s3local0._occupierPId = 0;
    __s3local0._level = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UpgradableLandmarkMapobjectVO, __s1param0);
  UpgradableLandmarkMapobjectVO.prototype.init = function () {};
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "hasReachedMaxLevel", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "dataModel", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  UpgradableLandmarkMapobjectVO.prototype.reset = function () {
    this.init();
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  UpgradableLandmarkMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && __dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED;
  };
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return this._occupierPId == __dep_export_CastleModel.CastleModel.userData.playerID;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "isOwnMapobject").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "occupierPId", {
    get: function () {
      return this._occupierPId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "isPlayerOwned", {
    get: function () {
      return this._occupierPId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  UpgradableLandmarkMapobjectVO.prototype.canBeUpgradedByMe = function () {
    return this.ownerInfo != null && this.ownerInfo.playerID === __dep_export_CastleModel.CastleModel.userData.playerID || __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  UpgradableLandmarkMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.ownerInfo != null && this.ownerInfo.playerID === __dep_export_CastleModel.CastleModel.userData.playerID;
  };
  UpgradableLandmarkMapobjectVO.prototype.canBeSupported = function () {
    return !this.isOwnMapobject && __dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !!this.ownerInfo && !this.isOwnMapobject && !this.ownerInfo.isDungeonOwner;
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnMapobject;
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "landmarkBonus", {
    get: function () {
      var __s49local0 = 0;
      if (this._levelInfo) {
        __s49local0 = this._levelInfo.landmarkBonus;
      }
      return __s49local0;
    },
    enumerable: true,
    configurable: true
  });
  UpgradableLandmarkMapobjectVO.prototype.updateProgress = function (__s52param0, __s52param1) {
    if (__s52param0 == this._objectId) {
      this._levelInfo = this.dataModel.getLevelInfoByPointsAchieved(__s52param1, this.kingdomID);
      this._level = this._levelInfo.level;
    }
  };
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "pointsRequiredForNextLevel", {
    get: function () {
      var __s55local0 = this._levelInfo.level;
      return this.dataModel.getLevelInfoByLevel(__s55local0 + 1, this.kingdomID).requiredPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UpgradableLandmarkMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return __dep_export_UnitBaseLocationEnum.UnitBaseLocationEnum.KINGDOM_CASTLE;
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  return UpgradableLandmarkMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.UpgradableLandmarkMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
