import { AllianceConst } from "../../../ggs.dll/reconstructed/exports/AllianceConst";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class ADPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_CHANGE_DIPLOMACY;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = int(__s9local0.ODR);
        var __s9local2 = int(__s9local0.NDR);
        var __s9local3 = int(__s9local0.S);
        CastleModel.allianceData.parseAllianceInfo(__s9local0.AS);
        CastleModel.allianceData.parseAllianceInfo(__s9local0.AO);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(this.getTitleText(__s9local3), this.getCopyText(__s9local1, __s9local2, __s9local3)));
        break;
      case ERROR.OTHER_ALLIANCE_REACHED_MAXIMUM:
        if ((__s9local0 = JSON.parse(__s9param1[1])).NDR == AllianceConst.DIPLOMACY_REAL_ALLIED) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("dialog_alliance_maxHardPacted")));
        } else if (__s9local0.NDR == AllianceConst.DIPLOMACY_SOFT_ALLIED) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("dialog_alliance_maxSoftPacted")));
        }
        break;
      case ERROR.THIS_ALLIANCE_REACHED_MAXIMUM:
        if ((__s9local0 = JSON.parse(__s9param1[1])).NDR == AllianceConst.DIPLOMACY_REAL_ALLIED) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("diplomacy_max_pact_myAlliance")));
        } else if (__s9local0.NDR == AllianceConst.DIPLOMACY_SOFT_ALLIED) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("diplomacy_max_noAttack_myAlliance")));
        }
        break;
      case ERROR.EXCEEDING_MAXIMUM_COUNT:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("dialog_diplomacy_error_93")));
        break;
      case ERROR.NO_CHANGE:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("dialog_diplomacy_error_15")));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
  getTitleText(__s16param0) {
    switch (__s16param0) {
      case 0:
        return Localize.text("dialog_allianceDiplomacy_request_title");
      case 1:
        return Localize.text("dialog_allianceDiplomacy_changed_title");
    }
    return "";
  }
  getTextSearch(__s19param0, __s19param1, __s19param2) {
    var __s19local0 = "dialog_allianceDiplomacy_from_";
    switch (__s19param0) {
      case AllianceConst.DIPLOMACY_IN_WAR:
        __s19local0 += "war";
        break;
      case AllianceConst.DIPLOMACY_NEUTRAL:
        __s19local0 += "neutral";
        break;
      case AllianceConst.DIPLOMACY_REAL_ALLIED:
        __s19local0 += "pact";
        break;
      case AllianceConst.DIPLOMACY_SOFT_ALLIED:
        __s19local0 += "noAttack";
    }
    __s19local0 += "_to_";
    switch (__s19param1) {
      case AllianceConst.DIPLOMACY_IN_WAR:
        __s19local0 += "war";
        break;
      case AllianceConst.DIPLOMACY_NEUTRAL:
        __s19local0 += "neutral";
        break;
      case AllianceConst.DIPLOMACY_REAL_ALLIED:
        __s19local0 += "pact";
        break;
      case AllianceConst.DIPLOMACY_SOFT_ALLIED:
        __s19local0 += "noAttack";
    }
    __s19local0 += "_";
    switch (__s19param2) {
      case 0:
        __s19local0 += "request";
        break;
      case 1:
        __s19local0 += "changed";
    }
    return __s19local0;
  }
  getCopyText(__s24param0, __s24param1, __s24param2) {
    var __s24local0;
    if ((__s24local0 = Localize.text(this.getTextSearch(__s24param0, __s24param1, __s24param2))) == "") {
      __s24local0 = this.getTextSearch(__s24param0, __s24param1, __s24param2);
    }
    return __s24local0;
  }
}
