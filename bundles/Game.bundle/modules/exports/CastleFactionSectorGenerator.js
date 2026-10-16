Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FactionVillageInfoVO = require("gge-module:export_FactionVillageInfoVO");
var __dep_export_ABasicSectorGenerator = require("gge-module:export_ABasicSectorGenerator");
var __dep_export_AreaTypeSectorMap = require("gge-module:export_AreaTypeSectorMap");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleFactionSectorGenerator() {
    var __s3local0 = this;
    __s3local0.mapSeed = 0;
    __s3local0.init = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionSectorGenerator, __s1param0);
  CastleFactionSectorGenerator.prototype.generateDecoObjects = function (__s5param0, __s5param1, __s5param2) {
    if (!this.init) {
      this.fillMap();
    }
    var __s5local0 = new __dep_export_AreaTypeSectorMap.AreaTypeSectorMap(this.getSectorMapByXY(__s5param0, __s5param1));
    this.rand = new __dep_exact_9e901e8e2483a22f.SimpleRandom(__s5param0 * 41 + __s5param1 * 977);
    this.setDecoElements(__s5local0);
    return __s5local0.getAsMap();
  };
  CastleFactionSectorGenerator.prototype.fillMap = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION)) {
      this.mapSeed = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION).mapSeed);
    }
    this._yxWorldMapObjects = [];
    this.randomizeSectors();
    this.init = true;
  };
  CastleFactionSectorGenerator.prototype.getSectorMapByXY = function (__s11param0, __s11param1) {
    var __s11local0 = [];
    var __s11local1 = 0;
    var __s11local2 = 0;
    var __s11local3 = 0;
    var __s11local4 = 0;
    for (__s11local2 = 0; __s11local2 < __dep_exact_26a421b704832cff_2.WorldConst.SECTOR_HEIGHT; ++__s11local2) {
      __s11local0[__s11local2] = [];
      __s11local4 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldConst.SECTOR_HEIGHT * __s11param1 + __s11local2);
      this._yxWorldMapObjects[__s11local4] ||= [];
      __s11local1 = 0;
      for (; __s11local1 < __dep_exact_26a421b704832cff_2.WorldConst.SECTOR_WIDTH; ++__s11local1) {
        __s11local3 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldConst.SECTOR_WIDTH * __s11param0 + __s11local1);
        __s11local0[__s11local2][__s11local1] = this._yxWorldMapObjects[__s11local4][__s11local3] ? this._yxWorldMapObjects[__s11local4][__s11local3] : 0;
      }
    }
    return __s11local0;
  };
  CastleFactionSectorGenerator.prototype.randomizeSectors = function () {
    var __s17local0 = 0;
    var __s17local1 = 0;
    for (__s17local0 = 0; __s17local0 < __dep_exact_26a421b704832cff_1.FactionConst.MAP_WIDTH_IN_SECTORS; __s17local0++) {
      for (__s17local1 = 0; __s17local1 < __dep_exact_26a421b704832cff_1.FactionConst.MAP_HEIGHT_IN_SECTORS; __s17local1++) {
        this.randomizeSector(__s17local0, __s17local1);
      }
    }
  };
  CastleFactionSectorGenerator.prototype.randomizeSector = function (__s23param0, __s23param1) {
    var __s23local0 = new __dep_exact_9e901e8e2483a22f.SimpleRandom(__dep_exact_26a421b704832cff_1.FactionConst.getSectorSeed(this.mapSeed, __s23param0, __s23param1));
    var __s23local1 = [];
    var __s23local2 = 0;
    var __s23local3 = 0;
    for (__s23local2 = 0; __s23local2 < __dep_exact_26a421b704832cff_1.FactionConst.SECTOR_WIDTH_IN_CAMPS; __s23local2++) {
      for (__s23local3 = 0; __s23local3 < __dep_exact_26a421b704832cff_1.FactionConst.SECTOR_HEIGHT_IN_CAMPS; __s23local3++) {
        __s23local1[__s23local2] ||= [];
        __s23local1[__s23local2][__s23local3] = false;
      }
    }
    this.addCapitals(__s23local0, __s23local1, __s23param0, __s23param1);
    this.addTowers(__s23local0, __s23local1, __s23param0, __s23param1);
    this.fillRestWithCamps(__s23local0, __s23local1, __s23param0, __s23param1);
  };
  CastleFactionSectorGenerator.prototype.addCapitals = function (__s29param0, __s29param1, __s29param2, __s29param3) {
    if (this.capitalInfos != null) {
      for (var __s29local0 = 0, __s29local1 = Array.from(this.capitalInfos.values()); __s29local0 < __s29local1.length; __s29local0++) {
        var __s29local2 = __s29local1[__s29local0];
        if (__s29local2 !== undefined && __dep_exact_26a421b704832cff_1.FactionConst.inSector(__s29param2, __s29param3, __s29local2.sectorPosition)) {
          __s29local2.absAreaPos = this.randomizeSpot(__s29param0, __s29param1, __s29local2.sectorPosition[0], __s29local2.sectorPosition[1], __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAPITAL);
        }
      }
    }
  };
  CastleFactionSectorGenerator.prototype.markSpotUsed = function (__s35param0, __s35param1, __s35param2) {
    __s35param2[__s35param0 % __dep_exact_26a421b704832cff_1.FactionConst.SECTOR_WIDTH_IN_CAMPS][__s35param1 % __dep_exact_26a421b704832cff_1.FactionConst.SECTOR_HEIGHT_IN_CAMPS] = true;
  };
  CastleFactionSectorGenerator.prototype.addTowers = function (__s37param0, __s37param1, __s37param2, __s37param3) {
    if (this.towerInfos != null) {
      for (var __s37local0 = 0, __s37local1 = Array.from(this.towerInfos.values()); __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined && __dep_exact_26a421b704832cff_1.FactionConst.inSector(__s37param2, __s37param3, __s37local2.sectorPosition)) {
          this.addTower(__s37param0, __s37param1, __s37local2);
        }
      }
    }
  };
  CastleFactionSectorGenerator.prototype.addTower = function (__s43param0, __s43param1, __s43param2) {
    var __s43local0 = [[-1, -1], [1, -1], [-1, 0], [1, 1], [-1, 1], [0, -1], [0, 1], [1, 0]];
    __s43param2.absAreaPos = this.randomizeSpot(__s43param0, __s43param1, __s43param2.sectorPosition[0], __s43param2.sectorPosition[1], __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_TOWER);
    __s43param2.initVillagePositions();
    var __s43local1 = __dep_exact_f855840627e6e145.int(__s43param0.nextInt(__s43local0.length));
    for (var __s43local2 = 0; __s43local2 < __s43local0.length && __s43local2 < __s43param2.villageCount; __s43local2++) {
      var __s43local3 = __s43local0[(__s43local1 + __s43local2) % __s43local0.length];
      var __s43local4 = __dep_exact_f855840627e6e145.int(__s43param2.sectorPosition[0] + __s43local3[0]);
      var __s43local5 = __dep_exact_f855840627e6e145.int(__s43param2.sectorPosition[1] + __s43local3[1]);
      var __s43local6 = this.randomizeSpot(__s43param0, __s43param1, __s43local4, __s43local5, __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_VILLAGE);
      if (__s43local6) {
        this.villageInfos.set(__s43local6.toString(), new __dep_export_FactionVillageInfoVO.FactionVillageInfoVO(__s43param2.specialCampID, __s43local6));
        __s43param2.addVillage(__s43local6);
      } else {
        __dep_exact_9e901e8e2483a22f_1.error("no free village spot for faction tower with specialCampID " + __s43param2.specialCampID + " (laneID " + __s43param2.laneID + ", tower camp position " + __s43param2.sectorPosition[0] + "/" + __s43param2.sectorPosition[1] + ") at village camp position " + __s43local4 + "/" + __s43local5);
      }
    }
  };
  CastleFactionSectorGenerator.prototype.fillRestWithCamps = function (__s49param0, __s49param1, __s49param2, __s49param3) {
    var __s49local0 = 0;
    var __s49local1 = 0;
    var __s49local2 = 0;
    var __s49local3 = 0;
    for (__s49local0 = 0; __s49local0 < __dep_exact_26a421b704832cff_1.FactionConst.SECTOR_WIDTH_IN_CAMPS; __s49local0++) {
      for (__s49local1 = 0; __s49local1 < __dep_exact_26a421b704832cff_1.FactionConst.SECTOR_HEIGHT_IN_CAMPS; __s49local1++) {
        if (!__s49param1[__s49local0][__s49local1]) {
          __s49local2 = __dep_exact_f855840627e6e145.int(__s49param2 * __dep_exact_26a421b704832cff_1.FactionConst.SECTOR_WIDTH_IN_CAMPS + __s49local0);
          __s49local3 = __dep_exact_f855840627e6e145.int(__s49param3 * __dep_exact_26a421b704832cff_1.FactionConst.SECTOR_HEIGHT_IN_CAMPS + __s49local1);
          this.randomizeSpot(__s49param0, __s49param1, __s49local2, __s49local3, __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAMP);
        }
      }
    }
  };
  CastleFactionSectorGenerator.prototype.randomizeSpot = function (__s56param0, __s56param1, __s56param2, __s56param3, __s56param4) {
    var __s56local0;
    var __s56local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.FactionConst.upperLeftWorldXFromAbsoluteCampX(__s56param2));
    var __s56local2 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.FactionConst.upperLeftWorldYFromAbsoluteCampY(__s56param3));
    for (var __s56local3 = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1]], __s56local4 = __dep_exact_f855840627e6e145.int(__s56param0.nextInt(__s56local3.length)), __s56local5 = 0, __s56local6 = 0, __s56local7 = 0; __s56local7 < __s56local3.length; __s56local7++) {
      __s56local0 = __s56local3[(__s56local4 + __s56local7) % __s56local3.length];
      __s56local5 = __dep_exact_f855840627e6e145.int(__s56local1 + __s56local0[0]);
      __s56local6 = __dep_exact_f855840627e6e145.int(__s56local2 + __s56local0[1]);
      if (this.isInBounds(__s56local5, __s56local6) && !this.bumpsIntoOtherObject(__s56local5, __s56local6)) {
        this.markSpotUsed(__s56param2, __s56param3, __s56param1);
        this._yxWorldMapObjects[__s56local6] ||= [];
        this._yxWorldMapObjects[__s56local6][__s56local5] = __s56param4;
        return new __s0local0(__s56local5, __s56local6);
      }
    }
    return null;
  };
  CastleFactionSectorGenerator.prototype.bumpsIntoOtherObject = function (__s61param0, __s61param1) {
    var __s61local0 = 0;
    var __s61local1 = 0;
    for (__s61local0 = __s61param0 - 1; __s61local0 <= __s61param0 + 1; __s61local0++) {
      for (__s61local1 = __s61param1 - 1; __s61local1 <= __s61param1 + 1; __s61local1++) {
        if (this.isInBounds(__s61local0, __s61local1) && this.getAreaTypeAt(__s61local0, __s61local1) != 0) {
          return true;
        }
      }
    }
    return false;
  };
  CastleFactionSectorGenerator.prototype.isInBounds = function (__s68param0, __s68param1) {
    return __s68param0 >= 0 && __s68param0 < __dep_exact_26a421b704832cff_1.FactionConst.getMapWidth() && __s68param1 >= 0 && __s68param1 < __dep_exact_26a421b704832cff_1.FactionConst.getMapHeight();
  };
  CastleFactionSectorGenerator.prototype.getAreaTypeAt = function (__s70param0, __s70param1) {
    if (this.isInBounds(__s70param0, __s70param1) && this._yxWorldMapObjects[__s70param1] && this._yxWorldMapObjects[__s70param1][__s70param0]) {
      return __dep_exact_f855840627e6e145.int(this._yxWorldMapObjects[__s70param1][__s70param0]);
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "towerInfos", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION).towerInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "capitalInfos", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION).capitalInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "villageInfos", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION).villageInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    },
    set: function (__s82param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, __s82param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "decoTypeCount", {
    get: function () {
      return CastleFactionSectorGenerator.FACTION_DECO_TYPE_COUNT;
    },
    set: function (__s86param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator.prototype, "decoTypeCount").set.call(this, __s86param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionSectorGenerator.FACTION_DECO_TYPE_COUNT = [[14, 3], [13, 3], [12, 3], [9, 1], [10, 1], [11, 1], [5, 2], [7, 2], [4, 2], [8, 1], [3, 2], [2, 1], [19, 5], [18, 5], [17, 10], [16, 3], [15, 3], [6, 1], [1, 1], [0, 2], [21, 1], [22, 1], [23, 1], [20, 1]];
  return CastleFactionSectorGenerator;
}(__dep_export_ABasicSectorGenerator.ABasicSectorGenerator);
exports.CastleFactionSectorGenerator = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICastleSectorGenerator");
