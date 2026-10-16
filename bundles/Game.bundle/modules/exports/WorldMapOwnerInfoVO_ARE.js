Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCrest = require("gge-module:export_ClientConstCrest");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __s0local0 = function (__s1param0) {
  function WorldMapOwnerInfoVO_ARE() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.playerID = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ARE_GENERIC);
    __s3local0.isShareableDungeon = false;
    var __s3local1 = new __dep_export_CrestVO.CrestVO();
    __s3local1.setBackground(__dep_export_ClientConstCrest.ClientConstCrest.BACKGROUND_TYPE_FOUR_X, 9249831, 2436143);
    __s3local1.setSymbols(__dep_export_ClientConstCrest.ClientConstCrest.SYMBOL_POSITION_ONE_CENTERED, __dep_export_ClientConstCrest.ClientConstCrest.NPC_SYMBOL_ARE_GENERIC, 12697549);
    __s3local0.crest = __s3local1;
    __s3local0.isDungeonOwner = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldMapOwnerInfoVO_ARE, __s1param0);
  Object.defineProperty(WorldMapOwnerInfoVO_ARE.prototype, "playerName", {
    get: function () {
      if (this.eventVO && this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO()) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("are_boss_name_" + this.eventVO.raidBossServerDataVO.getCurrentXMLBossDataVO().name);
      } else {
        return "are_boss_name_Necromancer";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO_ARE.prototype, "playerLevel", {
    get: function () {
      if (this.eventVO && this.eventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO()) {
        return this.eventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO().level;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO_ARE.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
    },
    enumerable: true,
    configurable: true
  });
  return WorldMapOwnerInfoVO_ARE;
}(require("gge-module:export_WorldMapOwnerInfoVO").WorldMapOwnerInfoVO);
exports.WorldMapOwnerInfoVO_ARE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IPlayer", "IWorldMapOwnerInfoVO");
