Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FlankVO(__s3param0, __s3param1 = null, __s3param2 = false) {
    this.isPreOrPostWave = false;
    this._soldiers = [];
    this._tools = [];
    this._effects = [];
    if (__s3param1) {
      this.initAsSummary(__s3param1, __s3param2);
    } else {
      this.initByParams(__s3param0);
    }
    this.sortLists();
  }
  FlankVO.prototype.initAsSummary = function (__s7param0, __s7param1) {
    var __s7local0 = new Map();
    var __s7local1 = new Map();
    var __s7local2 = new Map();
    if (__s7param0 != null) {
      for (var __s7local3 = 0, __s7local4 = __s7param0; __s7local3 < __s7local4.length; __s7local3++) {
        var __s7local5 = __s7local4[__s7local3];
        if (__s7local5 !== undefined) {
          FlankVO.addToMapByWodID(__s7local5.soldiers, __s7local0, __s7local5.isPreOrPostWave);
          FlankVO.addToMapByWodID(__s7local5.tools, __s7local1, __s7local5.isPreOrPostWave);
          for (var __s7local6 = 0, __s7local7 = __s7local5.effects; __s7local6 < __s7local7.length; __s7local6++) {
            var __s7local8 = __s7local7[__s7local6];
            if (__s7local8 !== undefined) {
              var __s7local9 = 0;
              if (__s7local2.get(__s7local8.effectType)) {
                __s7local9 = __dep_exact_f855840627e6e145.int(__s7local2.get(__s7local8.effectType));
              }
              __s7local2.set(__s7local8.effectType, Math.max(__s7local8.inventoryAmount, __s7local9));
            }
          }
        }
      }
    }
    if (__s7local0 != null) {
      for (var __s7local10 = 0, __s7local11 = Array.from(__s7local0.values()); __s7local10 < __s7local11.length; __s7local10++) {
        var __s7local12 = __s7local11[__s7local10];
        if (__s7local12 !== undefined) {
          this._soldiers.push(new __dep_export_LogUnitVO.LogUnitVO(null, __s7local12, __s7param1));
        }
      }
    }
    if (__s7local1 != null) {
      for (var __s7local13 = 0, __s7local14 = Array.from(__s7local1.values()); __s7local13 < __s7local14.length; __s7local13++) {
        var __s7local15 = __s7local14[__s7local13];
        if (__s7local15 !== undefined) {
          this._tools.push(new __dep_export_LogUnitVO.LogUnitVO(null, __s7local15));
        }
      }
    }
    if (__s7local2 != null) {
      for (var __s7local16 = 0, __s7local17 = Array.from(__s7local2.keys()); __s7local16 < __s7local17.length; __s7local16++) {
        var __s7local18 = __s7local17[__s7local16];
        if (__s7local18 !== undefined) {
          var __s7local19 = __dep_exact_f855840627e6e145.int(__s7local2.get(__s7local18));
          this._effects.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__s7local18, __s7local19));
        }
      }
    }
  };
  FlankVO.addToMapByWodID = function (__s29param0, __s29param1, __s29param2) {
    if (__s29param0 != null) {
      for (var __s29local0 = 0, __s29local1 = __s29param0; __s29local0 < __s29local1.length; __s29local0++) {
        var __s29local2 = __s29local1[__s29local0];
        if (__s29local2 !== undefined) {
          __s29local2.isPreOrPostWave = __s29param2;
          if (!__s29param1.get(__s29local2.wodID)) {
            __s29param1.set(__s29local2.wodID, []);
          }
          __s29param1.get(__s29local2.wodID).push(__s29local2);
        }
      }
    }
  };
  FlankVO.prototype.initByParams = function (__s36param0) {
    if (__s36param0) {
      this.parseUnits(__s36param0[FlankVO.SOLDIERS]);
      this.parseTools(__s36param0[FlankVO.TOOLS]);
      if (__s36param0.length > FlankVO.EFFECTS && __s36param0[FlankVO.EFFECTS]) {
        this.parseEffects(__s36param0[FlankVO.EFFECTS]);
      }
    }
  };
  FlankVO.prototype.parseUnits = function (__s40param0) {
    for (var __s40local0 = 0; __s40local0 < __s40param0.length; __s40local0++) {
      var __s40local1 = new __dep_export_LogUnitVO.LogUnitVO(__s40param0[__s40local0]);
      this._soldiers.push(__s40local1);
    }
  };
  FlankVO.prototype.parseTools = function (__s44param0) {
    for (var __s44local0 = 0; __s44local0 < __s44param0.length; __s44local0++) {
      var __s44local1 = new __dep_export_LogUnitVO.LogUnitVO(__s44param0[__s44local0]);
      this._tools.push(__s44local1);
    }
  };
  FlankVO.prototype.parseEffects = function (__s48param0) {
    var __s48local0 = __dep_exact_f855840627e6e145.int(__s48param0[FlankVO.BONUS_DEFENSE]);
    var __s48local1 = __dep_exact_f855840627e6e145.int(__s48param0[FlankVO.BONUS_GATE]);
    var __s48local2 = __dep_exact_f855840627e6e145.int(__s48param0[FlankVO.BONUS_MOAT]);
    this._effects.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.WALL_BONUS, __s48local0));
    this._effects.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.GATE_BONUS, __s48local1));
    this._effects.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.MOAT_BONUS, __s48local2));
  };
  FlankVO.prototype.sortLists = function () {
    this._soldiers.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
    this._tools.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
    this._effects.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
  };
  Object.defineProperty(FlankVO.prototype, "soldiers", {
    get: function () {
      return this._soldiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankVO.prototype, "tools", {
    get: function () {
      return this._tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlankVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  FlankVO.prototype.hasOnlyAuxiliariesOrNothing = function () {
    if (this._soldiers != null) {
      for (var __s58local0 = 0, __s58local1 = this._soldiers; __s58local0 < __s58local1.length; __s58local0++) {
        var __s58local2 = __s58local1[__s58local0];
        if (__s58local2 !== undefined && !__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s58local2.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT).isAuxiliary) {
          return false;
        }
      }
    }
    return true;
  };
  FlankVO.__initialize_static_members = function () {
    FlankVO.SOLDIERS = 0;
    FlankVO.TOOLS = 1;
    FlankVO.EFFECTS = 2;
    FlankVO.BONUS_DEFENSE = 0;
    FlankVO.BONUS_GATE = 1;
    FlankVO.BONUS_MOAT = 2;
  };
  return FlankVO;
}();
exports.FlankVO = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_EffectIconUnitVO = require("gge-module:export_EffectIconUnitVO");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LogUnitVO = require("gge-module:export_LogUnitVO");
__s0local0.__initialize_static_members();
