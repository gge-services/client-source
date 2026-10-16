Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_SeasonLeagueRewardOverviewDialogItemVO = require("gge-module:export_SeasonLeagueRewardOverviewDialogItemVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_XmlSamuraiDaimyoContractVO = require("gge-module:export_XmlSamuraiDaimyoContractVO");
var __dep_export_XmlSamuraiDaimyoRewardVO = require("gge-module:export_XmlSamuraiDaimyoRewardVO");
var __s0local0 = function () {
  function SamuraiDaimyoDataXml() {
    this._daimyoCastleAllianceContracts = new Map();
    this._daimyoTownshipAllianceContracts = new Map();
    this._daimyoEndRewards = new Map();
  }
  SamuraiDaimyoDataXml.prototype.parseXml = function (__s5param0) {
    this._daimyoCastleAllianceContracts = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, __dep_export_XmlSamuraiDaimyoContractVO.XmlSamuraiDaimyoContractVO);
    this._daimyoTownshipAllianceContracts = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP, __dep_export_XmlSamuraiDaimyoContractVO.XmlSamuraiDaimyoContractVO);
    this._daimyoEndRewards = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "daimyoEndRewards", __dep_export_XmlSamuraiDaimyoRewardVO.XmlSamuraiDaimyoRewardVO);
  };
  SamuraiDaimyoDataXml.prototype.getContractSeriesIndex = function (__s7param0, __s7param1) {
    for (var __s7local0 = this.getContractSeries(__s7param0, __s7param1), __s7local1 = 0; __s7local1 < __s7local0.length; ++__s7local1) {
      if (__s7local0[__s7local1].id == __s7param1) {
        return __s7local1;
      }
    }
    return -1;
  };
  SamuraiDaimyoDataXml.prototype.getNumberOfContractsForSeries = function (__s12param0, __s12param1) {
    return __dep_exact_f855840627e6e145.int(this.getContractSeries(__s12param0, __s12param1).length);
  };
  SamuraiDaimyoDataXml.prototype.getContractSeries = function (__s14param0, __s14param1) {
    var __s14local0 = this.getContractsList(__s14param0);
    var __s14local1 = [];
    var __s14local2 = __dep_exact_f855840627e6e145.int(__s14local0.get(__s14param1).rank);
    if (__s14local0 != null) {
      for (var __s14local3 = 0, __s14local4 = Array.from(__s14local0.values()); __s14local3 < __s14local4.length; __s14local3++) {
        var __s14local5 = __s14local4[__s14local3];
        if (__s14local5 !== undefined && __s14local5.rank == __s14local2) {
          __s14local1.push(__s14local5);
        }
      }
    }
    return __s14local1;
  };
  SamuraiDaimyoDataXml.prototype.getRewardOverviewItems = function (__s20param0) {
    var __s20local0 = [];
    var __s20local1 = 0;
    if (this.daimyoEndRewards != null) {
      for (var __s20local2 = 0, __s20local3 = Array.from(this.daimyoEndRewards.values()); __s20local2 < __s20local3.length; __s20local2++) {
        var __s20local4 = __s20local3[__s20local2];
        if (__s20local4 !== undefined && __s20local4.rewardSetId == __s20param0) {
          var __s20local5 = "";
          var __s20local6 = __s20local4.minHighscoreRank;
          __s20local5 = __s20local1 + 1 != __s20local6 ? __dep_exact_92d05af59ee2ff30.Localize.text("rankingRange_multi", [__s20local1 + 1, __s20local6]) : __dep_exact_92d05af59ee2ff30.Localize.text("rankingRange_single", [__s20local6]);
          __s20local1 = __s20local6;
          __s20local0.push(new __dep_export_SeasonLeagueRewardOverviewDialogItemVO.SeasonLeagueRewardOverviewDialogItemVO(__s20local5, __dep_export_CastleModel.CastleModel.rewardData.getListByIdVector(__s20local4.rewardIds)));
        }
      }
    }
    return __s20local0;
  };
  SamuraiDaimyoDataXml.prototype.getEndReward = function (__s26param0, __s26param1) {
    var __s26local0;
    if (this.daimyoEndRewards != null) {
      for (var __s26local1 = 0, __s26local2 = Array.from(this.daimyoEndRewards.values()); __s26local1 < __s26local2.length; __s26local1++) {
        var __s26local3 = __s26local2[__s26local1];
        if (__s26local3 !== undefined && __s26local3.rewardSetId == __s26param0 && __s26param1 <= __s26local3.minHighscoreRank) {
          __s26local0 = __s26local3;
          break;
        }
      }
    }
    return __s26local0;
  };
  SamuraiDaimyoDataXml.prototype.getContractsList = function (__s32param0) {
    switch (__s32param0) {
      case SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE:
        return this._daimyoCastleAllianceContracts;
      case SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP:
        return this._daimyoTownshipAllianceContracts;
      default:
        return null;
    }
  };
  Object.defineProperty(SamuraiDaimyoDataXml.prototype, "daimyoCastleAllianceContracts", {
    get: function () {
      return this._daimyoCastleAllianceContracts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataXml.prototype, "daimyoTownshipAllianceContracts", {
    get: function () {
      return this._daimyoTownshipAllianceContracts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataXml.prototype, "daimyoEndRewards", {
    get: function () {
      return this._daimyoEndRewards;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE = "daimyoCastleAllianceContracts";
  SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP = "daimyoTownshipAllianceContracts";
  return SamuraiDaimyoDataXml;
}();
exports.SamuraiDaimyoDataXml = __s0local0;
