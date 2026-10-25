import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastlePrivateOfferDialogCreator } from "./CastlePrivateOfferDialogCreator";
import { CastlePrivateOfferDialogProperties } from "./CastlePrivateOfferDialogProperties";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class OpenPrivateOfferDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = castAs(__s5param0, "PrivateOfferVO");
    if (__s5local0) {
      var __s5local1 = CastlePrivateOfferDialogCreator.getPrivateOfferDialogName(__s5local0);
      if (__s5local1) {
        var __s5local2 = CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(__s5local1);
        if (__s5local2) {
          CastleDialogHandler.getInstance().registerDialogsWithType(__s5local2, new CastlePrivateOfferDialogProperties(__s5local0), false, CastleDialogConsts.PRIORITY_LOW, 0, CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_DAY);
        }
      }
    }
  }
}
