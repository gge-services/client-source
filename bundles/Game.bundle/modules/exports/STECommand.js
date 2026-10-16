Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function STECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(STECommand, __s1param0);
  Object.defineProperty(STECommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SELECT_TITLE_EVENT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  STECommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        if (__s9param1.length > 0) {
          var __s9local0 = JSON.parse(__s9param1[1]);
          __dep_export_CastleModel.CastleModel.titleData.parseSTE(__s9local0);
          if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP)) {
            var __s9local1 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
            __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s9local1.x, __s9local1.y, __s9local1.x + __s9local1.width, __s9local1.y + __s9local1.height);
          }
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return STECommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.STECommand = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
