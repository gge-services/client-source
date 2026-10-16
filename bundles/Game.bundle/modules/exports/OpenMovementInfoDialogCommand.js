Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleArmyListDialogProperties = require("gge-module:export_CastleArmyListDialogProperties");
var __dep_export_CastleArmyListWithLootDialogProperties = require("gge-module:export_CastleArmyListWithLootDialogProperties");
var __dep_export_CastleCompactArmyDialogProperties = require("gge-module:export_CastleCompactArmyDialogProperties");
var __dep_export_CastleMarketMovmentDialogProperties = require("gge-module:export_CastleMarketMovmentDialogProperties");
var __dep_export_CastleShortArmyDialogProperties = require("gge-module:export_CastleShortArmyDialogProperties");
var __dep_export_CastleSpyInfoDialogProperties = require("gge-module:export_CastleSpyInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenMovementInfoDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenMovementInfoDialogCommand, __s1param0);
  OpenMovementInfoDialogCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_81dacdf05bd32292.castAs(__s5param0, "IMapMovementVO");
    if (__s5local0) {
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "TreasureHuntMovementVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCompactArmyDialog.CastleCompactArmyDialog, new __dep_export_CastleCompactArmyDialogProperties.CastleCompactArmyDialogProperties(__s5local0, true));
      } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "MarketMapmovementVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleMarketMovmentDialog.CastleMarketMovmentDialog, new __dep_export_CastleMarketMovmentDialogProperties.CastleMarketMovmentDialogProperties(__s5local0));
      } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "SupportDefenceMapmovementVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleArmyListDialog.CastleArmyListDialog, new __dep_export_CastleArmyListDialogProperties.CastleArmyListDialogProperties(__s5local0));
      } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "ArmyAttackMapmovementVO")) {
        switch (__s5local0.armyState) {
          case __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.ARMY_FULL:
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCompactArmyDialog.CastleCompactArmyDialog, new __dep_export_CastleCompactArmyDialogProperties.CastleCompactArmyDialogProperties(__s5local0));
            break;
          case __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.ARMY_SHORT:
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShortArmyDialog.CastleShortArmyDialog, new __dep_export_CastleShortArmyDialogProperties.CastleShortArmyDialogProperties(__s5local0));
        }
      } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "ArmyTravelMapMovementVO")) {
        if (__s5local0.lootList.length > 0) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleArmyListWithLootDialog.CastleArmyListWithLootDialog, new __dep_export_CastleArmyListWithLootDialogProperties.CastleArmyListWithLootDialogProperties(__s5local0));
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleArmyListDialog.CastleArmyListDialog, new __dep_export_CastleArmyListDialogProperties.CastleArmyListDialogProperties(__s5local0));
        }
      } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "SpyMapmovementVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpyInfoDialog.CastleSpyInfoDialog, new __dep_export_CastleSpyInfoDialogProperties.CastleSpyInfoDialogProperties(__s5local0));
      } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "PlaguemonkMapmovementVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePlaguemonkInfoDialog.CastlePlaguemonkInfoDialog, new __dep_export_CastleSpyInfoDialogProperties.CastleSpyInfoDialogProperties(__s5local0));
      } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "SiegeMapmovementVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleArmyListDialog.CastleArmyListDialog, new __dep_export_CastleArmyListDialogProperties.CastleArmyListDialogProperties(__s5local0));
      }
    }
  };
  return OpenMovementInfoDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenMovementInfoDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleArmyListDialog = require("gge-module:export_CastleArmyListDialog");
var __dep_export_CastleArmyListWithLootDialog = require("gge-module:export_CastleArmyListWithLootDialog");
var __dep_export_CastleCompactArmyDialog = require("gge-module:export_CastleCompactArmyDialog");
var __dep_export_CastleMarketMovmentDialog = require("gge-module:export_CastleMarketMovmentDialog");
var __dep_export_CastlePlaguemonkInfoDialog = require("gge-module:export_CastlePlaguemonkInfoDialog");
var __dep_export_CastleShortArmyDialog = require("gge-module:export_CastleShortArmyDialog");
var __dep_export_CastleSpyInfoDialog = require("gge-module:export_CastleSpyInfoDialog");
var __dep_export_ArmyAttackMapmovementVO = require("gge-module:export_ArmyAttackMapmovementVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ISimpleCommand");
