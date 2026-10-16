Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function TestEnvironment(__s3param0) {
    return __s1param0.call(this, __s3param0 !== undefined ? __s3param0 : TestEnvironment.TEST_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(TestEnvironment, __s1param0);
  TestEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-netconf-test/{gameId}/{networkId}.xml";
    }
    this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/network/{gameId}/html5/1.xml";
    this._countryConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/country/{gameId}/{countryVersion}/country.xml";
    this._languageConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + ":///files.{domain}/games-config-test/language/{gameId}/cldr";
    this._accountCookiePathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://account.{domain}/CookieSaver.swf";
    this._versionPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/version/{gameId}/version.json";
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-test/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-test/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
    this._refCountURLPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/loader-test/refcount.php";
    this._shopPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://shop-test.goodgamestudios.com/{languageCode}/";
  };
  TestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isTest;
  };
  TestEnvironment.TEST_ENVIRONMENT_ID = "TestEnvironment";
  return TestEnvironment;
}(require("gge-module:class_LiveEnvironment").LiveEnvironment);
exports.TestEnvironment = __s0local0;
