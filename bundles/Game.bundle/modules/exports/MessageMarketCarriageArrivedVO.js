Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTradeMessageDialogProperties = require("gge-module:export_CastleTradeMessageDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageMarketCarriageArrivedVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageMarketCarriageArrivedVO, __s1param0);
  MessageMarketCarriageArrivedVO.prototype.parseMessageHeader = function (__s5param0) {
    this._areaName = __s5param0;
  };
  MessageMarketCarriageArrivedVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_tradeMessage_title");
  };
  MessageMarketCarriageArrivedVO.prototype.parseSender = function () {
    return this.areaName;
  };
  Object.defineProperty(MessageMarketCarriageArrivedVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleTradeMessageDialog.CastleTradeMessageDialog, new __dep_export_CastleTradeMessageDialogProperties.CastleTradeMessageDialogProperties(this));
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageMarketCarriageArrivedVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  return MessageMarketCarriageArrivedVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageMarketCarriageArrivedVO = __s0local0;
var __dep_export_CastleTradeMessageDialog = require("gge-module:export_CastleTradeMessageDialog");
