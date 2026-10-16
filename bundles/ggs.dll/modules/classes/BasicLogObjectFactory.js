Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __dep_class_AbstractLogObject = require("gge-module:class_AbstractLogObject");
var __s0local0 = function () {
  function BasicLogObjectFactory() {
    this._subErrorId = -1;
  }
  Object.defineProperty(BasicLogObjectFactory.prototype, "dataFacade", {
    set: function (__s5param0) {
      this._facade = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicLogObjectFactory.prototype.create = function () {
    var __s7local0 = new __dep_class_AbstractLogObject.AbstractLogObject();
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, "");
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_HTML5_TAG, "html5");
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_TYPE, __dep_class_ExternalLoggingConstants.ExternalLoggingConstants.LOGGING_TYPE_ERROR.toString());
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_SUB_ERROR_ID, this._subErrorId.toString());
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_SOURCESTORE, this._facade.sourceStore);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_DEVICETYPE, this._facade.deviceType);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_DEVICECATEGORY, this._facade.deviceCategory);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_OS, this._facade.os);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_CLIENT_VERSION, this._facade.clientVersion);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_ITEM_XML_VERSION, this._facade.itemXMLVersion);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_IS_IN_BACKGROUND, this._facade.isInBackground);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_CONNECTION_TYPE, this._facade.connectionType);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_IS_FIRST_APP_START_AFTER_UPDATE, this._facade.isFirstAppStartAfterUpdate);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_HTTP_REFERER, this._facade.httpReferer);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_SESSION_ID, this._facade.sessionId);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_SESSION_LENGTH, this._facade.sessionLength);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_GAME_ID, this._facade.gameId);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_NETWORK_ID, this._facade.networkId);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_INSTANCE, this._facade.instanceId);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_COUNTRY_CODE, this._facade.countryCode);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LANGUAGE_CODE, this._facade.languageCode);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_ACCOUNT_ID, this._facade.accountId);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_PLAYER_ID, this._facade.playerId);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_IS_FIRST_VISIT_OF_GGS, this._facade.isFirstVisitOfGGS);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_CDN, this._facade.cdn);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_CLIENT_TYPE, this._facade.clientType);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_PERFORMANCE_CATEGORY, this._facade.performanceCategory);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_HTTP_USER_AGENT, this._facade.browserUserAgent);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_HTTP_PLATFORM, this._facade.browserPlatform);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_HTTP_VENDOR, this._facade.browserVendor);
    __s7local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_UTC_TIME_STAMP, Date.now().toString());
    __s7local0.isEssentialFilled = true;
    return __s7local0;
  };
  return BasicLogObjectFactory;
}();
exports.BasicLogObjectFactory = __s0local0;
