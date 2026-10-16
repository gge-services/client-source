Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstABTests = require("gge-module:export_ClientConstABTests");
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_BasicMicroservice = require("gge-module:export_BasicMicroservice");
var __dep_exact_951b78d9b55b391b = require("gge-module:exact_951b78d9b55b391b");
var __s0local0 = function (__s1param0) {
  function CastleWebShopAccountIDMicroservice() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWebShopAccountIDMicroservice, __s1param0);
  Object.defineProperty(CastleWebShopAccountIDMicroservice, "Instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  CastleWebShopAccountIDMicroservice.prototype.initialize = function () {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.onAccountIdRetrievedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      __dep_export_CastleModel.CastleModel.userData.onAPITokenRequestSignal.add(this.bindFunction(this.onForceRequest));
    }
  };
  CastleWebShopAccountIDMicroservice.prototype.onForceRequest = function (__s10param0) {
    if (__s10param0 == __dep_export_CastleUserData.CastleUserData.CALLER_METHOD_GET) {
      this.getAccountID();
    }
  };
  CastleWebShopAccountIDMicroservice.prototype.getAccountID = function () {
    if (__dep_export_CastleModel.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(__dep_export_CastleUserData.CastleUserData.CALLER_METHOD_GET, false)) {
      var __s13local0 = {
        method: __dep_export_BasicMicroservice.BasicMicroservice.REQUEST_METHOD_GET,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiToken
        },
        body: ""
      };
      var __s13local1 = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        options: __s13local0
      };
      this.axiosLog(__dep_export_BasicMicroservice.BasicMicroservice.REQUEST_METHOD_GET, false);
      this.requestGET(__s13local1).then(this.bindFunction(this.requestGETSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleWebShopAccountIDMicroservice.prototype.requestGET = function (__s16param0 = null) {
    return __dep_exact_951b78d9b55b391b.default.get(__s16param0.endPoint, __s16param0.options);
  };
  CastleWebShopAccountIDMicroservice.prototype.requestGETSuccess = function (__s18param0) {
    var __s18local0 = __s18param0.data.gnipPhrase || "";
    __dep_export_CastleModel.CastleModel.webShopAccountIdData.accountID = __s18local0;
    this.onAccountIdRetrievedSignal.dispatch();
  };
  CastleWebShopAccountIDMicroservice.prototype.getDataEndpoint = function (__s20param0) {
    if (__dep_export_ClientConstABTests.ClientConstABTests.isOnQAServerInstance) {
      return CastleWebShopAccountIDMicroservice.QA_DATA_ENDPOINT + "/players/" + __s20param0 + "/" + CastleWebShopAccountIDMicroservice.GNIP_PHRASE_KEY;
    } else if (__dep_export_ClientConstABTests.ClientConstABTests.isOnDevServerInstance) {
      return CastleWebShopAccountIDMicroservice.DEV_DATA_ENDPOINT + "/players/" + __s20param0 + "/" + CastleWebShopAccountIDMicroservice.GNIP_PHRASE_KEY;
    } else {
      return CastleWebShopAccountIDMicroservice.LIVE_DATA_ENDPOINT + "/players/" + __s20param0 + "/" + CastleWebShopAccountIDMicroservice.GNIP_PHRASE_KEY;
    }
  };
  CastleWebShopAccountIDMicroservice.prototype.pingParams = function () {
    return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.gameId + "-" + __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId + "-" + __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + __dep_export_CastleModel.CastleModel.userData.playerID;
  };
  CastleWebShopAccountIDMicroservice.prototype.reset = function () {
    this._isInitialized = false;
    this.onAccountIdRetrievedSignal = null;
    __dep_export_CastleModel.CastleModel.webShopAccountIdData.accountID = null;
    __dep_export_CastleModel.CastleModel.userData.onAPITokenRequestSignal.remove(this.bindFunction(this.onForceRequest));
    CastleWebShopAccountIDMicroservice._instance = null;
  };
  CastleWebShopAccountIDMicroservice.GNIP_PHRASE_KEY = "gnip-phrase";
  CastleWebShopAccountIDMicroservice.LIVE_DATA_ENDPOINT = "https://accounts.public.ggs-ep.com";
  CastleWebShopAccountIDMicroservice.QA_DATA_ENDPOINT = "https://accounts-test.public.ggs-ep.com";
  CastleWebShopAccountIDMicroservice.DEV_DATA_ENDPOINT = "https://accounts-dev.public.ggs-ep.com";
  return CastleWebShopAccountIDMicroservice;
}(__dep_export_BasicMicroservice.BasicMicroservice);
exports.CastleWebShopAccountIDMicroservice = __s0local0;
