Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __s0local0 = function (__s1param0) {
  function AMerchantScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.costRenderList = new __dep_export_CollectableRendererList.CollectableRendererList();
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0, __dep_export_ClientConstPackages.ClientConstPackages.SCALE_ROLLOVER);
    __s3param0.mc_reward.mc_icon.scaleX = __s3param0.mc_reward.mc_icon.scaleY = 1;
    __s3local0._txt_name = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._disp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    if (__s3local0._txt_name) {
      __s3local0._txt_name.autoFitToBounds = true;
    }
    if (__s3local0._disp.mc_cost) {
      __s3local0._txt_cost = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._disp.mc_cost.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    }
    if (__s3local0._disp.mc_discount) {
      __s3local0._txt_discount = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._disp.mc_discount.txt_priceReduction, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE));
    }
    if (__s3local0._disp.mc_BestBuy) {
      __s3local0._txt_BestBuy = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._disp.mc_BestBuy.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_merchant_highlight"));
      __s3local0._txt_BestBuy.autoFitToBounds = true;
    }
    if (__s3local0._disp.mc_soldOut) {
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0._disp.mc_soldOut.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shop_soldOut"));
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AMerchantScrollItem, __s1param0);
  AMerchantScrollItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.disp.visible = !!this.packageScrollItemVO;
  };
  AMerchantScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    if (this.costRenderList) {
      this.costRenderList.destroyCollectableRenderList();
    }
  };
  AMerchantScrollItem.prototype.customFillItem = function () {
    if (this.packageScrollItemVO) {
      this.handleTooltip();
      this.handleReward();
      this.handleName();
      this.handleCost();
      this.handleAvailability();
      this.handleDiscount();
      this.handleBestBuy();
      this.handleBackground();
    }
  };
  AMerchantScrollItem.prototype.handleTooltip = function () {
    if (__dep_export_CastleModel.CastleModel.settingsData.showPackageIDToolTips) {
      this._disp.toolTipText = "package id = " + this.packageVO.packageID;
    } else if (this.packageVO.isAvailable() || this.packageVO.isNotRebuyable) {
      this._disp.toolTipText = "dialog_equipmentMerchantEvent_tooltip";
    } else {
      this._disp.toolTipText = "dialog_merchant_outOfStock_tooltip";
    }
  };
  AMerchantScrollItem.prototype.handleBestBuy = function () {
    if (this._disp.mc_BestBuy) {
      this._disp.mc_BestBuy.visible = this.packageVO.isTopPackage;
    }
  };
  AMerchantScrollItem.prototype.handleDiscount = function (__s27param0 = true) {
    if (this._disp.mc_discount) {
      if (__s27param0) {
        if (this.packageVO.isTopPackage) {
          this._disp.mc_discount.x = AMerchantScrollItem.TOP_RIGHT_DISCOUNT_ICON_X;
          this._disp.mc_discount.y = AMerchantScrollItem.TOP_RIGHT_DISCOUNT_ICON_Y;
        } else {
          this._disp.mc_discount.x = AMerchantScrollItem.DEFAULT_DISCOUNT_ICON_X;
          this._disp.mc_discount.y = AMerchantScrollItem.DEFAULT_DISCOUNT_ICON_Y;
        }
      }
      var __s27local0 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageVO.packageID));
      if (__s27local0 > 0) {
        this._disp.mc_discount.visible = true;
        this._txt_discount.textContentVO.textReplacements = [-__s27local0];
      } else {
        this._disp.mc_discount.visible = false;
      }
    }
  };
  AMerchantScrollItem.prototype.handleAvailability = function () {
    if (this.disp.mc_soldOut) {
      this.disp.mc_soldOut.visible = !this.packageVO.isAvailable();
    }
  };
  AMerchantScrollItem.prototype.handleReward = function () {
    this.rewardRenderer = new __dep_export_CollectableRenderer.CollectableRenderer(new __dep_export_CollectableRenderClips.CollectableRenderClips(this._disp.mc_reward), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON | __dep_export_CollectableRenderOptions.CollectableRenderOptions.TEXTFIELD, this.rewardIconSize));
    this.rewardRenderer.options.textfield.forceRender = true;
    this.rewardRenderer.updateWithNewVO(this.packageScrollItemVO.eventPackageVO.reward);
  };
  Object.defineProperty(AMerchantScrollItem.prototype, "rewardIconSize", {
    get: function () {
      return __dep_export_ClientConstPackages.ClientConstPackages.ICON_SIZE_MERCHANT_REWARD;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantScrollItem.prototype.handleBackground = function () {
    if (this._disp.mc_bg) {
      if (this.packageVO.isTopPackage) {
        this._disp.mc_bg.gotoAndStop(2);
      } else {
        this._disp.mc_bg.gotoAndStop(1);
      }
    }
  };
  AMerchantScrollItem.prototype.handleName = function () {
    if (this._txt_name) {
      this._txt_name.textContentVO.textId = this.packageVO.nameTextID;
      this._txt_name.textContentVO.textReplacements = this.packageVO.nameParams;
    }
  };
  AMerchantScrollItem.prototype.handleCost = function () {
    if (this.costRenderList) {
      this.costRenderList.destroyCollectableRenderList();
    }
    var __s50local0 = this.packageVO.getCostList();
    if (this._disp.mc_cost0) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this.costRenderList, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this._disp, "mc_cost"), this.packageVO.getCostList(), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, this.costIconDimension));
    } else if (this._disp.mc_cost) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this.costRenderList, new __dep_export_CollectableRenderClips.CollectableRenderClips(this._disp.mc_cost), __s50local0.getItemByIndex(0), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, this.costIconDimension));
    }
  };
  AMerchantScrollItem.prototype.onMouseClick = function (__s55param0) {
    __s1param0.prototype.onMouseClick.call(this, __s55param0);
    this.openDialog();
  };
  AMerchantScrollItem.prototype.openDialog = function () {
    if (this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BUNDLE || this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RELIC_ITEM || this.packageVO.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RELIC_GEM) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, this.createDialogProperties());
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(this.dialogKey, this.createDialogProperties());
    }
  };
  Object.defineProperty(AMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AMerchantScrollItem.prototype.createDialogProperties = function () {
    var __s63local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s63local0.parseDataFromScrollItem(this.packageScrollItemVO);
    return __s63local0;
  };
  Object.defineProperty(AMerchantScrollItem.prototype, "packageScrollItemVO", {
    get: function () {
      return castAs(this.scrollItemVO, "MerchantScrollItemVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantScrollItem.prototype, "packageVO", {
    get: function () {
      return this.packageScrollItemVO.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantScrollItem.prototype, "costIconDimension", {
    get: function () {
      return __dep_export_ClientConstPackages.ClientConstPackages.ICON_SIZE_MERCHANT_COST;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantScrollItem.DEFAULT_DISCOUNT_ICON_X = -75.8;
  AMerchantScrollItem.DEFAULT_DISCOUNT_ICON_Y = -24.45;
  AMerchantScrollItem.TOP_RIGHT_DISCOUNT_ICON_X = 86;
  AMerchantScrollItem.TOP_RIGHT_DISCOUNT_ICON_Y = -43.45;
  return AMerchantScrollItem;
}(__dep_exact_9e901e8e2483a22f.ScrollItem);
exports.AMerchantScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
var __dep_export_CollectableRenderer = require("gge-module:export_CollectableRenderer");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
