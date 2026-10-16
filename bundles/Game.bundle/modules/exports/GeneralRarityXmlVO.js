Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function GeneralRarityXmlVO(__s3param0 = null) {
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  GeneralRarityXmlVO.prototype.fillFromParamXml = function (__s6param0) {
    this._generalRarityID = parseInt(__s6param0.generalRarityID || "0");
    this._name = __s6param0.name;
    this._maxStarLevel = parseInt(__s6param0.maxStarLevel || "0");
    this._universalShardsPerHundred = parseInt(__s6param0.universalShardsPerHundred || "0");
    this._unlockCosts = parseInt(__s6param0.unlockCosts || "0");
    this._upgradeCosts = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("upgradeCosts", __s6param0, ""), ",");
    this._xpRequirements = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("xpRequirements", __s6param0, ""), ",");
  };
  Object.defineProperty(GeneralRarityXmlVO.prototype, "generalRarityID", {
    get: function () {
      return this._generalRarityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "maxStarLevel", {
    get: function () {
      return this._maxStarLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "unlockCosts", {
    get: function () {
      return this._unlockCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "upgradeCosts", {
    get: function () {
      return this._upgradeCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "xpRequirements", {
    get: function () {
      return this._xpRequirements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "universalShardsPerHundred", {
    get: function () {
      return this._universalShardsPerHundred;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  GeneralRarityXmlVO.prototype.getCurrentXPOfLevel = function (__s22param0) {
    return __s22param0 - this._xpRequirements[this.getLevelForXP(__s22param0) - 1];
  };
  GeneralRarityXmlVO.prototype.getCurrentMaxXPOfLevel = function (__s24param0) {
    var __s24local0 = this.getLevelForXP(__s24param0);
    if (__s24local0 >= this._xpRequirements.length) {
      return -1;
    } else {
      return this._xpRequirements[__s24local0] - this._xpRequirements[__s24local0 - 1];
    }
  };
  GeneralRarityXmlVO.prototype.nextXpNeededForCap = function (__s28param0) {
    var __s28local0 = this.getLevelForXP(__s28param0);
    var __s28local1 = (Math.floor(__s28local0 / 10) + 1) * 10;
    return this.xpRequirements[__s28local1 - 1] - __s28param0;
  };
  GeneralRarityXmlVO.prototype.getLevelForXP = function (__s30param0) {
    for (var __s30local0 = 0; __s30local0 < this._xpRequirements.length - 1; __s30local0++) {
      if (__s30param0 >= this._xpRequirements[__s30local0] && __s30param0 < this._xpRequirements[__s30local0 + 1]) {
        return __s30local0 + 1;
      }
    }
    return __s30local0 + 1;
  };
  GeneralRarityXmlVO.prototype.getRequiredShards = function (__s35param0) {
    if (__s35param0 < this._upgradeCosts.length) {
      return this._upgradeCosts[__s35param0];
    } else {
      return 0;
    }
  };
  return GeneralRarityXmlVO;
}();
exports.GeneralRarityXmlVO = __s0local0;
