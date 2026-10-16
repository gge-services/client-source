Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function PrimeAlliBonusEventVO() {
    var __s3local0 = this;
    __s3local0._primeFactorInPercent = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrimeAlliBonusEventVO, __s1param0);
  PrimeAlliBonusEventVO.prototype.parseParamObject = function (__s5param0) {
    this._primeFactorInPercent = __dep_exact_f855840627e6e145.int(__s5param0.APP);
  };
  Object.defineProperty(PrimeAlliBonusEventVO.prototype, "primeFactorInPercent", {
    get: function () {
      return this._primeFactorInPercent;
    },
    enumerable: true,
    configurable: true
  });
  PrimeAlliBonusEventVO.prototype.openDialog = function (__s9param0 = true) {
    this.executeOpenDialog(__s9param0, __dep_export_CastlePrimeAlliBonusDialog.CastlePrimeAlliBonusDialog);
  };
  return PrimeAlliBonusEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.PrimeAlliBonusEventVO = __s0local0;
var __dep_export_CastlePrimeAlliBonusDialog = require("gge-module:export_CastlePrimeAlliBonusDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
