Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_exact_14ac9999fc46bb45 = require("gge-module:exact_14ac9999fc46bb45");
var __dep_class_BrowserUtil = require("gge-module:class_BrowserUtil");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function () {
  function SupportUtil() {}
  SupportUtil.navigateToSupport = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4, __s5param5) {
    try {
      var __s5local0 = new __dep_export_CSSMouseCursor.URLRequest(SupportUtil.GGS_SUPPORT_URL);
      SupportUtil.supportData.versionText = __s5param1;
      var __s5local1 = SupportUtil.supportData.createUrlVars(__s5param0, __s5param2, __s5param3, __s5param4, __s5param5);
      __s5local0.data = __s5local1;
      __dep_class_BrowserUtil.BrowserUtil.executeNavigateToURL(__s5local0, "_blank");
    } catch (__s8local0) {
      __dep_exact_14ac9999fc46bb45.fatal("cannot navigate to support form");
    }
  };
  SupportUtil.setRegistrationNetworkId = function (__s10param0) {
    SupportUtil.supportData.networkId = __s10param0;
  };
  SupportUtil.initForWeb = function (__s12param0, __s12param1, __s12param2, __s12param3, __s12param4, __s12param5) {
    SupportUtil.supportData = new __s0local2(__s12param0, __s12param1, __s12param2, __s12param3, __s12param4, __s12param5);
  };
  SupportUtil.initForMobile = function (__s14param0, __s14param1, __s14param2, __s14param3, __s14param4, __s14param5) {
    SupportUtil.supportData = new __s0local3(__s14param0, __s14param1, __s14param2, __s14param3, __s14param4, __s14param5);
  };
  SupportUtil.GGS_SUPPORT_URL = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://support.goodgamestudios.com/";
  return SupportUtil;
}();
exports.SupportUtil = __s0local0;
var __s0local1 = function () {
  function ASupportData(__s18param0, __s18param1, __s18param2, __s18param3) {
    this.gameId = __s18param0;
    this.sessionId = __s18param1;
    this.networkId = __s18param2;
    this.os = __s18param3;
  }
  ASupportData.prototype.createUrlVars = function (__s20param0, __s20param1, __s20param2, __s20param3, __s20param4) {
    var __s20local0 = {
      g: this.gameId,
      n: this.networkId,
      i: __s20param0,
      sid: this.sessionId
    };
    if (__s20param2 > 0) {
      __s20local0.pid = __s20param2;
    }
    __s20local0.uid = __s20param3;
    __s20local0.lang = __s20param4;
    if (__s20param1 !== null && __s20param1 !== "-") {
      __s20local0.uname = __s20param1;
    }
    return __s20local0;
  };
  ASupportData.prototype.toString = function () {
    return "";
  };
  Object.defineProperty(ASupportData.prototype, "gameId", {
    get: function () {
      return this._gameId;
    },
    set: function (__s28param0) {
      this._gameId = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "sessionId", {
    get: function () {
      return this._sessionId;
    },
    set: function (__s32param0) {
      this._sessionId = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "networkId", {
    get: function () {
      return this._networkId;
    },
    set: function (__s36param0) {
      this._networkId = __s36param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "versionText", {
    get: function () {
      return this._versionText;
    },
    set: function (__s40param0) {
      this._versionText = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASupportData.prototype, "os", {
    get: function () {
      return this._os;
    },
    set: function (__s44param0) {
      this._os = __s44param0;
    },
    enumerable: true,
    configurable: true
  });
  return ASupportData;
}();
exports.ASupportData = __s0local1;
var __s0local2 = function (__s46param0) {
  function WebSupportData(__s48param0, __s48param1, __s48param2, __s48param3, __s48param4, __s48param5) {
    var __s48local0 = __s46param0.call(this, __s48param1, __s48param2, __s48param3, __s48param5) || this;
    __s48local0.referrer = __s48param0;
    __s48local0.playerVersion = __s48param4;
    return __s48local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(WebSupportData, __s46param0);
  WebSupportData.prototype.createUrlVars = function (__s50param0, __s50param1, __s50param2, __s50param3, __s50param4) {
    var __s50local0 = __s46param0.prototype.createUrlVars.call(this, __s50param0, __s50param1, __s50param2, __s50param3, __s50param4);
    __s50local0.ref = this.referrer;
    return __s50local0;
  };
  WebSupportData.prototype.toString = function () {
    var __s52local0 = __s46param0.prototype.toString.call(this);
    return __s52local0 += "Game-Version: " + this.versionText + "\nFlash Player - Version:" + this.playerVersion + "\nOS:" + __dep_export_CSSMouseCursor.Capabilities.os;
  };
  Object.defineProperty(WebSupportData.prototype, "referrer", {
    get: function () {
      return this._referrer;
    },
    set: function (__s56param0) {
      this._referrer = __s56param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WebSupportData.prototype, "playerVersion", {
    get: function () {
      return this._playerVersion;
    },
    set: function (__s60param0) {
      this._playerVersion = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  return WebSupportData;
}(__s0local1);
exports.WebSupportData = __s0local2;
var __s0local3 = function (__s62param0) {
  function MobileSupportData(__s64param0, __s64param1, __s64param2, __s64param3, __s64param4, __s64param5) {
    var __s64local0 = __s62param0.call(this, __s64param0, __s64param1, __s64param2, __s64param5) || this;
    __s64local0.sourceStore = __s64param3;
    __s64local0.deviceType = __s64param4;
    return __s64local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(MobileSupportData, __s62param0);
  MobileSupportData.prototype.toString = function () {
    return __s62param0.prototype.toString.call(this);
  };
  Object.defineProperty(MobileSupportData.prototype, "sourceStore", {
    get: function () {
      return this._sourceStore;
    },
    set: function (__s70param0) {
      this._sourceStore = __s70param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MobileSupportData.prototype, "deviceType", {
    get: function () {
      return this._deviceType;
    },
    set: function (__s74param0) {
      this._deviceType = __s74param0;
    },
    enumerable: true,
    configurable: true
  });
  return MobileSupportData;
}(__s0local1);
exports.MobileSupportData = __s0local3;
