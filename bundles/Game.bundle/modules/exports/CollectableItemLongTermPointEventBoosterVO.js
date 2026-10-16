Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_PercentageBoosterVO = require("gge-module:export_PercentageBoosterVO");
var __s0local0 = function (__s1param0) {
  function CollectableItemLongTermPointEventBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemLongTermPointEventBoosterVO, __s1param0);
  CollectableItemLongTermPointEventBoosterVO.prototype.parseXmlObject = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5local0[0]);
    var __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0[1]);
    this.percentageBoosterVO = new __dep_export_PercentageBoosterVO.PercentageBoosterVO(__s5local1, __s5local2);
  };
  CollectableItemLongTermPointEventBoosterVO.prototype.getTooltipTextId = function () {
    return "longPointsEventBooster_name";
  };
  CollectableItemLongTermPointEventBoosterVO.prototype.getDescriptionTextId = function () {
    return "longPointsEventBooster_short_info";
  };
  CollectableItemLongTermPointEventBoosterVO.__initialize_static_members = function () {
    CollectableItemLongTermPointEventBoosterVO.SERVER_KEY = "LTB";
    CollectableItemLongTermPointEventBoosterVO.XML_KEY = "longTermPointEventBooster";
  };
  return CollectableItemLongTermPointEventBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemLongTermPointEventBoosterVO = __s0local0;
__s0local0.__initialize_static_members();
