Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemResourcePointVO(__s3param0 = 0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemResourcePointVO, __s1param0);
  CollectableItemResourcePointVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.amount = __s5param0[1];
  };
  CollectableItemResourcePointVO.prototype.getTooltipTextId = function () {
    return "colossus_donateResource_labelPoints";
  };
  CollectableItemResourcePointVO.prototype.getDescriptionTextId = function () {
    return "colossusPoints_short_info";
  };
  CollectableItemResourcePointVO.__initialize_static_members = function () {
    CollectableItemResourcePointVO.SERVER_KEY = "RP_OLD";
    CollectableItemResourcePointVO.XML_KEY = "resourcePoints";
  };
  return CollectableItemResourcePointVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemResourcePointVO = __s0local0;
__s0local0.__initialize_static_members();
