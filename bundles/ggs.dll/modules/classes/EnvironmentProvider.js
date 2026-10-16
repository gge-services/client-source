Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("EnvironmentProvider");
var __s0local1 = function () {
  function EnvironmentProvider() {
    if (EnvironmentProvider._locked) {
      throw new Error(EnvironmentProvider.ERROR_LOCKED);
    }
    this._available = [];
  }
  Object.defineProperty(EnvironmentProvider, "instance", {
    get: function () {
      if (!EnvironmentProvider._instance) {
        EnvironmentProvider._locked = false;
        EnvironmentProvider._instance = new EnvironmentProvider();
        EnvironmentProvider._locked = true;
      }
      return EnvironmentProvider._instance;
    },
    enumerable: true,
    configurable: true
  });
  EnvironmentProvider.prototype.getEnvironmentById = function (__s9param0) {
    var __s9local0;
    for (var __s9local1 = 0, __s9local2 = this._available; __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      if (__s9local3.id === __s9param0) {
        __s9local0 = __s9local3;
        break;
      }
    }
    return __s9local0;
  };
  EnvironmentProvider.prototype.add = function (__s14param0) {
    var __s14local0;
    if (__s14param0 !== null && __s14param0 !== undefined) {
      __s14local0 = new __s14param0();
    }
    if (!__s14local0) {
      throw new Error(EnvironmentProvider.ERROR_WRONG_ENVIRONMENT);
    }
    var __s14local1 = this.getEnvironmentById(__s14local0.id);
    if (__s14local1 !== null && __s14local1 !== undefined) {
      throw new Error(EnvironmentProvider.ERROR_DUPLICATED_ENVIRONMENT);
    }
    __s14local0.data.globals = this._globals;
    __s14local0.initPatterns();
    this._available.push(__s14local0);
  };
  EnvironmentProvider.prototype.detect = function () {
    var __s19local0;
    for (var __s19local1 = 0, __s19local2 = this._available; __s19local1 < __s19local2.length; __s19local1++) {
      var __s19local3 = __s19local2[__s19local1];
      if (__s19local3.detection.isSupported()) {
        __s19local0 = __s19local3;
        break;
      }
    }
    if (!__s19local0) {
      throw Error(EnvironmentProvider.ERROR_NO_ENVIRONMENT);
    }
    this._current = __s19local0;
    __s0local0.debug("Environemntdetected: " + __s19local0.id);
    return this._current;
  };
  EnvironmentProvider.prototype.setCurrentById = function (__s25param0) {
    var __s25local0 = this.getEnvironmentById(__s25param0);
    if (!__s25local0) {
      throw Error(EnvironmentProvider.ERROR_NO_ENVIRONMENT);
    }
    __s0local0.debug("setCurrentById", __s25param0, __s25local0);
    this._current = __s25local0;
    return this._current;
  };
  EnvironmentProvider.prototype.clear = function () {
    this._available = [];
    this._current = null;
  };
  Object.defineProperty(EnvironmentProvider.prototype, "current", {
    get: function () {
      return this._current;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EnvironmentProvider.prototype, "globals", {
    get: function () {
      return this._globals;
    },
    set: function (__s34param0) {
      this._globals = __s34param0;
      for (var __s34local0 = 0, __s34local1 = this._available; __s34local0 < __s34local1.length; __s34local0++) {
        var __s34local2 = __s34local1[__s34local0];
        __s34local2.data.globals = this._globals;
        __s34local2.initPatterns();
      }
    },
    enumerable: true,
    configurable: true
  });
  EnvironmentProvider.ERROR_LOCKED = "The class is a singleton, please use EnvironmentProvider.instance instead.";
  EnvironmentProvider.ERROR_WRONG_ENVIRONMENT = "You have passed a no IEnvironment class.";
  EnvironmentProvider.ERROR_NO_ENVIRONMENT = "No suitable environment found. Cannot run the game without an environment.";
  EnvironmentProvider.ERROR_DUPLICATED_ENVIRONMENT = "You can't add a environment that is already registered.";
  EnvironmentProvider._locked = true;
  return EnvironmentProvider;
}();
exports.EnvironmentProvider = __s0local1;
