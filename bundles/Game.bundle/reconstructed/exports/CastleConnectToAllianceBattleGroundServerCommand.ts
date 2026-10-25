import { CastleConnectToSpecialServerCommand } from "./CastleConnectToSpecialServerCommand";
import { CastleModel } from "./CastleModel";
import { GlobalServerConst } from "../../../ggs.dll/reconstructed/exports/GlobalServerConst";
export class CastleConnectToAllianceBattleGroundServerCommand extends CastleConnectToSpecialServerCommand {
  setConnectFlag() {
    CastleModel.userData.connectToABGServer = true;
  }
  get externalServerID() {
    return GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER;
  }
  set externalServerID(value) {
    if (!Reflect.set(Object.getPrototypeOf(CastleConnectToAllianceBattleGroundServerCommand.prototype), "externalServerID", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
  get blockerTextID() {
    return "dialog_clientVersion_switch_confirmDialog_beyondTheHorizon_mandatory_HTML5_copy";
  }
  set blockerTextID(value) {
    if (!Reflect.set(Object.getPrototypeOf(CastleConnectToAllianceBattleGroundServerCommand.prototype), "blockerTextID", value, this)) {
      throw new TypeError("Inherited accessor is not writable");
    }
  }
}
