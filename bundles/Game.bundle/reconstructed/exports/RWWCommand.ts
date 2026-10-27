import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { RubyWishingWellDialog } from "./RubyWishingWellDialog";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RWWCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RUBY_WISHING_WELL;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    switch (statusCode) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(responseFields[1]);
        CastleModel.rubyWishingWellData.parse_RWW(__s9local0);
        break;
      case ERROR.NOT_ENOUGH_RESOURCES:
        this.layoutManager.hideDialog(RubyWishingWellDialog);
        if ((__s9local0 = responseFields.length > 0 ? JSON.parse(responseFields[1]) : {}).hasOwnProperty("W") && __s9local0.hasOwnProperty("S")) {
          this.showErrorDialog(statusCode, responseFields);
        }
        break;
      default:
        this.layoutManager.hideDialog(RubyWishingWellDialog);
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(RWWCommand, "IExecCommand");
