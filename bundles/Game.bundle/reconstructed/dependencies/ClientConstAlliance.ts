import { AllianceConst } from "../../../ggs.dll/reconstructed/exports/AllianceConst";
import { CastleModel } from "./CastleModel";
export class ClientConstAlliance {
  static getInferiorRanks(argument0) {
    var __s5local0 = [];
    if (CastleModel.allianceData.hasRight(argument0, AllianceConst.RIGHT_NEW_LEADER)) {
      __s5local0.push(AllianceConst.RANK_COLEADER);
    }
    if (CastleModel.allianceData.hasRight(argument0, AllianceConst.RIGHT_HANDLE_GENERAL)) {
      __s5local0.push(AllianceConst.RANK_MARSHAL);
      __s5local0.push(AllianceConst.RANK_TREASURER);
      __s5local0.push(AllianceConst.RANK_DIPLOMAT);
      __s5local0.push(AllianceConst.RANK_RECRUITER);
      __s5local0.push(AllianceConst.RANK_GENERAL);
    }
    if (CastleModel.allianceData.hasRight(argument0, AllianceConst.RIGHT_HANDLE_SEAGANT)) {
      __s5local0.push(AllianceConst.RANK_SERGEANT);
    }
    if (CastleModel.allianceData.hasRight(argument0, AllianceConst.RIGHT_KICK_MEMBER)) {
      __s5local0.push(AllianceConst.RANK_MEMBER);
    }
    return __s5local0;
  }
  static CAT_NONE = "cat_none";
  static CAT_OVERVIEW = "cat_overview";
  static CAT_MEMBERLIST = "cat_memberlist";
  static CAT_MANAGEMENT = "cat_management";
  static CAT_TREASURY = "cat_treasury";
  static CAT_COMMUNICATION = "cat_chat";
  static CAT_DIPLOMACY = "cat_diplomacy";
  static CAT_FAME = "cat_fame";
  static CAT_FORGE = "cat_forge";
  static CAT_FORGE_HIGH = "cat_forgeHigh";
  static CAT_BOOKMARKS = "cat_bookmarks";
  static CAT_ABG = "cat_abg";
  static MIN_LEVEL_ALLIANCE_GIFTS = 6;
  static STATUS_REQUEST_POSSIBLE = 1;
  static STATUS_REQUEST_PROCESSING = 2;
  static STATUS_REQUEST_CONFIRMED = 3;
}
