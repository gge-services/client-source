Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = function (__s1param0) {
  function ACollectableItemPercentageBoosterVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemPercentageBoosterVE, __s1param0);
  ACollectableItemPercentageBoosterVE.prototype.iconCreate = function () {
    var __s5local0 = __dep_exact_f855840627e6e145.int(this.itemPercentageBoosterVO.percentageBoosterVO.percentage);
    var __s5local1 = new this.percentageIconClass();
    this.dispCreator.addDisp(__s5local1);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local1.txt_percentage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s5local0]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
  };
  ACollectableItemPercentageBoosterVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  ACollectableItemPercentageBoosterVE.prototype.tooltipCreate = function () {
    return {
      t: this.getBoosterTooltipId(),
      p: [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.itemPercentageBoosterVO.percentageBoosterVO.percentage)]
    };
  };
  ACollectableItemPercentageBoosterVE.prototype.getBoosterTooltipId = function () {
    return "";
  };
  Object.defineProperty(ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemPercentageBoosterVE.prototype, "itemPercentageBoosterVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemPercentageBoosterVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.ACollectableItemPercentageBoosterVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
