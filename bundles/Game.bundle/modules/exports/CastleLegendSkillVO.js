Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleLegendSkillVO() {
    this._id = 0;
    this._requiredSkillID = 0;
    this._skillTreeID = 0;
    this._tier = 0;
    this._skillGroupID = 0;
    this._level = 0;
    this._cost = 0;
    this._totalSkillPointsCost = 0;
    this._effectValue = 0;
    this._totalEffectValue = 0;
    this._previousID = 0;
    this._nextID = 0;
    this._isPreview = false;
    this._isActive = false;
  }
  CastleLegendSkillVO.prototype.parseXML = function (__s5param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skillID", __s5param0, "0"));
    this._requiredSkillID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requiredSkillID", __s5param0, "0"));
    this._skillTreeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skillTreeID", __s5param0, "-1"));
    this._tier = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tier", __s5param0, "0"));
    this._skillGroupID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skillGroupID", __s5param0, "0"));
    this._level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s5param0, "0"));
    this._cost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("costSkillPoints", __s5param0, "0"));
    this._totalSkillPointsCost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("totalCostSkillPoints", __s5param0, "0"));
    this._effectType = __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.getTypeByName(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effectType", __s5param0, ""));
    this._effectValue = parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("effectValue", __s5param0, "0"));
    this._totalEffectValue = parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("totalEffectValue", __s5param0, "0"));
    this._specialType = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("specialType", __s5param0, CastleLegendSkillVO.SPECIAL_TYPE_NONE);
    this._previousID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("previousSkillID", __s5param0, this._requiredSkillID.toString()));
    this._nextID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("followingSkillID", __s5param0, "0"));
    this._isPreview = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isPreview", __s5param0, "0")) == 1;
    this._unlockRequirements = __dep_export_TreeNodeUnlockRequirementsCreator.TreeNodeUnlockRequirementsCreator.createUnlockRequirements(__s5param0);
    this._isActive = false;
  };
  Object.defineProperty(CastleLegendSkillVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "skillGroupID", {
    get: function () {
      return this._skillGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "skillTreeID", {
    get: function () {
      return this._skillTreeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "cost", {
    get: function () {
      return this._cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "effectType", {
    get: function () {
      return this._effectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "effectValue", {
    get: function () {
      return this._effectValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "nameTextID", {
    get: function () {
      return "dialog_legendTemple_" + this._skillGroupID + "_name";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_legendTemple_" + this._skillGroupID + "_desc";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "shortDescriptionTextID", {
    get: function () {
      return "dialog_legendTemple_" + this._skillGroupID + "_desc_short";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "costTextID", {
    get: function () {
      return "dialog_legendTemple_skillCost";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "effectText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30_3.Localize.text(this.shortDescriptionTextID, [this.effectValue]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "previewText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillVO.prototype.isSpecialSkill = function () {
    return this._specialType == CastleLegendSkillVO.SPECIAL_TYPE_SPECIAL || this._specialType == CastleLegendSkillVO.SPECIAL_TYPE_ULTIMATE;
  };
  Object.defineProperty(CastleLegendSkillVO.prototype, "requiredSkillID", {
    get: function () {
      return this._requiredSkillID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "specialType", {
    get: function () {
      return this._specialType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "isActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData.isSkillActive(this);
    },
    set: function (__s43param0) {
      this._isActive = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "skillIconClassName", {
    get: function () {
      return "LegendSkill_" + this._skillGroupID;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillVO.prototype.getFilePath = function () {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.skillIconClassName);
  };
  Object.defineProperty(CastleLegendSkillVO.prototype, "skillIcon", {
    get: function () {
      this._legendSkillClip ||= this.createSkillIcon();
      return this._legendSkillClip.asDisplayObject();
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillVO.prototype.createSkillIcon = function () {
    var __s51local0;
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(this.skillIconClassName)) {
      (__s51local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.skillIconClassName, this.getFilePath(), null, 0, false)).recycleAsset = false;
      return __s51local0;
    } else if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(CastleLegendSkillVO.ICON_DEFAULT)) {
      (__s51local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CastleLegendSkillVO.ICON_DEFAULT, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleLegendSkillVO.ICON_DEFAULT), null, 0, false)).recycleAsset = false;
      return __s51local0;
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleLegendSkillVO.prototype, "isPreview", {
    get: function () {
      return this._isPreview || !__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(this.skillIconClassName);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "totalSkillPointsCost", {
    get: function () {
      return this._totalSkillPointsCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "totalEffectValue", {
    get: function () {
      return this._totalEffectValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "previousID", {
    get: function () {
      return this._previousID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillVO.prototype, "nextID", {
    get: function () {
      return this._nextID;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillVO.__initialize_static_members = function () {
    CastleLegendSkillVO.SPECIAL_TYPE_NONE = "none";
    CastleLegendSkillVO.SPECIAL_TYPE_SPECIAL = "special";
    CastleLegendSkillVO.SPECIAL_TYPE_ULTIMATE = "ultimate";
  };
  CastleLegendSkillVO.prototype.isUnlocked = function () {
    if (this.isActive) {
      return true;
    }
    for (var __s68local0 = 0; __s68local0 < this._unlockRequirements.length; __s68local0++) {
      if (!this._unlockRequirements[__s68local0].isUnlocked()) {
        return false;
      }
    }
    return true;
  };
  CastleLegendSkillVO.prototype.getUnlockText = function () {
    var __s74local0 = "";
    for (var __s74local1 = 0; __s74local1 < this._unlockRequirements.length; __s74local1++) {
      var __s74local2 = this._unlockRequirements[__s74local1];
      if (!__s74local2.isUnlocked() && (__s74local0 += __s74local0 != "" ? "\n" : "", __s74local0 += __s74local2.getUnlockRequirementText(), !__s74local2.showFollowingRequirements)) {
        break;
      }
    }
    return __s74local0;
  };
  CastleLegendSkillVO.prototype.composeSkillTextVO = function (__s79param0, __s79param1 = -1) {
    var __s79local0;
    var __s79local1 = new __dep_exact_92d05af59ee2ff30_2.HTMLTextCustomVO();
    var __s79local2 = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.totalEffectValue, false, 2);
    var __s79local3 = __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getGenericTextReplacementIDForEffectType(this.effectType);
    __s79local0 = __s79param1 != -1 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s79param1) : __s79local3 ? new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s79local3, [__s79local2]) : __s79local2;
    __s79local1.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.descriptionTextID, [new __dep_export_ColoredHTMLTextReplacementVO.ColoredHTMLTextReplacementVO(__s79local0, __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.getBBColorCode(__s79param0))]));
    return __s79local1;
  };
  CastleLegendSkillVO.prototype.buySkill = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAddSkillPointVO.C2SAddSkillPointVO(this.id));
  };
  CastleLegendSkillVO.prototype.isMaxLevel = function () {
    return this._nextID == 0;
  };
  CastleLegendSkillVO.ICON_DEFAULT = "Skill_Undefined";
  return CastleLegendSkillVO;
}();
exports.CastleLegendSkillVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLegendSkills = require("gge-module:export_ClientConstLegendSkills");
var __dep_export_C2SAddSkillPointVO = require("gge-module:export_C2SAddSkillPointVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ColoredHTMLTextReplacementVO = require("gge-module:export_ColoredHTMLTextReplacementVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_TreeNodeUnlockRequirementsCreator = require("gge-module:export_TreeNodeUnlockRequirementsCreator");
__s0local0.__initialize_static_members();
