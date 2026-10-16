Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_C2SDonatePointTypeVO = require("gge-module:export_C2SDonatePointTypeVO");
var __dep_export_CastleDonationEventDataEvent = require("gge-module:export_CastleDonationEventDataEvent");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDonationEventData = require("gge-module:export_CastleDonationEventData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ColoredHTMLTextReplacementVO = require("gge-module:export_ColoredHTMLTextReplacementVO");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleStandardYesNoDialogProperties = require("gge-module:export_CastleStandardYesNoDialogProperties");
var __dep_export_ModernYesNoBlueDialog = require("gge-module:export_ModernYesNoBlueDialog");
var __dep_export_DonationEventDialogDonateItem = require("gge-module:export_DonationEventDialogDonateItem");
var __dep_export_DonationEventStartDialog = require("gge-module:export_DonationEventStartDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DonationEventDialogDonate(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._scrollY = 0;
    __s3local0._scrollHeight = 0;
    __s3local0._originalMaskHeight = 0;
    __s3local0.selectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.donateConfirmed = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.btn_donate, __s3local0.subLayerDisp.btn_reset, __s3local0.subLayerDisp.btn_title_info], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s3local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.subLayerDisp.mc_list.mc_slider).addMouseWheelElements([__s3local0.subLayerDisp.parent]).addSliderLine(__s3local0.subLayerDisp.mc_list.mc_slider.sliderBar).addSliderBackground(__s3local0.subLayerDisp.mc_list.mc_slider.sliderBG);
    var __s3local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, __s3local0.subLayerDisp.mc_list.mc_mask.height, true);
    __s3local0._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s3local1, __s3local2, true);
    __s3local0._scrollY = __s3local0.subLayerDisp.mc_list.mc_items.y;
    __s3local0.subLayerDisp.btn_title_info.toolTipText = "dialog_mainDonationEvent_eventType_help";
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_donate.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("tut_donateC1_title")));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_reset.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("reset")));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_end.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mainDonationEvent_reward_maxLevelDesc"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_progress.txt_currentPointTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("points_noValue"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_start.txt_currentPointTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("points_noValue"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_end.txt_currentPointTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("points_noValue"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_progress.txt_nextPointTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mainDonationEvent_nextLevelPoints"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_start.txt_nextPointTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mainDonationEvent_nextLevelPoints"));
    __s3local0.itxt_progress_level_max = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_end.mc_item.txt_level_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("levelX_colon"));
    __s3local0.itxt_progress_level_progress_next = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_progress.mc_item0.txt_level_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("levelX_colon"));
    __s3local0.itxt_progress_level_number = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_progress.mc_item0.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_progress_level_number.visible = false;
    __s3local0.itxt_progress_level_progress_current = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_progress.mc_item1.txt_level_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("levelX_colon"));
    __s3local0.itxt_progress_level_start = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_start.mc_nextReward.txt_level_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("levelX_colon"));
    __s3local0.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_animated.alpha = 0;
    __s3local0._currentPointsTextVO = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
    __s3local0._currentPointsTextVO.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [0, ""]));
    __s3local0.itxt_start_currentPoints = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_start.txt_currentPoints, __s3local0._currentPointsTextVO);
    __s3local0.itxt_progress_currentPoints = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_progress.txt_currentPoints, __s3local0._currentPointsTextVO);
    __s3local0.itxt_end_currentPoints = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_end.txt_currentPoints, __s3local0._currentPointsTextVO);
    __s3local0.itxt_start_nextPoints = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_start.txt_nextPoints, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_progress_nextPoints = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_progress.txt_nextPoints, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.itxt_skipLevel = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_skipLevel.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_nominal_add", [0]));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_banner.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("eyecatcher_valuable"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_right.mc_progress.mc_item0.mc_banner.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("eyecatcher_valuable"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_info.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("capReachedRanking_DonationEvent", [""]));
    __s3local0._originalMaskHeight = __s3local0.subLayerDisp.mc_list.mc_mask.height;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventDialogDonate, __s1param0);
  DonationEventDialogDonate.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.donateConfirmed = false;
    this._typeVO = __s5param0[0];
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_mainDonationEvent_title_" + this._typeVO.name.toLowerCase())));
    this.buildItems();
    this._scrollComponent.init(0, Math.max(0, this._scrollHeight - this.subLayerDisp.mc_list.mc_mask.height), 30, 30);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    __dep_export_CastleModel.CastleModel.donationEventData.addEventListener(__dep_export_CastleDonationEventDataEvent.CastleDonationEventDataEvent.ON_CURRENT_SPENT_POINTS_UPDATED, this.bindFunction(this.onPointsUpdated));
    this.selectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this.subLayerDisp.mc_right.rewardBar.mc_yellow.scaleY = 0;
    this.showRewards(false);
    this.updateGreenRewardBar(false);
    this.updateYellowRewardBar();
    this.onSelectionChanged();
    this.updateDonationWarning();
    this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated.alpha = 0;
    this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated2.alpha = 0;
    this.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_animated2.alpha = 0;
    this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_animated.alpha = 0;
    this.subLayerDisp.mc_right.mc_end.mc_item.mc_animated.alpha = 0;
  };
  DonationEventDialogDonate.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.resetItems();
    if (this._scrollComponent) {
      this._scrollComponent.scrollToValue(0);
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
    __dep_export_CastleModel.CastleModel.donationEventData.removeEventListener(__dep_export_CastleDonationEventDataEvent.CastleDonationEventDataEvent.ON_CURRENT_SPENT_POINTS_UPDATED, this.bindFunction(this.onPointsUpdated));
    this.selectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    if (this._originalMaskHeight > 0) {
      this.subLayerDisp.mc_list.mc_mask.height = this._originalMaskHeight;
    }
  };
  DonationEventDialogDonate.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.subLayerDisp.btn_donate:
          this.onDonate();
          break;
        case this.subLayerDisp.btn_reset:
          this.buildItems();
          this.updateYellowRewardBar();
          break;
        case this.subLayerDisp.btn_title_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_DonationEventStartDialog.DonationEventStartDialog);
      }
    }
  };
  DonationEventDialogDonate.prototype.showRewards = function (__s15param0) {
    var __s15local0 = this.subLayerDisp.mc_right.mc_start.visible;
    this.updateRewards();
    if (__s15param0 && this.nextRewardVO && this.currentRewardVO && this.currentShownReward != this.currentRewardVO && __s15local0) {
      this.subLayerDisp.mc_right.mc_start.visible = true;
      this.subLayerDisp.mc_right.mc_progress.visible = false;
      this.animationStepOne2TwoRewards1();
      this.currentShownReward = this.currentRewardVO;
    } else if (__s15param0 && this.currentRewardVO && this.currentShownReward != this.currentRewardVO) {
      this.animationStep1();
      this.currentShownReward = this.currentRewardVO;
    }
  };
  DonationEventDialogDonate.prototype.updateRewards = function () {
    this.donateConfirmed = false;
    var __s19local0 = this.currentRewardVO ? __dep_export_CastleModel.CastleModel.rewardData.getListById(this.currentRewardVO.rewardID) : null;
    var __s19local1 = this.nextRewardVO ? __dep_export_CastleModel.CastleModel.rewardData.getListById(this.nextRewardVO.rewardID) : null;
    var __s19local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(184, 106));
    if (__s19local0 && __s19local1) {
      this.subLayerDisp.mc_right.mc_progress.visible = true;
      this.subLayerDisp.mc_right.mc_start.visible = false;
      this.subLayerDisp.mc_right.mc_end.visible = false;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_icon);
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_icon);
      this.itxt_progress_level_number.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.nextRewardVO.donationRewardID);
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_right.mc_progress.mc_item1.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.currentRewardVO.donationRewardID))).visible = false;
      this.itxt_progress_level_progress_next.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.nextRewardVO.donationRewardID)];
      this.itxt_progress_level_progress_current.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.currentRewardVO.donationRewardID)];
      var __s19local3 = new __dep_export_CollectableList.CollectableList();
      __s19local3.addItem(__s19local1.getItemByIndex(0));
      __s19local3.addItem(__s19local0.getItemByIndex(0));
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.subLayerDisp.mc_right.mc_progress, "mc_item").addInfoBtns("parent.btn_info", null, true), __s19local3, __s19local2);
    } else {
      this.subLayerDisp.mc_right.mc_progress.visible = false;
      this.subLayerDisp.mc_right.mc_start.visible = !__s19local0;
      this.subLayerDisp.mc_right.mc_end.visible = !__s19local1;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_icon);
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_right.mc_end.mc_item.mc_icon);
      var __s19local4 = __s19local1 ? this.subLayerDisp.mc_right.mc_start.mc_nextReward : this.subLayerDisp.mc_right.mc_end.mc_item;
      if (__s19local1) {
        this.itxt_progress_level_start.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.nextRewardVO.donationRewardID)];
      } else {
        this.itxt_progress_level_max.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.currentRewardVO.donationRewardID)];
      }
      this.textFieldManager.registerTextField(__s19local4.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.donationEventData.getRewardLevelByDonationRewardID(__s19local0 ? this.currentRewardVO.donationRewardID : this.nextRewardVO.donationRewardID))).visible = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s19local4.mc_icon).addInfoBtn((__s19local1 ? this.subLayerDisp.mc_right.mc_start : this.subLayerDisp.mc_right.mc_end).btn_info).addIconMc(__s19local4.mc_icon), (__s19local1 || __s19local0).getItemByIndex(0), __s19local2);
    }
  };
  DonationEventDialogDonate.prototype.animationStepOne2TwoRewards1 = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_animated, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.animationStepOne2TwoRewards2)
    });
  };
  DonationEventDialogDonate.prototype.animationStepOne2TwoRewards2 = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_animated, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_start, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
      onComplete: this.bindFunction(this.animationStepOne2TwoRewards3)
    });
  };
  DonationEventDialogDonate.prototype.animationStepOne2TwoRewards3 = function () {
    this.subLayerDisp.mc_right.mc_start.visible = false;
    this.subLayerDisp.mc_right.mc_start.alpha = 1;
    this.subLayerDisp.mc_right.mc_progress.visible = true;
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.animationStep3)
    });
  };
  DonationEventDialogDonate.prototype.animationStep1 = function () {
    this.itxt_progress_level_progress_next.color = "#F3C24A";
    this.itxt_progress_level_number.color = "#F3C24A";
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_end.mc_item.mc_animated, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_end.mc_item.mc_icon, 0.5, {
      scaleX: 1,
      scaleY: 1
    }, {
      scaleX: 1.1,
      scaleY: 1.1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated2, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_icon, 0.5, {
      scaleX: 1,
      scaleY: 1
    }, {
      scaleX: 1.1,
      scaleY: 1.1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.animationStep2)
    });
  };
  DonationEventDialogDonate.prototype.animationStep2 = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_end.mc_item.mc_animated, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_end.mc_item.mc_icon, 0.5, {
      scaleX: 1.1,
      scaleY: 1.1
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated2, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_icon, 0.5, {
      scaleX: 1.1,
      scaleY: 1.1
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
      onComplete: this.bindFunction(this.animationStep3)
    });
  };
  DonationEventDialogDonate.prototype.animationStep3 = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_animated, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_icon, 0.5, {
      scaleX: 1,
      scaleY: 1
    }, {
      scaleX: 1.1,
      scaleY: 1.1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.animationStep4)
    });
  };
  DonationEventDialogDonate.prototype.animationStep4 = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_animated, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_icon, 0.5, {
      scaleX: 1.1,
      scaleY: 1.1
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
    });
    this.itxt_progress_level_progress_next.color = "#EAD0B2";
    this.itxt_progress_level_number.color = "#EAD0B2";
  };
  DonationEventDialogDonate.prototype.onDonate = function () {
    var __s39local0 = [];
    this.itemVEs.forEach(function (__s41param0) {
      if (__s41param0.selectedAmount > 0) {
        __s39local0.push({
          DII: __s41param0.donationItemVO.donationItemID,
          DIA: __s41param0.selectedAmount
        });
      }
    });
    if (this.nextRewardVO && this.getCurrentRewardPoints() + this.selectedPoints() > this.maxRewardVO.minPoints) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ModernYesNoBlueDialog.ModernYesNoBlueDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("attention"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_donationEvent_exceedingWarning"), function () {
        __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDonatePointTypeVO.C2SDonatePointTypeVO(__s39local0));
      }));
    } else {
      __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDonatePointTypeVO.C2SDonatePointTypeVO(__s39local0));
    }
    this.donateConfirmed = true;
  };
  DonationEventDialogDonate.prototype.resetItems = function () {
    if (this.itemVEs) {
      this.itemVEs.forEach(function (__s51param0) {
        __s51param0.hide();
      });
    }
  };
  DonationEventDialogDonate.prototype.onScroll = function () {
    this.subLayerDisp.mc_list.mc_items.y = this._scrollY - this._scrollComponent.currentValue;
  };
  DonationEventDialogDonate.prototype.buildItems = function () {
    var __s55local0 = this;
    var __s55local1 = 0;
    var __s55local2 = this.eventVO.settingVO.getDonateItemVOsByType(this._typeVO.donationTypeID);
    this.resetItems();
    this.itemVEs = [];
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_list.mc_items);
    __s55local2.forEach(function (__s57param0) {
      var __s57local0 = new __dep_export_DonationEventDialogDonateItem.DonationEventDialogDonateItem(__s57param0, __s55local0.selectionChanged);
      __s55local0.subLayerDisp.mc_list.mc_items.addChild(__s57local0.clip);
      __s55local0.itemVEs.push(__s57local0);
      __s57local0.clip.y = __s55local1;
      __s55local1 += __s57local0.clip.height + 2;
      __s57local0.show();
    });
    this._scrollHeight = __s55local1 - 2;
    this._currentPointsTextVO.localizedTextVO.textReplacements = this.getPointsTextReplacements();
    this.itxt_start_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_progress_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_end_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_start_nextPoints.textContentVO.numberValue = this.nextMaxRewardLevelPoints();
    this.itxt_progress_nextPoints.textContentVO.numberValue = this.nextMaxRewardLevelPoints();
    this.updateYellowRewardBar();
    this.onSelectionChanged();
  };
  DonationEventDialogDonate.prototype.getPointsTextReplacements = function () {
    var __s59local0 = "";
    if (this.selectedPoints() > 0) {
      __s59local0 = new __dep_export_ColoredHTMLTextReplacementVO.ColoredHTMLTextReplacementVO(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_brackets_add", [this.selectedPoints()]), "#F3C24A");
    }
    return [this.currentRewardLevelPoints(), __s59local0];
  };
  DonationEventDialogDonate.prototype.onPointsUpdated = function (__s62param0 = null) {
    this.buildItems();
    this.updateGreenRewardBar(true);
    this.showRewards(this.donateConfirmed);
    this.updateDonationWarning();
  };
  DonationEventDialogDonate.prototype.onSelectionChanged = function (__s64param0 = null) {
    this.updateYellowRewardBar();
    this._currentPointsTextVO.localizedTextVO.textReplacements = this.getPointsTextReplacements();
    this.itxt_start_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_progress_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_end_currentPoints.textContentVO = this._currentPointsTextVO;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_donate, this.selectedPoints() > 0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_reset, this.selectedPoints() > 0);
    this.subLayerDisp.mc_right.mc_skipLevel.visible = this.numOfLevelsGaining > 0;
    this.itxt_skipLevel.textContentVO.textReplacements = [this.numOfLevelsGaining];
  };
  DonationEventDialogDonate.prototype.updateYellowRewardBar = function () {
    var __s66local0 = 1;
    if (this.nextMaxRewardLevelPoints() > 0) {
      __s66local0 = Math.min(1, (this.currentRewardLevelPoints() + this.selectedPoints()) / this.nextMaxRewardLevelPoints());
    }
    __dep_exact_608de47b6498f9b0.TweenLite.to(this.subLayerDisp.mc_right.rewardBar.mc_yellow, 0.1, {
      scaleY: __s66local0,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
    });
  };
  DonationEventDialogDonate.prototype.updateGreenRewardBar = function (__s69param0) {
    var __s69local0 = 1;
    if (this.nextMaxRewardLevelPoints() > 0) {
      __s69local0 = Math.min(1, this.currentRewardLevelPoints() / this.nextMaxRewardLevelPoints());
    }
    this.subLayerDisp.mc_right.rewardBar.height;
    if (__s69param0) {
      __dep_exact_608de47b6498f9b0.TweenLite.to(this.subLayerDisp.mc_right.rewardBar.mc_green, 0.3, {
        scaleY: __s69local0,
        ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
      });
    } else {
      this.subLayerDisp.mc_right.rewardBar.mc_green.scaleY = __s69local0;
    }
  };
  DonationEventDialogDonate.prototype.updateDonationWarning = function () {
    var __s74local0 = this._typeVO.donationTypeID == __dep_export_CastleDonationEventData.CastleDonationEventData.LEADERBOARD_DONATIONTYPE_ID;
    var __s74local1 = this.getCurrentRewardPoints() >= this.maxRewardVO.minPoints;
    var __s74local2 = __s74local0 && __s74local1;
    var __s74local3 = this._originalMaskHeight - this.subLayerDisp.mc_info.height;
    this.subLayerDisp.mc_info.visible = __s74local2;
    this.subLayerDisp.mc_list.mc_mask.height = __s74local2 ? __s74local3 : this._originalMaskHeight;
    this.subLayerDisp.mc_list.y = __s74local2 ? this.subLayerDisp.mc_info.height : 0;
    this.subLayerDisp.mc_list.mc_slider.sliderBG.height = __s74local2 ? __s74local3 : this._originalMaskHeight;
    this.subLayerDisp.mc_list.mc_slider.sliderBar.height = __s74local2 ? __s74local3 - 4 : this._originalMaskHeight - 4;
    this.subLayerDisp.mc_list.mc_slider.sliderBar.y = this.subLayerDisp.mc_list.mc_slider.sliderBar.height / 2;
    var __s74local4 = this._scrollComponent.currentValue;
    this._scrollComponent.strategy.visibleValue = this.subLayerDisp.mc_list.mc_mask.height;
    this._scrollComponent.init(0, Math.max(0, this._scrollHeight - this.subLayerDisp.mc_list.mc_mask.height), 30, 30);
    this._scrollComponent.scrollToValue(__s74local4, false);
  };
  Object.defineProperty(DonationEventDialogDonate.prototype, "numOfLevelsGaining", {
    get: function () {
      var __s76local0 = this;
      var __s76local1 = 0;
      var __s76local2 = this.nextRewardVO;
      this.allRewards.forEach(function (__s78param0) {
        if (__s76local0.getCurrentRewardPoints() + __s76local0.selectedPoints() >= __s78param0.minPoints && __s76local2 && __s76local2.minPoints <= __s78param0.minPoints) {
          __s76local1++;
        }
      });
      return __s76local1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonate.prototype, "maxRewardVO", {
    get: function () {
      var __s81local0;
      this.allRewards.forEach(function (__s83param0) {
        if (!__s81local0 || __s83param0.minPoints > __s81local0.minPoints) {
          __s81local0 = __s83param0;
        }
      });
      return __s81local0;
    },
    enumerable: true,
    configurable: true
  });
  DonationEventDialogDonate.prototype.currentRewardLevelPoints = function () {
    return this.getCurrentRewardPoints() - (this.currentRewardVO ? this.currentRewardVO.minPoints : 0);
  };
  DonationEventDialogDonate.prototype.nextMaxRewardLevelPoints = function () {
    if (this.currentRewardVO) {
      if (this.nextRewardVO) {
        return this.nextRewardVO.minPoints - this.currentRewardVO.minPoints;
      } else {
        return 0;
      }
    } else {
      return this.nextRewardVO.minPoints;
    }
  };
  Object.defineProperty(DonationEventDialogDonate.prototype, "nextRewardVO", {
    get: function () {
      var __s94local0 = this;
      var __s94local1 = this.currentRewardVO;
      var __s94local2 = null;
      this.allRewards.forEach(function (__s96param0) {
        if (__s94local2) {
          if (!__s94local1 && __s94local0.getCurrentRewardPoints() < __s96param0.minPoints && __s94local2.minPoints > __s96param0.minPoints || __s94local1 && __s94local0.getCurrentRewardPoints() < __s96param0.minPoints && __s94local2.minPoints > __s96param0.minPoints && __s96param0.minPoints > __s94local1.minPoints) {
            __s94local2 = __s96param0;
          }
        } else if (!__s94local1 && __s94local0.getCurrentRewardPoints() < __s96param0.minPoints || __s94local1 && __s94local1.minPoints < __s96param0.minPoints) {
          __s94local2 = __s96param0;
        }
      });
      return __s94local2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonate.prototype, "currentRewardVO", {
    get: function () {
      var __s101local0 = this;
      var __s101local1 = null;
      this.allRewards.forEach(function (__s103param0) {
        if (__s101local1) {
          if (__s101local0.getCurrentRewardPoints() >= __s103param0.minPoints && __s103param0.minPoints > __s101local1.minPoints) {
            __s101local1 = __s103param0;
          }
        } else if (__s101local0.getCurrentRewardPoints() >= __s103param0.minPoints) {
          __s101local1 = __s103param0;
        }
      });
      return __s101local1;
    },
    enumerable: true,
    configurable: true
  });
  DonationEventDialogDonate.prototype.selectedPoints = function () {
    var __s108local0 = 0;
    this.itemVEs.forEach(function (__s110param0) {
      __s108local0 += __s110param0.selectedPoints;
    });
    return __s108local0;
  };
  DonationEventDialogDonate.prototype.getCurrentRewardPoints = function () {
    return __dep_export_CastleModel.CastleModel.donationEventData.getCurrentRewardPointsForType(this._typeVO.donationTypeID, this.eventVO.settingVO.donationItemSetID);
  };
  Object.defineProperty(DonationEventDialogDonate.prototype, "allRewards", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.donationEventData.getRewardVOs_By_RewardSetID_And_PointTypeID(this.eventVO.settingVO.rewardSetID, this._typeVO.donationTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonate.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DONATION);
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventDialogDonate;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.DonationEventDialogDonate = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
