Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_6fd0a7f85c69b366718f0fa2 = require("gge-module:opaque_6fd0a7f85c69b366718f0fa2");
var __dep_opaque_9e901e8e2483a22f7a07841d = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_9e901e8e2483a22f7a07841d_1 = require("gge-module:opaque_9e901e8e2483a22f7a07841d");
var __dep_opaque_81dacdf05bd322922517ac3a = require("gge-module:opaque_81dacdf05bd322922517ac3a");
var __s0local0 = function (__s1param0) {
  function RelativePathEnvironment() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, "RelativePathsEnvironment") || this;
  }
  __dep_opaque_6fd0a7f85c69b366718f0fa2.__extends(RelativePathEnvironment, __s1param0);
  RelativePathEnvironment.prototype.initPatterns = function () {
    this._zoneCapacitiesConfigPathPattern = "https://files-ak.goodgamestudios.com/games-config/network/status/12/zone_capacities.json";
    this._maintenanceConfigPathPattern = "https://files-ak.goodgamestudios.com/games-config/network/status/12/maint.json";
    this._assetsFolderPathPattern = "assets/";
    this._audiosFolderPathPattern = "assets/sound/";
    this._networkConfigPathPattern = "../config/network/{networkId}.xml";
    this._versionPathPattern = "../config/languages/version.json";
    this._countryConfigPathPattern = "config/country/{countryVersion}/country.xml";
    this._languageConfigPathPattern = "../config/languages/{languageVersion}/{languageCode}.json";
    this._cldrConfigPathPattern = "cldr";
    this._branchesConfigPathPattern = "config/branches/latest/branches.xml";
    this._itemXMLURLPattern = "items/items_v{itemsXMLVersion}.json";
    this._itemsVersionPathPattern = "items/ItemsVersion.properties";
    this._fontsSWFURLPattern = "config/fonts";
    this._fontsSWFURLPatternVersioned = "config/fonts/{languageCode}";
    this._shopPathPattern = __dep_opaque_9e901e8e2483a22f7a07841d.BasicConstants.DOMAIN_PROTOCOL + "{shopBaseUrl}.goodgamestudios.com/{languageCode}/";
  };
  RelativePathEnvironment.prototype.isSupported = function () {
    return true;
  };
  return RelativePathEnvironment;
}(__dep_opaque_9e901e8e2483a22f7a07841d_1.LiveEnvironment);
exports.RelativePathEnvironment = __s0local0;
__dep_opaque_81dacdf05bd322922517ac3a.classImplementsInterfaces(__s0local0, "IBaseEnvironmentPatterns", "IEnvironment", "IBaseEnvironment", "IDetectableEnvironment");
