Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_ACollectableItemVE = require("gge-module:export_ACollectableItemVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CollectableItemGiftPackageVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGiftPackageVE, __s1param0);
  CollectableItemGiftPackageVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
    var __s5local0 = this.itemGiftPackageVO.getRewardItem();
    if (__s5local0 && __s5local0.itemType != __dep_export_CollectableEnum.CollectableEnum.GIFT_PACKAGE) {
      this._rewardVE = __dep_export_CollectableHelper.CollectableHelper.createVE(__s5local0, __s5param1);
      this.iconContainer.addChild(this.rewardVE.iconContainer);
    }
  };
  CollectableItemGiftPackageVE.prototype.destroy = function () {
    if (this.rewardVE) {
      this.rewardVE.destroy();
      this._rewardVE = null;
    }
    __s1param0.prototype.destroy.call(this);
  };
  CollectableItemGiftPackageVE.prototype.iconUpdate = function () {
    __s1param0.prototype.iconUpdate.call(this);
    if (this.rewardVE) {
      this.rewardVE.iconUpdate();
    }
  };
  CollectableItemGiftPackageVE.prototype.iconDestroy = function () {
    if (this.rewardVE) {
      this.rewardVE.iconDestroy();
    }
    __s1param0.prototype.iconDestroy.call(this);
  };
  CollectableItemGiftPackageVE.prototype.iconCreate = function () {
    var __s17local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("GiftTraderPackageIcon");
    var __s17local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("GiftTraderPackageIcon", __s17local0, null, 0, false);
    var __s17local2 = new __s0local0(this.options.icon.dimension.x * 1.4, this.options.icon.dimension.y * 1.4);
    __s17local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(__s17local2.x, __s17local2.y);
    this.dispCreator.addClip(__s17local1);
  };
  CollectableItemGiftPackageVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemGiftPackageVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemGiftPackageVE.prototype.tooltipCreate = function () {
    var __s23local0 = this.itemGiftPackageVO.playerGiftVO;
    var __s23local1 = __s23local0.eventPackageVO.rewards.getItemByIndexSave(0);
    var __s23local2 = __dep_exact_f855840627e6e145.int(__s23local1 ? __s23local1.amount : 0);
    return {
      t: "equipmentPackage_tt_" + __s23local0.eventPackageVO.packageID,
      p: [__s23local2]
    };
  };
  Object.defineProperty(CollectableItemGiftPackageVE.prototype, "itemGiftPackageVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemGiftPackageVE.prototype, "rewardVE", {
    get: function () {
      return this._rewardVE;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemGiftPackageVE;
}(__dep_export_ACollectableItemVE.ACollectableItemVE);
exports.CollectableItemGiftPackageVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
