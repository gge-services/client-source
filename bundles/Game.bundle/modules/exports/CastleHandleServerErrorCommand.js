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
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_ConfirmC2Dialog = require("gge-module:export_ConfirmC2Dialog");
var __dep_export_ConfirmC2DialogProperties = require("gge-module:export_ConfirmC2DialogProperties");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __s0local0 = function (__s1param0) {
  function CastleHandleServerErrorCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHandleServerErrorCommand, __s1param0);
  CastleHandleServerErrorCommand.prototype.handleGameSpecificServerError = function (__s5param0) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0.error);
    var __s5local1 = __s5param0.params;
    var __s5local2 = {};
    switch (__s5local0) {
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_RESOURCES:
        var __s5local3;
        if (__s5local1.length > 1) {
          __s5local2 = JSON.parse(__s5local1[1]);
          if (__dep_exact_f855840627e6e145.int(__s5local2.hasOwnProperty("A") ? __s5local2.A : 0) > 0) {
            __dep_export_ModernPackageShopResourceTipEnum.ModernPackageShopResourceTipEnum.__initialize_static_members();
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernPackageShopResourceTipDialog.ModernPackageShopResourceTipDialog, new __dep_export_ModernPackageShopResourceTipDialogProperties.ModernPackageShopResourceTipDialogProperties(null, [__dep_export_ModernPackageShopResourceTipEnum.ModernPackageShopResourceTipEnum.AQUAMARINE.typeVO]));
          } else {
            (__s5local3 = new __dep_export_CastleResourceWaitDialogProperties.CastleResourceWaitDialogProperties(__s5param0.commandId)).parseParams(__s5local2);
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResourceWaitDialog.CastleResourceWaitDialog, __s5local3);
          }
        } else {
          this.performDefaultError(__s5param0);
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_SPECIAL_CURRENCY:
        if (!__s5local1[1]) {
          return;
        }
        var __s5local4 = (__s5local2 = JSON.parse(__s5local1[1])) ? __s5local2.MCIDS : null;
        if (__s5local4 && __s5local4.length != 0) {
          __dep_export_CostHelper.CostHelper.showNotEnoughSpecialCurrencyDialog(__s5local4);
        } else {
          this.performDefaultError(__s5param0);
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.USAGE_OF_BADWORDS:
        var __s5local5 = "";
        if ((__s5local2 = __s5local1.length > 1 ? JSON.parse(__s5local1[1]) : new Object()).BW && __s5local2.BW[0]) {
          __s5local5 = __s5local2.BW[0];
        }
        if (__s5local5 && __s5local5 != "" && __s5local5 != " ") {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_badword_textReplacement", [__s5local5])));
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_badword")));
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_CURRENCY1:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties());
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_CURRENCY2:
        if (__s5param0.commandId == __dep_export_ClientConstSF.ClientConstSF.S2C_REVIVE_HOSPITAL_UNITS || __s5param0.commandId == __dep_export_ClientConstSF.ClientConstSF.S2C_REVIVE_ALL_HOSPITAL_UNITS) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties(), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_TOP);
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_EMAIL:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_register_emailwrong_copy")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.ALLI_NOT_ENOUGH_C2:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties(__dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties.TYPE_ALLIANCE));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_OWNED_LONG_ENOUGH:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_" + __s5local0, [__dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff_1.OutpostConst.MIN_TIME_BEFORE_ABANDON, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)])));
        break;
      case __dep_exact_26a421b704832cff.ERROR.CL_OBJECT_ALREADY_IN_LIST:
        break;
      case __dep_exact_26a421b704832cff.ERROR.NO_TARGET:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties("", __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_191")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.IS_RELOCATING:
        var __s5local6 = __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_" + __s5local0, [__dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getShortTimeStringBySeconds(__dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration)]);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __s5local6));
        break;
      case __dep_exact_26a421b704832cff.ERROR.ALLIANCE_ALREADY_HAS_PEACE_REQUEST:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties("", __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_289")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.TOO_MUCH_UNITS:
        if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleFactionUnitLimitDialog.CastleFactionUnitLimitDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), null));
        } else {
          this.performDefaultError(__s5param0);
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.CONSTRUCTION_ITEM_INVENTORY_FULL:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_ci_inventoryFull_copy")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.WORLD_IS_FULL:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("world_is_full"), this.bindFunction(this.reloadPage), "", this.bindFunction(this.reloadPage)));
        break;
      case __dep_exact_26a421b704832cff.ERROR.C2_CONFIRMATION_REQUIRED:
        __s5local2 = JSON.parse(__s5local1[1]);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ConfirmC2Dialog.ConfirmC2Dialog, new __dep_export_ConfirmC2DialogProperties.ConfirmC2DialogProperties(__s5local2[__dep_exact_26a421b704832cff.CommKeys.CONFIRM_C2_THRESHOLD], __s5param0));
        break;
      default:
        this.performDefaultError(__s5param0);
    }
  };
  CastleHandleServerErrorCommand.prototype.reloadPage = function (__s22param0) {
    if (__dep_exact_81dacdf05bd32292.ExternalInterface.available) {
      try {
        __dep_exact_81dacdf05bd32292.ExternalInterface.call("function refresh(){location.reload();}");
      } catch (__s26local0) {
        __dep_exact_9e901e8e2483a22f_5.error("ExternalInterface call failed.");
      }
    }
  };
  CastleHandleServerErrorCommand.prototype.performDefaultError = function (__s28param0) {
    var __s28local0 = __dep_exact_f855840627e6e145.int(__s28param0.error);
    if (__dep_exact_92d05af59ee2ff30.Localize.text("errorCode_" + __s28local0) != "errorCode_" + __s28local0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("errorCode_" + __s28local0)) + (__dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.isTest || __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.isLocal ? " (" + __s28param0.commandId + ")" : "")));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_bug"), "errorCode: " + __s28local0 + ": " + __dep_exact_26a421b704832cff.ERROR.getErrorText(__s28local0) + (__dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.isTest || __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.isLocal ? " (" + __s28param0.commandId + ")" : "")));
    }
  };
  return CastleHandleServerErrorCommand;
}(__dep_exact_9e901e8e2483a22f_1.BasicHandleServerErrorCommand);
exports.CastleHandleServerErrorCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleFactionUnitLimitDialog = require("gge-module:export_CastleFactionUnitLimitDialog");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleResourceWaitDialog = require("gge-module:export_CastleResourceWaitDialog");
var __dep_export_CastleResourceWaitDialogProperties = require("gge-module:export_CastleResourceWaitDialogProperties");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_ModernPackageShopResourceTipEnum = require("gge-module:export_ModernPackageShopResourceTipEnum");
var __dep_export_ModernPackageShopResourceTipDialog = require("gge-module:export_ModernPackageShopResourceTipDialog");
var __dep_export_ModernPackageShopResourceTipDialogProperties = require("gge-module:export_ModernPackageShopResourceTipDialogProperties");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ISimpleCommand");
