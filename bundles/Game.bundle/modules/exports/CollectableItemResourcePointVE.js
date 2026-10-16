Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CollectableItemResourcePointVE() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemResourcePointVE, __s1param0);
  CollectableItemResourcePointVE.prototype.iconCreate = function () {
    this.dispCreator.addClip(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CollectableItemResourcePointVE.RESOURCE_POINTS_ICON_ASSET_NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CollectableItemResourcePointVE.RESOURCE_POINTS_ICON_ASSET_NAME), null, 0, false));
  };
  CollectableItemResourcePointVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemResourcePointVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemResourcePointVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByAmount(this.vo.getTooltipTextId());
  };
  CollectableItemResourcePointVE.__initialize_static_members = function () {
    CollectableItemResourcePointVE.RESOURCE_POINTS_ICON_ASSET_NAME = "ResourcePointsIcon";
  };
  return CollectableItemResourcePointVE;
}(require("gge-module:export_ACollectableItemSimpleIconVE").ACollectableItemSimpleIconVE);
exports.CollectableItemResourcePointVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
