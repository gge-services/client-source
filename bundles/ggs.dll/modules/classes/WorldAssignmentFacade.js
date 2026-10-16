Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_Context = require("gge-module:export_Context");
var __dep_export_CountriesManager = require("gge-module:export_CountriesManager");
var __dep_export_BranchesManager = require("gge-module:export_BranchesManager");
var __dep_export_NetworkInstancesManager = require("gge-module:export_NetworkInstancesManager");
var __dep_export_NetworkSettings = require("gge-module:export_NetworkSettings");
var __s0local0 = function () {
  function WorldAssignmentFacade() {}
  Object.defineProperty(WorldAssignmentFacade.prototype, "defaultCountry", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).defaultCountry;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "currentCountry", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).currentCountry;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "detectionFactor", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).detectionFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "activeCountries", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).activeCountries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "allCountries", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).allCountries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "notSupportedCountries", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).notSupportedCountries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "branches", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_BranchesManager.BranchesManager).branches;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "currentBranch", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_BranchesManager.BranchesManager).currentBranch;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "networkInstances", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).networkInstances;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "networkSettings", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_NetworkSettings.NetworkSettings);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldAssignmentFacade.prototype, "selectedNetworkInstance", {
    get: function () {
      return __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).selectedNetworkInstance;
    },
    enumerable: true,
    configurable: true
  });
  WorldAssignmentFacade.prototype.getBranchByZoneId = function (__s27param0) {
    return __dep_export_Context.Context.instance.get(__dep_export_BranchesManager.BranchesManager).getBranchByZoneId(__s27param0);
  };
  WorldAssignmentFacade.prototype.getInstanceByZoneId = function (__s29param0) {
    return __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).getInstanceByZoneId(__s29param0);
  };
  WorldAssignmentFacade.prototype.getInstanceById = function (__s31param0) {
    return __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).getInstanceById(__s31param0);
  };
  WorldAssignmentFacade.prototype.getInstancesByCountryCode = function (__s33param0) {
    return __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager).getInstancesByCountryCode(__s33param0);
  };
  return WorldAssignmentFacade;
}();
exports.WorldAssignmentFacade = __s0local0;
