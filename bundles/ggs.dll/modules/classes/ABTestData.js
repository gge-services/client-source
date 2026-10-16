Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AbstractCookie = require("gge-module:class_AbstractCookie");
var __dep_class_CookieHelper = require("gge-module:class_CookieHelper");
var __s0local0 = function (__s1param0) {
  function ABTestData() {
    var __s3local0 = __s1param0.call(this, "ab") || this;
    __s3local0._testID = 0;
    __s3local0._caseID = 0;
    __s3local0._clientID = "";
    __s3local0.gameID = 0;
    __s3local0.instanceID = 0;
    __s3local0.networkID = 0;
    __s3local0.playerID = -1;
    __s3local0.referrer = "";
    __s3local0.content = "";
    __s3local0.accountID = "";
    __s3local0.errorMessage = "";
    __s3local0.isValid = false;
    __s3local0.errorCode = ABTestData.STATUS_ALL_OK;
    if (__dep_class_CookieHelper.CookieHelper.isCookieEmpty({})) {
      __s3local0.save();
    } else {
      __s3local0._testID = __s3local0.getAttributeAsUint(ABTestData.TEST_ID);
      __s3local0._caseID = __s3local0.getAttributeAsUint(ABTestData.CASE_ID);
      __s3local0.gameID = __s3local0.getAttributeAsUint(ABTestData.GAME_ID);
      __s3local0.instanceID = __s3local0.getAttributeAsUint(ABTestData.INSTANCE_ID);
      __s3local0.networkID = __s3local0.getAttributeAsUint(ABTestData.NETWORK_ID);
      __s3local0.playerID = __s3local0.getAttributeAsUint(ABTestData.PLAYER_ID);
      __s3local0.referrer = __s3local0.getAttributeAsString(ABTestData.REFERRER);
      __s3local0.accountID = __s3local0.getAttributeAsString(ABTestData.ACCOUNT_ID);
      __s3local0._clientID = __s3local0.getAttributeAsString(ABTestData.CLIENT_ID);
    }
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ABTestData, __s1param0);
  Object.defineProperty(ABTestData.prototype, "cookie", {
    get: function () {
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABTestData.prototype, "testID", {
    get: function () {
      return this._testID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABTestData.prototype, "caseID", {
    get: function () {
      return this._caseID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABTestData.prototype, "clientID", {
    get: function () {
      return this._clientID;
    },
    enumerable: true,
    configurable: true
  });
  ABTestData.prototype.save = function () {
    this.setAttribute(ABTestData.TEST_ID, this._testID);
    this.setAttribute(ABTestData.CASE_ID, this._caseID);
    this.setAttribute(ABTestData.CLIENT_ID, this._clientID);
    this.setAttribute(ABTestData.GAME_ID, this.gameID);
    this.setAttribute(ABTestData.INSTANCE_ID, this.instanceID);
    this.setAttribute(ABTestData.NETWORK_ID, this.networkID);
    this.setAttribute(ABTestData.PLAYER_ID, this.playerID);
    this.setAttribute(ABTestData.REFERRER, this.referrer);
    this.setAttribute(ABTestData.ACCOUNT_ID, this.accountID);
  };
  ABTestData.STATUS_ALL_OK = 0;
  ABTestData.STATUS_TIMEOUT_ERROR = 1;
  ABTestData.STATUS_NOT_READY_ERROR = 2;
  ABTestData.TEST_ID = "t";
  ABTestData.CASE_ID = "c";
  ABTestData.CLIENT_ID = "ci";
  ABTestData.CONTENT = "content";
  ABTestData.ERROR_MSG = "errorMsg ";
  ABTestData.IS_VALID = "v";
  ABTestData.PLAYER_ID = "p";
  ABTestData.INSTANCE_ID = "i";
  ABTestData.NETWORK_ID = "n";
  ABTestData.GAME_ID = "g";
  ABTestData.REFERRER = "referrer";
  ABTestData.ACCOUNT_ID = "accountId";
  ABTestData.ERROR_CODE = "errorCode";
  return ABTestData;
}(__dep_class_AbstractCookie.AbstractCookie);
exports.ABTestData = __s0local0;
