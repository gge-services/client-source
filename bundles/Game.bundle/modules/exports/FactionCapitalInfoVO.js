Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function FactionCapitalInfoVO() {
    var __s3local0 = this;
    __s3local0._specialCampID = 0;
    __s3local0._laneID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionCapitalInfoVO, __s1param0);
  FactionCapitalInfoVO.prototype.parseXML = function (__s5param0) {
    var __s5local0 = parseInt(__s5param0.CampPosX || "");
    var __s5local1 = parseInt(__s5param0.CampPosY || "");
    this._sectorPosition = [__s5local0, __s5local1];
    this._specialCampID = parseInt(__s5param0.specialcampID || "");
    this._laneID = parseInt(__s5param0.laneID || "");
    this._unlockIDs = (__s5param0.unlockIDs || "").toString().split(",");
    for (var __s5local2 = 0; __s5local2 < this._unlockIDs.length; __s5local2++) {
      this._unlockIDs[__s5local2] = parseInt(this._unlockIDs[__s5local2]);
    }
    return this;
  };
  Object.defineProperty(FactionCapitalInfoVO.prototype, "sectorPosition", {
    get: function () {
      return this._sectorPosition;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalInfoVO.prototype, "specialCampID", {
    get: function () {
      return this._specialCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalInfoVO.prototype, "laneID", {
    get: function () {
      return this._laneID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalInfoVO.prototype, "towerLanes", {
    get: function () {
      if (this.laneID == FactionCapitalInfoVO.RED_CAPITAL) {
        return [FactionCapitalInfoVO.RED_TOP, FactionCapitalInfoVO.RED_MIDDLE, FactionCapitalInfoVO.RED_BOTTOM];
      } else if (this.laneID == FactionCapitalInfoVO.BLUE_CAPITAL) {
        return [FactionCapitalInfoVO.BLUE_TOP, FactionCapitalInfoVO.BLUE_MIDDLE, FactionCapitalInfoVO.BLUE_BOTTOM];
      } else {
        return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalInfoVO.prototype.belongsToLane = function (__s20param0) {
    if (FactionCapitalInfoVO.RED_LANE.indexOf(__s20param0) > -1) {
      return this._laneID == FactionCapitalInfoVO.RED_CAPITAL;
    } else {
      return FactionCapitalInfoVO.BLUE_LANE.indexOf(__s20param0) > -1 && this._laneID == FactionCapitalInfoVO.BLUE_CAPITAL;
    }
  };
  Object.defineProperty(FactionCapitalInfoVO.prototype, "unlockIDs", {
    get: function () {
      return this._unlockIDs;
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalInfoVO.__initialize_static_members = function () {
    FactionCapitalInfoVO.RED_TOP = 1;
    FactionCapitalInfoVO.RED_MIDDLE = 2;
    FactionCapitalInfoVO.RED_BOTTOM = 3;
    FactionCapitalInfoVO.RED_CAPITAL = 4;
    FactionCapitalInfoVO.BLUE_TOP = 5;
    FactionCapitalInfoVO.BLUE_MIDDLE = 6;
    FactionCapitalInfoVO.BLUE_BOTTOM = 7;
    FactionCapitalInfoVO.BLUE_CAPITAL = 8;
    FactionCapitalInfoVO.RED_LANE = [FactionCapitalInfoVO.RED_TOP, FactionCapitalInfoVO.RED_MIDDLE, FactionCapitalInfoVO.RED_BOTTOM, FactionCapitalInfoVO.RED_CAPITAL];
    FactionCapitalInfoVO.BLUE_LANE = [FactionCapitalInfoVO.BLUE_TOP, FactionCapitalInfoVO.BLUE_MIDDLE, FactionCapitalInfoVO.BLUE_BOTTOM, FactionCapitalInfoVO.BLUE_CAPITAL];
  };
  return FactionCapitalInfoVO;
}(require("gge-module:export_MinWorldMapCastleInfoVO").MinWorldMapCastleInfoVO);
exports.FactionCapitalInfoVO = __s0local0;
__s0local0.__initialize_static_members();
