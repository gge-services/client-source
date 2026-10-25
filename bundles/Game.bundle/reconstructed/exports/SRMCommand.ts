import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SRMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.C2S_SET_RECRUITMENT_MODE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    return true;
  }
}
classImplementsInterfaces(SRMCommand, "IExecCommand");
