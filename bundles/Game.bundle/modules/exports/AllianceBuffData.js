Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_AllianceForgeVO = require("gge-module:export_AllianceForgeVO");
var __s0local0 = function () {
  function AllianceBuffData(__s3param0) {
    this._allianceBuffIdToBuffSeriesMap = new Map();
    this._allianceBuffMap = new Map();
    var __s3local0;
    var __s3local1 = __s3param0.alliancebuffs;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          (__s3local0 = new __dep_export_AllianceBuffVO.AllianceBuffVO()).fillFromParamXml(__s3local4);
          this._allianceBuffIdToBuffSeriesMap.set(__s3local0.allianceBuffID, "" + __s3local0.seriesID + AllianceBuffData.MAP_AFFIX + __s3local0.level);
          this.addBuffToMap(__s3local0);
        }
      }
    }
    this._allianceForgeMap = new Map();
    var __s3local5;
    var __s3local6 = __s3param0.allianceForges;
    if (__s3local6 != null) {
      for (var __s3local7 = 0, __s3local8 = __s3local6; __s3local7 < __s3local8.length; __s3local7++) {
        var __s3local9 = __s3local8[__s3local7];
        if (__s3local9 !== undefined) {
          __s3local5 = new __dep_export_AllianceForgeVO.AllianceForgeVO(__s3local9);
          this._allianceForgeMap.set(__s3local5.level, __s3local5);
        }
      }
    }
  }
  AllianceBuffData.prototype.getMaxBuffVOByID = function (__s13param0) {
    var __s13local0 = this._allianceBuffMap.get(__s13param0);
    var __s13local1 = __dep_exact_f855840627e6e145.int(__s13local0[0].maxLevel);
    return this.getBuffVObyLevel(__s13local0, __s13local1);
  };
  AllianceBuffData.prototype.getSeriesIDsOfPurchasableBuffs = function () {
    var __s15local0 = [];
    if (this._allianceBuffMap != null) {
      for (var __s15local1 = 0, __s15local2 = Array.from(this._allianceBuffMap.keys()); __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined) {
          if ((!this._allianceBuffMap.get(__s15local3)[0].isBattleground || !!__dep_export_ABGHelper.ABGHelper.isOnABGServer) && (!this._allianceBuffMap.get(__s15local3)[0].hiddenBattleGround || !__dep_export_ABGHelper.ABGHelper.isOnABGServer)) {
            if (this._allianceBuffMap.get(__s15local3)[0].availableInAllianceFunds) {
              __s15local0.push(__s15local3);
            }
          }
        }
      }
    }
    return __s15local0;
  };
  AllianceBuffData.prototype.getCosts = function (__s23param0, __s23param1) {
    var __s23local0 = this.getAllianceBuffVoBySeriesIDAndLevel(__s23param0, __s23param1);
    if (__s23local0) {
      return __s23local0.costsList;
    } else {
      return new __dep_export_CollectableList.CollectableList();
    }
  };
  AllianceBuffData.prototype.getAllianceBuffVoBySeriesIDAndLevel = function (__s27param0, __s27param1) {
    var __s27local0 = this._allianceBuffMap.get(__s27param0);
    return this.getBuffVObyLevel(__s27local0, __s27param1);
  };
  AllianceBuffData.prototype.getBuffLevelByBuffID = function (__s29param0) {
    var __s29local0 = this._allianceBuffIdToBuffSeriesMap.get(__s29param0).split(AllianceBuffData.MAP_AFFIX);
    return __dep_exact_f855840627e6e145.int(__s29local0[AllianceBuffData.MAP_LEVEL_POSITION]);
  };
  AllianceBuffData.prototype.getBuffSeriesIDByBuffID = function (__s31param0) {
    var __s31local0 = this._allianceBuffIdToBuffSeriesMap.get(__s31param0).split(AllianceBuffData.MAP_AFFIX);
    return __dep_exact_f855840627e6e145.int(__s31local0[AllianceBuffData.MAP_SERIES_ID_POSITION]);
  };
  AllianceBuffData.prototype.isUpgradeAble = function (__s33param0, __s33param1) {
    return this._allianceBuffMap.get(__s33param0)[0].maxLevel > __s33param1;
  };
  AllianceBuffData.prototype.maxLevelOfBuff = function (__s35param0) {
    return __dep_exact_f855840627e6e145.int(this._allianceBuffMap.get(__s35param0)[0].maxLevel);
  };
  AllianceBuffData.prototype.getRequiredBuffID = function (__s37param0, __s37param1) {
    var __s37local0 = this._allianceBuffMap.get(__s37param0);
    if (__s37param1 > __s37local0[0].maxLevel) {
      __s37param1 = __dep_exact_f855840627e6e145.int(__s37local0[0].maxLevel);
    }
    return __dep_exact_f855840627e6e145.int(this._allianceBuffMap.get(__s37param0)[__s37param1].requiredBuffID);
  };
  AllianceBuffData.prototype.isTemporaryBuff = function (__s40param0, __s40param1) {
    return this.getBuffDuration(__s40param0, __s40param1) != -1;
  };
  AllianceBuffData.prototype.getBuffDuration = function (__s42param0, __s42param1) {
    var __s42local0 = this._allianceBuffMap.get(__s42param0);
    if (__s42param1 > __s42local0[0].maxLevel) {
      __s42param1 = __dep_exact_f855840627e6e145.int(__s42local0[0].maxLevel);
    }
    return __dep_exact_f855840627e6e145.int(this.getBuffVObyLevel(__s42local0, __s42param1).duration);
  };
  AllianceBuffData.prototype.isActive = function (__s45param0) {
    return this._allianceBuffMap.get(__s45param0)[0].duration > 0;
  };
  AllianceBuffData.prototype.getBuffSeries = function (__s47param0) {
    return this._allianceBuffMap.get(__s47param0);
  };
  AllianceBuffData.prototype.addBuffToMap = function (__s49param0) {
    if (!this._allianceBuffMap.get(__s49param0.seriesID)) {
      this._allianceBuffMap.set(__s49param0.seriesID, []);
    }
    this._allianceBuffMap.get(__s49param0.seriesID).push(__s49param0);
  };
  AllianceBuffData.prototype.getBuffVObyLevel = function (__s52param0, __s52param1) {
    if (__s52param0 != null) {
      for (var __s52local0 = 0, __s52local1 = __s52param0; __s52local0 < __s52local1.length; __s52local0++) {
        var __s52local2 = __s52local1[__s52local0];
        if (__s52local2 !== undefined && __s52local2.level == __s52param1) {
          return __s52local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(AllianceBuffData.prototype, "allianceBuffMap", {
    get: function () {
      return this._allianceBuffMap;
    },
    enumerable: true,
    configurable: true
  });
  AllianceBuffData.prototype.getAllianceForgeCostByLevel = function (__s60param0) {
    return __dep_exact_f855840627e6e145.int(this._allianceForgeMap.get(__s60param0).forgingCostC1);
  };
  AllianceBuffData.prototype.getPreviousBuffVOInSeries = function (__s62param0) {
    var __s62local0 = null;
    var __s62local1 = this.getBuffSeries(__s62param0.seriesID);
    var __s62local2 = __s62local1.indexOf(__s62param0);
    if (__s62local2 > 0) {
      __s62local0 = __s62local1[__s62local2 - 1];
    }
    return __s62local0;
  };
  AllianceBuffData.__initialize_static_members = function () {
    AllianceBuffData.CUSTOMIZABLE_BUFFS = [__dep_exact_26a421b704832cff.AllianceConst.TYPE_RAGE_POINT_BOOST, __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN, __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS, __dep_exact_26a421b704832cff.AllianceConst.TYPE_ALIEN_ATTACK_BOOST, __dep_exact_26a421b704832cff.AllianceConst.TYPE_DAIMYO_ATTACK_BOOST, __dep_exact_26a421b704832cff.AllianceConst.TYPE_KHAN_DEFENSE_BOOST, __dep_exact_26a421b704832cff.AllianceConst.TYPE_HEALING_SPEED_BOOST, __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP, __dep_exact_26a421b704832cff.AllianceConst.TYPE_COOLDOWN_REDUCTION_DAIYMO, __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_COMMON, __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_RARE, __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_EPIC, __dep_export_AllianceRaidConst.AllianceRaidConst.BUFF_SERIES_RAID_BOSS_ATTACK_LEGENDARY];
  };
  AllianceBuffData.MAP_AFFIX = "&";
  AllianceBuffData.MAP_SERIES_ID_POSITION = 0;
  AllianceBuffData.MAP_LEVEL_POSITION = 1;
  return AllianceBuffData;
}();
exports.AllianceBuffData = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_AllianceBuffVO = require("gge-module:export_AllianceBuffVO");
var __dep_export_AllianceRaidConst = require("gge-module:export_AllianceRaidConst");
__s0local0.__initialize_static_members();
