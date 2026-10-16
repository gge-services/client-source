Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function UsabilityTestEnvironment() {
    return __s1param0.call(this, UsabilityTestEnvironment.USABILITY_TEST_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(UsabilityTestEnvironment, __s1param0);
  UsabilityTestEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-netconf/{gameId}/{networkId}.xml";
    }
    this._languageConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/language/{gameId}/cldr";
    this._versionPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/version/{gameId}/version.json";
    this._itemsVersionPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/loader/{gameTitle}/ItemsVersion.properties";
    this._refCountURLPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/loader-usability/refcount.php";
  };
  UsabilityTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isUsabilityTest;
  };
  UsabilityTestEnvironment.USABILITY_TEST_ENVIRONMENT_ID = "UsabilityTestEnvironment";
  return UsabilityTestEnvironment;
}(require("gge-module:class_LiveEnvironment").LiveEnvironment);
exports.UsabilityTestEnvironment = __s0local0;
