Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SwitchKingdomGoToWorldmapAndCenterPosCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SwitchKingdomGoToWorldmapAndCenterPosCommand, __s1param0);
  SwitchKingdomGoToWorldmapAndCenterPosCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0.shift());
      var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0.shift());
      var __s5local2 = __dep_exact_f855840627e6e145.int(__s5param0.shift());
      var __s5local3 = __dep_exact_f855840627e6e145.int(__s5param0.shift());
      if (!__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s5local0).isPaid) {
        return;
      }
      if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s5local0)) {
        return;
      }
      if (__s5local0 != __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
        __dep_export_CastleModel.CastleModel.questData.resetCurrentSearchEnemyCounter();
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_COMMAND, __s5local0);
      }
      __dep_export_CastleModel.CastleModel.worldmapCameraData.savedMapPosition = null;
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s5local3);
      this.layoutManager.worldmapScreen.camera.centerArea(new __s0local0(__s5local1, __s5local2));
    }
  };
  Object.defineProperty(SwitchKingdomGoToWorldmapAndCenterPosCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return SwitchKingdomGoToWorldmapAndCenterPosCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.SwitchKingdomGoToWorldmapAndCenterPosCommand = __s0local1;
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
