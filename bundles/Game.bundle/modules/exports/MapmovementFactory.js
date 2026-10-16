Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MapmovementFactory() {}
  MapmovementFactory.parseMapMovement = function (__s5param0) {
    if (!__s5param0) {
      return null;
    }
    var __s5local0;
    switch (__dep_exact_f855840627e6e145.int(__s5param0.M.T)) {
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_NPC_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_FACTION_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CITY_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CAMP_TAUNT_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CAMP_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_COLLECTOR:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_COLLECTOR_TEMP_SERVER:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_RANKSWAP_TEMP_SERVER:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_DAIMYO_CASTLE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_DAIMYO_TAUNT_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_ALLIANCE_BATTLE_GROUND_COLLECTOR_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_TEMPSERVER_PVE_CHARGE:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_TEMPSERVER_PVP_CHARGE:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_ABG_ALLIANCE_TOWER_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_WOLFKING_TAUNT_ATTACK:
        __s5local0 = new __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_ALIEN_ATTACK:
        __s5local0 = new __dep_export_AlienAttackMovementVO.AlienAttackMovementVO();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_DEFENCE:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_DAIMYO_TOWNSHIP_DEFENSE:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_ABG_ALLIANCE_TOWER_SUPPORT:
        __s5local0 = new __dep_export_SupportDefenceMapmovementVO.SupportDefenceMapmovementVO();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_TRAVEL:
        __s5local0 = new __dep_export_ArmyTravelMapMovementVO.ArmyTravelMapMovementVO();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_SPY:
        __s5local0 = new __dep_export_SpyMapmovementVO.SpyMapmovementVO();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_PLAGUEMONK:
        __s5local0 = new __dep_export_PlaguemonkMapmovementVO.PlaguemonkMapmovementVO();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_MARKET:
        __s5local0 = new __dep_export_MarketMapmovementVO.MarketMapmovementVO();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_SIEGE:
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_OCCUPY_FACTION:
        __s5local0 = new __dep_export_SiegeMapmovementVO.SiegeMapmovementVO();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.MOVEMENTTYPE_TREASUREHUNT:
        __s5local0 = new __dep_export_TreasureHuntMovementVO.TreasureHuntMovementVO();
    }
    __s5local0.loadFromParamObject(__s5param0);
    return __s5local0;
  };
  return MapmovementFactory;
}();
exports.MapmovementFactory = __s0local0;
var __dep_export_AlienAttackMovementVO = require("gge-module:export_AlienAttackMovementVO");
var __dep_export_ArmyAttackMapmovementVO = require("gge-module:export_ArmyAttackMapmovementVO");
var __dep_export_ArmyTravelMapMovementVO = require("gge-module:export_ArmyTravelMapMovementVO");
var __dep_export_MarketMapmovementVO = require("gge-module:export_MarketMapmovementVO");
var __dep_export_PlaguemonkMapmovementVO = require("gge-module:export_PlaguemonkMapmovementVO");
var __dep_export_SiegeMapmovementVO = require("gge-module:export_SiegeMapmovementVO");
var __dep_export_SpyMapmovementVO = require("gge-module:export_SpyMapmovementVO");
var __dep_export_SupportDefenceMapmovementVO = require("gge-module:export_SupportDefenceMapmovementVO");
var __dep_export_TreasureHuntMovementVO = require("gge-module:export_TreasureHuntMovementVO");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
