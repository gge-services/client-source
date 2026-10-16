Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local0 = function () {
  function LogListManager() {}
  LogListManager.logTrace = function (__s5param0) {
    this.logger.warn("LogListManager.logTrace - is not implemented");
  };
  LogListManager.activate = function () {
    this.logger.warn("LogListManager.activate - is not implemented");
  };
  LogListManager.copyToClipboard = function (__s9param0 = 600, __s9param1 = -1, __s9param2 = "") {
    this.logger.warn("LogListManager.copyToClipboard - is not implemented");
  };
  LogListManager.logger = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TOOLBOX_LOGGER);
  return LogListManager;
}();
exports.LogListManager = __s0local0;
