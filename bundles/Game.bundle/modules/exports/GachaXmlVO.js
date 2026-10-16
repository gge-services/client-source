Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function GachaXmlVO() {
    this._maxPulls = Number.MAX_VALUE;
  }
  GachaXmlVO.prototype.init = function (__s5param0) {
    this._gachaID = parseInt(__s5param0.gachaID || "0");
    this._eventID = parseInt(__s5param0.eventID || "0");
    this._rewardSetID = parseInt(__s5param0.rewardSetID || "0");
    this._tombolaSpinsAmount = parseInt(__s5param0.tombolaSpinsAmount || "0");
    this._gachaLevel = parseInt(__s5param0.gachaLevel || "0");
    this._minPulls = parseInt(__s5param0.minPulls || "0");
    this._maxPulls = parseInt(__s5param0.maxPulls || "0") || Number.MAX_VALUE;
    this._lootboxTombolaID = parseInt(__s5param0.lootBoxTombolaID || "0");
    this._multiPullMax = parseInt(__s5param0.multiPullMax || "0");
    this._leagueTypeIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("leagueTypeIDs", __s5param0);
    this._costs = __dep_export_CollectableManager.CollectableManager.parser.x2cEventPackages.createCostList(__s5param0);
    this._skinID = __s5param0.skinID || "";
  };
  Object.defineProperty(GachaXmlVO.prototype, "gachaID", {
    get: function () {
      return this._gachaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "rewardSetID", {
    get: function () {
      return this._rewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "tombolaSpinsAmount", {
    get: function () {
      return this._tombolaSpinsAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "gachaLevel", {
    get: function () {
      return this._gachaLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "minPulls", {
    get: function () {
      return this._minPulls;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "maxPulls", {
    get: function () {
      return this._maxPulls;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "lootboxTombolaID", {
    get: function () {
      return this._lootboxTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "multiPullMax", {
    get: function () {
      return this._multiPullMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "leagueTypeIDs", {
    get: function () {
      return this._leagueTypeIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  GachaXmlVO.prototype.getLootBoxTombolas = function () {
    return __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxTombolasByTombolaID(this.lootboxTombolaID);
  };
  Object.defineProperty(GachaXmlVO.prototype, "isMaxLevel", {
    get: function () {
      return this.maxPulls == Number.MAX_VALUE;
    },
    enumerable: true,
    configurable: true
  });
  return GachaXmlVO;
}();
exports.GachaXmlVO = __s0local0;
