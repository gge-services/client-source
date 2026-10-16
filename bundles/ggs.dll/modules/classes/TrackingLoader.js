Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_HTTPErrorLOFactory = require("gge-module:class_HTTPErrorLOFactory");
var __dep_class_IOErrorLOFactory = require("gge-module:class_IOErrorLOFactory");
var __dep_class_SecurityErrorLOFactory = require("gge-module:class_SecurityErrorLOFactory");
var __dep_class_TrackingIOErrorLOFactory = require("gge-module:class_TrackingIOErrorLOFactory");
var __dep_class_TrackingSecurityErrorLOFactory = require("gge-module:class_TrackingSecurityErrorLOFactory");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("Tracking.TrackingLoader");
var __s0local1 = function () {
  function TrackingLoader(__s3param0) {
    var __s3local0 = this;
    this._request = __s3param0;
    this._loggedHTTPError = false;
    var __s3local1 = new __dep_export_CSSMouseCursor.URLLoaderService(this._request);
    __s3local1.load().then(function (__s5param0) {
      if (__s5param0) {
        __s3local0.status = "complete";
      }
      __s3local1.dispose();
    }).catch(function (__s8param0) {
      __s3local0.status = "error";
    });
  }
  TrackingLoader.prototype.onCountSecurityError = function (__s10param0) {
    this.logToSplunk(new __dep_class_TrackingSecurityErrorLOFactory.TrackingSecurityErrorLOFactory(__dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory.GENERAL_TRACKING_SECURITY_ERROR, __s10param0.text, this._request.url, this._eventId, this.jsonEncodedEventData));
  };
  TrackingLoader.prototype.onIOError = function (__s12param0) {
    if (!this._loggedHTTPError) {
      this.logToSplunk(new __dep_class_TrackingIOErrorLOFactory.TrackingIOErrorLOFactory(__dep_class_IOErrorLOFactory.IOErrorLOFactory.GENERAL_TRACKING_IO_ERROR, __s12param0.text, this._request.url, this._eventId, this.jsonEncodedEventData));
    }
  };
  TrackingLoader.prototype.onHTTPStatus = function (__s15param0) {
    switch (__s15param0.status / 100) {
      case 1:
      case 4:
        this.logToSplunk(new __dep_class_HTTPErrorLOFactory.HTTPErrorLOFactory(__dep_class_HTTPErrorLOFactory.HTTPErrorLOFactory.GENERAL_TRACKING_HTTP_ERROR, __s15param0, this._request, "eventId", this.jsonEncodedEventData));
        this._loggedHTTPError = true;
        break;
      case 5:
        this.logToSplunk(new __dep_class_HTTPErrorLOFactory.HTTPErrorLOFactory(__dep_class_HTTPErrorLOFactory.HTTPErrorLOFactory.GENERAL_TRACKING_SERVER_HTTP_ERROR, __s15param0, this._request, "eventId", this.jsonEncodedEventData));
        this._loggedHTTPError = true;
    }
  };
  TrackingLoader.prototype.logToSplunk = function (__s18param0) {
    this.convertJsonStringToURLVarsForSplunkLogging();
    __dep_class_ExternalLog.ExternalLog.logger.log(__s18param0);
  };
  Object.defineProperty(TrackingLoader.prototype, "jsonEncodedEventData", {
    get: function () {
      __s0local0.warn("jsonEncodedEventData TO BE IMPLEMENTED -right now is just sending empty data");
      return JSON.stringify({});
    },
    enumerable: true,
    configurable: true
  });
  TrackingLoader.prototype.convertJsonStringToURLVarsForSplunkLogging = function () {
    __s0local0.warn("convertJsonStringToURLVarsForSplunkLogging TO BE IMPLEMENTED -right now everything is commented out");
  };
  return TrackingLoader;
}();
exports.TrackingLoader = __s0local1;
