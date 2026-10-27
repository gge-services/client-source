import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { IngameClientCommands } from "./IngameClientCommands";
import { PrivateOfferFailedStandardDialog } from "./PrivateOfferFailedStandardDialog";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenGenericOfferCommand extends SimpleCommand {
  execute(argument0 = null) {
    super.execute(argument0);
    var __s5local0 = argument0.offerID;
    var __s5local1 = CastleModel.privateOfferData.getOfferById(__s5local0);
    if (__s5local1) {
      CommandController.instance.executeCommand(IngameClientCommands.OPEN_PRIVATE_OFFER_DIALOG_COMMAND, __s5local1);
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(PrivateOfferFailedStandardDialog, new BasicStandardOkDialogProperties(BasicModel.languageData.getTextById("generic_alert_information"), BasicModel.languageData.getTextById("errorCode_219")));
    }
  }
}
classImplementsInterfaces(OpenGenericOfferCommand, "ISimpleCommand");
