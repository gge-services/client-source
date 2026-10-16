Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CollectableItemAlienProtectionVO(__s3param0 = -1) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this)._id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemAlienProtectionVO, __s1param0);
  CollectableItemAlienProtectionVO.prototype.parseXmlObject = function (__s5param0) {
    this.id = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s5param0));
  };
  CollectableItemAlienProtectionVO.prototype.getTooltipTextId = function () {
    return "repairAll_gift";
  };
  CollectableItemAlienProtectionVO.prototype.clone = function () {
    var __s9local0 = __s1param0.prototype.clone.call(this);
    __s9local0.id = this.id;
    return __s9local0;
  };
  CollectableItemAlienProtectionVO.prototype.isCombineAbleWith = function (__s11param0) {
    return false;
  };
  Object.defineProperty(CollectableItemAlienProtectionVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s15param0) {
      this._id = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAlienProtectionVO.__initialize_static_members = function () {
    CollectableItemAlienProtectionVO.SERVER_KEY = "AIP";
    CollectableItemAlienProtectionVO.XML_KEY = "alienProtection";
  };
  return CollectableItemAlienProtectionVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemAlienProtectionVO = __s0local0;
__s0local0.__initialize_static_members();
