Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function GeneralXmlVO(__s3param0 = null) {
    this._isNPCGeneral = false;
    this._isHiddenInOverview = false;
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  GeneralXmlVO.prototype.fillFromParamXml = function (__s6param0) {
    this._generalID = parseInt(__s6param0.generalID || "0");
    this._maxLevel = parseInt(__s6param0.maxLevel || "0");
    this._maxStarLevel = parseInt(__s6param0.maxStarLevel || "0");
    this._upgradeCurrencyIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.upgradeCurrencyIDs || "0", ",");
    this._attackSlots = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.attackSlots || "", ",");
    this._defenseSlots = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.defenseSlots || "", ",");
    this._generalRarityID = parseInt(__s6param0.generalRarityID || "2");
    this._unlockCurrencyID = parseInt(__s6param0.unlockCurrencyID || "0");
    this._isImplemented = parseInt(__s6param0.isPreview || "0") == 0;
    this._isNPCGeneral = parseInt(__s6param0.isNPCGeneral || "0") == 1;
    this._isHiddenInOverview = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isHiddenInOverview", __s6param0, "0", false)) == 1;
  };
  Object.defineProperty(GeneralXmlVO.prototype, "generalID", {
    get: function () {
      return this._generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "nameTextID", {
    get: function () {
      return "generals_characters_" + this._generalID + "_name";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "attackSlots", {
    get: function () {
      return this._attackSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "defenseSlots", {
    get: function () {
      return this._defenseSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "maxStarLevel", {
    get: function () {
      return this._maxStarLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "upgradeCurrencyIDs", {
    get: function () {
      return this._upgradeCurrencyIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "generalRarityID", {
    get: function () {
      return this._generalRarityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "unlockCurrencyID", {
    get: function () {
      return this._unlockCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "rarityString", {
    get: function () {
      return this.rarity.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "rarity", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData.getGeneralRarityByID(this.generalRarityID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "isImplemented", {
    get: function () {
      return this._isImplemented;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "isNPCGeneral", {
    get: function () {
      return this._isNPCGeneral;
    },
    enumerable: true,
    configurable: true
  });
  GeneralXmlVO.prototype.initAsPreview = function (__s34param0) {
    this._generalID = __s34param0;
    this._isImplemented = false;
  };
  Object.defineProperty(GeneralXmlVO.prototype, "isHiddenInOverview", {
    get: function () {
      return this._isHiddenInOverview;
    },
    enumerable: true,
    configurable: true
  });
  GeneralXmlVO.prototype.initAsNPC = function (__s38param0, __s38param1 = true) {
    this._generalID = __s38param0;
    this._isImplemented = __s38param1;
    this._isNPCGeneral = true;
    this._generalRarityID = 4;
  };
  Object.defineProperty(GeneralXmlVO.prototype, "attackSlotXMLVOs", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData.getGeneralSlotsByIDs(this._attackSlots);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "defenceSlotXMLVOs", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData.getGeneralSlotsByIDs(this._defenseSlots);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralXmlVO;
}();
exports.GeneralXmlVO = __s0local0;
