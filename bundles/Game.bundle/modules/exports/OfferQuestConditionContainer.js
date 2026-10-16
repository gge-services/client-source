Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_OfferQuestConditionLogicEnum = require("gge-module:export_OfferQuestConditionLogicEnum");
var __s0local0 = function () {
  function OfferQuestConditionContainer() {}
  Object.defineProperty(OfferQuestConditionContainer.prototype, "registerName", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionContainer.prototype.registerOfferCondition = function (__s7param0) {
    __s7param0.addEntry(this.registerName, this);
  };
  OfferQuestConditionContainer.prototype.parseFromObjectParam = function (__s9param0, __s9param1, __s9param2) {
    var __s9local0;
    this._questConditions = new Map();
    for (__s9local0 in __s9param1) {
      if (__s9local0 == "conditions") {
        this._questConditions.set("conditions", __dep_export_CastleModel.CastleModel.privateOfferData.createQuestCondition("conditions", __s9param1[__s9local0], null, __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.getConditionLogicByName(__s9param1[__s9local0].logic)));
      } else {
        var __s9local1 = __dep_export_CastleModel.CastleModel.privateOfferData.createQuestCondition(__s9param1[__s9local0].name, __s9param1[__s9local0].params, __s9param1[__s9local0].publicId);
        if (__s9local1) {
          this._questConditions.set(__s9param1[__s9local0].name, __s9local1);
        }
      }
    }
  };
  OfferQuestConditionContainer.prototype.parseProgress = function (__s16param0) {
    if (this._questConditions != null) {
      for (var __s16local0 = 0, __s16local1 = Array.from(this._questConditions.values()); __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined) {
          __s16local2.parseProgress(__s16param0);
        }
      }
    }
  };
  OfferQuestConditionContainer.prototype.setLogic = function (__s22param0) {
    this._logic = __s22param0 || __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.AND;
  };
  OfferQuestConditionContainer.prototype.toString = function () {
    var __s24local0 = "Condition Container";
    if (this._questConditions != null) {
      for (var __s24local1 = 0, __s24local2 = Array.from(this._questConditions.keys()); __s24local1 < __s24local2.length; __s24local1++) {
        var __s24local3 = __s24local2[__s24local1];
        if (__s24local3 !== undefined) {
          __s24local0 += "\n   " + __s24local3 + " --> " + this._questConditions.get(__s24local3);
        }
      }
    }
    return __s24local0;
  };
  Object.defineProperty(OfferQuestConditionContainer.prototype, "logic", {
    get: function () {
      return this._logic;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "conditionPassed", {
    get: function () {
      var __s32local0;
      switch (this._logic) {
        case __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.AND:
          if (this._questConditions != null) {
            for (var __s32local1 = 0, __s32local2 = Array.from(this._questConditions.values()); __s32local1 < __s32local2.length; __s32local1++) {
              if ((__s32local0 = __s32local2[__s32local1]) !== undefined && !__s32local0.conditionPassed) {
                return false;
              }
            }
          }
          return true;
        case __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.OR:
          if (this._questConditions != null) {
            for (var __s32local3 = 0, __s32local4 = Array.from(this._questConditions.values()); __s32local3 < __s32local4.length; __s32local3++) {
              if ((__s32local0 = __s32local4[__s32local3]) !== undefined && __s32local0.conditionPassed) {
                return true;
              }
            }
          }
          return false;
        case __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.XOR:
          var __s32local5 = false;
          if (this._questConditions != null) {
            for (var __s32local6 = 0, __s32local7 = Array.from(this._questConditions.values()); __s32local6 < __s32local7.length; __s32local6++) {
              if ((__s32local0 = __s32local7[__s32local6]) !== undefined) {
                if (__s32local5) {
                  if (__s32local0.conditionPassed) {
                    return false;
                  }
                } else if (__s32local0.conditionPassed) {
                  __s32local5 = true;
                }
              }
            }
          }
          return __s32local5;
        case __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.NOT:
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "conditionTextId", {
    get: function () {
      return "QUEST CONDITION CONTAINER";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "conditionTextReplacements", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "questConditions", {
    get: function () {
      return this._questConditions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "conditionsProgressInPercent", {
    get: function () {
      switch (this._logic) {
        case __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.AND:
          var __s56local0 = 0;
          var __s56local1 = 0;
          if (this._questConditions != null) {
            for (var __s56local2 = 0, __s56local3 = Array.from(this._questConditions.values()); __s56local2 < __s56local3.length; __s56local2++) {
              var __s56local4 = __s56local3[__s56local2];
              if (__s56local4 !== undefined) {
                ++__s56local1;
                __s56local0 += __s56local4.conditionsProgressInPercent;
              }
            }
          }
          return __s56local0 / __s56local1;
        case __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.OR:
          __s56local0 = 0;
          if (this._questConditions != null) {
            for (var __s56local5 = 0, __s56local6 = Array.from(this._questConditions.values()); __s56local5 < __s56local6.length; __s56local5++) {
              if ((__s56local4 = __s56local6[__s56local5]) !== undefined) {
                __s56local0 = __dep_exact_f855840627e6e145.int(Math.max(__s56local0, __s56local4.conditionsProgressInPercent));
              }
            }
          }
          return __s56local0;
        case __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.XOR:
          __s56local0 = 0;
          if (this._questConditions != null) {
            for (var __s56local7 = 0, __s56local8 = Array.from(this._questConditions.values()); __s56local7 < __s56local8.length; __s56local7++) {
              if ((__s56local4 = __s56local8[__s56local7]) !== undefined && (__s56local0 = __dep_exact_f855840627e6e145.int(Math.max(__s56local0, __s56local4.conditionsProgressInPercent)), __s56local4.conditionPassed)) {
                if (__s56local4.conditionPassed) {
                  return 0;
                }
                true;
              }
            }
          }
          return __s56local0;
        case __dep_export_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.NOT:
          if (this._questConditions != null) {
            for (var __s56local9 = 0, __s56local10 = Array.from(this._questConditions.values()); __s56local9 < __s56local10.length; __s56local9++) {
              if ((__s56local4 = __s56local10[__s56local9]) !== undefined && __s56local4.conditionPassed) {
                return 0;
              }
            }
          }
          return 100;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionContainer.prototype, "publicID", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionContainer;
}();
exports.OfferQuestConditionContainer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferQuestCondition");
