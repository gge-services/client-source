Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function FactionTowerInfoVO() {
    var __s3local0 = this;
    __s3local0._specialCampID = 0;
    __s3local0._villageCount = 0;
    __s3local0._laneID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionTowerInfoVO, __s1param0);
  FactionTowerInfoVO.prototype.parseXML = function (__s5param0) {
    var __s5local0 = parseInt(__s5param0.CampPosX || "");
    var __s5local1 = parseInt(__s5param0.CampPosY || "");
    this._sectorPosition = [__s5local0, __s5local1];
    this._specialCampID = parseInt(__s5param0.specialcampID || "");
    this._villageCount = parseInt(__s5param0.villageCount || "");
    this._laneID = parseInt(__s5param0.laneID || "");
    return this;
  };
  Object.defineProperty(FactionTowerInfoVO.prototype, "sectorPosition", {
    get: function () {
      return this._sectorPosition;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerInfoVO.prototype, "specialCampID", {
    get: function () {
      return this._specialCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerInfoVO.prototype, "villageCount", {
    get: function () {
      return this._villageCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerInfoVO.prototype, "laneID", {
    get: function () {
      return this._laneID;
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerInfoVO.prototype.initVillagePositions = function () {
    this._villagePositions = [];
  };
  Object.defineProperty(FactionTowerInfoVO.prototype, "villagePositions", {
    get: function () {
      return this._villagePositions;
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerInfoVO.prototype.addVillage = function (__s19param0) {
    this._villagePositions.push(__s19param0);
  };
  return FactionTowerInfoVO;
}(require("gge-module:export_MinWorldMapCastleInfoVO").MinWorldMapCastleInfoVO);
exports.FactionTowerInfoVO = __s0local0;
