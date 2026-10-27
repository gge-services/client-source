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
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenLongTermPointEventDialogCommand extends OpenDialogWithAdditionalExternalAssetsCommand {
  openDialog() {
    new UpdateDynamicTopXDataService().updateDynamicTopXForVO(this._eventVO);
    this._dialogProperties.updateEventVO(this._eventVO);
    CastleDialogHandler.getInstance().registerDefaultDialogs(LongTermPointEventDialog, this._dialogProperties);
  }
  addAssets(argument0) {
    this._eventVO = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    CastleModel.smartfoxClient.sendCommandVO(new C2SPointEventGetPointsVO(EventConst.EVENTTYPE_LONGTERM_POINT_EVENT));
    this._dialogProperties = new LongTermPointEventProperties(this._eventVO);
    this.loadSeasonAssets(this._dialogProperties);
    this.loadPointEventAssets(this._dialogProperties, LongTermPointEventDialog.TAB_ICONS_IDS);
  }
  loadPointEventAssets(argument0, argument1) {
    for (var __s9local0 = int(argument1.length), __s9local1 = 0, __s9local2 = argument0.eventVO.skin, __s9local3 = 0; __s9local3 < __s9local0; __s9local3++) {
      var __s9local4;
      var __s9local5;
      var __s9local6 = "";
      if (__s9local3 == LongTermPointEventClientConst.GENERAL_TAB_ID) {
        __s9local5 = __s9local2.assetName;
        __s9local4 = LongTermPointEventClientConst.eventNamePrefix + __s9local2.textSuffix;
        __s9local6 = LongTermPointEventClientConst.eventDescriptionPrefix + __s9local2.textSuffix;
      } else {
        __s9local1 = int(argument1[__s9local3]);
        __s9local5 = LongTermPointEventClientConst.pointEventAssetNames.get(__s9local1);
        __s9local4 = LongTermPointEventClientConst.tabToolTipPrefix + __s9local5.toLowerCase();
      }
      var __s9local7 = LongTermPointEventClientConst.eventAssetFilePrefix + __s9local5;
      var __s9local8 = LongTermPointEventClientConst.tabPrefix + __s9local5.toLowerCase();
      var __s9local9 = LongTermPointEventClientConst.iconPrefix + __s9local5.toLowerCase();
      var __s9local10 = LongTermPointEventClientConst.teaserPrefix + __s9local5;
      argument0.addEventAsset(__s9local1, __s9local5, __s9local9, __s9local8, __s9local10, __s9local4, __s9local6);
      this.loadAsset(__s9local10, __s9local10);
      this.loadAsset(__s9local8, __s9local7);
    }
  }
  loadSeasonAssets(argument0) {
    var __s15local0 = LongTermPointEventClientConst.SEASON_PREFIX + argument0.eventVO.skin.assetName + LongTermPointEventClientConst.SEASON_SUFFIX;
    var __s15local1 = __s15local0;
    argument0.seasonAssetName = __s15local1;
    argument0.seasonClassName = __s15local0;
    this.loadAsset(__s15local0, __s15local1);
  }
}
classImplementsInterfaces(OpenLongTermPointEventDialogCommand, "ISimpleCommand");
