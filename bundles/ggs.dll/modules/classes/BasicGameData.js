Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_DeviceId = require("gge-module:class_DeviceId");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("BasicGameData");
var __s0local1 = function () {
  function BasicGameData() {}
  Object.defineProperty(BasicGameData.prototype, "eventId", {
    get: function () {
      return __dep_class_TrackingEventIds.TrackingEventIds.IN_GAME_PERFORMANCE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "gameId", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "networkId", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "instanceId", {
    get: function () {
      return __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "playerId", {
    get: function () {
      return __dep_class_BasicModel.BasicModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "sessionId", {
    get: function () {
      return Number(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sessionId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "sessionTime", {
    get: function () {
      return Math.floor(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sessionLength);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "date", {
    get: function () {
      return new Date().getTime() / 1000;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "level", {
    get: function () {
      return __dep_class_BasicModel.BasicModel.userData.userLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "deviceId", {
    get: function () {
      return __dep_class_DeviceId.DeviceId.DESKTOP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "storeId", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "memoryUsage", {
    get: function () {
      __s0local0.warn("memory usage not available");
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "buildVersion", {
    get: function () {
      return Number(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.versionInformation.versionNumberGame.replace(/\D/g, ""));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "lang", {
    get: function () {
      return __dep_export_CSSMouseCursor.Capabilities.language;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "connectionType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return BasicGameData;
}();
exports.BasicGameData = __s0local1;
