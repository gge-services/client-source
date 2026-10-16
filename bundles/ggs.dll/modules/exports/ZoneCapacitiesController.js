Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1__1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1__1");
var __dep_exact_551693c13e511709 = require("gge-module:exact_551693c13e511709");
var __dep_export_Context = require("gge-module:export_Context");
var __dep_export_ZoneCapacityManager = require("gge-module:export_ZoneCapacityManager");
var __dep_export_ZoneCapacityJSONParser = require("gge-module:export_ZoneCapacityJSONParser");
var __dep_export_NetworkInstancesManager = require("gge-module:export_NetworkInstancesManager");
var __dep_class_WorldAssignmentTrackingConstants = require("gge-module:class_WorldAssignmentTrackingConstants");
var __dep_class_WorldAssignmentErrorCodes = require("gge-module:class_WorldAssignmentErrorCodes");
var __dep_class_WorldAssignmentError = require("gge-module:class_WorldAssignmentError");
var __s0local0 = function () {
  function ZoneCapacitiesController() {
    var __s3local0 = this;
    this.onZoneCapacityLoadingComplete = function (__s5param0) {
      __s3local0.manager.zoneCapacities = __dep_export_ZoneCapacityJSONParser.ZoneCapacityJSONParser.parse(__s5param0);
    };
  }
  ZoneCapacitiesController.prototype.initialize = function () {
    this.service = new __dep_exact_551693c13e511709.Service(__dep_export_Context.Context.instance.globals.zoneCapacityUrl);
    this.manager = __dep_export_Context.Context.instance.get(__dep_export_ZoneCapacityManager.ZoneCapacityManager);
  };
  ZoneCapacitiesController.prototype.dispose = function () {
    if (this.service) {
      this.service.dispose();
      this.service = null;
    }
  };
  ZoneCapacitiesController.prototype.loadZoneCapacityConfig = function (__s12param0) {
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(this, undefined, undefined, function () {
      var __s14local0 = this;
      return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s16param0) {
        if (__s12param0) {
          __s12param0(__dep_class_WorldAssignmentTrackingConstants.WorldAssignmentTrackingConstants.ZONE_XML_START);
        }
        return [2, this.service.load().then(function (__s19param0) {
          if (__s12param0) {
            __s12param0(__dep_class_WorldAssignmentTrackingConstants.WorldAssignmentTrackingConstants.ZONE_XML_END);
          }
          __s14local0.onZoneCapacityLoadingComplete(__s19param0);
        }).catch(function () {
          throw new __dep_class_WorldAssignmentError.WorldAssignmentError(__dep_class_WorldAssignmentErrorCodes.WorldAssignmentErrorCodes.ZONE_CAPACITIES_FAILED_TO_LOAD, "Failed to load zone_capacities.json from " + __dep_export_Context.Context.instance.globals.zoneCapacityUrl);
        })];
      });
    });
  };
  ZoneCapacitiesController.prototype.initZoneCapacity = function () {
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(this, undefined, undefined, function () {
      var __s26local0;
      var __s26local1;
      var __s26local2;
      var __s26local3;
      return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s28param0) {
        __s26local0 = __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager);
        __s26local1 = 0;
        for (; __s26local1 < __s26local0.networkInstances.length; __s26local1++) {
          __s26local2 = __s26local0.networkInstances[__s26local1];
          __s26local3 = this.manager.getCapacityForZone(__s26local2.zoneId);
          __s26local2.remainingRegistrationCapacity = __s26local3;
        }
        return [2];
      });
    });
  };
  return ZoneCapacitiesController;
}();
exports.ZoneCapacitiesController = __s0local0;
