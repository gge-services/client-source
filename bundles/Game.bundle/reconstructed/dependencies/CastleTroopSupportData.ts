import { C2SCreateArmyTravelMovementVO } from "./C2SCreateArmyTravelMovementVO";
import { CastleModel } from "./CastleModel";
import { CastleTroopSupportVO } from "./CastleTroopSupportVO";
import { ClientConstCastle } from "./ClientConstCastle";
export class CastleTroopSupportData {
  static parse_STI(argument0) {
    if (!argument0) {
      return null;
    }
    var __s5local0 = new CastleTroopSupportVO();
    __s5local0.fillFromParamObject(argument0);
    __s5local0.targetActionType = ClientConstCastle.ACTION_TYPE_SENDTROUPS;
    return __s5local0;
  }
  static sendTroops(argument0, argument1, argument2, argument3, argument4, argument5, argument6) {
    CastleModel.smartfoxClient.sendCommandVO(new C2SCreateArmyTravelMovementVO(argument0.sourceArea.absAreaPos, argument0.targetArea.absAreaPos, argument0.getArmy(), argument0.waitTime, argument1, argument2, argument3 ? argument3.id : 0, argument4, argument5, argument6));
  }
}
