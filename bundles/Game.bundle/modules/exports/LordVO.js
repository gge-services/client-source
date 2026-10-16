Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_GeneralVO = require("gge-module:export_GeneralVO");
var __dep_export_EffectValueMap = require("gge-module:export_EffectValueMap");
var __dep_export_EffectValueWodID = require("gge-module:export_EffectValueWodID");
var __s0local0 = function () {
  function LordVO() {
    this._rawLordEffects = [];
    this._areaEffects = [];
    this._id = -1;
    this._picID = 0;
    this._wins = 0;
    this._defeats = 0;
    this._winSpree = 0;
    this._isLocked = false;
    this._assignedGeneralVO = null;
    this._equipmentSlots = {};
  }
  Object.defineProperty(LordVO.prototype, "canUseEquipmentWarningIcon", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "helmetSlotVO", {
    get: function () {
      return this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "armorSlotVO", {
    get: function () {
      return this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "weaponSlotVO", {
    get: function () {
      return this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "artifactSlotVO", {
    get: function () {
      return this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "skinSlotVO", {
    get: function () {
      return this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "alienDummySlotVO", {
    get: function () {
      return this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "heroSlotVO", {
    get: function () {
      if (this._equipmentSlots) {
        return this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "everyEquipmentSlotIsUsed", {
    get: function () {
      var __s23local0 = 0;
      if (this._equipmentSlots != null) {
        for (var __s23local1 in this._equipmentSlots) {
          var __s23local2 = this._equipmentSlots[__s23local1];
          if (__s23local2 !== undefined && __s23local2.slotType != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN && __s23local2.equipmentVO != null) {
            __s23local0++;
          }
        }
      }
      return __s23local0 >= 5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "hasTemporaryItemsEquipped", {
    get: function () {
      var __s29local0 = false;
      if (this._equipmentSlots != null) {
        for (var __s29local1 in this._equipmentSlots) {
          var __s29local2 = this._equipmentSlots[__s29local1];
          if (__s29local2 !== undefined && __s29local2.slotType != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN && __s29local2.equipmentVO && !__s29local2.equipmentVO.isPermanent) {
            __s29local0 = true;
          }
        }
      }
      return __s29local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "amountOfEquipmentItems", {
    get: function () {
      var __s35local0 = 0;
      if (this._equipmentSlots != null) {
        for (var __s35local1 in this._equipmentSlots) {
          var __s35local2 = this.equipmentSlots[__s35local1];
          if (__s35local2 !== undefined && __s35local2.equipmentVO != null) {
            __s35local0++;
          }
        }
      }
      return __s35local0;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.parseAllianceTowerBuffInfo = function (__s41param0, __s41param1 = true) {
    this._rawLordEffects = [];
    if (__s41param0 && (!__s41param1 || __s41param0.isActive)) {
      for (var __s41local0 = 0, __s41local1 = __s41param0.currentEffects; __s41local0 < __s41local1.length; __s41local0++) {
        var __s41local2 = __s41local1[__s41local0];
        if (__s41local2 !== undefined && __s41local2.currentLevel > 0) {
          this._rawLordEffects.push(__s41local2.currentBonusVO.clone());
        }
      }
    }
  };
  LordVO.prototype.parseLord = function (__s47param0, __s47param1 = false, __s47param2 = false) {
    if (__s47param0) {
      this._id = __dep_exact_f855840627e6e145.int(__s47param0.ID);
      this._equipmentSlots = {};
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET);
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR);
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON);
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT);
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN);
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO);
      this._rawLordEffects = this.parseRawEffects(__s47param0.E);
      this.areaEffects = this.parseRawEffects(__s47param0.AE);
      this._wins = __dep_exact_f855840627e6e145.int(__s47param0.W);
      this._defeats = __dep_exact_f855840627e6e145.int(__s47param0.D);
      this._winSpree = __dep_exact_f855840627e6e145.int(__s47param0.SPR);
      var __s47local0 = __s47param0.AIE ? __s47param0.AIE : __s47param0.TAE ? __s47param0.TAE : null;
      if (__s47param0.EQ && __s47param0.EQ.length > 0 && !__s47param2) {
        for (var __s47local1 = 0, __s47local2 = __s47param0.EQ; __s47local1 < __s47local2.length; __s47local1++) {
          var __s47local3 = __s47local2[__s47local1];
          if (__s47local3 !== undefined) {
            var __s47local4 = __dep_export_CastleEquipmentFactory.CastleEquipmentFactory.createEquipmentVO(__s47local3);
            switch (__s47local3[1]) {
              case __dep_exact_26a421b704832cff.EquipmentConst.SLOT_ARMOR:
                this.armorSlotVO.equipmentVO = __s47local4;
                break;
              case __dep_exact_26a421b704832cff.EquipmentConst.SLOT_ARTIFACT:
                this.artifactSlotVO.equipmentVO = __s47local4;
                break;
              case __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HELMET:
                this.helmetSlotVO.equipmentVO = __s47local4;
                break;
              case __dep_exact_26a421b704832cff.EquipmentConst.SLOT_SKIN:
                this.skinSlotVO.equipmentVO = __s47local4;
                break;
              case __dep_exact_26a421b704832cff.EquipmentConst.SLOT_WEAPON:
                this.weaponSlotVO.equipmentVO = __s47local4;
                break;
              case __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HERO:
                this.heroSlotVO.equipmentVO = __s47local4;
            }
          }
        }
      } else if (__s47local0 && !__s47param2) {
        var __s47local5;
        var __s47local6 = [];
        if (__s47local0.length != 2 || __s47local0[0].length != 0 && !Array.isArray(__s47local0[0][0]) || __s47local0[1].length != 0 && !Array.isArray(__s47local0[1][0])) {
          __s47local5 = __s47local0;
        } else {
          __s47local6 = __s47local0[0];
          __s47local5 = __s47local0[1];
        }
        if (__s47local6.length > 0) {
          this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO);
          var __s47local7 = new __dep_export_AlienLordHeroVO.AlienLordHeroVO();
          __s47local7.parseAlienBoniData(__s47local6);
          this.heroSlotVO.equipmentVO = __s47local7;
        }
        this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL);
        var __s47local8 = new __dep_export_AlienLordEquipmentVO.AlienLordEquipmentVO();
        __s47local8.parseAlienBoniData(__s47local5);
        __s47local8.parseGemBoniData(__s47param0.GEM);
        this.alienDummySlotVO.equipmentVO = __s47local8;
      }
      this._picID = __dep_exact_f855840627e6e145.int(__s47param0.VIS);
      this._name = __s47param0.N;
      this.parseGeneral(__s47param0, __s47param1);
    }
  };
  LordVO.prototype.parseGeneral = function (__s59param0, __s59param1 = false) {
    var __s59local0 = __s59param0.GID;
    if (__s59local0 > 0 && __s59param1) {
      if (__dep_export_CastleModel.CastleModel.generalsData.generalXmlVOs.has(__s59local0)) {
        this.assignedGeneralVO = new __dep_export_GeneralVO.GeneralVO(__s59local0);
        this.assignedGeneralVO.parseData(__s59param0);
        this.assignedGeneralVO.assignedLord = this;
      }
    } else {
      this.assignedGeneralVO = __dep_export_CastleModel.CastleModel.generalsData.playerGenerals.get(__s59local0);
    }
  };
  LordVO.prototype.parseRawEffects = function (__s64param0) {
    var __s64local0 = [];
    if (__s64param0) {
      for (var __s64local1 = 0; __s64local1 < __s64param0.length; ++__s64local1) {
        var __s64local2 = __s64param0[__s64local1];
        var __s64local3 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s64local2[0]);
        if (__s64local3) {
          var __s64local4 = new __dep_export_RawLordEffectBonusVO.RawLordEffectBonusVO();
          __s64local4.parseFromValueArray(__s64local3, __s64local2[1], __s64local2[2]);
          if (__s64local4.effect) {
            __s64local0.push(__s64local4);
          }
        } else {
          console.log("unknown effectID: " + __s64local2[0]);
        }
      }
    }
    return __s64local0;
  };
  LordVO.prototype.createUnknownLord = function () {
    this._id = -1;
    this._equipmentSlots = {};
    this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET);
    this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR);
    this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON);
    this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT);
    this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN);
    this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO] = new __dep_export_CastleEquipmentSlotVO.CastleEquipmentSlotVO(__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO);
    this._wins = 0;
    this._defeats = 0;
    this._winSpree = 0;
    this._picID = -1;
    this._name = __dep_exact_92d05af59ee2ff30.Localize.text("Unknown_name");
  };
  LordVO.prototype.copyFromLord = function (__s74param0) {
    this.createUnknownLord();
    this._id = __s74param0._id;
    this._wins = __s74param0._wins;
    this._defeats = __s74param0._defeats;
    this._winSpree = __s74param0._winSpree;
    this._picID = __s74param0._picID;
    this._name = __s74param0._name;
    if (__s74param0._equipmentSlots) {
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET] = __s74param0._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET];
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR] = __s74param0._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR];
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON] = __s74param0._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON];
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT] = __s74param0._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT];
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN] = __s74param0._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN];
      this._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO] = __s74param0._equipmentSlots[__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO];
    }
    this._rawLordEffects = __s74param0._rawLordEffects;
    this._areaEffects = __s74param0._areaEffects;
    this.assignedGeneralVO = __s74param0.assignedGeneralVO;
  };
  Object.defineProperty(LordVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.getUniqueBoni = function (__s79param0 = false, __s79param1 = null, __s79param2 = -1, __s79param3 = null, __s79param4 = false, __s79param5 = true) {
    var __s79local0 = [];
    if (this.equipmentSlots && __s79param5) {
      for (var __s79local1 in this.equipmentSlots) {
        var __s79local2 = __dep_exact_81dacdf05bd32292.castAs(this.equipmentSlots[__s79local1], "CastleEquipmentSlotVO");
        if (__s79local2 && __s79local2.equipmentVO) {
          __s79local0 = __s79local0.concat(this.checkConditions(__s79local2.equipmentVO.boni, __s79param1, __s79param2, __s79param3));
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s79local2.equipmentVO, "RelicEquipmentVO")) {
            var __s79local3 = __s79local2.equipmentVO;
            __s79local0 = __s79local0.concat(this.checkConditions(__s79local3.relicInfoVO.relicBoni, __s79param1, __s79param2, __s79param3));
          }
          if (__s79local2.equipmentVO.gemVO) {
            __s79local0 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s79local2.equipmentVO.gemVO, "CastleGemVO") ? __s79local0.concat(this.checkConditions(__s79local2.equipmentVO.gemVO.boni, __s79param1, __s79param2, __s79param3)) : __s79local0.concat(this.checkConditions(__s79local2.equipmentVO.gemVO.relicInfoVO.relicBoni, __s79param1, __s79param2, __s79param3));
          }
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s79local2.equipmentVO, "AlienLordEquipmentVO")) {
            var __s79local4 = __s79local2.equipmentVO.alienGems;
            if (__s79local4 != null) {
              for (var __s79local5 = 0, __s79local6 = __s79local4; __s79local5 < __s79local6.length; __s79local5++) {
                var __s79local7 = __s79local6[__s79local5];
                if (__s79local7 !== undefined) {
                  __s79local0 = __s79local0.concat(this.checkConditions(__s79local7.boni, __s79param1, __s79param2, __s79param3));
                }
              }
            }
          }
        }
      }
    }
    __s79local0 = (__s79local0 = __s79local0.concat(this.checkConditions(this._rawLordEffects, __s79param1, __s79param2, __s79param3))).concat(this.checkConditions(this._areaEffects, __s79param1, __s79param2, __s79param3));
    var __s79local8 = this.setCounts;
    var __s79local9 = [];
    if (__s79local8 != null) {
      for (var __s79local10 = 0, __s79local11 = Array.from(__s79local8.keys()); __s79local10 < __s79local11.length; __s79local10++) {
        var __s79local12 = __s79local1 = __s79local11[__s79local10];
        if (__s79local12 !== undefined) {
          var __s79local13 = __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEquipmentSet(__s79local12);
          if (__s79local13) {
            var __s79local14 = __dep_exact_f855840627e6e145.int(__s79local8.get(__s79local12));
            for (var __s79local15 = 0; __s79local15 < __s79local13.neededItemThresholds.length; __s79local15++) {
              if (__s79local13.neededItemThresholds[__s79local15] <= __s79local14) {
                __s79local9.push(__s79local13.effects[__s79local15].clone());
              }
            }
          }
        }
      }
    }
    __s79local0 = __s79local0.concat(this.checkConditions(__s79local9, __s79param1, __s79param2, __s79param3));
    if (__s79param4 && this.assignedGeneralVO) {
      __s79local0 = __s79local0.concat(this.checkConditions(this.assignedGeneralVO.getPassiveEffects(), __s79param1, __s79param2, __s79param3));
    }
    return this.mergeBoni(__s79local0, __s79param0);
  };
  LordVO.prototype.checkConditions = function (__s101param0, __s101param1, __s101param2, __s101param3) {
    __s101param3 ||= __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_ACTIVE;
    var __s101local0 = [];
    for (var __s101local1 = __dep_exact_f855840627e6e145.int(__s101param0.length), __s101local2 = 0; __s101local2 < __s101local1; __s101local2++) {
      if (__s101param3.isEffectTypeIncluded(__s101param0[__s101local2].effect.effectType) && __s101param0[__s101local2].matchesConditions(__s101param1, __s101param2)) {
        if (__s101param3 != __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_ACTIVE && __s101param3 != __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_PASSIVE) {
          if (this.isFilterStrategyPVE(__s101param3) && __s101param0[__s101local2].effect.isPvPFight) {
            continue;
          }
          if (!this.isFilterStrategyPVE(__s101param3) && __s101param0[__s101local2].effect.isPvEFight) {
            continue;
          }
        }
        __s101local0.push(__s101param0[__s101local2]);
      }
    }
    return __s101local0;
  };
  LordVO.prototype.isFilterStrategyPVE = function (__s109param0) {
    return __s109param0 == __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_DEFENCE_PVE || __s109param0 == __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_ATTACK_PVE;
  };
  LordVO.prototype.mergeBoni = function (__s111param0, __s111param1) {
    var __s111local0 = new Map();
    var __s111local1 = new Map();
    var __s111local2 = [];
    if (__s111param0 != null) {
      for (var __s111local3 = 0, __s111local4 = __s111param0; __s111local3 < __s111local4.length; __s111local3++) {
        var __s111local5 = __s111local4[__s111local3];
        if (__s111local5 !== undefined) {
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s111local5, "GemBonusVO") && __s111local5.triggerChance != 100) {
            __s111local2.push(__s111local5);
          } else if (__s111local5.maxValueStrength == Number.MAX_VALUE) {
            if (!__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(__s111local1, __s111local5.effect.effectID)) {
              __s111local1.set(__s111local5.effect.effectID, []);
            }
            __s111local1.get(__s111local5.effect.effectID).push(__s111local5);
          } else {
            if (!__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(__s111local0, __s111local5.effect.effectID)) {
              __s111local0.set(__s111local5.effect.effectID, []);
            }
            __s111local0.get(__s111local5.effect.effectID).push(__s111local5);
          }
        }
      }
    }
    return __s111local2 = (__s111local2 = __s111local2.concat(this.mergeBoniWithSameEffectID(__s111local0, __s111param1))).concat(this.mergeBoniWithSameEffectID(__s111local1, true));
  };
  LordVO.prototype.mergeBoniWithSameEffectID = function (__s122param0, __s122param1 = false) {
    var __s122local0 = [];
    Array.from(__s122param0.values()).forEach(function (__s124param0) {
      var __s124local0 = [];
      __s124param0.forEach(function (__s126param0) {
        var __s126local0 = false;
        __s124local0.forEach(function (__s128param0) {
          if (!(__s128param0.effectValue instanceof __dep_export_EffectValueWodID.EffectValueWodID) || !(__s126param0.effectValue instanceof __dep_export_EffectValueWodID.EffectValueWodID) || __s128param0.effectValue.firstWodID == __s126param0.effectValue.firstWodID) {
            if (!(__s128param0.effectValue instanceof __dep_export_EffectValueMap.EffectValueMap) || __s128param0.effectValue instanceof __dep_export_EffectValueMap.EffectValueMap && __s128param0.effectValue.rawValues[0] == __s126param0.effectValue.rawValues[0]) {
              __s128param0.effectValue.add(__s126param0.effectValue, __s122param1 ? null : [__dep_export_CastleModel.CastleModel.effectsData.getEffectCap(__s126param0.effect.capId).maxTotalBonus]);
              __s126param0.effectSources.forEach(function (__s132param0) {
                __s128param0.addEffectSource(__s132param0);
              });
              __s126local0 = true;
              return;
            } else {
              return undefined;
            }
          }
        });
        if (!__s126local0) {
          __s124local0.push(__s126param0.clone());
        }
      });
      __s122local0 = __s122local0.concat(__s124local0);
    });
    return __s122local0;
  };
  LordVO.prototype.getEffectValue = function (__s136param0, __s136param1 = -1, __s136param2 = -1, __s136param3 = -1, __s136param4 = null) {
    var __s136local0 = [];
    var __s136local1 = __dep_exact_f855840627e6e145.int(__s136param1 < 0 && __dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo ? __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType : __s136param1);
    var __s136local2 = __dep_exact_f855840627e6e145.int(__s136param2 < 0 && __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId : __s136param2);
    if (this.equipmentSlots != null) {
      for (var __s136local3 in this.equipmentSlots) {
        var __s136local4 = this.equipmentSlots[__s136local3];
        if (__s136local4 !== undefined) {
          var __s136local5 = __s136local4.equipmentVO;
          if (__s136local5) {
            if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s136local5, "RelicEquipmentVO")) {
              this.addRelevantEffectsToList(__s136local0, __s136local5.relicInfoVO.relicBoni, __s136param0, __s136local1, __s136local2, __s136param3, __s136param4);
            } else {
              this.addRelevantEffectsToList(__s136local0, __s136local5.boni, __s136param0, __s136local1, __s136local2, __s136param3, __s136param4);
            }
            var __s136local6 = __s136local5.gemVO;
            if (__s136local6) {
              if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s136local6, "RelicGemVO")) {
                this.addRelevantEffectsToList(__s136local0, __s136local6.relicInfoVO.relicBoni, __s136param0, __s136local1, __s136local2, __s136param3, __s136param4);
              } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s136local6, "CastleGemVO")) {
                this.addRelevantEffectsToList(__s136local0, __s136local6.boni, __s136param0, __s136local1, __s136local2, __s136param3, __s136param4);
              }
            }
          }
        }
      }
    }
    var __s136local7 = this.setCounts;
    if (__s136local7 != null) {
      var __s136local8 = [];
      for (var __s136local9 = 0, __s136local10 = Array.from(__s136local7.keys()); __s136local9 < __s136local10.length; __s136local9++) {
        var __s136local11 = __s136local3 = __s136local10[__s136local9];
        if (__s136local11 !== undefined) {
          var __s136local12 = __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEquipmentSet(__s136local11);
          if (__s136local12) {
            var __s136local13 = __dep_exact_f855840627e6e145.int(__s136local7.get(__s136local11));
            for (var __s136local14 = 0; __s136local14 < __s136local12.neededItemThresholds.length; __s136local14++) {
              if (__s136local12.neededItemThresholds[__s136local14] <= __s136local13) {
                __s136local8.push(__s136local12.effects[__s136local14].clone());
              }
            }
          }
        }
      }
      this.addRelevantEffectsToList(__s136local0, __s136local8, __s136param0, __s136local1, __s136local2, __s136param3, __s136param4);
    }
    if (this.assignedGeneralVO) {
      this.addRelevantEffectsToList(__s136local0, this.assignedGeneralVO.getPassiveEffects(), __s136param0, __s136local1, __s136local2, __s136param3, __s136param4);
    }
    if (__s136local0.length > 0) {
      var __s136local15 = __s136local0[0].clone();
      if (__s136local0.length > 1) {
        for (var __s136local16 = 1; __s136local16 < __s136local0.length; ++__s136local16) {
          __s136local15.effectValue.add(__s136local0[__s136local16].effectValue, [__s136local15.maxValueStrength]);
        }
      }
      return __s136local15.effectValue.strength;
    }
    return 0;
  };
  LordVO.prototype.addRelevantEffectsToList = function (__s161param0, __s161param1, __s161param2, __s161param3, __s161param4, __s161param5, __s161param6 = null) {
    if (__s161param1 != null) {
      for (var __s161local0 = 0, __s161local1 = __s161param1; __s161local0 < __s161local1.length; __s161local0++) {
        var __s161local2 = __s161local1[__s161local0];
        if (__s161local2 !== undefined && __s161local2.matchesConditions(__s161param2, __s161param3, __s161param4, __s161param5)) {
          if (__s161param6 && __s161param6 != __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_ACTIVE && __s161param6 != __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_FULL_PASSIVE) {
            if (this.isFilterStrategyPVE(__s161param6) && __s161local2.effect.isPvPFight) {
              continue;
            }
            if (!this.isFilterStrategyPVE(__s161param6) && __s161local2.effect.isPvEFight) {
              continue;
            }
          }
          __s161param0.push(__s161local2);
        }
      }
    }
  };
  Object.defineProperty(LordVO.prototype, "setCounts", {
    get: function () {
      var __s170local0 = new Map();
      var __s170local1 = [];
      var __s170local2 = 0;
      if (this.equipmentSlots != null) {
        for (var __s170local3 in this.equipmentSlots) {
          var __s170local4 = this.equipmentSlots[__s170local3];
          if (__s170local4 !== undefined && __s170local4.equipmentVO) {
            if (__s170local4.equipmentVO.hasSetbonus) {
              __s170local2 = __dep_exact_f855840627e6e145.int(__s170local4.equipmentVO.setID);
              __s170local0.set(__s170local2, __s170local0.get(__s170local2) ? __s170local0.get(__s170local2) + 1 : 1);
            }
            if (__s170local4.equipmentVO.gemVO && __s170local4.equipmentVO.gemVO.setID > 0 && __s170local1.indexOf(__s170local4.equipmentVO.gemVO.id) == -1) {
              __s170local1.push(__s170local4.equipmentVO.gemVO.id);
              __s170local2 = __dep_exact_f855840627e6e145.int(__s170local4.equipmentVO.gemVO.setID);
              __s170local0.set(__s170local2, __s170local0.get(__s170local2) ? __s170local0.get(__s170local2) + 1 : 1);
            }
          }
        }
      }
      return __s170local0;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.setEquipment = function (__s178param0) {
    switch (__s178param0.slotType) {
      case __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR:
        this.armorSlotVO.equipmentVO = __s178param0;
        break;
      case __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT:
        this.artifactSlotVO.equipmentVO = __s178param0;
        break;
      case __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET:
        this.helmetSlotVO.equipmentVO = __s178param0;
        break;
      case __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN:
        this.skinSlotVO.equipmentVO = __s178param0;
        break;
      case __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON:
        this.weaponSlotVO.equipmentVO = __s178param0;
        break;
      case __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO:
        this.heroSlotVO.equipmentVO = __s178param0;
    }
  };
  LordVO.prototype.getCountOfSetId = function (__s181param0) {
    if (this.setCounts.get(__s181param0)) {
      return __dep_exact_f855840627e6e145.int(this.setCounts.get(__s181param0));
    } else {
      return 0;
    }
  };
  LordVO.prototype.hasUniqueItemEquipped = function (__s185param0) {
    if (this.equipmentSlots != null) {
      for (var __s185local0 in this.equipmentSlots) {
        var __s185local1 = this.equipmentSlots[__s185local0];
        if (__s185local1 !== undefined && __s185local1.equipmentVO && __s185param0) {
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s185param0, "CastleGemVO") && __s185local1.equipmentVO.gemVO) {
            if (__s185param0.id == __s185local1.equipmentVO.gemVO.id) {
              return true;
            }
          } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s185param0, "BasicEquipmentVO") && __s185param0.uniqueID == __s185local1.equipmentVO.uniqueID) {
            return true;
          }
        }
      }
    }
    return false;
  };
  Object.defineProperty(LordVO.prototype, "equipmentSlots", {
    get: function () {
      return this._equipmentSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "picID", {
    get: function () {
      return this._picID;
    },
    set: function (__s198param0) {
      this._picID = __s198param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "heroPicVisClassName", {
    get: function () {
      return this.heroSlotVO.equipmentVO.visClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "heroPicAssetURL", {
    get: function () {
      return this.heroSlotVO.equipmentVO.visClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "isAvailableForMovement", {
    get: function () {
      if (this._isLocked) {
        return true;
      }
      for (var __s204local0 = 0, __s204local1 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s204local0 < __s204local1.length; __s204local0++) {
        var __s204local2 = __s204local1[__s204local0];
        if (__s204local2.isMyMovement && __s204local2.lordVO && __s204local2.lordVO.id == this.id) {
          return false;
        }
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "isAvailableForEquip", {
    get: function () {
      if (this._isLocked) {
        return false;
      }
      for (var __s210local0 = 0, __s210local1 = Array.from(__dep_export_CastleModel.CastleModel.armyData.mapMovements.values()); __s210local0 < __s210local1.length; __s210local0++) {
        var __s210local2 = __s210local1[__s210local0];
        if (__s210local2.isMyMovement && __s210local2.lordVO && __s210local2.lordVO.id == this.id) {
          return false;
        }
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "isAvailableForGeneralAssignement", {
    get: function () {
      return this.isAvailableForEquip;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.getFeatherClassName = function () {
    return null;
  };
  LordVO.prototype.getFeatherAsset = function () {
    return "Lord_Icons";
  };
  LordVO.prototype.getVisClassName = function () {
    return "";
  };
  LordVO.prototype.getVisAsset = function () {
    return "";
  };
  Object.defineProperty(LordVO.prototype, "isHero", {
    get: function () {
      return !!this.heroSlotVO && this.heroSlotVO.equipmentVO != null && (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.heroSlotVO.equipmentVO, "AlienLordHeroVO") || this.heroSlotVO.equipmentVO.itemGroupID != 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "rareID", {
    get: function () {
      return this.heroSlotVO.equipmentVO.visualRareID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "wins", {
    get: function () {
      return this._wins;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "defeats", {
    get: function () {
      return this._defeats;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "winSpree", {
    get: function () {
      return this._winSpree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "name", {
    get: function () {
      if (this._name) {
        return new __dep_exact_92d05af59ee2ff30_1.TextVO(this._name);
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.TextVO("");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "defaultName", {
    get: function () {
      return this.name;
    },
    enumerable: true,
    configurable: true
  });
  LordVO.prototype.lock = function () {
    this._isLocked = true;
  };
  LordVO.prototype.unlock = function () {
    this._isLocked = false;
  };
  Object.defineProperty(LordVO.prototype, "label", {
    get: function () {
      return this.name.compose();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "isBaron", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "rawLordEffects", {
    get: function () {
      return this._rawLordEffects;
    },
    set: function (__s252param0) {
      this._rawLordEffects = __s252param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "areaEffects", {
    get: function () {
      return this._areaEffects;
    },
    set: function (__s256param0) {
      var __s256local0 = [];
      if (__s256param0 && __s256param0.length > 0) {
        this._areaEffects = __s256param0.filter(function (__s259param0) {
          return !!__s259param0.effect && __s256local0.indexOf(__s259param0.effect.effectType.type) == -1;
        });
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LordVO.prototype, "assignedGeneralVO", {
    get: function () {
      return this._assignedGeneralVO;
    },
    set: function (__s263param0) {
      this._assignedGeneralVO = __s263param0;
    },
    enumerable: true,
    configurable: true
  });
  return LordVO;
}();
exports.LordVO = __s0local0;
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEquipmentFactory = require("gge-module:export_CastleEquipmentFactory");
var __dep_export_AlienLordEquipmentVO = require("gge-module:export_AlienLordEquipmentVO");
var __dep_export_AlienLordHeroVO = require("gge-module:export_AlienLordHeroVO");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleEquipmentSlotVO = require("gge-module:export_CastleEquipmentSlotVO");
var __dep_export_RawLordEffectBonusVO = require("gge-module:export_RawLordEffectBonusVO");
