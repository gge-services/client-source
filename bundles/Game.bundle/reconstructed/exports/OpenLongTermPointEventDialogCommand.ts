import { C2SPointEventGetPointsVO } from "./C2SPointEventGetPointsVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { LongTermPointEventClientConst } from "./LongTermPointEventClientConst";
import { LongTermPointEventDialog } from "./LongTermPointEventDialog";
import { LongTermPointEventProperties } from "./LongTermPointEventProperties";
import { OpenDialogWithAdditionalExternalAssetsCommand } from "./OpenDialogWithAdditionalExternalAssetsCommand";
import { UpdateDynamicTopXDataService } from "./UpdateDynamicTopXDataService";
export class OpenLongTermPointEventDialogCommand extends OpenDialogWithAdditionalExternalAssetsCommand {
  openDialog() {
    new UpdateDynamicTopXDataService().updateDynamicTopXForVO(this._eventVO);
    this._dialogProperties.updateEventVO(this._eventVO);
    CastleDialogHandler.getInstance().registerDefaultDialogs(LongTermPointEventDialog, this._dialogProperties);
  }
  addAssets(__s7param0) {
    this._eventVO = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    CastleModel.smartfoxClient.sendCommandVO(new C2SPointEventGetPointsVO(EventConst.EVENTTYPE_LONGTERM_POINT_EVENT));
    this._dialogProperties = new LongTermPointEventProperties(this._eventVO);
    this.loadSeasonAssets(this._dialogProperties);
    this.loadPointEventAssets(this._dialogProperties, LongTermPointEventDialog.TAB_ICONS_IDS);
  }
  loadPointEventAssets(__s9param0, __s9param1) {
    for (var __s9local0 = int(__s9param1.length), __s9local1 = 0, __s9local2 = __s9param0.eventVO.skin, __s9local3 = 0; __s9local3 < __s9local0; __s9local3++) {
      var __s9local4;
      var __s9local5;
      var __s9local6 = "";
      if (__s9local3 == LongTermPointEventClientConst.GENERAL_TAB_ID) {
        __s9local5 = __s9local2.assetName;
        __s9local4 = LongTermPointEventClientConst.eventNamePrefix + __s9local2.textSuffix;
        __s9local6 = LongTermPointEventClientConst.eventDescriptionPrefix + __s9local2.textSuffix;
      } else {
        __s9local1 = int(__s9param1[__s9local3]);
        __s9local5 = LongTermPointEventClientConst.pointEventAssetNames.get(__s9local1);
        __s9local4 = LongTermPointEventClientConst.tabToolTipPrefix + __s9local5.toLowerCase();
      }
      var __s9local7 = LongTermPointEventClientConst.eventAssetFilePrefix + __s9local5;
      var __s9local8 = LongTermPointEventClientConst.tabPrefix + __s9local5.toLowerCase();
      var __s9local9 = LongTermPointEventClientConst.iconPrefix + __s9local5.toLowerCase();
      var __s9local10 = LongTermPointEventClientConst.teaserPrefix + __s9local5;
      __s9param0.addEventAsset(__s9local1, __s9local5, __s9local9, __s9local8, __s9local10, __s9local4, __s9local6);
      this.loadAsset(__s9local10, __s9local10);
      this.loadAsset(__s9local8, __s9local7);
    }
  }
  loadSeasonAssets(__s15param0) {
    var __s15local0 = LongTermPointEventClientConst.SEASON_PREFIX + __s15param0.eventVO.skin.assetName + LongTermPointEventClientConst.SEASON_SUFFIX;
    var __s15local1 = __s15local0;
    __s15param0.seasonAssetName = __s15local1;
    __s15param0.seasonClassName = __s15local0;
    this.loadAsset(__s15local0, __s15local1);
  }
}
