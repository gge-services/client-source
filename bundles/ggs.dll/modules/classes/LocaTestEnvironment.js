Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function LocaTestEnvironment() {
    return __s1param0.call(this, LocaTestEnvironment.LOCA_TEST_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LocaTestEnvironment, __s1param0);
  LocaTestEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/{gameId}/{networkVersion}/{networkId}.xml";
    }
    this._countryConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/country/{gameId}/{countryVersion}/country.xml";
    this._zoneCapacitiesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config/network/status/{gameId}/zone_capacities.json";
    this._maintenanceConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config/network/status/{gameId}/maint.json";
    this._languageConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/language/{gameId}/cldr";
    this._versionPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/version/{gameId}/version.json";
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-locatest/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-locatest/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LocaTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLocaTest;
  };
  LocaTestEnvironment.LOCA_TEST_ENVIRONMENT_ID = "LocaTestEnvironment";
  return LocaTestEnvironment;
}(require("gge-module:class_LiveEnvironment").LiveEnvironment);
exports.LocaTestEnvironment = __s0local0;
