Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function KingdomVillagesInfoVO() {
    this._kID = 0;
    this._wallWodId = 0;
    this._gateWodId = 0;
    this._keepWodId = 0;
    this._moatWodId = 0;
    this._unitWallCount = 0;
    this._peasants = 0;
    this._guards = 0;
    this._productivityWoodBoost = 0;
    this._productivityStoneBoost = 0;
    this._productivityFoodBoost = 0;
    this._productivityCoalBoost = 0;
    this._productivityOilBoost = 0;
    this._productivityGlassBoost = 0;
    this._productivityIronBoost = 0;
  }
  KingdomVillagesInfoVO.prototype.fillFromParamXML = function (__s5param0) {
    this._kID = parseInt(__s5param0.kID || "");
    this._wallWodId = parseInt(__s5param0.wallWodId || "");
    this._gateWodId = parseInt(__s5param0.gateWodId || "");
    this._keepWodId = parseInt(__s5param0.keepWodId || "");
    this._moatWodId = parseInt(__s5param0.moatWodId || "");
    this._unitWallCount = parseInt(__s5param0.unitWallCount || "");
    this._peasants = parseInt(__s5param0.peasants || "");
    this._guards = parseInt(__s5param0.guards || "");
    this._productivityWoodBoost = parseInt(__s5param0.productivityWoodBoost || "");
    this._productivityStoneBoost = parseInt(__s5param0.productivityStoneBoost || "");
    this._productivityFoodBoost = parseInt(__s5param0.productivityFoodBoost || "");
    this._productivityCoalBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("productivityCoalBoost", __s5param0, "0"));
    this._productivityOilBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("productivityOilBoost", __s5param0, "0"));
    this._productivityGlassBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("productivityGlassBoost", __s5param0, "0"));
    this._productivityIronBoost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("productivityIronBoost", __s5param0, "0"));
  };
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "gateLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this._gateWodId).level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "wallLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this._wallWodId).level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "keepLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this._keepWodId).level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "moatLevel", {
    get: function () {
      if (this._moatWodId < 0) {
        return 0;
      } else {
        return __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this._moatWodId).level;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "kID", {
    get: function () {
      return this._kID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityWoodBoost", {
    get: function () {
      return this._productivityWoodBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityStoneBoost", {
    get: function () {
      return this._productivityStoneBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityFoodBoost", {
    get: function () {
      return this._productivityFoodBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityCoalBoost", {
    get: function () {
      return this._productivityCoalBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityOilBoost", {
    get: function () {
      return this._productivityOilBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityGlassBoost", {
    get: function () {
      return this._productivityGlassBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityIronBoost", {
    get: function () {
      return this._productivityIronBoost;
    },
    enumerable: true,
    configurable: true
  });
  return KingdomVillagesInfoVO;
}();
exports.KingdomVillagesInfoVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
