Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemHeroRandomVO(__s3param0 = -1, __s3param1 = 1) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemHeroRandomVO, __s1param0);
  CollectableItemHeroRandomVO.prototype.getTooltipTextId = function () {
    return "equipment_slotType_hero";
  };
  CollectableItemHeroRandomVO.__initialize_static_members = function () {
    CollectableItemHeroRandomVO.SERVER_KEY = "RE";
  };
  return CollectableItemHeroRandomVO;
}(require("gge-module:export_CollectableItemEquipmentRarenessVO").CollectableItemEquipmentRarenessVO);
exports.CollectableItemHeroRandomVO = __s0local0;
__s0local0.__initialize_static_members();
