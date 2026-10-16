Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function LiveEnvironment(__s3param0) {
    return __s1param0.call(this, __s3param0 !== undefined ? __s3param0 : LiveEnvironment.LIVE_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LiveEnvironment, __s1param0);
  LiveEnvironment.prototype.initPatterns = function () {
    if (this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-netconf-test/{gameId}/{networkId}.xml";
    } else {
      this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-netconf/{gameId}/{networkId}.xml";
    }
    this._countryConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/country/{gameId}/{countryVersion}/country.xml";
    this._zoneCapacitiesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/network/status/{gameId}/zone_capacities.json";
    this._maintenanceConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/network/status/{gameId}/maint.json";
    this._languageConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/language/{gameId}/cldr";
    this._dataCookiePathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://data.{domain}/CookieSaver.swf";
    this._accountCookiePathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://account.{domain}/CookieSaver.swf";
    this._networkCookiePathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://ncookie.{gameFileName}.{domain}/CookieSaver.swf";
    this._versionPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/version/{gameId}/version.json";
    this._itemsVersionPathPattern = "{baseURL}/ItemsVersion.properties";
    this._itemSWFURLPattern = "{baseURL}/{gameTitle}ItemLib{itemIndex}_{itemVersion}.swf";
    this._itemXMLURLPattern = "{baseURL}/config/items_v{itemsXMLVersion}.{zipSuffix}";
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
    this._languagePropertiesPathPattern = "{baseURL}/{gameTitle}LangVersion.properties";
    this._fontsSWFURLPattern = "{baseURL}/fonts/{gameTitle}Fonts_{languageCode}.swf";
    this._fontsSWFURLPatternVersioned = "{baseURL}/fonts/{gameTitle}Fonts_{languageCode}_v{fontVersion}.swf";
    this._refCountURLPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/loader/refcount.php";
    this._assetsFolderPathPattern = "{baseAssetsURL}/";
    this._audiosFolderPathPattern = "{baseAssetsURL}/sound/";
    this._abTestConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/abFlash/config/abTests_{gameId}.xml";
    this._abTestTrackPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://splitrun.goodgamestudios.com/request/track";
    this._abTestDisplayPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://splitrun.goodgamestudios.com/request/display";
    this._shopPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://itemshop.goodgamestudios.com/{languageCode}/";
  };
  LiveEnvironment.prototype.isSupported = function () {
    return true;
  };
  LiveEnvironment.LIVE_ENVIRONMENT_ID = "LiveEnvironment";
  return LiveEnvironment;
}(require("gge-module:class_ConcreteEnvironment").ConcreteEnvironment);
exports.LiveEnvironment = __s0local0;
