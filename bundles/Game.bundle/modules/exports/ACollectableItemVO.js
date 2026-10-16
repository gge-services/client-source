Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function () {
  function ACollectableItemVO(__s3param0) {
    this._itemType = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    this._grantType = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.RewardConst.PLAYER);
    this._amount = 0;
    this._isSubscriptionBuffed = false;
    this._useSubscriptionStar = false;
    if (this._itemType == __dep_export_CollectableEnum.CollectableEnum.UNKNOWN) {
      this._itemType = __dep_export_CollectableEnum.CollectableEnum.getTypeByDataClass(__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(this));
    }
    this._amount = __s3param0;
  }
  ACollectableItemVO.prototype.parseServerObject = function (__s6param0) {};
  ACollectableItemVO.prototype.parseXmlObject = function (__s8param0) {
    this.amount = __dep_exact_f855840627e6e145.int(__s8param0);
  };
  ACollectableItemVO.prototype.combineWith = function (__s10param0) {
    this.amount += __s10param0.amount;
  };
  ACollectableItemVO.prototype.getTooltipTextId = function () {
    return "";
  };
  ACollectableItemVO.prototype.getDescriptionTextId = function () {
    return "";
  };
  ACollectableItemVO.prototype.getDescriptionTextParams = function () {
    if (this.amount > 0) {
      return [this.amount];
    } else {
      return null;
    }
  };
  ACollectableItemVO.prototype.getNameTextId = function () {
    return this.getTooltipTextId();
  };
  ACollectableItemVO.prototype.getNameTextParams = function () {
    return null;
  };
  ACollectableItemVO.prototype.getTextfieldText = function () {
    return "";
  };
  ACollectableItemVO.prototype.equals = function (__s26param0) {
    return !!__s26param0 && this.itemType == __s26param0.itemType && this.grantType == __s26param0.grantType;
  };
  ACollectableItemVO.prototype.isSameAs = function (__s28param0) {
    return this.equals(__s28param0) && this.amount == __s28param0.amount;
  };
  ACollectableItemVO.prototype.clone = function () {
    var __s30local0 = new (__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(this))();
    __s30local0.amount = this.amount;
    __s30local0.grantType = this.grantType;
    return __s30local0;
  };
  ACollectableItemVO.prototype.isCombineAbleWith = function (__s32param0) {
    return !!__s32param0 && this.grantType == __s32param0.grantType && this.itemType == __s32param0.itemType;
  };
  Object.defineProperty(ACollectableItemVO.prototype, "itemType", {
    get: function () {
      return this._itemType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "grantType", {
    get: function () {
      return this._grantType;
    },
    set: function (__s38param0) {
      this._grantType = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "amount", {
    get: function () {
      return Math.floor(this._amount);
    },
    set: function (__s42param0) {
      this._amount = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "isSubscriptionBuffed", {
    get: function () {
      return this._isSubscriptionBuffed;
    },
    set: function (__s46param0) {
      this._isSubscriptionBuffed = __s46param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "useSubscriptionStar", {
    get: function () {
      return this._useSubscriptionStar;
    },
    set: function (__s50param0) {
      this._useSubscriptionStar = __s50param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "isGuaranteed", {
    get: function () {
      return this._isGuaranteed;
    },
    set: function (__s54param0) {
      this._isGuaranteed = __s54param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "isPurchased", {
    get: function () {
      return this._isPurchased;
    },
    set: function (__s58param0) {
      this._isPurchased = __s58param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    set: function (__s62param0) {
      this._isLocked = __s62param0;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemVO.prototype.getSearchString = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.getNameTextId(), this.getNameTextParams());
  };
  return ACollectableItemVO;
}();
exports.ACollectableItemVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
