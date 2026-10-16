Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function SlumBuildingPartBuildingVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._necessarySlumLevel = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._necessarySlumLevel = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SlumBuildingPartBuildingVO, __s1param0);
  Object.defineProperty(SlumBuildingPartBuildingVO.prototype, "isDamaged", {
    get: function () {
      return this.necessarySlumLevel > this.slumLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumBuildingPartBuildingVO.prototype, "necessarySlumLevel", {
    get: function () {
      return this._necessarySlumLevel;
    },
    enumerable: true,
    configurable: true
  });
  return SlumBuildingPartBuildingVO;
}(require("gge-module:export_ASlumBuildingPartVO").ASlumBuildingPartVO);
exports.SlumBuildingPartBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
