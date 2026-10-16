Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableItemBeefVO = require("gge-module:export_CollectableItemBeefVO");
var __dep_export_CastleDesertedTroopsDialogProperties = require("gge-module:export_CastleDesertedTroopsDialogProperties");
var __dep_export_DialogInfoVO = require("gge-module:export_DialogInfoVO");
var __dep_export_AMessageVO = require("gge-module:export_AMessageVO");
var __s0local0 = function (__s1param0) {
  function MessageStarveInfoVO() {
    var __s3local0 = this;
    __s3local0._dieCount = 0;
    __s3local0._kingdomID = -1;
    __s3local0._areaID = -1;
    __s3local0._areaType = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageStarveInfoVO, __s1param0);
  MessageStarveInfoVO.prototype.parseMessageHeader = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    this._dieCount = parseInt(__s5local0[0]);
    if (__s5local0.length > 1) {
      this._areaName = __s5local0[1];
    }
    if (__s5local0.length > 2) {
      this._kingdomID = __dep_exact_f855840627e6e145.int(__s5local0[2]);
      this._areaID = __dep_exact_f855840627e6e145.int(__s5local0[3]);
    }
    this._areaType = __dep_exact_f855840627e6e145.int(__s5local0[4]);
    this._resourceKey = __s5local0[5];
  };
  MessageStarveInfoVO.prototype.parseSubject = function () {
    if (this.areaType > -1) {
      if (this.kingdomID != -1 || this.areaID != -1) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_desertedTroops_title");
      }
      switch (this.areaType) {
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_VILLAGE:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_villageLost");
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ISLE_RESOURCE:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_islandLost");
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_monumentLost");
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_LABORATORY:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_laboratoryLost");
        case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_KINGS_TOWER:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_kingstowerLost");
        default:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_desertedTroops_title");
      }
    } else {
      switch (this.messageType) {
        case __dep_exact_26a421b704832cff_1.MessageConst.MESSAGE_TYPE_STARVE_INFO:
          return __dep_exact_92d05af59ee2ff30.Localize.text(this.isBeef ? "message_header_desertedTroops_beefUnits_title" : this.isMead ? "message_header_desertedTroops_meadUnits_title" : "dialog_desertedTroops_title");
        case __dep_exact_26a421b704832cff_1.MessageConst.MESSAGE_TYPE_STARVE_VILLAGE_LOST:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_villageLost");
        case __dep_exact_26a421b704832cff_1.MessageConst.MESSAGE_TYPE_STARVE_ISLE_RESOURCE_LOST:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_messageHeader_islandLost");
        default:
          return __dep_exact_92d05af59ee2ff30.Localize.text(this.isBeef ? "message_header_desertedTroops_beefUnits_title" : this.isMead ? "message_header_desertedTroops_meadUnits_title" : "dialog_desertedTroops_title");
      }
    }
  };
  MessageStarveInfoVO.prototype.parseSender = function () {
    if (parseInt(this.areaName) == __dep_exact_26a421b704832cff.EventConst.EVENTCAMP_AREA_ID) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_Camp");
    } else {
      return this.areaName;
    }
  };
  Object.defineProperty(MessageStarveInfoVO.prototype, "dialogInfo", {
    get: function () {
      return new __dep_export_DialogInfoVO.DialogInfoVO(__dep_export_CastleDesertedTroopsDialog.CastleDesertedTroopsDialog, new __dep_export_CastleDesertedTroopsDialogProperties.CastleDesertedTroopsDialogProperties(this));
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMessageVO.AMessageVO.prototype, "dialogInfo").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "dieCount", {
    get: function () {
      return this._dieCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "resourceKey", {
    get: function () {
      return this._resourceKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "areaID", {
    get: function () {
      return this._areaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "isMead", {
    get: function () {
      return this.resourceKey == __dep_export_CollectableItemMeadVO.CollectableItemMeadVO.SERVER_KEY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageStarveInfoVO.prototype, "isBeef", {
    get: function () {
      return this.resourceKey == __dep_export_CollectableItemBeefVO.CollectableItemBeefVO.SERVER_KEY;
    },
    enumerable: true,
    configurable: true
  });
  return MessageStarveInfoVO;
}(__dep_export_AMessageVO.AMessageVO);
exports.MessageStarveInfoVO = __s0local0;
var __dep_export_CastleDesertedTroopsDialog = require("gge-module:export_CastleDesertedTroopsDialog");
var __dep_export_CollectableItemMeadVO = require("gge-module:export_CollectableItemMeadVO");
