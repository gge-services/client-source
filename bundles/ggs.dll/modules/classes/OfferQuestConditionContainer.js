Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Constants_Offer = require("gge-module:class_Constants_Offer");
var __dep_class_OfferQuestConditionLogicEnum = require("gge-module:class_OfferQuestConditionLogicEnum");
var __s0local0 = function () {
  function OfferQuestConditionContainer(__s3param0, __s3param1) {
    this._modelData = __s3param1;
    this._questConditions = new Map();
    this.parseQuestConditionList(__s3param0);
  }
  OfferQuestConditionContainer.prototype.parseQuestConditionList = function (__s5param0) {
    var __s5local0;
    for (var __s5local1 = 0; __s5local1 < __s5param0.length; ++__s5local1) {
      if (__s5local0 = this._modelData.createQuestCondition(__s5param0[__s5local1].name, __s5param0[__s5local1].params)) {
        this._questConditions.set(__s5param0[__s5local1].name, __s5local0);
      }
    }
  };
  Object.defineProperty(OfferQuestConditionContainer.prototype, "registerName", {
    get: function () {
      return __dep_class_Constants_Offer.Constants_Offer.QUEST_CONDITION_CONTAINER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionContainer.prototype.parseFromObjectParam = function (__s12param0, __s12param1) {
    this._questConditions = new Map();
    for (var __s12local0 = 0; __s12local0 < __s12param1.length; ++__s12local0) {
      if (__s12param1[__s12local0].conditions) {
        this._questConditions.set("conditions", this._modelData.createQuestCondition("conditions", __s12param1[__s12local0].conditions));
      } else {
        var __s12local1 = this._modelData.createQuestCondition(__s12param1[__s12local0].name, __s12param1[__s12local0].params);
        if (__s12local1) {
          this._questConditions.set(__s12param1[__s12local0].name, __s12local1);
        }
      }
    }
  };
  OfferQuestConditionContainer.prototype.setLogic = function (__s19param0) {
    this._logic = __s19param0 || __dep_class_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.AND;
  };
  OfferQuestConditionContainer.prototype.toString = function () {
    var __s21local0 = "Condition Container";
    for (var __s21local1 = 0, __s21local2 = Array.from(this._questConditions.keys()); __s21local1 < __s21local2.length; __s21local1++) {
      var __s21local3 = __s21local2[__s21local1];
      __s21local0 += "\n   " + __s21local3 + " --> " + this._questConditions.get(__s21local3);
    }
    return __s21local0;
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
      switch (this._logic) {
        case __dep_class_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.AND:
          for (var __s27local0 = 0, __s27local1 = Array.from(this._questConditions.values()); __s27local0 < __s27local1.length; __s27local0++) {
            if (!__s27local1[__s27local0].conditionPassed) {
              return false;
            }
          }
          return true;
        case __dep_class_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.OR:
          for (var __s27local2 = 0, __s27local3 = Array.from(this._questConditions.values()); __s27local2 < __s27local3.length; __s27local2++) {
            if (__s27local3[__s27local2].conditionPassed) {
              return true;
            }
          }
          return false;
        case __dep_class_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.XOR:
          var __s27local4 = false;
          for (var __s27local5 = 0, __s27local6 = Array.from(this._questConditions.values()); __s27local5 < __s27local6.length; __s27local5++) {
            var __s27local7 = __s27local6[__s27local5];
            if (__s27local4) {
              if (__s27local7.conditionPassed) {
                return false;
              }
            } else if (__s27local7.conditionPassed) {
              __s27local4 = true;
            }
          }
          return __s27local4;
        case __dep_class_OfferQuestConditionLogicEnum.OfferQuestConditionLogicEnum.NOT:
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
  OfferQuestConditionContainer.prototype.dispose = function () {
    if (this._questConditions) {
      for (var __s47local0 = 0, __s47local1 = Array.from(this._questConditions.values()); __s47local0 < __s47local1.length; __s47local0++) {
        __s47local1[__s47local0].dispose();
      }
      this._questConditions = null;
    }
    this._modelData = null;
  };
  return OfferQuestConditionContainer;
}();
exports.OfferQuestConditionContainer = __s0local0;
