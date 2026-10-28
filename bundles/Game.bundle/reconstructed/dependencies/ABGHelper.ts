import { AllianceBattleGroundScoringVO } from "./AllianceBattleGroundScoringVO";
import { CastleModel } from "./CastleModel";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
export class ABGHelper {
  static get abgEvent() {
    return CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND);
  }
  static get skinName() {
    if (ABGHelper.abgEvent) {
      return ABGHelper.abgEvent.settingVO.skin;
    } else {
      return "";
    }
  }
  static get isOnABGServer() {
    return EnvGlobalsHandler.globals.isOnAllianceBattleGroundServer;
  }
  static get isOnABGAndCollector() {
    return ABGHelper.isOnABGServer && ABGHelper.isAllianceCollectorScoring;
  }
  static get isAllianceCollectorScoring() {
    return !!ABGHelper.abgEvent && ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring == AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR;
  }
  static get isOnABGAndTower() {
    return ABGHelper.isOnABGServer && ABGHelper.isAllianceTowerScoring;
  }
  static get isAllianceTowerScoring() {
    return !!ABGHelper.abgEvent && ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring == AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_TOWER;
  }
}
