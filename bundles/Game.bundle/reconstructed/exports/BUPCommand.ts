import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { C2SBuyUnitPackageVO } from "./C2SBuyUnitPackageVO";
import { C2SUnlockPackageSlotVO } from "./C2SUnlockPackageSlotVO";
import { CastleBuySlotAndUnitDialog } from "./CastleBuySlotAndUnitDialog";
import { CastleBuySlotAndUnitDialogProperties } from "./CastleBuySlotAndUnitDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleNoMoneyC2Dialog } from "./CastleNoMoneyC2Dialog";
import { CastleNoMoneyC2DialogProperties } from "./CastleNoMoneyC2DialogProperties";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { CastleWodData } from "./CastleWodData";
import { ClientConstSF } from "./ClientConstSF";
import { CostHelper } from "./CostHelper";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { UnitProductionConst } from "../../../ggs.dll/reconstructed/exports/UnitProductionConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class BUPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_UNIT_PACKAGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    switch (statusCode) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(responseFields[1]);
        CastleModel.militaryData.parse_SPL(__s9local0.spl);
        if (CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseGRC(__s9local0.grc);
        }
        CastleModel.currencyData.parseGCU(__s9local0.gcu);
        CastleModel.militaryData.parse_GUI(__s9local0.gui);
        if (__s9local0.O && __s9local0.O != 0) {
          CastleModel.militaryData.unitInventory.addUnit(__s9local0.O.W, __s9local0.O.AMT);
        }
        break;
      case ERROR.NO_FREE_CONSTRUCTION_SLOT:
        __s9local0 = JSON.parse(responseFields[1]);
        var __s9local1 = CastleModel.wodData.createVObyWOD(__s9local0.WID, CastleWodData.TYPE_UNIT);
        var __s9local2 = int(__s9local0.LID);
        var __s9local3 = int(__s9local0.AMT);
        if (CastleModel.militaryData.getPackageListById(__s9local2).allSlotsBought()) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("alert_no_free_unitslot")));
          return false;
        }
        if (CostHelper.canAfford(__s9local1)) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleBuySlotAndUnitDialog, new CastleBuySlotAndUnitDialogProperties(__s9local1, __s9local2, __s9local3, CastleModel.costsData.getFinalCostsC2(UnitProductionConst.UNLOCK_C2), this.bindFunction(this.onBuyItem)));
        } else {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("errorCode_55")));
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  onBuyItem(argument0, argument1, argument2) {
    if (CastleModel.militaryData.getPackageListById(argument1).playerCanBuyNextSlot()) {
      CastleModel.smartfoxClient.sendCommandVO(new C2SUnlockPackageSlotVO(argument1));
      CastleModel.smartfoxClient.sendCommandVO(new C2SBuyUnitPackageVO(argument1, argument0.wodId, argument2, CastleModel.kingdomData.activeKingdomID, CastleModel.permanentCastleData.getCurrentCastle().areaId));
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNoMoneyC2Dialog, new CastleNoMoneyC2DialogProperties());
    }
  }
}
classImplementsInterfaces(BUPCommand, "IExecCommand");
