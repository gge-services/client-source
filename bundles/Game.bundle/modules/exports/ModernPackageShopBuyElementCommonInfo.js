Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_AModernPackageShopBuyElement = require("gge-module:export_AModernPackageShopBuyElement");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ModernPackageShopBuyElementCommonInfo() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopBuyElementCommonInfo, __s1param0);
  ModernPackageShopBuyElementCommonInfo.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    this.updateIcon();
    this.updateText();
  };
  ModernPackageShopBuyElementCommonInfo.prototype.updateIcon = function () {
    var __s7local0;
    var __s7local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_reward).addInfoBtn(this.disp.btn_info);
    var __s7local2 = __dep_export_CollectableRenderHelper.CollectableRenderHelper.createCollectableLevelIndicatorVO(this.eventPackageVO.reward, new __s0local0(0.8, 0.8), new __s0local0(-52, -51));
    if (__s7local2) {
      __s7local1.addDynamicLevelIndicatorVO(__s7local2);
      __s7local0 = this.getRewardIconOptions(true);
    } else {
      __s7local0 = this.getRewardIconOptions();
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s7local1, this.eventPackageVO.reward, __s7local0);
    if (this.parentDialog.dialogProperties.eventPackageVO.isGiftPackage) {
      var __s7local3 = __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl("GiftTraderPackageIcon");
      var __s7local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("GiftTraderPackageIcon", __s7local3, null, 0, false);
      __s7local4.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT_BG.x, ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT_BG.y);
      __s7local4.x = 1;
      __s7local4.y = -12;
      this.disp.mc_reward.mc_icon.addChildAt(__s7local4, 0);
    }
  };
  ModernPackageShopBuyElementCommonInfo.prototype.updateText = function () {
    var __s12local0;
    var __s12local1 = this.parentDialog.dialogProperties.eventPackageVO;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s12local1.descriptionTextID, __s12local1.descriptionParams)).autoFitToBounds = true;
    if (__s12local1.isStockLimited) {
      if (__s12local1.remainingStock > 1) {
        (__s12local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("shop_limitedPackage_plural")).textReplacements = [__s12local1.remainingStock];
      } else {
        __s12local0 = __s12local1.remainingStock <= 0 ? new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shop_soldOut") : new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("shop_limitedPackage_singular");
      }
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_limit, __s12local0).autoFitToBounds = true;
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_limit, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("")).autoFitToBounds = true;
    }
  };
  Object.defineProperty(ModernPackageShopBuyElementCommonInfo.prototype, "eventPackageVO", {
    get: function () {
      return this.parentDialog.dialogProperties.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyElementCommonInfo.prototype.getRewardIconOptions = function (__s20param0) {
    var __s20local0;
    if (__s20param0 === undefined) {
      __s20param0 = false;
    }
    var __s20local1 = this.parentDialog.dialogProperties.eventPackageVO.isGiftPackage ? ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT : ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE;
    if (__s20param0) {
      (__s20local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC | __dep_export_CollectableRenderOptions.CollectableRenderOptions.DYNAMIC_LEVEL_INDICATOR, __s20local1)).icon.selfLoadlevelIndicator = false;
    } else {
      (__s20local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, __s20local1)).tooltip.showEquipmentCountdown = false;
    }
    return __s20local0;
  };
  ModernPackageShopBuyElementCommonInfo.__initialize_static_members = function () {
    ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE = new __s0local0(136, 132);
    ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT = new __s0local0(95, 95);
    ModernPackageShopBuyElementCommonInfo.REWARD_ICON_SIZE_GIFT_BG = new __s0local0(142, 138);
  };
  return ModernPackageShopBuyElementCommonInfo;
}(__dep_export_AModernPackageShopBuyElement.AModernPackageShopBuyElement);
exports.ModernPackageShopBuyElementCommonInfo = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
