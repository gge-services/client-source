Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function GDRCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GDRCommand, __s1param0);
  Object.defineProperty(GDRCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_DONATION_RESOURCES;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GDRCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    return __s1param0.prototype.executeCommand.call(this, __s9param0, __s9param1);
  };
  GDRCommand.prototype.exec = function (__s11param0) {
    var __s11local0 = __dep_exact_f855840627e6e145.int(__s11param0[0]);
    var __s11local1 = __s11param0[1];
    switch (__s11local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s11local2 = JSON.parse(__s11local1[1]);
        if (__dep_export_CastleModel.CastleModel.userData) {
          __dep_export_CastleModel.CastleModel.currencyData.parseSCE(__s11local2.sce);
        }
        __dep_export_CastleModel.CastleModel.areaData.activeArea.updater.parseGRC(__s11local2.grc);
        break;
      default:
        this.showErrorDialog(__s11local0, __s11local1);
    }
  };
  return GDRCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.GDRCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
