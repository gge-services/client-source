Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleChatEvent = require("gge-module:export_CastleChatEvent");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ChatMessageVO = require("gge-module:export_ChatMessageVO");
var __s0local0 = function (__s1param0) {
  function CastleChatData() {
    var __s3local0 = this;
    __s3local0._allianceMessages = [];
    __s3local0._isBigAllianceChatOpen = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChatData, __s1param0);
  CastleChatData.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._allianceMessages = [];
    this._isBigAllianceChatOpen = false;
  };
  CastleChatData.prototype.parseSingleMessage = function (__s7param0) {
    var __s7local0 = this.getParsedMessage(__s7param0);
    this._allianceMessages.push(__s7local0);
    if (__s7local0.playerID >= 0) {
      var __s7local1 = __dep_export_CastleModel.CastleModel.allianceData.getAllianceInfoVOByID(__dep_export_CastleModel.CastleModel.userData.allianceID);
      if (__s7local1) {
        var __s7local2 = __s7local1.getAdditionalMemberInfos(__s7local0.playerID);
        if (__s7local2) {
          __s7local2.loginActivity = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.ONLINESTATE_ONLINE);
        }
      }
    }
    this.dispatchEvent(new __dep_export_CastleChatEvent.CastleChatEvent(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED));
  };
  CastleChatData.prototype.parseHistory = function (__s12param0) {
    if (__s12param0) {
      for (var __s12local0 = 0, __s12local1 = __s12param0.CM; __s12local0 < __s12local1.length; __s12local0++) {
        var __s12local2 = __s12local1[__s12local0];
        if (__s12local2 !== undefined) {
          this._allianceMessages.push(this.getParsedMessage(__s12local2));
        }
      }
      this.dispatchEvent(new __dep_export_CastleChatEvent.CastleChatEvent(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED));
    }
  };
  CastleChatData.prototype.resetHistory = function () {
    this._allianceMessages = [];
    this.dispatchEvent(new __dep_export_CastleChatEvent.CastleChatEvent(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED));
  };
  CastleChatData.prototype.getParsedMessage = function (__s20param0) {
    var __s20local0 = new __dep_export_ChatMessageVO.ChatMessageVO();
    __s20local0.parseObj(__s20param0);
    return __s20local0;
  };
  CastleChatData.prototype.getLastAllianceMessage = function () {
    if (this._allianceMessages.length <= 0) {
      return null;
    } else {
      return this._allianceMessages[this._allianceMessages.length - 1];
    }
  };
  Object.defineProperty(CastleChatData.prototype, "allianceMessages", {
    get: function () {
      return this._allianceMessages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChatData.prototype, "isBigAllianceChatOpen", {
    get: function () {
      return this._isBigAllianceChatOpen;
    },
    set: function (__s30param0) {
      this.dispatchEvent(new __dep_export_CastleChatEvent.CastleChatEvent(__dep_export_CastleChatEvent.CastleChatEvent.OPEN_CHAT));
      this._isBigAllianceChatOpen = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleChatData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleChatData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
