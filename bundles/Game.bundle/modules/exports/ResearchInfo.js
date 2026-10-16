Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SGetCastleResourcesVO = require("gge-module:export_C2SGetCastleResourcesVO");
var __dep_export_C2SResearchStartVO = require("gge-module:export_C2SResearchStartVO");
var __dep_export_CastleResearchEvent = require("gge-module:export_CastleResearchEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function ResearchInfo(__s3param0) {
    this.DAYS_THRESHOLD = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY * 2);
    this.DECIMAL_DIGITS = 1;
    this._disp = __s3param0;
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_buy.btn_buy.txt_label, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("research_start"))).autoFitToBounds = true;
    this.itxt_researchTitle = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_researchTitle, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_researchTitle.autoFitToBounds = true;
    this.itxt_researchDescription = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_researchDescription, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_researchDescription.autoFitToBounds = true;
    this.itxt_researchRequirments = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.txt_researchRequirements, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_researchRequirments.autoFitToBounds = true;
    this.itxt_bigBonus = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_bonus.txt_bigBonus, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_bigBonus.autoFitToBounds = true;
    this.itxt_level = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_bonus.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.itxt_level.autoFitToBounds = true;
    this.itxt_time = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_buy.info_time.txt_cost, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this._disp.mc_bonus.mc_bonusMouseArea.toolTipText = "effect";
    this._disp.mc_buy.info_time.toolTipText = "researchTime";
    this._disp.mc_buy.info_time.mouseChildren = false;
    this._disp.mc_bonus.mc_ResearchIconHolder.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.mc_bonus.btn_info]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3param0.mc_buy.btn_buy], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  }
  ResearchInfo.prototype.show = function () {
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.mc_bonus.mc_ResearchIconHolder.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.mc_bonus.mc_ResearchIconHolder.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    __dep_export_CastleModel.CastleModel.researchData.addEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    var __s5local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleResourcesVO.C2SGetCastleResourcesVO(__s5local0.objectId, __s5local0.kingdomID));
    this.update();
  };
  ResearchInfo.prototype.onMouseOver = function (__s7param0) {
    this._researchVO.onMouseOverResearchIcon(this._disp.mc_bonus.mc_ResearchIconHolder);
  };
  ResearchInfo.prototype.onMouseOut = function (__s9param0) {
    this._researchVO.onMouseOutResearchIcon();
  };
  ResearchInfo.prototype.hide = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.mc_bonus.mc_ResearchIconHolder.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.mc_bonus.mc_ResearchIconHolder.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    __dep_export_CastleModel.CastleModel.researchData.removeEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  ResearchInfo.prototype.setResearchGroup = function (__s13param0) {
    var __s13local0 = null;
    if (__s13param0 != null) {
      __s13local0 = __s13param0.topResearch;
    }
    this._researchVO = __s13local0;
    this.update();
  };
  ResearchInfo.prototype.update = function () {
    this._disp.visible = true;
    if (this._researchVO) {
      this.updateBuyArea();
      this.updateNameAndDescription();
      this.updateBonusArea();
      this.updateIcon();
    } else {
      this._disp.visible = false;
    }
  };
  ResearchInfo.prototype.updateBuyArea = function () {
    var __s20local0 = this._researchVO.isResearchable;
    this._disp.mc_buy.visible = __s20local0;
    this._disp.mc_noBuy_deco.visible = this._researchVO.groupVO.isFullyResearched;
    this.itxt_researchRequirments.textContentVO.stringValue = this._researchVO.groupVO.requirementsText;
    if (__s20local0) {
      if (this._researchVO.researchDuration > this.DAYS_THRESHOLD) {
        this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(this._researchVO.researchDuration, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true);
      } else {
        var __s20local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._researchVO.researchDuration, this.DAYS_THRESHOLD, this.DECIMAL_DIGITS);
        this.itxt_time.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.digitalClock(__s20local1);
      }
      __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_time, __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST) > 0, 15, new __s0local1(-3, 0), true);
      if (this._researchVO.researchDuration > this.DAYS_THRESHOLD) {
        __s20local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this._researchVO.researchDuration);
        this._disp.mc_buy.info_time.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("researchTime") + "\n" + __dep_exact_92d05af59ee2ff30.Localize.digitalClock(__s20local1);
      } else {
        this._disp.mc_buy.info_time.toolTipText = "researchTime";
      }
      var __s20local2 = this._researchVO.getFinalCosts();
      __dep_export_CostHelper.CostHelper.initAsCostsFromOtherStorage(__s20local2, this._disp.mc_buy, __dep_export_CastleModel.CastleModel.researchData.currentResearchVO != this._researchVO, this.createResourceListForCosts());
      this.handleActiveResearch();
      if (this._disp.mc_buy.mc_overlay) {
        if (__s20local2.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2) > 0) {
          this._disp.mc_buy.mc_overlay.gotoAndStop(2);
        } else {
          this._disp.mc_buy.mc_overlay.gotoAndStop(1);
        }
        this._disp.mc_buy.mc_overlay.visible = __dep_export_CastleModel.CastleModel.researchData.currentResearchVO == this._researchVO;
      }
    }
  };
  ResearchInfo.prototype.updateNameAndDescription = function () {
    this.itxt_researchTitle.textContentVO.stringValue = this._researchVO.fullNameText;
    this.itxt_researchDescription.textContentVO.textId = this._researchVO.descriptionTextId;
    this.itxt_researchDescription.textContentVO.textReplacements = this._researchVO.descriptionTextReplacements;
    this.itxt_researchDescription.y = this.itxt_researchTitle.y + this.itxt_researchTitle.textHeight + 3;
  };
  ResearchInfo.prototype.updateBonusArea = function () {
    var __s32local0 = this._researchVO.totalEffectiveBonus;
    this.itxt_bigBonus.textContentVO.stringValue = this._researchVO.getBonusText(__s32local0.textReplacements);
    this._disp.mc_bonus.btn_info.visible = this._researchVO.showInfoBtn;
    this.itxt_bigBonus.visible = this._researchVO.showEffectValue;
    this._disp.mc_bonus.mc_bonusMouseArea.visible = this._researchVO.showEffectValue;
    var __s32local1 = 0;
    var __s32local2 = 0;
    if (this._researchVO && this._researchVO.groupVO) {
      __s32local1 = this._researchVO.groupVO.currentLevel;
      __s32local2 = this._researchVO.groupVO.maxLevel;
    } else {
      __s32local1 = __s32local2 = 0;
    }
    this.itxt_level.textContentVO.textReplacements = [__s32local1, __s32local2];
  };
  ResearchInfo.prototype.updateIcon = function () {
    __dep_export_ResearchIconHelper.ResearchIconHelper.addResearchIcon(this._researchVO.groupVO, this._disp.mc_bonus.mc_ResearchIconHolder, ResearchInfo.ICON_SIZE);
    this._disp.mc_bonus.mc_level.visible = false;
    if (this._researchVO.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS])) {
      var __s36local0 = this._researchVO.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS).strength;
      var __s36local1 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s36local0);
      if (__s36local1.level > 0) {
        this._disp.mc_bonus.mc_level.visible = true;
        __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_bonus.mc_level.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s36local1.level));
      }
    }
  };
  ResearchInfo.prototype.createResourceListForCosts = function () {
    if (!this._ressourceVO) {
      return null;
    }
    var __s40local0 = this._ressourceVO.resources.clone();
    __s40local0.addItem(new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__dep_export_CastleModel.CastleModel.currencyData.c1Amount));
    __s40local0.addItem(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__dep_export_CastleModel.CastleModel.currencyData.c2Amount));
    return __s40local0;
  };
  ResearchInfo.prototype.onRefreshEvent = function (__s43param0) {
    if (__s43param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RESEARCH_EXPERT) {
      this.handleActiveResearch();
    }
  };
  ResearchInfo.prototype.onRemoveEvent = function (__s46param0) {
    if (__s46param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RESEARCH_EXPERT) {
      this.handleActiveResearch();
    }
  };
  ResearchInfo.prototype.handleActiveResearch = function () {
    if (this._researchVO) {
      if (this._researchVO.onlyWithResearchExpert && !__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RESEARCH_EXPERT)) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.mc_buy.btn_buy, false);
        this._disp.mc_buy.btn_buy.toolTipText = "needResearchEvent";
      } else if (__dep_export_CastleModel.CastleModel.researchData.isSomeResearchActive) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.mc_buy.btn_buy, false);
        this._disp.mc_buy.btn_buy.toolTipText = "research_already";
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.mc_buy.btn_buy, true);
        this._disp.mc_buy.btn_buy.toolTipText = null;
      }
    }
  };
  ResearchInfo.prototype.onChangeResources = function (__s55param0) {
    if (__s55param0.params[0].castleID == __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle().objectId) {
      this._ressourceVO = __s55param0.params[0];
    }
    if (this._researchVO) {
      this.updateBuyArea();
    }
  };
  ResearchInfo.prototype.onResearchUpdate = function (__s59param0) {
    if (this._researchVO) {
      this.setResearchGroup(this._researchVO.groupVO);
    }
  };
  ResearchInfo.prototype.onClick = function (__s62param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s62param0.target)) {
      switch (__s62param0.target) {
        case this._disp.mc_buy.btn_buy:
          this.buyResearch();
          break;
        case this._disp.mc_bonus.btn_info:
          if (this._researchVO.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE])) {
            var __s62local0 = this._researchVO.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE).rawValues[0];
            var __s62local1 = __dep_export_CastleModel.CastleModel.craftingData.getRecipeByID(__s62local0);
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResearchRecipeInfoDialog.CastleResearchRecipeInfoDialog, new __dep_export_CastleResearchRecipeInfoDialogProperties.CastleResearchRecipeInfoDialogProperties(__s62local1));
          } else {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this._researchVO.getBoniVOByFirstFoundEffectType([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STRONGER_PEASANT]).strength)));
          }
      }
    }
  };
  ResearchInfo.prototype.buyResearch = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.mc_buy.btn_buy, false);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SResearchStartVO.C2SResearchStartVO(this._researchVO.researchID));
    var __s68local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleResourcesVO.C2SGetCastleResourcesVO(__s68local0.objectId, __s68local0.kingdomID));
  };
  ResearchInfo.__initialize_static_members = function () {
    ResearchInfo.ICON_SIZE = 65;
  };
  return ResearchInfo;
}();
exports.ResearchInfo = __s0local2;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_ResearchIconHelper = require("gge-module:export_ResearchIconHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleResearchRecipeInfoDialog = require("gge-module:export_CastleResearchRecipeInfoDialog");
var __dep_export_CastleResearchRecipeInfoDialogProperties = require("gge-module:export_CastleResearchRecipeInfoDialogProperties");
__s0local2.__initialize_static_members();
