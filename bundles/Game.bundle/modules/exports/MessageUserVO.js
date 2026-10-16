Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleReadDialogProperties = require("gge-module:export_CastleReadDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageUserVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageUserVO, __s1param0);
  MessageUserVO.prototype.parseMessageHeader = function (__s5param0) {
    this._subject = __s5param0;
  };
  MessageUserVO.prototype.parseSubject = function () {
    var __s7local0 = this._subject;
    return __s7local0 = (__s7local0 = __s7local0.replace(/\r/g, " ")).replace(/\n/g, " ");
  };
  MessageUserVO.prototype.parseSender = function () {
    return this.senderName;
  };
  Object.defineProperty(MessageUserVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleReadDialog.CastleReadDialog, new __dep_export_CastleReadDialogProperties.CastleReadDialogProperties(this));
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageUserVO.prototype, "additionalIconName", {
    get: function () {
      if (this.messageType == __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER) {
        return "CastleMessageIconsAlliance";
      } else {
        return "";
      }
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageUserVO.prototype, "body", {
    get: function () {
      return this._body;
    },
    set: function (__s23param0) {
      this._body = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageUserVO.prototype, "ignoreAvailable", {
    get: function () {
      return this.messageType != __dep_exact_26a421b704832cff.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER;
    },
    enumerable: true,
    configurable: true
  });
  return MessageUserVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageUserVO = __s0local0;
var __dep_export_CastleReadDialog = require("gge-module:export_CastleReadDialog");
