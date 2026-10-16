Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleSiegeMessageDialog = require("gge-module:export_CastleSiegeMessageDialog");
var __dep_export_CastleSiegeMessageDialogProperties = require("gge-module:export_CastleSiegeMessageDialogProperties");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageConquerableAreaVO() {
    var __s3local0 = this;
    __s3local0._subtypeSiege = 0;
    __s3local0._areaType = 0;
    __s3local0._kingdomID = 0;
    __s3local0._ownerID = 0;
    __s3local0._attackerID = 0;
    __s3local0._attackerName = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageConquerableAreaVO, __s1param0);
  MessageConquerableAreaVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+");
    var __s5local1 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER)[1].split("+");
    this._areaType = parseInt(__s5local0[0]);
    if (__s5local0.length > 2) {
      this._subtypeSiege = parseInt(__s5local0[2]);
    } else {
      this._subtypeSiege = parseInt(__s5local0[1]);
    }
    this._kingdomID = parseInt(__s5local1[0]);
    this._ownerID = parseInt(__s5local1[1]);
    this._areaName = __s5local1[2];
    if (__s5local1.length > 3) {
      this._attackerID = parseInt(__s5local1[3]);
      this._attackerName = __s5local1[4];
    }
  };
  MessageConquerableAreaVO.prototype.parseSubject = function () {
    if (this.forwarded) {
      return this._senderName;
    }
    if (this.subtypeSiege == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_CONQUERABLE_AREA_LOST) {
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_OUTPOST) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_outpostLost");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAMP) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_factionCampLost");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolLost"));
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_capitalLost");
      }
    } else if (this.subtypeSiege == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_NEW_SIEGE) {
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_OUTPOST) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_outpostNewConquering");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolConquered"));
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_capitalConquered");
      }
    } else if (this.subtypeSiege == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_SIEGE_CANCELED) {
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_OUTPOST) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_siegeCancelledByPlayer");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAMP) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_siegeCancelledByPlayer");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolConquered"));
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_capitalConquered");
      }
    } else if (this.subtypeSiege == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_CONQUERABLE_AREA_CONQUERED) {
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_OUTPOST) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_outpostConquered");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAMP) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_factionCampConquered");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_VILLAGE) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_villageConquered");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_metropolConquered"));
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_capitalConquered");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_MONUMENT) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_monumentConquered");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_LABORATORY) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_laboratoryConquered");
      }
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_KINGS_TOWER) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_kingstowerConquered"));
      }
    }
    return "";
  };
  MessageConquerableAreaVO.prototype.parseSender = function () {
    if (this.areaName && this.areaName != "") {
      return this.areaName;
    } else {
      return __dep_export_PlayerHelper.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    }
  };
  Object.defineProperty(MessageConquerableAreaVO.prototype, "dialogInfo", {
    get: function () {
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_OUTPOST || this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL || this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL || this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAMP) {
        return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleSiegeMessageDialog.CastleSiegeMessageDialog, new __dep_export_CastleSiegeMessageDialogProperties.CastleSiegeMessageDialogProperties(this));
      } else {
        return null;
      }
    },
    set: function (__s44param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s44param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "subtypeSiege", {
    get: function () {
      return this._subtypeSiege;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "attackerID", {
    get: function () {
      return this._attackerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageConquerableAreaVO.prototype, "attackerName", {
    get: function () {
      return this._attackerName;
    },
    enumerable: true,
    configurable: true
  });
  return MessageConquerableAreaVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageConquerableAreaVO = __s0local0;
