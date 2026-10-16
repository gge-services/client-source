Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function HSSCommand() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HSSCommand, __s1param0);
  Object.defineProperty(HSSCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SKIP_HOSPITAL_SLOT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  HSSCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s9local0.gcu);
        break;
      default:
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __s0local0(HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED, false, false));
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  HSSCommand.__initialize_static_members = function () {
    HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED = "EVENT_SKIP_HOSPITAL_SLOT_FAILED";
  };
  return HSSCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.HSSCommand = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IExecCommand");
__s0local1.__initialize_static_members();
