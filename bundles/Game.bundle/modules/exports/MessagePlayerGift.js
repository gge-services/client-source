Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastlePlayerGiftMessageProperties = require("gge-module:export_CastlePlayerGiftMessageProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessagePlayerGift() {
    var __s3local0 = this;
    __s3local0.packID = 0;
    __s3local0.sendersID = 0;
    __s3local0.pAmount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessagePlayerGift, __s1param0);
  MessagePlayerGift.prototype.parseMessageHeader = function (__s5param0) {
    this.sendersID = parseInt(__s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+")[0]);
    this.sendersName = String(__s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[1].split("+"));
    this.packID = parseInt(__s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[2].split("+")[0]);
    this.pAmount = parseInt(__s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[3].split("+")[0]);
  };
  MessagePlayerGift.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("message_header_giftTrader_obtainedGift");
  };
  MessagePlayerGift.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessagePlayerGift.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastlePlayerGiftMessageDialog.CastlePlayerGiftMessageDialog, new __dep_export_CastlePlayerGiftMessageProperties.CastlePlayerGiftMessageProperties(this));
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return MessagePlayerGift;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessagePlayerGift = __s0local0;
var __dep_export_CastlePlayerGiftMessageDialog = require("gge-module:export_CastlePlayerGiftMessageDialog");
