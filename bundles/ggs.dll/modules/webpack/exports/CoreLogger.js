Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b38f6783f1595682 = require("gge-module:exact_b38f6783f1595682");
var __dep_exact_f4aa3b7953d3a506 = require("gge-module:exact_f4aa3b7953d3a506");
var __s0local0 = function () {
  function CoreLogger(__s3param0) {
    this._realLogger = __s3param0;
  }
  CoreLogger.prototype.enabledFor = function (__s5param0) {
    return this._realLogger.enabledFor(exports.LoggingLevelMapper.get(__s5param0));
  };
  CoreLogger.prototype.time = function (__s7param0) {
    __dep_exact_f4aa3b7953d3a506.time(__s7param0);
  };
  CoreLogger.prototype.timeEnd = function (__s9param0) {
    __dep_exact_f4aa3b7953d3a506.timeEnd(__s9param0);
  };
  Object.defineProperty(CoreLogger.prototype, "name", {
    get: function () {
      return this._realLogger.context.name;
    },
    enumerable: true,
    configurable: true
  });
  CoreLogger.prototype.debug = function (__s13param0) {
    var __s13local0;
    var __s13local1 = [];
    for (var __s13local2 = 1; __s13local2 < arguments.length; __s13local2++) {
      __s13local1[__s13local2 - 1] = arguments[__s13local2];
    }
    if (this.debugEnabled) {
      (__s13local0 = this._realLogger.debug).call.apply(__s13local0, [this._realLogger, __s13param0].concat(__s13local1));
    }
  };
  CoreLogger.prototype.info = function (__s18param0) {
    var __s18local0;
    var __s18local1 = [];
    for (var __s18local2 = 1; __s18local2 < arguments.length; __s18local2++) {
      __s18local1[__s18local2 - 1] = arguments[__s18local2];
    }
    if (this.infoEnabled) {
      (__s18local0 = this._realLogger.info).call.apply(__s18local0, [this._realLogger, __s18param0].concat(__s18local1));
    }
  };
  CoreLogger.prototype.warn = function (__s23param0) {
    var __s23local0;
    var __s23local1 = [];
    for (var __s23local2 = 1; __s23local2 < arguments.length; __s23local2++) {
      __s23local1[__s23local2 - 1] = arguments[__s23local2];
    }
    if (this.warnEnabled) {
      (__s23local0 = this._realLogger.warn).call.apply(__s23local0, [this._realLogger, __s23param0].concat(__s23local1));
    }
  };
  CoreLogger.prototype.error = function (__s28param0) {
    var __s28local0;
    var __s28local1 = [];
    for (var __s28local2 = 1; __s28local2 < arguments.length; __s28local2++) {
      __s28local1[__s28local2 - 1] = arguments[__s28local2];
    }
    if (this.errorEnabled) {
      (__s28local0 = this._realLogger.error).call.apply(__s28local0, [this._realLogger, __s28param0].concat(__s28local1));
    }
  };
  Object.defineProperty(CoreLogger.prototype, "debugEnabled", {
    get: function () {
      return this.enabledFor(__dep_exact_b38f6783f1595682.LoggingLevel.DEBUG);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreLogger.prototype, "infoEnabled", {
    get: function () {
      return this.enabledFor(__dep_exact_b38f6783f1595682.LoggingLevel.INFO);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreLogger.prototype, "warnEnabled", {
    get: function () {
      return this.enabledFor(__dep_exact_b38f6783f1595682.LoggingLevel.WARN);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoreLogger.prototype, "errorEnabled", {
    get: function () {
      return this.enabledFor(__dep_exact_b38f6783f1595682.LoggingLevel.ERROR);
    },
    enumerable: true,
    configurable: true
  });
  CoreLogger.prototype.setLevel = function (__s41param0) {
    this._realLogger.setLevel(exports.LoggingLevelMapper.get(__s41param0));
  };
  return CoreLogger;
}();
exports.CoreLogger = __s0local0;
exports.LoggingLevelMapper = new Map([[__dep_exact_b38f6783f1595682.LoggingLevel.DEBUG, __dep_exact_f4aa3b7953d3a506.DEBUG], [__dep_exact_b38f6783f1595682.LoggingLevel.INFO, __dep_exact_f4aa3b7953d3a506.INFO], [__dep_exact_b38f6783f1595682.LoggingLevel.WARN, __dep_exact_f4aa3b7953d3a506.WARN], [__dep_exact_b38f6783f1595682.LoggingLevel.ERROR, __dep_exact_f4aa3b7953d3a506.ERROR], [__dep_exact_b38f6783f1595682.LoggingLevel.NONE, __dep_exact_f4aa3b7953d3a506.OFF]]);
