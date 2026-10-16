Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("CoreJS.InstanceVOProxy");
var __s0local1 = function () {
  function InstanceVOProxy() {
    this._runtimeInstances = new Map();
  }
  InstanceVOProxy.prototype.setWorldAssignementFacade = function (__s5param0) {
    this.worldAssignmentFacade = __s5param0;
  };
  Object.defineProperty(InstanceVOProxy.prototype, "instanceMap", {
    get: function () {
      if (!this.worldAssignmentFacade) {
        __s0local0.warn("worldassignment is null: are you invoking get InstanceMap too early?");
        return [];
      }
      var __s7local0 = this.worldAssignmentFacade.networkInstances.concat();
      if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isTest) {
        __s7local0 = __s7local0.concat(this._runtimeInstances.toArray());
      }
      return __s7local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InstanceVOProxy.prototype, "selectedInstanceVO", {
    get: function () {
      if (this._selectedInstanceVO) {
        return this._selectedInstanceVO;
      } else {
        return this.getSelectedWorldAssignmentInstance();
      }
    },
    enumerable: true,
    configurable: true
  });
  InstanceVOProxy.prototype.getSelectedWorldAssignmentInstance = function () {
    if (this.worldAssignmentFacade) {
      return this.worldAssignmentFacade.selectedNetworkInstance;
    } else {
      return null;
    }
  };
  InstanceVOProxy.prototype.addInstance = function (__s19param0) {
    if (!this.worldAssignmentFacade.getInstanceById(__s19param0.instanceId)) {
      this._runtimeInstances.set(__s19param0.instanceId, __s19param0);
    }
  };
  InstanceVOProxy.prototype.addInstances = function (__s22param0) {
    __s0local0.warn("deprecated(HTML-4220, we should use a proxied network.xml instead of messing around at runtime");
    for (var __s22local0 = 0, __s22local1 = __s22param0; __s22local0 < __s22local1.length; __s22local0++) {
      var __s22local2 = __s22local1[__s22local0];
      this.addInstance(__s22local2);
    }
  };
  InstanceVOProxy.prototype.getInstanceVOByID = function (__s26param0) {
    if (this._runtimeInstances.has(__s26param0)) {
      return this._runtimeInstances.get(__s26param0);
    } else if (this.worldAssignmentFacade) {
      return this.worldAssignmentFacade.getInstanceById(__s26param0);
    } else {
      __s0local0.warn("worldassignment is null: are you invoking getInstanceVOByID too early?");
      return null;
    }
  };
  InstanceVOProxy.prototype.getInstanceVOByZoneID = function (__s31param0) {
    if (this.worldAssignmentFacade) {
      return this.worldAssignmentFacade.getInstanceByZoneId(__s31param0);
    } else {
      __s0local0.warn("worldassignment is null: are you invoking getInstanceVOByZoneID too early?");
      return null;
    }
  };
  InstanceVOProxy.prototype.getInstancesForActualCountry = function () {
    if (this.worldAssignmentFacade) {
      return this.worldAssignmentFacade.getInstancesByCountryCode(this.worldAssignmentFacade.currentCountry.ggsCountryCode);
    } else {
      __s0local0.warn("worldassignment is null: are you invoking getInstancesForActualCountry too early?");
      return [];
    }
  };
  InstanceVOProxy.prototype.printInstances = function () {
    for (var __s39local0 = 0, __s39local1 = this.instanceMap; __s39local0 < __s39local1.length; __s39local0++) {
      var __s39local2 = __s39local1[__s39local0];
      __s0local0.debug(__s39local2.toString());
    }
  };
  return InstanceVOProxy;
}();
exports.InstanceVOProxy = __s0local1;
