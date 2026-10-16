Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SocialButtonTrackingEvent = require("gge-module:export_SocialButtonTrackingEvent");
var __s0local0 = function (__s1param0) {
  function CastleOpenDiscordCommand() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOpenDiscordCommand, __s1param0);
  CastleOpenDiscordCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = new __dep_exact_81dacdf05bd32292.URLRequest(CastleOpenDiscordCommand.DISCORD_URL);
    __dep_exact_9e901e8e2483a22f_1.BrowserUtil.executeNavigateToURL(__s5local0, "_blank");
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_SOCIAL_BUTTON, __s5param0 || [__dep_export_SocialButtonTrackingEvent.SocialButtonTrackingEvent.BUTTON_NAME_DISCORD]);
  };
  CastleOpenDiscordCommand.DISCORD_URL = "https://www.discord.gg/goodgamestudios";
  return CastleOpenDiscordCommand;
}(__dep_exact_9e901e8e2483a22f_2.SimpleCommand);
exports.CastleOpenDiscordCommand = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ISimpleCommand");
