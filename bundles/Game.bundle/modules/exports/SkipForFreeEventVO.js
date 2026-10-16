Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function SkipForFreeEventVO() {
    var __s3local0 = this;
    __s3local0._seconds = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._seconds = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SkipForFreeEventVO, __s1param0);
  SkipForFreeEventVO.prototype.parseParamObject = function (__s5param0) {
    this._seconds = __dep_exact_f855840627e6e145.int(__s5param0.SEC);
  };
  SkipForFreeEventVO.prototype.calculateSkipCosts = function (__s7param0, __s7param1) {
    if (__s7param1 <= this.seconds) {
      return 0;
    } else {
      return __s7param0;
    }
  };
  Object.defineProperty(SkipForFreeEventVO.prototype, "seconds", {
    get: function () {
      return this._seconds;
    },
    enumerable: true,
    configurable: true
  });
  return SkipForFreeEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.SkipForFreeEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
