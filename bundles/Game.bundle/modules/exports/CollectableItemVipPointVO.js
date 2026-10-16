Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemVipPointVO(__s3param0 = 0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemVipPointVO, __s1param0);
  CollectableItemVipPointVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.amount = __s5param0;
  };
  CollectableItemVipPointVO.prototype.getTooltipTextId = function () {
    return "dialog_VipScreen_premiumPoints_v2";
  };
  CollectableItemVipPointVO.prototype.getDescriptionTextId = function () {
    return "vipPoints_short_info";
  };
  CollectableItemVipPointVO.__initialize_static_members = function () {
    CollectableItemVipPointVO.SERVER_KEY = "VP";
    CollectableItemVipPointVO.XML_KEY = "vipPoints";
  };
  return CollectableItemVipPointVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemVipPointVO = __s0local0;
__s0local0.__initialize_static_members();
