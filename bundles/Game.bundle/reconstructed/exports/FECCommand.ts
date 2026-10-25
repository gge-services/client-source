import { ClientConstSF } from "./ClientConstSF";
import { FNMCommand } from "./FNMCommand";
export class FECCommand extends FNMCommand {
  get cmdId() {
    return ClientConstSF.S2C_FIND_NEXT_ENEMY_CASTLE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
}
