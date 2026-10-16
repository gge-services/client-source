Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function InfiniteScrollPackageShopListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InfiniteScrollPackageShopListItem, __s1param0);
  InfiniteScrollPackageShopListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.getItemMc()], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  InfiniteScrollPackageShopListItem.prototype.fill = function () {
    this.destroyCollectableRenderList();
    var __s7local0;
    var __s7local1 = !__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this.shopListItemVO.eventPackageVO.packageID).isAvailable();
    var __s7local2 = this.shopListItemVO.eventPackageVO.reward;
    var __s7local3 = new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.getItemMc().mc_icon).addTextfield(this.getItemMc().txt_text);
    var __s7local4 = __dep_export_CollectableRenderHelper.CollectableRenderHelper.createCollectableLevelIndicatorVO(__s7local2, new __s0local0(0.5, 0.5), new __s0local0(-31, -22));
    var __s7local5 = this.shopListItemVO.eventPackageVO.isGiftPackage ? InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT : InfiniteScrollPackageShopListItem.ICON_SIZE;
    if (__s7local4) {
      __s7local3.addDynamicLevelIndicatorVO(__s7local4);
      (__s7local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON | __dep_export_CollectableRenderOptions.CollectableRenderOptions.DYNAMIC_LEVEL_INDICATOR, __s7local5)).icon.selfLoadlevelIndicator = false;
    } else {
      __s7local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, __s7local5);
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s7local3, __s7local2, __s7local0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.getItemMc().mc_cost), this.shopListItemVO.eventPackageVO.price, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST_NO_TOOLTIP, new __s0local0(30, 20)));
    if (this.shopListItemVO.eventPackageVO.isGiftPackage) {
      var __s7local6 = __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl("GiftTraderPackageIcon");
      var __s7local7 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("GiftTraderPackageIcon", __s7local6, null, 0, false);
      __s7local7.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT_BG.x, InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT_BG.y);
      __s7local7.y = -5;
      this.getItemMc().mc_icon.addChildAt(__s7local7, 0);
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_name, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_giftTrader_giftColonPlaceholder", [__dep_exact_92d05af59ee2ff30_2.Localize.text(__s7local2.getNameTextId(), __s7local2.getNameTextParams())]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_name, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__s7local2.getNameTextId(), __s7local2.getNameTextParams()), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_text, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("generic_amount_reward", [__s7local2.amount, new __dep_exact_92d05af59ee2ff30_1.TextVO(" ")]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_soldOut.txt_text, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_shop_soldOut"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.getItemMc().mc_soldOut.visible = __s7local1;
    var __s7local8 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.shopListItemVO.eventPackageVO.packageID));
    this.getItemMc().mc_discount.visible = __s7local8 > 0;
    this.getItemMc().mc_oldCost.visible = __s7local8 > 0;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_discount.txt_priceReduction, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s7local8]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_oldCost.txt_oldCost, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.shopListItemVO.eventPackageVO.basicPriceC2), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.getItemMc().mc_bestseller.visible = false;
    if (__dep_export_CastleModel.CastleModel.settingsData.showPackageIDToolTips) {
      this.disp.toolTipText = "packageID: " + this.shopListItemVO.eventPackageVO.packageID;
    } else if (__s7local1) {
      if (this.shopListItemVO.eventPackageVO.notRebuyable) {
        this.disp.toolTipText = "dialogs_shop_soldOut_permanently_tooltip";
      } else {
        this.disp.toolTipText = "dialog_merchant_outOfStock_tooltip";
      }
    } else {
      this.disp.toolTipText = "dialog_equipmentMerchantEvent_tooltip";
    }
  };
  InfiniteScrollPackageShopListItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChanged));
  };
  InfiniteScrollPackageShopListItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChanged));
  };
  InfiniteScrollPackageShopListItem.prototype.onCurrencyChanged = function (__s22param0) {
    this.update();
  };
  InfiniteScrollPackageShopListItem.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    if (this.shopListItemVO.eventPackageVO) {
      var __s24local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
      __s24local0.parseDataFromScrollItem(this.shopListItemVO);
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s24local0);
    }
  };
  Object.defineProperty(InfiniteScrollPackageShopListItem.prototype, "shopListItemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  InfiniteScrollPackageShopListItem.__initialize_static_members = function () {
    InfiniteScrollPackageShopListItem.ICON_SIZE = new __s0local0(64, 64);
    InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT = new __s0local0(43, 43);
    InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT_BG = new __s0local0(65, 65);
  };
  return InfiniteScrollPackageShopListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.InfiniteScrollPackageShopListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
