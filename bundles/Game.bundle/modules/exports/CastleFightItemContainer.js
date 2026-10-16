Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_CastleFightItemVO = require("gge-module:export_CastleFightItemVO");
var __s0local0 = function () {
  function CastleFightItemContainer(__s3param0, __s3param1, __s3param2, __s3param3 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE), __s3param4 = null, __s3param5 = null) {
    this.unlockLevel = 0;
    this._maxItems = 0;
    this._highlighted = false;
    this._itemTypes = __s3param0;
    this._itemLevel = __s3param1;
    this._maxItems = __s3param3;
    this._items = [];
    this._serverItems = [];
    this.requiredIDs = __s3param5;
    this.unlockLevel = __s3param2;
    this.additionalItemTypes = __s3param4;
    this.addItemstoList(true, true);
    this.addItemstoList(false);
  }
  CastleFightItemContainer.prototype.addItemstoList = function (__s5param0, __s5param1 = false) {
    var __s5local0;
    var __s5local1 = 0;
    for (__s5local1 = 0; __s5local1 < this._itemTypes.length; __s5local1++) {
      (__s5local0 = new __dep_export_CastleFightItemVO.CastleFightItemVO()).slotType = __dep_exact_f855840627e6e145.int(this._itemTypes[__s5local1]);
      __s5local0.itemLevel = __dep_exact_f855840627e6e145.int(this._itemLevel[__s5local1]);
      __s5local0.unlockLevel = this.unlockLevel;
      if (__s5param1) {
        this._serverItems.push(__s5local0);
      }
      if (__s5local0.isUnlocked() == __s5param0) {
        this._items.push(__s5local0);
      }
    }
    if (this.additionalItemTypes && this.requiredIDs) {
      for (__s5local1 = 0; __s5local1 < this.additionalItemTypes.length; __s5local1++) {
        (__s5local0 = new __dep_export_CastleFightItemVO.CastleFightItemVO()).slotType = __dep_exact_f855840627e6e145.int(this.additionalItemTypes[__s5local1]);
        __s5local0.unlockSkillID = __dep_exact_f855840627e6e145.int(this.requiredIDs[__s5local1]);
        if (__s5param1) {
          this._serverItems.push(__s5local0);
        }
        if (__s5local0.isUnlocked() == __s5param0) {
          this._items.push(__s5local0);
        }
      }
    }
  };
  CastleFightItemContainer.prototype.fillFromParamArray = function (__s16param0) {
    this.clearAll();
    for (var __s16local0 = 0; __s16local0 < __s16param0.length; __s16local0++) {
      var __s16local1 = __s16param0[__s16local0];
      var __s16local2 = __dep_exact_f855840627e6e145.int(__s16local1.shift());
      var __s16local3 = __dep_exact_f855840627e6e145.int(__s16local1.shift());
      if (__s16local2 != -1) {
        this.addToItems(__s16local2, __s16local3, __s16local0);
      }
    }
  };
  CastleFightItemContainer.prototype.clearAll = function () {
    for (var __s21local0 = 0; __s21local0 < this._items.length; __s21local0++) {
      this._items[__s21local0].unitVO = null;
    }
  };
  CastleFightItemContainer.prototype.addToItems = function (__s25param0, __s25param1, __s25param2 = -1) {
    var __s25local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s25param0, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
    for (var __s25local1 = 0; __s25local1 < this._items.length; __s25local1++) {
      var __s25local2 = this._items[__s25local1];
      if (!__s25local2.unitVO && __s25local0.isToolForSlotType(__s25local2.slotType) && (__s25local1 == __s25param2 || __s25param2 == -1)) {
        __s25local2.unitVO = __s25local0;
        __s25local2.unitVO.inventoryAmount = __s25param1;
        __s25local2.outline = __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE);
        break;
      }
    }
  };
  Object.defineProperty(CastleFightItemContainer.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemContainer.prototype.getSlotList = function (__s32param0 = false) {
    var __s32local0 = [];
    for (var __s32local1 = __s32param0 ? this._serverItems : this._items, __s32local2 = 0; __s32local2 < __s32local1.length; __s32local2++) {
      var __s32local3 = __s32local1[__s32local2];
      __s32local0.push([__s32local3.getWodId(), __s32local3.getAmount()]);
    }
    return __s32local0;
  };
  Object.defineProperty(CastleFightItemContainer.prototype, "sumOfItems", {
    get: function () {
      var __s36local0 = 0;
      for (var __s36local1 = 0; __s36local1 < this._items.length; __s36local1++) {
        __s36local0 += this._items[__s36local1].getAmount();
      }
      return __s36local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemContainer.prototype.getLootAmount = function (__s40param0 = null) {
    var __s40local0;
    var __s40local1 = 0;
    for (var __s40local2 = 0; __s40local2 < this._items.length; __s40local2++) {
      if ((__s40local0 = this._items[__s40local2]).unitVO) {
        var __s40local3 = 1 + (__s40param0 ? __s40param0.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_VALUE_BOOST_UNIT, -1, -1, __s40local0.unitVO.wodId) / 100 : 0);
        __s40local1 += __dep_exact_f855840627e6e145.int(__s40local0.unitVO.lootValue * __s40local3 * __s40local0.unitVO.inventoryAmount);
      }
    }
    return __s40local1;
  };
  CastleFightItemContainer.prototype.getFoodConsumption = function () {
    var __s45local0 = 0;
    for (var __s45local1 = 0; __s45local1 < this._items.length; ++__s45local1) {
      var __s45local2 = this._items[__s45local1];
      if (__s45local2 && __s45local2.unitVO) {
        __s45local0 += __dep_exact_f855840627e6e145.int(__s45local2.unitVO.foodSupply * __s45local2.unitVO.inventoryAmount);
      }
    }
    return __s45local0;
  };
  CastleFightItemContainer.prototype.getMeadConsumption = function () {
    var __s50local0 = 0;
    for (var __s50local1 = 0; __s50local1 < this._items.length; ++__s50local1) {
      var __s50local2 = this._items[__s50local1];
      if (__s50local2 && __s50local2.unitVO) {
        __s50local0 += __dep_exact_f855840627e6e145.int(__s50local2.unitVO.meadSupply * __s50local2.unitVO.inventoryAmount);
      }
    }
    return __s50local0;
  };
  CastleFightItemContainer.prototype.getBeefConsumption = function () {
    var __s55local0 = 0;
    for (var __s55local1 = 0; __s55local1 < this._items.length; ++__s55local1) {
      var __s55local2 = this._items[__s55local1];
      if (__s55local2 && __s55local2.unitVO) {
        __s55local0 += __dep_exact_f855840627e6e145.int(__s55local2.unitVO.beefSupply * __s55local2.unitVO.inventoryAmount);
      }
    }
    return __s55local0;
  };
  CastleFightItemContainer.prototype.getAttackRangeValue = function (__s60param0 = null, __s60param1 = null, __s60param2 = false, __s60param3 = false, __s60param4 = false, __s60param5 = null) {
    var __s60local0 = 0;
    for (var __s60local1 = 0; __s60local1 < this._items.length; __s60local1++) {
      var __s60local2 = this._items[__s60local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s60local2.unitVO, "SoldierUnitVO")) {
        var __s60local3 = __s60local2.unitVO;
        var __s60local4 = __s60param0 ? __s60param0.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, __s60param1 ? __s60param1.areaType : -1, __s60param1 ? __s60param1.spaceID : -1, __s60local3.wodId, __s60param5) : 0;
        var __s60local5 = 0;
        __s60local5 += __s60param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s60param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS, __s60param1 ? __s60param1.areaType : -1, true, __s60param5).strength : 0;
        __s60local5 += __s60param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s60param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_RANGE_BONUS, __s60param1 ? __s60param1.areaType : -1, true, __s60param5).strength : 0;
        __s60local5 += __s60param2 && __s60param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s60param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD, __s60param1 ? __s60param1.areaType : -1, true, __s60param5).strength : 0;
        __s60local5 += __s60param3 && __s60param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s60param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK, __s60param1 ? __s60param1.areaType : -1, true, __s60param5).strength : 0;
        __s60local5 = 1 + (__s60local5 += __s60param4 && __s60param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s60param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FRONT, __s60param1 ? __s60param1.areaType : -1, true, __s60param5).strength : 0) / 100;
        var __s60local6 = 0;
        if (__s60param1 && __s60param1.ownerInfo && __s60param1.ownerInfo.isLegend) {
          __s60local6 = __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ATTACK_RANGE_BONUS) / 100;
          __s60local6 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ATTACK_BONUS) / 100;
          if (__s60param2) {
            __s60local6 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ATTACK_YARD_BONUS) / 100;
          }
        }
        if (__s60local3.buffedRangeAttack > 0) {
          __s60local0 += (__s60local3.buffedRangeAttack + __s60local4) * __s60local2.getAmount() * (__s60local5 + __s60local6);
        }
      }
    }
    return __s60local0;
  };
  CastleFightItemContainer.prototype.getAttackMeleeValue = function (__s68param0 = null, __s68param1 = null, __s68param2 = false, __s68param3 = false, __s68param4 = false, __s68param5 = null) {
    var __s68local0 = 0;
    for (var __s68local1 = 0; __s68local1 < this._items.length; __s68local1++) {
      var __s68local2 = this._items[__s68local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s68local2.unitVO, "SoldierUnitVO")) {
        var __s68local3 = __s68local2.unitVO;
        var __s68local4 = __s68param0 ? __s68param0.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, __s68param1 ? __s68param1.areaType : -1, __s68param1 ? __s68param1.spaceID : -1, __s68local3.wodId, __s68param5) : 0;
        var __s68local5 = 0;
        __s68local5 += __s68param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s68param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS, __s68param1 ? __s68param1.areaType : -1, true, __s68param5).strength : 0;
        __s68local5 += __s68param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s68param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_OFFENSIVE_MELEE_BONUS, __s68param1 ? __s68param1.areaType : -1, true, __s68param5).strength : 0;
        __s68local5 += __s68param2 && __s68param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s68param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD, __s68param1 ? __s68param1.areaType : -1, true, __s68param5).strength : 0;
        __s68local5 += __s68param3 && __s68param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s68param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FLANK, __s68param1 ? __s68param1.areaType : -1, true, __s68param5).strength : 0;
        __s68local5 = 1 + (__s68local5 += __s68param4 && __s68param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s68param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_FRONT, __s68param1 ? __s68param1.areaType : -1, true, __s68param5).strength : 0) / 100;
        var __s68local6 = 0;
        if (__s68param1 && __s68param1.ownerInfo && __s68param1.ownerInfo.isLegend) {
          __s68local6 = __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ATTACK_MELEE_BONUS) / 100;
          __s68local6 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ATTACK_BONUS) / 100;
          if (__s68param2) {
            __s68local6 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ATTACK_YARD_BONUS) / 100;
          }
        }
        if (__s68local3.buffedMeleeAttack > 0) {
          __s68local0 += (__s68local3.buffedMeleeAttack + __s68local4) * __s68local2.getAmount() * (__s68local5 + __s68local6);
        }
      }
    }
    return __s68local0;
  };
  CastleFightItemContainer.prototype.getAllianceDefenceBoost = function (__s76param0) {
    var __s76local0;
    var __s76local1;
    if (__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(__s76param0.controllerWorldMapOwnerInfoVO) && __s76param0.kingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && __dep_export_CastleModel.CastleModel.allianceData && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && (__s76local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO, (__s76local1 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST, __s76local0.getBoostLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST)).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS)) && __s76local1.effect.isForAreaType(__s76param0.areaType))) {
      return __s76local1.strength / 100;
    } else {
      return 0;
    }
  };
  CastleFightItemContainer.prototype.getDefenceRangeValue = function (__s80param0, __s80param1) {
    var __s80local0 = 0;
    var __s80local1 = __s80param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s80param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS, __s80param1.areaType).strength / 100 : 0;
    var __s80local2 = this.getAllianceDefenceBoost(__s80param1);
    for (var __s80local3 = 0; __s80local3 < this._items.length; __s80local3++) {
      var __s80local4 = this._items[__s80local3];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s80local4.unitVO, "SoldierUnitVO")) {
        var __s80local5 = __s80local4.unitVO;
        __s80local0 += __dep_exact_f855840627e6e145.int(__s80local5.rangeDefence * __s80local4.getAmount() * (1 + __s80local1) * (1 + __s80local2));
      }
    }
    return __s80local0;
  };
  CastleFightItemContainer.prototype.getDefenceMeleeValue = function (__s85param0, __s85param1) {
    var __s85local0 = 0;
    var __s85local1 = __s85param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s85param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS, __s85param1.areaType).strength / 100 + 1 : 1;
    var __s85local2 = this.getAllianceDefenceBoost(__s85param1);
    for (var __s85local3 = 0; __s85local3 < this._items.length; __s85local3++) {
      var __s85local4 = this._items[__s85local3];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s85local4.unitVO, "SoldierUnitVO")) {
        var __s85local5 = __s85local4.unitVO;
        __s85local0 += __dep_exact_f855840627e6e145.int(__s85local5.meleeDefence * __s85local4.getAmount() * (__s85local1 + __s85local2));
      }
    }
    return __s85local0;
  };
  CastleFightItemContainer.prototype.getAttackMeleeBonus = function () {
    var __s90local0 = 0;
    for (var __s90local1 = 0; __s90local1 < this._items.length; __s90local1++) {
      var __s90local2 = this._items[__s90local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s90local2.unitVO, "ToolUnitVO")) {
        var __s90local3 = __s90local2.unitVO;
        __s90local0 += __s90local3.offMeleeBonus * __s90local2.getAmount();
        __s90local0 += __s90local3.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.ATTACK_BONUS) * __s90local2.getAmount();
      }
    }
    return __s90local0;
  };
  CastleFightItemContainer.prototype.getAttackRangeBonus = function () {
    var __s95local0 = 0;
    for (var __s95local1 = 0; __s95local1 < this._items.length; __s95local1++) {
      var __s95local2 = this._items[__s95local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s95local2.unitVO, "ToolUnitVO")) {
        var __s95local3 = __s95local2.unitVO;
        __s95local0 += __s95local3.offRangeBonus * __s95local2.getAmount();
        __s95local0 += __s95local3.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.ATTACK_BONUS) * __s95local2.getAmount();
      }
    }
    return __s95local0;
  };
  CastleFightItemContainer.prototype.getDefenceRangeBonus = function () {
    var __s100local0 = 0;
    for (var __s100local1 = 0; __s100local1 < this._items.length; __s100local1++) {
      var __s100local2 = this._items[__s100local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s100local2.unitVO, "ToolUnitVO")) {
        __s100local0 += __s100local2.unitVO.defRangeBonus * __s100local2.getAmount();
      }
    }
    return __s100local0;
  };
  CastleFightItemContainer.prototype.getDefenceMeleeBonus = function () {
    var __s105local0 = 0;
    for (var __s105local1 = 0; __s105local1 < this._items.length; __s105local1++) {
      var __s105local2 = this._items[__s105local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s105local2.unitVO, "ToolUnitVO")) {
        __s105local0 += __s105local2.unitVO.defMeleeBonus * __s105local2.getAmount();
      }
    }
    return __s105local0;
  };
  CastleFightItemContainer.prototype.getAmountOfToolInContainer = function (__s110param0) {
    var __s110local0 = 0;
    for (var __s110local1 = 0; __s110local1 < this._items.length; ++__s110local1) {
      if (this._items[__s110local1].unitVO && this._items[__s110local1].unitVO.type == __s110param0.type) {
        __s110local0 += __dep_exact_f855840627e6e145.int(this._items[__s110local1].unitVO.inventoryAmount);
      }
    }
    return __s110local0;
  };
  CastleFightItemContainer.prototype.getLowestTravelSpeed = function (__s115param0 = false, __s115param1 = null) {
    var __s115local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    for (var __s115local1 = 0; __s115local1 < this._items.length; __s115local1++) {
      var __s115local2 = this._items[__s115local1];
      if (__s115local2.unitVO && (!__s115param0 || __s115local2.unitVO.unitCategory != __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS)) {
        var __s115local3 = __s115param1 ? __s115param1.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BOOST_UNIT, -1, -1, __s115local2.unitVO.wodId) : 0;
        var __s115local4 = Math.ceil(__s115local2.unitVO.unitSpeed * ((100 + __s115local3) / 100));
        __s115local0 = __dep_exact_f855840627e6e145.int(Math.min(__s115local0, __s115local4));
      }
    }
    return __s115local0;
  };
  Object.defineProperty(CastleFightItemContainer.prototype, "maxItems", {
    get: function () {
      return this._maxItems;
    },
    set: function (__s122param0) {
      this._maxItems = __s122param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightItemContainer.prototype, "freeItems", {
    get: function () {
      return this._maxItems - this.sumOfItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightItemContainer.prototype, "isFull", {
    get: function () {
      return this.freeItems <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightItemContainer.prototype, "countString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.numberForArabic(this.sumOfItems) + " / " + __dep_exact_92d05af59ee2ff30.Localize.numberForArabic(this.maxItems);
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemContainer.prototype.containsUnit = function (__s130param0) {
    for (var __s130local0 = 0, __s130local1 = this._items; __s130local0 < __s130local1.length; __s130local0++) {
      if (__s130local1[__s130local0].unitVO == __s130param0) {
        return true;
      }
    }
    return false;
  };
  CastleFightItemContainer.prototype.getTotalAmountOfUntit = function (__s135param0) {
    var __s135local0;
    var __s135local1 = 0;
    for (var __s135local2 = 0, __s135local3 = this._items; __s135local2 < __s135local3.length; __s135local2++) {
      if ((__s135local0 = __s135local3[__s135local2]).getWodId() == __s135param0.wodId) {
        __s135local1 += __s135local0.getAmount();
      }
    }
    return __s135local1;
  };
  CastleFightItemContainer.prototype.containsUnitType = function (__s140param0) {
    if (this.items != null) {
      for (var __s140local0 = 0, __s140local1 = this.items; __s140local0 < __s140local1.length; __s140local0++) {
        var __s140local2 = __s140local1[__s140local0];
        if (__s140local2 !== undefined && __s140local2.isSameType(__s140param0)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleFightItemContainer.prototype.getFirstSlotWithUnit = function (__s146param0) {
    if (this.items != null) {
      for (var __s146local0 = 0, __s146local1 = this.items; __s146local0 < __s146local1.length; __s146local0++) {
        var __s146local2 = __s146local1[__s146local0];
        if (__s146local2 !== undefined && __s146local2.getWodId() == __s146param0.wodId) {
          return __s146local2;
        }
      }
    }
    return null;
  };
  CastleFightItemContainer.prototype.getAllSlotsWithUnit = function (__s152param0) {
    var __s152local0 = [];
    if (this.items != null) {
      for (var __s152local1 = 0, __s152local2 = this.items; __s152local1 < __s152local2.length; __s152local1++) {
        var __s152local3 = __s152local2[__s152local1];
        if (__s152local3 !== undefined && __s152local3.getWodId() == __s152param0.wodId) {
          __s152local0.push(__s152local3);
        }
      }
    }
    return __s152local0;
  };
  CastleFightItemContainer.prototype.hasFreeSlotsForUnit = function (__s158param0) {
    if (this.items != null) {
      for (var __s158local0 = 0, __s158local1 = this.items; __s158local0 < __s158local1.length; __s158local0++) {
        var __s158local2 = __s158local1[__s158local0];
        if (__s158local2 !== undefined && __s158local2.isFree() && __s158param0.isToolForSlotType(__s158local2.slotType) && __s158local2.isUnlocked() && !this.exceedsSupportToolSlotLimit(__s158local2, __s158param0)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleFightItemContainer.prototype.exceedsSupportToolSlotLimit = function (__s164param0, __s164param1) {
    return (!!__s164param0.isFree() || !__s164param0.isSameType(__s164param1)) && !!(__s164param1 instanceof __dep_export_ToolUnitVO.ToolUnitVO) && !!__s164param1.isSupportTool && !!this.containsUnitType(__s164param1);
  };
  Object.defineProperty(CastleFightItemContainer.prototype, "highlighted", {
    get: function () {
      return this._highlighted;
    },
    set: function (__s168param0) {
      this._highlighted = __s168param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemContainer.prototype.getTotalBonusByToolEffect = function (__s170param0) {
    var __s170local0 = 0;
    for (var __s170local1 = 0; __s170local1 < this._items.length; __s170local1++) {
      var __s170local2 = this._items[__s170local1];
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s170local2.unitVO, "ToolUnitVO")) {
        var __s170local3 = __s170local2.unitVO;
        if (__s170local3.isDefensive) {
          __s170local0 += __s170local3.getBonusByEffect(__s170param0);
        } else {
          __s170local0 += __s170local3.getBonusByEffect(__s170param0) * __s170local2.getAmount();
        }
      }
    }
    return __s170local0;
  };
  CastleFightItemContainer.prototype.exceedsLimit = function () {
    return this.freeItems < 0;
  };
  return CastleFightItemContainer;
}();
exports.CastleFightItemContainer = __s0local0;
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
