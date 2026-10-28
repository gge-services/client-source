import { APanelButton } from "./APanelButton";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleComponent } from "./CastleComponent";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleUserDataEvent } from "./CastleUserDataEvent";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { IngameClientCommands } from "./IngameClientCommands";
import { IsoEvent } from "./IsoEvent";
export class CastlePanelButton extends APanelButton {
  addEventListener() {
    super.addEventListener();
    CastleComponent.controller.addEventListener(CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListChanged));
  }
  removeEventListener() {
    CastleComponent.controller.removeEventListener(CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListChanged));
    super.removeEventListener();
  }
  updateOnVisible() {
    this.iconMc.gotoAndStop(CastleModel.kingdomData.activeKingdomID == FactionConst.KINGDOM_ID ? 2 : 1);
  }
  isButtonVisible() {
    return CastleLayoutManager.STATE_WORLDMAP == CastleComponent.layoutManager.currentState || CastleComponent.layoutManager.currentState == CastleLayoutManager.STATE_KINGDOMMAP;
  }
  getButtonTooltip() {
    var __s13local0 = castAs(CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (CastleModel.kingdomData.activeKingdomID == FactionConst.KINGDOM_ID) {
      if (__s13local0 && __s13local0.isSpectator) {
        return "panel_action_castle_spectator";
      } else {
        return "panel_action_camp";
      }
    } else {
      return "panel_action_castle";
    }
  }
  get iconClass() {
    return Library.CastleInterfaceElements.Btn_Castle;
  }
  set iconClass(value) {
    super.iconClass = value;
  }
  onButtonClicked() {
    CastleComponent.controller.dispatchEvent(new IsoEvent(IsoEvent.HIDE_PANEL_INFO, []));
    CommandController.instance.executeCommand(IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel);
  }
  onCastleListChanged(argument0) {
    this.update();
  }
}
