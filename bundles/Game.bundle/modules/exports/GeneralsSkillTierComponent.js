Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralsSkillItem = require("gge-module:export_GeneralsSkillItem");
var __s0local0 = function () {
  function GeneralsSkillTierComponent(__s3param0, __s3param1, __s3param2) {
    this._height = 0;
    this._attackHighlight = false;
    this._attackHighlight = __s3param2;
    this._disp = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("GeneralSkillTreeDialogExt_SkillTier"))();
    this._tierNode = __s3param0;
    this._generalID = __s3param1;
    this.createTier();
    this.updateTier();
  }
  GeneralsSkillTierComponent.prototype.createTier = function () {
    this._skillItems = new Map();
    this._itxt_tierNumber = this.textFieldManager.registerTextField(this._disp.txt_tier, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._tierNode.id), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s5local0 = 0;
    var __s5local1 = 0;
    for (var __s5local2 = 0; __s5local2 < this.tierNode.childs.length; __s5local2++) {
      var __s5local3 = this.tierNode.childs[__s5local2];
      var __s5local4 = new __dep_export_GeneralsSkillItem.GeneralsSkillItem(this._generalID, __s5local3, this._attackHighlight);
      this._disp.mc_skills.addChild(__s5local4.disp);
      __s5local0 = Math.floor(__s5local2 / GeneralsSkillTierComponent.SKILLS_PER_ROW);
      __s5local1 = __s5local2 % GeneralsSkillTierComponent.SKILLS_PER_ROW;
      __s5local4.disp.x = __s5local1 * GeneralsSkillTierComponent.SKILL_SPACING_X;
      __s5local4.disp.y = __s5local0 * GeneralsSkillTierComponent.SKILL_SPACING_Y;
      this._skillItems.set(__s5local3.id, __s5local4);
    }
    this.disp.bg_default.height = GeneralsSkillTierComponent.TIER_HEIGHT_DEFAULT + __s5local0 * GeneralsSkillTierComponent.SKILL_SPACING_Y;
    this.disp.bg_completed.height = GeneralsSkillTierComponent.TIER_HEIGHT_DEFAULT + __s5local0 * GeneralsSkillTierComponent.SKILL_SPACING_Y;
    this.disp.mc_locked.height = GeneralsSkillTierComponent.TIER_HEIGHT_DEFAULT + __s5local0 * GeneralsSkillTierComponent.SKILL_SPACING_Y;
  };
  GeneralsSkillTierComponent.prototype.updateTier = function () {
    var __s9local0 = this._tierNode.isUnlocked();
    var __s9local1 = this.generalsData.isTierCompleted(this._generalID, this.tierNode.id);
    var __s9local2 = this.generalsData.isTierInProgress(this._generalID, this.tierNode.id);
    this._disp.mc_locked.visible = !__s9local0;
    this._disp.bg_completed.visible = __s9local1;
    this._disp.bg_default.visible = !__s9local1;
    this._itxt_tierNumber.color = __s9local1 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __s9local2 ? __dep_export_GeneralsSkillItem.GeneralsSkillItem.COLOR_PROGRESS : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    Array.from(this._skillItems.values()).forEach(function (__s11param0) {
      return __s11param0.updateItem(__s9local0);
    });
  };
  GeneralsSkillTierComponent.prototype.show = function () {
    this._disp.visible = true;
    for (var __s13local0 = 0, __s13local1 = Array.from(this._skillItems.values()); __s13local0 < __s13local1.length; __s13local0++) {
      var __s13local2 = __s13local1[__s13local0];
      if (__s13local2) {
        __s13local2.show();
      }
    }
  };
  GeneralsSkillTierComponent.prototype.hide = function () {
    this._disp.visible = false;
    for (var __s18local0 = 0, __s18local1 = Array.from(this._skillItems.values()); __s18local0 < __s18local1.length; __s18local0++) {
      var __s18local2 = __s18local1[__s18local0];
      if (__s18local2) {
        __s18local2.hide();
      }
    }
  };
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "generalsData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "tierNode", {
    get: function () {
      return this._tierNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "skillItems", {
    get: function () {
      return this._skillItems;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillTierComponent.SKILL_SPACING_X = 115;
  GeneralsSkillTierComponent.SKILL_SPACING_Y = 110;
  GeneralsSkillTierComponent.SKILLS_PER_ROW = 6;
  GeneralsSkillTierComponent.TIER_HEIGHT_DEFAULT = 46;
  return GeneralsSkillTierComponent;
}();
exports.GeneralsSkillTierComponent = __s0local0;
