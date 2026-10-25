import { C2SGetBookmarkList } from "./C2SGetBookmarkList";
import { C2SKingdomPayInfoVO } from "./C2SKingdomPayInfoVO";
import { CastleCommand } from "./CastleCommand";
import { CastleEilandEvent } from "./CastleEilandEvent";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { WorldIsland } from "../../../ggs.dll/reconstructed/exports/WorldIsland";
export class IKRCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ISLAND_KINGDOM_RESET;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.kingdomData.resetEilandData();
        CastleModel.userData.aquaPoints = 0;
        if (CastleModel.allianceData.myAllianceVO) {
          CastleModel.allianceData.myAllianceVO.aquaPoints = 0;
        }
        CastleModel.armyData.removeAllMovementsByKingdomID(WorldIsland.KINGDOM_ID);
        CastleModel.smartfoxClient.sendCommandVO(new C2SKingdomPayInfoVO());
        CastleModel.smartfoxClient.sendCommandVO(new C2SGetBookmarkList());
        this.controller.dispatchEvent(new CastleEilandEvent(CastleEilandEvent.EILAND_RESET));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
