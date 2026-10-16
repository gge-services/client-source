Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstKingdom = require("gge-module:export_ClientConstKingdom");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_PrivateResourceVillageActionDialogProperties = require("gge-module:export_PrivateResourceVillageActionDialogProperties");
var __s0local0 = function (__s1param0) {
  function PrivateResourceVillageShopItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_buy);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateResourceVillageShopItem, __s1param0);
  PrivateResourceVillageShopItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
  };
  PrivateResourceVillageShopItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
  };
  PrivateResourceVillageShopItem.prototype.customFillItem = function () {
    this.clearComponents();
    var __s9local0 = this.scrollItemVO.villageVO;
    this.itxt_title = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.getTitleTxt(), [__s9local0.villageLevel]));
    this.itxt_price = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.costArea.txt_price, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local0.tokenCostTotal));
    this.disp.costArea.toolTipText = "currency_name_ResourceVillageToken";
    this.disp.costArea.mouseChildren = false;
    __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.disp.boniSection, __s9local0.type, __s9local0.bonus.strength, 20, 16);
    __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.renderVillage(__s9local0.type, this.disp.mc_village, 61, 47);
    if (this.scrollItemVO.isAbleToBuy) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, true);
      this.disp.btn_buy.toolTipText = "dialog_privateResourceVillages_shop_buyButton";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, false);
      this.disp.btn_buy.toolTipText = "dialog_privateResourceVillages_shop_maxVillages_tt";
    }
  };
  PrivateResourceVillageShopItem.prototype.getTitleTxt = function () {
    var __s13local0 = this.scrollItemVO.villageVO;
    return "dialog_privateResourceVillages_villageLevel_" + __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(__s13local0.type).toLowerCase() + "_tt";
  };
  PrivateResourceVillageShopItem.prototype.clearComponents = function () {
    if (this.itxt_title && __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().isTextFieldRegistered(this.disp.txt_title)) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().unregisterTextField(this.disp.txt_title);
    }
    if (this.itxt_boni && __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().isTextFieldRegistered(this.disp.txt_boni)) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().unregisterTextField(this.disp.txt_price);
    }
    if (this.itxt_price && __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().isTextFieldRegistered(this.disp.txt_title)) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().unregisterTextField(this.disp.txt_title);
    }
  };
  PrivateResourceVillageShopItem.prototype.onMouseClick = function (__s20param0) {
    __s1param0.prototype.onMouseClick.call(this, __s20param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target) && __s20param0.target == this.disp.btn_buy) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_PrivateResourceVillageBuyDialog.PrivateResourceVillageBuyDialog, new __dep_export_PrivateResourceVillageActionDialogProperties.PrivateResourceVillageActionDialogProperties(this.scrollItemVO.villageVO));
    }
  };
  PrivateResourceVillageShopItem.NUM_ITEMS_PER_PAGE = 6;
  PrivateResourceVillageShopItem.DEFAULT_FRAME = 1;
  PrivateResourceVillageShopItem.GOLD_FRAME = 2;
  return PrivateResourceVillageShopItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.PrivateResourceVillageShopItem = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrivateResourceVillageRenderHelper = require("gge-module:export_CastlePrivateResourceVillageRenderHelper");
var __dep_export_PrivateResourceVillageBuyDialog = require("gge-module:export_PrivateResourceVillageBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
