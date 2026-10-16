Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleEilandTitleMessageDialogProperties = require("gge-module:export_CastleEilandTitleMessageDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __dep_export_CastleEilandTitleAssignedMessageDialog = require("gge-module:export_CastleEilandTitleAssignedMessageDialog");
var __dep_export_CastleEilandTitleLostMessageDialog = require("gge-module:export_CastleEilandTitleLostMessageDialog");
var __dep_export_CastleEilandTitleNewKingMessageDialog = require("gge-module:export_CastleEilandTitleNewKingMessageDialog");
var __dep_export_CastleStormIslandsTitleLostDialog = require("gge-module:export_CastleStormIslandsTitleLostDialog");
var __dep_export_CastleStormIslandsTitleLostDialogProperties = require("gge-module:export_CastleStormIslandsTitleLostDialogProperties");
var __s0local0 = function (__s1param0) {
  function MessageEilandTitleVO() {
    var __s3local0 = this;
    __s3local0._subtype = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageEilandTitleVO, __s1param0);
  MessageEilandTitleVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this._subtype = parseInt(__s5local0[0]);
    if (__s5local0.length > 1) {
      this._titleID = parseInt(__s5local0[1]);
      this._isWinningAlliance = parseInt(__s5local0[2]) > 0;
    }
  };
  MessageEilandTitleVO.prototype.parseSubject = function () {
    if (this._subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_TITLE_ASSIGNED) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_eiland_titleMessage_gainedGoodTitle_header");
    } else if (this._subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_TITLE_LOST) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_eiland_titleMessage_lostTitle_header");
    } else if (this._subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_NEW_KING) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_eiland_titleMessage_newLeft");
    } else if (this._subtype == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_LOST_TITLE_ON_RESET) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_island_stormTitle_titleLost_header");
    } else {
      return "";
    }
  };
  MessageEilandTitleVO.prototype.parseSender = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("system");
  };
  Object.defineProperty(MessageEilandTitleVO.prototype, "dialogInfo", {
    get: function () {
      switch (this.subtype) {
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_TITLE_ASSIGNED:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleEilandTitleAssignedMessageDialog.CastleEilandTitleAssignedMessageDialog, new __dep_export_CastleEilandTitleMessageDialogProperties.CastleEilandTitleMessageDialogProperties(this));
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_TITLE_LOST:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleEilandTitleLostMessageDialog.CastleEilandTitleLostMessageDialog, new __dep_export_CastleEilandTitleMessageDialogProperties.CastleEilandTitleMessageDialogProperties(this));
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_NEW_KING:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleEilandTitleNewKingMessageDialog.CastleEilandTitleNewKingMessageDialog, new __dep_export_CastleEilandTitleMessageDialogProperties.CastleEilandTitleMessageDialogProperties(this));
        case __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_LOST_TITLE_ON_RESET:
          return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleStormIslandsTitleLostDialog.CastleStormIslandsTitleLostDialog, new __dep_export_CastleStormIslandsTitleLostDialogProperties.CastleStormIslandsTitleLostDialogProperties(this));
      }
      return null;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandTitleVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsEiland";
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandTitleVO.prototype, "subtype", {
    get: function () {
      return this._subtype;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandTitleVO.prototype, "titleID", {
    get: function () {
      return this._titleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandTitleVO.prototype, "isWinningAlliance", {
    get: function () {
      return this._isWinningAlliance;
    },
    enumerable: true,
    configurable: true
  });
  return MessageEilandTitleVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageEilandTitleVO = __s0local0;
