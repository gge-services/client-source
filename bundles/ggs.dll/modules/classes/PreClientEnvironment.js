Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function PreClientEnvironment() {
    return __s1param0.call(this, PreClientEnvironment.PRE_CLIENT_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(PreClientEnvironment, __s1param0);
  PreClientEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-netconf/{gameId}/{networkId}.xml";
    }
    this._languageConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/language/{gameId}/cldr";
    this._versionPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/version/{gameId}/version.json";
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches-preClient/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches-preClient/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  PreClientEnvironment.prototype.isSupported = function () {
    return this._data.globals.isPreClient;
  };
  PreClientEnvironment.PRE_CLIENT_ENVIRONMENT_ID = "PreClientEnvironment";
  return PreClientEnvironment;
}(require("gge-module:class_LiveEnvironment").LiveEnvironment);
exports.PreClientEnvironment = __s0local0;
