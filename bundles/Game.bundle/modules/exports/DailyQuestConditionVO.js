Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ABasicQuestConditionVO = require("gge-module:export_ABasicQuestConditionVO");
var __s0local0 = function (__s1param0) {
  function DailyQuestConditionVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._levelCalculated = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DailyQuestConditionVO, __s1param0);
  Object.defineProperty(DailyQuestConditionVO.prototype, "conditionCounter", {
    get: function () {
      if (this.isDone()) {
        return this.conditionMaxCounter;
      } else {
        return this._conditionCounter;
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicQuestConditionVO.ABasicQuestConditionVO.prototype, "conditionCounter").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestConditionVO.prototype, "conditionMaxCounter", {
    get: function () {
      if (this.levelCalculated) {
        switch (this.conditionType) {
          case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
            return __dep_exact_26a421b704832cff.ConditionConst.amountOfTaxesToCollect(__dep_export_CastleModel.CastleModel.dailyQuestData.playerQuestLevel);
          case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPY:
            return __dep_exact_26a421b704832cff.ConditionConst.calculateSpyCount(__dep_export_CastleModel.CastleModel.dailyQuestData.playerQuestLevel);
          case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_WIN_FAME_FIGHT:
            return __dep_exact_26a421b704832cff.ConditionConst.calculateFameForFight(__dep_export_CastleModel.CastleModel.dailyQuestData.playerQuestLevel, this.conditionData[0]);
        }
      }
      return this._conditionMaxCounter;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicQuestConditionVO.ABasicQuestConditionVO.prototype, "conditionMaxCounter").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestConditionVO.prototype, "conditionData", {
    get: function () {
      if (this.levelCalculated) {
        switch (this.conditionType) {
          case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
            return [__dep_exact_26a421b704832cff.ConditionConst.getLevelOfClassicDungeonToDestroy(__dep_export_CastleModel.CastleModel.dailyQuestData.playerQuestLevel)];
        }
      }
      return this._conditionData;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicQuestConditionVO.ABasicQuestConditionVO.prototype, "conditionData").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestConditionVO.prototype.getConditionText = function (__s23param0 = true) {
    var __s23local0;
    var __s23local1 = "";
    if (this.conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPY || this.conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_REQUEST_ALLIANCE_HELP) {
      __s23local1 = this.conditionMaxCounter == 1 ? "_singular" : "";
    }
    var __s23local2 = __dep_exact_f855840627e6e145.int(this.conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS ? this.conditionData[0] : this.conditionMaxCounter);
    __s23local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_dailyQuests_Copy_" + this._questID + __s23local1, [__s23local2]);
    if (__s23param0) {
      __s23local0 += " " + __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.conditionCounter, this._questID == 7 ? 1 : this.conditionMaxCounter]);
    }
    return __s23local0;
  };
  Object.defineProperty(DailyQuestConditionVO.prototype, "levelCalculated", {
    get: function () {
      return this._levelCalculated;
    },
    set: function (__s29param0) {
      this._levelCalculated = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  return DailyQuestConditionVO;
}(__dep_export_ABasicQuestConditionVO.ABasicQuestConditionVO);
exports.DailyQuestConditionVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShowMeQuestConditionVO");
