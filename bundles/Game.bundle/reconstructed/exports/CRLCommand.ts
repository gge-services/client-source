import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
export class CRLCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.C2S_CANCEL_RECRUITMENT_LOOP;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    return true;
  }
}
