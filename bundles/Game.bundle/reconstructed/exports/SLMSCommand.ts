import { CastleChangePasswordForSocialMigrationConfirmedDialog } from "./CastleChangePasswordForSocialMigrationConfirmedDialog";
import { CastleChangePasswordForSocialMigrationDialog } from "./CastleChangePasswordForSocialMigrationDialog";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleTutorialSpotlight } from "./CastleTutorialSpotlight";
import { ClientConstSF } from "./ClientConstSF";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { SpecialServerHelper } from "./SpecialServerHelper";
import { UserSocialLoginMigrationHelper } from "./UserSocialLoginMigrationHelper";
export class SLMSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SOCIAL_LOGIN_MIGRATION_STATUS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if ((!!SpecialServerHelper.isOnKeyLoginToNormalLoginServer || UserSocialLoginMigrationHelper.getNameByInstanceID(EnvGlobalsHandler.globals.networkId) != " ") && parsedResponse.hasPassword !== undefined) {
          if (Boolean(parsedResponse.hasPassword)) {
            CastleModel.userData.toShowDialogsAfterJAA.push(CastleChangePasswordForSocialMigrationConfirmedDialog);
          } else {
            if (CastleTutorialSpotlight.instance.isVisible) {
              CastleTutorialSpotlight.instance.clear();
            }
            CastleModel.userData.toShowDialogsAfterJAA.push(CastleChangePasswordForSocialMigrationDialog);
          }
        }
        return true;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
