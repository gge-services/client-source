Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function ACollectableItemPermanentSlotVE() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemPermanentSlotVE, __s1param0);
  ACollectableItemPermanentSlotVE.prototype.iconCreate = function () {
    this.dispCreator.addClip(this._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(ACollectableItemPermanentSlotVE.PERMANENT_UNIT_AND_TOOL_SLOT, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(ACollectableItemPermanentSlotVE.PERMANENT_UNIT_AND_TOOL_SLOT), null, 0, false));
  };
  Object.defineProperty(ACollectableItemPermanentSlotVE.prototype, "iconMcFrame", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemPermanentSlotVE.prototype.onAllDispClipsLoaded = function (__s9param0 = null) {
    this._clip.currentshownDisplayObject.gotoAndStop(this.iconMcFrame);
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s9param0);
  };
  ACollectableItemPermanentSlotVE.__initialize_static_members = function () {
    ACollectableItemPermanentSlotVE.PERMANENT_UNIT_AND_TOOL_SLOT = "UnitAToolSlot";
  };
  return ACollectableItemPermanentSlotVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.ACollectableItemPermanentSlotVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
