Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function MessageAttackTheasholdVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageAttackTheasholdVO, __s1param0);
  MessageAttackTheasholdVO.prototype.parseMessageHeader = function (__s5param0) {};
  MessageAttackTheasholdVO.prototype.parseSubject = function () {
    this._subject = __dep_exact_92d05af59ee2ff30.Localize.text("title_attack_threshold");
    return this._subject;
  };
  MessageAttackTheasholdVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageAttackTheasholdVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("title_attack_threshold"), __dep_exact_92d05af59ee2ff30.Localize.text("info_attack_threshold")));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAttackTheasholdVO.prototype, "additionalIconName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return MessageAttackTheasholdVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageAttackTheasholdVO = __s0local0;
