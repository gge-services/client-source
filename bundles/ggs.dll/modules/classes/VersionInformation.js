Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicLanguageVersion = require("gge-module:class_BasicLanguageVersion");
var __dep_class_BasicVersions = require("gge-module:class_BasicVersions");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __s0local0 = function () {
  function VersionInformation() {
    this._additionalItemXMLInfo = "";
    this._additionalLanguageXMLInfo = "";
  }
  Object.defineProperty(VersionInformation, "versionInstance", {
    get: function () {
      VersionInformation._versionInstance ||= new VersionInformation();
      return VersionInformation._versionInstance;
    },
    enumerable: true,
    configurable: true
  });
  VersionInformation.prototype.parseItemXML = function (__s7param0) {
    var __s7local0 = __s7param0.child("versionInfo");
    this.itemXmlVersion = __s7local0.attribute("version");
    this.parseAdditionlItemXMLVersionInfo(__s7local0);
  };
  VersionInformation.prototype.parseLanguageXml = function (__s9param0) {
    VersionInformation._languageXmlVersion = __dep_opaque_c83528567256175cfb346d7d.TextsParser.parseVersionNo(__s9param0) + "|" + __dep_opaque_c83528567256175cfb346d7d.TextsParser.parseDeployTime(__s9param0);
  };
  VersionInformation.prototype.parseAdditionlItemXMLVersionInfo = function (__s11param0) {};
  Object.defineProperty(VersionInformation.prototype, "itemXmlVersion", {
    get: function () {
      return VersionInformation._itemXmlVersion;
    },
    set: function (__s15param0) {
      VersionInformation._itemXmlVersion = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "languageXmlVersion", {
    get: function () {
      return VersionInformation._languageXmlVersion;
    },
    set: function (__s19param0) {
      VersionInformation._languageXmlVersion = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "versionNumberItemXMLString", {
    get: function () {
      return this.itemXmlVersion + this._additionalItemXMLInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "versionNumberLanguageXMLString", {
    get: function () {
      return this.itemXmlVersion + this._additionalLanguageXMLInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "buildNumberGame", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "versionNumberGame", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "buildNumberServer", {
    get: function () {
      return VersionInformation._buildNumberServer;
    },
    set: function (__s31param0) {
      VersionInformation._buildNumberServer = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "basicVersionNumberItemsXML", {
    get: function () {
      return __dep_class_BasicVersions.BasicVersions.itemXMLVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "basicVersionNumberLanguageXML", {
    get: function () {
      return __dep_class_BasicLanguageVersion.BasicLanguageVersion.VERSION;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatVersionNumberGame", {
    get: function () {
      return "V" + this.versionNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatBuildNumberGame", {
    get: function () {
      return " B" + this.buildNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatItemXmlVersionNumber", {
    get: function () {
      if (VersionInformation._itemXmlVersion) {
        return " iXML" + VersionInformation._itemXmlVersion;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatBuildNumberServer", {
    get: function () {
      if (VersionInformation._buildNumberServer) {
        return " S" + VersionInformation._buildNumberServer;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "formatLanguageVersionNumber", {
    get: function () {
      return " lXML" + this.languageXmlVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VersionInformation.prototype, "versionText", {
    get: function () {
      return this.getVersionText();
    },
    enumerable: true,
    configurable: true
  });
  VersionInformation.prototype.getVersionText = function () {
    return this.formatVersionNumberGame + this.formatBuildNumberGame + this.formatBuildNumberServer + this.formatItemXmlVersionNumber + this.formatLanguageVersionNumber;
  };
  return VersionInformation;
}();
exports.VersionInformation = __s0local0;
