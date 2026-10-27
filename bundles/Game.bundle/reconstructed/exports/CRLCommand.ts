import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CRLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.C2S_CANCEL_RECRUITMENT_LOOP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(argument0, argument1) {
    return true;
  }
}
classImplementsInterfaces(CRLCommand, "IExecCommand");
