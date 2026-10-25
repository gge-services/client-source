import { ClientConstSF } from "./ClientConstSF";
import { FNMCommand } from "./FNMCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class FNTCommand extends FNMCommand {
  get cmdId() {
    return ClientConstSF.S2C_FIND_NEXT_TOWER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
}
classImplementsInterfaces(FNTCommand, "IExecCommand");
