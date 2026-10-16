Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_C2SGeneralsHUBStatusVO = require("gge-module:export_C2SGeneralsHUBStatusVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_GeneralAbilityEffectXmlVO = require("gge-module:export_GeneralAbilityEffectXmlVO");
var __dep_export_GeneralAbilityXmlVO = require("gge-module:export_GeneralAbilityXmlVO");
var __dep_export_GeneralGeneralSlotXmlVO = require("gge-module:export_GeneralGeneralSlotXmlVO");
var __dep_export_GeneralRarityXmlVO = require("gge-module:export_GeneralRarityXmlVO");
var __dep_export_GeneralsHubQuestVO = require("gge-module:export_GeneralsHubQuestVO");
var __dep_export_GeneralsXPItemVO = require("gge-module:export_GeneralsXPItemVO");
var __dep_export_GeneralVO = require("gge-module:export_GeneralVO");
var __dep_export_GeneralXmlVO = require("gge-module:export_GeneralXmlVO");
var __dep_export_GeneralSkillTreeRoot = require("gge-module:export_GeneralSkillTreeRoot");
var __dep_export_GeneralSkillVO = require("gge-module:export_GeneralSkillVO");
var __dep_export_GeneralUnlockRequirementSpentPointsInTier = require("gge-module:export_GeneralUnlockRequirementSpentPointsInTier");
var __s0local0 = function (__s1param0) {
  function GeneralsData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.requestedHubQuestUpdate = false;
    __s3local0._generalXmlVOs = new Map();
    __s3local0._playerGenerals = new Map();
    __s3local0._npcGenerals = new Map();
    __s3local0._hubQuests = new Map();
    __s3local0._generalAbilitiesByID = new Map();
    __s3local0._generalAbilitiesByGroupID = new Map();
    __s3local0._generalAbilityEffects = new Map();
    __s3local0._generalSlots = new Map();
    __s3local0._generalSkills = new Map();
    __s3local0._generalRarity = new Map();
    __s3local0._generalXPItems = new Map();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsData, __s1param0);
  GeneralsData.prototype.init = function (__s5param0) {
    var __s5local0 = __s5param0.generals;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_GeneralXmlVO.GeneralXmlVO(__s5local3);
          this._generalXmlVOs.set(__s5local4.generalID, __s5local4);
          var __s5local5 = new __dep_export_GeneralVO.GeneralVO(__s5local4.generalID);
          if (__s5local5.isNPCGeneral) {
            this._npcGenerals.set(__s5local5.generalID, __s5local5);
          } else {
            this._playerGenerals.set(__s5local5.generalID, __s5local5);
          }
        }
      }
    }
    for (var __s5local6 = 0, __s5local7 = __s5param0.characters; __s5local6 < __s5local7.length; __s5local6++) {
      var __s5local8 = __s5local7[__s5local6];
      if (__s5local8 !== undefined) {
        var __s5local9 = new __dep_export_GeneralsHubQuestVO.GeneralsHubQuestVO(__s5local8);
        this._hubQuests.set(__s5local9.characterID, __s5local9);
      }
    }
    for (var __s5local10 = 0, __s5local11 = __s5param0.generalAbilities; __s5local10 < __s5local11.length; __s5local10++) {
      var __s5local12 = __s5local11[__s5local10];
      if (__s5local12 !== undefined) {
        var __s5local13 = new __dep_export_GeneralAbilityXmlVO.GeneralAbilityXmlVO(__s5local12);
        if (!this._generalAbilitiesByGroupID.get(__s5local13.abilityGroupID)) {
          this._generalAbilitiesByGroupID.set(__s5local13.abilityGroupID, []);
        }
        this._generalAbilitiesByID.set(__s5local13.abilityID, __s5local13);
        this._generalAbilitiesByGroupID.get(__s5local13.abilityGroupID).push(__s5local13);
      }
    }
    for (var __s5local14 = 0, __s5local15 = __s5param0.generalSlots; __s5local14 < __s5local15.length; __s5local14++) {
      var __s5local16 = __s5local15[__s5local14];
      if (__s5local16 !== undefined) {
        var __s5local17 = new __dep_export_GeneralGeneralSlotXmlVO.GeneralGeneralSlotXmlVO(__s5local16);
        this._generalSlots.set(__s5local17.slotID, __s5local17);
      }
    }
    for (var __s5local18 = 0, __s5local19 = __s5param0.generalAbilityEffects; __s5local18 < __s5local19.length; __s5local18++) {
      var __s5local20 = __s5local19[__s5local18];
      if (__s5local20 !== undefined) {
        var __s5local21 = new __dep_export_GeneralAbilityEffectXmlVO.GeneralAbilityEffectXmlVO(__s5local20);
        this._generalAbilityEffects.set(__s5local21.abilityEffectID, __s5local21);
      }
    }
    for (var __s5local22 = 0, __s5local23 = __s5param0.generalRarities; __s5local22 < __s5local23.length; __s5local22++) {
      var __s5local24 = __s5local23[__s5local22];
      if (__s5local24 !== undefined) {
        var __s5local25 = new __dep_export_GeneralRarityXmlVO.GeneralRarityXmlVO(__s5local24);
        this._generalRarity.set(__s5local25.generalRarityID, __s5local25);
      }
    }
    for (var __s5local26 = 0, __s5local27 = __s5param0.generalXpItems; __s5local26 < __s5local27.length; __s5local26++) {
      var __s5local28 = __s5local27[__s5local26];
      if (__s5local28 !== undefined) {
        var __s5local29 = new __dep_export_GeneralsXPItemVO.GeneralsXPItemVO(__s5local28);
        this._generalXPItems.set(__s5local29.currencyID, __s5local29);
      }
    }
    var __s5local30 = __s5param0.generalSkills;
    this._generalSkillTrees = new __dep_export_GeneralSkillTreeRoot.GeneralSkillTreeRoot(0);
    if (__s5local30 != null) {
      for (var __s5local31 = 0, __s5local32 = __s5local30; __s5local31 < __s5local32.length; __s5local31++) {
        var __s5local33 = __s5local32[__s5local31];
        var __s5local34 = new __dep_export_GeneralSkillVO.GeneralSkillVO();
        __s5local34.parseXML(__s5local33);
        this._generalSkills.set(__s5local34.id, __s5local34);
        this._generalSkillTrees.insertSkill(__s5local34);
      }
    }
    var __s5local35 = __s5param0.generalSkillTiers;
    if (__s5local35 != null) {
      for (var __s5local36 = 0, __s5local37 = __s5local35; __s5local36 < __s5local37.length; __s5local36++) {
        var __s5local38 = __s5local37[__s5local36];
        var __s5local39 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("generalID", __s5local38, "-1"));
        var __s5local40 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tier", __s5local38, "-1"));
        var __s5local41 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hidden", __s5local38, "0")) == 1;
        var __s5local42 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("previousTierRequiredSkillPoints", __s5local38, "-1"));
        var __s5local43 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minGeneralStarTier", __s5local38, "-1"));
        if (__s5local39 >= 0 && __s5local40 > 0 && __s5local42 > 0) {
          var __s5local44 = this.getSkillTreeNode(__s5local39, __s5local40);
          if (__s5local44) {
            __s5local44.isHidden = __s5local41;
            var __s5local45 = new __dep_export_GeneralUnlockRequirementSpentPointsInTier.GeneralUnlockRequirementSpentPointsInTier(__s5local39, __s5local40 - 1, __s5local42, __s5local43);
            __s5local44.addUnlockRequirement(__s5local45);
          }
        }
        if (__s5local41) {
          var __s5local46 = this.getSkillTreeNode(__s5local39);
          if (__s5local46) {
            __s5local46.isIncomplete = true;
          }
        }
      }
    }
  };
  GeneralsData.prototype.getGeneralXMLVOByTokenID = function (__s42param0) {
    var __s42local0 = null;
    this._generalXmlVOs.forEach(function (__s44param0) {
      if (__s44param0.unlockCurrencyID == __s42param0) {
        __s42local0 = __s44param0;
      }
    });
    return __s42local0;
  };
  GeneralsData.prototype.getGeneralsHubQuestVOByCharacterID = function (__s47param0) {
    return this._hubQuests.get(__s47param0);
  };
  GeneralsData.prototype.parse_GIE = function (__s49param0) {
    var __s49local0 = this;
    __s49param0.G.forEach(function (__s51param0) {
      var __s51local0 = __s49local0._playerGenerals.get(__s51param0.GID);
      if (__s51local0) {
        __s51local0.parseData(__s51param0);
      }
    });
    this.dispatchEvent(new __dep_export_GeneralsEvent.GeneralsEvent(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED));
  };
  GeneralsData.prototype.parse_SCT = function (__s54param0) {
    var __s54local0 = this.getGeneralsHubQuestVOByCharacterID(__s54param0.CH.CID);
    __s54local0.parseServerObject(__s54param0.CH);
    var __s54local1 = __s54param0.LTR;
    this.dispatchEvent(new __dep_export_GeneralsEvent.GeneralsEvent(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, [__s54local0, __s54local1]));
  };
  GeneralsData.prototype.updateAssignedLords = function () {
    this._playerGenerals.forEach(function (__s58param0) {
      return __s58param0.assignedLord = __dep_export_CastleModel.CastleModel.lordData.getAssignedLord(__s58param0);
    });
    this.dispatchEvent(new __dep_export_GeneralsEvent.GeneralsEvent(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED));
  };
  GeneralsData.prototype.requestQuestUpdateData = function () {
    if (!this.requestedHubQuestUpdate) {
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralsHUBStatusVO.C2SGeneralsHUBStatusVO());
    }
    this.requestedHubQuestUpdate = true;
  };
  GeneralsData.prototype.parse_GCS = function (__s63param0) {
    for (var __s63local0 = 0; __s63local0 < __s63param0.CHR.length; __s63local0++) {
      this.getGeneralsHubQuestVOByCharacterID(__s63param0.CHR[__s63local0].CID).parseServerObject(__s63param0.CHR[__s63local0]);
    }
    this.requestedHubQuestUpdate = false;
    this.dispatchEvent(new __dep_export_GeneralsEvent.GeneralsEvent(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED));
  };
  GeneralsData.prototype.getAllGeneralsHubQuestIDs = function () {
    var __s67local0 = [];
    this._hubQuests.forEach(function (__s69param0) {
      __s67local0.push(__s69param0.characterID);
    });
    return __s67local0;
  };
  GeneralsData.prototype.getSkillById = function (__s71param0) {
    return this._generalSkills.get(__s71param0);
  };
  GeneralsData.prototype.getSkillTreeNode = function (__s73param0, __s73param1, __s73param2, __s73param3) {
    var __s73local0;
    if (__s73param1 === undefined) {
      __s73param1 = 0;
    }
    if (__s73param2 === undefined) {
      __s73param2 = 0;
    }
    if (__s73param3 === undefined) {
      __s73param3 = 0;
    }
    __s73local0 = this._generalSkillTrees.getChildNode(__s73param0);
    if (__s73param1 > 0) {
      __s73local0 = __s73local0.getChildNode(__s73param1);
      if (__s73param2 > 0) {
        __s73local0 = __s73local0.getChildNode(__s73param2);
        if (__s73param3 > 0) {
          __s73local0 = __s73local0.getChildNode(__s73param3);
        }
      }
    }
    return __s73local0;
  };
  GeneralsData.prototype.getSkillPointsSpent = function (__s81param0) {
    var __s81local0 = this;
    var __s81local1 = this.playerGenerals.get(__s81param0);
    if (__s81local1) {
      return __s81local1.unlockedSkillIDs.map(function (__s84param0) {
        return __s81local0._generalSkills.get(__s84param0);
      }).map(function (__s86param0) {
        return __s86param0.totalCostSkillPoints;
      }).reduce(function (__s88param0, __s88param1) {
        return __s88param0 + __s88param1;
      }, 0);
    } else {
      return 0;
    }
  };
  GeneralsData.prototype.isTierCompleted = function (__s91param0, __s91param1) {
    var __s91local0 = this;
    if (__s91param1 === undefined) {
      __s91param1 = 0;
    }
    var __s91local1 = this.getSkillTreeNode(__s91param0, __s91param1);
    return !!__s91local1 && __s91local1.childs.every(function (__s94param0) {
      return __s91local0.isGroupCompleted(__s91param0, __s91param1, __s94param0.id);
    });
  };
  GeneralsData.prototype.isGroupCompleted = function (__s96param0, __s96param1, __s96param2) {
    var __s96local0 = this.playerGenerals.get(__s96param0);
    var __s96local1 = this.getSkillTreeNode(__s96param0, __s96param1, __s96param2);
    return !!__s96local1 && __s96local1.childs.every(function (__s98param0) {
      var __s98local0 = __s96local0.getActiveSkillInGroup(__s96local1);
      return __s98local0 && __s98local0.isMaxLevel;
    });
  };
  GeneralsData.prototype.isTierInProgress = function (__s100param0, __s100param1) {
    var __s100local0 = this;
    if (__s100param1 === undefined) {
      __s100param1 = 0;
    }
    var __s100local1 = this.getSkillTreeNode(__s100param0, __s100param1);
    return !!__s100local1 && __s100local1.childs.some(function (__s103param0) {
      return __s100local0.isGroupInProgress(__s100param0, __s100param1, __s103param0.id);
    });
  };
  GeneralsData.prototype.isGroupInProgress = function (__s105param0, __s105param1, __s105param2) {
    var __s105local0 = this.playerGenerals.get(__s105param0);
    var __s105local1 = this.getSkillTreeNode(__s105param0, __s105param1, __s105param2);
    return !!__s105local1 && __s105local1.childs.some(function (__s107param0) {
      var __s107local0 = __s105local0.getActiveSkillInGroup(__s105local1);
      return __s107local0 && __s107local0.level > 0 && !__s107local0.isMaxLevel;
    });
  };
  GeneralsData.prototype.reset = function () {
    var __s109local0 = this;
    this.requestedHubQuestUpdate = false;
    this._playerGenerals.forEach(function (__s111param0) {
      __s109local0._playerGenerals.set(__s111param0.generalID, new __dep_export_GeneralVO.GeneralVO(__s111param0.generalID));
    });
  };
  Object.defineProperty(GeneralsData.prototype, "generalXmlVOs", {
    get: function () {
      return this._generalXmlVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsData.prototype, "playerGenerals", {
    get: function () {
      return this._playerGenerals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsData.prototype, "npcGenerals", {
    get: function () {
      return this._npcGenerals;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsData.prototype.getGeneralSlotsByIDs = function (__s119param0) {
    var __s119local0 = [];
    for (var __s119local1 = 0; __s119local1 < __s119param0.length; __s119local1++) {
      __s119local0.push(this._generalSlots.get(__s119param0[__s119local1]));
    }
    return __s119local0;
  };
  GeneralsData.prototype.isGeneralAbilityUnlocked = function (__s123param0, __s123param1) {
    var __s123local0 = this._playerGenerals.get(__s123param1);
    if (!__s123local0) {
      return false;
    }
    var __s123local1 = [];
    this._generalSkills.forEach(function (__s126param0) {
      __s123local1.push(__s126param0);
    });
    for (var __s123local2 = 0, __s123local3 = __s123local1; __s123local2 < __s123local3.length; __s123local2++) {
      var __s123local4 = __s123local3[__s123local2];
      if (__s123local4 && __s123local4.generalID == __s123param1 && __s123local4.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY])) {
        if (__s123local4.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0] != __s123param0) {
          continue;
        }
        return __s123local0.unlockedSkillIDs.indexOf(__s123local4.id) >= 0;
      }
    }
    return true;
  };
  GeneralsData.prototype.getAbilityByID = function (__s132param0) {
    return this._generalAbilitiesByID.get(__s132param0);
  };
  GeneralsData.prototype.getAbilityGroupByID = function (__s134param0) {
    return this._generalAbilitiesByGroupID.get(__s134param0);
  };
  GeneralsData.prototype.getAbilityEffectByID = function (__s136param0) {
    return this._generalAbilityEffects.get(__s136param0);
  };
  GeneralsData.prototype.getGeneralRarityByID = function (__s138param0) {
    return this._generalRarity.get(__s138param0);
  };
  GeneralsData.prototype.getAllXPCurrencies = function () {
    var __s140local0 = [];
    this._generalXPItems.forEach(function (__s142param0) {
      __s140local0.push(__s142param0.currencyID);
    });
    return __s140local0;
  };
  GeneralsData.prototype.getXPItemByCurrencyID = function (__s144param0) {
    return this._generalXPItems.get(__s144param0);
  };
  GeneralsData.prototype.getTotalAmountOfAvailableDraws = function () {
    var __s146local0 = 0;
    this._hubQuests.forEach(function (__s148param0) {
      __s146local0 += __s148param0.availableQuests;
      __s146local0 += Math.floor(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s148param0.getCostVOForPayQuest().id / __s148param0.getCostVOForPayQuest().amount));
    });
    return __s146local0;
  };
  GeneralsData.prototype.checkHubQuestCooldowns = function () {
    this._hubQuests.forEach(function (__s152param0) {
      return __s152param0.remainingCoolDownInSeconds;
    });
  };
  GeneralsData.prototype.getAmountOfUnlockOrUpgradeableGeneral = function () {
    var __s154local0 = 0;
    this.playerGenerals.forEach(function (__s156param0) {
      if (__s156param0.canBeUnlocked || __s156param0.hasEnoughShardsToUpgradeStarLevel) {
        __s154local0++;
      }
    });
    return __s154local0;
  };
  return GeneralsData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.GeneralsData = __s0local0;
