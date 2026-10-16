Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function PrimeTimeSkinEventEventVO() {
    var __s3local0 = this;
    __s3local0._skinName = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrimeTimeSkinEventEventVO, __s1param0);
  PrimeTimeSkinEventEventVO.prototype.parseBasicsFromParamObject = function (__s5param0) {
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s5param0);
    this._skinName = __s5param0.S;
  };
  Object.defineProperty(PrimeTimeSkinEventEventVO.prototype, "skinName", {
    get: function () {
      return this._skinName;
    },
    enumerable: true,
    configurable: true
  });
  return PrimeTimeSkinEventEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.PrimeTimeSkinEventEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
