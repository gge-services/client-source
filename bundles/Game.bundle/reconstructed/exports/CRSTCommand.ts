import { C2SGetCastleResourcesVO } from "./C2SGetCastleResourcesVO";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CRSTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CRAFTING_START;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.craftingData.parseBuildingQueueData(parsedResponse);
        if (CastleModel.areaData && CastleModel.areaData.activeArea && CastleModel.areaData.activeAreaInfo && !CastleModel.craftingData.currentCastleVO.equalsOtherWMO(CastleModel.areaData.activeAreaInfo.objectId, CastleModel.areaData.activeAreaInfo.kingdomID)) {
          CastleModel.smartfoxClient.sendCommandVO(new C2SGetCastleResourcesVO(CastleModel.craftingData.currentCastleVO.objectId, CastleModel.craftingData.currentCastleVO.kingdomID));
        }
        break;
      case ERROR.NO_FREE_CONSTRUCTION_SLOT:
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(CRSTCommand, "IExecCommand");
