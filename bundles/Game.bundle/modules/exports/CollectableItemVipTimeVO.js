Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function CollectableItemVipTimeVO(__s3param0 = 0) {
    var __s3local0 = this;
    __s3local0._duration = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this)._duration = __s3param0;
    if (isNaN(__s3param0)) {
      __s3local0._duration = 0;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemVipTimeVO, __s1param0);
  CollectableItemVipTimeVO.prototype.parseServerObject = function (__s6param0) {
    __s1param0.prototype.parseServerObject.call(this, __s6param0);
    this._duration = __s6param0;
  };
  CollectableItemVipTimeVO.prototype.parseXmlObject = function (__s8param0) {
    this._duration = Number(__s8param0);
  };
  CollectableItemVipTimeVO.prototype.combineWith = function (__s10param0) {
    this.duration += __s10param0.duration;
  };
  CollectableItemVipTimeVO.prototype.getTooltipTextId = function () {
    return "dialog_VipScreen_vipTime";
  };
  CollectableItemVipTimeVO.prototype.getDescriptionTextId = function () {
    return "vipTime_short_info";
  };
  CollectableItemVipTimeVO.prototype.clone = function () {
    var __s16local0 = __s1param0.prototype.clone.call(this);
    __s16local0.duration = this.duration;
    return __s16local0;
  };
  CollectableItemVipTimeVO.prototype.getTextfieldText = function () {
    return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.duration);
  };
  Object.defineProperty(CollectableItemVipTimeVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    set: function (__s22param0) {
      this._duration = __s22param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemVipTimeVO.__initialize_static_members = function () {
    CollectableItemVipTimeVO.SERVER_KEY = "VT";
    CollectableItemVipTimeVO.XML_KEY = "vipTime";
  };
  return CollectableItemVipTimeVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemVipTimeVO = __s0local0;
__s0local0.__initialize_static_members();
