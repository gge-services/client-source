import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BasicSmartfoxConstants } from "../../../ggs.dll/reconstructed/exports/BasicSmartfoxConstants";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { info } from "../../../ggs.dll/reconstructed/exports/info";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TimezoneUtil } from "../../../ggs.dll/reconstructed/exports/TimezoneUtil";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleSocialLoginCommand extends SimpleCommand {
  execute(argument0 = null) {
    BasicController.getInstance().onLogIn();
    var __s5local0 = [];
    __s5local0[0] = EnvGlobalsHandler.globals.pln;
    __s5local0[1] = EnvGlobalsHandler.globals.sig;
    __s5local0[2] = BasicModel.smartfoxClient.connectionTime;
    __s5local0[3] = BasicModel.smartfoxClient.roundTripTime;
    __s5local0[4] = EnvGlobalsHandler.globals.referrer;
    __s5local0[5] = EnvGlobalsHandler.globals.networkId;
    __s5local0[6] = EnvGlobalsHandler.globals.accountId;
    __s5local0[7] = EnvGlobalsHandler.globals.suk;
    __s5local0[8] = TimezoneUtil.getTrackingTimezone();
    __s5local0[9] = BasicModel.socialData.displayNameExistingPlayer;
    __s5local0[10] = EnvGlobalsHandler.globals.urlVariables.websiteId;
    __s5local0[11] = EnvGlobalsHandler.globals.urlVariables.loginSource;
    __s5local0[12] = EnvGlobalsHandler.globals.urlVariables.urlParams.get("gci") || "";
    info("Social login, request parameters: " + __s5local0);
    BasicModel.smartfoxClient.sendMessage(BasicSmartfoxConstants.C2S_NEW_LOGIN_SOCIAL, __s5local0);
  }
}
classImplementsInterfaces(CastleSocialLoginCommand, "ISimpleCommand");
