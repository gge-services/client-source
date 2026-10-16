Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_DifficultyScalingRewardOverviewDialogComplex = require("gge-module:export_DifficultyScalingRewardOverviewDialogComplex");
var __dep_export_EventDifficultyConfirmDialog = require("gge-module:export_EventDifficultyConfirmDialog");
var __dep_export_EventDifficultyConfirmRewardsDialog = require("gge-module:export_EventDifficultyConfirmRewardsDialog");
var __dep_export_EventDifficultyConfirmRewardsDialogProperties = require("gge-module:export_EventDifficultyConfirmRewardsDialogProperties");
var __dep_export_EventDifficultyRewardsOverviewDialogProperties = require("gge-module:export_EventDifficultyRewardsOverviewDialogProperties");
var __dep_export_DifficultyScalingBonusCategoryListItem = require("gge-module:export_DifficultyScalingBonusCategoryListItem");
var __dep_export_DifficultyScalingBonusTextListItem = require("gge-module:export_DifficultyScalingBonusTextListItem");
var __dep_export_DifficultyScalingDifficultyListItem = require("gge-module:export_DifficultyScalingDifficultyListItem");
var __dep_export_DifficultyScalingTextListItem = require("gge-module:export_DifficultyScalingTextListItem");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DifficultyScalingSelectDialog() {
    var __s3local0 = this;
    __s3local0.effectsPageIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, DifficultyScalingSelectDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingSelectDialog, __s1param0);
  DifficultyScalingSelectDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_left, this.dialogDisp.btn_right, this.dialogDisp.btn_overview, this.dialogDisp.btn_select, this.dialogDisp.mc_locked.btn_unlock], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  DifficultyScalingSelectDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.initScrollList();
    this.fillScrollList();
    this._itxt_old = this.textFieldManager.registerTextField(this.dialogDisp.mc_old.txt_copy, new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO());
    this._itxt_old.htmlLinkClick.add(this.bindFunction(this.onHyperLinkClick));
    var __s7local0;
    var __s7local1 = __dep_export_CastleModel.CastleModel.localData.readEventDifficultyForEvent(this.dialogProperties.eventID, __dep_export_CastleModel.CastleModel.userData.playerID);
    var __s7local2 = 0;
    if (__s7local1 > 0) {
      for (__s7local0 = 1; __s7local0 < this.scrollList.numItems; __s7local0++) {
        if (__dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID)[__s7local0 - 1] && __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID)[__s7local0 - 1].difficultyID == __s7local1) {
          __s7local2 = __s7local0 - 1;
        }
      }
    }
    this.selectDifficulty(__dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID)[__s7local2]);
    this._itxt_old = this.textFieldManager.registerTextField(this.dialogDisp.mc_old.txt_copy, this.getHtmlTextVOById("dialog_difficultyScaling_classicDifficulty_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewards, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_difficultyScaling_possibleRewards_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_chooseDifficulty_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_select.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_confirmDifficulty_button")));
  };
  DifficultyScalingSelectDialog.prototype.getHtmlTextVOById = function (__s13param0) {
    var __s13local0 = this.dialogDisp.mc_old.txt_copy.defaultTextFormat.color;
    var __s13local1 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
    __s13local1.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s13param0));
    var __s13local2 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__s13local0, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    var __s13local3 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__s13local0, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    var __s13local4 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.DARK_LINK_COLOR, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    __s13local1.linkFormats = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatsVO(__s13local2, __s13local3, __s13local4);
    return __s13local1;
  };
  DifficultyScalingSelectDialog.prototype.initScrollList = function () {
    var __s15local0 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s15local0.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s15local0.disableButtons = true;
    this.scrollList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.mc_list, __s15local0);
    this.scrollList2 = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.mc_bonusList, __s15local0);
  };
  DifficultyScalingSelectDialog.prototype.fillScrollList = function () {
    var __s17local0 = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 8, 0, 0), true, 0, 0, false);
    var __s17local1 = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 10, 0, 0), true, 0, 0, false);
    this.scrollList.clear();
    var __s17local2 = [];
    var __s17local3 = new __dep_export_DifficultyScalingTextListItem.DifficultyScalingTextListItem(this.dialogProperties.eventID, __s17local1);
    __s17local2.push(__s17local3);
    for (var __s17local4 = 0; __s17local4 < __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID).length; __s17local4++) {
      var __s17local5 = {};
      __s17local5.vo = __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultiesByEventID(this.dialogProperties.eventID)[__s17local4];
      __s17local5.pos = __s17local4;
      __s17local5.selected = false;
      var __s17local6 = new __dep_export_DifficultyScalingDifficultyListItem.DifficultyScalingDifficultyListItem(__s17local5, __s17local0);
      __s17local2.push(__s17local6);
    }
    for (var __s17local7 = 0; __s17local7 < __s17local2.length; __s17local7++) {
      this.scrollList.addItem(__s17local2[__s17local7]);
    }
    this.scrollList.show();
    this.scrollList.scrollToTop();
  };
  DifficultyScalingSelectDialog.prototype.selectDifficulty = function (__s23param0) {
    this.currentDifficulty = __s23param0;
    __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addTeaserImage(this.dialogDisp.mc_teaser, __s23param0.difficultyID);
    var __s23local0 = __dep_export_CastleModel.CastleModel.castleAchievementData.getAchievementForUnlockDifficulty(__s23param0.difficultyID);
    if (__s23local0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_difficultyScaling_difficultyUnlockInfo_desc", [__s23local0.achievementSerieVO.nameString, __s23local0.achievementSeriesNumber]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_difficultyScaling_difficultyUnlockInfo_rubiesOnly_desc"));
    }
    this.effectsPageIndex = 0;
    this.updateEffectList();
    this.scrollList.items.forEach(function (__s27param0) {
      if (__s27param0.data) {
        __s27param0.data.selected = __s23param0.difficultyID == __s27param0.data.vo.difficultyID;
      }
    });
    this.scrollList.items.forEach(function (__s30param0) {
      if (__s30param0) {
        __s30param0.fill();
      }
    });
    __dep_export_CastleModel.CastleModel.localData.saveEventDifficultyForEvent(this.dialogProperties.eventID, this.currentDifficulty.difficultyID, __dep_export_CastleModel.CastleModel.userData.playerID);
    if (this.dialogDisp.mc_locked.btn_unlock) {
      this.dialogDisp.mc_locked.btn_unlock.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_difficultyScaling_unlockDifficulty_tooltip", [__s23param0.unlockC2]);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_locked.btn_unlock.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s23param0.unlockC2));
    }
  };
  DifficultyScalingSelectDialog.prototype.updateEffectList = function () {
    var __s34local0;
    var __s34local1 = __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyEffectsByDifficultyID(this.currentDifficulty.difficultyID);
    var __s34local2 = [];
    var __s34local3 = [];
    for (__s34local0 = 0; __s34local0 < __s34local1.length; __s34local0++) {
      if (__s34local1[__s34local0].wearerID == __dep_exact_26a421b704832cff.EquipmentConst.BARON_WEARER_ID) {
        __s34local3.push(__s34local1[__s34local0]);
      } else if (__s34local1[__s34local0].wearerID == __dep_exact_26a421b704832cff.EquipmentConst.COMMANDER_WEARER_ID) {
        __s34local2.push(__s34local1[__s34local0]);
      }
    }
    var __s34local4 = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 0, 0, 0), true, 0, 0, false);
    var __s34local5 = [];
    var __s34local6 = new __dep_export_DifficultyScalingBonusTextListItem.DifficultyScalingBonusTextListItem(this.currentDifficulty.multiplier, __s34local4);
    __s34local5.push(__s34local6);
    if (__s34local3.length > 0) {
      var __s34local7 = {
        header: "dialog_difficultyScaling_defensive_title"
      };
      __s34local7.effectList = __s34local3;
      var __s34local8 = new __dep_export_DifficultyScalingBonusCategoryListItem.DifficultyScalingBonusCategoryListItem(__s34local7, __s34local4);
      __s34local5.push(__s34local8);
    }
    if (__s34local2.length > 0) {
      var __s34local9 = {
        header: "dialog_difficultyScaling_offensive_title"
      };
      __s34local9.effectList = __s34local2;
      var __s34local10 = new __dep_export_DifficultyScalingBonusCategoryListItem.DifficultyScalingBonusCategoryListItem(__s34local9, __s34local4);
      __s34local5.push(__s34local10);
    }
    this.scrollList2.clear();
    for (var __s34local11 = 0; __s34local11 < __s34local5.length; __s34local11++) {
      this.scrollList2.addItem(__s34local5[__s34local11]);
    }
    this.scrollList2.show();
    this.scrollList2.scrollToTop();
    var __s34local12 = (this.singlePlayerScoreEvent ? this.singlePlayerScoreEvent : this.allianceScoreEvent).getHighest4RewardsForDifficulty(this.currentDifficulty.difficultyID);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "mc_reward_").addItemMcs("mc_reward").addInfoBtns("parent.btn_info").addBuildingLevelMc("mc_reward.mc_buildingLevel"), __s34local12, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(50, 50)));
    var __s34local13 = __dep_export_CastleModel.CastleModel.castleAchievementData.isDifficultyUnlocked(this.currentDifficulty.difficultyID);
    if (__s34local13 && this.currentDifficulty.difficultyType.difficultyTypeID > 10 && this.currentDifficulty.unlockC2 > 0) {
      __s34local13 = false;
    }
    this.dialogDisp.btn_select.visible = __s34local13;
    this.dialogDisp.mc_locked.visible = !__s34local13;
  };
  DifficultyScalingSelectDialog.prototype.onClick = function (__s45param0) {
    var __s45local0 = this;
    __s1param0.prototype.onClick.call(this, __s45param0);
    if (__s45param0.target.mc_icon && __s45param0.target.mc_locked) {
      this.scrollList.items.forEach(function (__s48param0) {
        if (__s45param0.target == __s48param0.disp && __s48param0.data) {
          __s45local0.selectDifficulty(__s48param0.data.vo);
        }
      });
    }
    switch (__s45param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_difficultyScaling"));
        break;
      case this.dialogDisp.btn_left:
        this.effectsPageIndex = this.effectsPageIndex - 1 < 0 ? Math.floor(this.currentEffectList.length / DifficultyScalingSelectDialog.EFFECT_PER_PAGE) : this.effectsPageIndex - 1;
        this.updateEffectList();
        break;
      case this.dialogDisp.btn_right:
        this.effectsPageIndex = this.effectsPageIndex + 1 > Math.floor(this.currentEffectList.length / DifficultyScalingSelectDialog.EFFECT_PER_PAGE) ? 0 : this.effectsPageIndex + 1;
        this.updateEffectList();
        break;
      case this.dialogDisp.btn_select:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_EventDifficultyConfirmDialog.EventDifficultyConfirmDialog, new __dep_export_EventDifficultyConfirmRewardsDialogProperties.EventDifficultyConfirmRewardsDialogProperties(null, this.currentDifficulty, this.dialogProperties.eventID));
        break;
      case this.dialogDisp.mc_locked.btn_unlock:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_EventDifficultyConfirmDialog.EventDifficultyConfirmDialog, new __dep_export_EventDifficultyConfirmRewardsDialogProperties.EventDifficultyConfirmRewardsDialogProperties(null, this.currentDifficulty, this.dialogProperties.eventID, true));
        break;
      case this.dialogDisp.btn_overview:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_DifficultyScalingRewardOverviewDialogComplex.DifficultyScalingRewardOverviewDialogComplex, new __dep_export_EventDifficultyRewardsOverviewDialogProperties.EventDifficultyRewardsOverviewDialogProperties(this.currentDifficulty, this.singlePlayerScoreEvent, this.allianceScoreEvent));
    }
  };
  DifficultyScalingSelectDialog.prototype.onHyperLinkClick = function (__s52param0, __s52param1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_EventDifficultyConfirmRewardsDialog.EventDifficultyConfirmRewardsDialog, new __dep_export_EventDifficultyConfirmRewardsDialogProperties.EventDifficultyConfirmRewardsDialogProperties((this.singlePlayerScoreEvent ? this.singlePlayerScoreEvent : this.allianceScoreEvent).getHighest4RewardsForDifficulty(0), null, this.dialogProperties.eventID));
  };
  Object.defineProperty(DifficultyScalingSelectDialog.prototype, "currentEffectList", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyEffectsByDifficultyID(this.currentDifficulty.difficultyID);
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingSelectDialog.prototype.onRemoveEvent = function (__s56param0) {
    if (__s56param0.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
    }
  };
  DifficultyScalingSelectDialog.prototype.hideLoaded = function (__s59param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._itxt_old.htmlLinkClick.remove(this.bindFunction(this.onHyperLinkClick));
    this.scrollList.destroy();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
  };
  Object.defineProperty(DifficultyScalingSelectDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingSelectDialog.prototype, "singlePlayerScoreEvent", {
    get: function () {
      return __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.getSinglePlayerScoreEvent(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingSelectDialog.prototype, "allianceScoreEvent", {
    get: function () {
      return __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.getAllianceScoreEvent(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingSelectDialog.__initialize_static_members = function () {
    DifficultyScalingSelectDialog.NAME = "EventDifficultySelect2";
  };
  DifficultyScalingSelectDialog.EFFECT_PER_PAGE = 9;
  return DifficultyScalingSelectDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DifficultyScalingSelectDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
