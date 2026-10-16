Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_CSSMouseCursor_1 = require("gge-module:export_CSSMouseCursor");
var __dep_export_CSSMouseCursor_2 = require("gge-module:export_CSSMouseCursor");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __dep_export_LODataFacade = require("gge-module:export_LODataFacade");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("ExternalLog");
var __dep_exact_3e7552199225aa44 = require("gge-module:exact_3e7552199225aa44");
var __s0local1 = function () {
  function ExternalLog() {
    this._isActive = true;
    this._facade = null;
    this.init();
    if (ExternalLog._logInstance) {
      throw new Error(ExternalLog.MESSAGE_SINGLETON);
    }
  }
  Object.defineProperty(ExternalLog, "logger", {
    get: function () {
      ExternalLog._logInstance ||= new ExternalLog();
      return ExternalLog._logInstance;
    },
    enumerable: true,
    configurable: true
  });
  ExternalLog.prototype.dispose = function () {
    this._dispatchedHashes = [];
  };
  ExternalLog.prototype.log = function (__s10param0, __s10param1 = false) {
    if (this.isActive) {
      __s10param0.dataFacade = this._facade;
      var __s10local0 = __s10param0.create();
      var __s10local1 = this.takeHash(__s10local0);
      var __s10local2 = __dep_export_CSSMouseCursor.getQualifiedClassName(__s10param0);
      if (!__s10local0.isEssentialFilled) {
        throw new Error(__s10local2 + ": " + ExternalLog.MESSAGE_NO_ESSENTIALS);
      }
      if (!__s10param1) {
        if (this._dispatchedHashes.indexOf(__s10local1) >= 0) {
          __s0local0.debug(this.parseMessage(ExternalLog.MESSAGE_SKIP, __s10local2, __s10local0.subErrorId));
          return;
        }
        if (this._dispatchedHashes.length >= ExternalLog.DISPATCHED_HASHES_MAX_LENGTH) {
          this.cleanOlderHashes();
        }
        this._dispatchedHashes.push(__s10local1);
      }
      __s0local0.info(this.parseMessage(ExternalLog.MESSAGE_SEND, __s10local2, __s10local0.subErrorId, JSON.stringify(__s10local0.data)));
      this.send(__s10local0);
    } else {
      __s0local0.warn(this.parseMessage(ExternalLog.MESSAGE_NOT_ACTIVE, __s10param0));
    }
  };
  ExternalLog.prototype.init = function () {
    this._isActive = true;
    this._dispatchedHashes = [];
    this._facade = new __dep_export_LODataFacade.LODataFacade();
  };
  ExternalLog.prototype.takeHash = function (__s20param0) {
    var __s20local0 = [];
    __s20param0.logData.forEach(function (__s22param0, __s22param1) {
      if (ExternalLog.EXCLUDED_PARAMS_FROM_HASH.indexOf(__s22param1) < 0) {
        __s20local0.push(__s22param1 + __s22param0);
      }
    });
    __s20local0.sort();
    return new __dep_exact_3e7552199225aa44().update(__s20local0.join("")).digest("hex");
  };
  ExternalLog.prototype.cleanOlderHashes = function () {
    while (this._dispatchedHashes.length >= ExternalLog.DISPATCHED_HASHES_MAX_LENGTH) {
      this._dispatchedHashes.shift();
    }
  };
  ExternalLog.prototype.send = function (__s29param0) {
    var __s29local0 = new __dep_export_CSSMouseCursor_2.URLRequest(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.LOG_API_URL, new URLSearchParams(__s29param0.data).toString(), "POST");
    var __s29local1 = new __dep_export_CSSMouseCursor_1.URLLoaderService(__s29local0);
    __s29local1.load().then(function (__s31param0) {
      __s29local1.dispose();
    }).catch(function (__s33param0) {
      __s29local1.dispose();
      __s0local0.warn(__s33param0);
    });
  };
  ExternalLog.prototype.parseMessage = function (__s35param0) {
    var __s35local0 = [];
    for (var __s35local1 = 1; __s35local1 < arguments.length; __s35local1++) {
      __s35local0[__s35local1 - 1] = arguments[__s35local1];
    }
    var __s35local2 = __s35param0;
    for (var __s35local3 = 0; __s35local3 < __s35local0.length; __s35local3++) {
      __s35local2 = __s35local2.replace("{" + __s35local3 + "}", __s35local0[__s35local3]);
    }
    return __s35local2;
  };
  Object.defineProperty(ExternalLog.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (__s43param0) {
      this._isActive = __s43param0;
      __s0local0.debug(this.parseMessage(ExternalLog.MESSAGE_STATUS_CHANGE, __s43param0));
    },
    enumerable: true,
    configurable: true
  });
  ExternalLog.MESSAGE_SINGLETON = "Calling constructor not allowed! logger instead.";
  ExternalLog.MESSAGE_STATUS_CHANGE = "Status: '{0}'";
  ExternalLog.MESSAGE_NO_ESSENTIALS = "You have to execute createEssentials in your '{0}' class.";
  ExternalLog.MESSAGE_NOT_ACTIVE = "ExternalLog is not active, but wants to log '{0}' event";
  ExternalLog.MESSAGE_SKIP = "Event '{0}' with subErrorID '{1}' was already sent. Skipping.";
  ExternalLog.MESSAGE_SEND = "Sending event '{0}' with subErrorID '{1}' and payload '{2}'";
  ExternalLog.EXCLUDED_PARAMS_FROM_HASH = [__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_UTC_TIME_STAMP, __dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_SESSION_LENGTH];
  ExternalLog.DISPATCHED_HASHES_MAX_LENGTH = 25;
  return ExternalLog;
}();
exports.ExternalLog = __s0local1;
