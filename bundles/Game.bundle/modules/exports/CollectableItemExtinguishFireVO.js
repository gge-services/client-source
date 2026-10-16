Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemExtinguishFireVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemExtinguishFireVO, __s1param0);
  CollectableItemExtinguishFireVO.prototype.getTooltipTextId = function () {
    return "extinguishFire_name";
  };
  CollectableItemExtinguishFireVO.prototype.getDescriptionTextId = function () {
    return "extinguishFire_short_info";
  };
  CollectableItemExtinguishFireVO.prototype.isCombineAbleWith = function (__s9param0) {
    return false;
  };
  CollectableItemExtinguishFireVO.__initialize_static_members = function () {
    CollectableItemExtinguishFireVO.SERVER_KEY = "EF";
    CollectableItemExtinguishFireVO.XML_KEY = "extinguishFire";
  };
  return CollectableItemExtinguishFireVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemExtinguishFireVO = __s0local0;
__s0local0.__initialize_static_members();
