Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CFCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CFCCommand, __s1param0);
  Object.defineProperty(CFCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GACHA_FREECHEST;
    },
    enumerable: true,
    configurable: true
  });
  CFCCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s7local0 = JSON.parse(__s7param1[1]);
        var __s7local1 = __s7local0.EID;
        var __s7local2 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s7local1);
        if (__s7local2) {
          __s7local2.parseGachaEvent(__s7local0);
          __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_GachaEvent.GachaEvent(__dep_export_GachaEvent.GachaEvent.SPIN, __s7local2));
        }
        break;
      default:
        this.showErrorDialog(__s7param0, __s7param1);
    }
    return false;
  };
  return CFCCommand;
}(require("gge-module:export_CastleCommand").CastleCommand);
exports.CFCCommand = __s0local0;
