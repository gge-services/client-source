Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CXFDecorator = require("gge-module:export_CXFDecorator");
var __s0local0 = __dep_exact_c549e43d1112dfff.getLogger("CXFDecorator");
var __s0local1 = [__dep_export_ClientConstSF.ClientConstSF.S2C_GET_BASIC_DATA, __dep_export_ClientConstSF.ClientConstSF.S2C_SET_API_TOKEN];
var __s0local2 = new Map();
function __s0local3(__s1param0, __s1param1, __s1param2) {
  if (__s1param0.includes(__s1param1) && parseInt(__s1param2[0]) == __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
    var __s1local0 = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId;
    __s0local0.info("received message for which we subscribed ", __s1param1);
    __dep_exact_81dacdf05bd32292.ExternalInterface.call("onServerCommandReceived", [__s1param1, __s1param2, window.ggs.worldAssignment.facade.currentCountry.ggsLanguageCode, __s1local0, window.ggs.worldAssignment.facade.selectedNetworkInstance.instanceId, window.ggs.worldAssignment.facade.selectedNetworkInstance.zoneId, __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.urlVariables.websiteId, window.ggs.worldAssignment.facade.currentCountry.ggsCountryCode]);
  }
}
function __s0local4(__s4param0) {
  console.warn("CXF WILL SUBSCRIBE TO COMMANDS ", __s4param0);
  __dep_export_CastleModel.CastleModel.smartfoxClient.addEventListener(__dep_exact_9e901e8e2483a22f_1.SmartfoxEvent.EXTENSION_RESPONSE, function (__s6param0) {
    var __s6local0 = __s6param0.cmdId;
    var __s6local1 = __s6param0.params;
    if (!__dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed && __s0local2.size > 0 && __s0local1.includes(__s6local0)) {
      (function (__s9param0, __s9param1, __s9param2) {
        __s0local2.set(__s9param1.toString(), __s9param2);
        if (__s0local1.every(function (__s11param0) {
          return __s0local2.has(__s11param0);
        })) {
          var __s9local0 = JSON.parse(__s0local2.get(__dep_export_ClientConstSF.ClientConstSF.S2C_GET_BASIC_DATA)[1]);
          var __s9local1 = JSON.parse(__s0local2.get(__dep_export_ClientConstSF.ClientConstSF.S2C_SET_API_TOKEN)[1]);
          __s9local0.ato = __s9local1;
          __s0local2.get(__dep_export_ClientConstSF.ClientConstSF.S2C_GET_BASIC_DATA)[1] = JSON.stringify(__s9local0);
          __s0local3(__s9param0, __dep_export_ClientConstSF.ClientConstSF.S2C_GET_BASIC_DATA, __s0local2.get(__dep_export_ClientConstSF.ClientConstSF.S2C_GET_BASIC_DATA));
          __s0local3(__s9param0, __dep_export_ClientConstSF.ClientConstSF.S2C_SET_API_TOKEN, __s0local2.get(__dep_export_ClientConstSF.ClientConstSF.S2C_SET_API_TOKEN));
          __s0local2.clear();
        }
      })(__s4param0, __s6local0, __s6local1);
    } else {
      __s0local3(__s4param0, __s6local0, __s6local1);
    }
  });
}
var __s0local5 = new WeakMap();
function __s0local6(__s15param0) {
  if (__dep_export_CastleModel.CastleModel.userData.newCapTooNotifications < __s15param0) {
    __dep_export_CastleModel.CastleModel.userData.hideCapToolNotifications = false;
  }
  __dep_export_CastleModel.CastleModel.userData.newCapTooNotifications = __s15param0;
}
function __s0local7(__s18param0) {
  __dep_export_CastleModel.CastleModel.globalOfferData.webShopOffersAmount = __s18param0;
}
function __s0local8() {
  __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsGameInitialized");
  __s0local0.info("Calling ggsGameInitialized");
}
exports.initCXF = function () {
  __dep_exact_81dacdf05bd32292.ExternalInterface.addCallback("CXFregisterServerCommands", __s0local4);
  __dep_exact_81dacdf05bd32292.ExternalInterface.addCallback("setCapToolNotifications", __s0local6);
  __dep_exact_81dacdf05bd32292.ExternalInterface.addCallback("setUnseenOffersCounter", __s0local7);
  var __s22local0 = __dep_exact_81dacdf05bd32292.ExternalInterface.asyncCall("isCXFInitialized");
  if (__s22local0) {
    __s22local0.then(function (__s25param0) {
      if (__s25param0) {
        __s0local0.info("CXF is already ready.  Calling ggsGameInitialized");
        __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsGameInitialized");
      } else {
        __s0local0.info("CXF is not ready yet, waiting for it.");
        __dep_exact_81dacdf05bd32292.ExternalInterface.addCallback("cxf.initialized", __s0local8);
      }
    }).catch(function (__s29param0) {
      return __s0local0.warn(__s29param0);
    });
  }
};
exports.registerUIComponentToCXF = function (__s31param0, __s31param1 = null, __s31param2 = {}) {
  exports.unregisterUIComponentToCXF(__s31param0);
  __s0local5.set(__s31param0, new __dep_export_CXFDecorator.CXFDecorator(__s31param0, __s31param1, __s31param2));
};
exports.unregisterUIComponentToCXF = function (__s33param0) {
  if (__s0local5.has(__s33param0)) {
    __s0local5.get(__s33param0).undecorate();
    __s0local5.delete(__s33param0);
  }
};
exports.cxfResetCommandCache = function () {
  __s0local2.clear();
  __dep_exact_81dacdf05bd32292.ExternalInterface.call("cxf.dialog.close");
};
