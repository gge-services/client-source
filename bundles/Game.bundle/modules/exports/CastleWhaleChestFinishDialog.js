Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleWhaleChestFinishDialog() {
    var __s3local0 = this;
    __s3local0.rewardIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleWhaleChestFinishDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWhaleChestFinishDialog, __s1param0);
  CastleWhaleChestFinishDialog.prototype.onClick = function (__s5param0) {
    __s1param0.prototype.onClick.call(this, __s5param0);
    switch (__s5param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.rewardIndex -= CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE;
        this.setReward();
        break;
      case this.dialogDisp.btn_right:
        this.rewardIndex += CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE;
        this.setReward();
    }
  };
  CastleWhaleChestFinishDialog.prototype.applyPropertiesLoaded = function (__s8param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s8param0);
    this.getCustomProps();
    this.parseCustomDialogProps();
  };
  CastleWhaleChestFinishDialog.prototype.getCustomProps = function () {
    var __s10local0;
    switch (this.offerVO.offerState) {
      case __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_ACCEPTED:
      case __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_SUCCEEDED:
      case __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.ITERATION_SUCCEEDED:
        __s10local0 = this.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_FINISH_DIALOG);
        this._customDialogProps = __s10local0.dialogCustomization;
        break;
      case __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_EXPIRED:
        __s10local0 = this.dialogProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG);
        this._customDialogProps = __s10local0.dialogCustomization;
    }
  };
  CastleWhaleChestFinishDialog.prototype.parseCustomDialogProps = function () {
    if (this._customDialogProps) {
      this._customCopySuccess = this._customDialogProps.CID ? this._customDialogProps.CID : "";
      this._customTitleSuccess = this._customDialogProps.TID ? this._customDialogProps.TID : "";
      this._customCopyExpire = this._customDialogProps.EXC ? this._customDialogProps.EXC : "";
      this._customTitleExpire = this._customDialogProps.EXT ? this._customDialogProps.EXT : "";
      this._customTitleAlreadyRec = this._customDialogProps.ART ? this._customDialogProps.ART : "";
      this._customCopyAlreadyRec = this._customDialogProps.ARC ? this._customDialogProps.ARC : "";
    }
  };
  CastleWhaleChestFinishDialog.prototype.showLoaded = function (__s16param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s16param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_right, this.dialogDisp.btn_left]);
    this.dialogDisp.btn_ok.toolTipText = __dep_exact_9e901e8e2483a22f.GenericTextIds.BUTTON_OKAY;
    this.setDialogTexts();
    this.setReward();
  };
  CastleWhaleChestFinishDialog.prototype.setDialogTexts = function () {
    var __s18local0 = "dialog_specialOfferDungeonTreasureOpen_title";
    var __s18local1 = "dialog_specialOfferDungeonTreasureOpen_copy";
    switch (this.offerVO.offerState) {
      case __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_SUCCEEDED:
      case __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.ITERATION_SUCCEEDED:
      case __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_ACCEPTED:
        __s18local0 = this._customTitleSuccess ? this._customTitleSuccess : CastleWhaleChestFinishDialog.OFFER_ACCEPTED_TITLE;
        __s18local1 = this._customCopySuccess ? this._customCopyExpire : CastleWhaleChestFinishDialog.OFFER_ACCEPTED_COPY;
        break;
      case __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_EXPIRED:
        __s18local0 = this._customTitleExpire ? this._customTitleExpire : CastleWhaleChestFinishDialog.OFFER_ENDED_TITLE;
        __s18local1 = this._customCopyExpire ? this._customCopyExpire : CastleWhaleChestFinishDialog.OFFER_ENDED_COPY;
        break;
      default:
        __s18local0 = CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_TITLE;
        __s18local1 = CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_COPY;
        __s18local0 = this._customTitleAlreadyRec ? this._customTitleAlreadyRec : CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_TITLE;
        __s18local1 = this._customCopyAlreadyRec ? this._customCopyAlreadyRec : CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_COPY;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s18local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s18local1));
  };
  CastleWhaleChestFinishDialog.prototype.onMouseOver = function (__s21param0) {
    __s1param0.prototype.onMouseOver.call(this, __s21param0);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s21param0.target, "MovieClip") && __s21param0.target.equipmentVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s21param0.target.mc_icon, __s21param0.target.equipmentVO, null, !__s21param0.target.equipmentVO.isPermanent);
    }
  };
  CastleWhaleChestFinishDialog.prototype.onMouseOut = function (__s24param0) {
    __s1param0.prototype.onMouseOut.call(this, __s24param0);
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  CastleWhaleChestFinishDialog.prototype.setReward = function () {
    this.destroyCollectableRenderList();
    if (__dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.isFailedState(this.offerVO.offerState)) {
      this.setRewards(null);
    } else {
      var __s26local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerSelectionIndex);
      var __s26local1 = this.offerVO.getTotalRewardListFromOfferVO(__s26local0);
      this.setRewards(__s26local1);
    }
  };
  CastleWhaleChestFinishDialog.prototype.setRewards = function (__s30param0) {
    var __s30local0;
    this.hideAllRewardHolders();
    this.dialogDisp.btn_right.visible = this.rewardIndex + CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE < __s30param0.length;
    this.dialogDisp.btn_left.visible = this.rewardIndex - CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE >= 0;
    var __s30local1 = new __dep_export_CollectableList.CollectableList();
    for (var __s30local2 = this.rewardIndex; __s30local2 < this.rewardIndex + CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE; __s30local2++) {
      if (__s30param0.getItemByIndex(__s30local2) != null) {
        __s30local1.addItem(__s30param0.getItemByIndex(__s30local2));
      }
    }
    __s30local0 = this.dialogDisp[CastleWhaleChestFinishDialog.REWARDHOLDERS[__s30local1.length - 1]];
    var __s30local3 = new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s30local0, "mc_reward");
    __s30local3.addInfoBtns("parent.mc_info_btn", null, true);
    __s30local3.addIconMcs("mc_icon");
    if (__s30local0) {
      __s30local0.visible = true;
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, __s30local3, __s30local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, CastleWhaleChestFinishDialog.REWARD_ITEM_EQUIPMENT_DIMENSION));
  };
  CastleWhaleChestFinishDialog.prototype.hideAllRewardHolders = function () {
    for (var __s36local0 = 0; __s36local0 < CastleWhaleChestFinishDialog.REWARDHOLDERS.length; __s36local0++) {
      this.dialogDisp[CastleWhaleChestFinishDialog.REWARDHOLDERS[__s36local0]].visible = false;
    }
  };
  Object.defineProperty(CastleWhaleChestFinishDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWhaleChestFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWhaleChestFinishDialog.__initialize_static_members = function () {
    CastleWhaleChestFinishDialog.REWARD_ITEM_EQUIPMENT_DIMENSION = new __s0local0(58, 58);
  };
  CastleWhaleChestFinishDialog.NAME = "CastlePOWhaleChestFinishExternal";
  CastleWhaleChestFinishDialog.PO_NAME = "CastlePOStandardOKExternal";
  CastleWhaleChestFinishDialog.REWARDHOLDERS = ["mc_one_item_offer", "mc_two_item_offer", "mc_three_item_offer", "mc_four_item_offer"];
  CastleWhaleChestFinishDialog.OFFER_ACCEPTED_TITLE = "dialog_primeday_specialoffer_rewardtitle";
  CastleWhaleChestFinishDialog.OFFER_ACCEPTED_COPY = "dialog_privateOffer_whaleChest_rewardGet_description";
  CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_TITLE = "dialog_privateOffer_whaleChest_rewardAlreadyGet";
  CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_COPY = "dialog_privateOffer_whaleChest_rewardAlreadyGet_description";
  CastleWhaleChestFinishDialog.OFFER_ENDED_TITLE = "dialog_privateOffer_whaleChest_offerend";
  CastleWhaleChestFinishDialog.OFFER_ENDED_COPY = "dialog_privateOffer_whaleChest_offerend_description";
  CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE = 4;
  return CastleWhaleChestFinishDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleWhaleChestFinishDialog = __s0local1;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
