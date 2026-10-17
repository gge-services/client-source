// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 72
// Export: NetworkInstancesManager; preserved source: modules/webpack/exports/NetworkInstancesManager.js
// Original canonical SHA-256: 24892bb524375e0b714f335857c06fb010c21c10ffffe6554fd36c2029e336bd
var __s0local1 = function () {
  function NetworkInstancesManager() {}
  NetworkInstancesManager.prototype.initializeInstances = function (__s5param0) {
    this._networkInstances = __s5param0;
    this._initialized = true;
  };
  Object.defineProperty(NetworkInstancesManager.prototype, "networkInstances", {
    get: function () {
      return this._networkInstances;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkInstancesManager.prototype, "selectedNetworkInstance", {
    get: function () {
      return this._selectedNetworkInstance;
    },
    enumerable: true,
    configurable: true
  });
  NetworkInstancesManager.prototype.getInstanceById = function (__s11param0) {
    return this.networkInstances.find(function (__s13param0) {
      return __s13param0.instanceId === __s11param0;
    });
  };
  NetworkInstancesManager.prototype.getInstanceByZoneId = function (__s15param0) {
    return this.networkInstances.find(function (__s17param0) {
      return __s17param0.zoneId === __s15param0;
    });
  };
  NetworkInstancesManager.prototype.getInstancesByCountryCode = function (__s19param0) {
    var __s19local0;
    var __s19local1 = [];
    for (var __s19local2 = 0; __s19local2 < this.networkInstances.length; __s19local2++) {
      __s19local0 = this.networkInstances[__s19local2];
      for (var __s19local3 = 0; __s19local3 < __s19local0.countries.length; __s19local3++) {
        if (__s19local0.countries[__s19local3].ggsCountryCode === __s19param0) {
          __s19local1.push(__s19local0);
          break;
        }
      }
    }
    return __s19local1;
  };
  NetworkInstancesManager.prototype.assignNetworkInstance = function (__s26param0) {
    var __s26local0;
    if (this._initialized) {
      __s0local0.debug("select network instance - given country code:", __s26param0);
      if (__dep_export_Context.Context.instance.globals.presetInstanceId > 0 && (__s26local0 = this._networkInstances.find(exports.finderById(__dep_export_Context.Context.instance.globals.presetInstanceId)))) {
        __s0local0.debug("NetworkInstancesManager.assignNetworkInstance -->presetInstanceId: ", __dep_export_Context.Context.instance.globals.presetInstanceId);
        this._selectedNetworkInstance = __s26local0;
        return;
      } else if (__dep_export_Context.Context.instance.globals.zoneIdFromFriendInviteCode > 0 && (__s26local0 = this.getInstanceByZoneId(__dep_export_Context.Context.instance.globals.zoneIdFromFriendInviteCode))) {
        __s0local0.debug("NetworkInstancesManager.assignNetworkInstance -->friendInviteZoneId: ", __dep_export_Context.Context.instance.globals.zoneIdFromFriendInviteCode);
        this._selectedNetworkInstance = __s26local0;
        return;
      } else if (__dep_export_Context.Context.instance.globals.instanceIdFromNetworkCookie > 0 && (__s26local0 = this.getInstanceById(__dep_export_Context.Context.instance.globals.instanceIdFromNetworkCookie))) {
        __s0local0.debug("NetworkInstancesManager.assignNetworkInstance -->instanceIdByNetworkCookie: ", __dep_export_Context.Context.instance.globals.instanceIdFromNetworkCookie);
        this._selectedNetworkInstance = __s26local0;
        return;
      } else if (__s26param0 !== __dep_class_CountryDetectionConstants.CountryDetectionConstants.INSTANCE_COUNTRY_DEFAULT && (__s26local0 = exports.findPreferredInstanceForCountry(this._networkInstances, __s26param0))) {
        __s0local0.debug("NetworkInstancesManager.assignNetworkInstance  --> coutryCode: ", __s26param0);
        this._selectedNetworkInstance = __s26local0;
        return;
      } else if (__dep_export_Context.Context.instance.networkSettings.defaultInstanceId > 0 && (__s26local0 = this.getInstanceById(__dep_export_Context.Context.instance.networkSettings.defaultInstanceId))) {
        __s0local0.debug("NetworkInstancesManager.assignNetworkInstance --> networkSettings.defaultInstanceId : ", __dep_export_Context.Context.instance.networkSettings.defaultInstanceId);
        this._selectedNetworkInstance = __s26local0;
        return;
      } else {
        __s0local0.debug("NetworkInstancesManager.assignNetworkInstance --> fallback to first instance in list: ", this.networkInstances[0]);
        this._selectedNetworkInstance = this.networkInstances[0];
        return this._selectedNetworkInstance;
      }
    }
    __s0local0.debug("NetworkInstancesManager not initialized. Can not assignNetworkInstance.");
  };
  NetworkInstancesManager.prototype.forceInstance = function (__s35param0) {
    this._selectedNetworkInstance = __s35param0;
  };
  NetworkInstancesManager.prototype.forceInstanceByCountry = function (__s37param0) {
    var __s37local0 = exports.findPreferredInstanceForCountry(this.networkInstances, __s37param0);
    if (__s37local0) {
      this.forceInstance(__s37local0);
    } else {
      __s0local0.error("forceInstanceByCountry: could not find any instance for ", __s37param0);
    }
    return this._selectedNetworkInstance;
  };
  return NetworkInstancesManager;
}();
exports.NetworkInstancesManager = __s0local1;
