import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { UnitProductionConst } from "../../../ggs.dll/reconstructed/exports/UnitProductionConst";
export class HRUCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REVIVE_HOSPITAL_UNITS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.militaryData.parse_SPL(parsedResponse.spl);
        CastleModel.currencyData.parseGCU(parsedResponse.gcu);
        CastleModel.militaryData.parse_GUI(parsedResponse.gui);
        break;
      case ERROR.INVALID_AMOUNT:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("alert_hospital_amountOutdated")));
        break;
      case ERROR.NO_FREE_CONSTRUCTION_SLOT:
        if (CastleModel.militaryData.getPackageListById(UnitProductionConst.HOSPITAL_LIST).allSlotsBought()) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("alert_no_free_unitslot")));
        } else {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("dialog_hospital_noUnlockedSlotLeft")));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
