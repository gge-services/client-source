Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1__1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1__1");
var __dep_class_WorldAssignmentFacade = require("gge-module:class_WorldAssignmentFacade");
var __dep_export_NetworkInstancesManager = require("gge-module:export_NetworkInstancesManager");
var __dep_export_loadNetworkInstances = require("gge-module:export_loadNetworkInstances");
var __dep_export_Context = require("gge-module:export_Context");
var __dep_export_ZoneCapacitiesController = require("gge-module:export_ZoneCapacitiesController");
var __dep_export_BranchesManager = require("gge-module:export_BranchesManager");
var __dep_export_BranchesController = require("gge-module:export_BranchesController");
var __dep_export_CountriesManager = require("gge-module:export_CountriesManager");
var __dep_export_ZoneCapacityManager = require("gge-module:export_ZoneCapacityManager");
var __dep_class_WorldAssignmentError = require("gge-module:class_WorldAssignmentError");
var __dep_class_WorldAssignmentErrorCodes = require("gge-module:class_WorldAssignmentErrorCodes");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_detectCountry = require("gge-module:export_detectCountry");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("WorldAssignment");
var __s0local1 = function () {
  function WorldAssignment() {}
  WorldAssignment.prototype.initialize = function (__s5param0) {
    if (__s5param0) {
      __s0local0.debug("config > ", __s5param0);
      __dep_export_Context.Context.instance.globals = __s5param0;
      __dep_export_Context.Context.instance.set(new __dep_export_CountriesManager.CountriesManager());
      __dep_export_Context.Context.instance.set(new __dep_export_NetworkInstancesManager.NetworkInstancesManager());
      __dep_export_Context.Context.instance.set(new __dep_export_BranchesManager.BranchesManager());
      __dep_export_Context.Context.instance.set(new __dep_export_BranchesController.BranchesController());
      __dep_export_Context.Context.instance.set(new __dep_export_ZoneCapacityManager.ZoneCapacityManager());
      __dep_export_Context.Context.instance.set(new __dep_export_ZoneCapacitiesController.ZoneCapacitiesController());
      this._initialized = true;
    } else {
      this._initialized = false;
    }
  };
  WorldAssignment.prototype.start = function (__s9param0) {
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(this, undefined, undefined, function () {
      var __s11local0;
      var __s11local1;
      var __s11local2;
      return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s13param0) {
        switch (__s13param0.label) {
          case 0:
            if (!this._initialized) {
              __s0local0.error("WorldAssignment not initialized. Call 'initialize' before starting world assignment process.");
              throw new __dep_class_WorldAssignmentError.WorldAssignmentError(__dep_class_WorldAssignmentErrorCodes.WorldAssignmentErrorCodes.WORLD_ASSIGNMENT_FAILED_TO_INITIALIZE, "WorldAssignment is not initialized.");
            }
            return [4, __dep_export_detectCountry.loadCountryConfig(__s9param0)];
          case 1:
            __s13param0.sent();
            return [4, __dep_export_loadNetworkInstances.loadNetworkInstances(__s9param0)];
          case 2:
            __s11local0 = __s13param0.sent();
            if (__dep_export_Context.Context.instance.globals.useDynamicWorldAssignment) {
              return [4, __dep_export_Context.Context.instance.get(__dep_export_ZoneCapacitiesController.ZoneCapacitiesController).loadZoneCapacityConfig(__s9param0)];
            } else {
              return [3, 5];
            }
          case 3:
            __s13param0.sent();
            return [4, __dep_export_Context.Context.instance.get(__dep_export_ZoneCapacitiesController.ZoneCapacitiesController).initZoneCapacity()];
          case 4:
            __s13param0.sent();
            __s13param0.label = 5;
          case 5:
            __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).initActiveCountries(__s11local0);
            return [4, __dep_export_detectCountry.detectCountry()];
          case 6:
            __s11local1 = __s13param0.sent();
            return [4, __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).assignNetworkInstance(__s11local1.ggsCountryCode)];
          case 7:
            __s11local2 = __s13param0.sent();
            this._worldAssignmentDetection = {
              instance: __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__assign({}, __s11local2),
              country: __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__assign({}, __s11local1),
              globals: __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__assign({}, __dep_export_Context.Context.instance.globals),
              settings: __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__assign({}, __dep_export_Context.Context.instance.networkSettings)
            };
            return [4, __dep_export_Context.Context.instance.get(__dep_export_BranchesController.BranchesController).loadBranches(__s9param0)];
          case 8:
            __s13param0.sent();
            return [4, __dep_export_Context.Context.instance.get(__dep_export_BranchesController.BranchesController).initializeBranch()];
          case 9:
            __s13param0.sent();
            return [2, __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).selectedNetworkInstance];
        }
      });
    });
  };
  WorldAssignment.prototype.selectInstance = function (__s19param0) {
    __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).forceInstance(__s19param0);
  };
  WorldAssignment.prototype.selectInstanceByCountry = function (__s21param0) {
    __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).currentCountry = __s21param0;
    return __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).forceInstanceByCountry(__s21param0.ggsCountryCode);
  };
  Object.defineProperty(WorldAssignment.prototype, "initialized", {
    get: function () {
      return this._initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignment.prototype, "facade", {
    get: function () {
      if (this._facade) {
        return this._facade;
      }
      if (this._initialized) {
        return this._facade = new __dep_class_WorldAssignmentFacade.WorldAssignmentFacade();
      }
      throw new Error("WorldAssignment not initialized. Call 'initialize' before starting world assignment process.");
    },
    enumerable: true,
    configurable: true
  });
  return WorldAssignment;
}();
exports.WorldAssignment = __s0local1;
