Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __s0local0 = function (__s1param0) {
  function CastleBuildingDistrictData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.createPossibleBuildingLists();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuildingDistrictData, __s1param0);
  CastleBuildingDistrictData.prototype.createPossibleBuildingLists = function () {
    this._possibleBuildingsForType = new Map();
    for (var __s5local0 = 0, __s5local1 = Array.from(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).values()); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined) {
        var __s5local3 = __dep_exact_81dacdf05bd32292_1.castAs(__s5local2, "ABasicBuildingVO");
        if (__s5local3 && (!__s5local3 || __s5local3.districtTypeID && !__s5local3.isDistrict)) {
          if (!this._possibleBuildingsForType.get(__s5local3.districtTypeID)) {
            this._possibleBuildingsForType.set(__s5local3.districtTypeID, new Map());
          }
          var __s5local4 = __s5local3.wodId.toString();
          if (__s5local3.name == "Deco") {
            __s5local4 = __s5local3.name + __s5local3.type;
          }
          if (!this._possibleBuildingsForType.get(__s5local3.districtTypeID).get(__s5local4) && __s5local3.level == 1) {
            this._possibleBuildingsForType.get(__s5local3.districtTypeID).set(__s5local4, __s5local3);
          }
        }
      }
    }
    if (this._possibleBuildingsForType != null) {
      for (var __s5local5 = 0, __s5local6 = Array.from(this._possibleBuildingsForType.keys()); __s5local5 < __s5local6.length; __s5local5++) {
        var __s5local7 = __s5local6[__s5local5];
        if (__s5local7 !== undefined) {
          var __s5local8 = [];
          for (var __s5local9 = 0, __s5local10 = Array.from(this._possibleBuildingsForType.get(__s5local7).values()); __s5local9 < __s5local10.length; __s5local9++) {
            var __s5local11 = __s5local10[__s5local9];
            if (__s5local11 !== undefined) {
              __s5local8.push(__s5local11);
            }
          }
          __s5local8.sort(CastleBuildingDistrictData.sortByName);
          this._possibleBuildingsForType.set(__s5local7, __s5local8);
        }
      }
    }
  };
  CastleBuildingDistrictData.sortByName = function (__s21param0, __s21param1) {
    var __s21local0 = __dep_exact_f855840627e6e145.int(__dep_exact_92d05af59ee2ff30.Localize.text(__s21param0.getNameString()).localeCompare(__dep_exact_92d05af59ee2ff30.Localize.text(__s21param1.getNameString())));
    if (__s21local0 != 0) {
      return __s21local0;
    } else {
      return 0;
    }
  };
  CastleBuildingDistrictData.prototype.getPossibleBuildingsForType = function (__s25param0, __s25param1, __s25param2) {
    var __s25local0 = [];
    if (this._possibleBuildingsForType.has(__s25param0)) {
      this._possibleBuildingsForType.get(__s25param0).forEach(function (__s28param0) {
        if (__s28param0.isAvailableInAreaType(__s25param2)) {
          __s25local0.push(__s28param0);
        }
      });
    }
    return __s25local0;
  };
  return CastleBuildingDistrictData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleBuildingDistrictData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
