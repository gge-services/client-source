import { AResourceProductionBuildingVO } from "./AResourceProductionBuildingVO";
import { CastleEffectEnum } from "./CastleEffectEnum";
import { CastleModel } from "./CastleModel";
import { ClientConstColor } from "./ClientConstColor";
import { CollectableEnum } from "./CollectableEnum";
import { EffectTypeEnum } from "./EffectTypeEnum";
import { GenericTextIds } from "../../../ggs.dll/reconstructed/exports/GenericTextIds";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { LocalizedNumberVO } from "../../../ggs.dll/reconstructed/exports/LocalizedNumberVO";
import { LocalizedTextVO } from "../../../ggs.dll/reconstructed/exports/LocalizedTextVO";
import { MathBase } from "../../../ggs.dll/reconstructed/exports/MathBase";
export class WoodcutterBuildingVO extends AResourceProductionBuildingVO {
  get isBoostableBuilding() {
    return true;
  }
  set isBoostableBuilding(value) {
    super.isBoostableBuilding = value;
  }
  get resourceType() {
    return CollectableEnum.WOOD;
  }
  set resourceType(value) {
    super.resourceType = value;
  }
  createInfoPanelItems(argument0) {
    var __s13local0 = CastleModel.subscriptionData.isEffectTypeActive(EffectTypeEnum.EFFECT_TYPE_WOOD_PRODUCTION_BOOST);
    argument0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, "basicProduktion", new LocalizedNumberVO(MathBase.round(this.getBaseProductionValue(), 1)), this.getInfoItemTextColor(CastleEffectEnum.WOODPRODUCTION));
    argument0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Forest, "utilization", new LocalizedTextVO(GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    argument0.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new LocalizedTextVO(GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]), ClientConstColor.FONT_DEFAULT_COLOR, false, __s13local0);
    argument0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, {
      t: "xPerHour",
      p: [Localize.text("wood")]
    }, new LocalizedNumberVO(MathBase.round(this.getFinalProductionValue(), 1)), this.getInfoItemTextColor(CastleEffectEnum.UNBOOSTEDWOODPRODUCTION), false, __s13local0);
    if (this.decoPoints > 0) {
      argument0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(CastleEffectEnum.DECOPOINTS), true);
    }
  }
  createInfoDialogItems(argument0) {
    argument0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, "woodproduction", new LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)), ClientConstColor.FONT_DEFAULT_COLOR, true);
  }
}
