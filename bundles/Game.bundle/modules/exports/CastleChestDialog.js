Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleChestDialog() {
    var __s3local0 = this;
    __s3local0.rewardIndex = 0;
    __s3local0._offerType = -1;
    __s3local0._currentConfig = CastleChestDialog.CONFIGS.get(CastleChestDialog.CONFIG_OLD_THREE_REWARD);
    __s3local0._customCharacter = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleChestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChestDialog, __s1param0);
  CastleChestDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    var __s5local0 = this.dialogProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    this._currentConfig = this.offerVO.getTotalRewardListFromOfferVO().length > 1 ? CastleChestDialog.CONFIGS.get(CastleChestDialog.CONFIG_OLD_THREE_REWARD) : CastleChestDialog.CONFIGS.get(CastleChestDialog.CONFIG_OLD_ONE_REWARD);
    this._customDialogProps = __s5local0.dialogCustomization;
    this.parseCustomDialogProps();
  };
  CastleChestDialog.prototype.parseCustomDialogProps = function () {
    if (this._customDialogProps) {
      if (this._customDialogProps.hasOwnProperty("LO")) {
        var __s7local0 = __dep_exact_f855840627e6e145.int(this._customDialogProps.LO);
        if (__s7local0 > -1) {
          this._currentConfig = __dep_exact_9e901e8e2483a22f_1.DictionaryUtil.containsKey(CastleChestDialog.CONFIGS, __s7local0) ? CastleChestDialog.CONFIGS.get(__s7local0) : this._currentConfig;
        }
      } else {
        this._currentConfig = this._customDialogProps.CFG ? this._customDialogProps.CFG : this._currentConfig;
      }
      this._customCopy = this._customDialogProps.CID;
      this._customBtnTxt = this._customDialogProps.BID;
      this._customTitleTxt = this._customDialogProps.TID;
      this._customBannerText = this._customDialogProps.BCID;
      this._customTimeText = this._customDialogProps.TTID;
      this._customCharacter = __dep_exact_f855840627e6e145.int(this._customDialogProps.hasOwnProperty("CH") ? this._customDialogProps.CH : -1);
      this._offerType = __dep_exact_f855840627e6e145.int(this._customDialogProps.hasOwnProperty("OT") ? this._customDialogProps.OT : -1);
    }
  };
  CastleChestDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    this.rewardIndex = 0;
    this.showCurrentConfig();
    this.setChestVO();
    this.setupChest();
    this.setReward();
    this.setRemainingTime();
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = this._chestVO.textId_newPriceTooltip;
    this.dialogDisp.mc_oldCosts.toolTipText = this._chestVO.textId_oldPriceTooltip;
    this.dialogDisp.mc_oldCosts.mouseChildren = false;
    this.dialogDisp.mc_sideBanner.mouseChildren = false;
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleChestDialog.prototype.showCurrentConfig = function () {
    this.hideAllConfigElements();
    this._okButton = this._currentConfig.hasOwnProperty("button") ? this.dialogDisp[CastleChestDialog.BUTTONS[this._currentConfig.button]] : this.dialogDisp.btn_ok;
    this._okButton.visible = true;
    this._okButton.toolTipText = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.BUTTON_ACCEPT;
    if (this._currentConfig.banner) {
      this._redBanner = this.dialogDisp[this._currentConfig.banner];
      this._redBanner.visible = true;
    }
    this.dialogDisp.mc_costs.visible = this._currentConfig.costs;
    this.dialogDisp.mc_oldCosts.visible = this._currentConfig.oldCosts;
    this.dialogDisp.mc_time.visible = this._currentConfig.timer;
    this.initBasicButtons([this._okButton, this.dialogDisp.btn_close, this.dialogDisp.btn_right, this.dialogDisp.btn_left]);
  };
  CastleChestDialog.prototype.hideAllRewardHolders = function () {
    for (var __s18local0 = 0; __s18local0 < CastleChestDialog.REWARDHOLDERS.length; __s18local0++) {
      this.dialogDisp[CastleChestDialog.REWARDHOLDERS[__s18local0]].visible = false;
    }
  };
  CastleChestDialog.prototype.hideAllConfigElements = function () {
    this.dialogDisp.btn_ok.visible = false;
    this.dialogDisp.btn_ok_small.visible = false;
    this.dialogDisp.mc_costs.visible = false;
    this.dialogDisp.mc_sideBanner.visible = false;
    this.dialogDisp.mc_centerBanner.visible = false;
    this.dialogDisp.mc_oldCosts.visible = false;
    this.dialogDisp.mc_time.visible = false;
  };
  CastleChestDialog.prototype.setupChest = function () {
    this.setCharacterAndTexts();
    this.setChestPayment();
  };
  CastleChestDialog.prototype.setChestVO = function () {
    var __s26local0 = this.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    this._chestVO = __s26local0 > 0 ? new __dep_export_CastleWhaleChestVO.CastleWhaleChestVO() : new __dep_export_CastleSoftChestVO.CastleSoftChestVO();
  };
  CastleChestDialog.prototype.setCharacterAndTexts = function () {
    var __s28local0;
    var __s28local1;
    var __s28local2;
    var __s28local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MARAUDER);
    var __s28local4 = this._chestVO.textId_plundermeister;
    if (this._offerType > -1) {
      switch (this._offerType) {
        case CastleChestDialog.OFFER_TYPE_TOOLS:
        case CastleChestDialog.OFFER_TYPE_UNITS:
          __s28local4 = this._chestVO.textId_general;
          __s28local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
          break;
        case CastleChestDialog.OFFER_TYPE_DECO:
          __s28local4 = this._chestVO.textId_architect;
          __s28local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_ARCHITECT);
          break;
        case CastleChestDialog.OFFER_TYPE_EQUIPMENT:
        case CastleChestDialog.OFFER_TYPE_VIP:
        default:
          __s28local4 = this._chestVO.textId_plundermeister;
          __s28local3 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MARAUDER);
      }
    }
    __s28local4 = this._customCopy ? this._customCopy : __s28local4;
    __s28local0 = this._customBtnTxt ? this._customBtnTxt : this._chestVO.textId_pay;
    __s28local1 = this._customTitleTxt ? this._customTitleTxt : this._chestVO.textId_title;
    __s28local3 = this._customCharacter > -1 ? this._customCharacter : __s28local3;
    this.setCharacterImage(__dep_export_ClientConstCharacter.ClientConstCharacter.getFullSizeAssetName(__s28local3));
    this.textFieldManager.registerTextField(this._okButton.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s28local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s28local1)).autoFitToBounds = true;
    if (this._currentConfig.banner) {
      __s28local2 = this._customBannerText ? this._customBannerText : this._currentConfig.banner == CastleChestDialog.CENTER_BANNER_ASSET ? this._chestVO.textId_noise : this._chestVO.textId_savings;
      this.textFieldManager.registerTextField(this._redBanner.txt_content, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s28local2));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s28local4));
  };
  CastleChestDialog.prototype.setCharacterImage = function (__s33param0) {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_character);
    var __s33local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s33param0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s33param0), null, 0, false);
    this.dialogDisp.mc_character.addChild(__s33local0.asDisplayObject());
  };
  CastleChestDialog.prototype.hideLoaded = function (__s35param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s35param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleChestDialog.prototype.onClick = function (__s37param0) {
    __s1param0.prototype.onClick.call(this, __s37param0);
    switch (__s37param0.target) {
      case this._okButton:
        __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.rewardIndex -= CastleChestDialog.MAX_ITEMS_AT_ONCE;
        this.setReward();
        break;
      case this.dialogDisp.btn_right:
        this.rewardIndex += CastleChestDialog.MAX_ITEMS_AT_ONCE;
        this.setReward();
    }
  };
  CastleChestDialog.prototype.onMouseOver = function (__s40param0) {
    __s1param0.prototype.onMouseOver.call(this, __s40param0);
    if (__s40param0.target instanceof __s0local0 && __s40param0.target.equipmentVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s40param0.target, __s40param0.target.equipmentVO, null, !__s40param0.target.equipmentVO.isPermanent);
    }
  };
  CastleChestDialog.prototype.onMouseOut = function (__s43param0) {
    __s1param0.prototype.onMouseOut.call(this, __s43param0);
    if (__s43param0.target instanceof __s0local0 && __s43param0.target.equipmentVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.hideEquipmentToolTip();
    }
  };
  CastleChestDialog.prototype.setReward = function () {
    this.destroyCollectableRenderList();
    var __s46local0 = this.offerVO.getTotalRewardListFromOfferVO();
    this.setRewards(__s46local0);
  };
  CastleChestDialog.prototype.setRewards = function (__s48param0) {
    var __s48local0;
    this.hideAllRewardHolders();
    this.dialogDisp.btn_right.visible = this.rewardIndex + CastleChestDialog.MAX_ITEMS_AT_ONCE < __s48param0.length;
    this.dialogDisp.btn_left.visible = this.rewardIndex - CastleChestDialog.MAX_ITEMS_AT_ONCE >= 0;
    var __s48local1 = new __dep_export_CollectableList.CollectableList();
    for (var __s48local2 = this.rewardIndex; __s48local2 < this.rewardIndex + CastleChestDialog.MAX_ITEMS_AT_ONCE; __s48local2++) {
      if (__s48param0.getItemByIndex(__s48local2) != null) {
        __s48local1.addItem(__s48param0.getItemByIndex(__s48local2));
      }
    }
    if (__s48local0 = this.dialogDisp[CastleChestDialog.REWARDHOLDERS[__s48local1.length - 1]]) {
      __s48local0.visible = true;
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s48local0, "mc_reward").addInfoBtns("parent.mc_info_btn", null, true), __s48local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, CastleChestDialog.REWARD_ITEM_EQUIPMENT_DIMENSION), this.bindFunction(this.preRenderFunc));
  };
  CastleChestDialog.prototype.preRenderFunc = function (__s54param0) {
    if (__s54param0.itemVO) {
      __s54param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 0;
    }
  };
  CastleChestDialog.prototype.setChestPayment = function () {
    var __s57local0 = this.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(this._chestVO.currency);
    this.setPayment(__s57local0, this._chestVO.iconClass, this._chestVO.textId_savings);
  };
  CastleChestDialog.prototype.setPayment = function (__s59param0, __s59param1, __s59param2) {
    var __s59local0 = 5000;
    if (this._customDialogProps && this._customDialogProps.OC) {
      __s59local0 = this._customDialogProps.OC;
    }
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_costs.mc_icon);
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_oldCosts.mc_costs.mc_icon);
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.replaceMovieClip(this.dialogDisp.mc_costs.mc_icon, __s59param1);
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.replaceMovieClip(this.dialogDisp.mc_oldCosts.mc_costs.mc_icon, __s59param1);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_oldCosts.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s59local0));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_sideBanner.txt_content, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s59param2, [__s59local0 - __s59param0]));
    var __s59local1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s59param0));
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(__s59local1, __s59param0);
  };
  CastleChestDialog.prototype.onOfferRemoved = function (__s62param0) {
    if (__s62param0.offerVO.id == this.dialogProperties.offerVO.id) {
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      this.hide();
    }
  };
  CastleChestDialog.prototype.setRemainingTime = function (__s65param0 = null) {
    var __s65local0 = this._customTimeText ? this._customTimeText : this._chestVO.textId_endTimer;
    var __s65local1 = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.remainingSeconds);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_offer_timeleft, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s65local0, [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s65local1)]));
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, __s65local1);
  };
  Object.defineProperty(CastleChestDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChestDialog.__initialize_static_members = function () {
    var __s71local0;
    CastleChestDialog.BUTTONS = [CastleChestDialog.BIG_OK_BUTTON_ASSET, CastleChestDialog.SMALL_OK_BUTTON_ASSET];
    CastleChestDialog.REWARD_ITEM_EQUIPMENT_DIMENSION = new __s0local1(58, 58);
    (__s71local0 = new Map()).set(CastleChestDialog.CONFIG_OLD_ONE_REWARD, {
      button: 0,
      banner: CastleChestDialog.CENTER_BANNER_ASSET,
      costs: 1,
      oldCosts: 0,
      timer: 1
    });
    __s71local0.set(CastleChestDialog.CONFIG_OLD_THREE_REWARD, {
      button: 0,
      banner: CastleChestDialog.SIDE_BANNER_ASSET,
      costs: 1,
      oldCosts: 1,
      timer: 1
    });
    __s71local0.set(CastleChestDialog.CONFIG_STANDARD_GIFT_REWARD, {
      button: 1,
      timer: 1
    });
    __s71local0.set(CastleChestDialog.NO_TIME_LIMIT_GIFT_REWARD, {
      button: 1,
      timer: 0
    });
    CastleChestDialog.CONFIGS = __s71local0;
  };
  CastleChestDialog.NAME = "CastlePOWhaleChestExternal";
  CastleChestDialog.OFFER_TYPE_UNITS = 1;
  CastleChestDialog.OFFER_TYPE_EQUIPMENT = 2;
  CastleChestDialog.OFFER_TYPE_DECO = 3;
  CastleChestDialog.OFFER_TYPE_TOOLS = 4;
  CastleChestDialog.OFFER_TYPE_VIP = 5;
  CastleChestDialog.CENTER_BANNER_ASSET = "mc_centerBanner";
  CastleChestDialog.SIDE_BANNER_ASSET = "mc_sideBanner";
  CastleChestDialog.BIG_OK_BUTTON_ASSET = "btn_ok";
  CastleChestDialog.SMALL_OK_BUTTON_ASSET = "btn_ok_small";
  CastleChestDialog.CONFIG_OLD_ONE_REWARD = 0;
  CastleChestDialog.CONFIG_OLD_THREE_REWARD = 1;
  CastleChestDialog.CONFIG_STANDARD_GIFT_REWARD = 2;
  CastleChestDialog.NO_TIME_LIMIT_GIFT_REWARD = 3;
  CastleChestDialog.MAX_ITEMS_AT_ONCE = 3;
  CastleChestDialog.REWARDHOLDERS = ["mc_one_item_offer", "mc_two_item_offer", "mc_three_item_offer"];
  return CastleChestDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleChestDialog = __s0local2;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleSoftChestVO = require("gge-module:export_CastleSoftChestVO");
var __dep_export_CastleWhaleChestVO = require("gge-module:export_CastleWhaleChestVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
