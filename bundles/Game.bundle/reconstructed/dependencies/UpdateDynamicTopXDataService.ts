import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleModel } from "./CastleModel";
export class UpdateDynamicTopXDataService {
  updateDynamicTopXForVO(argument0, argument1 = -1) {
    var __s5local0 = argument1 != -1 ? argument1 : BasicModel.instanceProxy.selectedInstanceVO.zoneId;
    var __s5local1 = CastleModel.dynamicTopXxmlData.getTopX(__s5local0, argument0.eventId, argument0.leagueID);
    if (__s5local1 && __s5local1.length > 0 && argument0.topX.length > 0) {
      argument0.setDynamicTopX(__s5local1);
    }
  }
}
