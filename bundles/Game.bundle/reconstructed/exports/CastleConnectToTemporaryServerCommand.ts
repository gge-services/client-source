import { CastleConnectToSpecialServerCommand } from "./CastleConnectToSpecialServerCommand";
import { CastleModel } from "./CastleModel";
import { GlobalServerConst } from "../../../ggs.dll/reconstructed/exports/GlobalServerConst";
export class CastleConnectToTemporaryServerCommand extends CastleConnectToSpecialServerCommand {
  setConnectFlag() {
    CastleModel.userData.connectToTempServer = true;
  }
  get externalServerID() {
    return GlobalServerConst.TEMP_SERVER;
  }
  set externalServerID(value) {
    if (!Reflect.set(Object.getPrototypeOf(CastleConnectToTemporaryServerCommand.prototype), "externalServerID", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
  get blockerTextID() {
    return "dialog_clientVersion_switch_confirmDialog_tempServer_mandatory_HTML5_copy";
  }
  set blockerTextID(value) {
    if (!Reflect.set(Object.getPrototypeOf(CastleConnectToTemporaryServerCommand.prototype), "blockerTextID", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
}
