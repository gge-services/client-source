Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageHighscoreBonusVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageHighscoreBonusVO, __s1param0);
  MessageHighscoreBonusVO.prototype.parseMessageHeader = function (__s5param0) {};
  MessageHighscoreBonusVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_rankreward_message_title");
  };
  MessageHighscoreBonusVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageHighscoreBonusVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleWeeklyHighscoreRewardReadyMessage.CastleWeeklyHighscoreRewardReadyMessage);
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return MessageHighscoreBonusVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageHighscoreBonusVO = __s0local0;
var __dep_export_CastleWeeklyHighscoreRewardReadyMessage = require("gge-module:export_CastleWeeklyHighscoreRewardReadyMessage");
