Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function GSUECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GSUECommand, __s1param0);
  Object.defineProperty(GSUECommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.C2S_GENERAL_STAR_UPGRADE;
    },
    enumerable: true,
    configurable: true
  });
  GSUECommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_export_CastleModel.CastleModel.generalsData.dispatchEvent(new __dep_export_GeneralsEvent.GeneralsEvent(__dep_export_GeneralsEvent.GeneralsEvent.GENERAL_STAR_UP));
        break;
      default:
        this.showErrorDialog(__s7param0, __s7param1);
    }
    return false;
  };
  return GSUECommand;
}(require("gge-module:export_CastleCommand").CastleCommand);
exports.GSUECommand = __s0local0;
