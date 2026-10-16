Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_PlayerGiftVO = require("gge-module:export_PlayerGiftVO");
var __s0local0 = function (__s1param0) {
  function CollectableItemGiftPackageVO(__s3param0 = -1, __s3param1 = 0) {
    var __s3local0 = this;
    __s3local0._id = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1) || this).id = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGiftPackageVO, __s1param0);
  CollectableItemGiftPackageVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.amount = __s5param0[1];
    this.id = __dep_exact_f855840627e6e145.int(__s5param0[0]);
  };
  CollectableItemGiftPackageVO.prototype.parseXmlObject = function (__s7param0) {
    var __s7local0 = __s7param0.split("+");
    this.amount = __dep_exact_f855840627e6e145.int(__s7local0[1]);
    this.id = __dep_exact_f855840627e6e145.int(__s7local0[0]);
  };
  CollectableItemGiftPackageVO.prototype.updateGiftVO = function () {
    if (this.id > 0) {
      this._playerGiftVO = new __dep_export_PlayerGiftVO.PlayerGiftVO();
      this._playerGiftVO.parseFromArray([this.id, this.amount]);
    }
  };
  CollectableItemGiftPackageVO.prototype.getTooltipTextId = function () {
    return "gift_name";
  };
  CollectableItemGiftPackageVO.prototype.getDescriptionTextId = function () {
    return "gift_short_info";
  };
  CollectableItemGiftPackageVO.prototype.clone = function () {
    var __s16local0 = __s1param0.prototype.clone.call(this);
    __s16local0.playerGiftVO = this.playerGiftVO;
    return __s16local0;
  };
  CollectableItemGiftPackageVO.prototype.isCombineAbleWith = function (__s18param0) {
    return false;
  };
  CollectableItemGiftPackageVO.prototype.getRewardItem = function () {
    if (this.playerGiftVO) {
      return this.playerGiftVO.eventPackageVO.reward;
    } else {
      return this;
    }
  };
  Object.defineProperty(CollectableItemGiftPackageVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s26param0) {
      this._id = __s26param0;
      this.updateGiftVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemGiftPackageVO.prototype, "playerGiftVO", {
    get: function () {
      return this._playerGiftVO;
    },
    set: function (__s30param0) {
      this._playerGiftVO = __s30param0;
      this._id = __dep_exact_f855840627e6e145.int(this.playerGiftVO ? this.playerGiftVO.packageID : -1);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemGiftPackageVO.__initialize_static_members = function () {
    CollectableItemGiftPackageVO.SERVER_KEY = "GT";
    CollectableItemGiftPackageVO.XML_KEY = "giftPackageIDs";
  };
  return CollectableItemGiftPackageVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemGiftPackageVO = __s0local0;
__s0local0.__initialize_static_members();
