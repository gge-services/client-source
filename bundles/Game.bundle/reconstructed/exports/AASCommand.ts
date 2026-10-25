import { BasicCommand } from "../../../ggs.dll/reconstructed/exports/BasicCommand";
import { BasicStandardYesNoDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardYesNoDialogProperties";
import { CastleAllianceDialog } from "./CastleAllianceDialog";
import { CastleAllianceDialogProperties } from "./CastleAllianceDialogProperties";
import { CastleAllianceSearchEvent } from "./CastleAllianceSearchEvent";
import { CastleBasicController } from "./CastleBasicController";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLargeYesNoDialog } from "./CastleLargeYesNoDialog";
import { CastleLargeYesNoDialogProperties } from "./CastleLargeYesNoDialogProperties";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleNewAllianceDialog } from "./CastleNewAllianceDialog";
import { CastleSearchAllianceDialog } from "./CastleSearchAllianceDialog";
import { CastleSearchAllianceDialogProperties } from "./CastleSearchAllianceDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { ModernYesNoDialog } from "./ModernYesNoDialog";
import { SearchListAllianceItemVO } from "./SearchListAllianceItemVO";
export class AASCommand extends BasicCommand {
  constructor(...args) {
    super();
  }
  get cmdId() {
    return ClientConstSF.S2C_AUTO_ALLIANCE_SEARCH;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    var __s9local0;
    var __s9local1;
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse.gal) {
          CastleModel.userData.parse_GAL(parsedResponse.gal);
          if (parsedResponse.gam) {
            CastleModel.armyData.parse_GAM(parsedResponse.gam);
          }
          __s9local0 = Localize.text("dialog_alliance_joiningAlliance_failed_title");
          __s9local1 = Localize.text("dialog_alliance_joiningAlliance_failed_copy");
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleLargeYesNoDialog, new CastleLargeYesNoDialogProperties(__s9local0, __s9local1, this.bindFunction(this.showAllianceDialog), null, null, "", "", false));
        } else if (parsedResponse.AL) {
          var __s9local3 = [];
          for (var __s9local4 = 0, __s9local5 = parsedResponse.AL; __s9local4 < __s9local5.length; __s9local4++) {
            var __s9local6 = __s9local5[__s9local4];
            if (__s9local6 !== undefined) {
              var __s9local7 = new SearchListAllianceItemVO();
              __s9local7.parseItem(__s9local6);
              __s9local3.push(__s9local7);
            }
          }
          if (__s9local3.length == 0) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(ModernYesNoDialog, new BasicStandardYesNoDialogProperties("dialog_noAllianceFound_title", "dialog_noAllianceFound_desc", function () {
              CastleLayoutManager.getInstance().hideAllDialogs();
              CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNewAllianceDialog);
            }, this.bindFunction(this.showOrUpdateSearchDialog), this.bindFunction(this.showOrUpdateSearchDialog)));
          } else {
            this.showOrUpdateSearchDialog(__s9local3);
          }
        }
    }
    return false;
  }
  showOrUpdateSearchDialog(__s22param0) {
    if (CastleLayoutManager.getInstance().isDialogVisibleByName(CastleSearchAllianceDialog)) {
      CastleBasicController.getInstance().dispatchEvent(new CastleAllianceSearchEvent(CastleAllianceSearchEvent.ALLIANCE_SEARCH_UPDATED, __s22param0));
    } else {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSearchAllianceDialog, new CastleSearchAllianceDialogProperties(__s22param0));
    }
  }
  showAllianceDialog(__s26param0) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAllianceDialog, new CastleAllianceDialogProperties());
  }
}
