Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function LiveTestEnvironment() {
    return __s1param0.call(this, LiveTestEnvironment.LIVE_TEST_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LiveTestEnvironment, __s1param0);
  LiveTestEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/network/{gameId}/{networkVersion}/{networkId}.xml";
    }
    this._countryConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/country/{gameId}/{countryVersion}/country.xml";
    this._languageConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/cldr";
    this._versionPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/version/{gameId}/version.json";
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches-livetest/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches-livetest/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LiveTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLiveTest;
  };
  LiveTestEnvironment.LIVE_TEST_ENVIRONMENT_ID = "LiveTestEnvironment";
  return LiveTestEnvironment;
}(require("gge-module:class_LiveEnvironment").LiveEnvironment);
exports.LiveTestEnvironment = __s0local0;
