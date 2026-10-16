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
  function PIOCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PIOCommand, __s1param0);
  Object.defineProperty(PIOCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_PLACE_CUSTOM_INVENTORY_OBJECT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  PIOCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    __dep_export_Iso.Iso.renderer.mouse.cancelDraggedTarget();
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local1 = (__s9local0 = JSON.parse(__s9param1[1])).NO[1];
        __dep_export_CastleModel.CastleModel.areaData.activeArea.updater.parseNewIsoObject(__s9local0);
        __dep_export_CastleModel.CastleModel.decoStorage.parseSIN(__s9local0.sin);
        if (__dep_export_Iso.Iso.data.areaData.isoData) {
          __dep_export_Iso.Iso.data.updater.onGainedBuildingPoints(__s9local1, -1);
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_POSITION:
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return PIOCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.PIOCommand = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
