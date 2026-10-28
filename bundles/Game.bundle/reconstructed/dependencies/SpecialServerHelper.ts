import { ABGHelper } from "./ABGHelper";
import { CastleModel } from "./CastleModel";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { GoodgamePartners } from "../../../ggs.dll/reconstructed/exports/GoodgamePartners";
import { KingdomEnum } from "./KingdomEnum";
import { TempServerHelper } from "./TempServerHelper";
import { TextHelper } from "./TextHelper";
export class SpecialServerHelper {
  static get isOnSpecialServer() {
    return ABGHelper.isOnABGServer || TempServerHelper.isOnTempServer;
  }
  static get eventIsRunning() {
    if (ABGHelper.isOnABGServer) {
      return !!ABGHelper.abgEvent;
    } else {
      return !!TempServerHelper.isOnTempServer && !!TempServerHelper.tmpServerEvent;
    }
  }
  static get useSkin() {
    return SpecialServerHelper.isOnSpecialServer && !!SpecialServerHelper.skinName && SpecialServerHelper.skinName != "" && CastleModel.kingdomData.activeKingdomID == KingdomEnum.CLASSIC.id;
  }
  static get skinName() {
    if (ABGHelper.isOnABGServer) {
      return ABGHelper.skinName;
    } else if (TempServerHelper.isOnTempServer) {
      return TempServerHelper.skinName;
    } else {
      return "";
    }
  }
  static checkTextIDForSkinText(argument0) {
    if (SpecialServerHelper.useSkin) {
      return TextHelper.getExistingTextID(argument0 + "_" + SpecialServerHelper.skinName, argument0);
    } else {
      return argument0;
    }
  }
  static get isOnKeyLoginToNormalLoginServer() {
    return EnvGlobalsHandler.globals.networkId == GoodgamePartners.NETWORK_NASZAKLASA || EnvGlobalsHandler.globals.networkId == GoodgamePartners.NETWORK_KRALOYUN || EnvGlobalsHandler.globals.networkId == GoodgamePartners.NETWORK_SPIELAFFE || EnvGlobalsHandler.globals.networkId == 80;
  }
  static isCrossplay() {
    return EnvGlobalsHandler.globals.isCrossplay;
  }
  static SKIN_MAYA = "Maya";
}
