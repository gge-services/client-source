Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function () {
  function CastleLegendSkillTierComponent(__s3param0, __s3param1) {
    this._height = 0;
    this._disp = new __s0local0();
    this._tierNode = __s3param0;
    this._treeID = __s3param1;
    this.createTier();
    this.updateTier();
  }
  CastleLegendSkillTierComponent.prototype.createTier = function () {
    var __s5local0;
    var __s5local1;
    this._skillItems = new Map();
    this._height = 0;
    var __s5local2 = 0;
    var __s5local3 = 0;
    for (var __s5local4 = 0, __s5local5 = this._tierNode.childs; __s5local4 < __s5local5.length; __s5local4++) {
      var __s5local6 = __s5local5[__s5local4];
      if (__s5local6 !== undefined) {
        if ((__s5local0 = this.legendSkillData.getCurrentSkillInGroup(this._treeID, this._tierNode.id, __s5local6.id)).isSpecialSkill()) {
          if (__s5local2 != 0) {
            __dep_exact_9e901e8e2483a22f.error("SPECIAL SKILL HAS TO BE ON TOP");
          }
          this._specialTierContainer = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LegendSkillTierContainer"))();
          this._specialTierContainer.mc_tier.visible = false;
          this._specialTierContainer.y = this._height;
          this._disp.addChild(this._specialTierContainer);
          (__s5local1 = new __dep_export_CastleLegendSkillItem.CastleLegendSkillItem(__s5local0)).dispContainer.x = CastleLegendSkillTierComponent.FIRST_SKILL_X + CastleLegendSkillTierComponent.SKILL_SPACING_X * 2;
          __s5local1.dispContainer.y = CastleLegendSkillTierComponent.FIRST_SKILL_Y;
          this._skillItems.set(__s5local6.id, __s5local1);
          this._specialTierContainer.addChild(__s5local1.dispContainer);
          this._height = CastleLegendSkillTierComponent.SKILL_SPACING_Y + CastleLegendSkillTierComponent.TIER_SPACING_Y;
        } else {
          if (__s5local2 == 0) {
            this._tierContainer = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("LegendSkillTierContainer"))();
            this._tierContainer.y = this._height;
            this._disp.addChild(this._tierContainer);
            this.textFieldManager.registerTextField(this._tierContainer.mc_tier.txt_tier, new __dep_exact_92d05af59ee2ff30.NumberVO(this._tierNode.id), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
            __s5local3 = this._specialTierContainer ? this._tierNode.childs.length - 1 : this._tierNode.childs.length;
          }
          var __s5local7 = Math.floor(__s5local2 / CastleLegendSkillTierComponent.SKILLS_PER_ROW);
          var __s5local8 = Math.min(5, __s5local3 - __s5local7 * CastleLegendSkillTierComponent.SKILLS_PER_ROW);
          var __s5local9 = (CastleLegendSkillTierComponent.SKILLS_PER_ROW - __s5local8) * (CastleLegendSkillTierComponent.SKILL_SPACING_X * 0.5);
          var __s5local10 = __s5local0;
          var __s5local11 = !!__s5local10 && (__s5local10.hasBuildingEffect || __s5local10.hasUnitEffect);
          (__s5local1 = new __dep_export_CastleLegendSkillItem.CastleLegendSkillItem(__s5local0, false, __s5local11)).dispContainer.x = __s5local9 + CastleLegendSkillTierComponent.FIRST_SKILL_X + __s5local2 % CastleLegendSkillTierComponent.SKILLS_PER_ROW * CastleLegendSkillTierComponent.SKILL_SPACING_X;
          __s5local1.dispContainer.y = CastleLegendSkillTierComponent.FIRST_SKILL_Y + Math.floor(__s5local2 / CastleLegendSkillTierComponent.SKILLS_PER_ROW) * CastleLegendSkillTierComponent.SKILL_SPACING_Y;
          this._skillItems.set(__s5local6.id, __s5local1);
          this._tierContainer.addChild(__s5local1.dispContainer);
          __s5local2++;
        }
      }
    }
    if (this._tierContainer) {
      var __s5local12 = (Math.floor((__s5local2 - 1) / 5) + 1) * CastleLegendSkillTierComponent.SKILL_SPACING_Y;
      this._tierContainer.mc_max.height = __s5local12;
      this._tierContainer.bg.height = __s5local12;
      this._tierContainer.mc_locked.height = __s5local12;
      this._height += __s5local12;
    }
  };
  CastleLegendSkillTierComponent.prototype.updateTier = function () {
    var __s15local0;
    var __s15local1 = this.legendSkillData.isTierUnlockedBySkillsSelectable(this._treeID, this._tierNode.id);
    var __s15local2 = this.legendSkillData.isTierUnlocked(this._treeID, this._tierNode.id) && !this._tierNode.isPreview && __s15local1;
    var __s15local3 = this.legendSkillData.isTierUnlocked(this._treeID, this._tierNode.id + 1) && !this._tierNode.isPreview;
    console.log("treeID: " + this._treeID + ", id: " + this.tierNode.id + ", isTierUnlocked: " + __s15local2 + " , isTierStartable: " + __s15local1 + ", isNextUnlocked: " + __s15local3);
    if (this._specialTierContainer) {
      this._specialTierContainer.mc_locked.visible = !__s15local2;
      this._specialTierContainer.mc_max.visible = __s15local2;
    }
    if (this._tierContainer) {
      this._tierContainer.mc_locked.visible = !__s15local2;
      this._tierContainer.mc_tier.mc_lock.visible = !__s15local2;
      this._tierContainer.mc_max.visible = __s15local2 && __s15local3;
      this._tierContainer.mc_tier.mc_active.visible = false;
    }
    for (var __s15local4 = 0, __s15local5 = this._tierNode.childs; __s15local4 < __s15local5.length; __s15local4++) {
      var __s15local6 = __s15local5[__s15local4];
      if (__s15local6 !== undefined) {
        __s15local0 = this.legendSkillData.getCurrentSkillInGroup(this._treeID, this._tierNode.id, __s15local6.id);
        this._skillItems.get(__s15local6.id).setSkillInfo(__s15local0);
        this._skillItems.get(__s15local6.id).show();
        this._skillItems.get(__s15local6.id).checkForTooltipUpdate();
        if (!__s15local0.isSpecialSkill()) {
          if (this._skillItems.get(__s15local6.id).isActive) {
            this._tierContainer.mc_tier.mc_active.visible = true;
          }
        }
      }
    }
  };
  CastleLegendSkillTierComponent.prototype.show = function () {
    this._disp.visible = true;
    for (var __s24local0 = 0, __s24local1 = Array.from(this._skillItems.values()); __s24local0 < __s24local1.length; __s24local0++) {
      var __s24local2 = __s24local1[__s24local0];
      if (__s24local2) {
        __s24local2.show();
      }
    }
  };
  CastleLegendSkillTierComponent.prototype.hide = function () {
    this._disp.visible = false;
    for (var __s29local0 = 0, __s29local1 = Array.from(this._skillItems.values()); __s29local0 < __s29local1.length; __s29local0++) {
      var __s29local2 = __s29local1[__s29local0];
      if (__s29local2) {
        __s29local2.hide();
      }
    }
  };
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "tierNode", {
    get: function () {
      return this._tierNode;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillTierComponent.FIRST_SKILL_X = 206;
  CastleLegendSkillTierComponent.FIRST_SKILL_Y = 60;
  CastleLegendSkillTierComponent.SKILL_SPACING_X = 114;
  CastleLegendSkillTierComponent.SKILL_SPACING_Y = 120;
  CastleLegendSkillTierComponent.TIER_SPACING_Y = 4;
  CastleLegendSkillTierComponent.SKILLS_PER_ROW = 5;
  return CastleLegendSkillTierComponent;
}();
exports.CastleLegendSkillTierComponent = __s0local1;
var __dep_export_CastleLegendSkillItem = require("gge-module:export_CastleLegendSkillItem");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
