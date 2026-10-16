Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleBattleLogDialogProperties = require("gge-module:export_CastleBattleLogDialogProperties");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageBattleLogVO() {
    var __s3local0 = this;
    __s3local0._subtypeAttack = 0;
    __s3local0._subtypeResult = 0;
    __s3local0._areaType = 0;
    __s3local0._optionalTMapID = -1;
    __s3local0._optionalTMapAreaType = -1;
    __s3local0._kingdomID = 0;
    __s3local0._ownerID = 0;
    __s3local0._areaName = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageBattleLogVO, __s1param0);
  MessageBattleLogVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split(__dep_exact_26a421b704832cff.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var __s5local1 = __s5local0[0].split("+");
    var __s5local2 = __s5local0[1].split("+");
    this._areaType = parseInt(__s5local1[0]);
    this._subtypeAttack = parseInt(__s5local1[1]);
    this._subtypeResult = parseInt(__s5local1[2]);
    if (__s5local1.length > 3) {
      this._optionalTMapID = parseInt(__s5local1[3]);
      if (__s5local1.length > 4) {
        this._optionalTMapAreaType = parseInt(__s5local1[4]);
      }
    }
    this._kingdomID = parseInt(__s5local2[0]);
    this._ownerID = parseInt(__s5local2[1]);
    if (__s5local2.length > 2) {
      this._areaName = __s5local2[2];
    }
  };
  MessageBattleLogVO.prototype.parseSubject = function () {
    if (this.forwarded) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_forwardlog_message", [__dep_exact_92d05af59ee2ff30.Localize.text("battlelog")]);
    }
    if (this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_NORMAL) {
        if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_villageConquered");
        } else if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_islandConquered");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("attack") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_victory");
        }
      }
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_CONQUER) {
        if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_VILLAGE || this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_VILLAGE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_villageConquered");
        } else if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_islandConquered");
        } else if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_KINGS_TOWER) {
          return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_kingstowerConquered"));
        } else if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_MONUMENT) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_monumentConquered");
        } else if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_LABORATORY) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_laboratoryConquered");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_conquerVictory");
        }
      }
    } else if (this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACKER_FAILED) {
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_NORMAL) {
        if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_conquerLost");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("attack") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_defeat");
        }
      }
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_CONQUER) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_conquerLost");
      }
    } else if (this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_NORMAL) {
        if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_VILLAGE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_conquerVictimVictory");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_defence") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_victory");
        }
      }
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_NPC) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_raid") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_victory");
      }
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_CONQUER) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_conquerVictimVictory");
      }
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_OCCUPY) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_conquerLost");
      }
    } else if (this.subtypeResult == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_DEFENDER_FAILED) {
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_NORMAL) {
        if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_VILLAGE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_villageLost");
        } else if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_islandLost");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_defence") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_defeat");
        }
      }
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_NPC) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_raid") + ": " + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_defeat");
      }
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_CONQUER) {
        if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_KINGS_TOWER) {
          return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_messageHeader_kingstowerLost"));
        } else if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_MONUMENT) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_monumentLost");
        } else if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_LABORATORY) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_laboratoryLost");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_conquerVictimLost");
        }
      }
      if (this.subtypeAttack == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_ATTACK_OCCUPY) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_battleLog_conquerVictimVictory");
      }
    }
    return "";
  };
  MessageBattleLogVO.prototype.parseSender = function () {
    if (this.forwarded) {
      return this._senderName;
    } else if (this.areaName != "") {
      if (this.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("allianceTower_placeholder_Maya", [this.areaName]);
      } else {
        return this.areaName;
      }
    } else if (this._optionalTMapAreaType == __dep_exact_26a421b704832cff.MessageConst.SUBTYPE_TREASUREMAP_ENDNODE) {
      if (__dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this._optionalTMapID)) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_4_FinalCastle");
      } else if (__dep_export_TMapHelper.TMapHelper.isThornKingMap(this._optionalTMapID)) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_FinalCastle");
      } else if (__dep_export_TMapHelper.TMapHelper.isUnderworldMap(this._optionalTMapID)) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_64_FinalCastle");
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_TreasureTooltip");
      }
    } else {
      return __dep_export_PlayerHelper.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    }
  };
  Object.defineProperty(MessageBattleLogVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleBattleLogMessageAdvanced.CastleBattleLogMessageAdvanced, new __dep_export_CastleBattleLogDialogProperties.CastleBattleLogDialogProperties(this.messageID, true, this.forwarded, this.senderName, this._areaType));
    },
    set: function (__s63param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s63param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "subtypeAttack", {
    get: function () {
      return this._subtypeAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "subtypeResult", {
    get: function () {
      return this._subtypeResult;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "optionalTMapID", {
    get: function () {
      return this._optionalTMapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "optionalTMapAreaType", {
    get: function () {
      return this._optionalTMapAreaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageBattleLogVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  return MessageBattleLogVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageBattleLogVO = __s0local0;
var __dep_export_CastleBattleLogMessageAdvanced = require("gge-module:export_CastleBattleLogMessageAdvanced");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
