Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SGetCastleListVO = require("gge-module:export_C2SGetCastleListVO");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GRICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GRICommand, __s1param0);
  Object.defineProperty(GRICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_RELOCATION_INFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GRICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        if (__dep_exact_f855840627e6e145.int(__s9local0.JM) == 1 && (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP || this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP_RELOCATION)) {
          var __s9local1 = __dep_export_CastleModel.CastleModel.worldmapData.getAreaVEByXY(new __s0local0(__s9local0.OX, __s9local0.OY), true);
          this.layoutManager.hideAllIngameUIComponents();
          if (__s9local1) {
            this.layoutManager.hideAllIngameUIComponents();
            __s9local1.remove();
            __s9local1.removeNameMC();
          }
          var __s9local2 = __dep_export_CastleModel.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(__s9local0.OX, __s9local0.OY);
          if (__s9local2) {
            __s9local2.resetVO();
          }
        }
        __dep_export_CastleModel.CastleModel.userData.parse_GRI(__s9local0);
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleListVO.C2SGetCastleListVO(__dep_export_CastleModel.CastleModel.userData.playerID));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return GRICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.GRICommand = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IExecCommand");
