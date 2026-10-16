Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_PaymentHashRefresher = require("gge-module:class_PaymentHashRefresher");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_ConnectionTrackingCommandVO = require("gge-module:class_ConnectionTrackingCommandVO");
var __dep_class_BasicContextMenuController = require("gge-module:class_BasicContextMenuController");
var __dep_class_SmartfoxEvent = require("gge-module:class_SmartfoxEvent");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_ConnectionTrackingUtil = require("gge-module:class_ConnectionTrackingUtil");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __dep_class_ClientFunnelTrackingController = require("gge-module:class_ClientFunnelTrackingController");
var __dep_class_ClientFunnelGameStates = require("gge-module:class_ClientFunnelGameStates");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.BASIC_CONTROLLER);
var __s0local2 = function (__s1param0) {
  function BasicController() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.paymentHashRefresher = new __dep_class_PaymentHashRefresher.PaymentHashRefresher();
    __s3local0.waitForServerMessage = [];
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicController, __s1param0);
  Object.defineProperty(BasicController.prototype, "soundController", {
    get: function () {
      return this._soundController;
    },
    set: function (__s7param0) {
      this._soundController = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicController.getInstance = function () {
    BasicController._basicController ||= new BasicController();
    return BasicController._basicController;
  };
  BasicController.prototype.onLogIn = function () {
    __dep_class_BasicModel.BasicModel.smartfoxClient.startGameServerErrorDelayTimer(__dep_class_BasicModel.BasicModel.smartfoxClient.onLoginResponseFailed);
  };
  BasicController.prototype.onLoggedIn = function () {
    this.paymentHashRefresher.resetAndStartRefreshing();
    __s0local1.debug("onLoggedIn()-> env.isIdentityManagementActive: " + __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isIdentityManagementActive);
    __dep_class_BasicContextMenuController.BasicContextMenuController.instance.enableContextMenuItem(__dep_class_BasicContextMenuController.BasicContextMenuController.FORUM_LABEL);
  };
  BasicController.prototype.onLogOut = function () {
    __s0local1.debug("onLogOut()");
    __dep_class_ConnectionTrackingUtil.ConnectionTrackingUtil.instance.dispose();
    if (this.soundController) {
      this.soundController.stopMusic();
      this.soundController.stopAllLoopedSoundEffects();
    }
    __dep_class_BasicContextMenuController.BasicContextMenuController.instance.disableContextMenuItem(__dep_class_BasicContextMenuController.BasicContextMenuController.FORUM_LABEL);
    this.paymentHashRefresher.stopRefreshing();
    this.disposeLicenseRefresher();
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().dispose();
    __dep_class_TrackingCache.TrackingCache.getInstance().trackingVerifier.dispose();
  };
  BasicController.prototype.onDestroyGame = function () {
    __s0local1.debug("onDestroyGame()");
    if (this.soundController) {
      this.soundController.stopMusic();
      this.soundController.stopAllLoopedSoundEffects();
    }
    this.disposeLicenseRefresher();
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().dispose();
    __s0local1.warn("ClientFunnelPlayTimeController.dispose?");
  };
  BasicController.prototype.disposeLicenseRefresher = function () {
    if (__dep_class_BasicModel.BasicModel.identityManagement) {
      __dep_class_BasicModel.BasicModel.identityManagement.stopLicenseRefresher();
    }
  };
  BasicController.prototype.connectClient = function (__s24param0, __s24param1) {
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.SERVER_CONNECT);
    __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripResponseSignal.addOnce(this.bindFunction(this.handleSmartfoxClientOnRoundTripResponse));
    __dep_class_BasicModel.BasicModel.smartfoxClient.addEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectSuccess));
    __dep_class_BasicModel.BasicModel.smartfoxClient.addEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_FAILED, this.bindFunction(this.onConnectFailed));
    __dep_class_BasicModel.BasicModel.smartfoxClient.addEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_TIMEOUT, this.bindFunction(this.onConnectTimeout));
    __dep_class_BasicModel.BasicModel.smartfoxClient.executeConnection(__s24param0, __s24param1);
  };
  BasicController.prototype.handleSmartfoxClientOnRoundTripResponse = function (__s26param0, __s26param1) {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_TRACK_CONNECTION_TRACKING_EVENT, new __dep_class_ConnectionTrackingCommandVO.ConnectionTrackingCommandVO(0, __s26param0.toString(), __s26param1));
  };
  BasicController.prototype.sendServerMessageVOAndWait = function (__s28param0, __s28param1 = "") {
    this.waitForServerMessage.push(__s28param0.getCmdId());
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendCommandVO(__s28param0);
  };
  BasicController.prototype.waitForMessage = function (__s30param0) {
    this.waitForServerMessage.push(__s30param0);
  };
  BasicController.prototype.onConnectTimeout = function (__s32param0) {
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.SERVER_CONNECT_ERROR);
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_CONNECTION_TIMEOUT);
  };
  BasicController.prototype.onConnectFailed = function (__s34param0) {
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.SERVER_CONNECT_ERROR);
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_CONNECTION_FAILED);
  };
  BasicController.prototype.onConnectSuccess = function (__s36param0) {
    __s0local1.debug("[BasicController]: getting signal -- onConnection Success");
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_TRACK_WORLD_ASSIGNMENT);
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.SERVER_CONNECT_SUCCESS);
    __dep_class_BasicModel.BasicModel.smartfoxClient.removeEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectSuccess));
    __dep_class_BasicModel.BasicModel.smartfoxClient.addEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.JOINED_ROOM, this.bindFunction(this.onJoinedRoom));
    __dep_class_BasicModel.BasicModel.smartfoxClient.addEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.EXTENSION_RESPONSE, this.bindFunction(this.onExtensionResponse));
    __dep_class_BasicModel.BasicModel.smartfoxClient.addEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost));
  };
  BasicController.prototype.onConnectionLost = function (__s38param0) {
    __s0local1.debug("onConnectionLost()");
    __dep_class_BasicModel.BasicModel.sessionData.loggedIn = false;
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().dispose();
    this.paymentHashRefresher.stopRefreshing();
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_CONNECTION_LOST);
  };
  BasicController.prototype.onJoinedRoom = function (__s40param0) {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_JOINED_ROOM, __s40param0);
  };
  BasicController.prototype.onExtensionResponse = function (__s42param0) {
    if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.useLaggyClientEmulation) {
      var __s42local0 = Number((__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.laggyClientMaxDelay - __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.laggyClientMinDelay) * Math.random() + __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.laggyClientMinDelay);
      setTimeout(function () {
        __s0local1.info("delaying incoming event by: " + __s42local0 + "ms");
        __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_EXTENSION_RESPONSE, __s42param0);
      }, __s42local0);
    } else {
      __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_EXTENSION_RESPONSE, __s42param0);
    }
  };
  BasicController.prototype.serverMessageArrived = function (__s48param0) {
    if (this.waitForServerMessage.indexOf(__s48param0) >= 0) {
      this.layoutManager.checkWaitingAnimState(__s48param0);
      var __s48local0 = new Array();
      for (var __s48local1 = 0; __s48local1 < this.waitForServerMessage.length; __s48local1++) {
        if (this.waitForServerMessage[__s48local1] != __s48param0) {
          __s48local0.push(this.waitForServerMessage[__s48local1]);
        }
      }
      this.waitForServerMessage = __s48local0;
    }
  };
  BasicController.prototype.saveSoundSettings = function () {
    __dep_class_BasicModel.BasicModel.localData.saveSoundSettings([this.soundController.isMusicMuted, 1, this.soundController.isEffectsMuted, 1]);
  };
  BasicController.prototype.loginJson = function (__s56param0) {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_LOGIN_JSON, __s56param0);
  };
  BasicController.prototype.registerJSON = function (__s58param0, __s58param1, __s58param2) {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_REGISTER_USER_JSON, [__s58param0, __s58param1, __s58param2]);
  };
  BasicController.prototype.onClickMoreMoney = function (__s60param0) {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_ON_CLICK_MORE_CURRENY, __s60param0);
  };
  BasicController.prototype.onStartRegisterDialog = function () {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_SHOW_REGISTER_DIALOG);
  };
  BasicController.prototype.addExtraGold = function () {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_ADD_EXTRA_CURRENCY, this.paymentHash);
  };
  BasicController.prototype.inviteFriend = function (__s66param0) {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_INVITE_FRIEND, __s66param0);
  };
  BasicController.prototype.inviteFriendJSON = function (__s68param0) {
    __dep_class_CommandController.CommandController.instance.executeCommand(BasicController.COMMAND_INVITE_FRIEND_JSON, __s68param0);
  };
  Object.defineProperty(BasicController.prototype, "layoutManager", {
    get: function () {
      return __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  BasicController.prototype.sendServerMessageAndWait = function (__s72param0, __s72param1, __s72param2) {
    this.waitForServerMessage.push(__s72param2);
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__s72param0, __s72param1);
  };
  BasicController.prototype.sendCommandVOAndWait = function (__s74param0) {
    this.waitForServerMessage.push(__s74param0.getCmdId());
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendCommandVO(__s74param0);
  };
  Object.defineProperty(BasicController, "hasBeenInitialized", {
    get: function () {
      return BasicController._basicController != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicController.prototype, "awayFromKeyboardController", {
    set: function (__s78param0) {
      this._awayFromKeyboardController = __s78param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicController.VERSION = "$Id$";
  BasicController.NAME = "BasicController";
  BasicController.COMMAND_GET_DOORMAN_SERVER_INSTANCES = "COMMAND_GET_DOORMAN_SERVER_INSTANCES";
  BasicController.SELECT_INITIAL_INSTANCEVO = "SELECT_INITIAL_INSTANCEVO";
  BasicController.COMMAND_HANDLE_SERVER_ERROR = "COMMAND_HANDLE_SERVER_ERROR";
  BasicController.COMMAND_INIT_LOGGER = "COMMAND_INIT_LOGGER";
  BasicController.COMMAND_INIT_SERVERCOMMANDS = "COMMAND_INIT_SERVERCOMMANDS";
  BasicController.COMMAND_EXTENSION_RESPONSE = "COMMAND_EXTENSION_RESPONSE";
  BasicController.COMMAND_SOCIAL_LOGIN = "COMMAND_SOCIAL_LOGIN";
  BasicController.COMMAND_LOGIN = "COMMAND_LOGIN";
  BasicController.COMMAND_LOGOUT = "COMMAND_LOGOUT";
  BasicController.COMMAND_CHECK_MAINTENANCE = "COMMAND_CHECK_MAINTENANCE";
  BasicController.COMMAND_CONNECT_CLIENT = "COMMAND_CONNECT_CLIENT";
  BasicController.COMMAND_CONNECTION_LOST = "COMMAND_CONNECTION_LOST";
  BasicController.COMMAND_CONNECTION_FAILED = "COMMAND_CONNECTION_FAILED";
  BasicController.COMMAND_CONNECTION_TIMEOUT = "COMMAND_CONNECTION_TIMEOUT";
  BasicController.COMMAND_JOINED_ROOM = "COMMAND_JOINED_ROOM";
  BasicController.COMMAND_VERSION_CHECK = "COMMAND_VERSION_CHECK";
  BasicController.COMMAND_INITALIZE_CONTROLLER = "COMMAND_INITALIZE_CONTROLLER";
  BasicController.COMMAND_REGISTER_USER = "COMMAND_REGISTER_USER";
  BasicController.COMMAND_RECONNECT = "COMMAND_RECONNECT";
  BasicController.COMMAND_OPEN_FORUM = "COMMAND_OPEN_FORUM";
  BasicController.COMMAND_DESTROY_GAME = "DESTROY_GAME";
  BasicController.COMMAND_PREPARE_RECONNECT = "COMMAND_PREPARE_RECONNECT";
  BasicController.COMMAND_SHOW_REGISTER_DIALOG = "COMMAND_SHOW_REGISTER_DIALOG";
  BasicController.COMMAND_SHOW_COMA_TEASER = "COMMAND_SHOW_COMA_TEASER";
  BasicController.COMMAND_CONNECT_TO_INSTANCEVO = "COMMAND_SELECT_INSTANCEVO_COMMAND";
  BasicController.COMMAND_INIT_COUNTRIES = "COMMAND_INIT_COUNTRIES";
  BasicController.COMMAND_PARSE_AVAILABLE_COUNTRIES = "COMMAND_PARSE_AVAILABLE_COUNTRIES";
  BasicController.COMMAND_LOGIN_JSON = "COMMAND_LOGIN_JSON";
  BasicController.COMMAND_REGISTER_USER_JSON = "COMMAND_REGISTER_USER_JSON";
  BasicController.COMMAND_INVITE_FRIEND = "COMMAND_INVITE_FRIEND";
  BasicController.COMMAND_INVITE_FRIEND_JSON = "COMMAND_INVITE_FRIEND_JSON";
  BasicController.COMMAND_CHANGE_COUNTRY = "COMMAND_CHANGE_COUNTRY_COMMAND";
  BasicController.COMMAND_INIT_ABTEST = "COMMAND_INIT_ABTEST";
  BasicController.COMMAND_INIT_SERVERLIST = "COMMAND_INIT_SERVERLIST";
  BasicController.COMMAND_INIT_ZONE_CAPACITY = "COMMAND_INIT_ZONE_CAPACITY";
  BasicController.COMMAND_ADD_EXTRA_CURRENCY = "COMMAND_ADD_EXTRA_CURRENCY";
  BasicController.COMMAND_ON_CLICK_MORE_CURRENY = "COMMAND_ON_CLICK_MORE_CURRENY";
  BasicController.COMMAND_RELOAD_NETWORK = "COMMAND_RELOAD_NETWORK";
  BasicController.COMMAND_UPDATE_NETWORK = "COMMAND_UPDATE_NETWORK";
  BasicController.COMMAND_FACEBOOK_INITIALIZE = "COMMAND_FACEBOOK_INITIALIZE";
  BasicController.COMMAND_FACEBOOK_CONNECT_LOGIN = "COMMAND_FACEBOOK_CONNECT_LOGIN";
  BasicController.COMMAND_TEST_CDN = "COMMAND_TEST_CDN";
  BasicController.COMMAND_REPLACE_AVAILABLE_COUNTRIES_BY_INSTANCE_COUNTRIES = "COMMAND_REPLACE_AVAILABLE_COUNTRIES_BY_INSTANCE_COUNTRIES";
  BasicController.COMMAND_CHANGE_LANGUAGE = "COMMAND_CHANGE_LANGUAGE";
  BasicController.COMMAND_SERVER_INFO = "COMMAND_SERVER_INFO";
  BasicController.COMMAND_SHOW_INGAME_HELP = "COMMAND_SHOW_INGAME_HELP";
  BasicController.COMMAND_REPORT_SURVEY = "COMMAND_REPORT_SURVEY";
  BasicController.COMMAND_VERIFY_PLAYER_MAIL = "COMMAND_VERIFY_PLAYER_MAIL";
  BasicController.COMMAND_LOST_PASSWORD = "COMMAND_LOST_PASSWORD";
  BasicController.COMMAND_CHILD_PROTECTION_SHUTDOWN_ALERT = "COMMAND_CHILD_PROTECTION_SHUTDOWN_ALERT";
  BasicController.COMMAND_IDENTITY_MANAGEMENT = "COMMAND_IDENTITY_MANAGEMENT";
  BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR = "COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR";
  BasicController.COMMAND_TEST_CASE_INFO = "COMMAND_TEST_CASE_INFO";
  BasicController.COMMAND_CHECK_AGE_GATE_ACTIVITY = "COMMAND_CHECK_AGE_GATE_ACTIVITY";
  BasicController.COMMAND_VALIDATE_AGE = "COMMAND_VALIDATE_AGE";
  BasicController.COMMAND_TRACK_LOGIN = "COMMAND_TRACK_LOGIN";
  BasicController.COMMAND_TRACK_PROFILING = "COMMAND_TRACK_PROFILING";
  BasicController.COMMAND_TRACK_REGISTRATION_DATA = "COMMAND_TRACK_REGISTRATION_DATA";
  BasicController.COMMAND_TRACK_GOOGLE_PIXEL = "COMMAND_TRACK_GOOGLE_PIXEL";
  BasicController.COMMAND_TRACK_WORLD_ASSIGNMENT = "COMMAND_TRACK_WORLD_ASSIGNMENT";
  BasicController.COMMAND_TRACK_CONNECTION_TRACKING_EVENT = "COMMAND_TRACK_CONNECTION_TRACKING_EVENT";
  BasicController.COMMAND_TRACK_GAME_PAYMENT_SHOP_CLICK_EVENT = "COMMAND_TRACK_GAME_PAYMENT_SHOP_CLICK_EVENT";
  BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT = "COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT";
  BasicController.COMMAND_TRACK_BROWSER_STATE_EVENT = "COMMAND_TRACK_BROWSER_STATE_EVENT";
  BasicController.COMMAND_VERIFY_TRACKING = "COMMAND_VERIFY_TRACKING";
  BasicController.COMMAND_TRACK_INVITATION = "COMMAND_TRACK_INVITATION";
  BasicController.COMMAND_TRACK_FACEBOOK_CONNECTION = "COMMAND_TRACK_FACEBOOK_CONNECTION";
  BasicController.COMMAND_TRACK_FACEBOOK_USERDATA = "COMMAND_TRACK_FACEBOOK_USERDATA";
  BasicController.COMMAND_TRACK_FACEBOOK_EMAIL = "COMMAND_TRACK_FACEBOOK_EMAIL";
  BasicController.PRIVATE_OFFER_VISUAL_ISO_OBJECT = "PRIVATE_OFFER_VISUAL_ISO_OBJECT";
  BasicController.PRIVATE_OFFER_VISUAL_ACCEPT_DIALOG = "PRIVATE_OFFER_VISUAL_ACCEPT_DIALOG";
  BasicController.PRIVATE_OFFER_QUEST_DIALOG = "PRIVATE_OFFER_QUEST_DIALOG";
  BasicController.PRIVATE_OFFER_FAILED_DIALOG = "PRIVATE_OFFER_FAILED_DIALOG";
  BasicController.PRIVATE_OFFER_FINISH_DIALOG = "PRIVATE_OFFER_FINISH_DIALOG";
  BasicController.PRIVATE_OFFER_INTERFACE_BUTTON = "PRIVATE_OFFER_INTERFACE_BUTTON";
  BasicController.PRIVATE_OFFER_OFFER_DIALOG = "PRIVATE_OFFER_OFFER_DIALOG";
  BasicController.REQUEST_SOCIAL_LOGIN_KEYS = "REQUEST_SOCIAL_LOGIN_KEYS";
  BasicController.CHOOSE_LOGIN_METHOD = "CHOOSE_LOGIN_METHOD";
  BasicController.COMMAND_GENERATE_INVITE_CODE = "COMMAND_GENERATE_INVITE_CODE";
  BasicController.COMMAND_SET_INVITE_CODE = "COMMAND_SET_INVITE_CODE";
  BasicController.GTM_CALL_GGS_TRACK_EVENT = "GTM_CALL_GGS_TRACK_EVENT";
  BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT = "GAMESIGHT_CALL_GGS_TRACK_EVENT";
  BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID = "COMMAND_RELOAD_PAGE_WITH_ZONE_ID";
  BasicController.commandDict = new Map();
  return BasicController;
}(__s0local0);
exports.BasicController = __s0local2;
