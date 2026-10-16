Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function FacebookInteractionTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(FacebookInteractionTrackingEvent, __s1param0);
  FacebookInteractionTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      sender_player_id: this._senderPlayerId,
      sender_instance_id: this._senderInstanceId,
      sender_network_id: this._senderNetworkId,
      sender_game_id: this._senderGameId,
      sender_zone_id: this._senderZoneId,
      sender_level: this._senderLevel,
      state: this._stateId,
      sender_facebook_id: this._senderFacebookId,
      receiver_facebook_id: this._receiverFacebookId
    };
    if (this._receiverPlayerId !== 0) {
      __s5local0.receiver_player_id = this._receiverPlayerId;
    }
    if (this._receiverInstanceId !== 0) {
      __s5local0.receiver_instance_id = this._receiverInstanceId;
    }
    if (this._receiverNetworkId !== 0) {
      __s5local0.receiver_network_id = this._receiverNetworkId;
    }
    if (this._receiverGameId !== 0) {
      __s5local0.receiver_game_id = this._receiverGameId;
    }
    if (this._receiverZoneId !== 0) {
      __s5local0.receiver_zone_id = this._receiverZoneId;
    }
    if (this._receiverLevel !== 0) {
      __s5local0.receiver_level = this._receiverLevel;
    }
    if (this._openGraphObjectId) {
      __s5local0.open_graph_object_id = this._openGraphObjectId;
    }
    if (this._openGraphActionType) {
      __s5local0.open_graph_action_type = this._openGraphActionType;
    }
    return __s5local0;
  };
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderPlayerId", {
    set: function (__s15param0) {
      this._senderPlayerId = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderInstanceId", {
    set: function (__s17param0) {
      this._senderInstanceId = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderNetworkId", {
    set: function (__s19param0) {
      this._senderNetworkId = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderGameId", {
    set: function (__s21param0) {
      this._senderGameId = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderZoneId", {
    set: function (__s23param0) {
      this._senderZoneId = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderFacebookId", {
    set: function (__s25param0) {
      this._senderFacebookId = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderLevel", {
    set: function (__s27param0) {
      this._senderLevel = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverPlayerId", {
    set: function (__s29param0) {
      this._receiverPlayerId = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverInstanceId", {
    set: function (__s31param0) {
      this._receiverInstanceId = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverNetworkId", {
    set: function (__s33param0) {
      this._receiverNetworkId = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverGameId", {
    set: function (__s35param0) {
      this._receiverGameId = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverZoneId", {
    set: function (__s37param0) {
      this._receiverZoneId = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverFacebookId", {
    set: function (__s39param0) {
      this._receiverFacebookId = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverLevel", {
    set: function (__s41param0) {
      this._receiverLevel = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "stateId", {
    set: function (__s43param0) {
      this._stateId = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "openGraphObjectId", {
    set: function (__s45param0) {
      this._openGraphObjectId = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "openGraphActionType", {
    set: function (__s47param0) {
      this._openGraphActionType = __s47param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "playerId", {
    set: function (__s49param0) {
      this._playerId = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  return FacebookInteractionTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.FacebookInteractionTrackingEvent = __s0local0;
