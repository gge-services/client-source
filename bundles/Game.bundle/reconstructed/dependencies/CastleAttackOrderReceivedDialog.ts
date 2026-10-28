import { CastleAttackOrderCanceledDialog } from "./CastleAttackOrderCanceledDialog";
import { CastleBookmarkPasserProperties } from "./CastleBookmarkPasserProperties";
import { CastleBookmarkShowAttackersDialog } from "./CastleBookmarkShowAttackersDialog";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { DateTimeStyle } from "../../../ggs.dll/reconstructed/exports/DateTimeStyle";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { LocalizedTextVO } from "../../../ggs.dll/reconstructed/exports/LocalizedTextVO";
import { TextVO } from "../../../ggs.dll/reconstructed/exports/TextVO";
const __s0local0 = createjs.Point;
export class CastleAttackOrderReceivedDialog extends CastleAttackOrderCanceledDialog {
  static NAME: any;
  constructor() {
    CONSTRUCTOR_HACK;
    super();
  }
  get isMessageObsolete() {
    return super.isMessageObsolete || !this.dialogProperties.bookmarkVO.attackOrderDetails;
  }
  set isMessageObsolete(value) {
    super.isMessageObsolete = value;
  }
  initAttackOrderDetails() {
    var __s9local0 = this.dialogDisp.mc_details;
    __s9local0.visible = true;
    var __s9local1 = this.dialogProperties.bookmarkVO.attackOrderDetails;
    var __s9local2 = __s9local1.attackDate;
    var __s9local3 = new TextVO(Localize.datetime(__s9local2, DateTimeStyle.SHORT, DateTimeStyle.NONE));
    this.textFieldManager.registerTextField(__s9local0.txt_date, __s9local3);
    var __s9local4 = new TextVO(Localize.datetime(__s9local2, DateTimeStyle.NONE, DateTimeStyle.SHORT));
    this.textFieldManager.registerTextField(__s9local0.txt_time, __s9local4);
    var __s9local5 = __s9local1.assignedAttackers.length > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular";
    this.textFieldManager.registerTextField(__s9local0.mc_participants.txt_participants, new LocalizedTextVO(__s9local5, [__s9local1.assignedAttackers.length]));
    __s9local0.mc_participants.actLikeButton = true;
    __s9local0.mc_participants.mouseChildren = false;
    __s9local0.mc_participants.toolTipText = "dialog_alliance_bookmarks_attackerList_tooltip";
  }
  getPosition() {
    return new __s0local0(this.dialogProperties.bookmarkVO.posX, this.dialogProperties.bookmarkVO.posY);
  }
  onClick(event) {
    super.onClick(event);
    switch (event.target) {
      case this.dialogDisp.mc_details.mc_participants:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleBookmarkShowAttackersDialog, new CastleBookmarkPasserProperties(this.dialogProperties.bookmarkVO));
    }
  }
  get copyTextId() {
    return "dialog_alliance_bookmarks_attackMessage_copy";
  }
  set copyTextId(value) {
    super.copyTextId = value;
  }
  get titleTextId() {
    return "dialog_alliance_bookmarks_attackMessage_header";
  }
  set titleTextId(value) {
    super.titleTextId = value;
  }
  static __initialize_static_members() {
    CastleAttackOrderReceivedDialog.NAME = "CastleAttackOrderReceivedDialog";
  }
}
CastleAttackOrderReceivedDialog.__initialize_static_members();
