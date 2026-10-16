Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_AMerchantScrollItem = require("gge-module:export_AMerchantScrollItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function PlayerGiftMerchantScrollItem(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PlayerGiftMerchantScrollItem, __s1param0);
  Object.defineProperty(PlayerGiftMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return __dep_export_CastlePlayerGiftMerchantBuyDialog.CastlePlayerGiftMerchantBuyDialog;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantScrollItem.AMerchantScrollItem.prototype, "dialogKey").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftMerchantScrollItem.prototype, "rewardIconSize", {
    get: function () {
      return PlayerGiftMerchantScrollItem.ICON_SIZE_GIFT_REWARD;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AMerchantScrollItem.AMerchantScrollItem.prototype, "rewardIconSize").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  PlayerGiftMerchantScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    if (this.packageScrollItemVO) {
      var __s13local0 = this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM || this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM || this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_HERO;
      this.disp.mc_ring.visible = !__s13local0;
    }
  };
  PlayerGiftMerchantScrollItem.__initialize_static_members = function () {
    PlayerGiftMerchantScrollItem.ICON_SIZE_GIFT_REWARD = new __s0local0(46, 46);
  };
  return PlayerGiftMerchantScrollItem;
}(__dep_export_AMerchantScrollItem.AMerchantScrollItem);
exports.PlayerGiftMerchantScrollItem = __s0local1;
var __dep_export_CastlePlayerGiftMerchantBuyDialog = require("gge-module:export_CastlePlayerGiftMerchantBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
__s0local1.__initialize_static_members();
