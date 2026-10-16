Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_951b78d9b55b391b = require("gge-module:exact_951b78d9b55b391b");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstABTests = require("gge-module:export_ClientConstABTests");
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_BasicMicroservice = require("gge-module:export_BasicMicroservice");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleDeleteAccountConfirmationDialog = require("gge-module:export_CastleDeleteAccountConfirmationDialog");
var __dep_export_CastleDeleteAccountConfirmationDialogProperties = require("gge-module:export_CastleDeleteAccountConfirmationDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleDeleteAccountMicroservice() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDeleteAccountMicroservice, __s1param0);
  Object.defineProperty(CastleDeleteAccountMicroservice, "Instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  CastleDeleteAccountMicroservice.prototype.initialize = function () {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.onDeleteAccountSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      this.onAbortDeleteSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
      __dep_export_CastleModel.CastleModel.userData.onAPITokenRequestSignal.add(this.bindFunction(this.onForceRequest));
    }
  };
  CastleDeleteAccountMicroservice.prototype.onForceRequest = function (__s10param0) {
    if (__s10param0 == __dep_export_CastleUserData.CastleUserData.CALLER_METHOD_PUT) {
      this.deleteAccount();
    } else if (__s10param0 == __dep_export_CastleUserData.CastleUserData.CALLER_METHOD_DELETE) {
      this.abortDeletion();
    }
  };
  CastleDeleteAccountMicroservice.prototype.deleteAccount = function () {
    if (__dep_export_CastleModel.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(__dep_export_CastleUserData.CastleUserData.CALLER_METHOD_PUT, false)) {
      var __s14local0 = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiToken
        }
      };
      this.requestPUT(__s14local0).then(this.bindFunction(function (__s17param0) {
        __dep_export_CastleModel.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = __s17param0.data.endTimeSeconds;
        var __s17local0 = new __dep_export_CastleDeleteAccountConfirmationDialogProperties.CastleDeleteAccountConfirmationDialogProperties("dialog_deleteAccount_secondConfirmation_popup_title", "dialog_deleteAccount_secondConfirmation_popup_desc", [__dep_export_CastleModel.CastleModel.deleteAccountData.getDateForDelete()]);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDeleteAccountConfirmationDialog.CastleDeleteAccountConfirmationDialog, __s17local0, false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_HIGH);
        this.onDeleteAccountSignal.dispatch();
      })).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleDeleteAccountMicroservice.prototype.abortDeletion = function () {
    if (__dep_export_CastleModel.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(__dep_export_CastleUserData.CastleUserData.CALLER_METHOD_DELETE, false)) {
      var __s19local0 = {
        endPoint: this.getDataEndpoint(this.pingParams()),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + __dep_export_CastleModel.CastleModel.userData.apiToken
        }
      };
      this.requestDELETE(__s19local0).then(this.bindFunction(function (__s22param0) {
        __dep_export_CastleModel.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = -1;
        var __s22local0 = new __dep_export_CastleDeleteAccountConfirmationDialogProperties.CastleDeleteAccountConfirmationDialogProperties("dialog_deleteAccount_cancelDeletion_popup_title", "dialog_deleteAccount_cancelDeletion_popup_desc");
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDeleteAccountConfirmationDialog.CastleDeleteAccountConfirmationDialog, __s22local0, false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_HIGH);
        this.onAbortDeleteSignal.dispatch();
      })).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleDeleteAccountMicroservice.prototype.requestPUT = function (__s24param0 = null) {
    return __dep_exact_951b78d9b55b391b.default.put(__s24param0.endPoint, {}, {
      headers: __s24param0.headers
    });
  };
  CastleDeleteAccountMicroservice.prototype.requestDELETE = function (__s26param0 = null) {
    return __dep_exact_951b78d9b55b391b.default.delete(__s26param0.endPoint, {
      headers: __s26param0.headers
    });
  };
  CastleDeleteAccountMicroservice.prototype.getDataEndpoint = function (__s28param0) {
    if (__dep_export_ClientConstABTests.ClientConstABTests.isOnQAServerInstance) {
      return CastleDeleteAccountMicroservice.QA_DATA_ENDPOINT + "/players/" + __s28param0 + "/" + CastleDeleteAccountMicroservice.DELETE_ACCOUNT_KEY;
    } else if (__dep_export_ClientConstABTests.ClientConstABTests.isOnDevServerInstance) {
      return CastleDeleteAccountMicroservice.DEV_DATA_ENDPOINT + "/players/" + __s28param0 + "/" + CastleDeleteAccountMicroservice.DELETE_ACCOUNT_KEY;
    } else {
      return CastleDeleteAccountMicroservice.LIVE_DATA_ENDPOINT + "/players/" + __s28param0 + "/" + CastleDeleteAccountMicroservice.DELETE_ACCOUNT_KEY;
    }
  };
  CastleDeleteAccountMicroservice.prototype.pingParams = function () {
    return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.gameId + "-" + __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId + "-" + __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + __dep_export_CastleModel.CastleModel.userData.playerID;
  };
  CastleDeleteAccountMicroservice.prototype.reset = function () {
    this._isInitialized = false;
    this.onDeleteAccountSignal = null;
    this.onAbortDeleteSignal = null;
    __dep_export_CastleModel.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = -1;
    __dep_export_CastleModel.CastleModel.userData.onAPITokenRequestSignal.remove(this.bindFunction(this.onForceRequest));
    CastleDeleteAccountMicroservice._instance = null;
  };
  CastleDeleteAccountMicroservice.DELETE_ACCOUNT_KEY = "deletion-request";
  CastleDeleteAccountMicroservice.LIVE_DATA_ENDPOINT = "https://gdpr-delete.public.ggs-ep.com";
  CastleDeleteAccountMicroservice.QA_DATA_ENDPOINT = "https://gdpr-delete-test.public.ggs-ep.com";
  CastleDeleteAccountMicroservice.DEV_DATA_ENDPOINT = "https://gdpr-delete-dev.public.ggs-ep.com";
  return CastleDeleteAccountMicroservice;
}(__dep_export_BasicMicroservice.BasicMicroservice);
exports.CastleDeleteAccountMicroservice = __s0local0;
