Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_HTMLTextLineBreakVO = require("gge-module:export_HTMLTextLineBreakVO");
var __dep_export_PlaceholderToolTip = require("gge-module:export_PlaceholderToolTip");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function AllianceRaidHighlightedEffectTooltip() {}
  AllianceRaidHighlightedEffectTooltip.show = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = __s5param0.effectVO;
    if (__s5local0) {
      var __s5local1 = AllianceRaidHighlightedEffectTooltip.tooltip;
      this._target = __s5param0;
      this.textFieldManager.registerTextField(__s5local1.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_highlightedeffect_name_" + __s5local0.name)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      var __s5local2 = new __dep_export_HTMLTextLineBreakVO.HTMLTextLineBreakVO();
      __s5local2.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_highlightedeffect_description_" + __s5local0.name, this.getPlaceholders(__s5local0, __s5param1, __s5param2)));
      var __s5local3 = this.textFieldManager.registerTextField(__s5local1.txt_description, __s5local2);
      __s5local3.height = __s5local3.textHeight;
      __s5local1.bg.height = __s5local3.textHeight + __s5local3.y + 4;
      __s5param0.mc_hover.visible = true;
      var __s5local4 = __s5param0.localToGlobal(new __s0local0(0, 0));
      var __s5local5 = __s5local4.x + __s5param0.width / 2;
      var __s5local6 = __s5local4.x - __s5param0.width / 2;
      var __s5local7 = __s5local5 + __s5local1.width > __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.stageWidth;
      __s5local1.x = __s5local7 ? __s5local6 - __s5local1.width : __s5local5;
      var __s5local8 = __s5local4.y - __s5param0.height / 2;
      var __s5local9 = Math.min(0, __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().stage.stageHeight - (__s5local8 + __s5local1.bg.height));
      __s5local1.y = __s5local8 + __s5local9;
      __s5local1.mc_arrow.y = 28 - __s5local9;
      __s5local1.mc_arrow.visible = !__s5local7;
      __dep_export_PlaceholderToolTip.PlaceholderToolTip.showProxy(__s5local1);
    }
  };
  AllianceRaidHighlightedEffectTooltip.hideTooltip = function () {
    if (this._target) {
      if (this._target.mc_hover) {
        this._target.mc_hover.visible = false;
      }
      this._target = null;
    }
    __dep_export_PlaceholderToolTip.PlaceholderToolTip.hideToolTip();
  };
  Object.defineProperty(AllianceRaidHighlightedEffectTooltip, "tooltip", {
    get: function () {
      AllianceRaidHighlightedEffectTooltip._tooltip ||= new (__dep_exact_81dacdf05bd32292.getDefinitionByName(AllianceRaidHighlightedEffectTooltip.TOOLTIP_LINKAGE))();
      return AllianceRaidHighlightedEffectTooltip._tooltip;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidHighlightedEffectTooltip.getPlaceholders = function (__s14param0, __s14param1, __s14param2) {
    switch (__s14param0.effectType.type) {
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION:
        return [__s14param2.wallRegenerationTime / __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_SEC];
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION_DELAY_LEFT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION_DELAY_FRONT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION_DELAY_RIGHT:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION_DELAY_ALL:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESERVE_UNIT_KILL:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_INFECTION_RATE_BASE_MALUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_INFECTION_RATE_MELEE_MALUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_INFECTION_RATE_RANGE_MALUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_INFECTION_RATE_WALL_MALUS:
      case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_INFECTION_RATE_COURTYARD_MALUS:
        return [__dep_exact_92d05af59ee2ff30.Localize.text(__s14param1.getBossNameTextID())];
    }
    return null;
  };
  Object.defineProperty(AllianceRaidHighlightedEffectTooltip, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidHighlightedEffectTooltip.TOOLTIP_LINKAGE = "ARE_Main_EffectTooltip";
  return AllianceRaidHighlightedEffectTooltip;
}();
exports.AllianceRaidHighlightedEffectTooltip = __s0local1;
