Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ACollectableItemResourceVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemResourceVE, __s1param0);
  ACollectableItemResourceVE.prototype.storageBarScale = function () {
    if (this.renderer.options.storage.fixedStorageMaximum > -1 && this.renderer.options.storage.fixedStorageMaximum !== undefined) {
      var __s5local0 = this.renderer.options.storage.fixedStorageMaximum;
      return this.vo.amount / __s5local0;
    }
    if (__dep_export_CastleModel.CastleModel.areaData && __dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeStorage) {
      __s5local0 = __dep_export_CastleModel.CastleModel.areaData.activeStorage.getItem(this.vo.itemType).maxAmount;
      return this.vo.amount / __s5local0;
    }
    return 0;
  };
  return ACollectableItemResourceVE;
}(require("gge-module:export_ACollectableItemGoodsVE").ACollectableItemGoodsVE);
exports.ACollectableItemResourceVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
