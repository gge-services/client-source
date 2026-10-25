import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class MIRCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RENAME_CASTLE_INVITATION;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0 = JSON.parse(__s9param1[1]);
    CastleModel.userData.parse_MIR(__s9local0);
    CastleModel.userData.parse_MIR_openDialog(__s9local0);
    return true;
  }
}
classImplementsInterfaces(MIRCommand, "IExecCommand");
