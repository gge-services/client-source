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
  function AQICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AQICommand, __s1param0);
  Object.defineProperty(AQICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ALLIANCE_QUIT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AQICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.chatData.resetHistory();
        __dep_export_CastleModel.CastleModel.userData.parse_GAL(__s9local0.gal);
        __dep_export_CastleModel.CastleModel.allianceData.resetMyAlliance();
        __dep_export_CastleModel.CastleModel.subscriptionData.requestASC();
        if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP) {
          var __s9local1 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
          __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s9local1.x, __s9local1.y, __s9local1.x + __s9local1.width, __s9local1.y + __s9local1.height);
          this.layoutManager.worldmapScreen.renderer.renderLayer();
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return AQICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.AQICommand = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
