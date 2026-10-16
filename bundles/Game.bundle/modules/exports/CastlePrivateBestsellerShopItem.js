Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_PrivateBestsellerShopPackageVO = require("gge-module:export_PrivateBestsellerShopPackageVO");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __s0local0 = createjs.Point;
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __s0local1 = function (__s1param0) {
  function CastlePrivateBestsellerShopItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateBestsellerShopItem, __s1param0);
  CastlePrivateBestsellerShopItem.prototype.showOffer = function (__s5param0, __s5param1) {
    this.offerVO = __dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(__s5param0);
    this.parentOfferID = __s5param1;
    this.pbsPackageVO = new __dep_export_PrivateBestsellerShopPackageVO.PrivateBestsellerShopPackageVO();
    this.pbsPackageVO.fillFromPBSOffer(this.offerVO, this.parentOfferID);
    var __s5local0 = this.visualsSubOffer.discount;
    var __s5local1 = this.visualsSubOffer.oldCost;
    if (__s5local1 == 0 && __s5local0 != 0) {
      __s5local1 = Math.round(this.costVO.amount / (1 - __s5local0 / 100));
    } else if (__s5local0 == 0 && __s5local1 != 0) {
      __s5local0 = Math.round(-(this.costVO.amount / __s5local1 - 1) * 100);
    }
    this.disp.mc_discount.visible = __s5local0 > 0;
    this.disp.mc_oldCost.visible = __s5local0 > 0;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_discount.txt_discount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s5local0]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_oldCost.txt_oldCost, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s5local1), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_amount_reward", [this.rewardVO.amount, new __dep_exact_92d05af59ee2ff30.TextVO(" ")]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.rewardVO.getNameTextId(), this.rewardVO.getNameTextParams()), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_soldOut.txt_soldOut, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shop_soldOut"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    this.destroyCollectableRenderList();
    var __s5local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_item).addIconMc(this.disp.mc_item);
    var __s5local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(64, 64));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s5local2, this.rewardVO, __s5local3);
    var __s5local4 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_cost);
    var __s5local5 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(30, 20));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, __s5local4, this.costVO, __s5local5);
    this.disp.mc_soldOut.visible = !this.pbsPackageVO.isAvailable();
    this.disp.mouseChildren = false;
    this.disp.toolTipText = "dialog_equipmentMerchantEvent_tooltip";
    this.disp.mc_hover.visible = false;
    this.disp.mc_down.visible = false;
  };
  CastlePrivateBestsellerShopItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
      __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
      __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferUpdated));
    }
  };
  CastlePrivateBestsellerShopItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferUpdated));
    }
  };
  CastlePrivateBestsellerShopItem.prototype.onOfferUpdated = function (__s15param0) {
    if (__s15param0.offerVO.id == this.offerVO.id) {
      this.showOffer(this.offerVO.id, this.parentOfferID);
    }
  };
  CastlePrivateBestsellerShopItem.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    this.resetHoverStates();
    var __s18local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s18local0.eventPackageVO = this.pbsPackageVO;
    __s18local0.privateOfferVO = this.offerVO;
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s18local0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL_SINGLE);
  };
  CastlePrivateBestsellerShopItem.prototype.onMouseDown = function (__s20param0) {
    this.disp.mc_hover.visible = false;
    this.disp.mc_down.visible = true;
  };
  CastlePrivateBestsellerShopItem.prototype.onRollOver = function (__s22param0) {
    __s1param0.prototype.onRollOver.call(this, __s22param0);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_2.BasicCustomCursor.CURSOR_CLICK);
    this.disp.mc_hover.visible = true;
  };
  CastlePrivateBestsellerShopItem.prototype.onRollOut = function (__s24param0) {
    __s1param0.prototype.onRollOut.call(this, __s24param0);
    this.resetHoverStates();
  };
  CastlePrivateBestsellerShopItem.prototype.resetHoverStates = function () {
    this.disp.mc_hover.visible = false;
    this.disp.mc_down.visible = false;
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_2.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastlePrivateBestsellerShopItem.prototype, "costVO", {
    get: function () {
      return this.pbsPackageVO.price;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopItem.prototype, "rewardVO", {
    get: function () {
      return this.pbsPackageVO.rewards.getItemByIndexSave(0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopItem.prototype, "visualsSubOffer", {
    get: function () {
      return this.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_SUB_OFFER);
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrivateBestsellerShopItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastlePrivateBestsellerShopItem = __s0local1;
