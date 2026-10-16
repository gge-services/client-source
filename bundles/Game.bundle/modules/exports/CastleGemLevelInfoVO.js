Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function CastleGemLevelInfoVO() {
    this._levelID = 0;
    this._sellValueC1 = 0;
    this._insertCostC1 = 0;
    this._craftSuccessChance = 0;
    this._craftCostC1 = 0;
    this._craftCostC2 = 0;
    this._removalCostC2 = 0;
  }
  CastleGemLevelInfoVO.prototype.parseXML = function (__s5param0) {
    this._levelID = parseInt(__s5param0.gemLevelID || "");
    this._sellValueC1 = parseInt(__s5param0.saleValue || "");
    this._insertCostC1 = parseInt(__s5param0.insertCostC1 || "");
    this._craftSuccessChance = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("craftSuccessChance", __s5param0, "0"));
    this._craftCostC1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("craftCostC1", __s5param0, "0"));
    this._craftCostC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("craftCostC2", __s5param0, "0"));
    this._removalCostC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("removalCostC2", __s5param0, "0"));
  };
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "levelID", {
    get: function () {
      return this._levelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "sellValueC1", {
    get: function () {
      return this._sellValueC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "insertCostC1", {
    get: function () {
      return this._insertCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "craftSuccessChance", {
    get: function () {
      return this._craftSuccessChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "craftCostC1", {
    get: function () {
      return this._craftCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "craftCostC2", {
    get: function () {
      return this._craftCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "removalCostC2", {
    get: function () {
      return this._removalCostC2;
    },
    enumerable: true,
    configurable: true
  });
  CastleGemLevelInfoVO.NO_CRAFT_FAIL_CHANCE = 100;
  return CastleGemLevelInfoVO;
}();
exports.CastleGemLevelInfoVO = __s0local0;
