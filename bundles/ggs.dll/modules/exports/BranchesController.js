Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1__1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1__1");
var __dep_exact_551693c13e511709 = require("gge-module:exact_551693c13e511709");
var __dep_export_NetworkInstancesManager = require("gge-module:export_NetworkInstancesManager");
var __dep_export_BranchesManager = require("gge-module:export_BranchesManager");
var __dep_export_BranchesXMLParser = require("gge-module:export_BranchesXMLParser");
var __dep_export_Context = require("gge-module:export_Context");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_WorldAssignmentTrackingConstants = require("gge-module:class_WorldAssignmentTrackingConstants");
var __dep_class_WorldAssignmentError = require("gge-module:class_WorldAssignmentError");
var __dep_class_WorldAssignmentErrorCodes = require("gge-module:class_WorldAssignmentErrorCodes");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("WorldAssignment.BranchesController");
var __s0local1 = function () {
  function BranchesController() {
    var __s3local0 = this;
    this.initializeBranch = function () {
      return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(__s3local0, undefined, undefined, function () {
        var __s7local0;
        var __s7local1;
        return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s9param0) {
          __s0local0.debug("initializeBranch");
          __s7local0 = __dep_export_Context.Context.instance.globals.zoneIdFromNetworkCookie > 0 ? __dep_export_Context.Context.instance.globals.zoneIdFromNetworkCookie.toString() : __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).selectedNetworkInstance.zoneId.toString();
          __s0local0.debug("zoneId:", __s7local0);
          if (!(__s7local1 = this.manager.getBranchByZoneId(__s7local0))) {
            __s0local0.debug("could not find branch for zone id  " + __s7local0 + " will fallback to default ");
            __s7local1 = this.manager.getBranchByBranchId("default");
          }
          if (!__s7local1) {
            throw new __dep_class_WorldAssignmentError.WorldAssignmentError(__dep_class_WorldAssignmentErrorCodes.WorldAssignmentErrorCodes.BRANCHES_FAILED_TO_INITIALIZE, "BranchesController.initializeBranch: branch initialization failed");
          }
          this.manager.currentBranch = __s7local1;
          return [2];
        });
      });
    };
  }
  BranchesController.prototype.initialize = function () {
    this.service = new __dep_exact_551693c13e511709.Service(__dep_export_Context.Context.instance.globals.branchesConfigUrl);
    this.manager = __dep_export_Context.Context.instance.get(__dep_export_BranchesManager.BranchesManager);
  };
  BranchesController.prototype.dispose = function () {
    if (this.service) {
      this.service.dispose();
      this.service = null;
    }
  };
  BranchesController.prototype.loadBranches = function (__s18param0) {
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(this, undefined, undefined, function () {
      var __s20local0 = this;
      return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s22param0) {
        __s0local0.debug("loadBranches");
        if (__s18param0) {
          __s18param0(__dep_class_WorldAssignmentTrackingConstants.WorldAssignmentTrackingConstants.BRANCH_XML_START);
        }
        return [2, this.service.load().then(function (__s25param0) {
          if (__s18param0) {
            __s18param0(__dep_class_WorldAssignmentTrackingConstants.WorldAssignmentTrackingConstants.BRANCH_XML_END);
          }
          __s20local0.manager.branches = __dep_export_BranchesXMLParser.BranchesXMLParser.parse(__s25param0);
        }).catch(function () {
          throw new __dep_class_WorldAssignmentError.WorldAssignmentError(__dep_class_WorldAssignmentErrorCodes.WorldAssignmentErrorCodes.BRANCHES_FAILED_TO_LOAD, "Failed to load branches.xml from " + __dep_export_Context.Context.instance.globals.branchesConfigUrl);
        })];
      });
    });
  };
  return BranchesController;
}();
exports.BranchesController = __s0local1;
