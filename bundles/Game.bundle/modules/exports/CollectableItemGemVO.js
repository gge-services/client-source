Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CollectableItemGemVO(__s3param0 = -1) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGemVO, __s1param0);
  CollectableItemGemVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.id = __s5param0;
  };
  CollectableItemGemVO.prototype.parseXmlObject = function (__s7param0) {
    this.id = __dep_exact_f855840627e6e145.int(__s7param0);
  };
  CollectableItemGemVO.__initialize_static_members = function () {
    CollectableItemGemVO.SERVER_KEY = "GID";
    CollectableItemGemVO.XML_KEY = "gemIDs";
  };
  return CollectableItemGemVO;
}(require("gge-module:export_ACollectableItemGemVO").ACollectableItemGemVO);
exports.CollectableItemGemVO = __s0local0;
__s0local0.__initialize_static_members();
