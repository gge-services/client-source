Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function () {
  function LODataFacade() {}
  Object.defineProperty(LODataFacade.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "httpReferer", {
    get: function () {
      return this.env.referrer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "gameId", {
    get: function () {
      return String(this.env.gameId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "sessionId", {
    get: function () {
      return this.env.sessionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "sessionLength", {
    get: function () {
      return Math.floor(this.env.sessionLength).toString();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "networkId", {
    get: function () {
      return String(this.env.networkId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "instanceId", {
    get: function () {
      if (__dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO) {
        return __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "";
      } else {
        return "Not available/defined yet";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "browserUserAgent", {
    get: function () {
      return navigator.userAgent || "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "browserPlatform", {
    get: function () {
      return navigator.platform || "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "browserVendor", {
    get: function () {
      return navigator.vendor || "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "os", {
    get: function () {
      return __dep_export_CSSMouseCursor.Capabilities.os;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "clientVersion", {
    get: function () {
      return this.env.buildNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "itemXMLVersion", {
    get: function () {
      return this.env.versionInformation.itemXmlVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "clientType", {
    get: function () {
      var __s33local0 = "all";
      if (this.env.isPreClient) {
        __s33local0 = "preClient";
      }
      return __s33local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "cdn", {
    get: function () {
      return this.env.cdnSubDomain;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "countryCode", {
    get: function () {
      if (__dep_class_GGSCountryController.GGSCountryController.instance.currentCountry) {
        return __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsCountryCode;
      } else {
        return "Not available/defined yet";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "languageCode", {
    get: function () {
      if (__dep_class_GGSCountryController.GGSCountryController.instance.currentCountry) {
        return __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode;
      } else {
        return "Not available/defined yet";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "isFirstVisitOfGGS", {
    get: function () {
      return this.env.isFirstVisitOfGGS.toString();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "accountId", {
    get: function () {
      return this.env.accountId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "playerId", {
    get: function () {
      if (__dep_class_BasicModel.BasicModel.userData) {
        return String(__dep_class_BasicModel.BasicModel.userData.playerID);
      } else {
        return "Not available/defined yet";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "connectionType", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "deviceType", {
    get: function () {
      if (__dep_export_CSSMouseCursor.Capabilities.isMobile) {
        return "Mobile";
      } else {
        return "Desktop";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "isFirstAppStartAfterUpdate", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "deviceCategory", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "isInBackground", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "sourceStore", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LODataFacade.prototype, "performanceCategory", {
    get: function () {
      return "Not available";
    },
    enumerable: true,
    configurable: true
  });
  return LODataFacade;
}();
exports.LODataFacade = __s0local0;
