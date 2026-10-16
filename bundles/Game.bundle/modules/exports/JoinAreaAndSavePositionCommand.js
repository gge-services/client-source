Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SJoinAreaVO = require("gge-module:export_C2SJoinAreaVO");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __s0local0 = function (__s1param0) {
  function JoinAreaAndSavePositionCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(JoinAreaAndSavePositionCommand, __s1param0);
  JoinAreaAndSavePositionCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0 || __s5param0.worldmapObjectVO;
    if (!__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s5local0.spaceID)) {
      var __s5local1;
      __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
      var __s5local2;
      var __s5local3 = 0;
      if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen) {
        __s5local2 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer;
      }
      if (__s5local2) {
        __s5local1 = __s5local2.camera.viewPortCenter;
        __s5local3 = __s5local2.camera.viewPortZoom;
        __dep_export_CastleModel.CastleModel.worldmapCameraData.saveCameraPosition(__s5local1, __s5local3);
      } else {
        __s5local1 = __s5local0.absAreaPos;
        __dep_export_CastleModel.CastleModel.worldmapCameraData.saveCameraPosition(__s5local1);
      }
      if (__dep_export_CastleModel.CastleModel.worldmapData) {
        __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "CastleMapobjectVO")) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__s5local0.objectId, __s5local0.kingdomID));
      } else {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinAreaVO.C2SJoinAreaVO(__s5local0.absAreaPosX, __s5local0.absAreaPosY, __s5local0.kingdomID));
      }
    }
  };
  return JoinAreaAndSavePositionCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.JoinAreaAndSavePositionCommand = __s0local0;
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
