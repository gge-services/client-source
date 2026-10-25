import { CastleCommand } from "./CastleCommand";
import { CastleHospitalEvent } from "./CastleHospitalEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { HospitalFlagsVO } from "./HospitalFlagsVO";
export class HFLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_HOSPITAL_FLAGS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = new HospitalFlagsVO();
        __s9local1.parse_HFL(parsedResponse);
        this.controller.dispatchEvent(new CastleHospitalEvent(CastleHospitalEvent.HOSPITAL_FLAGS_RECEIVED, __s9local1));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
