Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function TPICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TPICommand, __s1param0);
  Object.defineProperty(TPICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ALLIANCE_TOWER_CASTLES_INFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  TPICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        if (__s9local0[__dep_exact_26a421b704832cff.CommKeys.OWNER_INFO_2]) {
          for (var __s9local1 = 0, __s9local2 = __s9local0[__dep_exact_26a421b704832cff.CommKeys.OWNER_INFO_2]; __s9local1 < __s9local2.length; __s9local1++) {
            var __s9local3 = __s9local2[__s9local1];
            if (__s9local3 !== undefined) {
              __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s9local3);
            }
          }
        }
        var __s9local4 = __s9local0[__dep_exact_26a421b704832cff.CommKeys.CASTLES];
        var __s9local5 = [];
        if (__s9local4 != null) {
          for (var __s9local6 = 0, __s9local7 = __s9local4; __s9local6 < __s9local7.length; __s9local6++) {
            var __s9local8 = __s9local7[__s9local6];
            if (__s9local8 !== undefined) {
              __s9local5.push(__dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s9local8));
            }
          }
        }
        this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, __s9local5));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return TPICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.TPICommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
