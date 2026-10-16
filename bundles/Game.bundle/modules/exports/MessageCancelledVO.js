Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleNoFightMessageDialogProperties = require("gge-module:export_CastleNoFightMessageDialogProperties");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageCancelledVO() {
    var __s3local0 = this;
    __s3local0._subtypeAttackCancelled = 0;
    __s3local0._kingdomID = 0;
    __s3local0._ownerID = 0;
    __s3local0._posX = 0;
    __s3local0._posY = 0;
    __s3local0._areaType = -1;
    __s3local0._reason = -1;
    __s3local0._autoSkipType = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageCancelledVO, __s1param0);
  MessageCancelledVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    this._subtypeAttackCancelled = parseInt(__s5local0[0]);
    this._kingdomID = parseInt(__s5local0[1]);
    this._ownerID = parseInt(__s5local0[2]);
    this._areaName = __s5local0[3];
    this._posX = parseInt(__s5local0[4]);
    this._posY = parseInt(__s5local0[5]);
    if (__s5local0.length > 5) {
      this._areaType = parseInt(__s5local0[6]);
      this._reason = parseInt(__s5local0[7]);
      if (__s5local0.length > 7) {
        this._autoSkipType = parseInt(__s5local0[8]);
      }
    }
  };
  MessageCancelledVO.prototype.parseSender = function () {
    if (this.areaName && this.areaName != "") {
      return this.areaName;
    }
    var __s9local0 = __dep_export_PlayerHelper.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    if ((!__s9local0 || __s9local0 == "") && !!this._posX && !!this._posY) {
      __s9local0 = this._posX + ":" + this._posY;
    }
    return __s9local0;
  };
  Object.defineProperty(MessageCancelledVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleNoFightMessageDialog.CastleNoFightMessageDialog, new __dep_export_CastleNoFightMessageDialogProperties.CastleNoFightMessageDialogProperties(this));
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "subtypeAttackCancelled", {
    get: function () {
      return this._subtypeAttackCancelled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "posX", {
    get: function () {
      return this._posX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "posY", {
    get: function () {
      return this._posY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "reason", {
    get: function () {
      return this._reason;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "autoSkipType", {
    get: function () {
      return this._autoSkipType;
    },
    enumerable: true,
    configurable: true
  });
  return MessageCancelledVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageCancelledVO = __s0local0;
var __dep_export_CastleNoFightMessageDialog = require("gge-module:export_CastleNoFightMessageDialog");
