Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GHWCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GHWCommand, __s1param0);
  Object.defineProperty(GHWCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_HELLO_WORLD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GHWCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
        if (__s9local1) {
          __dep_export_CastleModel.CastleModel.areaData.changePosOfOwnArea(new __s0local0(__s9local0.X, __s9local0.Y));
          __dep_export_CastleModel.CastleModel.worldmapCameraData.lastVisitedCastlePosition = __s9local1.areaInfo.absAreaPos;
        }
        __dep_export_CastleModel.CastleModel.worldmapCameraData.savedMapPosition = null;
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return GHWCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.GHWCommand = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IExecCommand");
