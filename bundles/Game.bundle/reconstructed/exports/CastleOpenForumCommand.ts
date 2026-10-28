import { BasicOpenForumCommand } from "../../../ggs.dll/reconstructed/exports/BasicOpenForumCommand";
import { BrowserUtil } from "../../../ggs.dll/reconstructed/exports/BrowserUtil";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { ClientConstInstanceIDs } from "./ClientConstInstanceIDs";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { OptionsDialog } from "./OptionsDialog";
import { OptionsDialogProperties } from "./OptionsDialogProperties";
import { PlayerConst } from "../../../ggs.dll/reconstructed/exports/PlayerConst";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { URLRequest } from "../../../ggs.dll/reconstructed/exports/URLRequest";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleOpenForumCommand extends SimpleCommand {
  constructor() {
    const __initial0 = new BasicOpenForumCommand();
    CONSTRUCTOR_HACK;
    super();
    this.basicOpenForumCommand = __initial0;
  }
  execute(argument0?: any) {
    var __s5local0;
    if (argument0 === undefined) {
      argument0 = null;
    }
    if (EnvGlobalsHandler.globals.networkNewsByJS || !EnvGlobalsHandler.globals.useexternallinks || CastleModel.userData.email != PlayerConst.DEFAULT_MAIL) {
      if (ClientConstInstanceIDs.isBetaInstance()) {
        __s5local0 = new URLRequest(CastleOpenForumCommand.BETA_FORUM_URL);
        BrowserUtil.executeNavigateToURL(__s5local0, "_blank");
      } else if (EnvGlobalsHandler.globals.isClosedBeta) {
        __s5local0 = new URLRequest(CastleOpenForumCommand.CLOSED_BETA_FORUM_URL);
        BrowserUtil.executeNavigateToURL(__s5local0, "_blank");
      } else {
        this.basicOpenForumCommand.execute(argument0);
      }
    } else if (!EnvGlobalsHandler.globals.isOnSpecialServer) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(OptionsDialog, new OptionsDialogProperties(OptionsDialog.TAB_ACCOUNT_DETAILS, true));
    }
  }
  static BETA_FORUM_URL = "https://community.goodgamestudios.com/empire/testboard";
  static CLOSED_BETA_FORUM_URL = "https://community.goodgamestudios.com/empire/testboard/entry/password";
}
classImplementsInterfaces(CastleOpenForumCommand, "ISimpleCommand");
