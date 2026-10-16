Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBookmarkPasserProperties = require("gge-module:export_CastleBookmarkPasserProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageAllianceBookmarkVO() {
    var __s3local0 = this;
    __s3local0._subtype = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageAllianceBookmarkVO, __s1param0);
  MessageAllianceBookmarkVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+");
    this._subtype = parseInt(__s5local0[0]);
  };
  MessageAllianceBookmarkVO.prototype.parseSubject = function () {
    if (this._subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_BOOKMARK_ADDED) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_bookmarks_attackMessage_header");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_bookmarks_attackCanceled_header");
    }
  };
  MessageAllianceBookmarkVO.prototype.parseSender = function () {
    return this._senderName;
  };
  Object.defineProperty(MessageAllianceBookmarkVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsAllianceBookmark";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceBookmarkVO.prototype, "dialogInfo", {
    get: function () {
      if (this._subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_BOOKMARK_ADDED) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(null, null, __dep_export_IngameClientCommands.IngameClientCommands.OPEN_ATTACK_ORDER, {
          mid: this.messageID
        });
      } else if (this._subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_BOOKMARK_DELETED) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAttackOrderCanceledDialog.CastleAttackOrderCanceledDialog, new __dep_export_CastleBookmarkPasserProperties.CastleBookmarkPasserProperties(null, null, this.messageID));
      } else {
        return null;
      }
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceBookmarkVO.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return MessageAllianceBookmarkVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageAllianceBookmarkVO = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleAttackOrderCanceledDialog = require("gge-module:export_CastleAttackOrderCanceledDialog");
