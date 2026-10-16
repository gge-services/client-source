Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicTrackingEvent = require("gge-module:class_BasicTrackingEvent");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __s0local0 = function (__s1param0) {
  function InvitationTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(InvitationTrackingEvent, __s1param0);
  InvitationTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      eventId: __dep_export_AllianceCreate.Invitation.ID,
      action: this._action,
      sender_game_id: this._senderGameId,
      sender_instance_id: this._senderInstanceId,
      sender_network_id: this._senderNetworkId,
      sender_player_id: this._senderPlayerId
    };
    if (this._senderLevel == 0) {
      __s5local0.sender_level = this._senderLevel;
    }
    if (this._receiverGameId != 0) {
      __s5local0.receiver_game_id = this._receiverGameId;
    }
    if (this._receiverNetworkId != 0) {
      __s5local0.receiver_network_id = this._receiverNetworkId;
    }
    if (this._receiverInstanceId != 0) {
      __s5local0.receiver_instance_id = this._receiverInstanceId;
    }
    if (this._receiverPlayerId != 0) {
      __s5local0.receiver_player_id = this._receiverPlayerId;
    }
    if (this._referMethod) {
      __s5local0.refer_method = this._referMethod;
    }
    if (this._trigger) {
      __s5local0.trigger = this._trigger;
    }
    if (this._senderExternalId) {
      __s5local0.external_inviter_id = this._senderExternalId;
    }
    if (this._receiverExternalId) {
      __s5local0.external_invited_id = this._receiverExternalId;
    }
    return __s5local0;
  };
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderGameId", {
    set: function (__s16param0) {
      this._senderGameId = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderNetworkId", {
    set: function (__s18param0) {
      this._senderNetworkId = __s18param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderInstanceId", {
    set: function (__s20param0) {
      this._senderInstanceId = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderPlayerId", {
    set: function (__s22param0) {
      this._senderPlayerId = __s22param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverGameId", {
    set: function (__s24param0) {
      this._receiverGameId = __s24param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverNetworkId", {
    set: function (__s26param0) {
      this._receiverNetworkId = __s26param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverInstanceId", {
    set: function (__s28param0) {
      this._receiverInstanceId = __s28param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverPlayerId", {
    set: function (__s30param0) {
      this._receiverPlayerId = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderExternalId", {
    set: function (__s32param0) {
      this._senderExternalId = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverExternalId", {
    set: function (__s34param0) {
      this._receiverExternalId = __s34param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderLevel", {
    set: function (__s36param0) {
      this._senderLevel = __s36param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "action", {
    set: function (__s38param0) {
      this._action = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "referMethod", {
    set: function (__s40param0) {
      this._referMethod = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "trigger", {
    set: function (__s42param0) {
      this._trigger = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "playerId", {
    set: function (__s44param0) {
      this._playerId = __s44param0;
    },
    enumerable: true,
    configurable: true
  });
  return InvitationTrackingEvent;
}(__dep_class_BasicTrackingEvent.BasicTrackingEvent);
exports.InvitationTrackingEvent = __s0local0;
