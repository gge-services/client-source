import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleModel } from "./CastleModel";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { IngameClientCommands } from "./IngameClientCommands";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { SpecialServerHelper } from "./SpecialServerHelper";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleFacebookLoginRegistrationCommand extends SimpleCommand {
  execute(argument0 = null) {
    CastleModel.localData.saveLoginData("", "");
    CastleModel.localData.saveFacebookID(CastleFacebookModule.userID);
    if (!!CastleFacebookModule.accessToken && CastleFacebookModule.accessToken != "" && !SpecialServerHelper.isOnSpecialServer && !EnvGlobalsHandler.globals.isSpecialServerConnectStarted && !CastleModel.userData.isConnectedToFacebook) {
      CommandController.instance.executeCommand(IngameClientCommands.MAP_USER_TO_FACEBOOK, true);
    }
  }
}
classImplementsInterfaces(CastleFacebookLoginRegistrationCommand, "ISimpleCommand");
