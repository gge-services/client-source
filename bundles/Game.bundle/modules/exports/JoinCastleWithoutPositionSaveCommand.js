Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SJoinCastleVO = require("gge-module:export_C2SJoinCastleVO");
var __s0local0 = function (__s1param0) {
  function JoinCastleWithoutPositionSaveCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(JoinCastleWithoutPositionSaveCommand, __s1param0);
  JoinCastleWithoutPositionSaveCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_81dacdf05bd32292_1.castAs(__s5param0, "IWorldmapObjectVO");
    if (__s5local0) {
      if (!__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s5local0.spaceID)) {
        __dep_export_CastleModel.CastleModel.worldmapCameraData.savedMapPosition = null;
        if (__dep_export_CastleModel.CastleModel.worldmapData) {
          __dep_export_CastleModel.CastleModel.worldmapData.allowGAARequests = false;
        }
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SJoinCastleVO.C2SJoinCastleVO(__s5local0.objectId, __s5local0.kingdomID));
      }
    }
  };
  return JoinCastleWithoutPositionSaveCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.JoinCastleWithoutPositionSaveCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
