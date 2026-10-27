import { C2SUserAchievedRanksVO } from "./C2SUserAchievedRanksVO";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleEilandTitleErrorDialog } from "./CastleEilandTitleErrorDialog";
import { CastleEilandTitleErrorProperties } from "./CastleEilandTitleErrorProperties";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class APTCommand extends CastleCommand {
  constructor() {
    super();
  }
  get cmdId() {
    return ClientConstSF.S2C_ASSIGN_TITLE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (responseFields.length > 1) {
          var __s9local0 = JSON.parse(responseFields[1]);
          if (!__s9local0.PN) {
            CastleModel.titleData.parseAPT(__s9local0);
          }
        }
        CastleModel.smartfoxClient.sendCommandVO(new C2SUserAchievedRanksVO());
        break;
      case ERROR.LEVEL_TOO_HIGH_OR_LOW:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEilandTitleErrorDialog, new CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_level"));
        break;
      case ERROR.NOT_IN_SAME_ALLIANCE:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEilandTitleErrorDialog, new CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_alliance"));
        break;
      case ERROR.PLAYER_NOT_FOUND:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEilandTitleErrorDialog, new CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_name"));
        break;
      case ERROR.CANNOT_ASSIGN_TO_SELF:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEilandTitleErrorDialog, new CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_self"));
        break;
      case ERROR.ALREADY_HAS_TITLE:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEilandTitleErrorDialog, new CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_same"));
        break;
      case ERROR.IS_NOT_KING:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleEilandTitleErrorDialog, new CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", ""));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(APTCommand, "IExecCommand");
