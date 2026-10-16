Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleRelocateRuinDialogProperties = require("gge-module:export_CastleRelocateRuinDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageRuinInfoVO() {
    var __s3local0 = this;
    __s3local0.posX = 0;
    __s3local0.posY = 0;
    __s3local0.remainingRuinTime = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageRuinInfoVO, __s1param0);
  MessageRuinInfoVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this.posX = parseInt(__s5local0[0]);
    this.posY = parseInt(__s5local0[1]);
    this.remainingRuinTime = parseInt(__s5local0[2]);
  };
  MessageRuinInfoVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_relocateRuin_remainingRuinTime", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingRuinTime, __dep_exact_92d05af59ee2ff30.Localize.text)]);
  };
  MessageRuinInfoVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageRuinInfoVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleRelocateRuinDialog.CastleRelocateRuinDialog, new __dep_export_CastleRelocateRuinDialogProperties.CastleRelocateRuinDialogProperties(this.posX, this.posY, this.remainingRuinTime, false));
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return MessageRuinInfoVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageRuinInfoVO = __s0local0;
var __dep_export_CastleRelocateRuinDialog = require("gge-module:export_CastleRelocateRuinDialog");
