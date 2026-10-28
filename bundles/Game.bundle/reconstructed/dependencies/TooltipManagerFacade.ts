import { CastleFusionCompareToolTip } from "./CastleFusionCompareToolTip";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CollectableListTooltipHelper } from "./CollectableListTooltipHelper";
import { ConstructionItemTooltipHelper } from "./ConstructionItemTooltipHelper";
import { DecoBuildingToolTipManager } from "./DecoBuildingToolTipManager";
import { EquipmentIconHelper } from "./EquipmentIconHelper";
import { GachaMilestoneTooltipHelper } from "./GachaMilestoneTooltipHelper";
import { GeneralsSkillTooltipHelper } from "./GeneralsSkillTooltipHelper";
import { LegendSkillIconHelper } from "./LegendSkillIconHelper";
import { LordEffectHelper } from "./LordEffectHelper";
import { MaterialBagTooltipHelper } from "./MaterialBagTooltipHelper";
import { PlaceholderToolTip } from "./PlaceholderToolTip";
import { QuestMapTooltipHelper } from "./QuestMapTooltipHelper";
import { ResourcePanelToolTipManager } from "./ResourcePanelToolTipManager";
import { TextDarkTooltip } from "./TextDarkTooltip";
export class TooltipManagerFacade {
  static hideAllTooltips() {
    CastleLayoutManager.getInstance().tooltipManager.hide();
    EquipmentIconHelper.hideEquipmentToolTip();
    EquipmentIconHelper.hideRelicEquipmentToolTip();
    DecoBuildingToolTipManager.hideToolTip();
    ResourcePanelToolTipManager.hideAllToolTips();
    ConstructionItemTooltipHelper.hideToolTip();
    MaterialBagTooltipHelper.hideToolTip();
    LordEffectHelper.hideToolTip();
    QuestMapTooltipHelper.hideToolTip();
    CastleFusionCompareToolTip.hideToolTip();
    LegendSkillIconHelper.hideToolTip();
    GeneralsSkillTooltipHelper.hideToolTip();
    CollectableListTooltipHelper.hideToolTip();
    TextDarkTooltip.getInstance().hideTooltip();
    PlaceholderToolTip.hideToolTip();
    GachaMilestoneTooltipHelper.hideToolTip();
  }
}
