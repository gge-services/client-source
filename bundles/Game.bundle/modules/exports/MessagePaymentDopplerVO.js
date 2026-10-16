Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessagePaymentDopplerVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessagePaymentDopplerVO, __s1param0);
  MessagePaymentDopplerVO.prototype.parseMessageHeader = function (__s5param0) {};
  MessagePaymentDopplerVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_paymentdoubler_title");
  };
  MessagePaymentDopplerVO.prototype.parseSender = function () {
    if (this.senderName != "") {
      return this.senderName;
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("system");
    }
  };
  Object.defineProperty(MessagePaymentDopplerVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastlePaymentDopplerMessageDialog.CastlePaymentDopplerMessageDialog);
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  return MessagePaymentDopplerVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessagePaymentDopplerVO = __s0local0;
var __dep_export_CastlePaymentDopplerMessageDialog = require("gge-module:export_CastlePaymentDopplerMessageDialog");
