Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TempServerMultiplierEventVO() {
    var __s3local0 = this;
    __s3local0._currentMinMultiplier = 1;
    __s3local0._currentMaxMultiplier = 1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TempServerMultiplierEventVO, __s1param0);
  TempServerMultiplierEventVO.prototype.parseParamObject = function (__s5param0) {
    this._currentMinMultiplier = __s5param0.DPMM;
    this._currentMaxMultiplier = __s5param0.DPXM;
  };
  Object.defineProperty(TempServerMultiplierEventVO.prototype, "currentMinMultiplier", {
    get: function () {
      return this._currentMinMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerMultiplierEventVO.prototype, "currentMaxMultiplier", {
    get: function () {
      return this._currentMaxMultiplier;
    },
    enumerable: true,
    configurable: true
  });
  return TempServerMultiplierEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.TempServerMultiplierEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
