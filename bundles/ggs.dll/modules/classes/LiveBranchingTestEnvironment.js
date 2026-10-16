Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function LiveBranchingTestEnvironment() {
    return __s1param0.call(this, LiveBranchingTestEnvironment.LIVE_BRANCHING_TEST_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LiveBranchingTestEnvironment, __s1param0);
  LiveBranchingTestEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-netconf-test/{gameId}/{networkId}.xml";
    this._countryConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/country/{gameId}/{countryVersion}/country.xml";
    this._languageConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/cldr";
    this._accountCookiePathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://account.{domain}/CookieSaver.swf";
    this._versionPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/version/{gameId}/version.json";
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches-test/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://" + __dep_class_BasicConstants.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches-test/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
    this._refCountURLPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/loader-test/refcount.php";
    this._shopPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://shop-test.goodgamestudios.com/{languageCode}/";
  };
  LiveBranchingTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLiveBranchingEnvironment && this._data.globals.isTest;
  };
  LiveBranchingTestEnvironment.LIVE_BRANCHING_TEST_ENVIRONMENT_ID = "LiveBranchingTestEnvironment";
  return LiveBranchingTestEnvironment;
}(require("gge-module:class_LiveBranchingLiveEnvironment").LiveBranchingLiveEnvironment);
exports.LiveBranchingTestEnvironment = __s0local0;
