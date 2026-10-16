Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function EffectSourceEnum(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._order = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EffectSourceEnum, __s1param0);
  Object.defineProperty(EffectSourceEnum.prototype, "order", {
    get: function () {
      return this._order;
    },
    enumerable: true,
    configurable: true
  });
  EffectSourceEnum.__initialize_static_members = function () {
    EffectSourceEnum.EQUIPMENT = new EffectSourceEnum("Equipment", 1);
    EffectSourceEnum.CI = new EffectSourceEnum("CI", 2);
    EffectSourceEnum.BUILDING = new EffectSourceEnum("Building", 3);
    EffectSourceEnum.DECO = new EffectSourceEnum("Deco", 4);
    EffectSourceEnum.EVENT = new EffectSourceEnum("Event", 5);
    EffectSourceEnum.RESEARCH = new EffectSourceEnum("Research", 6);
    EffectSourceEnum.ALLIANCE = new EffectSourceEnum("Alliance", 7);
    EffectSourceEnum.SUBSCRIPTION = new EffectSourceEnum("Subscription", 8);
    EffectSourceEnum.LEGEND = new EffectSourceEnum("Legend", 9);
    EffectSourceEnum.TITLES = new EffectSourceEnum("Titles", 10);
    EffectSourceEnum.GLOBAL_EFFECT = new EffectSourceEnum("Global", 11);
    EffectSourceEnum.CREST = new EffectSourceEnum("Crest", 12);
    EffectSourceEnum.VILLAGES = new EffectSourceEnum("Villages", 13);
    EffectSourceEnum.COA = new EffectSourceEnum("CoA", 13);
    EffectSourceEnum.ARE_BOSS = new EffectSourceEnum("ARE", 14);
    EffectSourceEnum.ADVISOR = new EffectSourceEnum("Advisor", 14);
  };
  EffectSourceEnum.getEffectSourceByServerKey = function (__s9param0) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_EQUIPMENT:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_GENERAL:
        return EffectSourceEnum.EQUIPMENT;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_BUILDING:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_TRAINING:
        return EffectSourceEnum.BUILDING;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_CONSTRUCTION_ITEM:
        return EffectSourceEnum.CI;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_OTHER:
        return EffectSourceEnum.EVENT;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_DECORATION:
        return EffectSourceEnum.DECO;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_RESEARCH:
        return EffectSourceEnum.RESEARCH;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_ALLIANCE_BUFF:
        return EffectSourceEnum.ALLIANCE;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_ALLIANCE_COAT:
        return EffectSourceEnum.COA;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_ALLIANCE_SUBSCRIPTION:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_PLAYER_SUBSCRIPTION:
        return EffectSourceEnum.SUBSCRIPTION;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_HIGH_LEVEL_HOL:
        return EffectSourceEnum.LEGEND;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_TITLE:
        return EffectSourceEnum.TITLES;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_GLOBAL_EFFECT:
        return EffectSourceEnum.GLOBAL_EFFECT;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_CREST_SYMBOL:
        return EffectSourceEnum.CREST;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_PRIVATE_VILLAGE:
        return EffectSourceEnum.VILLAGES;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_RAID_BOSS_STAGE_DEFENDER:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_RAID_BOSS_STAGE_ATTACKER:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_RAID_BOSS_BATTLE_DEFENDER:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_RAID_BOSS_BATTLE_ATTACKER:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_RAID_BOSS_POST_BATTLE_DEFENDER:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_RAID_BOSS_POST_BATTLE_ATTACKER:
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_RAID_BOSS_WALL_REGENERATION:
        return EffectSourceEnum.ARE_BOSS;
      case __dep_exact_26a421b704832cff.CommKeys.EFFECT_SOURCE_BARON_ADVISOR_SUBSCRIPTION:
        return EffectSourceEnum.ADVISOR;
    }
    return null;
  };
  return EffectSourceEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.EffectSourceEnum = __s0local0;
__s0local0.__initialize_static_members();
