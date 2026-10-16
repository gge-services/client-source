Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AllianceGiftTypeEnum = require("gge-module:export_AllianceGiftTypeEnum");
var __s0local0 = function (__s1param0) {
  function CollectableItemAllianceGiftVO(__s3param0 = null) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 1) || this)._giftType = __s3param0 || __dep_export_AllianceGiftTypeEnum.AllianceGiftTypeEnum.TYPE_UNKNOWN;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemAllianceGiftVO, __s1param0);
  CollectableItemAllianceGiftVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this._giftType = __s5param0.T ? __dep_export_AllianceGiftTypeEnum.AllianceGiftTypeEnum.getTypeByName(__s5param0.T) : __dep_export_AllianceGiftTypeEnum.AllianceGiftTypeEnum.TYPE_UNKNOWN;
  };
  CollectableItemAllianceGiftVO.prototype.parseXmlObject = function (__s7param0) {
    var __s7local0 = __s7param0.split("+");
    this.giftType = __dep_export_AllianceGiftTypeEnum.AllianceGiftTypeEnum.getTypeByName(__s7local0[0]);
  };
  CollectableItemAllianceGiftVO.prototype.getTooltipTextId = function () {
    return "gift_name";
  };
  CollectableItemAllianceGiftVO.prototype.getDescriptionTextId = function () {
    return "gift_short_info";
  };
  CollectableItemAllianceGiftVO.prototype.clone = function () {
    var __s13local0 = __s1param0.prototype.clone.call(this);
    __s13local0.giftType = this.giftType;
    return __s13local0;
  };
  CollectableItemAllianceGiftVO.prototype.isCombineAbleWith = function (__s15param0) {
    return false;
  };
  Object.defineProperty(CollectableItemAllianceGiftVO.prototype, "giftType", {
    get: function () {
      return this._giftType;
    },
    set: function (__s19param0) {
      this._giftType = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAllianceGiftVO.__initialize_static_members = function () {
    CollectableItemAllianceGiftVO.SERVER_KEY = "AG";
    CollectableItemAllianceGiftVO.XML_KEY = "allianceGift";
  };
  return CollectableItemAllianceGiftVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemAllianceGiftVO = __s0local0;
__s0local0.__initialize_static_members();
