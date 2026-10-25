import { CastleCraftingMaterialEvent } from "./CastleCraftingMaterialEvent";
import { CastleDispatchingCommand } from "./CastleDispatchingCommand";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class GCCCommand extends CastleDispatchingCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_CONSTRUCTION_CRAFTING_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleModel.craftingMaterialData.dispatchEvent(new CastleCraftingMaterialEvent(CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED));
    }
    return super.executeCommand(statusCode, responseFields);
  }
  get eventType() {
    return CastleServerMessageArrivedEvent.GCC_ARRIVED;
  }
  set eventType(value) {
    super.eventType = value;
  }
}
