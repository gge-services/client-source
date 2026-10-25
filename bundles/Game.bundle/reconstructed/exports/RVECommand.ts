import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleVoucherEvent } from "./CastleVoucherEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class RVECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REDEEM_VOUCHER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.privateOfferData.dispatchEvent(new CastleVoucherEvent(CastleVoucherEvent.VOUCHER_CODE_SUCCESS));
        break;
      default:
        CastleModel.privateOfferData.dispatchEvent(new CastleVoucherEvent(CastleVoucherEvent.VOUCHER_CODE_FAILED));
    }
    return false;
  }
}
