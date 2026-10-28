import { APanelButton } from "./APanelButton";
import { CastleComponent } from "./CastleComponent";
import { CastleInboxDialogProperties } from "./CastleInboxDialogProperties";
import { CastleMessageDataEvent } from "./CastleMessageDataEvent";
import { CastleMessageInboxDialog } from "./CastleMessageInboxDialog";
import { CastleModel } from "./CastleModel";
import { CastleMovieClipHelper } from "./CastleMovieClipHelper";
import { ClientConstLevelRestrictions } from "./ClientConstLevelRestrictions";
import { ClientConstTextIds } from "./ClientConstTextIds";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class MessagePanelButton extends APanelButton {
  addEventListener() {
    super.addEventListener();
    CastleComponent.controller.addEventListener(CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onMessagesUpdated));
    this.listenOnXPChanged();
  }
  removeEventListener() {
    CastleComponent.controller.removeEventListener(CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onMessagesUpdated));
    super.removeEventListener();
  }
  updateOnVisible() {
    super.updateOnVisible();
    var __s9local0 = int(CastleModel.messageData.countUnreadUnarchivedMessages([]));
    this.setAmount(__s9local0 > 0, __s9local0);
  }
  get iconClass() {
    return Library.CastleInterfaceElements.Btn_Message_Relicus;
  }
  set iconClass(value) {
    super.iconClass = value;
  }
  isButtonEnabled() {
    return CastleModel.userData.userLevel >= ClientConstLevelRestrictions.MIN_LEVEL_MESSAGES;
  }
  getButtonTooltip() {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_messages";
    } else {
      return Localize.text(ClientConstTextIds.LEVEL_NEEDED, [ClientConstLevelRestrictions.MIN_LEVEL_MESSAGES]);
    }
  }
  onButtonClicked() {
    CastleComponent.dialogHandler.registerDefaultDialogs(CastleMessageInboxDialog, new CastleInboxDialogProperties());
  }
  onMessagesUpdated(argument0) {
    this.update();
    CastleMovieClipHelper.updateParentCache(this.disp);
  }
}
