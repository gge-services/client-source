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
  function VIPCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VIPCommand, __s1param0);
  VIPCommand.prototype.executeCommand = function (__s5param0, __s5param1) {
    return __s1param0.prototype.executeCommand.call(this, __s5param0, __s5param1);
  };
  VIPCommand.prototype.exec = function (__s7param0) {
    var __s7local0 = __dep_exact_f855840627e6e145.int(__s7param0[0]);
    var __s7local1 = __s7param0[1];
    switch (__s7local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s7local2 = JSON.parse(__s7local1[1]);
        __dep_export_CastleModel.CastleModel.vipData.parse_VIP(__s7local2);
        if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer) {
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.invalidateMap();
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.clearMapobjects(false);
        }
        break;
      default:
        this.showErrorDialog(__s7local0, __s7local1);
    }
  };
  Object.defineProperty(VIPCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_VIP_INFO_EVENT;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return VIPCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.VIPCommand = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
