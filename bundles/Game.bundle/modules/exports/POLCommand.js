Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CommandDelayController = require("gge-module:export_CommandDelayController");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function POLCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(POLCommand, __s1param0);
  Object.defineProperty(POLCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_PRIVATE_OFFER_LIST;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  POLCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    if (!__dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed) {
      __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_PRIVATE_OFFER_LIST);
    }
    return __s1param0.prototype.executeCommand.call(this, __s9param0, __s9param1);
  };
  POLCommand.prototype.exec = function (__s12param0) {
    var __s12local0 = __dep_exact_f855840627e6e145.int(__s12param0[0]);
    var __s12local1 = __s12param0[1];
    switch (__s12local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
      case 10005:
        var __s12local2 = JSON.parse(__s12local1[1]);
        __dep_export_CastleModel.CastleModel.privateOfferData.parse_POL(__s12local2);
        break;
      default:
        this.showErrorDialog(__s12local0, __s12local1);
    }
  };
  return POLCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.POLCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
