Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function LayoutManagerErrorLOFactory(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._error = __s3param0;
    __s3local0._dialogId = __s3param1;
    if (__s3param0.stack) {
      __s3local0._stackLines = __s3param0.stack.split("]");
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LayoutManagerErrorLOFactory, __s1param0);
  LayoutManagerErrorLOFactory.prototype.create = function () {
    var __s6local0 = __s1param0.prototype.create.call(this);
    __s6local0.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TYPE, this._error);
    __s6local0.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_ID, this._error.errorID);
    __s6local0.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TARGET, this._error.name);
    __s6local0.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TEXT, this._error.message);
    if (this._stackLines) {
      __s6local0.logData.set(LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_STACKTRACE, this._stackLines[0] + " " + this._stackLines[1]);
    }
    __s6local0.logData.set(LayoutManagerErrorLOFactory.PARAM_DIALOG_ID, this._dialogId);
    return __s6local0;
  };
  LayoutManagerErrorLOFactory.__initialize_static_members = function () {
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TYPE = "eventErrorType";
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_ID = "eventErrorId";
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TARGET = "eventErrorTarget";
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_TEXT = "eventErrorText";
    LayoutManagerErrorLOFactory.PARAM_EVENT_ERROR_STACKTRACE = "eventErrorStackTrace";
    LayoutManagerErrorLOFactory.PARAM_DIALOG_ID = "dialogId";
  };
  return LayoutManagerErrorLOFactory;
}(require("gge-module:exact_9e901e8e2483a22f").BasicLogObjectFactory);
exports.LayoutManagerErrorLOFactory = __s0local0;
__s0local0.__initialize_static_members();
