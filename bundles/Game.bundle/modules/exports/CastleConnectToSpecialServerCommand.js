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
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_C2SGetTemporaryServerLoginTokenVO = require("gge-module:export_C2SGetTemporaryServerLoginTokenVO");
var __dep_export_C2STemporaryServerLoginVO = require("gge-module:export_C2STemporaryServerLoginVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleDarkOkLabeledDialog = require("gge-module:export_CastleDarkOkLabeledDialog");
var __s0local0 = function (__s1param0) {
  function CastleConnectToSpecialServerCommand() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.BLOCK_ACCESS = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConnectToSpecialServerCommand, __s1param0);
  CastleConnectToSpecialServerCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_CastleModel.CastleModel.userData.resetApiToken();
    if (__s5param0 == "login") {
      this.doLogin();
    } else {
      this.connectToSpecialServer();
    }
  };
  CastleConnectToSpecialServerCommand.prototype.connectToSpecialServer = function () {
    if (!__dep_export_FlashBlockHelper.FlashBlockHelper.BLOCK_ACCESS || this.env.isTest) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetTemporaryServerLoginTokenVO.C2SGetTemporaryServerLoginTokenVO(this.externalServerID));
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED, this.bindFunction(this.onTempServerInfoArrived));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDarkOkLabeledDialog.CastleDarkOkLabeledDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("dialog_clientVersion_switch_confirmDialog_header", this.blockerTextID, this.bindFunction(this.onConfirmSwitch), "dialog_clientVersion_confirmSwitch", this.bindFunction(this.onClose)));
    }
  };
  CastleConnectToSpecialServerCommand.prototype.onClose = function (__s13param0 = null) {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
  };
  Object.defineProperty(CastleConnectToSpecialServerCommand.prototype, "blockerTextID", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleConnectToSpecialServerCommand.prototype.onConfirmSwitch = function (__s17param0 = null) {
    __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState("SWITCH_TO_FLASH");
    __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsChangeGameClient");
  };
  CastleConnectToSpecialServerCommand.prototype.onTempServerInfoArrived = function (__s19param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED, this.bindFunction(this.onTempServerInfoArrived));
    this.loginToken = __dep_export_CastleModel.CastleModel.userData.specialServerLoginToken;
    this.env.isSpecialServerConnectStarted = true;
    this.doLogout();
    this.changeInstance();
  };
  CastleConnectToSpecialServerCommand.prototype.doLogout = function () {
    __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isFirstVisitOfGGS = false;
    __dep_exact_9e901e8e2483a22f_4.BasicController.getInstance().onLogOut();
    __dep_exact_9e901e8e2483a22f_7.BasicModel.sessionData.resetLoggedinTimer();
    __dep_exact_9e901e8e2483a22f_7.BasicModel.smartfoxClient.logout();
    __dep_exact_9e901e8e2483a22f_6.BasicLayoutManager.getInstance().revertFullscreen();
    __dep_export_cxfResetCommandCache.cxfResetCommandCache();
    __dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed = false;
    __dep_export_CastleModel.CastleModel.userData.joinCastleCount = 0;
    __dep_export_CastleModel.CastleModel.userData.persistentLogin = false;
  };
  CastleConnectToSpecialServerCommand.prototype.doLogin = function () {
    var __s23local0 = new __dep_export_C2STemporaryServerLoginVO.C2STemporaryServerLoginVO(__dep_export_CastleModel.CastleModel.userData.specialServerLoginToken);
    __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.getInstance().blockDialogs = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s23local0);
  };
  CastleConnectToSpecialServerCommand.prototype.changeInstance = function () {
    __dep_export_CastleModel.CastleModel.userData.resetConnectToFlags();
    this.setConnectFlag();
    __dep_export_CastleModel.CastleModel.userData.specialServerLoginToken = this.loginToken;
    this.env.originalInstanceVOBeforeSpecialServer = __dep_exact_9e901e8e2483a22f_7.BasicModel.instanceProxy.selectedInstanceVO;
    var __s25local0 = this.env.specialServer;
    var __s25local1 = window.ggs.worldAssignment;
    if (__s25local0.instanceId != __s25local1.facade.selectedNetworkInstance.instanceId) {
      __s25local1.selectInstance(__s25local0);
    }
    __dep_exact_9e901e8e2483a22f_3.info("Connect to instance: " + __s25local0);
    __dep_exact_9e901e8e2483a22f_5.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f_4.BasicController.COMMAND_CHECK_MAINTENANCE, __dep_exact_9e901e8e2483a22f_4.BasicController.COMMAND_CONNECT_CLIENT);
  };
  Object.defineProperty(CastleConnectToSpecialServerCommand.prototype, "externalServerID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleConnectToSpecialServerCommand.prototype.setConnectFlag = function () {};
  Object.defineProperty(CastleConnectToSpecialServerCommand.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConnectToSpecialServerCommand.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleConnectToSpecialServerCommand;
}(__dep_exact_9e901e8e2483a22f_2.SimpleCommand);
exports.CastleConnectToSpecialServerCommand = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ISimpleCommand");
