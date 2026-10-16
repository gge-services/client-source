Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ABTestData = require("gge-module:class_ABTestData");
var __dep_class_PathProvider = require("gge-module:class_PathProvider");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_IOErrorLOFactory = require("gge-module:class_IOErrorLOFactory");
var __dep_class_SecurityErrorLOFactory = require("gge-module:class_SecurityErrorLOFactory");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_exact_14ac9999fc46bb45 = require("gge-module:exact_14ac9999fc46bb45");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.IOErrorEvent;
var __s0local2 = createjs.SecurityErrorEvent;
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local3 = function () {
  function ABTest(__s3param0) {
    this.testIsInitalized = new __dep_exact_becd07da092f4a09.Signal();
    this._isReady = false;
    this._testData = __s3param0;
    this.testIsInitalized.add(this.bindFunction(this.handleTestIsInitalized));
    this.requestDisplayEvent();
  }
  Object.defineProperty(ABTest.prototype, "testData", {
    get: function () {
      return this._testData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABTest.prototype, "isReady", {
    get: function () {
      return this._isReady;
    },
    enumerable: true,
    configurable: true
  });
  ABTest.prototype.requestDisplayEvent = function () {};
  ABTest.prototype.onDisplayEventComplete = function (__s11param0) {
    var __s11local0 = __s11param0.target.data;
    __dep_exact_9036b0ddd67c3c6e.debug("receiving answer from a-b-test display request: " + __s11local0);
    if (__s11local0 && __s11local0 != "") {
      var __s11local1 = undefined.getValue();
      if (__s11local1[__dep_class_ABTestData.ABTestData.TEST_ID]) {
        this._testData._testID = Number(__s11local1[__dep_class_ABTestData.ABTestData.TEST_ID]);
      }
      if (__s11local1[__dep_class_ABTestData.ABTestData.CASE_ID]) {
        this._testData._caseID = Number(__s11local1[__dep_class_ABTestData.ABTestData.CASE_ID]);
      }
      if (__s11local1[__dep_class_ABTestData.ABTestData.ERROR_MSG]) {
        this._testData.errorMessage = String(__s11local1[__dep_class_ABTestData.ABTestData.ERROR_MSG]);
      }
      if (__s11local1[__dep_class_ABTestData.ABTestData.CLIENT_ID]) {
        this._testData._clientID = String(__s11local1[__dep_class_ABTestData.ABTestData.CLIENT_ID]);
      }
      if (__s11local1[__dep_class_ABTestData.ABTestData.CONTENT]) {
        this._testData.content = String(__s11local1[__dep_class_ABTestData.ABTestData.CONTENT]);
      }
      if (__s11local1[__dep_class_ABTestData.ABTestData.IS_VALID]) {
        var __s11local2 = String(__s11local1[__dep_class_ABTestData.ABTestData.IS_VALID]);
        this._testData.isValid = __s11local2 == "true";
      }
    } else {
      __dep_exact_14ac9999fc46bb45.fatal("display event data not valid");
    }
    this.testIsInitalized.dispatch();
  };
  ABTest.prototype.handleTestIsInitalized = function () {
    this._isReady = true;
  };
  ABTest.prototype.onDisplayRequestIOError = function (__s23param0) {
    __dep_exact_14ac9999fc46bb45.fatal("ioerror while connecting to ab-testing interface for requesting display event");
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_IOErrorLOFactory.IOErrorLOFactory(__dep_class_IOErrorLOFactory.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, __s23param0.text, this.request.url));
    this.handleABTestError();
  };
  ABTest.prototype.onDisplayRequestIOErrorSecurityError = function (__s25param0) {
    __dep_exact_14ac9999fc46bb45.fatal("securityerror while connecting to ab-testing interface for requesting display event");
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory(__dep_class_SecurityErrorLOFactory.SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR, __s25param0.text, this.request.url));
    this.handleABTestError();
  };
  ABTest.prototype.onDisplayEventHTTPStatus = function (__s27param0) {
    var __s27local0 = __s27param0.status / 100;
    if (__s27local0 != 2 && __s27local0 != 3) {
      this.handleABTestError();
    }
  };
  ABTest.prototype.handleABTestError = function () {
    this._testData.errorMessage = "timeout for display request";
    this._testData.errorCode = __dep_class_ABTestData.ABTestData.STATUS_TIMEOUT_ERROR;
    var __s30local0 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.AB_TEST_TIMEOUT_TRACKING);
    __s30local0.testID = this.testData._testID;
    __s30local0.playerId = this.testData.playerID;
    __s30local0.accountID = this.testData.accountID;
    __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.AB_TEST_TIMEOUT_TRACKING);
  };
  ABTest.prototype.sendConversion = function (__s32param0, __s32param1, __s32param2) {
    if (this._isReady == 0) {
      this._testData.errorCode = __dep_class_ABTestData.ABTestData.STATUS_NOT_READY_ERROR;
    }
    this._testData.playerID = __s32param0;
    this._testData.instanceID = __s32param1;
    this._testData.referrer = __s32param2;
    this._testData.save();
    new __dep_export_CSSMouseCursor.URLRequest(__dep_class_PathProvider.PathProvider.instance.abTestTrackURL);
  };
  ABTest.prototype.onConversionIOError = function (__s35param0) {
    __dep_exact_14ac9999fc46bb45.fatal("error while connecting to ab-testing interface for sending conversion");
  };
  ABTest.prototype.onConversionEventComplete = function (__s37param0) {
    __dep_exact_9036b0ddd67c3c6e.debug("conversion for testcase: " + this._testData._testID + " is complete");
  };
  ABTest.prototype.dispose = function () {
    this.testIsInitalized.removeAll();
    this.disposeLoader();
    this._testData.save();
    this._testData = null;
  };
  ABTest.prototype.disposeLoader = function () {
    if (this.loader) {
      this.loader.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onDisplayEventComplete));
      this.loader.removeEventListener(__s0local1.IO_ERROR, this.bindFunction(this.onDisplayRequestIOError));
      this.loader.removeEventListener(__s0local2.SECURITY_ERROR, this.bindFunction(this.onDisplayRequestIOErrorSecurityError));
      this.loader.removeEventListener(__s0local0.COMPLETE, this.bindFunction(this.onConversionEventComplete));
      this.loader.removeEventListener(__s0local1.IO_ERROR, this.bindFunction(this.onConversionIOError));
      this.loader.close();
      this.loader = null;
    }
  };
  return ABTest;
}();
exports.ABTest = __s0local3;
