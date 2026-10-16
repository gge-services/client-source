Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_PercentageBoosterVO = require("gge-module:export_PercentageBoosterVO");
var __s0local0 = function (__s1param0) {
  function CollectableItemReputationBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemReputationBoosterVO, __s1param0);
  CollectableItemReputationBoosterVO.prototype.parseXmlObject = function (__s5param0) {
    var __s5local0 = __s5param0.split("+");
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5local0[0]);
    var __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0[1]);
    this.percentageBoosterVO = new __dep_export_PercentageBoosterVO.PercentageBoosterVO(__s5local1, __s5local2);
  };
  CollectableItemReputationBoosterVO.prototype.getTooltipTextId = function () {
    return "reputationBooster_name";
  };
  CollectableItemReputationBoosterVO.prototype.getDescriptionTextId = function () {
    return "reputationBooster_short_info";
  };
  CollectableItemReputationBoosterVO.__initialize_static_members = function () {
    CollectableItemReputationBoosterVO.SERVER_KEY = "REPB";
    CollectableItemReputationBoosterVO.XML_KEY = "reputationPointBooster";
  };
  Object.defineProperty(CollectableItemReputationBoosterVO.prototype, "amount", {
    get: function () {
      return 1;
    },
    set: function (__s15param0) {
      this._amount = 1;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemReputationBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemReputationBoosterVO = __s0local0;
__s0local0.__initialize_static_members();
