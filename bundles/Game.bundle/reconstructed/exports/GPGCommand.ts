import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastlePlayerGiftSentDialog } from "./CastlePlayerGiftSentDialog";
import { CastlePlayerGiftSentDialogProperties } from "./CastlePlayerGiftSentDialogProperties";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { PackageConst } from "../../../ggs.dll/reconstructed/exports/PackageConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GPGCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GRANT_PLAYERGIFT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastlePlayerGiftSentDialog, new CastlePlayerGiftSentDialogProperties(CastleModel.playerGiftData.playerName));
        break;
      case ERROR.TOO_MANY_PACKAGES_SENT_TODAY:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("giftTrader_giftLimitReached", [PackageConst.MAX_PLAYER_GIFT_PER_DAY])));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
classImplementsInterfaces(GPGCommand, "IExecCommand");
