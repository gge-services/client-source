Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ABasicBuildingVO = require("gge-module:export_ABasicBuildingVO");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrebuiltCastleBuildingVO = require("gge-module:export_PrebuiltCastleBuildingVO");
var __s0local0 = function (__s1param0) {
  function PrebuiltCastleData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._nodesBySpaceId = new Map();
    __s3local0._castleTransportationBuildings = [];
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrebuiltCastleData, __s1param0);
  PrebuiltCastleData.prototype.parseXML = function (__s5param0) {
    this._nodesByCastleId = this.parsePreBuiltCastles(__s5param0.prebuiltcastles);
    var __s5local0 = PrebuiltCastleData.parseBuildingPositions(__s5param0.buildingPositions);
    PrebuiltCastleData.addBuildingsToPrebuiltCastles(this._nodesByCastleId, __s5local0);
  };
  PrebuiltCastleData.prototype.parsePreBuiltCastles = function (__s7param0) {
    var __s7local0 = new Map();
    if (__s7param0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7param0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = new __dep_export_PrebuiltCastleItemVO.PrebuiltCastleItemVO();
          __s7local4.parseXML(__s7local3);
          for (var __s7local5 = 0, __s7local6 = __s7local4.spaceIds; __s7local5 < __s7local6.length; __s7local5++) {
            var __s7local7 = __s7local6[__s7local5];
            if (__s7local7 !== undefined) {
              if (!this._nodesBySpaceId.get(__s7local7)) {
                this._nodesBySpaceId.set(__s7local7, []);
              }
              this._nodesBySpaceId.get(__s7local7).push(__s7local4);
            }
          }
          __s7local0.set(__s7local4.id, __s7local4);
        }
      }
    }
    return __s7local0;
  };
  PrebuiltCastleData.parseBuildingPositions = function (__s17param0) {
    var __s17local0 = new Map();
    if (__s17param0 != null) {
      for (var __s17local1 = 0, __s17local2 = __s17param0; __s17local1 < __s17local2.length; __s17local1++) {
        var __s17local3 = __s17local2[__s17local1];
        if (__s17local3 !== undefined) {
          var __s17local4 = parseInt(__s17local3.buildingWodID || "");
          var __s17local5 = parseInt(__s17local3.preBuiltCastleID || "");
          if (__s17local4 != __dep_export_ClientConstCastle.ClientConstCastle.START_GROUND_WOD_ID && __s17local4 != __dep_export_ClientConstCastle.ClientConstCastle.EXTENSION_GROUND_WOD_ID) {
            if (!__s17local0.get(__s17local5)) {
              __s17local0.set(__s17local5, new Map());
            }
            if (__s17local0.get(__s17local5).get(__s17local4)) {
              __s17local0.get(__s17local5).set(__s17local4, __s17local0.get(__s17local5).get(__s17local4) + 1);
            } else {
              __s17local0.get(__s17local5).set(__s17local4, 1);
            }
          }
        }
      }
    }
    return __s17local0;
  };
  PrebuiltCastleData.addBuildingsToPrebuiltCastles = function (__s27param0, __s27param1) {
    if (__s27param1 != null) {
      for (var __s27local0 = 0, __s27local1 = Array.from(__s27param1.keys()); __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          var __s27local3 = __s27param1.get(__s27local2);
          if (__s27param0.get(__s27local2)) {
            __s27param0.get(__s27local2).setBuildings(PrebuiltCastleData.createBuildingsVector(__s27local3));
          }
        }
      }
    }
  };
  PrebuiltCastleData.createBuildingsVector = function (__s34param0) {
    var __s34local0 = [];
    var __s34local1 = false;
    var __s34local2 = false;
    if (__s34param0 != null) {
      for (var __s34local3 = 0, __s34local4 = Array.from(__s34param0.keys()); __s34local3 < __s34local4.length; __s34local3++) {
        var __s34local5 = __s34local4[__s34local3];
        if (__s34local5 !== undefined) {
          var __s34local6 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_exact_f855840627e6e145.int(__s34local5));
          __s34local1 = __s34local1 || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s34local6, "BasicGateVO");
          if (__s34local6.wallBonus > 0) {
            __s34local2 = true;
          }
          __s34local0.push(new __dep_export_PrebuiltCastleBuildingVO.PrebuiltCastleBuildingVO(__s34local6, __s34param0.get(__s34local5)));
        }
      }
    }
    if (!__s34local1) {
      __s34local0.push(new __dep_export_PrebuiltCastleBuildingVO.PrebuiltCastleBuildingVO(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(PrebuiltCastleData.BASE_GATE_WOD_ID), 1));
    }
    if (!__s34local2) {
      __s34local0.push(new __dep_export_PrebuiltCastleBuildingVO.PrebuiltCastleBuildingVO(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(PrebuiltCastleData.BASE_WALL_WOD_ID), 1));
    }
    __s34local0.sort(PrebuiltCastleData.sortOrderCastleBuildings);
    return __s34local0;
  };
  PrebuiltCastleData.sortOrderCastleBuildings = function (__s43param0, __s43param1) {
    return __s43param1.buildingVO.getBuildDuration() - __s43param0.buildingVO.getBuildDuration();
  };
  PrebuiltCastleData.prototype.getCastles = function (__s45param0) {
    return this._nodesBySpaceId.get(__s45param0);
  };
  PrebuiltCastleData.prototype.getCastleByID = function (__s47param0) {
    return this._nodesByCastleId.get(__s47param0);
  };
  Object.defineProperty(PrebuiltCastleData.prototype, "castleTransportationBuildings", {
    get: function () {
      return this._castleTransportationBuildings;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleData.prototype.parseCastleTransportationBuildings = function (__s51param0) {
    this._castleTransportationBuildings = [];
    var __s51local0;
    var __s51local1;
    var __s51local2;
    for (var __s51local3 = __s51param0.BL, __s51local4 = 0; __s51local4 < __s51local3.length; __s51local4++) {
      __s51local0 = __s51local3[__s51local4][0];
      __s51local1 = __s51local3[__s51local4][1];
      if ((__s51local2 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s51local0)) instanceof __dep_export_ABasicBuildingVO.ABasicBuildingVO) {
        var __s51local5 = new __dep_export_PrebuiltCastleBuildingVO.PrebuiltCastleBuildingVO(__s51local2, __s51local1);
        this._castleTransportationBuildings.push(__s51local5);
      }
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastlePrebuiltCastleDataEvent.CastlePrebuiltCastleDataEvent(__dep_export_CastlePrebuiltCastleDataEvent.CastlePrebuiltCastleDataEvent.MAIN_CASTLE_BUILDINGS_UPDATED));
  };
  PrebuiltCastleData.BASE_GATE_WOD_ID = 450;
  PrebuiltCastleData.BASE_WALL_WOD_ID = 501;
  return PrebuiltCastleData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.PrebuiltCastleData = __s0local0;
var __dep_export_PrebuiltCastleItemVO = require("gge-module:export_PrebuiltCastleItemVO");
var __dep_export_CastlePrebuiltCastleDataEvent = require("gge-module:export_CastlePrebuiltCastleDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
