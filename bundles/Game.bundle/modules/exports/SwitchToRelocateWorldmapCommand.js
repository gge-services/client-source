Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SwitchToRelocateWorldmapCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SwitchToRelocateWorldmapCommand, __s1param0);
  SwitchToRelocateWorldmapCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    var __s5local1 = !!__s5param0 && !!__s5param0.friendsPlace;
    if (__s5local1) {
      __s5local0 = __s5param0.friendsPlace;
    }
    if (__s5local0) {
      if (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == 0) {
        var __s5local2 = this.worldmap.camera.viewPortCenter;
        var __s5local3 = this.worldmap.camera.viewPortZoom;
        __dep_export_CastleModel.CastleModel.worldmapCameraData.saveCameraPosition(__s5local2, __s5local3);
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
        if (__s5local1) {
          this.layoutManager.worldmapScreen.camera.centerArea(__s5local0.absAreaPos);
        }
      } else {
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_COMMAND, 0);
        __dep_export_CastleModel.CastleModel.worldmapData ||= __dep_export_CastleModel.CastleModel.addModel(new __dep_export_CastleWorldmapData.CastleWorldmapData());
        __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
        this.layoutManager.worldmapScreen.camera.centerArea(__s5local0.absAreaPos);
      }
    }
  };
  Object.defineProperty(SwitchToRelocateWorldmapCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SwitchToRelocateWorldmapCommand.prototype, "worldmap", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer;
    },
    enumerable: true,
    configurable: true
  });
  return SwitchToRelocateWorldmapCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.SwitchToRelocateWorldmapCommand = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleWorldmapData = require("gge-module:export_CastleWorldmapData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
