import { BasicContextMenuController } from "../../../ggs.dll/reconstructed/exports/BasicContextMenuController";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { ClientConstInstanceIDs } from "./ClientConstInstanceIDs";
import { EnvironmentProvider } from "../../../ggs.dll/reconstructed/exports/EnvironmentProvider";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
export class ClientBetaHelper {
  static setSupportContextMenu() {
    if (ClientConstInstanceIDs.isBetaInstance() || instanceOfClass(EnvironmentProvider.instance.globals, "CastleEnvironmentGlobals") && EnvironmentProvider.instance.globals.isClosedBeta) {
      BasicContextMenuController.instance.disableContextMenuItem(BasicContextMenuController.SUPPORT_LABEL);
    } else {
      BasicContextMenuController.instance.enableContextMenuItem(BasicContextMenuController.SUPPORT_LABEL);
    }
  }
  static get isOnOpenBeta() {
    return BasicModel.instanceProxy.selectedInstanceVO.instanceLocaId.indexOf("openbeta") > -1;
  }
}
