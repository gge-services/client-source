// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 293
// Export: CastleVersionInformation; preserved source: modules/webpack/exports/CastleVersionInformation.js
// Original canonical SHA-256: 044e07362d629b59f649bd06728b1872b95dbad6bc4d3a0752101f443afc3ba4
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
