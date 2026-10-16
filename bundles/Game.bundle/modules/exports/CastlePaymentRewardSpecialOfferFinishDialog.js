Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePaymentRewardSpecialOfferConstants = require("gge-module:export_CastlePaymentRewardSpecialOfferConstants");
var __dep_export_CastlePaymentRewardSpecialOfferDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastlePaymentRewardSpecialOfferFinishDialog() {
    var __s3local0 = this;
    __s3local0.startIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, "CastlePaymentRewardSpecialOfferFinish") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaymentRewardSpecialOfferFinishDialog, __s1param0);
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "offerType", {
    get: function () {
      var __s5local0 = false;
      if (this.dialogProperties_0) {
        __s5local0 = this.dialogProperties_0.wonRubies > 0;
      }
      if (__s5local0) {
        return __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY;
      } else {
        return __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH;
      }
    },
    set: function (__s10param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "offerType").set.call(this, __s10param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.showLoaded = function (__s12param0 = null) {
    this.dialogDisp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.startIndex = 0;
    __s1param0.prototype.showLoaded.call(this);
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.hideLoaded = function (__s14param0 = null) {
    this.dialogDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.onMouseWheel = function (__s16param0) {
    if (__s16param0.delta < 0) {
      this.scrollUp();
    } else if (__s16param0.delta > 0) {
      this.scrollDown();
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "skinType", {
    get: function () {
      return __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.SKIN_FINISH;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.setTextIDs = function () {
    __s1param0.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_specialoffer_rewardtitle";
    this.descriptionTextID = "dialog_primeday_specialoffer_reward_copy";
    this.descriptionInfoTextID = "dialog_rewardsReceived_purchasedTotal_desc";
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.updateRewardItems = function () {
    var __s26local0;
    var __s26local1 = this.shownRewards;
    for (var __s26local2 = __s26local1.length, __s26local3 = 0; __s26local3 < __s26local2; ++__s26local3) {
      var __s26local4 = __s26local1.getItemByIndex(__s26local3);
      if ((__s26local0 = __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s26local4, "ACollectableItemEquipmentVO") ? __s26local4.equipmentVO : null) && (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s26local0, "RandomEquipmentVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s26local0, "RandomHeroVO")) && this.dialogProperties_0 && this.dialogProperties_0.randomEquipmentRewardList && this.dialogProperties_0.randomEquipmentRewardList.length > 0) {
        __s26local1.replaceItemOnIndex(this.dialogProperties_0.randomEquipmentRewardList.getItemByIndex(0), __s26local3);
        this.dialogProperties_0.randomEquipmentRewardList.removeByIndex(0);
      }
    }
    if (this.rewardItemSet && this.rewardItemSet.disp) {
      var __s26local5 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local1(__dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.REWARD_ICON_WIDTH, __dep_export_CastlePaymentRewardSpecialOfferConstants.CastlePaymentRewardSpecialOfferConstants.REWARD_ICON_WIDTH));
      __s26local5.tooltip.showEquipmentCountdown = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.rewardItemSet.componentDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addEquipmentBgMcs("parent.mc_equipmentBackground"), this.shownRewards, __s26local5, this.bindFunction(this.preRenderFunc));
      this.updateScrollButtons();
    }
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.preRenderFunc = function (__s32param0) {
    if (__s32param0.itemVO && (__s32param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE || __s32param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS || __s32param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.RELIC_EQUIPMENT || __s32param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED)) {
      var __s32local0 = __s32param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (__s32param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE) {
        __s32local0.transform.offset.x = 0.5;
      } else {
        __s32local0.transform.offset.x = 0.45;
      }
      __s32local0.transform.offset.y = 9;
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "shownRewards", {
    get: function () {
      var __s37local0 = new __dep_export_CollectableList.CollectableList();
      for (var __s37local1 = 0; __s37local1 < CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN; __s37local1++) {
        if (this.startIndex + __s37local1 < this.rewards.length) {
          __s37local0.addItem(this.rewards.getItemByIndex(this.startIndex + __s37local1));
        }
      }
      return __s37local0;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.onClick = function (__s42param0) {
    __s1param0.prototype.onClick.call(this, __s42param0);
    if (this.rewardItemSet && this.rewardItemSet.componentDisp) {
      if (this.rewardItemSet.componentDisp.btn_up && __s42param0.target == this.rewardItemSet.componentDisp.btn_up) {
        this.scrollUp();
      }
      if (this.rewardItemSet.componentDisp.btn_down && __s42param0.target == this.rewardItemSet.componentDisp.btn_down) {
        this.scrollDown();
      }
    }
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.scrollUp = function () {
    this.setStartIndex(this.startIndex - CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN);
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.scrollDown = function () {
    this.setStartIndex(this.startIndex + CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN);
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.setStartIndex = function (__s51param0) {
    if (__s51param0 < this.rewards.length) {
      this.startIndex = __dep_exact_f855840627e6e145.int(Math.max(0, __s51param0));
    }
    this.updateRewardItems();
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.updateScrollButtons = function () {
    if (this.rewardItemSet.componentDisp.btn_up) {
      if (!this.rewardItemSet.componentDisp.btn_up.basicButton) {
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.rewardItemSet.componentDisp.btn_up);
      }
      this.rewardItemSet.componentDisp.btn_up.visible = this.startIndex > 0;
    }
    if (this.rewardItemSet.componentDisp.btn_down) {
      if (!this.rewardItemSet.componentDisp.btn_down.basicButton) {
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.rewardItemSet.componentDisp.btn_down);
      }
      this.rewardItemSet.componentDisp.btn_down.visible = this.rewards.length > this.startIndex + CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN;
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "rewards", {
    get: function () {
      if (this.isPrivateOffer) {
        return this.dialogPropertiesPrivateOffer.offerVO.getTotalRewardListFromOfferVO();
      }
      for (var __s60local0 = this.dialogProperties_0.finalRewardList, __s60local1 = 0; __s60local1 < __s60local0.length; ++__s60local1) {
        var __s60local2 = __dep_exact_81dacdf05bd32292.castAs(__s60local0.getItemByIndex(__s60local1), "ACollectableItemEquipmentVO");
        if (__s60local2 && __s60local2.equipmentVO && (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s60local2.equipmentVO, "RandomEquipmentVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s60local2.equipmentVO, "RandomHeroVO")) && this.dialogProperties_0.randomEquipmentRewardList && this.dialogProperties_0.randomEquipmentRewardList.length > 0) {
          __s60local0.replaceItemOnIndex(this.dialogProperties_0.randomEquipmentRewardList.getItemByIndex(0), __s60local1);
          this.dialogProperties_0.randomEquipmentRewardList.removeByIndex(0);
        }
      }
      return __s60local0;
    },
    set: function (__s66param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "rewards").set.call(this, __s66param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "canBeBoughtTimes", {
    get: function () {
      if (this.isPrivateOffer) {
        return 0;
      }
      var __s68local0 = this.paymentRewardEventVO;
      if (__s68local0) {
        return __s68local0.maxBuyCount - this.dialogProperties_0.rewardCount;
      } else {
        return 0;
      }
    },
    set: function (__s73param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "canBeBoughtTimes").set.call(this, __s73param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "paymentRewardEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PAYMENTREWARD_SPECIAL_OFFER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      if (this.isPrivateOffer || !this.paymentRewardEventVO) {
        return 1;
      } else {
        return this.paymentRewardEventVO.remainingEventTimeInSeconds;
      }
    },
    set: function (__s81param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "remainingEventTimeInSeconds").set.call(this, __s81param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "rubiesAmountMCValue", {
    get: function () {
      return this.dialogProperties_0.wonRubies;
    },
    set: function (__s87param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog.prototype, "rubiesAmountMCValue").set.call(this, __s87param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFinishDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferFinishDialog.NAME = "CastlePaymentRewardSpecialOfferFinish";
    CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN = 9;
  };
  return CastlePaymentRewardSpecialOfferFinishDialog;
}(__dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferFinishDialog = __s0local2;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
