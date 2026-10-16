Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ASlumBuildingPartVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Slum";
    __s3local0._group = "Surroundings";
    __s3local0._posOffset = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ASlumBuildingPartVO, __s1param0);
  Object.defineProperty(ASlumBuildingPartVO.prototype, "parentVO", {
    get: function () {
      return this._parentVO;
    },
    set: function (__s7param0) {
      this._parentVO = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASlumBuildingPartVO.prototype, "slumData", {
    get: function () {
      return this.parentVO.slumData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASlumBuildingPartVO.prototype, "slumLevel", {
    get: function () {
      if (this.parentVO) {
        return this.parentVO.slumLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASlumBuildingPartVO.prototype, "posOffset", {
    get: function () {
      return this._posOffset;
    },
    set: function (__s17param0) {
      this._posOffset = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  return ASlumBuildingPartVO;
}(require("gge-module:export_ASurroundingBuildingVO").ASurroundingBuildingVO);
exports.ASlumBuildingPartVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
