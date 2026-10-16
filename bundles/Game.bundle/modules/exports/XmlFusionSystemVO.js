Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function XmlFusionSystemVO() {
    this._id = -1;
    this._energyRechargeIntervalInSeconds = 0;
    this._assembleCatalystEnergyCost = 0;
    this._disassembleCatalystEnergyCost = 0;
    this._baseBonusFusionXPChance = 0;
    this._premiumBonusFusionXPChance = 0;
    this._skipRechargeHardCurrencyCost = 0;
    this._skipRechargeHardCurrencyCostFactor = 0;
  }
  XmlFusionSystemVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._energyRechargeIntervalInSeconds = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("energyRechargeIntervalInSeconds", __s5param0, 0));
    this._assembleCatalystEnergyCost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("assembleCatalystEnergyCost", __s5param0, 0));
    this._disassembleCatalystEnergyCost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("disassembleCatalystEnergyCost", __s5param0, 0));
    this._baseBonusFusionXPChance = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("baseBonusFusionXPChance", __s5param0, 0));
    this._premiumBonusFusionXPChance = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("premiumBonusFusionXPChance", __s5param0, 0));
    this._skipRechargeHardCurrencyCost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("skipRechargeHardCurrencyCost", __s5param0, 0));
    this._skipRechargeHardCurrencyCostFactor = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("skipRechargeHardCurrencyCostFactor", __s5param0);
  };
  Object.defineProperty(XmlFusionSystemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "energyRechargeIntervalInSeconds", {
    get: function () {
      return this._energyRechargeIntervalInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "assembleCatalystEnergyCost", {
    get: function () {
      return this._assembleCatalystEnergyCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "disassembleCatalystEnergyCost", {
    get: function () {
      return this._disassembleCatalystEnergyCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "baseBonusFusionXPChance", {
    get: function () {
      return this._baseBonusFusionXPChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "premiumBonusFusionXPChance", {
    get: function () {
      return this._premiumBonusFusionXPChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "skipRechargeHardCurrencyCost", {
    get: function () {
      return this._skipRechargeHardCurrencyCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "skipRechargeHardCurrencyCostFactor", {
    get: function () {
      return this._skipRechargeHardCurrencyCostFactor;
    },
    enumerable: true,
    configurable: true
  });
  return XmlFusionSystemVO;
}();
exports.XmlFusionSystemVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
