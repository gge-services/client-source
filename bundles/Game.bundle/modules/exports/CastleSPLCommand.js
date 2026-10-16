Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_8 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_9 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_10 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleRegisterErrorEvent = require("gge-module:export_CastleRegisterErrorEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicTimedNoClickProperties = require("gge-module:export_BasicTimedNoClickProperties");
var __s0local0 = function (__s1param0) {
  function CastleSPLCommand() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSPLCommand, __s1param0);
  CastleSPLCommand.prototype.handleGameSpecificErrors = function (__s5param0, __s5param1) {
    __dep_exact_9e901e8e2483a22f_10.info("error: " + __s5param0 + ", params: " + __s5param1);
    switch (__s5param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_export_CastleModel.CastleModel.userData.firstLogin = true;
        if (this.layoutManager.currentState == __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_STARTSCREEN && (this.env.loginIsKeyBased || this.env.isFacebook)) {
          __dep_exact_9e901e8e2483a22f_3.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_2.ClientFunnelGameStates.REGISTERED);
          __dep_exact_9e901e8e2483a22f_5.ExternalInterfaceController.instance.executeJavaScriptFunction(new __dep_exact_9e901e8e2483a22f_6.JavascriptCallOnRegisterCompleteFactory());
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_NAME:
        var __s5local0 = JSON.parse(__s5param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_NAME, __s5local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_ALREADY_IN_USE:
        __s5local0 = JSON.parse(__s5param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, __s5local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_HAS_ONLY_NUMBERS:
        __s5local0 = JSON.parse(__s5param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, __s5local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.USAGE_OF_BADWORDS:
        __s5local0 = JSON.parse(__s5param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.USAGE_OF_BADWORDS, __s5local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NO_FREE_RENAME:
        if (__dep_export_CastleModel.CastleModel.userData.userLevel > 1) {
          __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_SERVER_ERROR, new __dep_exact_9e901e8e2483a22f_8.ServerErrorVO(__s5param0, __s5param1));
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.IS_BANNED:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_STARTSCREEN;
        }
        var __s5local1 = JSON.parse(__s5param1[1]);
        this.handleBannedUser(__s5local1.RS);
        break;
      default:
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_SERVER_ERROR, new __dep_exact_9e901e8e2483a22f_8.ServerErrorVO(__s5param0, __s5param1));
    }
  };
  CastleSPLCommand.prototype.handleBannedUser = function (__s11param0) {
    if (__s11param0 >= __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_FOUR_WEEKS) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleTimedNoClickDialog.CastleTimedNoClickDialog, new __dep_export_BasicTimedNoClickProperties.BasicTimedNoClickProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_login_banned"), -1));
    } else {
      var __s11local0;
      var __s11local1 = new Date();
      var __s11local2 = new Date();
      __s11local2.setTime(__s11local2.getTime() + __s11param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
      __s11local0 = __s11local1.getFullYear() == __s11local2.getFullYear() && __s11local1.getMonth() == __s11local2.getMonth() && __s11local1.day == __s11local2.day ? __dep_exact_9e901e8e2483a22f_9.TimeStringHelper.getDateToString(__s11local2.getTime(), __dep_exact_9e901e8e2483a22f_9.TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, __dep_export_CastleModel.CastleModel.languageData.getTextById) : __dep_exact_9e901e8e2483a22f_9.TimeStringHelper.getDateStringFromDate(__s11local2, __dep_export_CastleModel.CastleModel.languageData.getTextById) + " " + __dep_exact_9e901e8e2483a22f_9.TimeStringHelper.getDateToString(__s11local2.getTime(), __dep_exact_9e901e8e2483a22f_9.TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, __dep_export_CastleModel.CastleModel.languageData.getTextById);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_AccountBannedDialog.AccountBannedDialog, new __dep_export_BasicTimedNoClickProperties.BasicTimedNoClickProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_login_banned_2", [__s11local0]), __s11param0));
    }
  };
  Object.defineProperty(CastleSPLCommand.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSPLCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleSPLCommand.__initialize_static_members = function () {
    CastleSPLCommand.FOUR_WEEKS_IN_SECONDS = 2419200;
  };
  return CastleSPLCommand;
}(__dep_exact_9e901e8e2483a22f_7.SPLCommand);
exports.CastleSPLCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTimedNoClickDialog = require("gge-module:export_CastleTimedNoClickDialog");
var __dep_export_AccountBannedDialog = require("gge-module:export_AccountBannedDialog");
__s0local0.__initialize_static_members();
