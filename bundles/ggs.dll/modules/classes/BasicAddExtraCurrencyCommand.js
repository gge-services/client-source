Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BrowserUtil = require("gge-module:class_BrowserUtil");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicPaymentShopClickTrackingVO = require("gge-module:class_BasicPaymentShopClickTrackingVO");
var __dep_class_AddExtraCurrencyVO = require("gge-module:class_AddExtraCurrencyVO");
var __dep_class_PathProvider = require("gge-module:class_PathProvider");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_exact_6fa490d8c1ec56fc = require("gge-module:exact_6fa490d8c1ec56fc");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("CoreJS.BasicAddExtraCurrencyCommand");
var __s0local1 = function (__s1param0) {
  function BasicAddExtraCurrencyCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicAddExtraCurrencyCommand, __s1param0);
  BasicAddExtraCurrencyCommand.prototype.execute = function (__s5param0 = null) {
    if (__dep_class_BasicModel.BasicModel.sessionData.loggedIn) {
      var __s5local0;
      this.sessionId = this.currentUnixTime;
      var __s5local1 = 0;
      var __s5local2 = 0;
      if (__s5param0) {
        if (__s5param0 instanceof __dep_class_AddExtraCurrencyVO.AddExtraCurrencyVO) {
          __s5local0 = __s5param0.paymentHash;
          __s5local1 = __dep_exact_6fa490d8c1ec56fc.int(__s5param0.clickSourceId);
          __s5local2 = __dep_exact_6fa490d8c1ec56fc.int(__s5param0.shopTab);
        } else {
          __s5local0 = __s5param0.toString();
        }
      } else {
        __s5local0 = "";
      }
      this.paymentHash = __s5local0;
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_GAME_PAYMENT_SHOP_CLICK_EVENT, new __dep_class_BasicPaymentShopClickTrackingVO.BasicPaymentShopClickTrackingVO(this.sessionId, __s5local1));
      this.layoutManager.revertFullscreen();
      __s0local0.debug("Use shop in Social Network? " + this.env.requestPayByJS);
      if (this.env.requestPayByJS) {
        this.onOpenPaymentByJS();
      } else {
        var __s5local3 = new __dep_export_CSSMouseCursor.URLRequest(__dep_class_PathProvider.PathProvider.instance.shopURL + this.paymentHash);
        var __s5local4 = {
          sid: this.sessionId
        };
        if (__s5local2 > 0) {
          __s5local4.t = __s5local2;
        }
        __s5local3.data = __s5local4;
        this.onOpenPayment(__s5local3);
      }
    }
  };
  BasicAddExtraCurrencyCommand.prototype.onOpenPaymentByJS = function () {
    __dep_export_CSSMouseCursor.ExternalInterface.call("requestPayment");
  };
  BasicAddExtraCurrencyCommand.prototype.onOpenPayment = function (__s17param0) {
    __dep_class_BrowserUtil.BrowserUtil.openWindow(__s17param0);
  };
  Object.defineProperty(BasicAddExtraCurrencyCommand.prototype, "currentUnixTime", {
    get: function () {
      var __s19local0 = new Date();
      return Date.UTC(__s19local0.getUTCFullYear(), __s19local0.getUTCMonth(), __s19local0.getUTCDate(), __s19local0.getUTCHours(), __s19local0.getUTCMinutes(), __s19local0.getUTCSeconds(), __s19local0.getUTCMilliseconds()).valueOf();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicAddExtraCurrencyCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicAddExtraCurrencyCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicAddExtraCurrencyCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicAddExtraCurrencyCommand = __s0local1;
