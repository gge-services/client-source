Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicNetworkUpdateCommand = require("gge-module:class_BasicNetworkUpdateCommand");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_PathProvider = require("gge-module:class_PathProvider");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_ExportToWindowDebuggerClass = require("gge-module:class_ExportToWindowDebuggerClass");
var __dep_class_ClientFunnelTrackingController = require("gge-module:class_ClientFunnelTrackingController");
var __dep_class_ClientFunnelGameStates = require("gge-module:class_ClientFunnelGameStates");
var __s0local0 = function (__s1param0) {
  function BasicReloadNetworkCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicReloadNetworkCommand, __s1param0);
  BasicReloadNetworkCommand.prototype.execute = function (__s5param0 = null) {
    this.reloadNetworkXML();
    this.reloadInstances();
  };
  BasicReloadNetworkCommand.prototype.reloadNetworkXML = function () {
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.NETWORK_XML_START);
    __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.addXMLLoader(__dep_class_BasicConstants.BasicConstants.NETWORK_INFO_LOADER, __dep_class_PathProvider.PathProvider.instance.networkConfigURL, "", this.onReloadNetworkXML, true);
  };
  BasicReloadNetworkCommand.prototype.onReloadNetworkXML = function () {
    __dep_class_ClientFunnelTrackingController.ClientFunnelTrackingController.getInstance().trackState(__dep_class_ClientFunnelGameStates.ClientFunnelGameStates.NETWORK_XML_END);
    var __s9local0 = __dep_class_BasicModel.BasicModel.basicLoaderData.appLoader.getLoaderData(__dep_class_BasicConstants.BasicConstants.NETWORK_INFO_LOADER);
    this.env.defaultInstanceId = parseInt(__s9local0.general.defaultinstance.text());
    this.env.allowedfullscreen = __s9local0.general.allowedfullscreen == "true";
    this.env.networknameString = __s9local0.general.networkname.text();
    this.env.loginIsKeyBased = __s9local0.general.usekeybaselogin == "true";
    this.env.hasNetworkBuddies = __s9local0.general.networkbuddies == "true";
    this.env.enableFeedMessages = __s9local0.general.enablefeedmessages == "true";
    this.env.enableLonelyCow = __s9local0.general.enablelonelycow == "true";
    this.env.requestPayByJS = __s9local0.general.requestpaybyjs == "true";
    this.env.networkNewsByJS = __s9local0.general.networknewsbyjs == "true";
    this.env.earnCredits = parseInt(__s9local0.general.earncredits);
    this.env.useexternallinks = __s9local0.general.useexternallinks == "true";
    this.env.invitefriends = __s9local0.general.invitefriends == "true";
    this.env.maxUsernameLength = parseInt(__s9local0.general.maxusernamelength.text());
    this.env.usePayment = __s9local0.general.usepayment == "true";
    this.env.showVersion = __s9local0.general.showversion == "true";
    delete __s9local0.instance[0];
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_UPDATE_NETWORK, __dep_class_BasicNetworkUpdateCommand.BasicNetworkUpdateCommand);
  };
  BasicReloadNetworkCommand.prototype.reloadInstances = function () {};
  Object.defineProperty(BasicReloadNetworkCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  __dep_exact_b45c75bfe6706b06.__decorate([__dep_class_ExportToWindowDebuggerClass.commentedOut("HTML-2006", "TODO HTML5  trying to remove all worldassignemnt stuff when / why are we reloading instances"), __dep_exact_b45c75bfe6706b06.__metadata("design:type", Function), __dep_exact_b45c75bfe6706b06.__metadata("design:paramtypes", []), __dep_exact_b45c75bfe6706b06.__metadata("design:returntype", undefined)], BasicReloadNetworkCommand.prototype, "reloadInstances", null);
  return BasicReloadNetworkCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicReloadNetworkCommand = __s0local0;
