import { ABotCommand } from "./ABotCommand";
import { AMessageVO } from "./AMessageVO";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
import { DarkOkDialog } from "./DarkOkDialog";
export class CheatOfferIDsInHeaderCommand extends ABotCommand {
  execute(argument0 = null) {
    ClientCheatsHelper.performCommand("toggleOfferIDsInMessageSubject");
    if (AMessageVO.showOfferIDsInSubject) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("OfferIDs", "OfferIDs are shown now in the MessageHeader"));
    }
    if (!AMessageVO.showOfferIDsInSubject) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("OfferIDs", "OfferIDs are invisible"));
    }
  }
}
