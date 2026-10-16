var __s0local0 = this;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1__1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1__1");
var __dep_exact_551693c13e511709 = require("gge-module:exact_551693c13e511709");
var __dep_export_parseInstances = require("gge-module:export_parseInstances");
var __dep_export_Context = require("gge-module:export_Context");
var __dep_export_NetworkInstancesManager = require("gge-module:export_NetworkInstancesManager");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_WorldAssignmentTrackingConstants = require("gge-module:class_WorldAssignmentTrackingConstants");
var __dep_class_WorldAssignmentError = require("gge-module:class_WorldAssignmentError");
var __dep_class_WorldAssignmentErrorCodes = require("gge-module:class_WorldAssignmentErrorCodes");
var __s0local1 = __dep_export_LoggerConfigurator.getLogger("WorldAssignment.NetworkInstancesController");
exports.loadNetworkInstances = function (__s1param0) {
  return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(__s0local0, undefined, undefined, function () {
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s5param0) {
      __s0local1.debug("loadNetworkInstances: load network.xml");
      if (__s1param0) {
        __s1param0(__dep_class_WorldAssignmentTrackingConstants.WorldAssignmentTrackingConstants.NETWORK_XML_START);
      }
      return [2, new __dep_exact_551693c13e511709.Service(__dep_export_Context.Context.instance.globals.networkConfigUrl).load().then(function (__s8param0) {
        if (__s1param0) {
          __s1param0(__dep_class_WorldAssignmentTrackingConstants.WorldAssignmentTrackingConstants.NETWORK_XML_END);
        }
        var __s8local0 = __s0local2(__s8param0, __dep_export_Context.Context.instance.globals.isTestEnvironment || __dep_export_Context.Context.instance.globals.forceToShowTestServers);
        var __s8local1 = __s8local0.settings;
        var __s8local2 = __s8local0.instances;
        __dep_export_Context.Context.instance.set(__s8local1);
        __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).initializeInstances(__s8local2);
        __s0local1.debug("loadNetworkInstances Completed");
        return __s8local2;
      }).catch(function () {
        throw new __dep_class_WorldAssignmentError.WorldAssignmentError(__dep_class_WorldAssignmentErrorCodes.WorldAssignmentErrorCodes.NETWORK_FAILED_TO_LOAD, "Failed to load network.xml from " + __dep_export_Context.Context.instance.globals.networkConfigUrl);
      })];
    });
  });
};
function __s0local2(__s13param0, __s13param1 = false) {
  var __s13local0 = __dep_export_parseInstances.parseInstances(__s13param0);
  return {
    settings: __dep_export_parseInstances.parseNetworkSettings(__s13param0),
    instances: __s13param1 ? __s13local0.concat(__dep_export_parseInstances.parseTestInstances(__s13param0)) : __s13local0
  };
}
