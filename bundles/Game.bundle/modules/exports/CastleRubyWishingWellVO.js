Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleRubyWishingWellVO() {
    this._id = 0;
    this._wodId = 0;
    this._entryCosts = 0;
    this._costStone = 0;
    this._costWood = 0;
    this._neededWishingWellCoins = 0;
    this._waitingTime = 0;
    this._upgradeWodID = 0;
    this._downgradeWodID = 0;
  }
  CastleRubyWishingWellVO.prototype.parseXML = function (__s5param0) {
    this._id = parseInt(__s5param0.level || "");
    this._wodId = parseInt(__s5param0.wodID || "");
    this._entryCosts = parseInt(__s5param0.entryCosts || "");
    this._costStone = parseInt(__s5param0.costStone || "");
    this._costWood = parseInt(__s5param0.costWood || "");
    this._neededWishingWellCoins = parseInt(__s5param0.costWishingWellCoin || "");
    this._waitingTime = parseInt(__s5param0.waitingTime || "");
    this._upgradeWodID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("upgradeWodID", __s5param0, "-1"));
    this._downgradeWodID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("downgradeWodID", __s5param0, "-1"));
  };
  CastleRubyWishingWellVO.prototype.getId = function () {
    return this._id;
  };
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "entryCosts", {
    get: function () {
      return this._entryCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "costStone", {
    get: function () {
      return this._costStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "costWood", {
    get: function () {
      return this._costWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "neededWishingWellCoins", {
    get: function () {
      return this._neededWishingWellCoins;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "waitingTime", {
    get: function () {
      return this._waitingTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "upgradeWodID", {
    get: function () {
      return this._upgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "downgradeWodID", {
    get: function () {
      return this._downgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRubyWishingWellVO;
}();
exports.CastleRubyWishingWellVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleXmlNode");
