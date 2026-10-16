Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function UnitAllocator() {}
  UnitAllocator.getIndicesOfMaxToMinSorting = function (__s5param0) {
    var __s5local0 = [0, 1, 2];
    if (__s5param0[__s5local0[0]] > __s5param0[__s5local0[1]]) {
      if (__s5param0[__s5local0[2]] > __s5param0[__s5local0[0]]) {
        __s5local0[0] = 2;
        __s5local0[1] = 0;
        __s5local0[2] = 1;
      } else if (__s5param0[__s5local0[2]] > __s5param0[__s5local0[1]]) {
        __s5local0[1] = 2;
        __s5local0[2] = 1;
      }
    } else if (__s5param0[__s5local0[1]] > __s5param0[__s5local0[2]]) {
      if (__s5param0[__s5local0[0]] > __s5param0[__s5local0[2]]) {
        __s5local0[0] = 1;
        __s5local0[1] = 0;
      } else {
        __s5local0[0] = 1;
        __s5local0[1] = 2;
        __s5local0[2] = 0;
      }
    } else {
      __s5local0[0] = 2;
      __s5local0[2] = 0;
    }
    return __s5local0;
  };
  UnitAllocator.getSideUnitCount = function (__s14param0, __s14param1) {
    var __s14local0 = [__s14param0 * 1 * __s14param1[0] / 100, __s14param0 * 1 * __s14param1[1] / 100, __s14param0 * 1 * __s14param1[2] / 100];
    var __s14local1 = [__dep_exact_f855840627e6e145.int(__s14local0[0]), __dep_exact_f855840627e6e145.int(__s14local0[1]), __dep_exact_f855840627e6e145.int(__s14local0[2])];
    var __s14local2 = [__s14local0[0] - __s14local1[0], __s14local0[1] - __s14local1[1], __s14local0[2] - __s14local1[2]];
    var __s14local3 = Math.round(__s14local2[0] + __s14local2[1] + __s14local2[2]);
    if (__s14local3 > 0) {
      var __s14local4 = UnitAllocator.getIndicesOfMaxToMinSorting(__s14local2);
      for (var __s14local5 = 0; __s14local5 < __s14local3; __s14local5++) {
        __s14local1[__dep_exact_f855840627e6e145.int(__s14local4[__s14local5])]++;
      }
    }
    return __s14local1;
  };
  UnitAllocator.calculateUnitLineup = function (__s19param0, __s19param1, __s19param2, __s19param3, __s19param4) {
    var __s19local0 = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    __s19local0.addAll(__dep_export_CastleModel.CastleModel.armyData.getSupportUnitsAtArea(__dep_export_CastleModel.CastleModel.defenceData.areaInfo).getUnits(null));
    var __s19local1 = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    __s19local1.addAll(__s19param2.getUnits(null));
    __s19local0.getUnits(null).forEach(function (__s21param0) {
      return __s19local1.deductUnit(__s21param0.wodId, __s21param0.inventoryAmount);
    });
    var __s19local2 = 0;
    var __s19local3 = 0;
    var __s19local4 = 0;
    var __s19local5 = 0;
    var __s19local6 = __dep_exact_f855840627e6e145.int(__s19param2.getSoldierCount());
    __s19param0 = Math.ceil(__s19param0 * (1 + __s19param1 / 100));
    var __s19local7;
    var __s19local8;
    var __s19local9 = __dep_exact_f855840627e6e145.int(Math.min(__s19param0, __s19local6));
    var __s19local10 = UnitAllocator.getSideUnitCount(__s19local9, __s19param3);
    var __s19local11 = __dep_exact_f855840627e6e145.int(__s19param2.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
    var __s19local12 = __dep_exact_f855840627e6e145.int(__s19param2.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
    var __s19local13 = [];
    var __s19local14 = [];
    var __s19local15 = [];
    var __s19local16 = [];
    var __s19local17 = 0;
    var __s19local18 = 0;
    for (__s19local5 = 0; __s19local5 < 3; __s19local5++) {
      __s19local15[__s19local5] = __s19local10[__s19local5] * __s19param4[__s19local5] / 100;
      __s19local16[__s19local5] = __s19local10[__s19local5] - __s19local15[__s19local5];
      __s19local17 += __s19local15[__s19local5];
      __s19local18 += __s19local16[__s19local5];
    }
    __s19local7 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s19local17));
    __s19local8 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s19local18));
    if (__s19local17 > __s19local11) {
      for (__s19local5 = 0; __s19local5 < 3; __s19local5++) {
        __s19local15[__s19local5] = __s19local7 == 0 ? 0 : __s19local11 * __s19local15[__s19local5] / __s19local17;
        __s19local16[__s19local5] = __s19local10[__s19local5] - __s19local15[__s19local5];
      }
    } else if (__s19local18 > __s19local12) {
      for (__s19local5 = 0; __s19local5 < 3; __s19local5++) {
        __s19local16[__s19local5] = __s19local8 == 0 ? 0 : __s19local12 * __s19local16[__s19local5] / __s19local18;
        __s19local15[__s19local5] = __s19local10[__s19local5] - __s19local16[__s19local5];
      }
    }
    for (__s19local5 = 0; __s19local5 < 3; __s19local5++) {
      __s19local13[__s19local5] = __dep_exact_f855840627e6e145.int(__s19local15[__s19local5]);
      __s19local14[__s19local5] = __dep_exact_f855840627e6e145.int(__s19local16[__s19local5]);
    }
    var __s19local19 = [__s19local15[0] - __s19local13[0], __s19local15[1] - __s19local13[1], __s19local15[2] - __s19local13[2]];
    var __s19local20 = [__s19local16[0] - __s19local14[0], __s19local16[1] - __s19local14[1], __s19local16[2] - __s19local14[2]];
    var __s19local21 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s19local19[0] + __s19local19[1] + __s19local19[2] + 0.5));
    var __s19local22 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s19local20[0] + __s19local20[1] + __s19local20[2] + 0.49999));
    var __s19local23 = [__s19local13[0] + __s19local14[0] == __s19local10[0], __s19local13[1] + __s19local14[1] == __s19local10[1], __s19local13[2] + __s19local14[2] == __s19local10[2]];
    var __s19local24 = UnitAllocator.getIndicesOfMaxToMinSorting(__s19local19);
    var __s19local25 = 0;
    for (__s19local4 = 0; __s19local4 < 3 && (__s19local25 = __dep_exact_f855840627e6e145.int(__s19local24[__s19local4]), !(__s19local21 <= 0)); __s19local4++) {
      if (!__s19local23[__s19local25]) {
        __s19local13[__s19local25]++;
        __s19local21--;
        __s19local23[__s19local25] = __s19local13[__s19local25] + __s19local14[__s19local25] == __s19local10[__s19local25];
      }
    }
    __s19local24 = UnitAllocator.getIndicesOfMaxToMinSorting(__s19local20);
    __s19local4 = 0;
    for (; __s19local4 < 3 && (__s19local25 = __dep_exact_f855840627e6e145.int(__s19local24[__s19local4]), !(__s19local22 <= 0)); __s19local4++) {
      if (!__s19local23[__s19local25]) {
        __s19local14[__s19local25]++;
        __s19local22--;
        __s19local23[__s19local25] = __s19local13[__s19local25] + __s19local14[__s19local25] == __s19local10[__s19local25];
      }
    }
    var __s19local26 = [];
    __s19local26[0] = [];
    __s19local26[1] = [];
    __s19local26[2] = [];
    __s19local26[3] = [];
    __s19local26[4] = [];
    var __s19local27 = [];
    var __s19local28 = __dep_export_CastleModel.CastleModel.defenceData.prioMelee;
    var __s19local29 = 0;
    var __s19local30 = 0;
    var __s19local31 = 0;
    for (__s19local4 = 0; __s19local4 < __s19local28.length; __s19local4++) {
      __s19local29 = __dep_exact_f855840627e6e145.int(__s19local28[__s19local4]);
      __s19local30 = __dep_exact_f855840627e6e145.int(__s19param2.getUnitCountByWodId(__s19local29));
      __s19local3 = __dep_exact_f855840627e6e145.int(__s19local13[0] + __s19local13[1] + __s19local13[2]);
      __s19local2 = __dep_exact_f855840627e6e145.int(Math.min(__s19local30, __s19local3));
      if (__s19local3 > 0 && __s19local2 > 0) {
        (__s19local27 = [])[0] = __dep_exact_f855840627e6e145.int(Math.round(__s19local2 * 1 * __s19local13[0] / __s19local3));
        __s19local27[2] = __dep_exact_f855840627e6e145.int(Math.round(__s19local2 * 1 * __s19local13[2] / __s19local3 - 0.0001));
        __s19local27[1] = __s19local2 - __s19local27[0] - __s19local27[2];
        this.deductUnitAmount(__s19local29, __s19local2, __s19param2, __s19local1, __s19local0);
        __s19local31 = 0;
        for (; __s19local31 < __s19local27.length; __s19local31++) {
          if (__s19local27[__s19local31] > 0) {
            var __s19local32 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s19local29, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
            __s19local32.inventoryAmount = __dep_exact_f855840627e6e145.int(__s19local27[__s19local31]);
            __s19local26[__s19local31].push(__s19local32);
          }
          __s19local13[__s19local31] -= __s19local27[__s19local31];
        }
      }
    }
    var __s19local33 = __dep_export_CastleModel.CastleModel.defenceData.prioRange;
    for (__s19local4 = 0; __s19local4 < __s19local33.length; __s19local4++) {
      __s19local29 = __dep_exact_f855840627e6e145.int(__s19local33[__s19local4]);
      __s19local30 = __dep_exact_f855840627e6e145.int(__s19param2.getUnitCountByWodId(__s19local29));
      __s19local3 = __dep_exact_f855840627e6e145.int(__s19local14[0] + __s19local14[1] + __s19local14[2]);
      __s19local2 = __dep_exact_f855840627e6e145.int(Math.min(__s19local30, __s19local3));
      if (__s19local3 > 0 && __s19local2 > 0) {
        (__s19local27 = [])[0] = __dep_exact_f855840627e6e145.int(Math.round(__s19local2 * 1 * __s19local14[0] / __s19local3));
        __s19local27[2] = __dep_exact_f855840627e6e145.int(Math.round(__s19local2 * 1 * __s19local14[2] / __s19local3 - 0.0001));
        __s19local27[1] = __s19local2 - __s19local27[0] - __s19local27[2];
        this.deductUnitAmount(__s19local29, __s19local2, __s19param2, __s19local1, __s19local0);
        __s19local31 = 0;
        for (; __s19local31 < __s19local27.length; __s19local31++) {
          var __s19local34 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s19local29, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
          __s19local34.inventoryAmount = __dep_exact_f855840627e6e145.int(__s19local27[__s19local31]);
          if (__s19local27[__s19local31] > 0) {
            __s19local26[__s19local31].push(__s19local34);
          }
          __s19local14[__s19local31] -= __s19local27[__s19local31];
        }
      }
    }
    var __s19local35 = [];
    __s19local35[0] = __dep_export_CastleModel.CastleModel.defenceData.itemsLeftWall.items;
    __s19local35[1] = __dep_export_CastleModel.CastleModel.defenceData.itemsMiddleWall.items;
    __s19local35[2] = __dep_export_CastleModel.CastleModel.defenceData.itemsRightWall.items;
    var __s19local36 = 0;
    var __s19local37 = 0;
    for (__s19local36 = 0; __s19local36 < __s19local35.length; __s19local36++) {
      for (__s19local37 = 0; __s19local37 < __s19local35[__s19local36].length; __s19local37++) {
        var __s19local38 = __s19local35[__s19local36][__s19local37].unitVO;
        if (__s19local38 && __s19local38.attackType == __dep_export_ClientConstCastle.ClientConstCastle.DEFENSE_TOOL) {
          __s19local26[__s19local36].push(__s19local38);
        }
      }
    }
    var __s19local39 = [];
    __s19local39[0] = __dep_export_CastleModel.CastleModel.defenceData.itemsLeftMoat.items;
    __s19local39[1] = __dep_export_CastleModel.CastleModel.defenceData.itemsMiddleMoat.items;
    __s19local39[2] = __dep_export_CastleModel.CastleModel.defenceData.itemsRightMoat.items;
    __s19local36 = 0;
    for (; __s19local36 < __s19local39.length; __s19local36++) {
      for (__s19local37 = 0; __s19local37 < __s19local39[__s19local36].length; __s19local37++) {
        var __s19local40 = __s19local39[__s19local36][__s19local37].unitVO;
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s19local40, "ToolUnitVO")) {
          __s19local26[__s19local36].push(__s19local40);
        }
      }
    }
    __s19local11 = __dep_exact_f855840627e6e145.int(__s19param2.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
    __s19local12 = __dep_exact_f855840627e6e145.int(__s19param2.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
    var __s19local41;
    var __s19local42;
    var __s19local43 = __dep_export_CastleModel.CastleModel.defenceData.keepUnitSlotCount;
    if (__s19local43 == Number.POSITIVE_INFINITY) {
      __s19local41 = Number.POSITIVE_INFINITY;
      __s19local42 = Number.POSITIVE_INFINITY;
    } else {
      __s19local42 = __s19local43 - (__s19local41 = __s19local43 * __s19param4[3] / 100);
    }
    var __s19local44 = Math.min(__s19local41 + Math.max(0, __s19local42 - __s19local12), __s19local11);
    var __s19local45 = Math.min(__s19local42 + Math.max(0, __s19local41 - __s19local11), __s19local12);
    for (__s19local4 = 0; __s19local4 < __s19local28.length; __s19local4++) {
      __s19local29 = __dep_exact_f855840627e6e145.int(__s19local28[__s19local4]);
      __s19local30 = __dep_exact_f855840627e6e145.int(__s19param2.getUnitCountByWodId(__s19local29));
      __s19local2 = __dep_exact_f855840627e6e145.int(Math.min(__s19local30, __s19local44));
      if (__s19local30 > 0 && __s19local2 > 0) {
        this.deductUnitAmount(__s19local29, __s19local2, __s19param2, __s19local1, __s19local0);
        var __s19local46 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s19local29, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
        __s19local46.inventoryAmount = __s19local2;
        __s19local26[3].push(__s19local46);
        __s19local44 -= __s19local2;
      }
    }
    for (__s19local4 = 0; __s19local4 < __s19local33.length; __s19local4++) {
      __s19local29 = __dep_exact_f855840627e6e145.int(__s19local33[__s19local4]);
      __s19local30 = __dep_exact_f855840627e6e145.int(__s19param2.getUnitCountByWodId(__s19local29));
      __s19local2 = __dep_exact_f855840627e6e145.int(Math.min(__s19local30, __s19local45));
      if (__s19local30 > 0 && __s19local2 > 0) {
        this.deductUnitAmount(__s19local29, __s19local2, __s19param2, __s19local1, __s19local0);
        var __s19local47 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s19local29, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
        __s19local47.inventoryAmount = __s19local2;
        __s19local26[3].push(__s19local47);
        __s19local45 -= __s19local2;
      }
    }
    __s19local11 = __dep_exact_f855840627e6e145.int(__s19local0.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
    __s19local12 = __dep_exact_f855840627e6e145.int(__s19local0.getUnitCountByUnitType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
    var __s19local48 = __dep_export_CastleModel.CastleModel.defenceData.allianceUnitYardLimit;
    var __s19local49 = __s19local48 * __s19param4[3] / 100;
    var __s19local50 = __s19local48 - __s19local49;
    var __s19local51 = Math.min(__s19local49 + Math.max(0, __s19local50 - __s19local12), __s19local11);
    var __s19local52 = Math.min(__s19local50 + Math.max(0, __s19local49 - __s19local11), __s19local12);
    for (__s19local4 = 0; __s19local4 < __s19local28.length; __s19local4++) {
      __s19local29 = __dep_exact_f855840627e6e145.int(__s19local28[__s19local4]);
      __s19local30 = __dep_exact_f855840627e6e145.int(__s19local0.getUnitCountByWodId(__s19local29));
      __s19local2 = __dep_exact_f855840627e6e145.int(Math.min(__s19local30, __s19local51));
      if (__s19local30 > 0 && __s19local2 > 0) {
        this.deductUnitAmount(__s19local29, __s19local2, __s19param2, null, __s19local0);
        var __s19local53 = __s19local26[3].find(function (__s72param0) {
          return __s72param0.wodId == __s19local29;
        });
        if (__s19local53) {
          __s19local53.inventoryAmount += __s19local2;
        } else {
          var __s19local54 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s19local29, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
          __s19local54.inventoryAmount += __s19local2;
          __s19local26[3].push(__s19local54);
        }
        __s19local51 -= __s19local2;
      }
    }
    for (__s19local4 = 0; __s19local4 < __s19local33.length; __s19local4++) {
      __s19local29 = __dep_exact_f855840627e6e145.int(__s19local33[__s19local4]);
      __s19local30 = __dep_exact_f855840627e6e145.int(__s19local0.getUnitCountByWodId(__s19local29));
      __s19local2 = __dep_exact_f855840627e6e145.int(Math.min(__s19local30, __s19local52));
      if (__s19local30 > 0 && __s19local2 > 0) {
        this.deductUnitAmount(__s19local29, __s19local2, __s19param2, null, __s19local0);
        var __s19local55 = __s19local26[3].find(function (__s79param0) {
          return __s79param0.wodId == __s19local29;
        });
        if (__s19local55) {
          __s19local55.inventoryAmount += __s19local2;
        } else {
          var __s19local56 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s19local29, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
          __s19local56.inventoryAmount = __s19local2;
          __s19local26[3].push(__s19local56);
        }
        __s19local52 -= __s19local2;
      }
    }
    var __s19local57 = __dep_export_CastleModel.CastleModel.defenceData.itemsKeep.items;
    for (__s19local37 = 0; __s19local37 < __s19local57.length; __s19local37++) {
      var __s19local58 = __s19local57[__s19local37].unitVO;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s19local58, "ToolUnitVO")) {
        var __s19local59 = __dep_exact_81dacdf05bd32292.castAs(__s19local58, "ToolUnitVO");
        if (__s19local59 && __s19local59.numberofDolls > 0) {
          __s19local26[3].push(__s19local58);
        }
      }
    }
    if (__dep_export_CastleModel.CastleModel.defenceData.itemsKeepSupport) {
      for (var __s19local60 = 0, __s19local61 = __dep_export_CastleModel.CastleModel.defenceData.itemsKeepSupport.items; __s19local60 < __s19local61.length; __s19local60++) {
        var __s19local62 = __s19local61[__s19local60].unitVO;
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s19local62, "ToolUnitVO")) {
          __s19local26[4].push(__s19local62);
        }
      }
    }
    return __s19local26;
  };
  UnitAllocator.deductUnitAmount = function (__s91param0, __s91param1, __s91param2, __s91param3, __s91param4) {
    __s91param2.changeUnitAmount(__s91param0, -__s91param1);
    var __s91local0 = 0;
    if (__s91param3) {
      __s91local0 = Math.min(__s91param1, __s91param3.getUnitCountByWodId(__s91param0));
      __s91param3.changeUnitAmount(__s91param0, -__s91local0);
    }
    __s91param4.changeUnitAmount(__s91param0, -(__s91param1 - __s91local0));
  };
  return UnitAllocator;
}();
exports.UnitAllocator = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
