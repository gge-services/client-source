Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SRerollTrainingProgramsVO = require("gge-module:export_C2SRerollTrainingProgramsVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_OfficersSchoolDataEvent = require("gge-module:export_OfficersSchoolDataEvent");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRerollCostData = require("gge-module:export_CastleRerollCostData");
var __dep_export_OfficersSchoolEffectVO = require("gge-module:export_OfficersSchoolEffectVO");
var __dep_export_OfficersSchoolUnitPairVO = require("gge-module:export_OfficersSchoolUnitPairVO");
var __s0local0 = function (__s1param0) {
  function OfficersSchoolData(__s3param0) {
    var __s3local0 = this;
    __s3local0._rawEffectVOs = new Map();
    __s3local0._availableEffectsList = [];
    __s3local0._activeEffectVO = null;
    __s3local0._officersSchoolCurrencies = new Map();
    __s3local0._officersSchoolUnitPairs = new Map();
    __s3local0._activeEffectProlongCount = 0;
    __s3local0._rerollCountSoftCurrency = 0;
    __s3local0._rerollCountHardCurrency = 0;
    __s3local0._dailyCurrency = 0;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this) || this;
    for (var __s3local1 = 0, __s3local2 = __s3param0.officersSchoolEffects; __s3local1 < __s3local2.length; __s3local1++) {
      var __s3local3 = __s3local2[__s3local1];
      if (__s3local3 !== undefined) {
        var __s3local4 = new __dep_export_OfficersSchoolEffectVO.OfficersSchoolEffectVO();
        __s3local4.parseXml(__s3local3);
        __s3local0._rawEffectVOs.set(__s3local4.id, __s3local4);
      }
    }
    for (var __s3local5 = 0, __s3local6 = __s3param0.officersSchoolCurrencies; __s3local5 < __s3local6.length; __s3local5++) {
      var __s3local7 = __s3local6[__s3local5];
      if (__s3local7 !== undefined) {
        var __s3local8 = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("currency", __s3local7);
        var __s3local9 = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s3local7));
        var __s3local10 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyByName(__s3local8);
        var __s3local11 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__s3local10.id);
        __s3local0._officersSchoolCurrencies.set(__s3local9, __s3local11);
      }
    }
    for (var __s3local12 = 0, __s3local13 = __s3param0.officersSchoolUnitPairs; __s3local12 < __s3local13.length; __s3local12++) {
      var __s3local14 = __s3local13[__s3local12];
      if (__s3local14 !== undefined) {
        var __s3local15 = new __dep_export_OfficersSchoolUnitPairVO.OfficersSchoolUnitPairVO();
        __s3local15.parseXml(__s3local14);
        __s3local0._officersSchoolUnitPairs.set(__s3local15.id, __s3local15);
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfficersSchoolData, __s1param0);
  Object.defineProperty(OfficersSchoolData.prototype, "uniqueOfficersSchoolUnitWodIDs", {
    get: function () {
      var __s14local0 = [];
      if (this._officersSchoolUnitPairs != null) {
        for (var __s14local1 = 0, __s14local2 = Array.from(this._officersSchoolUnitPairs.values()); __s14local1 < __s14local2.length; __s14local1++) {
          var __s14local3 = __s14local2[__s14local1];
          if (__s14local3 !== undefined) {
            for (var __s14local4 = 0, __s14local5 = __s14local3.wodIDs; __s14local4 < __s14local5.length; __s14local4++) {
              var __s14local6 = __s14local5[__s14local4];
              if (__s14local6 !== undefined && __s14local0.indexOf(__s14local6) < 0) {
                __s14local0.push(__s14local6);
              }
            }
          }
        }
      }
      __s14local0.sort(this.bindFunction(this.sortUnlockWods));
      return __s14local0;
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolData.prototype.sortUnlockWods = function (__s23param0, __s23param1) {
    var __s23local0 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(this.getUnlockBuildingWodIDByUnitWodID(__s23param0));
    var __s23local1 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(this.getUnlockBuildingWodIDByUnitWodID(__s23param1));
    return __dep_exact_f855840627e6e145.int(__s23local0.level - __s23local1.level);
  };
  OfficersSchoolData.prototype.getUnlockBuildingWodIDByUnitWodID = function (__s25param0) {
    if (this._officersSchoolUnitPairs != null) {
      for (var __s25local0 = 0, __s25local1 = Array.from(this._officersSchoolUnitPairs.values()); __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined && __s25local2.wodIDs.indexOf(__s25param0) >= 0) {
          return __s25local2.unlockBuildingWodID;
        }
      }
    }
    return -1;
  };
  OfficersSchoolData.prototype.reset = function () {
    this._availableEffectsList = [];
    this._activeEffectVO = null;
  };
  OfficersSchoolData.prototype.sendReroll = function (__s33param0) {
    var __s33local0 = [];
    if (this._availableEffectsList != null) {
      for (var __s33local1 = 0, __s33local2 = this._availableEffectsList; __s33local1 < __s33local2.length; __s33local1++) {
        var __s33local3 = __s33local2[__s33local1];
        if (__s33local3 !== undefined && __s33local3.isLockedAgainstRefresh) {
          __s33local0.push(__s33local3.slotID);
        }
      }
    }
    __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRerollTrainingProgramsVO.C2SRerollTrainingProgramsVO(__s33param0, __s33local0));
  };
  OfficersSchoolData.prototype.parse_GATP = function (__s39param0) {
    this._activeEffectVO = null;
    if (__s39param0) {
      var __s39local0 = __dep_exact_f855840627e6e145.int(__s39param0.S);
      var __s39local1 = __s39param0.E;
      var __s39local2 = __s39param0.RS;
      if (__s39local0 > -1 && __s39local2 > 0 || __s39local1.length > 0) {
        this._activeEffectVO = this._rawEffectVOs.get(__dep_exact_9e901e8e2483a22f.DictionaryUtil.getKeys(this._rawEffectVOs)[0]).clone();
        this._activeEffectVO.slotID = __s39local0;
        this._activeEffectVO.setActiveTime(__s39local2);
        this._activeEffectVO.setBonusVOByValueArray(__s39local1);
      }
    }
  };
  OfficersSchoolData.prototype.parse_GTP = function (__s43param0) {
    if (__s43param0) {
      var __s43local0 = __s43param0.TP;
      if (__s43param0.AT) {
        if (this._activeEffectVO) {
          if (this._activeEffectVO.id != __s43param0.AT.TE) {
            var __s43local1 = this.parseOfficerEffectVO(__s43param0.AT);
            __s43local1.setActiveTime(this._activeEffectVO.remainingTimeInSeconds);
            this._activeEffectVO = __s43local1;
          }
          this._activeEffectVO.durationInSeconds = __s43param0.AT.D;
        }
      } else {
        this._activeEffectVO = null;
      }
      this._activeEffectProlongCount = __dep_exact_f855840627e6e145.int(__s43param0.PC);
      this._rerollCountSoftCurrency = __dep_exact_f855840627e6e145.int(__s43param0.RCSC);
      this._rerollCountHardCurrency = __dep_exact_f855840627e6e145.int(__s43param0.RCHC);
      this._dailyCurrency = __dep_exact_f855840627e6e145.int(__s43param0.CT);
      var __s43local2 = [];
      if (this._availableEffectsList && this._availableEffectsList != null) {
        for (var __s43local3 = 0, __s43local4 = this._availableEffectsList; __s43local3 < __s43local4.length; __s43local3++) {
          var __s43local5 = __s43local4[__s43local3];
          if (__s43local5 !== undefined && __s43local5.isLockedAgainstRefresh) {
            __s43local2.push(__s43local5.slotID);
          }
        }
      }
      this._availableEffectsList = [];
      if (__s43local0 != null) {
        for (var __s43local6 = 0, __s43local7 = __s43local0; __s43local6 < __s43local7.length; __s43local6++) {
          var __s43local8 = __s43local7[__s43local6];
          if (__s43local8 !== undefined) {
            this._availableEffectsList.push(this.parseOfficerEffectVO(__s43local8));
          }
        }
      }
      if (this._availableEffectsList != null) {
        for (var __s43local9 = 0, __s43local10 = this._availableEffectsList; __s43local9 < __s43local10.length; __s43local9++) {
          var __s43local11 = __s43local10[__s43local9];
          if (__s43local11 !== undefined && __s43local2.indexOf(__s43local11.slotID) >= 0) {
            __s43local11.isLockedAgainstRefresh = true;
          }
        }
      }
      this.dispatchEvent(new __dep_export_OfficersSchoolDataEvent.OfficersSchoolDataEvent(__dep_export_OfficersSchoolDataEvent.OfficersSchoolDataEvent.DATA_UPDATED));
    }
  };
  OfficersSchoolData.prototype.parseOfficerEffectVO = function (__s62param0) {
    if (!__s62param0) {
      return null;
    }
    var __s62local0 = this._rawEffectVOs.get(__s62param0.TE).clone();
    __s62local0.slotID = __dep_exact_f855840627e6e145.int(__s62param0.S);
    __s62local0.durationInSeconds = __s62param0.D;
    __s62local0.setBonusVOByValueArray(__s62param0.E);
    return __s62local0;
  };
  OfficersSchoolData.prototype.getBonusByEffectType = function (__s65param0, __s65param1 = -1, __s65param2 = -1, __s65param3 = -1) {
    if (!this._activeEffectVO) {
      return 0;
    }
    var __s65local0 = 0;
    var __s65local1 = __dep_exact_f855840627e6e145.int(__s65param1 < 0 ? __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType : __s65param1);
    var __s65local2 = __dep_exact_f855840627e6e145.int(__s65param2 < 0 ? __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId : __s65param2);
    if (this._activeEffectVO.endTimestamp < __dep_export_CachedTimer.CachedTimer.getCachedTimer()) {
      return 0;
    } else {
      if (this._activeEffectVO.bonusVO.matchesConditions(__s65param0, __s65local1, __s65local2, __s65param3)) {
        __s65local0 += this._activeEffectVO.bonusVO.strength;
      }
      return __s65local0;
    }
  };
  OfficersSchoolData.prototype.getC2ProlongCosts = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.rerollCostData.getRerollCostsByTypeAndCount(__dep_export_CastleRerollCostData.CastleRerollCostData.REROLL_TYPE_PROLONG_TRAINING, this._activeEffectProlongCount + 1).c2Cost);
  };
  Object.defineProperty(OfficersSchoolData.prototype, "activeEffectVO", {
    get: function () {
      return this._activeEffectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolData.prototype, "availableEffectsList", {
    get: function () {
      return this._availableEffectsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolData.prototype, "rerollCountSoftCurrency", {
    get: function () {
      return this._rerollCountSoftCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolData.prototype, "rerollCountHardCurrency", {
    get: function () {
      return this._rerollCountHardCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolData.prototype, "dailyCurrency", {
    get: function () {
      return this._dailyCurrency;
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.OfficersSchoolData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
