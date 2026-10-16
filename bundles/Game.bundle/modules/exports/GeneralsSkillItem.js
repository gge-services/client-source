Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_GeneralsSkillTooltipHelper = require("gge-module:export_GeneralsSkillTooltipHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function GeneralsSkillItem(__s3param0, __s3param1, __s3param2) {
    this._attackHighlight = false;
    this._attackHighlight = __s3param2;
    this._skillGroup = __s3param1;
    this._generalID = __s3param0;
    this._disp = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("GeneralSkillTreeDialogExt_SkillContainer"))();
    this._disp.mouseChildren = false;
    this._clickFeedback = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(this.disp);
    this._itxt_level = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this._clickSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.loadIcon();
  }
  GeneralsSkillItem.prototype.loadIcon = function () {
    var __s5local0 = this._skillGroup.childs[0].generalSkillVO;
    if (__s5local0.isAbilitySkill) {
      var __s5local1 = __s5local0.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
      var __s5local2 = this.generalsData.getAbilityByID(__s5local1);
      if (__s5local2) {
        var __s5local3 = __s5local2.abilityAttackEffectID > 0;
        var __s5local4 = __s5local2.abilityDefenseEffectID > 0;
        this.disp.mc_icon.addChild(__dep_export_GeneralsHelper.GeneralsHelper.getGeneralAbilityClip(__s5local2.abilityGroupID, 80, -1, __s5local3, __s5local3 && __s5local4));
      }
      this._disp.mc_genericSkillIcon.visible = false;
    } else {
      this._disp.mc_genericSkillIcon.visible = true;
      __s5local3 = false;
      var __s5local5 = false;
      for (var __s5local6 = 0, __s5local7 = __s5local0.boni; __s5local6 < __s5local7.length; __s5local6++) {
        var __s5local8 = __s5local7[__s5local6];
        if (__dep_export_CastleModel.CastleModel.effectsData.isAttackEffect(__s5local8.effect.effectType.type)) {
          __s5local3 = true;
        }
        if (__dep_export_CastleModel.CastleModel.effectsData.isDefenseEffect(__s5local8.effect.effectType.type)) {
          __s5local5 = true;
        }
      }
      var __s5local9 = __s5local3 == __s5local5;
      this._disp.mc_genericSkillIcon.gotoAndStop(__s5local9 ? 1 : __s5local3 ? 2 : 3);
    }
  };
  GeneralsSkillItem.prototype.updateItem = function (__s14param0) {
    this._disp.mc_downState.visible = !__s14param0;
    this._disp.mc_level.mc_locked.visible = !__s14param0;
    var __s14local0 = this.generalsData.playerGenerals.get(this._generalID);
    this._currentSkillVO = __s14local0.getActiveSkillInGroup(this._skillGroup);
    var __s14local1 = this._currentSkillVO ? this._currentSkillVO.level : 0;
    var __s14local2 = this._skillGroup.childs[this._skillGroup.childs.length - 1].id;
    var __s14local3 = this._currentSkillVO && this._currentSkillVO.isMaxLevel;
    this._itxt_level.textContentVO.textReplacements = [__s14local1, __s14local2];
    this._itxt_level.color = __s14local3 ? GeneralsSkillItem.COLOR_MAX : __s14local1 > 0 ? GeneralsSkillItem.COLOR_PROGRESS : GeneralsSkillItem.COLOR_DEFAULT;
    this.disp.mc_bg.gotoAndStop(__s14local3 ? 2 : 1);
    this.disp.mc_edge.gotoAndStop(__s14local3 ? 2 : 1);
    this.disp.mc_level.gotoAndStop(__s14local3 ? 2 : 1);
    this._nextSkillVO = this._currentSkillVO ? this._currentSkillVO.nextLevelSkill : this._skillGroup.childs[0].generalSkillVO;
    var __s14local4 = __s14local0.getSkillPointsAvailable();
    if (__s14param0 && !__s14local3 && __s14local4 >= this._nextSkillVO.costSkillPoints) {
      this._clickFeedback.addEventListener();
      this._canUpgrade = true;
    } else {
      this._clickFeedback.removeEventListener();
      this._canUpgrade = false;
    }
  };
  GeneralsSkillItem.prototype.show = function () {
    this.disp.visible = true;
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  GeneralsSkillItem.prototype.hide = function () {
    this.disp.visible = false;
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    if (this._clickFeedback) {
      this._clickFeedback.removeEventListener();
    }
    if (this._clickSignal) {
      this._clickSignal.removeAll();
    }
  };
  GeneralsSkillItem.prototype.onClick = function (__s24param0) {
    if (this._canUpgrade) {
      this.clickSignal.dispatch(this._nextSkillVO);
    }
  };
  GeneralsSkillItem.prototype.onMouseOver = function (__s27param0) {
    __dep_export_GeneralsSkillTooltipHelper.GeneralsSkillTooltipHelper.showToolTip(this.disp, this._currentSkillVO || this._nextSkillVO, this._attackHighlight);
  };
  GeneralsSkillItem.prototype.onMouseOut = function (__s29param0) {
    __dep_export_GeneralsSkillTooltipHelper.GeneralsSkillTooltipHelper.hideToolTip();
  };
  Object.defineProperty(GeneralsSkillItem.prototype, "generalsData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillItem.prototype, "clickSignal", {
    get: function () {
      return this._clickSignal;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillItem.COLOR_MAX = 15974986;
  GeneralsSkillItem.COLOR_PROGRESS = 10538042;
  GeneralsSkillItem.COLOR_DEFAULT = 15921906;
  return GeneralsSkillItem;
}();
exports.GeneralsSkillItem = __s0local1;
