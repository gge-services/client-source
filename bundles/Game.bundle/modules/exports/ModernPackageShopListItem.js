Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ModernPackageShopListItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._buyType = -1;
    __s3local0._buyTypeId = -1;
    __s3local0._isSoldOut = false;
    __s3local0._isSpecialPackage = false;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0, 1.025);
    if (__s3param0.mc_mouseOver && __s3param0.mc_downState) {
      __s3local0._clickbehaviour = new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(__s3param0);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPackageShopListItem, __s1param0);
  ModernPackageShopListItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChanged));
    if (this._clickbehaviour) {
      this._clickbehaviour.addEventListener();
    }
  };
  ModernPackageShopListItem.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChanged));
    __s1param0.prototype.removeEventListener.call(this);
    if (this._clickbehaviour) {
      this._clickbehaviour.removeEventListener();
    }
  };
  ModernPackageShopListItem.prototype.updateWithNewData = function (__s12param0, __s12param1, __s12param2 = -1, __s12param3 = -1) {
    this._eventVO = __s12param1;
    this._eventPackageVO = __s12param0;
    this._buyType = __s12param2;
    this._buyTypeId = __s12param3;
    this.update();
  };
  ModernPackageShopListItem.prototype.update = function () {
    this.destroyCollectableRenderList();
    this.disp.visible = this._eventPackageVO != null;
    if (this._eventPackageVO) {
      this._isSoldOut = !__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this._eventPackageVO.packageID).isAvailable();
      this._isSpecialPackage = false;
      var __s14local0 = this._eventPackageVO.reward;
      var __s14local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(this.disp.mc_icon).addTextfield(this.disp.txt_text);
      var __s14local2 = __dep_export_CollectableRenderHelper.CollectableRenderHelper.createCollectableLevelIndicatorVO(__s14local0, new __s0local0(0.5, 0.5), new __s0local0(-26, -26));
      var __s14local3 = this._eventPackageVO.isGiftPackage ? ModernPackageShopListItem.ICON_SIZE_GIFT : ModernPackageShopListItem.ICON_SIZE;
      var __s14local4 = undefined;
      if (__s14local2) {
        __s14local1.addDynamicLevelIndicatorVO(__s14local2);
        (__s14local4 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON | __dep_export_CollectableRenderOptions.CollectableRenderOptions.TEXTFIELD | __dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM | __dep_export_CollectableRenderOptions.CollectableRenderOptions.DYNAMIC_LEVEL_INDICATOR, __s14local3)).icon.selfLoadlevelIndicator = false;
      } else {
        __s14local4 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON | __dep_export_CollectableRenderOptions.CollectableRenderOptions.TEXTFIELD | __dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM, __s14local3);
      }
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s14local1, __s14local0, __s14local4, this.preRenderFunc);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_cost), this._eventPackageVO.price, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST_NO_TOOLTIP, new __s0local0(30, 30)));
      if (this._eventPackageVO.isGiftPackage) {
        var __s14local5 = __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl("GiftTraderPackageIcon");
        var __s14local6 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("GiftTraderPackageIcon", __s14local5, null, 0, false);
        __s14local6.clipSizeComponent = new __dep_exact_9e901e8e2483a22f.ClipSizeComponent(ModernPackageShopListItem.ICON_SIZE_GIFT_BG.x, ModernPackageShopListItem.ICON_SIZE_GIFT_BG.y);
        __s14local6.x = 2;
        __s14local6.y = -5;
        this.disp.mc_icon.addChildAt(__s14local6, 0);
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_giftTrader_giftColonPlaceholder", [__dep_exact_92d05af59ee2ff30.Localize.text(__s14local0.getNameTextId(), __s14local0.getNameTextParams())])).autoFitToBounds = true;
      } else {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s14local0.getNameTextId(), __s14local0.getNameTextParams())).autoFitToBounds = true;
      }
      this.disp.mc_discount.visible = false;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_soldOut.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_shop_soldOut")).autoFitToBounds = true;
      this.disp.mc_soldOut.visible = this._isSoldOut;
      if (this.disp.mc_special) {
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_special.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("special_package")).autoFitToBounds = true;
        this.disp.mc_special.visible = this._isSpecialPackage;
      }
      if (__dep_export_CastleModel.CastleModel.settingsData.showPackageIDToolTips) {
        this.disp.toolTipText = "packageID: " + this._eventPackageVO.packageID;
      } else if (this._isSoldOut) {
        if (this._eventPackageVO.notRebuyable) {
          this.disp.toolTipText = "dialogs_shop_soldOut_permanently_tooltip";
        } else {
          this.disp.toolTipText = "dialog_merchant_outOfStock_tooltip";
        }
      } else {
        this.disp.toolTipText = "dialog_equipmentMerchantEvent_tooltip";
      }
    }
  };
  ModernPackageShopListItem.prototype.preRenderFunc = function (__s27param0) {
    if (__s27param0.itemVO) {
      var __s27local0 = __s27param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      __s27local0.transform.offset.y = 1;
      __s27local0.transform.offset.x = 2;
    }
  };
  ModernPackageShopListItem.prototype.onClick = function (__s30param0) {
    __s1param0.prototype.onClick.call(this, __s30param0);
    if (this._eventPackageVO) {
      var __s30local0 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
      __s30local0.eventPackageVO = this._eventPackageVO;
      __s30local0.specialEventVO = this._eventVO;
      __s30local0.buyType = this.buyType;
      __s30local0.buyTypeId = this.buyTypeId;
      var __s30local1 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
      __s30local1.parseDataFromScrollItem(__s30local0);
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s30local1);
    }
  };
  ModernPackageShopListItem.prototype.onCurrencyChanged = function (__s33param0) {
    this.update();
  };
  Object.defineProperty(ModernPackageShopListItem.prototype, "buyType", {
    get: function () {
      return this._buyType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopListItem.prototype, "buyTypeId", {
    get: function () {
      return this._buyTypeId;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopListItem.__initialize_static_members = function () {
    ModernPackageShopListItem.ICON_SIZE = new __s0local0(74, 72);
    ModernPackageShopListItem.ICON_SIZE_GIFT = new __s0local0(53, 53);
    ModernPackageShopListItem.ICON_SIZE_GIFT_BG = new __s0local0(80, 78);
  };
  return ModernPackageShopListItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ModernPackageShopListItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
