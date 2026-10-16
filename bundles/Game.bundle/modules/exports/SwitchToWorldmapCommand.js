Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __s0local0 = function (__s1param0) {
  function SwitchToWorldmapCommand() {
    var __s3local0 = this;
    __s3local0._oldState = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SwitchToWorldmapCommand, __s1param0);
  SwitchToWorldmapCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_81dacdf05bd32292_1.castAs(__s5param0, "IWorldmapObjectVO");
    var __s5local1 = __dep_exact_f855840627e6e145.int(typeof __s5param0 == "number" ? __s5param0 : -1);
    this._oldState = __dep_exact_f855840627e6e145.int(this.layoutManager.currentState);
    if (this.isReloadWorldMapNecessary(__s5local1) || __s5local0) {
      if (__s5local0) {
        if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s5local0.spaceID)) {
          return;
        }
        if (__s5local0.kingdomID != __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_COMMAND, __s5local0.kingdomID);
        }
        __dep_export_CastleModel.CastleModel.worldmapData ||= __dep_export_CastleModel.CastleModel.addModel(new __dep_export_CastleWorldmapData.CastleWorldmapData());
        __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP;
        this.layoutManager.worldmapScreen.camera.viewPortZoom = __dep_export_CastleModel.CastleModel.worldmapCameraData.savedMapZoom;
        this.layoutManager.worldmapScreen.camera.centerArea(__s5local0.absAreaPos);
        var __s5local2 = __dep_exact_81dacdf05bd32292_1.castAs(this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(__s5local0.absAreaPos.x, __s5local0.absAreaPos.y, true), "InteractiveMapobject");
        if (__s5local2 && __s5local0.ownerInfo && __dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s5local0.ownerInfo.playerID)) {
          __s5local2.showRingMenu();
        } else {
          this.layoutManager.worldmapScreen.delayOpenRingMenu(__s5local0);
        }
      } else {
        __dep_export_CastleModel.CastleModel.worldmapData ||= __dep_export_CastleModel.CastleModel.addModel(new __dep_export_CastleWorldmapData.CastleWorldmapData());
        __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP;
        this.layoutManager.worldmapScreen.camera.viewPortZoom = __dep_export_CastleModel.CastleModel.worldmapCameraData.savedMapZoom;
        this.layoutManager.worldmapScreen.camera.centerArea(__dep_export_CastleModel.CastleModel.worldmapCameraData.getInitialWorldMapPos());
      }
      if (__dep_export_CastleModel.CastleModel.mineData) {
        __dep_export_CastleModel.CastleModel.mineData.destroy();
      }
    }
  };
  SwitchToWorldmapCommand.prototype.isReloadWorldMapNecessary = function (__s15param0) {
    return !this.playerWasOnTheWorldMap() || __s15param0 != -1;
  };
  SwitchToWorldmapCommand.prototype.playerWasOnTheWorldMap = function () {
    return this._oldState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP;
  };
  Object.defineProperty(SwitchToWorldmapCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return SwitchToWorldmapCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.SwitchToWorldmapCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleWorldmapData = require("gge-module:export_CastleWorldmapData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
