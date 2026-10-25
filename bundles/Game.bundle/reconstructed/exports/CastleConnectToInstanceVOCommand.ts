import { BasicConnectToInstanceVOCommand } from "../../../ggs.dll/reconstructed/exports/BasicConnectToInstanceVOCommand";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleModel } from "./CastleModel";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { SmartfoxEvent } from "../../../ggs.dll/reconstructed/exports/SmartfoxEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleConnectToInstanceVOCommand extends BasicConnectToInstanceVOCommand {
  onConnectionEstablished(__s5param0) {
    if (BasicModel.localData) {
      if (EnvGlobalsHandler.globals.suk == "" && !CastleModel.userData.connectToSpecialServer) {
        BasicModel.localData.saveInstance(BasicModel.instanceProxy.selectedInstanceVO.instanceId, BasicModel.instanceProxy.selectedInstanceVO.zoneId);
      }
    }
    BasicModel.smartfoxClient.removeEventListener(SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
  }
  static NAME = "BasicConnectToInstanceVOCommand";
}
classImplementsInterfaces(CastleConnectToInstanceVOCommand, "ISimpleCommand");
