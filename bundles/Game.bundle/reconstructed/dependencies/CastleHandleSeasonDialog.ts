import { ACastleHandleSpaceDialog } from "./ACastleHandleSpaceDialog";
import { C2STreasureMapsVO } from "./C2STreasureMapsVO";
import { CastleModel } from "./CastleModel";
import { CastleSpecialEventEvent } from "./CastleSpecialEventEvent";
import { CastleStartSeasonEventDialogSupport } from "./CastleStartSeasonEventDialogSupport";
import { CollectableRenderClips } from "./CollectableRenderClips";
import { CollectableRenderHelper } from "./CollectableRenderHelper";
import { CollectableRenderOptions } from "./CollectableRenderOptions";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { LocalizedTextVO } from "../../../ggs.dll/reconstructed/exports/LocalizedTextVO";
const __s0local0 = createjs.Point;
export class CastleHandleSeasonDialog extends ACastleHandleSpaceDialog {
  initLoaded(argument0 = null) {
    super.initLoaded(argument0);
    this.sublayers.add(ACastleHandleSpaceDialog.SUBLAYER_SUPPORT, null, new CastleStartSeasonEventDialogSupport(this.dialogDisp.sublayer_support));
  }
  getSublayerProperties(argument0) {
    if (argument0 == ACastleHandleSpaceDialog.SUBLAYER_SUPPORT) {
      return this.dialogProperties_0.seasonEventVO;
    } else {
      return super.getSublayerProperties(argument0);
    }
  }
  showLoaded(argument0 = null) {
    super.showLoaded(argument0);
    CastleModel.specialEventData.addEventListener(CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    CastleModel.specialEventData.addEventListener(CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    CastleModel.smartfoxClient.sendCommandVO(new C2STreasureMapsVO(this.dialogProperties_0.getSpaceID()));
  }
  hideLoaded(argument0 = null) {
    super.hideLoaded(argument0);
    CastleModel.specialEventData.removeEventListener(CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    CastleModel.specialEventData.removeEventListener(CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  }
  onBackgroundSkinLoaded(argument0) {
    super.onBackgroundSkinLoaded(argument0);
    this.textFieldManager.registerTextField(this.backgroundDisp.mc_banner.txt_award, new LocalizedTextVO("reward"));
    this.updateReward(this.backgroundDisp.mc_banner.mc_rewardHolder);
  }
  updateReward(argument0) {
    var __s17local0 = this.dialogProperties_0.getFirstSeasonReward();
    argument0.x = __s17local0 && instanceOfClass(__s17local0, "CollectableItemBuildingVO") && __s17local0.buildingVO && __s17local0.buildingVO.type == "Seafight" ? -7 : 0;
    var __s17local1 = new CollectableRenderOptions(CollectableRenderOptions.SET_ICON, new __s0local0(91, 91));
    __s17local1.tooltip.showEquipmentCountdown = false;
    CollectableRenderHelper.displaySingleItemComplete(this, new CollectableRenderClips(argument0).addIconMc(argument0), __s17local0, __s17local1);
  }
  onEventUpdated(argument0) {
    if (argument0.specialEventVO.eventId == this.dialogProperties_0.getEventId()) {
      this.showCurrentSublayer();
    }
  }
  get dialogProperties_0() {
    return this.properties;
  }
  static NAME = "CastleSeason";
}
