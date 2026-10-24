Object.defineProperty(exports, "__esModule", {
  value: true
});
var inheritanceHelper = require("gge-module:exact_6fd0a7f85c69b366");
var interfaceHelper = require("gge-module:exact_81dacdf05bd32292");
var gameErrors = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function AALCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  inheritanceHelper.__extends(AALCommand, __s1param0);
  Object.defineProperty(AALCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ALLIANCE_SEARCH_ALLIANCE_LIST;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AALCommand.prototype.executeCommand = function (statusCode, responseFields) {
    switch (statusCode) {
      case gameErrors.ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.OI);
        __dep_export_CastleModel.CastleModel.allianceData.parse_AAL(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  };
  return AALCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.AALCommand = __s0local0;
interfaceHelper.classImplementsInterfaces(__s0local0, "IExecCommand");
