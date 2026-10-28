import { CastleModel } from "./CastleModel";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { TextHelper } from "./TextHelper";
export class TempServerHelper {
  static get tmpServerEvent() {
    return CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_TEMPSERVER);
  }
  static get skinName() {
    if (TempServerHelper.tmpServerEvent) {
      return TempServerHelper.tmpServerEvent.settingVO.skin;
    } else {
      return "";
    }
  }
  static get isOnTempServer() {
    return EnvGlobalsHandler.globals.isOnTemporaryServer;
  }
  static checkTextIDForABGText(argument0) {
    if (TempServerHelper.isOnTempServer) {
      return TextHelper.getExistingTextID(argument0 + "_" + TempServerHelper.skinName, argument0);
    } else {
      return argument0;
    }
  }
  static getAssetFrame() {
    if (TempServerHelper.tmpServerEvent) {
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
        return 5;
      }
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.isRankSwapScoring) {
        return 4;
      }
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.isCollectorScoring) {
        return 3;
      }
      if (TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
        return 2;
      }
    }
    return 1;
  }
}
