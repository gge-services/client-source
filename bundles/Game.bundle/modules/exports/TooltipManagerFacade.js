Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TooltipManagerFacade() {}
  TooltipManagerFacade.hideAllTooltips = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().tooltipManager.hide();
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.hideEquipmentToolTip();
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.hideRelicEquipmentToolTip();
    __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.hideToolTip();
    __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.hideAllToolTips();
    __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.hideToolTip();
    __dep_export_MaterialBagTooltipHelper.MaterialBagTooltipHelper.hideToolTip();
    __dep_export_LordEffectHelper.LordEffectHelper.hideToolTip();
    __dep_export_QuestMapTooltipHelper.QuestMapTooltipHelper.hideToolTip();
    __dep_export_CastleFusionCompareToolTip.CastleFusionCompareToolTip.hideToolTip();
    __dep_export_LegendSkillIconHelper.LegendSkillIconHelper.hideToolTip();
    __dep_export_GeneralsSkillTooltipHelper.GeneralsSkillTooltipHelper.hideToolTip();
    __dep_export_CollectableListTooltipHelper.CollectableListTooltipHelper.hideToolTip();
    __dep_export_TextDarkTooltip.TextDarkTooltip.getInstance().hideTooltip();
    __dep_export_PlaceholderToolTip.PlaceholderToolTip.hideToolTip();
    __dep_export_GachaMilestoneTooltipHelper.GachaMilestoneTooltipHelper.hideToolTip();
  };
  return TooltipManagerFacade;
}();
exports.TooltipManagerFacade = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_GeneralsSkillTooltipHelper = require("gge-module:export_GeneralsSkillTooltipHelper");
var __dep_export_CollectableListTooltipHelper = require("gge-module:export_CollectableListTooltipHelper");
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
var __dep_export_GachaMilestoneTooltipHelper = require("gge-module:export_GachaMilestoneTooltipHelper");
var __dep_export_MaterialBagTooltipHelper = require("gge-module:export_MaterialBagTooltipHelper");
var __dep_export_PlaceholderToolTip = require("gge-module:export_PlaceholderToolTip");
var __dep_export_QuestMapTooltipHelper = require("gge-module:export_QuestMapTooltipHelper");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_TextDarkTooltip = require("gge-module:export_TextDarkTooltip");
var __dep_export_CastleFusionCompareToolTip = require("gge-module:export_CastleFusionCompareToolTip");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_LegendSkillIconHelper = require("gge-module:export_LegendSkillIconHelper");
