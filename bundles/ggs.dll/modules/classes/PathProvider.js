Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_PathFactory = require("gge-module:class_PathFactory");
var __dep_class_EnvironmentProvider = require("gge-module:class_EnvironmentProvider");
var __dep_class_ConcreteEnvironmentData = require("gge-module:class_ConcreteEnvironmentData");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("CoreJS.PathProvider");
var __s0local1 = function () {
  function PathProvider() {
    if (PathProvider._locked) {
      throw new Error(PathProvider.ERROR_LOCKED);
    }
    this._pathFactory = new __dep_class_PathFactory.PathFactory();
    this._data = new __dep_class_ConcreteEnvironmentData.ConcreteEnvironmentData();
  }
  Object.defineProperty(PathProvider, "instance", {
    get: function () {
      if (!PathProvider._instance) {
        PathProvider._locked = false;
        PathProvider._instance = new PathProvider();
        PathProvider._locked = true;
      }
      return PathProvider._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "networkConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.networkConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "countryConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.countryConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "zoneCapacitiesConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.zoneCapacitiesConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "maintenanceConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.maintenanceConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "branchesConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.branchesConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "languageConfigURL", {
    get: function () {
      __s0local0.debug("current Environment ", __dep_class_EnvironmentProvider.EnvironmentProvider.instance.current);
      __s0local0.debug("GET LANGUAGE CONFIG PATTERN ", this.patterns.languageConfigPathPattern);
      __s0local0.debug("GET LANGUAGE CONFIG DATA", this.data);
      return this._pathFactory.build(this.patterns.languageConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "cldrConfigURL", {
    get: function () {
      __s0local0.debug("current Environment ", __dep_class_EnvironmentProvider.EnvironmentProvider.instance.current);
      __s0local0.debug("CLDR base URL ", this.patterns.cldrConfigPathPattern);
      return this._pathFactory.build(this.patterns.cldrConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "fontsURL", {
    get: function () {
      var __s23local0;
      __s0local0.debug("fontsURL --> using VersionedFontSWF", this.data.globals.useVersionedFontSWF);
      __s23local0 = this.data.globals.useVersionedFontSWF ? this.patterns.fontsSWFURLPatternVersioned : this.patterns.fontsSWFURLPattern;
      return this._pathFactory.build(__s23local0, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "dataCookieURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.dataCookiePathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "accountCookieURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.accountCookiePathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "networkCookieURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.networkCookiePathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "versionURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.versionPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "itemsVersionURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.itemsVersionPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  PathProvider.prototype.getItemSWFURL = function (__s35param0) {
    var __s35local0 = this.patterns.itemSWFURLPattern;
    __s35local0 = (__s35local0 = __s35local0.replace("{itemIndex}", __s35param0.toString())).replace("{itemVersion}", Object(this._data.globals)["versionNumberItemLib" + __s35param0]);
    return __s35local0 = this._pathFactory.build(__s35local0, this.data);
  };
  Object.defineProperty(PathProvider.prototype, "gameURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.gamePathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "assetsFolderURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.assetsFolderPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  PathProvider.prototype.getAssetURL = function (__s41param0) {
    return this.assetsFolderURL + this._itemVersions.getPath(__s41param0);
  };
  PathProvider.prototype.getInterfaceAssetURL = function (__s43param0) {
    return this.assetsFolderURL + this._interfaceVersions.getPath(__s43param0);
  };
  Object.defineProperty(PathProvider.prototype, "itemsXMLURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.itemXMLURLPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "audiosFolderURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.audiosFolderPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  PathProvider.prototype.getSoundURL = function (__s49param0) {
    return this.audiosFolderURL + __s49param0;
  };
  Object.defineProperty(PathProvider.prototype, "patterns", {
    get: function () {
      return __dep_class_EnvironmentProvider.EnvironmentProvider.instance.current.patterns;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "data", {
    get: function () {
      return __dep_class_EnvironmentProvider.EnvironmentProvider.instance.current.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "itemVersions", {
    get: function () {
      return this._itemVersions;
    },
    set: function (__s57param0) {
      this._itemVersions = __s57param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "interfaceVersions", {
    get: function () {
      return this._interfaceVersions;
    },
    set: function (__s61param0) {
      this._interfaceVersions = __s61param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "abTestConfigURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.abTestConfigPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "abTestTrackURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.abTestTrackPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "abTestDisplayURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.abTestDisplayPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PathProvider.prototype, "shopURL", {
    get: function () {
      return this._pathFactory.build(this.patterns.shopPathPattern, this.data);
    },
    enumerable: true,
    configurable: true
  });
  PathProvider.ERROR_LOCKED = "The class is a singleton, please use PathProvider.instance instead.";
  PathProvider._locked = true;
  return PathProvider;
}();
exports.PathProvider = __s0local1;
