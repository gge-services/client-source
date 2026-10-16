Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function AllianceMobilizationEventDialogRulesCollapsibleItem(__s3param0, __s3param1, __s3param2 = 0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AllianceMobilizationEventMainExt_RulesCollapsibleItem"))(), __s3param1) || this;
    __s3local0._ruleMCs = [];
    __s3local0._eventID = 0;
    __s3local0._eventID = __s3param2;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0._headerMC, 1);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._headerMC.txt_header, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s3local0.getModeTextID(__s3param0))), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._headerMC.txt_currentMode, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_ame_rules_mode_current_text")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._contentMC.txt_rules, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialogue_ame_rules_button_title")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    __s3local0._headerMC.txt_currentMode.visible = __s3local0.eventVO.mode == __s3param0;
    __s3local0._headerMC.mc_lock.visible = __s3local0.eventVO.mode != __s3param0;
    __s3local0._rulesLayoutStrategy = new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical();
    __s3local0._ruleDecoMC = new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s3local0._contentMC.mc_deco, new __dep_export_LayoutMargin.LayoutMargin(50, 0, 0, 0));
    __s3local0._ruleDecoMC.customHeight = 35;
    var __s3local1 = __s3local0.getRulesTextForMode(__s3param0);
    if (__s3local1) {
      __s3local1.forEach(function (__s6param0) {
        if (__s6param0.length > 0) {
          __s3local0.addRule(__s6param0[0], __s6param0[1]);
        }
      });
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogRulesCollapsibleItem, __s1param0);
  AllianceMobilizationEventDialogRulesCollapsibleItem.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target) && this.isEnabled) {
      switch (__s9param0.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  AllianceMobilizationEventDialogRulesCollapsibleItem.prototype.expand = function (__s13param0, __s13param1, __s13param2 = false) {
    __s1param0.prototype.expand.call(this, __s13param0, __s13param1, __s13param2);
    this._headerMC.mc_arrow.gotoAndStop(1 + (this._isExpanded ? 1 : 0));
  };
  AllianceMobilizationEventDialogRulesCollapsibleItem.prototype.addRule = function (__s15param0, __s15param1) {
    var __s15local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AllianceMobilizationEventMainExt_RuleItem"))();
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s15local0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s15param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s15local1 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s15local0.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s15param1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s15local1.height = __s15local1.textHeight;
    this._ruleMCs.push(new __dep_export_MovieClipLayoutable.MovieClipLayoutable(__s15local0, new __dep_export_LayoutMargin.LayoutMargin(0, 10, 0, 0)));
    this._contentMC.mc_rulesContainer.addChild(__s15local0);
    this._rulesLayoutStrategy.apply(this._ruleMCs.concat([this._ruleDecoMC]), new __s0local0(0, 0, 0, 0));
  };
  Object.defineProperty(AllianceMobilizationEventDialogRulesCollapsibleItem.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventDialogRulesCollapsibleItem.prototype.getRulesTextForMode = function (__s19param0) {
    var __s19local0;
    var __s19local1 = this;
    switch (__s19param0) {
      case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_NORMAL:
        __s19local0 = [["dialogue_ame_rules_text_topic_participation_normal", "dialogue_ame_rules_text_participation_normal"], ["dialogue_ame_rules_text_topic_gameplay_normal", "dialogue_ame_rules_text_gameplay_normal"], ["dialogue_ame_rules_text_topic_division_normal", "dialogue_ame_rules_text_division_normal"], ["dialogue_ame_rules_text_topic_rewards_normal", "dialogue_ame_rules_text_rewards_normal"]];
        break;
      case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_QUALIFICATION:
        __s19local0 = [["dialogue_ame_rules_text_topic_participation_qualification", "dialogue_ame_rules_text_participation_qualification"], ["dialogue_ame_rules_text_topic_gameplay_qualification", "dialogue_ame_rules_text_gameplay_qualification"], ["dialogue_ame_rules_text_topic_division_qualification", "dialogue_ame_rules_text_division_qualification"], ["dialogue_ame_rules_text_topic_rewards_qualification", "dialogue_ame_rules_text_rewards_qualification"]];
        break;
      case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_ADJUSTMENT:
        __s19local0 = [["dialogue_ame_rules_text_topic_participation_adjustment", "dialogue_ame_rules_text_participation_adjustment"], ["dialogue_ame_rules_text_topic_gameplay_adjustment", "dialogue_ame_rules_text_gameplay_adjustment"], ["dialogue_ame_rules_text_topic_division_adjustment", "dialogue_ame_rules_text_division_adjustment"], ["dialogue_ame_rules_text_topic_rewards_adjustment", "dialogue_ame_rules_text_rewards_adjustment"]];
        break;
      default:
        __s19local0 = [["dialogue_ame_rules_text_topic_participation_normal", "dialogue_ame_rules_text_participation_normal"], ["dialogue_ame_rules_text_topic_gameplay_normal", "dialogue_ame_rules_text_gameplay_normal"], ["dialogue_ame_rules_text_topic_division_normal", "dialogue_ame_rules_text_division_normal"], ["dialogue_ame_rules_text_topic_rewards_normal", "dialogue_ame_rules_text_rewards_normal"]];
    }
    return __s19local0.map(function (__s22param0) {
      return __s22param0.map(function (__s24param0) {
        return __s19local1.eventVO.getEventSpecificTextID(__s24param0);
      });
    });
  };
  AllianceMobilizationEventDialogRulesCollapsibleItem.prototype.getModeTextID = function (__s26param0) {
    switch (__s26param0) {
      case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_NORMAL:
        return "button_ame_rules_mode_title_normal";
      case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_QUALIFICATION:
        return "button_ame_rules_mode_title_qualification";
      case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_ADJUSTMENT:
        return "button_ame_rules_mode_title_adjustments";
      default:
        return "button_ame_rules_mode_title_normal";
    }
  };
  Object.defineProperty(AllianceMobilizationEventDialogRulesCollapsibleItem.prototype, "contentHeight", {
    get: function () {
      return this._ruleDecoMC.disp.y + this._ruleDecoMC.height;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceMobilizationEventDialogRulesCollapsibleItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.AllianceMobilizationEventDialogRulesCollapsibleItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
