import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class CastleLoginCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    BasicController.getInstance().onLogIn();
    BasicModel.sessionData.loggedIn = true;
    if (!__s0local2() && !__s0local3(__s5param0) && !__s0local4()) {
      __s0local5();
    }
  }
}
