import { ClientConstSF } from "./ClientConstSF";
import { FNMCommand } from "./FNMCommand";
export class FNTCommand extends FNMCommand {
  get cmdId() {
    return ClientConstSF.S2C_FIND_NEXT_TOWER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
}
