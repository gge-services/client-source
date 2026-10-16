Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleMultiChestDialog() {
    var __s3local0 = this;
    __s3local0.hasBeenDisplacedFor2Offers = false;
    __s3local0._buttonArray = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleMultiChestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMultiChestDialog, __s1param0);
  CastleMultiChestDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._buttonArray.push(this.dialogDisp.btn_close, this.dialogDisp.reward_box_0.btn_buy, this.dialogDisp.reward_box_1.btn_buy, this.dialogDisp.reward_box_2.btn_buy);
    this._buttonArray.push(this.dialogDisp.btn_buy_all);
    this.initButtons();
    this.dialogDisp.reward_box_0.btn_buy.txt_buy.defaultCacheScale = 2;
    this.dialogDisp.reward_box_1.btn_buy.txt_buy.defaultCacheScale = 2;
    this.dialogDisp.reward_box_2.btn_buy.txt_buy.defaultCacheScale = 2;
    this.dialogDisp.btn_buy_all.txt_buy_all.defaultCacheScale = 2;
  };
  CastleMultiChestDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.destroyCollectableRenderList();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    this.setChar();
    this.initText();
    this.initOfferBoxes();
  };
  CastleMultiChestDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.reward_box_0.btn_buy:
        __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id, 0);
        this.hide();
        break;
      case this.dialogDisp.reward_box_1.btn_buy:
        __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id, 1);
        this.hide();
        break;
      case this.dialogDisp.reward_box_2.btn_buy:
        __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id, 2);
        this.hide();
        break;
      case this.dialogDisp.btn_buy_all:
        __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPayAll(this.dialogProperties.offerVO.id);
        this.hide();
    }
  };
  CastleMultiChestDialog.prototype.initOfferBoxes = function () {
    var __s12local0 = __dep_exact_f855840627e6e145.int(this.offerVO.amountOfDescriptions());
    if (__s12local0 == 2 && !this.hasBeenDisplacedFor2Offers) {
      this.dialogDisp.reward_box_0.x += CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT;
      this.dialogDisp.reward_box_1.x += CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT;
      this.dialogDisp.reward_box_2.visible = false;
      this.hasBeenDisplacedFor2Offers = true;
    }
    if (__s12local0 == 3 && this.hasBeenDisplacedFor2Offers) {
      this.dialogDisp.reward_box_0.x -= CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT;
      this.dialogDisp.reward_box_1.x -= CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT;
      this.dialogDisp.reward_box_2.visible = true;
      this.hasBeenDisplacedFor2Offers = false;
    }
    var __s12local1 = 0;
    for (var __s12local2 = 0; __s12local2 < __s12local0; __s12local2++) {
      this.setUpOfferBox(__s12local2);
      __s12local1 += __dep_exact_f855840627e6e145.int(this.getOfferCost(__s12local2));
    }
    this.dialogDisp.btn_buy_all.toolTipText = {
      t: "xRubies",
      p: [__s12local1]
    };
  };
  CastleMultiChestDialog.prototype.initButtons = function () {
    this.initBasicButtons(this._buttonArray);
    this.delayEnableButtons();
  };
  CastleMultiChestDialog.prototype.delayEnableButtons = function () {
    if (this._buttonArray != null) {
      for (var __s20local0 = 0, __s20local1 = this._buttonArray; __s20local0 < __s20local1.length; __s20local0++) {
        var __s20local2 = __s20local1[__s20local0];
        if (__s20local2 !== undefined) {
          __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(__s20local2, true);
        }
      }
    }
  };
  CastleMultiChestDialog.prototype.setChar = function () {
    var __s26local0 = 1;
    var __s26local1 = this.dialogProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    if (__s26local1 && __s26local1.dialogCustomization && __s26local1.dialogCustomization.OT !== undefined) {
      __s26local0 = __dep_exact_f855840627e6e145.int(__s26local1.dialogCustomization.OT);
    }
    this.dialogDisp.char_mc.gotoAndStop(Math.max(0, __s26local0));
  };
  CastleMultiChestDialog.prototype.initText = function () {
    var __s29local0 = this.dialogProperties.offerVO.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    var __s29local1 = "";
    this.dialogDisp.btn_buy_all.visible = false;
    if (__s29local0 && __s29local0.dialogCustomization) {
      __s29local1 = __s29local0.dialogCustomization.CID || "";
      if (__s29local0.dialogCustomization.hasOwnProperty("BAB")) {
        this.dialogDisp.btn_buy_all.visible = __s29local0.dialogCustomization.BAB == 1;
      }
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOfferBrand_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s29local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_privateOffer_whaleChest_noise"));
    this._txt_timeleft = this.textFieldManager.registerTextField(this.dialogDisp.timebar.txt_timeleft, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("countdown_restTime", "-"));
    this.dialogDisp.timebar_overlay.toolTipText = "resttime";
    this.setRemainingTime(null);
    this.textFieldManager.registerTextField(this.dialogDisp.reward_box_0.btn_buy.txt_buy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("buy"));
    this.textFieldManager.registerTextField(this.dialogDisp.reward_box_1.btn_buy.txt_buy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("buy"));
    this.textFieldManager.registerTextField(this.dialogDisp.reward_box_2.btn_buy.txt_buy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("buy"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy_all.txt_buy_all, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("buyAll"));
  };
  CastleMultiChestDialog.prototype.setUpOfferBox = function (__s33param0) {
    var __s33local0 = this.offerVO.getTotalRewardListFromOfferVO(__s33param0);
    var __s33local1 = this.dialogDisp["reward_box_" + __s33param0];
    var __s33local2 = this.getOfferCost(__s33param0);
    __s33local1.ruby.toolTipText = "gold";
    var __s33local3 = this.textFieldManager.registerTextField(__s33local1.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s33local2, false, 0, true));
    __s33local3.autoFitToBounds = true;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(__s33local3, __s33local2);
    this.updateRewardItemsForOfferBox(__s33local1, __s33local0);
  };
  CastleMultiChestDialog.prototype.getOfferCost = function (__s35param0) {
    try {
      return __dep_exact_f855840627e6e145.int(this.offerVO.descriptions[__s35param0].get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_COST_C2).costC2);
    } catch (__s38local0) {
      console.error(__s38local0.stack);
    }
    return 0;
  };
  CastleMultiChestDialog.prototype.updateRewardItemsForOfferBox = function (__s40param0, __s40param1) {
    var __s40local0;
    var __s40local1;
    var __s40local2 = __s40param1.length;
    for (var __s40local3 = 1; __s40local3 <= 4; __s40local3++) {
      __s40param0["reward_mc_" + __s40local3].visible = __s40local2 == __s40local3;
    }
    var __s40local4 = __s40param0["reward_mc_" + __s40local2];
    for (var __s40local5 = 0; __s40local5 < __s40local2; __s40local5++) {
      __s40local0 = __s40local4["mc_item" + __s40local5];
      __s40local1 = __s40local4["info_btn" + __s40local5];
      this.updateReward(__s40local0, __s40local1, __s40param1.getItemByIndex(__s40local5));
    }
  };
  CastleMultiChestDialog.prototype.updateReward = function (__s46param0, __s46param1, __s46param2) {
    var __s46local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, CastleMultiChestDialog.REWARD_ITEM_EQUIPMENT_DIMENSION);
    __s46local0.tooltip.showEquipmentCountdown = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s46param0).addIconMc(__s46param0.mc_item).addInfoBtn(__s46param1).addTextfield(__s46param0.txt_text).addTextfieldBgMc(__s46param0.mc_textBackground), __s46param2, __s46local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s46param0, false);
  };
  CastleMultiChestDialog.prototype.hideLoaded = function (__s48param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s48param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleMultiChestDialog.prototype.setRemainingTime = function (__s50param0 = null) {
    if (this._txt_timeleft) {
      this._txt_timeleft.textContentVO.textReplacements = [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingSeconds)];
    }
  };
  CastleMultiChestDialog.prototype.onOfferRemoved = function (__s53param0) {
    if (__s53param0.offerVO.id == this.dialogProperties.offerVO.id) {
      __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      this.hide();
    }
  };
  CastleMultiChestDialog.prototype.onMouseOver = function (__s56param0) {
    __s1param0.prototype.onMouseOver.call(this, __s56param0);
    if (__s56param0.target instanceof __s0local0 && __s56param0.target.equipmentVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(__s56param0.target, __s56param0.target.equipmentVO, null, !__s56param0.target.equipmentVO.isPermanent);
    }
  };
  CastleMultiChestDialog.prototype.onMouseOut = function (__s59param0) {
    __s1param0.prototype.onMouseOut.call(this, __s59param0);
    if (__s59param0.target instanceof __s0local0 && __s59param0.target.equipmentVO) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.hideEquipmentToolTip();
    }
  };
  Object.defineProperty(CastleMultiChestDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMultiChestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMultiChestDialog.__initialize_static_members = function () {
    CastleMultiChestDialog.REWARD_ITEM_EQUIPMENT_DIMENSION = new __s0local1(58, 58);
  };
  CastleMultiChestDialog.NAME = "CastlePOMultiChest";
  CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT = 100;
  return CastleMultiChestDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleMultiChestDialog = __s0local2;
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
