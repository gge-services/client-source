Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function GeneralsHubQuestVO(__s3param0 = null) {
    this._CDFinishedTimestamp = -1;
    this._freeAvailableQuests = 0;
    this._waitingForServer = false;
    if (__s3param0) {
      this.fillFromParamXml(__s3param0);
    }
  }
  GeneralsHubQuestVO.prototype.fillFromParamXml = function (__s6param0) {
    this._characterID = parseInt(__s6param0.characterID || "0");
    this._coolDownInSeconds = parseInt(__s6param0.coolDownInSeconds || "0");
    this._maxFreeOpenings = parseInt(__s6param0.maxFreeOpenings || "0");
    this._badLuckProtectionDrawAmount = parseInt(__s6param0.badLuckProtectionDrawAmount || "0");
    this._freeOpeningTombolaID = parseInt(__s6param0.freeOpeningTombolaID || "0");
    this._packageIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.packageIDs || "", "+");
    this._name = __s6param0.name;
    this._spinRarities = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.spinRarities || "", ",");
    this._badLuckSpinRarities = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6param0.badLuckSpinRarities || "", ",");
    this._tombolas = [];
    for (var __s6local0 = __s6param0.tombolas.split("#"), __s6local1 = 0; __s6local1 < __s6local0.length; __s6local1++) {
      this._tombolas.push(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s6local0[__s6local1], "+"));
    }
  };
  GeneralsHubQuestVO.prototype.parseServerObject = function (__s10param0) {
    this._freeAvailableQuests = __s10param0.FOA;
    var __s10local0 = new Date();
    __s10local0.setTime(__s10param0.LFO * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    var __s10local1 = new Date();
    __s10local1.setTime(__s10local0.getTime() + this.coolDownInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this._CDFinishedTimestamp = __s10local1.getTime();
    this._waitingForServer = false;
  };
  GeneralsHubQuestVO.prototype.getTombolaID = function (__s12param0 = 0) {
    if (__s12param0 >= this._tombolas.length) {
      return -1;
    } else {
      return this._tombolas[__s12param0][1];
    }
  };
  GeneralsHubQuestVO.prototype.getTombolaOfferingCurrencyID = function (__s16param0 = 0) {
    if (__s16param0 >= this._tombolas.length) {
      return -1;
    } else {
      return this._tombolas[__s16param0][0];
    }
  };
  GeneralsHubQuestVO.prototype.getTombolaOfferingCurrencyIDByTombolaID = function (__s20param0) {
    for (var __s20local0 = 0; __s20local0 < this._tombolas.length; __s20local0++) {
      if (this._tombolas[__s20local0][1] == __s20param0) {
        return this._tombolas[__s20local0][0];
      }
    }
    return -1;
  };
  Object.defineProperty(GeneralsHubQuestVO.prototype, "freeOpeningTombolaID", {
    get: function () {
      return this._freeOpeningTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubQuestVO.prototype.getCostVOForPayQuest = function (__s27param0 = 0) {
    return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 1, this.getTombolaOfferingCurrencyID(__s27param0));
  };
  Object.defineProperty(GeneralsHubQuestVO.prototype, "amountOfTombolas", {
    get: function () {
      return this._tombolas.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "characterID", {
    get: function () {
      return this._characterID;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubQuestVO.prototype.getPackageVOForCurrencyID = function (__s33param0) {
    for (var __s33local0 = 0, __s33local1 = this._packageIDs; __s33local0 < __s33local1.length; __s33local0++) {
      var __s33local2 = __s33local1[__s33local0];
      var __s33local3 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s33local2);
      if (__s33local3 && __s33param0 == __s33local3.reward.xmlCurrencyVO.id) {
        return __s33local3;
      }
    }
    return null;
  };
  Object.defineProperty(GeneralsHubQuestVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "nameTextID", {
    get: function () {
      return "dialog_generals_inn_character_" + this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "coolDownInSeconds", {
    get: function () {
      return this._coolDownInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "maxFreeOpenings", {
    get: function () {
      return this._maxFreeOpenings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "availableQuests", {
    get: function () {
      return this._freeAvailableQuests;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "remainingCoolDownInSeconds", {
    get: function () {
      var __s48local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
      var __s48local1 = this._CDFinishedTimestamp;
      var __s48local2 = Math.max(0, __s48local1 - __s48local0) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      if (__s48local2 <= 0 && this.availableQuests <= 0 && !this._waitingForServer) {
        this._waitingForServer = true;
        __dep_export_CastleModel.CastleModel.generalsData.requestQuestUpdateData();
      }
      return __s48local2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "badLuckProtectionDrawAmount", {
    get: function () {
      return this._badLuckProtectionDrawAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "spinRarities", {
    get: function () {
      return this._spinRarities;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubQuestVO.prototype, "badLuckSpinRarities", {
    get: function () {
      return this._badLuckSpinRarities;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubQuestVO.ID_FAT_KING = 1;
  GeneralsHubQuestVO.ID_KNIGHT = 2;
  GeneralsHubQuestVO.ID_PRINCESS = 3;
  return GeneralsHubQuestVO;
}();
exports.GeneralsHubQuestVO = __s0local0;
