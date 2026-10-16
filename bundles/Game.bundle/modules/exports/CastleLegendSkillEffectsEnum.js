Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillEffectsEnum(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._id = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._tooltipTextId = __s3param1;
    __s3local0._id = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillEffectsEnum, __s1param0);
  CastleLegendSkillEffectsEnum.getTypeById = function (__s5param0) {
    return this.getByProperty(CastleLegendSkillEffectsEnum, "id", __s5param0, CastleLegendSkillEffectsEnum.TYPE_UNKNOWN);
  };
  CastleLegendSkillEffectsEnum.getTypeByName = function (__s7param0) {
    return this.getByProperty(CastleLegendSkillEffectsEnum, "name", __s7param0, CastleLegendSkillEffectsEnum.TYPE_UNKNOWN);
  };
  Object.defineProperty(CastleLegendSkillEffectsEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillEffectsEnum.__initialize_static_members = function () {
    CastleLegendSkillEffectsEnum.TYPE_UNKNOWN = new CastleLegendSkillEffectsEnum("unknown", "unknown", -1);
    CastleLegendSkillEffectsEnum.GATE_REDUCTION = new CastleLegendSkillEffectsEnum("gateReduction", "tooltip_gateReduction", 1);
    CastleLegendSkillEffectsEnum.LOOT_BONUS = new CastleLegendSkillEffectsEnum("lootBonus", "", 2);
    CastleLegendSkillEffectsEnum.HONOR_BONUS = new CastleLegendSkillEffectsEnum("honorBonus", "tooltip_hotooltip_lootBonusnorBonus", 3);
    CastleLegendSkillEffectsEnum.ATTACK_MELEE_BONUS = new CastleLegendSkillEffectsEnum("attackMeleeBonus", "tooltip_attackMeleeBonus", 4);
    CastleLegendSkillEffectsEnum.SPY_AMOUNT_BONUS = new CastleLegendSkillEffectsEnum("spyAmountBonus", "tooltip_spyAmountBonus", 5);
    CastleLegendSkillEffectsEnum.COOLDOWN_REDUCTION = new CastleLegendSkillEffectsEnum("cooldownReduction", "tooltip_cooldownReduction", 6);
    CastleLegendSkillEffectsEnum.ATTACK_RANGE_BONUS = new CastleLegendSkillEffectsEnum("attackRangeBonus", "tooltip_attackRangeBonus", 7);
    CastleLegendSkillEffectsEnum.TRAVEL_COST_REDUCTION = new CastleLegendSkillEffectsEnum("travelCostReduction", "tooltip_travelCostReduction", 8);
    CastleLegendSkillEffectsEnum.SMASH_CHANCE_BONUS = new CastleLegendSkillEffectsEnum("smashChanceBonus", "tooltip_smashChanceBonus", 9);
    CastleLegendSkillEffectsEnum.ADDITIONAL_UNIT_AMOUNT_ON_FRONT = new CastleLegendSkillEffectsEnum("additionalUnitAmountOnFront", "tooltip_additionalUnitAmountOnFront", 10);
    CastleLegendSkillEffectsEnum.FIRE_BONUS = new CastleLegendSkillEffectsEnum("fireBonus", "tooltip_fireBonus", 11);
    CastleLegendSkillEffectsEnum.XP_ATTACK_PV_PBONUS = new CastleLegendSkillEffectsEnum("XPAttackPvPBonus", "tooltip_XPAttackPvPBonus", 12);
    CastleLegendSkillEffectsEnum.WALL_REDUCTION = new CastleLegendSkillEffectsEnum("wallReduction", "tooltip_wallReduction", 14);
    CastleLegendSkillEffectsEnum.ATTACK_YARD_BONUS = new CastleLegendSkillEffectsEnum("attackYardBonus", "tooltip_attackYardBonus", 15);
    CastleLegendSkillEffectsEnum.TRAVEL_ATTACK_BOOST = new CastleLegendSkillEffectsEnum("travelAttackBoost", "tooltip_travelAttackBoost", 16);
    CastleLegendSkillEffectsEnum.FAME_ATTACK_BONUS = new CastleLegendSkillEffectsEnum("fameAttackBonus", "tooltip_fameAttackBonus", 17);
    CastleLegendSkillEffectsEnum.TRAVEL_RETURN_PV_PBOOST = new CastleLegendSkillEffectsEnum("travelReturnPvPBoost", "tooltip_travelReturnPvPBoost", 18);
    CastleLegendSkillEffectsEnum.ADDITIONAL_UNIT_AMOUNT_ON_FLANK = new CastleLegendSkillEffectsEnum("additionalUnitAmountOnFlank", "tooltip_additionalUnitAmountOnFlank", 19);
    CastleLegendSkillEffectsEnum.LOOT_CAPACITY_BONUS = new CastleLegendSkillEffectsEnum("lootCapacityBonus", "tooltip_lootCapacityBonus", 20);
    CastleLegendSkillEffectsEnum.ADDITIONAL_ATTACK_TOOL_AMOUNT_FLANK = new CastleLegendSkillEffectsEnum("additionalAttackToolAmountFlank", "tooltip_additionalAttackToolAmountFlank", 21);
    CastleLegendSkillEffectsEnum.ADDITIONAL_WAVE = new CastleLegendSkillEffectsEnum("additionalWave", "tooltip_additionalWave", 22);
    CastleLegendSkillEffectsEnum.MOAT_REDUCTION = new CastleLegendSkillEffectsEnum("moatReduction", "tooltip_moatReduction", 23);
    CastleLegendSkillEffectsEnum.GATE_BONUS = new CastleLegendSkillEffectsEnum("gateBonus", "tooltip_gateBonus", 24);
    CastleLegendSkillEffectsEnum.LOOT_REDUCTION = new CastleLegendSkillEffectsEnum("lootReduction", "tooltip_lootReduction", 25);
    CastleLegendSkillEffectsEnum.XP_CONSTRUCTION_BONUS = new CastleLegendSkillEffectsEnum("XPConstructionBonus", "tooltip_XPConstructionBonus", 26);
    CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS = new CastleLegendSkillEffectsEnum("defenseMeleeBonus", "tooltip_defenseMeleeBonus", 27);
    CastleLegendSkillEffectsEnum.GUARD_AMOUNT_BONUS = new CastleLegendSkillEffectsEnum("guardAmountBonus", "tooltip_guardAmountBonus", 28);
    CastleLegendSkillEffectsEnum.XP_DEFENSE_BONUS = new CastleLegendSkillEffectsEnum("XPDefenseBonus", "tooltip_XPDefenseBonus", 29);
    CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS = new CastleLegendSkillEffectsEnum("defenseRangeBonus", "tooltip_defenseRangeBonus", 30);
    CastleLegendSkillEffectsEnum.TRAVEL_CONQUER_BOOST = new CastleLegendSkillEffectsEnum("travelConquerBoost", "tooltip_travelConquerBoost", 31);
    CastleLegendSkillEffectsEnum.ADDITIONAL_PEASANTS_AMOUNT = new CastleLegendSkillEffectsEnum("additionalPeasantsAmount", "tooltip_additionalPeasantsAmount", 31);
    CastleLegendSkillEffectsEnum.ADDITIONAL_UNIT_AMOUNT_ON_WALL = new CastleLegendSkillEffectsEnum("additionalUnitAmountOnWall", "tooltip_additionalUnitAmountOnWall", 32);
    CastleLegendSkillEffectsEnum.FIRE_BRIGADEBONUS = new CastleLegendSkillEffectsEnum("fireBrigadebonus", "tooltip_fireBrigadebonus", 33);
    CastleLegendSkillEffectsEnum.XP_ATTACK_PV_EBONUS = new CastleLegendSkillEffectsEnum("XPAttackPvEBonus", "tooltip_XPAttackPvEBonus", 34);
    CastleLegendSkillEffectsEnum.WALL_BONUS = new CastleLegendSkillEffectsEnum("wallBonus", "tooltip_wallBonus", 35);
    CastleLegendSkillEffectsEnum.DEFENSE_YARD_BONUS = new CastleLegendSkillEffectsEnum("defenseYardBonus", "tooltip_defenseYardBonus", 36);
    CastleLegendSkillEffectsEnum.MAGIC_FIND_BONUS = new CastleLegendSkillEffectsEnum("magicFindBonus", "tooltip_magicFindBonus", 37);
    CastleLegendSkillEffectsEnum.FAME_DEFENSE_BONUS = new CastleLegendSkillEffectsEnum("fameDefenseBonus", "tooltip_fameDefenseBonus", 38);
    CastleLegendSkillEffectsEnum.TRAVEL_RETURN_PV_EBOOST = new CastleLegendSkillEffectsEnum("travelReturnPvEBoostBonus", "tooltip_travelReturnPvEBoost", 39);
    CastleLegendSkillEffectsEnum.HIDEOUT_CAPACITY_BONUS = new CastleLegendSkillEffectsEnum("hideoutCapacityBonus", "tooltip_hideoutCapacityBonus", 40);
    CastleLegendSkillEffectsEnum.ADDITIONAL_DEFENSE_TOOL_SLOT_FLANK = new CastleLegendSkillEffectsEnum("additionalDefenseToolSlotFlank", "tooltip_additionalDefenseToolSlotFlank", 41);
    CastleLegendSkillEffectsEnum.MOAT_BONUS = new CastleLegendSkillEffectsEnum("moatBonus", "tooltip_moatBonus", 42);
    CastleLegendSkillEffectsEnum.ATTACK_BONUS = new CastleLegendSkillEffectsEnum("attackBonus", "tooltip_attackBonus", 43);
    CastleLegendSkillEffectsEnum.DEFENSE_BONUS = new CastleLegendSkillEffectsEnum("defenseBonus", "", 44);
  };
  return CastleLegendSkillEffectsEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.CastleLegendSkillEffectsEnum = __s0local0;
__s0local0.__initialize_static_members();
