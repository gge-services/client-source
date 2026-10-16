Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FusionForgeDataXml() {
    this._fusionSystems = new Map();
    this._fusionForges = new Map();
    this._catalysts = new Map();
    this._forgeMinuteSkips = new Map();
    this._fusionCostSequences = new Map();
    this._fusionShopPackages = new Map();
  }
  FusionForgeDataXml.prototype.parseXml = function (__s5param0) {
    this._fusionSystems = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "fusionSystems", __dep_export_XmlFusionSystemVO.XmlFusionSystemVO);
    this._fusionForges = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "fusionForges", __dep_export_XmlFusionForgeVO.XmlFusionForgeVO, "forgeId");
    this._catalysts = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "catalysts", __dep_export_XmlCatalystVO.XmlCatalystVO, "currencyId");
    this._forgeMinuteSkips = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "forgeMinuteSkips", __dep_export_XmlForgeMinuteSkipVO.XmlForgeMinuteSkipVO);
    this._fusionCostSequences = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "fusionCostSequences", __dep_export_XmlFusionCostSequenceVO.XmlFusionCostSequenceVO);
    this.parseFusionShopPackages(__s5param0);
  };
  FusionForgeDataXml.prototype.parseFusionShopPackages = function (__s7param0) {
    this._fusionShopPackages = new Map();
    for (var __s7local0 = 0, __s7local1 = __s7param0.fusionShops; __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      var __s7local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s7local2));
      var __s7local4 = [];
      for (var __s7local5 = 0, __s7local6 = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("packageIDs", __s7local2).split("+"); __s7local5 < __s7local6.length; __s7local5++) {
        var __s7local7 = __s7local6[__s7local5];
        __s7local4.push(parseInt(__s7local7));
      }
      this._fusionShopPackages.set(__s7local3, __s7local4);
    }
  };
  FusionForgeDataXml.prototype.getFusionSystem = function (__s13param0) {
    return this._fusionSystems.get(__s13param0);
  };
  FusionForgeDataXml.prototype.getFusionForge = function (__s15param0) {
    return this._fusionForges.get(__s15param0);
  };
  FusionForgeDataXml.prototype.getForgeMinuteSkips = function (__s17param0) {
    return this._forgeMinuteSkips.get(__s17param0);
  };
  FusionForgeDataXml.prototype.getFusionCostSequences = function (__s19param0) {
    return this._fusionCostSequences.get(__s19param0);
  };
  FusionForgeDataXml.prototype.getFusionShopPackageIds = function (__s21param0) {
    return this._fusionShopPackages.get(__s21param0);
  };
  FusionForgeDataXml.prototype.getFusionShopPackages = function (__s23param0) {
    var __s23local0 = this.getFusionShopPackageIds(__s23param0);
    var __s23local1 = [];
    if (__s23local0 != null) {
      for (var __s23local2 = 0, __s23local3 = __s23local0; __s23local2 < __s23local3.length; __s23local2++) {
        var __s23local4 = __s23local3[__s23local2];
        if (__s23local4 !== undefined) {
          __s23local1.push(__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s23local4));
        }
      }
    }
    __s23local1.sort(this.bindFunction(this.sortPackagesBySortOrder));
    return __s23local1;
  };
  FusionForgeDataXml.prototype.sortPackagesBySortOrder = function (__s29param0, __s29param1) {
    return __s29param0.sortOrder - __s29param1.sortOrder;
  };
  FusionForgeDataXml.prototype.getCostSequenceByTargetLevel = function (__s31param0, __s31param1) {
    var __s31local0 = this.getNumberOfSequenceCostIterations(__s31param0);
    var __s31local1 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstFusion.ClientConstFusion.getSequenceCostIterationIndex(__s31local0, __s31param1));
    if (this._fusionCostSequences != null) {
      for (var __s31local2 = 0, __s31local3 = Array.from(this._fusionCostSequences.values()); __s31local2 < __s31local3.length; __s31local2++) {
        var __s31local4 = __s31local3[__s31local2];
        if (__s31local4 !== undefined && __s31param0 == __s31local4.forgeId && __s31local1 == __s31local4.fusionTargetLevelIterationIndex) {
          return __s31local4;
        }
      }
    }
    return null;
  };
  FusionForgeDataXml.prototype.getCatalystInfo = function (__s37param0, __s37param1) {
    if (this._catalysts != null) {
      for (var __s37local0 = 0, __s37local1 = Array.from(this._catalysts.values()); __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined && __s37param0 == __s37local2.forgeId && __s37param1 == __s37local2.currencyId) {
          return __s37local2;
        }
      }
    }
    return null;
  };
  FusionForgeDataXml.prototype.getCatalystsByForge = function (__s43param0) {
    var __s43local0 = [];
    if (this._catalysts != null) {
      for (var __s43local1 = 0, __s43local2 = Array.from(this._catalysts.values()); __s43local1 < __s43local2.length; __s43local1++) {
        var __s43local3 = __s43local2[__s43local1];
        if (__s43local3 !== undefined && __s43param0 == __s43local3.forgeId) {
          __s43local0.push(__s43local3);
        }
      }
    }
    return __s43local0;
  };
  FusionForgeDataXml.prototype.getMinimumCatalystTier = function (__s49param0, __s49param1) {
    __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.fusionForgeData.getForge(__s49param0).level);
    if (this._catalysts != null) {
      for (var __s49local0 = 0, __s49local1 = Array.from(this._catalysts.values()); __s49local0 < __s49local1.length; __s49local0++) {
        var __s49local2 = __s49local1[__s49local0];
        if (__s49local2 !== undefined && __s49local2.forgeId == __s49param0 && __s49param1 <= __s49local2.maxUsableFusionLevel) {
          return __s49local2.tier;
        }
      }
    }
    return -1;
  };
  FusionForgeDataXml.prototype.getNumberOfSequenceCostIterations = function (__s55param0) {
    var __s55local0 = 0;
    if (this._fusionCostSequences != null) {
      for (var __s55local1 = 0, __s55local2 = Array.from(this._fusionCostSequences.values()); __s55local1 < __s55local2.length; __s55local1++) {
        var __s55local3 = __s55local2[__s55local1];
        if (__s55local3 !== undefined && __s55param0 == __s55local3.forgeId) {
          __s55local0++;
        }
      }
    }
    return __s55local0;
  };
  Object.defineProperty(FusionForgeDataXml.prototype, "fusionSystems", {
    get: function () {
      return this._fusionSystems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeDataXml.prototype, "fusionForges", {
    get: function () {
      return this._fusionForges;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeDataXml.prototype, "catalysts", {
    get: function () {
      return this._catalysts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeDataXml.prototype, "forgeMinuteSkips", {
    get: function () {
      return this._forgeMinuteSkips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeDataXml.prototype, "fusionCostSequences", {
    get: function () {
      return this._fusionCostSequences;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeDataXml;
}();
exports.FusionForgeDataXml = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_XmlCatalystVO = require("gge-module:export_XmlCatalystVO");
var __dep_export_XmlForgeMinuteSkipVO = require("gge-module:export_XmlForgeMinuteSkipVO");
var __dep_export_XmlFusionCostSequenceVO = require("gge-module:export_XmlFusionCostSequenceVO");
var __dep_export_XmlFusionForgeVO = require("gge-module:export_XmlFusionForgeVO");
var __dep_export_XmlFusionSystemVO = require("gge-module:export_XmlFusionSystemVO");
