import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleVoucherEvent } from "./CastleVoucherEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RVECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REDEEM_VOUCHER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(argument0, argument1) {
    switch (argument0) {
      case ERROR.ALL_OK:
        CastleModel.privateOfferData.dispatchEvent(new CastleVoucherEvent(CastleVoucherEvent.VOUCHER_CODE_SUCCESS));
        break;
      default:
        CastleModel.privateOfferData.dispatchEvent(new CastleVoucherEvent(CastleVoucherEvent.VOUCHER_CODE_FAILED));
    }
    return false;
  }
}
classImplementsInterfaces(RVECommand, "IExecCommand");
