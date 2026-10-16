Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function () {
  function OfficersSchoolEffectVO() {
    this.id = 0;
    this.eventID = 0;
    this.effectID = 0;
    this.c1Cost = 0;
    this.c2Cost = 0;
    this.costKhanTablet = 0;
    this.costKhanMedal = 0;
    this.costSamuraiToken = 0;
    this.endTimestamp = NaN;
    this.wodIDs = [];
    this.isLockedAgainstRefresh = false;
    this.slotID = 0;
    this.durationInSeconds = NaN;
  }
  OfficersSchoolEffectVO.prototype.parseXml = function (__s5param0) {
    this.id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this.effectID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("effectID", __s5param0, -1));
    this.eventID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("eventID", __s5param0, -1));
    this.c1Cost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("c1Cost", __s5param0, -1));
    this.c2Cost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("c2Cost", __s5param0, -1));
    this.costKhanTablet = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("costKhanTablet", __s5param0, -1));
    this.costKhanMedal = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("costKhanMedal", __s5param0, -1));
    this.costSamuraiToken = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("costSamuraiToken", __s5param0, -1));
    this.effectVO = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(this.effectID);
  };
  Object.defineProperty(OfficersSchoolEffectVO.prototype, "prolongDurationInHours", {
    get: function () {
      return __dep_exact_26a421b704832cff.TrainingConst.calculateProlongationDuration(this.durationInSeconds) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_HOURES;
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolEffectVO.prototype.getCost = function () {
    switch (this.slotID) {
      case 3:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C2, this.c2Cost);
      case 2:
        return this.getEventCostsAsCollectableVOByID();
      case 1:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C1, this.c1Cost);
    }
    return null;
  };
  OfficersSchoolEffectVO.prototype.getEventCostsAsCollectableVOByID = function () {
    var __s12local0 = new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_CastleModel.CastleModel.officerSchoolData.dailyCurrency);
    switch (__s12local0.id) {
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_MEDAL:
        __s12local0.amount = this.costKhanMedal;
        break;
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_TABLET:
        __s12local0.amount = this.costKhanTablet;
        break;
      case __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_TOKEN:
        __s12local0.amount = this.costSamuraiToken;
    }
    return __s12local0;
  };
  OfficersSchoolEffectVO.prototype.setBonusVOByValueArray = function (__s15param0) {
    this.effectVO = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(__s15param0[0]);
    this.bonusVO = new __dep_export_BonusVO.BonusVO().parseFromValueArray(this.effectVO, __s15param0[1]);
    this.wodIDs = this.bonusVO.effectValue.getWodIds();
  };
  OfficersSchoolEffectVO.prototype.clone = function () {
    var __s17local0 = new OfficersSchoolEffectVO();
    __s17local0.bonusVO = this.bonusVO;
    __s17local0.c1Cost = this.c1Cost;
    __s17local0.c2Cost = this.c2Cost;
    __s17local0.costKhanMedal = this.costKhanMedal;
    __s17local0.costKhanTablet = this.costKhanTablet;
    __s17local0.costSamuraiToken = this.costSamuraiToken;
    __s17local0.effectID = this.effectID;
    __s17local0.effectVO = this.effectVO;
    __s17local0.eventID = this.eventID;
    __s17local0.id = this.id;
    return __s17local0;
  };
  OfficersSchoolEffectVO.prototype.setActiveTime = function (__s19param0) {
    this.endTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s19param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  Object.defineProperty(OfficersSchoolEffectVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max(0, (this.endTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolEffectVO;
}();
exports.OfficersSchoolEffectVO = __s0local0;
