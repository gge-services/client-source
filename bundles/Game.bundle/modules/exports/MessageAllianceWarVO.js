Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleAllianceWarPeaceMessageDialogProperties = require("gge-module:export_CastleAllianceWarPeaceMessageDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageAllianceWarVO() {
    var __s3local0 = this;
    __s3local0._subtypeAllianceWar = 0;
    __s3local0._alliedMemberOrAllianceID = 0;
    __s3local0._enemyAllianceID = 0;
    __s3local0._enemyPeaceOfferEndTimeStamp = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageAllianceWarVO, __s1param0);
  MessageAllianceWarVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("*");
    this._subtypeAllianceWar = parseInt(__s5local0[0]);
    this._alliedMemberOrAllianceID = parseInt(__s5local0[1]);
    this._alliedMemberOrAllianceName = __s5local0[2];
    this._enemyAllianceID = parseInt(__s5local0[3]);
    this._enemyAllianceName = __s5local0[4];
    if (this.subtypeAllianceWar == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ALLIANCE_ENEMY_END_WAR && __s5local0.length > 5) {
      this._enemyPeaceOfferEndTimeStamp = parseFloat(__s5local0[5]);
    }
  };
  MessageAllianceWarVO.prototype.parseSubject = function () {
    if (this._subtypeAllianceWar == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ALLIANCE_ENEMY_END_WAR) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_allianceDiplomacy_peaceOffer_title");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("message_autoWar_subject");
    }
  };
  MessageAllianceWarVO.prototype.parseSender = function () {
    return this._enemyAllianceName;
  };
  Object.defineProperty(MessageAllianceWarVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleAllianceWarPeaceMessageDialog.CastleAllianceWarPeaceMessageDialog, new __dep_export_CastleAllianceWarPeaceMessageDialogProperties.CastleAllianceWarPeaceMessageDialogProperties(this));
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsAutowar";
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "additionalIconName").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "subtypeAllianceWar", {
    get: function () {
      return this._subtypeAllianceWar;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "alliedMemberOrAllianceID", {
    get: function () {
      return this._alliedMemberOrAllianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "alliedMemberOrAllianceName", {
    get: function () {
      return this._alliedMemberOrAllianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "enemyAllianceID", {
    get: function () {
      return this._enemyAllianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "enemyAllianceName", {
    get: function () {
      return this._enemyAllianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceWarVO.prototype, "enemyPeaceOfferEndTimeStamp", {
    get: function () {
      return this._enemyPeaceOfferEndTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  return MessageAllianceWarVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageAllianceWarVO = __s0local0;
var __dep_export_CastleAllianceWarPeaceMessageDialog = require("gge-module:export_CastleAllianceWarPeaceMessageDialog");
