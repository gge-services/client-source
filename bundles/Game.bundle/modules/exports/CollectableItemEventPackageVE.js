Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CollectableItemEventPackageVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemEventPackageVE, __s1param0);
  CollectableItemEventPackageVE.prototype.iconCreate = function () {
    var __s5local0 = "Package" + this.itemEventPackageVO.eventPackageVO.packageID;
    if (!__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s5local0)) {
      __s5local0 = CollectableItemEventPackageVE.ASSET_NAME_DEFAULT;
    }
    if (this.itemEventPackageVO) {
      for (var __s5local1 = 0; __s5local1 < this.itemEventPackageVO.eventPackageVO.rewards.length; __s5local1++) {
        if (this.itemEventPackageVO.eventPackageVO.rewards.getItemByIndex(__s5local1)) {
          var __s5local2 = this.itemEventPackageVO.eventPackageVO.rewards.getItemByIndex(__s5local1).equipmentVO;
          if (__s5local2 && !__s5local2.isPermanent) {
            __s5local0 = CollectableItemEventPackageVE.ASSET_NAME_TEMPORARY;
          }
        }
      }
    }
    var __s5local3 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local0);
    var __s5local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __s5local3, null, 0, false);
    __s5local4.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(this.options.icon.dimension.x, this.options.icon.dimension.y);
    this.dispCreator.addClip(__s5local4);
  };
  CollectableItemEventPackageVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemEventPackageVE.prototype.tooltipCreate = function () {
    return {
      t: this.itemEventPackageVO.getNameTextId(),
      p: this.itemEventPackageVO.getNameTextParams()
    };
  };
  Object.defineProperty(CollectableItemEventPackageVE.prototype, "itemEventPackageVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemEventPackageVE.ASSET_NAME_DEFAULT = "EventPackageBundle_Default";
  CollectableItemEventPackageVE.ASSET_NAME_TEMPORARY = "EventPackageBundle_Temporary";
  return CollectableItemEventPackageVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.CollectableItemEventPackageVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
