Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function () {
  function HelpshiftHelper() {
    this.newMessage = new __dep_exact_5c7bc328fca9e4de.Signal();
    this.newMessagesCount = 0;
  }
  HelpshiftHelper.getInstance = function () {
    if (!HelpshiftHelper._instance) {
      HelpshiftHelper._instance = new HelpshiftHelper();
      HelpshiftHelper._instance.initHelpshift();
    }
    return HelpshiftHelper._instance;
  };
  HelpshiftHelper.prototype.initHelpshift = function () {
    window.Helpshift("setCustomIssueFields", {
      game: {
        type: "singleline",
        value: "EP - Empire"
      }
    });
    this.addListener();
  };
  HelpshiftHelper.prototype.showChatWidget = function () {
    window.Helpshift("show");
    window.Helpshift("open");
    var __s10local0 = document.querySelector("#hs-web-sdk-iframe-launcher");
    if (__s10local0) {
      __s10local0.style.pointerEvents = "auto";
      __s10local0.style.position = "fixed";
      __s10local0.style.top = "0";
      __s10local0.style.left = "0";
    }
  };
  HelpshiftHelper.prototype.hideChatWidget = function (__s13param0 = true) {
    if (__s13param0) {
      var __s13local0 = new __dep_exact_81dacdf05bd32292.Timer(500, 1);
      __s13local0.addEventListener(__s0local0.TIMER, this.bindFunction(this.hideChatWidgetHandler));
      __s13local0.start();
    } else {
      this.hideChatWidgetHandler();
    }
  };
  HelpshiftHelper.prototype.hideChatWidgetHandler = function () {
    window.Helpshift("hide");
    var __s17local0 = document.querySelector("#hs-web-sdk-iframe-launcher");
    if (__s17local0) {
      __s17local0.style.pointerEvents = "none";
      __s17local0.style.position = "absolute";
      __s17local0.style.top = "-9999px";
      __s17local0.style.left = "-9999px";
    }
  };
  HelpshiftHelper.prototype.updateUserData = function () {
    window.helpshiftConfig.userId = "12/network/" + __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId + "/instance/" + __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "/player/" + __dep_export_CastleModel.CastleModel.userData.playerID;
    window.helpshiftConfig.userName = __dep_export_CastleModel.CastleModel.userData.userName;
    window.helpshiftConfig.userEmail = __dep_export_CastleModel.CastleModel.userData.email;
    window.helpshiftConfig.language = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.currentCountryLanguageCode;
    window.Helpshift("updateHelpshiftConfig");
  };
  HelpshiftHelper.prototype.addListener = function () {
    window.Helpshift("addEventListener", "newUnreadMessages", this.bindFunction(this.newUnreadMessagesEventHandler));
    window.Helpshift("addEventListener", "widgetToggle", this.bindFunction(this.widgetToggleEventHandler));
  };
  HelpshiftHelper.prototype.widgetToggleEventHandler = function (__s24param0) {
    if (!__s24param0.visible) {
      this.hideChatWidget();
    }
  };
  HelpshiftHelper.prototype.newUnreadMessagesEventHandler = function (__s27param0 = null) {
    console.log("newUnreadMessagesEventHandler");
    var __s27local0 = __s27param0 ? __s27param0.unreadCount : 0;
    this.newMessagesCount = __s27local0;
    this.newMessage.dispatch(__s27local0);
  };
  return HelpshiftHelper;
}();
exports.HelpshiftHelper = __s0local1;
