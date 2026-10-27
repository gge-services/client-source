import { BasicStandardYesNoDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardYesNoDialogProperties";
import { C2SSaveShoppingCartVO } from "./C2SSaveShoppingCartVO";
import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { ModernYesNoDialog } from "./ModernYesNoDialog";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SSCCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SAVE_SHOPPING_CART;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (__s9local0) {
          var __s9local1 = __s9local0.shoppingCartOptionsIdsByCategory.reduce(function (__s13param0, __s13param1) {
            return __s13param0.concat(__s13param1);
          }, []);
          __s9local0.shoppingCartOptionIds = __s9local1;
        }
        break;
      case ERROR.NO_SPACE_WARNING:
        if (__s9local0) {
          var __s9local2 = __s9local0.shoppingCartOptionsIdsByCategory;
          CastleDialogHandler.getInstance().registerDefaultDialogs(ModernYesNoDialog, new BasicStandardYesNoDialogProperties("generic_alert_watchout", "generic_timeSkips_inventoryFull_warning_desc", function () {
            var __s16local0 = new C2SSaveShoppingCartVO(__s9local2, true);
            CastleModel.smartfoxClient.sendCommandVO(__s16local0);
          }));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    CastleBasicController.getInstance().dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.SSC_ARRIVED, [statusCode]));
    return false;
  }
}
classImplementsInterfaces(SSCCommand, "IExecCommand");
