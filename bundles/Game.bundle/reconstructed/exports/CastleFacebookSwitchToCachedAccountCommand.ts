import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { CastleBasicController } from "./CastleBasicController";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleFacebookSDKEvent } from "./CastleFacebookSDKEvent";
import { CastleModel } from "./CastleModel";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { IngameClientCommands } from "./IngameClientCommands";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleFacebookSwitchToCachedAccountCommand extends SimpleCommand {
  execute(argument0 = null) {
    CommandController.instance.executeCommand(BasicController.COMMAND_LOGOUT);
    CommandController.instance.executeCommand(BasicController.COMMAND_CONNECT_CLIENT);
    CastleBasicController.getInstance().addEventListener(CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onGetFacebookStatus));
    CastleFacebookModule.checkLoginStatus();
  }
  onGetFacebookStatus(argument0) {
    CastleBasicController.getInstance().removeEventListener(CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onGetFacebookStatus));
    CastleModel.localData.saveFacebookID(argument0.authResponse.userID);
    CommandController.instance.executeCommand(BasicController.COMMAND_LOGIN);
    CommandController.instance.executeCommand(IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
  }
}
classImplementsInterfaces(CastleFacebookSwitchToCachedAccountCommand, "ISimpleCommand");
