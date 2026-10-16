Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ADecoBuildingVO = require("gge-module:export_ADecoBuildingVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function DecoShopPanelItemComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = __s3param0;
    __s3local0._disp.addEventListener(__s0local0.MOUSE_DOWN, __s3local0.bindFunction(__s3local0.onMouseDown));
    __s3local0._disp.addEventListener(__s0local0.MOUSE_OVER, __s3local0.bindFunction(__s3local0.onMouseOver));
    __s3local0._disp.addEventListener(__s0local0.MOUSE_OUT, __s3local0.bindFunction(__s3local0.onMouseOut));
    __s3local0._disp.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.onClick));
    __s3local0._onMouseDownItem = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onClickUpgrade = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onClickItem = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onClickInfo = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onClickSell = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onClickJumpTo = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onMouseOverItem = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onMouseOverSell = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onMouseOutItem = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onMouseOutSell = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    __s3local0._onLoaded = new __dep_exact_5c7bc328fca9e4de.Signal(DecoShopPanelItemComponent);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecoShopPanelItemComponent, __s1param0);
  DecoShopPanelItemComponent.prototype.clearListeners = function () {
    if (this._disp) {
      this._disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this._onMouseDownItem.removeAll();
      this._onClickUpgrade.removeAll();
      this._onClickItem.removeAll();
      this._onClickInfo.removeAll();
      this._onClickSell.removeAll();
      this._onClickJumpTo.removeAll();
      this._onMouseOverItem.removeAll();
      this._onMouseOverSell.removeAll();
      this._onMouseOutItem.removeAll();
      this._onMouseOutSell.removeAll();
      this._onLoaded.removeAll();
    }
  };
  DecoShopPanelItemComponent.prototype.destroy = function () {
    this.clearListeners();
    __s1param0.prototype.destroy.call(this);
  };
  DecoShopPanelItemComponent.prototype.onMouseDown = function (__s10param0) {
    if (this._disp == __s10param0.target && this._onMouseDownItem) {
      this._onMouseDownItem.dispatch(this);
    }
  };
  DecoShopPanelItemComponent.prototype.onMouseOver = function (__s13param0) {
    if (this._disp.btn_sell == __s13param0.target) {
      if (this._onMouseOverSell) {
        this._onMouseOverSell.dispatch(this);
      }
    } else if (__s13param0.target == this._disp.bg && this._onMouseOverItem) {
      this._onMouseOverItem.dispatch(this);
    }
  };
  DecoShopPanelItemComponent.prototype.onMouseOut = function (__s18param0) {
    if (this._disp.btn_sell == __s18param0.target) {
      if (this._onMouseOutSell) {
        this._onMouseOutSell.dispatch(this);
      }
    } else if (__s18param0.target == this._disp.bg && this._onMouseOutItem) {
      this._onMouseOutItem.dispatch(this);
    }
  };
  DecoShopPanelItemComponent.prototype.onClick = function (__s23param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      if (this._disp.btn_upgrade == __s23param0.target) {
        if (this._onClickUpgrade) {
          this._onClickUpgrade.dispatch(this);
        }
      } else if (this._disp.btn_info == __s23param0.target) {
        if (this._onClickInfo) {
          this._onClickInfo.dispatch(this);
        }
      } else if (this._disp.btn_sell == __s23param0.target) {
        if (this._onClickSell) {
          this._onClickSell.dispatch(this);
        }
      } else if (this.disp.btn_jump_to == __s23param0.target) {
        if (this._onClickJumpTo) {
          this._onClickJumpTo.dispatch(this);
        }
      } else if (this._onClickItem) {
        this._onClickItem.dispatch(this, __s23param0);
      }
    }
  };
  DecoShopPanelItemComponent.prototype.changeToMaxAmountReached = function (__s35param0) {
    this.disp.mc_contentHolder.icon_lock_unreachable.visible = true;
    this.disp.mc_contentHolder.icon_lock.visible = false;
    this.disp.bg.actLikeButton = true;
    this.triggerLock();
    this.disp.mc_contentHolder.icon_lock_unreachable.itxt_text = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_contentHolder.icon_lock_unreachable.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s35param0), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
  };
  DecoShopPanelItemComponent.prototype.triggerLock = function () {
    var __s37local0 = this.disp.mc_contentHolder;
    var __s37local1 = this.disp.shopVO.isAvailableByLevelAndEffect && !this.disp.mc_contentHolder.icon_lock_unreachable.visible;
    __s37local0.icon_amount.visible = false;
    for (var __s37local2 = 0; __s37local2 < 4; __s37local2++) {
      __s37local0.getChildByName("txt_cost" + __s37local2).visible = __s37local1;
    }
    __s37local0.txt_specialCost.visible = __s37local1;
    this.disp.btn_upgrade.visible = __s37local1;
  };
  DecoShopPanelItemComponent.prototype.fillAmountInfo = function (__s41param0) {
    var __s41local0 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage();
    var __s41local1 = 0;
    __s41local1 = __s41param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE ? __dep_exact_f855840627e6e145.int(this.disp.shopVO.inventoryAmount) : __dep_exact_f855840627e6e145.int(__s41local0.getAmountForBuildMenu(this.disp.shopVO.wodId));
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_contentHolder.icon_amount.txt_amount, new __dep_exact_92d05af59ee2ff30_2.NumberVO(__s41local1), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.disp.mc_contentHolder.icon_amount.visible = __s41local1 > 0;
    if (__s41local1 > 0) {
      this.disp.bg.gotoAndStop(DecoShopPanelItemComponent.BG_FRAME_AVAILABLE_IN_STORAGE);
    }
    var __s41local2 = __s41local0.getRelevantWodIdListForBuildMenu(this.disp.shopVO.wodId).reduce(function (__s44param0, __s44param1) {
      return __s44param0 + __s41local0.getNewAmountByWodID(__s44param1);
    }, 0);
    this.disp.mc_contentHolder.marker_new.visible = __s41local2 > 0;
    this.disp.mc_contentHolder.marker_new.toolTipText = "new";
  };
  DecoShopPanelItemComponent.prototype.fillPriceInfo = function () {
    var __s46local0 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.builderDiscount;
    var __s46local1 = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS);
    if (__s46local1) {
      __s46local0 += __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS) * -1 / 100;
    }
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
      var __s46local2 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (__s46local2 && !__s46local2.isOneLMSActive) {
        __s46local0 = __s46local2.ownFaction == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION ? Math.max(__s46local0, __dep_exact_26a421b704832cff_1.FactionConst.getCostReductionBonus(1 - __s46local2.factionBalanceRed)) : Math.max(__s46local0, __dep_exact_26a421b704832cff_1.FactionConst.getCostReductionBonus(__s46local2.factionBalanceRed));
      }
    }
    var __s46local3 = new __dep_export_CollectableList.CollectableList();
    if (__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getAmountForBuildMenu(this.disp.shopVO.wodId)) == 0) {
      var __s46local4 = this.disp.shopVO;
      for (var __s46local5 = 0, __s46local6 = __s46local4.costs.getContainingTypes(); __s46local5 < __s46local6.length; __s46local5++) {
        var __s46local7 = __s46local6[__s46local5];
        var __s46local8 = __dep_exact_f855840627e6e145.int(__s46local4.getCost(__s46local7));
        if (__s46local7.type == __dep_export_CollectableEnum.CollectableEnum.C2 && __s46local4.discountedCostC2 > 0) {
          __s46local8 = __s46local4.discountedCostC2;
        }
        var __s46local9 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(__s46local7.type) >= 0;
        if (__s46local9) {
          __s46local8 *= 1 - __s46local0;
        }
        __s46local3.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s46local7.type, __s46local8, __s46local7.id, __s46local1 && __s46local9));
      }
    }
    __dep_export_CostHelper.CostHelper.initAsCosts(__s46local3, this.disp.mc_contentHolder, false, true, this);
  };
  DecoShopPanelItemComponent.prototype.updateItemUnlockState = function (__s56param0, __s56param1) {
    var __s56local0;
    var __s56local1 = __s56param0.isAvailableByLevelAndEffect;
    if (__s56param0.sceatSkillLocked > 0) {
      var __s56local2 = __dep_export_CastleModel.CastleModel.legendSkillData.getSceatSkillByID(__s56param0.sceatSkillLocked);
      __s56local0 = __s56local1 && __dep_export_CastleModel.CastleModel.legendSkillData.isSkillActive(__s56local2);
    } else {
      __s56local0 = __s56local1;
    }
    if (__s56param1 && !__s56local0 && __s56param0.sceatSkillLocked) {
      this.disp.btn_upgrade.visible = false;
      this.disp.mc_contentHolder.icon_lock.visible = false;
      this.disp.mc_contentHolder.icon_lock_small.visible = true;
      if (this.disp.btn_jump_to) {
        this.disp.btn_jump_to.visible = true;
      }
    }
  };
  DecoShopPanelItemComponent.prototype.fillShopIcon = function () {
    var __s62local0 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage();
    var __s62local1 = __s62local0.getAmountForBuildMenu(this.disp.shopVO.wodId);
    var __s62local2 = __s62local1 > 0 ? __s62local0.getHighestBuildingLevel(this.disp.shopVO.wodId) : this.disp.shopVO;
    __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s62local2, this.disp.mc_contentHolder.mc_content, DecoShopPanelItemComponent.MAX_WIDTH, DecoShopPanelItemComponent.MAX_HEIGHT, "", true, this.bindFunction(this.onBuildingLoaded));
    this.disp.mc_contentHolder.mc_buildingLevel.visible = __s62local1 > 0 && !(__s62local2 instanceof __dep_export_ADecoBuildingVO.ADecoBuildingVO);
    if (this.disp.mc_contentHolder.mc_buildingLevel.visible) {
      var __s62local3 = __s62local2.level;
      var __s62local4 = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_contentHolder.mc_buildingLevel.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s62local3));
      __s62local4.autoFitToBounds = true;
      __s62local4.y = __s62local3 > 99 ? -7 : -9;
      __s62local4.x = __s62local3 > 99 ? -12 : -11;
    }
    this.disp.shownShopVO = __s62local2;
  };
  DecoShopPanelItemComponent.prototype.fillItem = function (__s65param0, __s65param1) {
    this._loaded = false;
    this.disp.bg.gotoAndStop(DecoShopPanelItemComponent.BG_FRAME_STANDARD);
    this.disp.mc_contentHolder.marker_new.visible = false;
    this.disp.mc_contentHolder.mc_buildingLevel.visible = false;
    this.disp.btn_sell.visible = false;
    this.disp.btn_sell.toolTipText = "constructionMode_sellDeco";
    var __s65local0 = -1;
    if (__dep_export_CastleModel.CastleModel.areaData.activeSlum) {
      __s65local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeSlum.slumLevel);
    }
    this.disp.visible = true;
    this.disp.bg.actLikeButton = true;
    this.disp.bg.mouseChildren = false;
    this.disp.mc_contentHolder.mouseChildren = false;
    this.disp.mc_contentHolder.mouseEnabled = false;
    this.disp.mc_banner.visible = false;
    this.disp.mc_banner.mouseChildren = false;
    this.disp.mc_contentHolder.mouseEnabled = false;
    this.disp.mc_banner.toolTipText = null;
    this.disp.mc_contentHolder.mc_relic.visible = false;
    this.disp.shopVO = __s65param0;
    this.primeSaleComponent = __dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(__s65param0, true);
    this.primeSaleComponent ||= __dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(__s65param0, false);
    this.fillShopIcon();
    var __s65local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getAmountForBuildMenu(__s65param0.wodId));
    var __s65local2 = !__s65param0.isAvailableByLevelAndEffect && __s65param1 != __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE && __s65local1 == 0;
    if (this.disp.mc_contentHolder.icon_lock_small) {
      this.disp.mc_contentHolder.icon_lock_small.visible = false;
    }
    if (this.disp.btn_jump_to) {
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.btn_jump_to], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
      this.disp.btn_jump_to.icon.removeAllChildren();
      this.disp.btn_jump_to.icon.addChild(new Library.CastleInterfaceElements_Icons.icon_arrow_show_me_2());
      this.disp.btn_jump_to.visible = false;
    }
    this.disp.mc_contentHolder.icon_lock.visible = __s65local2;
    this.disp.bg.actLikeButton = !__s65local2;
    this.disp.mc_contentHolder.icon_lock_unreachable.visible = false;
    this.disp.btn_info.visible = __s65param0.objectType != __dep_export_IsoObjectEnum.IsoObjectEnum.DECO && __s65param0.objectType != __dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_DECO && __s65param0.objectType != __dep_export_IsoObjectEnum.IsoObjectEnum.CUSTOM_DECO && __s65param0.objectType != __dep_export_IsoObjectEnum.IsoObjectEnum.ALLIANCE_DECO;
    this.disp.btn_info.enableButton = !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    if (__dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.provider.hasMaxAmountOfObjectsByType(this.disp.shopVO)) {
      this.changeToMaxAmountReached("panel_shop_maxBuildingAmount");
    }
    __s65param0.discountedCostC2 = -100;
    if (this.primeSaleComponent && this.primeSaleComponent.buildingVO.wodId == __s65param0.wodId) {
      __s65param0.discountedCostC2 = __dep_exact_f855840627e6e145.int(this.primeSaleComponent.getFinalPriceForShopVO(__s65param0));
      this.disp.mc_banner.visible = true;
      this.disp.mc_banner.toolTipText = {
        t: "dialog_primeday_primesale_saveCosts",
        p: [this.primeSaleComponent.discount]
      };
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_banner.txt_discount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.primeSaleComponent.discount]));
    }
    if (__s65param1 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STORAGE) {
      this.disp.btn_upgrade.visible = __s65param1 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE;
      this.disp.btn_upgrade.toolTipText = "upgrade";
      this.fillAmountInfo(__s65param1);
      this.disp.mc_contentHolder.txt_cost0.visible = false;
      this.disp.mc_contentHolder.txt_cost1.visible = false;
      this.disp.mc_contentHolder.txt_cost2.visible = false;
      this.disp.mc_contentHolder.txt_cost3.visible = false;
      this.disp.mc_contentHolder.toolTipText = null;
    } else if (__s65param0.isAvailableByLevelAndEffect && !this.disp.mc_contentHolder.icon_lock_unreachable.visible || __s65local1 > 0 && !__dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.provider.hasMaxAmountOfObjectsByType(__s65param0)) {
      this.disp.btn_upgrade.visible = __s65param1 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE;
      this.disp.btn_upgrade.toolTipText = "upgrade";
      this.fillAmountInfo(__s65param1);
      this.fillPriceInfo();
      this.disp.mc_contentHolder.toolTipText = null;
      this.disp.mc_contentHolder.mc_relic.visible = __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.disp.shownShopVO, "ABasicBuildingVO") && this.disp.shownShopVO.isRelicBuilding;
    } else {
      this.triggerLock();
      if (this.disp.mc_contentHolder.icon_lock_unreachable.visible) {
        this.disp.mc_contentHolder.toolTipText = null;
        this.disp.actLikeButton = false;
      } else if (__s65param0.sceatSkillLocked > 0) {
        var __s65local3 = __dep_export_CastleModel.CastleModel.legendSkillData.getSceatSkillByID(__s65param0.sceatSkillLocked);
        this.disp.mc_contentHolder.toolTipText = {
          t: "needLegendTemple_skill",
          p: [__s65local3.nameTextID, __s65local3.level]
        };
      } else {
        this.disp.mc_contentHolder.toolTipText = {
          t: __s65param0.requiredLegendLevel > 0 ? __dep_export_ClientConstTextIds.ClientConstTextIds.LEGEND_LEVEL_NEEDED : __dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED,
          p: [__s65param0.getRequiredLevel()]
        };
      }
    }
    if (__s65local0 > -1 && !this.disp.mc_contentHolder.icon_lock_unreachable.visible && __s65param0.slumLevelNeeded > __s65local0) {
      this.disp.mc_contentHolder.icon_lock_unreachable.visible = true;
      this.triggerLock();
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_contentHolder.icon_lock_unreachable.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("panel_shop_needQuestProgress"));
    }
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s65param0, "CastlewallDefenceVO") && !__s65param0.isAvailableByBuildOrder) {
      this.disp.mc_contentHolder.toolTipText = "needWallUpgrade";
    }
    this.disp.mc_contentHolder.mouseEnabled = !!this.disp.mc_contentHolder.toolTipText;
    if (__s65param1 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE) {
      this.updateItemUnlockState(__s65param0, __dep_export_CastleModel.CastleModel.legendSkillData.hasLegendTemple());
    }
  };
  DecoShopPanelItemComponent.prototype.bgStopDrag = function () {
    this.disp.bg.alpha = 1;
  };
  DecoShopPanelItemComponent.prototype.bgStartDrag = function () {
    this.disp.bg.alpha = 0.4;
  };
  DecoShopPanelItemComponent.prototype.isStorageStatus = function (__s85param0) {
    return this.disp.bg.currentFrame == __s85param0 - 1;
  };
  Object.defineProperty(DecoShopPanelItemComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  DecoShopPanelItemComponent.prototype.addOnMouseDownItem = function (__s89param0) {
    this._onMouseDownItem.add(__s89param0);
  };
  DecoShopPanelItemComponent.prototype.addOnClickUpgrade = function (__s91param0) {
    this._onClickUpgrade.add(__s91param0);
  };
  DecoShopPanelItemComponent.prototype.addOnClickItem = function (__s93param0) {
    this._onClickItem.add(__s93param0);
  };
  DecoShopPanelItemComponent.prototype.addOnClickInfo = function (__s95param0) {
    this._onClickInfo.add(__s95param0);
  };
  DecoShopPanelItemComponent.prototype.addOnClickSell = function (__s97param0) {
    this._onClickSell.add(__s97param0);
  };
  DecoShopPanelItemComponent.prototype.addOnClickJumpTo = function (__s99param0) {
    this._onClickJumpTo.add(__s99param0);
  };
  DecoShopPanelItemComponent.prototype.addOnMouseOverItem = function (__s101param0) {
    this._onMouseOverItem.add(__s101param0);
  };
  DecoShopPanelItemComponent.prototype.addOnMouseOverSell = function (__s103param0) {
    this._onMouseOverSell.add(__s103param0);
  };
  DecoShopPanelItemComponent.prototype.addOnMouseOutItem = function (__s105param0) {
    this._onMouseOutItem.add(__s105param0);
  };
  DecoShopPanelItemComponent.prototype.addOnMouseOutSell = function (__s107param0) {
    this._onMouseOutSell.add(__s107param0);
  };
  DecoShopPanelItemComponent.prototype.addOnLoaded = function (__s109param0) {
    this._onLoaded.add(__s109param0);
  };
  DecoShopPanelItemComponent.prototype.useHighlightFilter = function () {
    this._filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_DECO_HIGHLIGHT;
    if (this._loaded) {
      this.onBuildingLoaded(null);
    }
  };
  DecoShopPanelItemComponent.prototype.removeHighlightFilter = function () {
    this._filters = __dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER;
    this.disp.mc_contentHolder.mc_content.useFilters(this._filters);
  };
  DecoShopPanelItemComponent.prototype.onBuildingLoaded = function (__s116param0) {
    this._loaded = true;
    if (this._filters && this._filters.length > 0) {
      this.disp.mc_contentHolder.mc_content.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      this.disp.mc_contentHolder.mc_content.useFilters(this._filters, false, 1);
    }
    this._onLoaded.dispatch(this);
  };
  DecoShopPanelItemComponent.BG_FRAME_AVAILABLE_IN_STORAGE = 2;
  DecoShopPanelItemComponent.BG_FRAME_NEW_IN_STORAGE = 3;
  DecoShopPanelItemComponent.BG_FRAME_STANDARD = 1;
  DecoShopPanelItemComponent.MAX_WIDTH = 70;
  DecoShopPanelItemComponent.MAX_HEIGHT = 90;
  return DecoShopPanelItemComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.DecoShopPanelItemComponent = __s0local1;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
