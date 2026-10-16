Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function SeasonPassPrimeSaleEventVO() {
    var __s3local0 = this;
    __s3local0._discount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonPassPrimeSaleEventVO, __s1param0);
  SeasonPassPrimeSaleEventVO.prototype.parseParamObject = function (__s5param0) {
    this._discount = __dep_exact_f855840627e6e145.int(__s5param0.DIS);
  };
  Object.defineProperty(SeasonPassPrimeSaleEventVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonPassPrimeSaleEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.SeasonPassPrimeSaleEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
