Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __s0local0 = require("gge-module:package__goodgamestudios_empire-createjs-assets").version;
exports.appVersion = require("gge-module:package_TranspilationEmpire").version;
var __s0local1 = function (__s1param0) {
  var __s1local0 = __s1param0.split(".");
  var __s1local1 = __s1local0[0];
  var __s1local2 = __s1local0[1];
  var __s1local3 = __s1local0[2];
  for (__s1local3.indexOf("-") && (__s1local3 = __s1local3.split("-")[0]); __s1local2.length < 3;) {
    __s1local2 = "0" + __s1local2;
  }
  while (__s1local3.length < 3) {
    __s1local3 = "0" + __s1local3;
  }
  return __s1local1 + __s1local2 + __s1local3;
}(exports.appVersion);
var __s0local2 = __dep_exact_c549e43d1112dfff.getLogger("CastleVersionInformation");
var __s0local3 = function (__s7param0) {
  function CastleVersionInformation() {
    return __s7param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVersionInformation, __s7param0);
  Object.defineProperty(CastleVersionInformation, "versionInstance", {
    get: function () {
      if (!CastleVersionInformation._castleVersionInstance) {
        CastleVersionInformation._castleVersionInstance = new CastleVersionInformation();
        __s0local2.info("Game Version " + CastleVersionInformation._castleVersionInstance.buildNumberGame);
      }
      return CastleVersionInformation._castleVersionInstance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVersionInformation.prototype, "versionNumberGame", {
    get: function () {
      return exports.appVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVersionInformation.prototype, "buildNumberGame", {
    get: function () {
      return __s0local1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVersionInformation.prototype, "clientVersionString", {
    get: function () {
      return "C" + this.versionNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVersionInformation.prototype, "versionText", {
    get: function () {
      return this.clientVersionString + ", A" + __s0local0 + "\n" + this.formatBuildNumberServer + " \nC" + this.formatItemXmlVersionNumber + " \nS iXML" + this.serverXMLVersion + " \n" + this.formatLanguageVersionNumber;
    },
    enumerable: true,
    configurable: true
  });
  return CastleVersionInformation;
}(__dep_exact_9e901e8e2483a22f.VersionInformation);
exports.CastleVersionInformation = __s0local3;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "IVersionInformation");
