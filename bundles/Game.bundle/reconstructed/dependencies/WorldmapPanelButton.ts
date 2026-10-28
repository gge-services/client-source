import { APanelButton } from "./APanelButton";
import { CastleComponent } from "./CastleComponent";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { ClientConstLevelRestrictions } from "./ClientConstLevelRestrictions";
import { ClientConstTextIds } from "./ClientConstTextIds";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { IngameClientCommands } from "./IngameClientCommands";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
const __s0local0 = createjs.Point;
export class WorldmapPanelButton extends APanelButton {
  addEventListener() {
    super.addEventListener();
    this.listenOnXPChanged();
  }
  get iconClass() {
    return Library.CastleInterfaceElements.Btn_WorldMap;
  }
  set iconClass(value) {
    super.iconClass = value;
  }
  isButtonEnabled() {
    return CastleModel.userData.userLevel >= ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP;
  }
  isButtonVisible() {
    return CastleComponent.layoutManager.currentState == CastleLayoutManager.STATE_ISO;
  }
  getButtonTooltip() {
    if (this.isButtonEnabled()) {
      return "panel_action_worldmap";
    } else {
      return Localize.text(ClientConstTextIds.LEVEL_NEEDED, [ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP]);
    }
  }
  get iconDimension() {
    return new __s0local0(40, 40);
  }
  set iconDimension(value) {
    super.iconDimension = value;
  }
  onButtonClicked() {
    if (CastleModel.kingdomData.activeKingdomID != FactionConst.KINGDOM_ID || CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION)) {
      CommandController.instance.executeCommand(IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND);
    } else {
      CommandController.instance.executeCommand(IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  }
}
