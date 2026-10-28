import { BasicProperties } from "../../../ggs.dll/reconstructed/exports/BasicProperties";
import { C2STreasureMapsVO } from "./C2STreasureMapsVO";
import { C2STreasuremapUnitTransferVO } from "./C2STreasuremapUnitTransferVO";
import { CastleModel } from "./CastleModel";
import { CastleSendTroopsToSeasonAddUnitsDialog } from "./CastleSendTroopsToSeasonAddUnitsDialog";
import { ClientConstCastle } from "./ClientConstCastle";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
export class CastleTransferTroopsToSeasonProperties extends BasicProperties {
  constructor() {
    super();
  }
  get unitTravelTime() {
    return this.treasuremapVO.travelTime;
  }
  get unitTravelTaxRate() {
    return this.treasuremapVO.unitTravelTaxRate;
  }
  get exceptingKingdomID() {
    return [FactionConst.KINGDOM_ID];
  }
  isToolTravelingAllowed(argument0) {
    return argument0.isTravelingToTargetAllowed(this.treasuremapVO.mapID, this.getAreaType()) && argument0.attackType == ClientConstCastle.ATTACK_TOOL && argument0.canBeUsedToAttackNPC;
  }
  get addUnitsDialogKey() {
    return CastleSendTroopsToSeasonAddUnitsDialog;
  }
  get insufficentTimeAlert() {
    return this.seasonVO.remainingEventTimeInSeconds < this.treasuremapVO.travelTime;
  }
  getUnitTransferCommand(argument0, argument1, argument2) {
    return new C2STreasuremapUnitTransferVO(this.treasuremapVO.mapID, argument0.selectedCastleVO.objectId, argument0.selectedCastleVO.kingdomID, argument1);
  }
  isSpecialEvent(argument0) {
    return !this.seasonVO || this.seasonVO.eventId == argument0;
  }
  get targetCapacity() {
    return this.treasuremapVO.freeUnitSlots;
  }
  get seasonVO() {
    return CastleModel.specialEventData.activeSeasonVO;
  }
  get treasuremapVO() {
    return CastleModel.specialEventData.activeSeasonVO.treasureMapVO;
  }
  getAreaType() {
    return WorldConst.AREA_TYPE_TREASURE_CAMP;
  }
  get descriptionTextID() {
    return "dialog_season_sendTroops_info";
  }
  get additionalDataUpdateCommands() {
    var __s31local0 = [];
    __s31local0.push(new C2STreasureMapsVO(this.treasuremapVO.mapID));
    return __s31local0;
  }
  get targetFoodConsumption() {
    return 0;
  }
}
