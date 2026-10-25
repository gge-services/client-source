import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { RubyWishingWellDialog } from "./RubyWishingWellDialog";
export class RWWCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RUBY_WISHING_WELL;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleModel.rubyWishingWellData.parse_RWW(__s9local0);
        break;
      case ERROR.NOT_ENOUGH_RESOURCES:
        this.layoutManager.hideDialog(RubyWishingWellDialog);
        if ((__s9local0 = __s9param1.length > 0 ? JSON.parse(__s9param1[1]) : {}).hasOwnProperty("W") && __s9local0.hasOwnProperty("S")) {
          this.showErrorDialog(__s9param0, __s9param1);
        }
        break;
      default:
        this.layoutManager.hideDialog(RubyWishingWellDialog);
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
