Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_c95e4ededfdf159c = require("gge-module:exact_c95e4ededfdf159c");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_BasicStandardOkDialogProperties = require("gge-module:class_BasicStandardOkDialogProperties");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function () {
  function BasicSessionData() {
    this._currentEvents = [0];
  }
  Object.defineProperty(BasicSessionData.prototype, "currentEvents", {
    get: function () {
      return this._currentEvents;
    },
    set: function (__s7param0) {
      this._currentEvents = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicSessionData.prototype.isEventActive = function (__s9param0) {
    for (var __s9local0 = 0, __s9local1 = this._currentEvents; __s9local0 < __s9local1.length; __s9local0++) {
      if (__s9local1[__s9local0] == __s9param0) {
        return true;
      }
    }
    return false;
  };
  BasicSessionData.prototype.initLoggedinTime = function (__s14param0, __s14param1 = 0) {
    if (__s14param1 == 0) {
      __s14param1 = __dep_class_BasicConstants.BasicConstants.LOGGEDIN_MESSAGE_TIME_INTERVAL;
    }
    this._loggedinTime = __s14param0;
    this._loggedinTimeMsgId = this._loggedinTime * 60000 / __s14param1;
    this.resetLoggedinTimer();
    this._loggedinTimer = new __dep_export_CSSMouseCursor.Timer(__s14param1, 1);
    this._loggedinTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onLoggedinMessageTimerComplete));
    this._loggedinTimer.start();
  };
  BasicSessionData.prototype.resetLoggedinTimer = function () {
    if (this._loggedinTimer) {
      this._loggedinTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onLoggedinMessageTimerComplete));
    }
  };
  BasicSessionData.prototype.onLoggedinMessageTimerComplete = function (__s20param0) {
    this._loggedinTimer.reset();
    this._loggedinTime += __dep_class_BasicConstants.BasicConstants.LOGGEDIN_MESSAGE_TIME_INTERVAL;
    this._loggedinTimeMsgId++;
    var __s20local0 = __dep_class_BasicModel.BasicModel.languageData.getTextById("alert_logintimemsg_title_" + this._loggedinTimeMsgId);
    var __s20local1 = __dep_class_BasicModel.BasicModel.languageData.getTextById("alert_logintimemsg_copy_" + this._loggedinTimeMsgId);
    if (__s20local0.length > 0 && __s20local1.length > 0) {
      this.showLoggedinTimeIntervalMessage(__s20local0, __s20local1);
    }
    this._loggedinTimer.start();
  };
  BasicSessionData.prototype.showLoggedinTimeIntervalMessage = function (__s23param0, __s23param1) {
    __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().showDialog(__dep_class_CommonDialogNames.CommonDialogNames.StandardOkDialog_NAME, new __dep_class_BasicStandardOkDialogProperties.BasicStandardOkDialogProperties(__s23param0, __s23param1));
  };
  BasicSessionData.prototype.initSessionTime = function (__s25param0, __s25param1) {
    if (this._sessionTimerDict == null) {
      this._sessionTimerDict = new Map();
    }
    var __s25local0 = new __dep_export_CSSMouseCursor.Timer(__s25param0, 1);
    __s25local0.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onSessionTimerComplete));
    this._sessionTimerDict.set(__s25param1, __s25local0);
    __s25local0.start();
  };
  BasicSessionData.prototype.resetSessionTimer = function () {
    if (this._sessionTimerDict) {
      for (var __s28local0 in this._sessionTimerDict.values()) {
        this._sessionTimerDict[__s28local0].removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onSessionTimerComplete));
      }
    }
  };
  BasicSessionData.prototype.isSessionTimerById = function (__s33param0, __s33param1) {
    return !!__dep_exact_c95e4ededfdf159c.DictionaryUtil.containsKey(this._sessionTimerDict, __s33param0) && this._sessionTimerDict.get(__s33param0) == __s33param1;
  };
  BasicSessionData.prototype.onSessionTimerComplete = function (__s35param0) {
    __s35param0.target.reset();
  };
  Object.defineProperty(BasicSessionData.prototype, "loggedIn", {
    get: function () {
      return this._loggedIn;
    },
    set: function (__s39param0) {
      this._loggedIn = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSessionData;
}();
exports.BasicSessionData = __s0local1;
