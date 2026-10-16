Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function () {
  function AFillWaveStrategy() {
    this.relevantFilteredUnits = [];
  }
  AFillWaveStrategy.prototype.fillYardContainer = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    var __s5local0 = this.createFilteredInventory(__s5param0.unitInventory, __s5param1);
    this.relevantFilteredUnits = this.extractUnitWodIdsFromInventory(__s5local0);
    this.flankFillStrategy.fillFlankWithSoldiers(__s5param2, null, __s5param3.getDefenderFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_YARD), __s5local0, __s5param1);
    this.applyInventoryChanges(__s5local0, __s5param0.unitInventory);
    return true;
  };
  AFillWaveStrategy.prototype.fillWave = function (__s7param0, __s7param1, __s7param2, __s7param3, __s7param4) {
    var __s7local0 = this.createFilteredInventory(__s7param0.unitInventory, __s7param1);
    this.relevantFilteredUnits = this.extractUnitWodIdsFromInventory(__s7local0);
    if (!__s7param1 || !!__s7param1.fillLeftFlank) {
      this.flankFillStrategy.fillToolStrategyPool();
      this.flankFillStrategy.fillFlankWithTools(__s7param2.itemsLeftWall_tools, __s7param3.getAttackerFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT), __s7param4.getDefenderFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT), __s7local0, __s7param4.spaceID, __s7param4.defenderArea, __s7param2);
      this.flankFillStrategy.fillFlankWithSoldiers(__s7param2.itemsLeftWall_units, __s7param3.getAttackerFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT), __s7param4.getDefenderFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT), __s7local0, __s7param1);
      this.flankFillStrategy.checkFlank(__s7param2.itemsLeftWall_tools, __s7param2.itemsLeftWall_units, __s7local0);
    }
    if (!__s7param1 || !!__s7param1.fillRightFlank) {
      this.flankFillStrategy.fillToolStrategyPool();
      this.flankFillStrategy.fillFlankWithTools(__s7param2.itemsRightWall_tools, __s7param3.getAttackerFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT), __s7param4.getDefenderFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT), __s7local0, __s7param4.spaceID, __s7param4.defenderArea, __s7param2);
      this.flankFillStrategy.fillFlankWithSoldiers(__s7param2.itemsRightWall_units, __s7param3.getAttackerFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT), __s7param4.getDefenderFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT), __s7local0, __s7param1);
      this.flankFillStrategy.checkFlank(__s7param2.itemsRightWall_tools, __s7param2.itemsRightWall_units, __s7local0);
    }
    if (!__s7param1 || !!__s7param1.fillMiddleFlank) {
      this.flankFillStrategy.fillToolStrategyPool();
      this.flankFillStrategy.fillFlankWithTools(__s7param2.itemsMiddleWall_tools, __s7param3.getAttackerFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s7param4.getDefenderFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s7local0, __s7param4.spaceID, __s7param4.defenderArea, __s7param2);
      this.flankFillStrategy.fillFlankWithSoldiers(__s7param2.itemsMiddleWall_units, __s7param3.getAttackerFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s7param4.getDefenderFlankEffects(__dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE), __s7local0, __s7param1);
      this.flankFillStrategy.checkFlank(__s7param2.itemsMiddleWall_tools, __s7param2.itemsMiddleWall_units, __s7local0);
    }
    this.applyInventoryChanges(__s7local0, __s7param0.unitInventory);
    return true;
  };
  AFillWaveStrategy.prototype.extractUnitWodIdsFromInventory = function (__s12param0) {
    var __s12local0 = [];
    for (var __s12local1 = 0, __s12local2 = __s12param0.getUnits(null); __s12local1 < __s12local2.length; __s12local1++) {
      var __s12local3 = __s12local2[__s12local1];
      __s12local0.push(__s12local3.wodId);
    }
    return __s12local0;
  };
  AFillWaveStrategy.prototype.applyInventoryChanges = function (__s16param0, __s16param1) {
    if (this.relevantFilteredUnits != null) {
      for (var __s16local0 = 0, __s16local1 = this.relevantFilteredUnits; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined) {
          var __s16local3 = __s16param0.getUnit(__s16local2);
          var __s16local4 = __s16param1.getUnit(__s16local2);
          if (__s16local4) {
            if (__s16local3 && __s16local3.inventoryAmount > 0) {
              __s16local4.inventoryAmount = __s16local3.inventoryAmount;
            } else {
              __s16param1.removeUnit(__s16local2);
            }
          }
        }
      }
    }
  };
  AFillWaveStrategy.prototype.createFilteredInventory = function (__s25param0, __s25param1) {
    var __s25local0 = new (__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(__s25param0))();
    var __s25local1 = __s25param0.getUnits(null);
    if (__s25local1 != null) {
      for (var __s25local2 = 0, __s25local3 = __s25local1; __s25local2 < __s25local3.length; __s25local2++) {
        var __s25local4 = __s25local3[__s25local2];
        if (__s25local4 !== undefined) {
          if (!__s25param1 || __s25local4.toolCategory == "" || !!__s25param1.isToolFilterActive(__s25local4.toolCategory)) {
            __s25local0.addUnitReference(__s25local4);
          }
        }
      }
    }
    return __s25local0;
  };
  AFillWaveStrategy.prototype.loadFlankFillStrategy = function (__s32param0) {
    this.flankFillStrategy = __s32param0;
  };
  return AFillWaveStrategy;
}();
exports.AFillWaveStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFillWaveStrategy");
