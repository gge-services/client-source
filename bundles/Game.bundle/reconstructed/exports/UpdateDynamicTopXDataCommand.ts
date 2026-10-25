import { BasicCommand } from "../../../ggs.dll/reconstructed/exports/BasicCommand";
import { CastleBasicController } from "./CastleBasicController";
import { CastleModel } from "./CastleModel";
import { DynamicTopXEvent } from "./DynamicTopXEvent";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { UpdateDynamicTopXDataService } from "./UpdateDynamicTopXDataService";
export class UpdateDynamicTopXDataCommand extends BasicCommand {
  execute(__s5param0 = null) {
    var __s5local0 = __s5param0;
    var __s5local1 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    if (__s5local1) {
      new UpdateDynamicTopXDataService().updateDynamicTopXForVO(__s5local1, __s5local0);
      CastleBasicController.getInstance().dispatchEvent(new DynamicTopXEvent(DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X));
    }
  }
}
