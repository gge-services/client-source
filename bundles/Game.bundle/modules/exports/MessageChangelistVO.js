Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageChangelistVO() {
    var __s3local0 = this;
    __s3local0._teaserId = 0;
    __s3local0._patchNoteId = 0;
    __s3local0._collected = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._collected = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageChangelistVO, __s1param0);
  MessageChangelistVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    this._teaserId = parseInt(__s5local0[0]);
    this._patchNoteId = parseInt(__s5local0[1]);
    this._collected = parseInt(__s5local0[2]) == 1;
    if (this._patchNoteId > MessageChangelistVO.currentPatchNoteID) {
      MessageChangelistVO.currentPatchNoteID = this._patchNoteId;
    }
  };
  MessageChangelistVO.prototype.parseSubject = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_changelist_mailHeader");
  };
  MessageChangelistVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageChangelistVO.prototype, "additionalIconName", {
    get: function () {
      if (!this.collected && this.isCurrentChangelist()) {
        return "CastleMessageIconsChangelist";
      } else {
        return "";
      }
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageChangelistVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleChangelistDialog.CastleChangelistDialog, new __dep_export_CastleChangelistDialogProperties.CastleChangelistDialogProperties(this));
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  MessageChangelistVO.prototype.isCurrentChangelist = function () {
    return MessageChangelistVO.currentPatchNoteID == this._patchNoteId;
  };
  MessageChangelistVO.prototype.canBeDeleted = function () {
    return this.collected || !this.isCurrentChangelist();
  };
  Object.defineProperty(MessageChangelistVO.prototype, "teaserId", {
    get: function () {
      return this._teaserId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageChangelistVO.prototype, "patchNoteId", {
    get: function () {
      return this._patchNoteId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageChangelistVO.prototype, "collected", {
    get: function () {
      return this._collected;
    },
    set: function (__s32param0) {
      this._collected = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  MessageChangelistVO.prototype.canBeArchived = function () {
    return false;
  };
  MessageChangelistVO.__initialize_static_members = function () {
    MessageChangelistVO.currentPatchNoteID = 0;
  };
  return MessageChangelistVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageChangelistVO = __s0local0;
var __dep_export_CastleChangelistDialog = require("gge-module:export_CastleChangelistDialog");
var __dep_export_CastleChangelistDialogProperties = require("gge-module:export_CastleChangelistDialogProperties");
__s0local0.__initialize_static_members();
