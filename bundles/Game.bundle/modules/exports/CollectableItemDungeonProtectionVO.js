Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemDungeonProtectionVO(__s3param0 = 0) {
    var __s3local0 = this;
    __s3local0._duration = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this)._duration = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemDungeonProtectionVO, __s1param0);
  CollectableItemDungeonProtectionVO.prototype.combineWith = function (__s5param0) {
    this.duration += __s5param0.duration;
  };
  CollectableItemDungeonProtectionVO.prototype.getDescriptionTextId = function () {
    return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dungeon_protection_short_info");
  };
  CollectableItemDungeonProtectionVO.prototype.getTooltipTextId = function () {
    return "protection";
  };
  Object.defineProperty(CollectableItemDungeonProtectionVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    set: function (__s13param0) {
      this._duration = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemDungeonProtectionVO.SERVER_KEY = "DPT";
  CollectableItemDungeonProtectionVO.XML_KEY = "dungeonProtectionTime";
  return CollectableItemDungeonProtectionVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemDungeonProtectionVO = __s0local0;
