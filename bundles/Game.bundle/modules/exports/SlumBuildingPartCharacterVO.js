Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function SlumBuildingPartCharacterVO(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, null) || this;
    __s3local0._indoorPos = __s3param0;
    __s3local0._outdoorPos = __s3param1;
    __s3local0.updatePosOffset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SlumBuildingPartCharacterVO, __s1param0);
  SlumBuildingPartCharacterVO.prototype.updateData = function () {
    this.updatePosOffset();
    __s1param0.prototype.updateData.call(this);
  };
  SlumBuildingPartCharacterVO.prototype.updatePosOffset = function () {
    this.posOffset = this.isIndoor ? this.indoorPos : this.outdoorPos;
  };
  Object.defineProperty(SlumBuildingPartCharacterVO.prototype, "isIndoor", {
    get: function () {
      return this.slumLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumBuildingPartCharacterVO.prototype, "indoorPos", {
    get: function () {
      return this._indoorPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumBuildingPartCharacterVO.prototype, "outdoorPos", {
    get: function () {
      return this._outdoorPos;
    },
    enumerable: true,
    configurable: true
  });
  return SlumBuildingPartCharacterVO;
}(require("gge-module:export_ASlumBuildingPartVO").ASlumBuildingPartVO);
exports.SlumBuildingPartCharacterVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
