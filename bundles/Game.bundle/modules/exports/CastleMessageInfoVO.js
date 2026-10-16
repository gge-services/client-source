Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleMessageInfoDialogProperties = require("gge-module:export_CastleMessageInfoDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function CastleMessageInfoVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMessageInfoVO, __s1param0);
  CastleMessageInfoVO.prototype.parseMessageHeader = function (__s5param0) {
    this._infoId = __s5param0;
  };
  CastleMessageInfoVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_info_message_title_" + this._infoId);
  };
  CastleMessageInfoVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(CastleMessageInfoVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleMessageInfoDialog.CastleMessageInfoDialog, new __dep_export_CastleMessageInfoDialogProperties.CastleMessageInfoDialogProperties(this._infoId));
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageInfoVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.CastleMessageInfoVO = __s0local0;
var __dep_export_CastleMessageInfoDialog = require("gge-module:export_CastleMessageInfoDialog");
