Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoDataObjectsProvider(__s3param0) {
    this._objects = __s3param0;
  }
  IsoDataObjectsProvider.prototype.getObjectsByListType = function (__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = [];
      var __s5local1 = this.objects.getGroupByType(__s5param0);
      if (__s5local1) {
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local1, "AIsoDataObjectGroupSimpleList")) {
          __s5local0 = __s5local1.list;
        } else {
          __s5local1.fillInCompleteList(__s5local0);
        }
        return __s5local0;
      } else {
        return __s5local0;
      }
    }
    return this.objects.getCompleteObjectsList();
  };
  IsoDataObjectsProvider.prototype.getObjectsByListTypes = function (__s12param0 = null) {
    if (__s12param0) {
      var __s12local0 = [];
      if (__s12param0 != null) {
        for (var __s12local1 = 0, __s12local2 = __s12param0; __s12local1 < __s12local2.length; __s12local1++) {
          var __s12local3 = __s12local2[__s12local1];
          if (__s12local3 !== undefined) {
            var __s12local4 = this.objects.getGroupByType(__s12local3);
            if (!__s12local4) {
              return __s12local0;
            }
            __s12local4.fillInCompleteList(__s12local0);
          }
        }
      }
      return __s12local0;
    }
    return this.objects.getCompleteObjectsList();
  };
  IsoDataObjectsProvider.prototype.getObjectById = function (__s20param0) {
    for (var __s20local0 = 0, __s20local1 = this.objects.getCompleteObjectsList(); __s20local0 < __s20local1.length; __s20local0++) {
      var __s20local2 = __s20local1[__s20local0];
      if (__s20local2.objectId == __s20param0) {
        return __s20local2;
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.getObjectAmountByType = function (__s25param0, __s25param1 = null) {
    var __s25local0 = 0;
    for (var __s25local1 = 0, __s25local2 = this.getObjectsByListType(__s25param1); __s25local1 < __s25local2.length; __s25local1++) {
      if (__s25local2[__s25local1].objectType == __s25param0) {
        __s25local0++;
      }
    }
    return __s25local0;
  };
  IsoDataObjectsProvider.prototype.getObjectAmountByWodID = function (__s30param0) {
    var __s30local0 = 0;
    this._objects.getCompleteObjectsList().forEach(function (__s32param0) {
      if (__s32param0.wodId == __s30param0) {
        __s30local0++;
      }
    });
    return __s30local0;
  };
  IsoDataObjectsProvider.prototype.getObjectByType = function (__s35param0, __s35param1 = -1, __s35param2 = null) {
    for (var __s35local0 = 0, __s35local1 = this.getObjectsByListType(__s35param2); __s35local0 < __s35local1.length; __s35local0++) {
      var __s35local2 = __s35local1[__s35local0];
      if (__s35local2 && __s35local2.objectType == __s35param0) {
        if (!(__s35param1 > 0)) {
          return __s35local2;
        }
        var __s35local3 = __dep_exact_81dacdf05bd32292.castAs(__s35local2, "AShopVO");
        if (__s35local3 && __s35local3.level == __s35param1) {
          return __s35local2;
        }
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.getObjectsByType = function (__s42param0, __s42param1 = -1, __s42param2 = null) {
    var __s42local0 = [];
    for (var __s42local1 = 0, __s42local2 = this.getObjectsByListType(__s42param2); __s42local1 < __s42local2.length; __s42local1++) {
      var __s42local3 = __s42local2[__s42local1];
      if (__s42local3 && __s42local3.objectType == __s42param0) {
        if (__s42param1 > 0) {
          var __s42local4 = __dep_exact_81dacdf05bd32292.castAs(__s42local3, "AShopVO");
          if (__s42local4 && __s42local4.level == __s42param1) {
            __s42local0.push(__s42local3);
          }
        } else {
          __s42local0.push(__s42local3);
        }
      }
    }
    return __s42local0;
  };
  IsoDataObjectsProvider.prototype.getFunctionalBuildingByType = function (__s50param0) {
    for (var __s50local0 = 0, __s50local1 = this.getObjectsByType(__s50param0); __s50local0 < __s50local1.length; __s50local0++) {
      var __s50local2 = __s50local1[__s50local0];
      if (__s50local2 && __s50local2.buildingState.isFunctionally) {
        return __s50local2;
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.hasFunctionalBuildingByType = function (__s55param0) {
    return this.getFunctionalBuildingByType(__s55param0) != null;
  };
  IsoDataObjectsProvider.prototype.getObjectByClass = function (__s57param0, __s57param1 = null) {
    for (var __s57local0 = 0, __s57local1 = this.getObjectsByListType(__s57param1); __s57local0 < __s57local1.length; __s57local0++) {
      var __s57local2 = __s57local1[__s57local0];
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s57local2, __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s57param0))) {
        return __s57local2;
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.getObjectByClasses = function (__s62param0, __s62param1 = null) {
    for (var __s62local0 = 0, __s62local1 = this.getObjectsByListType(__s62param1); __s62local0 < __s62local1.length; __s62local0++) {
      var __s62local2 = __s62local1[__s62local0];
      for (var __s62local3 = 0; __s62local3 < __s62param0.length; __s62local3++) {
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s62local2, "classList[j]")) {
          return __s62local2;
        }
      }
    }
    return null;
  };
  IsoDataObjectsProvider.prototype.getObjectsByClass = function (__s69param0, __s69param1 = null) {
    var __s69local0 = [];
    for (var __s69local1 = 0, __s69local2 = this.getObjectsByListType(__s69param1); __s69local1 < __s69local2.length; __s69local1++) {
      var __s69local3 = __s69local2[__s69local1];
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s69local3, __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s69param0))) {
        __s69local0.push(__s69local3);
      }
    }
    return __s69local0;
  };
  IsoDataObjectsProvider.prototype.getObjectsByClasses = function (__s74param0, __s74param1 = null) {
    if (__s74param0.length <= 0) {
      return [];
    }
    var __s74local0 = [];
    for (var __s74local1 = 0, __s74local2 = this.getObjectsByListType(__s74param1); __s74local1 < __s74local2.length; __s74local1++) {
      var __s74local3 = __s74local2[__s74local1];
      if (__dep_export_ClientConstUtils.ClientConstUtils.isObjectClassOf(__s74local3, __s74param0)) {
        __s74local0.push(__s74local3);
      }
    }
    return __s74local0;
  };
  IsoDataObjectsProvider.prototype.hasMaxAmountOfObjectsByType = function (__s80param0) {
    if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s80param0, "ABasicBuildingVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s80param0, "CastlewallDefenceVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s80param0, "BasicMoatVO")) {
      return false;
    }
    var __s80local0 = __dep_exact_f855840627e6e145.int(__s80param0.maximumCount);
    return (__s80param0 instanceof __dep_export_DecoBuildingVO.DecoBuildingVO ? __dep_exact_f855840627e6e145.int(this.getObjectAmountByWodID(__s80param0.wodId)) : __dep_exact_f855840627e6e145.int(this.getObjectAmountByType(__s80param0.objectType))) >= __s80local0;
  };
  IsoDataObjectsProvider.prototype.hasUpgradeableBuilding = function () {
    for (var __s83local0 = 0, __s83local1 = this.getObjectsByListType(); __s83local0 < __s83local1.length; __s83local0++) {
      var __s83local2 = __s83local1[__s83local0];
      if (__s83local2 && __s83local2.upgradeAvailable) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(IsoDataObjectsProvider.prototype, "objects", {
    get: function () {
      return this._objects;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectsProvider;
}();
exports.IsoDataObjectsProvider = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_DecoBuildingVO = require("gge-module:export_DecoBuildingVO");
