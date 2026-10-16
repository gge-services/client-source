Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_951b78d9b55b391b = require("gge-module:exact_951b78d9b55b391b");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __s0local0 = function () {
  function BasicMicroservice() {
    this.initialize();
  }
  BasicMicroservice.prototype.initialize = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  BasicMicroservice.prototype.reset = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestGET = function (__s9param0 = null) {
    return null;
  };
  BasicMicroservice.prototype.requestPUT = function (__s11param0 = null) {
    return null;
  };
  BasicMicroservice.prototype.requestPOST = function (__s13param0 = null) {
    return null;
  };
  BasicMicroservice.prototype.requestDELETE = function (__s15param0 = null) {
    return null;
  };
  BasicMicroservice.prototype.requestGETSuccess = function (__s17param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestPUTSuccess = function (__s19param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestPOSTSuccess = function (__s21param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestDELETESuccess = function (__s23param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  BasicMicroservice.prototype.requestFail = function (__s25param0) {
    if (__s25param0 && (!__s25param0 || __s25param0.response)) {
      var __s25local0 = __s25param0.response;
      var __s25local1 = __s25local0.status;
      var __s25local2 = "";
      var __s25local3 = "";
      switch (__s25local1) {
        case BasicMicroservice.ERROR_INTERNAL_SERVER_ERROR:
          __s25local2 = __dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_bug");
          __s25local3 = __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_http_" + __s25local1) + "\n" + __s25local0.data.action + "\n" + __s25local0.data.ping + "\n" + __s25local0.data.timestamp + "\n" + __s25local0.data.region;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__s25local2, __s25local3));
          break;
        case BasicMicroservice.ERROR_INVALID_AUTHENTICATION:
        case BasicMicroservice.ERROR_FORBIDDEN_AUTHENTICATION:
          __s25local2 = __dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_bug");
          __s25local3 = __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_http_" + __s25local1);
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__s25local2, __s25local3));
      }
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    }
  };
  BasicMicroservice.prototype.axiosLog = function (__s29param0, __s29param1) {
    if (__s29param1) {
      __dep_exact_951b78d9b55b391b.default.interceptors.request.use(function (__s32param0) {
        console.log("Request " + __s29param0 + ":", JSON.stringify(__s32param0, null, 2));
        return __s32param0;
      });
      __dep_exact_951b78d9b55b391b.default.interceptors.response.use(function (__s34param0) {
        console.log("Response " + __s29param0 + ":", JSON.stringify(__s34param0, null, 2));
        return __s34param0;
      });
    }
  };
  BasicMicroservice.REQUEST_METHOD_GET = "GET";
  BasicMicroservice.REQUEST_METHOD_PUT = "PUT";
  BasicMicroservice.REQUEST_METHOD_POST = "POST";
  BasicMicroservice.REQUEST_METHOD_DELETE = "DELETE";
  BasicMicroservice.ERROR_INTERNAL_SERVER_ERROR = 500;
  BasicMicroservice.ERROR_INVALID_AUTHENTICATION = 401;
  BasicMicroservice.ERROR_FORBIDDEN_AUTHENTICATION = 403;
  return BasicMicroservice;
}();
exports.BasicMicroservice = __s0local0;
