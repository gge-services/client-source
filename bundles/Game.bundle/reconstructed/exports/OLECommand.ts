import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { CollectableEnum } from "./CollectableEnum";
import { CollectableHelper } from "./CollectableHelper";
import { CollectableList } from "./CollectableList";
import { CollectableManager } from "./CollectableManager";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { MysteryBoxOpeningDialog } from "./MysteryBoxOpeningDialog";
import { MysteryBoxOpeningDialogProperties } from "./MysteryBoxOpeningDialogProperties";
export class OLECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_OPEN_LOOT_BOX;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CastleModel.lootBoxData.xml.getLootBoxByID(parsedResponse.LID);
        var __s9local2 = undefined;
        if (parsedResponse.LTR) {
          __s9local2 = CollectableManager.parser.s2cParamList.createList(parsedResponse.LTR);
        }
        if (parsedResponse.LTRR) {
          __s9local2 = CollectableManager.parser.s2cParamList.createList(parsedResponse.LTRR);
        }
        var __s9local3 = parsedResponse.KBS;
        var __s9local4 = CastleModel.lootBoxData.xml.getLootBoxTypeByID(__s9local1.lootBoxTypeID).keyProgress;
        CastleModel.lootBoxData.setKeyProgress(__s9local1.lootBoxTypeID, parsedResponse.KBS);
        var __s9local5 = parsedResponse.TBF;
        var __s9local6 = new CollectableList();
        for (var __s9local7 = 0, __s9local8 = parsedResponse.KTR; __s9local7 < __s9local8.length; __s9local7++) {
          var __s9local9 = __s9local8[__s9local7];
          __s9local6.addItem(CollectableHelper.createVO(CollectableEnum.GENERIC_CURRENCY, __s9local9.AMT, __s9local9.ID));
        }
        var __s9local10 = __s9local2.addList(__s9local6);
        var __s9local11 = parsedResponse.UKI;
        var __s9local12 = parsedResponse.LTR;
        var __s9local13 = new MysteryBoxOpeningDialogProperties(__s9local1, __s9local11, __s9local3, __s9local4, __s9local5, __s9local10, __s9local12);
        CastleDialogHandler.getInstance().registerDefaultDialogs(MysteryBoxOpeningDialog, __s9local13);
        this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.OLE_LOOT_BOX_ARRIVED));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
