Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ABTest_Refresh_Event = require("gge-module:export_ABTest_Refresh_Event");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_ABTest_FirstTimeChallengeCampVsIcon = require("gge-module:export_ABTest_FirstTimeChallengeCampVsIcon");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleOwnSplitRunData(__s3param0) {
    var __s3local0 = this;
    __s3local0.testCases = [];
    __s3local0.testCasesReceived = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOwnSplitRunData, __s1param0);
  CastleOwnSplitRunData.prototype.retrieveTestCaseInfos = function () {
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_exact_9e901e8e2483a22f_3.TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED, this.bindFunction(this.onTestCaseInfoReceived));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_ABTest_Refresh_Event.ABTest_Refresh_Event.REFRESH_ABTESTS_EVENT, this.bindFunction(this.refreshTests));
    this.testCasesReceived = 0;
    if (this.testCases != null) {
      for (var __s5local0 = 0, __s5local1 = this.testCases; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.sendMessage(__dep_exact_9e901e8e2483a22f_2.BasicSmartfoxConstants.C2S_TEST_CASE_INFO, [__s5local2]);
        }
      }
    }
  };
  CastleOwnSplitRunData.prototype.onTestCaseInfoReceived = function (__s11param0) {
    var __s11local0;
    this.testCasesReceived++;
    for (__s11local0 in __s11param0.paramObj) {
      this._abTests.set(__s11local0, __s11param0.paramObj[__s11local0]);
    }
    if (this.testCasesReceived == this.testCases.length) {
      __dep_exact_9e901e8e2483a22f.BasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_3.TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED, this.bindFunction(this.onTestCaseInfoReceived));
      this.abTestDataArrived();
    }
  };
  CastleOwnSplitRunData.prototype.removeAllListeners = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_exact_9e901e8e2483a22f_3.TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED, this.bindFunction(this.onTestCaseInfoReceived));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_ABTest_Refresh_Event.ABTest_Refresh_Event.REFRESH_ABTESTS_EVENT, this.bindFunction(this.refreshTests));
  };
  CastleOwnSplitRunData.prototype.getTestCaseIfNotPresent = function (__s18param0) {
    if (!this.getParam(__s18param0)) {
      __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.sendMessage(__dep_exact_9e901e8e2483a22f_2.BasicSmartfoxConstants.C2S_TEST_CASE_INFO, [__s18param0]);
    }
  };
  CastleOwnSplitRunData.prototype.refreshTests = function (__s21param0 = null) {
    this.abTestDataArrived();
  };
  CastleOwnSplitRunData.prototype.abTestDataArrived = function () {
    __dep_export_CastleModel.CastleModel.gfxData.applyAnimationABTest();
    this.handleABTest689();
  };
  CastleOwnSplitRunData.prototype.handleABTest689 = function () {
    new __dep_export_ABTest_FirstTimeChallengeCampVsIcon.ABTest_FirstTimeChallengeCampVsIcon().setupTest(this._abTests);
  };
  CastleOwnSplitRunData.prototype.handleHCShopABTestPayload = function (__s27param0) {
    __s27param0.config = {
      categories: {
        hardCurrency: {
          enabled: true
        }
      }
    };
    return __s27param0;
  };
  return CastleOwnSplitRunData;
}(require("gge-module:export_CastleSplitRunData").CastleSplitRunData);
exports.CastleOwnSplitRunData = __s0local0;
