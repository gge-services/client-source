import { C2SGetTaxInfoVO } from "./C2SGetTaxInfoVO";
import { CastleBasicController } from "./CastleBasicController";
import { CastleCharacterYesNoOKDialog } from "./CastleCharacterYesNoOKDialog";
import { CastleCharacterYesNoOKDialogProperties } from "./CastleCharacterYesNoOKDialogProperties";
import { CastleCollectTaxProgressDialog } from "./CastleCollectTaxProgressDialog";
import { CastleCollectTaxStartDialog } from "./CastleCollectTaxStartDialog";
import { CastleCollectTaxStartDialogProperties } from "./CastleCollectTaxStartDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { TaxInfoVO } from "./TaxInfoVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenActiveTaxDialogCommand extends SimpleCommand {
  execute(argument0 = null) {
    switch (CastleModel.taxData.taxInfoVO.taxState) {
      case TaxInfoVO.TAXSTATUS_NONE:
        CastleBasicController.getInstance().addEventListener(CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrivedForTaxStatusNone));
        CastleModel.smartfoxClient.sendCommandVO(new C2SGetTaxInfoVO());
        break;
      case TaxInfoVO.TAXSTATUS_COLLECTING:
      case TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleCollectTaxProgressDialog);
    }
  }
  onTXIArrivedForTaxStatusNone(argument0) {
    CastleBasicController.getInstance().removeEventListener(CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrivedForTaxStatusNone));
    if (CastleModel.taxData.taxInfoVO.population > 0) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleCollectTaxStartDialog, new CastleCollectTaxStartDialogProperties());
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleCharacterYesNoOKDialog, new CastleCharacterYesNoOKDialogProperties(Localize.text("generic_alert_warning"), Localize.text("alert_nofolk_copy"), 2, null, null, false));
    }
  }
}
classImplementsInterfaces(OpenActiveTaxDialogCommand, "ISimpleCommand");
