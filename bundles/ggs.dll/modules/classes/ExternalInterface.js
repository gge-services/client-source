Object.defineProperty(exports, "__esModule", {
  value: true
});
var logger_1 = require("gge-module:export_LoggerConfigurator");
var logger = logger_1.getLogger("CreateJs.ExternalInterface");
var ExternalInterface = function () {
  function ExternalInterface() {}
  Object.defineProperty(ExternalInterface, "available", {
    get: function () {
      return window.parent != window.self;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExternalInterface, "objectID", {
    get: function () {
      return ExternalInterface._objectID;
    },
    enumerable: true,
    configurable: true
  });
  ExternalInterface.setFlashObject = function () {
    logger.warn("WHERE / WHY ARE WE STILL SETTING THE FLASHOBJECT ??");
    ExternalInterface._flashObject = document.getElementById("flashObject");
  };
  ExternalInterface.getFlashObject = function () {
    logger.warn("WHO is asking for getFlashObject??");
    return ExternalInterface._flashObject;
  };
  ExternalInterface.addCallback = function (__s13param0, __s13param1) {
    logger.debug("adding callback to ", __s13param0);
    if (__s13param0.length > 0 && __s13param1 !== undefined) {
      window.messageHandler.addEvent(__s13param0, __s13param1);
    }
  };
  ExternalInterface.call = function (functionName) {
    var params = [];
    for (var __s16local0 = 1, __s16local1; __s16local0 < arguments.length; __s16local0++) {
      params[__s16local0 - 1] = arguments[__s16local0];
    }
    if (!ExternalInterface.isNameOnly(functionName)) {
      if (params.length === 0) {
        return eval("(" + functionName + ")()");
      } else {
        return eval("(" + functionName + ")(" + params + ")");
      }
    }
    if (params.length > 0 && typeof params[params.length - 1] == "function") {
      logger.error("it seems a callback has been passed to ExternalInterface - please use ExternalInterface.asynCall  in order to be able to handle callbacks and promises - otherwise result might be unpredictable");
    } else {
      try {
        if (params.length === 0) {
          window.messageHandler.sendMessage(functionName);
        } else {
          (__s16local1 = window.messageHandler).sendMessage.apply(__s16local1, [functionName].concat(params));
        }
      } catch (__s28local0) {
        logger.warn("Something went wrong with ExternalInterface SYNC call " + functionName + ":  " + __s28local0);
      }
    }
  };
  ExternalInterface.asyncCall = function (__s30param0) {
    var __s30local0 = [];
    for (var __s30local1 = 1; __s30local1 < arguments.length; __s30local1++) {
      __s30local0[__s30local1 - 1] = arguments[__s30local1];
    }
    if (ExternalInterface.available) {
      return new Promise(function (__s35param0, __s35param1) {
        var __s35local0;
        try {
          var __s35local1 = __s30local0.length > 0 && typeof __s30local0[__s30local0.length - 1] == "function" ? __s30local0.pop() : null;
          __s30local0.push(function (__s38param0) {
            logger.debug("Message " + __s30param0 + " went back and forth", __s38param0);
            if (__s35local1) {
              __s35local1(__s38param0);
            }
            __s35param0(__s38param0);
          });
          (__s35local0 = window.messageHandler).sendMessage.apply(__s35local0, [__s30param0].concat(__s30local0));
        } catch (__s41local0) {
          __s35param1("Something went wrong with ExternalInterface ASYNC call " + __s30param0 + ":  " + __s41local0);
        }
      });
    } else if (window && window.location && window.location.origin && (window.location.origin.includes("https://localhost") || window.location.origin.includes("https://127.0.0.1") || window.location.origin.includes(".local"))) {
      return Promise.resolve();
    } else {
      return Promise.reject("ExternalInterface not available");
    }
  };
  ExternalInterface.isNameOnly = function (__s45param0) {
    return __s45param0.search(/(\=\>\(|\)|\{|\})/i) === -1;
  };
  ExternalInterface.marshallExceptions = false;
  ExternalInterface._objectID = "flashObject";
  return ExternalInterface;
}();
exports.ExternalInterface = ExternalInterface;
