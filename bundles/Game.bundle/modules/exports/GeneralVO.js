Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGeneralResetFlagsVO = require("gge-module:export_C2SGeneralResetFlagsVO");
var __dep_export_C2SGeneralResetSkills = require("gge-module:export_C2SGeneralResetSkills");
var __dep_export_C2SGeneralUnlockSkillVO = require("gge-module:export_C2SGeneralUnlockSkillVO");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralXmlVO = require("gge-module:export_GeneralXmlVO");
var __s0local0 = function () {
  function GeneralVO(__s3param0) {
    this._currentXP = 0;
    this._currentStarLevel = 0;
    this._isUnlocked = false;
    this._hasLevelUp = false;
    this._isNew = false;
    this._kills = 0;
    this._might = 0;
    this._won = 0;
    this._lost = 0;
    this._unlockedSkillIDs = [];
    this._selectedAbilities = [];
    this._fixedLevel = -1;
    this._oldXP = 0;
    this._generalXmlVO = __dep_export_CastleModel.CastleModel.generalsData.generalXmlVOs.get(__s3param0);
    if (!this.generalXmlVO) {
      this._generalXmlVO = new __dep_export_GeneralXmlVO.GeneralXmlVO();
      this._generalXmlVO.initAsPreview(__s3param0);
    }
  }
  GeneralVO.prototype.parseData = function (__s6param0) {
    this.currentXPAll = __s6param0.XP || 0;
    this.currentStarLevel = __s6param0.ST || 0;
    this.isNew = __s6param0.IN == 1 || false;
    this.hasLevelUp = __s6param0.LU == 1 || false;
    this._unlockedSkillIDs = __s6param0.SIDS || [];
    this._selectedAbilities = __s6param0.GASAIDS || [];
    this.fixedLevel = __s6param0[__dep_exact_26a421b704832cff.CommKeys.LEVEL] || -1;
    if (!__s6param0.ST && this._fixedLevel > 0) {
      this.currentStarLevel = Math.floor((this._fixedLevel % 10 == 0 ? this._fixedLevel - 1 : this.fixedLevel) / 10);
    }
    this._oldXP = __s6param0[__dep_exact_26a421b704832cff.CommKeys.OLD_XP] || 0;
    this._won = __s6param0[__dep_exact_26a421b704832cff.CommKeys.WINS] || 0;
    this._lost = __s6param0[__dep_exact_26a421b704832cff.CommKeys.DEFEATS] || 0;
    this._isUnlocked = true;
  };
  Object.defineProperty(GeneralVO.prototype, "nameText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_generalName_placeholder", [this.nameTextShort]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "nameTextShort", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("generals_characters_" + this.generalID + "_name");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "nameSubtitleText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("generals_characters_" + this.generalID + "_summary");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "generalXmlVO", {
    get: function () {
      return this._generalXmlVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "hasLevelUp", {
    get: function () {
      return this._hasLevelUp;
    },
    set: function (__s19param0) {
      this._hasLevelUp = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isNew", {
    get: function () {
      return this._isNew;
    },
    set: function (__s23param0) {
      this._isNew = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "currentStarLevel", {
    get: function () {
      return this._currentStarLevel;
    },
    set: function (__s27param0) {
      this._currentStarLevel = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isUnlocked", {
    get: function () {
      return this._isUnlocked && this.isImplemented;
    },
    set: function (__s31param0) {
      this._isUnlocked = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "kills", {
    get: function () {
      return this._kills;
    },
    set: function (__s35param0) {
      this._kills = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "might", {
    get: function () {
      return this._might;
    },
    set: function (__s39param0) {
      this._might = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "generalID", {
    get: function () {
      return this._generalXmlVO.generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "attackSlots", {
    get: function () {
      return this._generalXmlVO.attackSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "defenseSlots", {
    get: function () {
      return this._generalXmlVO.defenseSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "maxLevel", {
    get: function () {
      return this._generalXmlVO.maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "maxStarLevel", {
    get: function () {
      return this._generalXmlVO.maxStarLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "upgradeCurrencyIDs", {
    get: function () {
      return this._generalXmlVO.upgradeCurrencyIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "unlockCurrencyID", {
    get: function () {
      return this._generalXmlVO.unlockCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "generalRarityID", {
    get: function () {
      return this._generalXmlVO.generalRarityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "rarityTextID", {
    get: function () {
      return "generals_rarity_" + this._generalXmlVO.generalRarityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "rarityTextColor", {
    get: function () {
      switch (this.generalRarityID) {
        case 1:
          return GeneralVO.GENERAL_COLOR_COMMON;
        case 2:
          return GeneralVO.GENERAL_COLOR_RARE;
        case 3:
          return GeneralVO.GENERAL_COLOR_EPIC;
        case 4:
          return GeneralVO.GENERAL_COLOR_LEGENDARY;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "lost", {
    get: function () {
      return this._lost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "won", {
    get: function () {
      return this._won;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "storyTextID", {
    get: function () {
      return "generals_characters_" + this.generalID + "_narrative";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "nextLevelXP", {
    get: function () {
      return this.generalXmlVO.rarity.getCurrentMaxXPOfLevel(this._currentXP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "nextXpNeededForCap", {
    get: function () {
      return this.generalXmlVO.rarity.nextXpNeededForCap(this._currentXP);
    },
    enumerable: true,
    configurable: true
  });
  GeneralVO.prototype.getXPProgressFactor = function () {
    if (this.nextLevelXP <= 0) {
      return 1;
    } else {
      return Math.min(1, this.currentLevelXP / this.nextLevelXP);
    }
  };
  Object.defineProperty(GeneralVO.prototype, "currentXPAll", {
    set: function (__s76param0) {
      this._currentXP = __s76param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "currentLevelXP", {
    get: function () {
      return this.generalXmlVO.rarity.getCurrentXPOfLevel(this._currentXP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "currentXP", {
    get: function () {
      return this._currentXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "currentLevel", {
    get: function () {
      if (this._fixedLevel > -1) {
        return this._fixedLevel;
      } else {
        return this.generalXmlVO.rarity.getLevelForXP(this._currentXP);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "fixedLevel", {
    set: function (__s86param0) {
      this._fixedLevel = __s86param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "xpGained", {
    get: function () {
      return this._currentXP - this._oldXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "levelsGained", {
    get: function () {
      return this.currentLevel - this.generalXmlVO.rarity.getLevelForXP(this._oldXP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "troopCapacity", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "assignedLord", {
    get: function () {
      return this._assignedLord;
    },
    set: function (__s96param0) {
      this._assignedLord = __s96param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "requiredShards", {
    get: function () {
      if (this.isUnlocked) {
        return this._generalXmlVO.rarity.getRequiredShards(this._currentStarLevel);
      } else {
        return this._generalXmlVO.rarity.unlockCosts;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "availableShards", {
    get: function () {
      if (this._generalXmlVO.unlockCurrencyID > 0) {
        return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this._generalXmlVO.unlockCurrencyID);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "canBeUnlocked", {
    get: function () {
      return !this.isUnlocked && __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.unlockCurrencyID) >= this.requiredShards && this.isImplemented;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isImplemented", {
    get: function () {
      return this._generalXmlVO.isImplemented;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isNPCGeneral", {
    get: function () {
      return this._generalXmlVO.isNPCGeneral;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "unlockedSkillIDs", {
    get: function () {
      return this._unlockedSkillIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "selectedAbilities", {
    get: function () {
      return this._selectedAbilities;
    },
    enumerable: true,
    configurable: true
  });
  GeneralVO.prototype.getSkillPointsSpent = function () {
    return __dep_export_CastleModel.CastleModel.generalsData.getSkillPointsSpent(this.generalID);
  };
  GeneralVO.prototype.getSkillPointsAvailable = function () {
    return this.currentLevel - this.getSkillPointsSpent();
  };
  GeneralVO.prototype.getActiveSkillInGroup = function (__s120param0) {
    var __s120local0;
    for (var __s120local1 = 0, __s120local2 = __s120param0.childs; __s120local1 < __s120local2.length; __s120local1++) {
      var __s120local3 = __s120local2[__s120local1].generalSkillVO;
      if (this.isSkillActive(__s120local3.id)) {
        __s120local0 = __s120local3;
      }
    }
    return __s120local0;
  };
  GeneralVO.prototype.isSkillActive = function (__s125param0) {
    return this.unlockedSkillIDs.indexOf(__s125param0) > -1;
  };
  GeneralVO.prototype.getSelectedAbilities = function (__s127param0) {
    var __s127local0 = [];
    for (var __s127local1 = 0; __s127local1 < this.selectedAbilities.length; __s127local1++) {
      if (__s127param0 && this.generalXmlVO.attackSlots.indexOf(this.selectedAbilities[__s127local1][0]) >= 0 && this.selectedAbilities[__s127local1][1] > 0) {
        __s127local0.push(__dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(this.selectedAbilities[__s127local1][1]));
      }
      if (!__s127param0 && this.generalXmlVO.defenseSlots.indexOf(this.selectedAbilities[__s127local1][0]) >= 0 && this.selectedAbilities[__s127local1][1] > 0) {
        __s127local0.push(__dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(this.selectedAbilities[__s127local1][1]));
      }
    }
    return __s127local0;
  };
  GeneralVO.prototype.unlockSkill = function (__s133param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralUnlockSkillVO.C2SGeneralUnlockSkillVO(__s133param0.id));
  };
  GeneralVO.prototype.resetSkills = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralResetSkills.C2SGeneralResetSkills(this.generalID));
  };
  Object.defineProperty(GeneralVO.prototype, "isXpUpgradeable", {
    get: function () {
      return this.currentLevel < (this.currentStarLevel + 1) * 10 && this.currentLevel < this.maxLevel && this.isUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "isStarLevelUpgradeable", {
    get: function () {
      return this.currentLevel % 10 == 0 && this.currentLevel > 0 && Math.floor(this.currentLevel / 10) > this._currentStarLevel && this.currentStarLevel < this.maxStarLevel || !this.isUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralVO.prototype, "hasEnoughShardsToUpgradeStarLevel", {
    get: function () {
      return this.isStarLevelUpgradeable && this.availableShards >= this.requiredShards;
    },
    enumerable: true,
    configurable: true
  });
  GeneralVO.prototype.getPassiveSkills = function () {
    return this.unlockedSkillIDs.map(function (__s145param0) {
      return __dep_export_CastleModel.CastleModel.generalsData.getSkillById(__s145param0);
    }).filter(function (__s147param0) {
      return !!__s147param0 && !__s147param0.isAbilitySkill;
    });
  };
  GeneralVO.prototype.getPassiveEffects = function () {
    return this.getPassiveSkills().reduce(function (__s151param0, __s151param1) {
      return __s151param0.concat(__s151param1.boni);
    }, []);
  };
  GeneralVO.prototype.getPassiveEffectsText = function () {
    return this.getPassiveSkills().sort(function (__s155param0, __s155param1) {
      return __s155param1.skillGroupID - __s155param0.skillGroupID;
    }).reduce(function (__s157param0, __s157param1) {
      return (__s157param0 ? __s157param0 + "\n" : __s157param0) + __s157param1.getEffectText();
    }, "");
  };
  GeneralVO.prototype.resetFlags = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGeneralResetFlagsVO.C2SGeneralResetFlagsVO(this.generalID));
    this.isNew = false;
    this.hasLevelUp = false;
    __dep_export_CastleModel.CastleModel.generalsData.dispatchEvent(new __dep_export_GeneralsEvent.GeneralsEvent(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED));
  };
  GeneralVO.GENERAL_COLOR_COMMON = 13421772;
  GeneralVO.GENERAL_COLOR_RARE = 10541384;
  GeneralVO.GENERAL_COLOR_EPIC = 13141503;
  GeneralVO.GENERAL_COLOR_LEGENDARY = 16362780;
  return GeneralVO;
}();
exports.GeneralVO = __s0local0;
