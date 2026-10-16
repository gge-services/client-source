Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __s0local0 = function () {
  function ABasicQuestConditionVO() {
    this._conditionCounter = 0;
    this._conditionMaxCounter = 0;
    this._questID = 0;
    this._conditionCounter = 0;
  }
  ABasicQuestConditionVO.prototype.loadFromParamArray = function (__s5param0) {
    this._conditionType = __s5param0[0];
    this._conditionMaxCounter = __dep_exact_f855840627e6e145.int(__s5param0[1]);
    this._conditionData = String(__s5param0[2]).split("|");
    for (var __s5local0 = 0; __s5local0 < this._conditionData.length; __s5local0++) {
      this._conditionData[__s5local0] = parseInt(this._conditionData[__s5local0]);
    }
  };
  ABasicQuestConditionVO.prototype.hasConditionType = function (__s9param0) {
    return __s9param0 == this._conditionType;
  };
  Object.defineProperty(ABasicQuestConditionVO.prototype, "conditionType", {
    get: function () {
      return this._conditionType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicQuestConditionVO.prototype, "conditionCounter", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    set: function (__s15param0) {
      this._conditionCounter = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicQuestConditionVO.prototype, "conditionMaxCounter", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicQuestConditionVO.prototype, "conditionData", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ABasicQuestConditionVO.prototype.isDone = function () {
    return this._conditionCounter == -1 || this._conditionCounter >= this.conditionMaxCounter;
  };
  ABasicQuestConditionVO.prototype.isInProgress = function () {
    return this._conditionCounter > 0;
  };
  Object.defineProperty(ABasicQuestConditionVO.prototype, "questID", {
    set: function (__s25param0) {
      this._questID = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  return ABasicQuestConditionVO;
}();
exports.ABasicQuestConditionVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShowMeQuestConditionVO");
