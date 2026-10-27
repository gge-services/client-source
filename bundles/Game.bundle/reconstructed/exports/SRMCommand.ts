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
  executeCommand(argument0, argument1) {
    return true;
  }
}
classImplementsInterfaces(SRMCommand, "IExecCommand");
