Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleAllianceInvitationDialogProperties = require("gge-module:export_CastleAllianceInvitationDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageAllianceRequestVO() {
    var __s3local0 = this;
    __s3local0.allianceID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageAllianceRequestVO, __s1param0);
  MessageAllianceRequestVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    this.allianceID = parseInt(__s5local0[0]);
    this.allianceName = __s5local0[1];
  };
  MessageAllianceRequestVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_invitationHeader");
  };
  MessageAllianceRequestVO.prototype.parseSender = function () {
    return this.allianceName;
  };
  Object.defineProperty(MessageAllianceRequestVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAllianceInvitationDialog.CastleAllianceInvitationDialog, new __dep_export_CastleAllianceInvitationDialogProperties.CastleAllianceInvitationDialogProperties(this));
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return MessageAllianceRequestVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageAllianceRequestVO = __s0local0;
var __dep_export_CastleAllianceInvitationDialog = require("gge-module:export_CastleAllianceInvitationDialog");
