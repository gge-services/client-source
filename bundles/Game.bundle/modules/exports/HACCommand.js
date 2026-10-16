Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function HACCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HACCommand, __s1param0);
  Object.defineProperty(HACCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_HIDE_ALIEN_CAMP;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  HACCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        if (__dep_export_CastleModel.CastleModel.worldmapData) {
          var __s9local0 = JSON.parse(__s9param1[1]).CP;
          if (__s9local0 != null) {
            for (var __s9local1 = 0, __s9local2 = __s9local0; __s9local1 < __s9local2.length; __s9local1++) {
              var __s9local3 = __s9local2[__s9local1];
              if (__s9local3 !== undefined) {
                var __s9local4 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(__s9local3[0], __s9local3[1]), "AAlienInvasionMapobjectVO");
                if (__s9local4 && __s9local4.isVisibleOnMap) {
                  __s9local4.isVisibleOnMap = false;
                }
              }
            }
          }
          this.controller.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP, __s9local0));
          var __s9local5 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
          if (__s9local5.worldmapScreen && __s9local5.worldmapScreen.renderer) {
            __s9local5.worldmapScreen.renderer.invalidateMap();
            __s9local5.worldmapScreen.renderer.invalideteMovements();
          }
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return HACCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.HACCommand = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");
