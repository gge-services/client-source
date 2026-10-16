Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function DecorationForgeSelectionListItemVO(__s3param0 = null, __s3param1 = false, __s3param2 = null) {
    this.data = null;
    this.isSelected = false;
    this._fusionXP = 0;
    this.data = __s3param0;
    this.isSelected = __s3param1;
    this.targetDecoItemVO = __s3param2;
    var __s3local0 = __dep_exact_81dacdf05bd32292.castAs(__s3param0, "CollectableItemBuildingVO");
    if (__s3local0) {
      var __s3local1 = __s3local0.buildingVO;
      var __s3local2 = __s3param2.buildingVO;
      this._fusionXP = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FusionConst.getFusionXPFromSource(__s3local1.fusionInfoVO.getCurrentLevel(), __s3local2.fusionInfoVO.getCurrentLevel()));
    }
  }
  Object.defineProperty(DecorationForgeSelectionListItemVO.prototype, "fusionXP", {
    get: function () {
      return this._fusionXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectionListItemVO.prototype, "collectableBuildingVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectionListItemVO.prototype, "sourceIsFeederDeco", {
    get: function () {
      var __s10local0 = this.data.buildingVO.fusionInfoVO;
      return __s10local0.isFusionSource && !__s10local0.isFusionTarget;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectionListItemVO;
}();
exports.DecorationForgeSelectionListItemVO = __s0local0;
