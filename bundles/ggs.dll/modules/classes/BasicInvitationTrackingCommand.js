Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicTrackingCommand = require("gge-module:class_BasicTrackingCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __s0local0 = function (__s1param0) {
  function BasicInvitationTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicInvitationTrackingCommand, __s1param0);
  BasicInvitationTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.INVITATION);
      var __s5local1 = __s5param0;
      __s5local0.playerId = __dep_class_BasicModel.BasicModel.userData.playerID;
      if (__s5local1.inviterPlayerId == 0) {
        __s5local0.senderPlayerId = __dep_class_BasicModel.BasicModel.userData.playerID;
      } else {
        __s5local0.senderPlayerId = __s5local1.inviterPlayerId;
      }
      if (__s5local1.inviterInstanceId == 0) {
        __s5local0.senderInstanceId = __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId;
      } else {
        __s5local0.senderInstanceId = __s5local1.inviterInstanceId;
      }
      if (__s5local1.inviterNetworkId == 0) {
        __s5local0.senderNetworkId = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId;
      } else {
        __s5local0.senderNetworkId = __s5local1.inviterNetworkId;
      }
      if (__s5local1.inviterGameId == 0) {
        __s5local0.senderGameId = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId;
      } else {
        __s5local0.senderGameId = __s5local1.inviterGameId;
      }
      __s5local0.senderGameId = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId;
      __s5local0.senderExternalId = __s5local1.inviterExternalId;
      __s5local0.senderLevel = __dep_class_BasicModel.BasicModel.userData.userLevel;
      __s5local0.receiverPlayerId = __s5local1.inviteePlayerId;
      __s5local0.receiverInstanceId = __s5local1.inviteeInstanceId;
      __s5local0.receiverNetworkId = __s5local1.inviteeNetworkId;
      __s5local0.receiverGameId = __s5local1.inviteeGameId;
      __s5local0.receiverExternalId = __s5local1.inviteeExternalId;
      __s5local0.action = __s5local1.action;
      __s5local0.trigger = __s5local1.trigger;
      __s5local0.referMethod = __s5local1.referMethod;
      __dep_exact_9036b0ddd67c3c6e.debug("Tracking event fired. Attributes: senderID=" + __dep_class_BasicModel.BasicModel.userData.playerID + ", receiverID=" + __s5local1.inviteePlayerId + ", action=" + __s5local1.action);
      __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.INVITATION);
    } else {
      __dep_exact_ba3768902da9162c.warn("Object with the invitation information missing!");
    }
  };
  return BasicInvitationTrackingCommand;
}(__dep_class_BasicTrackingCommand.BasicTrackingCommand);
exports.BasicInvitationTrackingCommand = __s0local0;
