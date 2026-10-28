import { APanelButton } from "./APanelButton";
import { CastleComponent } from "./CastleComponent";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { DecoStorageEvent } from "./DecoStorageEvent";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Iso } from "./Iso";
const __s0local0 = createjs.Point;
export class BuildMenuPanelButton extends APanelButton {
  addEventListener() {
    super.addEventListener();
    CastleComponent.controller.addEventListener(DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onAmountChanged));
    CastleComponent.controller.addEventListener(DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onAmountChanged));
  }
  removeEventListener() {
    CastleComponent.controller.removeEventListener(DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onAmountChanged));
    CastleComponent.controller.removeEventListener(DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onAmountChanged));
    super.removeEventListener();
  }
  updateOnVisible() {
    super.updateOnVisible();
    var __s9local0 = int(CastleModel.decoStorage.getCurrentStorage().getCappedNewAmount());
    this.setAmount(__s9local0 > 0 && CastleLayoutManager.getInstance().isInMyCastle, __s9local0);
  }
  get iconClass() {
    return Library.CastleInterfaceElements.Btn_BuildItems;
  }
  set iconClass(value) {
    super.iconClass = value;
  }
  isButtonEnabled() {
    return CastleComponent.layoutManager.isInMyCastle;
  }
  getButtonTooltip() {
    if (this.isButtonEnabled()) {
      return "panel_action_build";
    } else {
      return "alert_never_available";
    }
  }
  get iconDimension() {
    return new __s0local0(40, 40);
  }
  set iconDimension(value) {
    super.iconDimension = value;
  }
  onButtonClicked() {
    CastleComponent.layoutManager.hideAllIngameUIComponents();
    Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
  }
  onAmountChanged(argument0) {
    this.update();
  }
}
