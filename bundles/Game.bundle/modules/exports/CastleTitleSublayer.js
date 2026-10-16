Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_CastleTitleDataEvent = require("gge-module:export_CastleTitleDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __dep_export_AdvancedProgressBar = require("gge-module:export_AdvancedProgressBar");
var __dep_export_HorizontalCallbackProgressBehaviour = require("gge-module:export_HorizontalCallbackProgressBehaviour");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_CastleTitleScrollItem = require("gge-module:export_CastleTitleScrollItem");
var __dep_export_CastleTitleScrollItemVO = require("gge-module:export_CastleTitleScrollItemVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleTitleSublayer(__s3param0) {
    var __s3local0 = this;
    __s3local0.lastProgress = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_titleList_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("points_noValue"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_titleList_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_rankTitle"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_titleList_reward, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("reward"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_titleInfo.titleDetails_rank.mc_rankInfoBox.txt_rank_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionTitles_yourRank"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_titleInfo.titleDetails_rank.txt_timerDescription, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_factionTitles_refreshIn_1")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_currentTitle_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_titles_displayedTitle"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_titleSelection.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_titles_selectTitle")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.btn_titleSelection, __s3local0.subLayerDisp.mc_itemContainer.btn_up, __s3local0.subLayerDisp.mc_itemContainer.btn_top, __s3local0.subLayerDisp.mc_itemContainer.btn_down, __s3local0.subLayerDisp.mc_itemContainer.mc_slider.btn_slider]);
    __s3local0.selectedTitleProgressBar = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(__s3local0.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.progressbar);
    __s3local0.nextRankTimer = new __dep_export_CastleTimerComponent.CastleTimerComponent(__s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_titleInfo.titleDetails_rank.txt_timer, new __dep_exact_92d05af59ee2ff30_2.TextVO("")), __s3local0.bindFunction(__s3local0.getTimerText));
    __s3local0.titleInfoProgressBarOriginalPosition = new __s0local0(__s3local0.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.x, __s3local0.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.y);
    __s3local0.currentProgressBar = new __dep_export_AdvancedProgressBar.AdvancedProgressBar(__s3local0.subLayerDisp.mc_progress.progressbar, new __dep_export_HorizontalCallbackProgressBehaviour.HorizontalCallbackProgressBehaviour(__s3local0.bindFunction(__s3local0.onProgressAnimationUpdate), __s3local0.bindFunction(__s3local0.onProgressAnimationComplete)));
    __s3local0.mightPointsOriginalPosition = __s3local0.subLayerDisp.mc_titleInfo.mc_might ? new __s0local0(__s3local0.subLayerDisp.mc_titleInfo.mc_might.x, __s3local0.subLayerDisp.mc_titleInfo.mc_might.y) : new __s0local0(-1, -1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleSublayer, __s1param0);
  CastleTitleSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    if (this.lastProgress == -1) {
      this.lastProgress = this.currentTitle != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE && this.currentTitle.nextTitleID == -1 ? 1 : this.titleData.getProgressTo(this.nextTitle);
    } else if (this.lastProgress != this.currentProgressBar.currentProgress && this.currentTitle.topX != 1) {
      this.currentProgressBar.scale(this.lastProgress);
    }
    this.initTextFields();
    this.initList(true);
    this.initSystemSymbols();
    this.updateTitleInfo();
    this.updateProgressBar();
    this.updateDecay();
    this.updateTitleSelectionButton();
    this.titleData.addEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitleDataUpdated));
  };
  CastleTitleSublayer.prototype.onTitleDataUpdated = function (__s9param0) {
    this.initList(false);
    this.updateTitleInfo();
    this.updateProgressBar();
    this.updateDecay();
    this.updateTitleSelectionButton();
    this.itxt_currentShownTitle.textContentVO.textId = this.shownTitle.textID;
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(this.subLayerDisp.mc_currentSelectedSystem, this.shownTitle.titleSystem, new __s0local0(30, 29));
  };
  CastleTitleSublayer.prototype.initTextFields = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.sublayerProperties.headerTextID));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.sublayerProperties.copyTextID));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.txt_selectedTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.sublayerProperties.neededPointsTextID));
    this.itxt_currentShownTitle = this.textFieldManager.registerTextField(this.subLayerDisp.txt_currentTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.shownTitle.textID));
    this.itxt_selectedProgress = this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.txt_progress, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_nextHeader = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_next_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_nextTitle = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_next, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_nextPoints = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_next_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0, true));
    this.itxt_nextPoints.autoFitToBounds = true;
    this.itxt_currentHeader = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_current_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_currentTitle = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_current, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_currentPoints = this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_current_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0, true));
    this.itxt_currentPoints.autoFitToBounds = true;
    this.itxt_currentRank = this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.titleDetails_rank.mc_rankInfoBox.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_currentTitle.autoFitToBounds = true;
    this.itxt_nextTitle.autoFitToBounds = true;
    this.initMightText();
  };
  CastleTitleSublayer.prototype.initMightText = function () {
    if (this.subLayerDisp.mc_titleInfo.mc_might) {
      this.itxt_mightTitleHeader = this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.mc_might.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
      this.itxt_mightTitlePoints = this.textFieldManager.registerTextField(this.subLayerDisp.mc_titleInfo.mc_might.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
      this.subLayerDisp.mc_titleInfo.mc_might.toolTipText = "dialog_gloryTitles_mightCounter_tooltip";
      this.subLayerDisp.mc_titleInfo.titleDetails_rank.mc_rankInfoBox.toolTipText = "dialog_factionTitles_refreshIn_2";
      this.subLayerDisp.mc_titleInfo.mc_might.mouseChildren = false;
      this.subLayerDisp.mc_titleInfo.titleDetails_rank.mc_rankInfoBox.mouseChildren = false;
    }
  };
  CastleTitleSublayer.prototype.initList = function (__s16param0) {
    var __s16local0 = new __dep_export_BasicSliderVO.BasicSliderVO(this.subLayerDisp.mc_itemContainer.mc_slider.sliderBar, this.subLayerDisp.mc_itemContainer.mc_slider.btn_slider, this.titles.length, 0, this.subLayerDisp);
    var __s16local1 = __dep_exact_f855840627e6e145.int(this.titleList ? this.titleList.currentStartIndex : 0);
    this.hideList();
    this.titleList = new __dep_export_SliderItemScrollList.SliderItemScrollList(this.subLayerDisp.mc_itemContainer, this.subLayerDisp, __s16local0);
    this.titleList.scrollItemClass = __dep_export_CastleTitleScrollItem.CastleTitleScrollItem;
    for (var __s16local2 = __dep_exact_f855840627e6e145.int(this.titles.length - 1); __s16local2 >= 0; __s16local2--) {
      var __s16local3 = this.titles[__s16local2];
      var __s16local4 = false;
      __s16local4 = __s16param0 ? !!this.currentTitle && (__s16local3.titleID == this.currentTitle.nextTitleID || __s16local3.topX == 1 && this.currentTitle.topX == 1) || this.currentTitle == __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE && __s16local2 == 0 : this.currentlySelectedInList.title.titleID == __s16local3.titleID;
      var __s16local5 = new __dep_export_CastleTitleScrollItemVO.CastleTitleScrollItemVO(__s16local3, __s16local4);
      if (__s16local4) {
        this.currentlySelectedInList = __s16local5;
      }
      this.titleList.pushContent(__s16local5);
    }
    this.titleList.initList(__s16param0 ? this.getListStartIndex() : __s16local1);
    this.titleList.addEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
  };
  CastleTitleSublayer.prototype.getListStartIndex = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(0, this.titles.length - this.currentlySelectedInList.title.orderInSystem - CastleTitleSublayer.NUMER_LIST_ITEMS + 1));
  };
  CastleTitleSublayer.prototype.initSystemSymbols = function () {
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(this.subLayerDisp.mc_currentSelectedSystem, this.shownTitle.titleSystem, new __s0local0(30, 29));
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(this.subLayerDisp.mc_progress.mc_nextSystem, this.sublayerProperties.titleSystem, new __s0local0(24, 23));
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(this.subLayerDisp.mc_progress.mc_currentSystem, this.sublayerProperties.titleSystem, new __s0local0(24, 23));
    this.subLayerDisp.mc_progress.mc_nextSystem.toolTipText = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getTitleSystemPointsTextID(this.sublayerProperties.titleSystem);
    this.subLayerDisp.mc_progress.mc_currentSystem.toolTipText = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getTitleSystemPointsTextID(this.sublayerProperties.titleSystem);
  };
  CastleTitleSublayer.prototype.updateTitleInfo = function () {
    var __s25local0 = this.currentlySelectedInList.title;
    var __s25local1 = __dep_exact_f855840627e6e145.int(this.titleData.getPointsInSystem(this.sublayerProperties.titleSystem));
    var __s25local2 = __dep_exact_f855840627e6e145.int(this.currentTitle ? this.currentTitle.orderInSystem : -1);
    if (__s25local0.orderInSystem <= __s25local2) {
      this.selectedTitleProgressBar.scaleX = 1;
      this.itxt_selectedProgress.textContentVO.textId = "dialog_gloryTitles_achieved";
    } else {
      var __s25local3 = this.titleData.getProgressTo(__s25local0);
      this.selectedTitleProgressBar.scaleX = __s25local3;
      this.itxt_selectedProgress.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.itxt_selectedProgress.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s25local1, false), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s25local0.threshold, false)];
    }
    if (__s25local1 >= this.titleData.getMaxDefaultThresholdInSystem(this.sublayerProperties.titleSystem)) {
      this.setUpTitleBarPosition(this.titleInfoProgressBarOriginalPosition);
      this.setUpMightInfoPosition(this.mightPointsOriginalPosition);
      this.subLayerDisp.mc_titleInfo.titleDetails_rank.visible = true;
      this.subLayerDisp.mc_titleInfo.titleDetails_normal.visible = false;
      var __s25local4 = __dep_exact_f855840627e6e145.int(this.titleData.getTopXRankInSystem(this.sublayerProperties.titleSystem));
      if (__s25local4 > 0) {
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_currentRank, __s25local4);
      } else {
        __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_currentRank, "-");
      }
      this.nextRankTimer.start(this.titleData.getRankTimerRemainingSecondsOfSystem(this.sublayerProperties.titleSystem));
    } else {
      this.setUpTitleBarPosition();
      this.setUpMightInfoPosition();
      this.subLayerDisp.mc_titleInfo.titleDetails_rank.visible = false;
      this.subLayerDisp.mc_titleInfo.titleDetails_normal.visible = true;
      this.nextRankTimer.stop();
    }
    this.updateMightPointsValue(__s25local0);
  };
  CastleTitleSublayer.prototype.updateMightPointsValue = function (__s33param0) {
    if (this.itxt_mightTitleHeader && this.itxt_mightTitlePoints) {
      var __s33local0 = 0;
      if (__s33param0.previousTitleID >= 0) {
        __s33local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__s33param0.previousTitleID).mightValue);
      }
      var __s33local1 = __s33param0.mightValue - __s33local0;
      this.itxt_mightTitleHeader.textContentVO.textId = "dialog_gloryTitles_mightCounter_header";
      this.itxt_mightTitlePoints.textContentVO.numberValue = __s33local1;
    }
  };
  CastleTitleSublayer.prototype.setUpMightInfoPosition = function (__s37param0 = null) {
    if (this.subLayerDisp.mc_titleInfo.mc_might) {
      this.subLayerDisp.mc_titleInfo.mc_might.x = __s37param0 ? __s37param0.x : this.subLayerDisp.mc_titleInfo.mc_mightDetailsGuide.x;
      this.subLayerDisp.mc_titleInfo.mc_might.y = __s37param0 ? __s37param0.y : this.subLayerDisp.mc_titleInfo.mc_mightDetailsGuide.y;
    }
  };
  CastleTitleSublayer.prototype.setUpTitleBarPosition = function (__s40param0 = null) {
    this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.x = __s40param0 ? __s40param0.x : this.subLayerDisp.mc_titleInfo.mc_detailsGuide.x;
    this.subLayerDisp.mc_titleInfo.titleDetails_selectedProgress.y = __s40param0 ? __s40param0.y : this.subLayerDisp.mc_titleInfo.mc_detailsGuide.y;
  };
  CastleTitleSublayer.prototype.updateProgressBar = function () {
    this.itxt_currentPoints.visible = true;
    if (this.currentTitle && this.currentTitle.topX == 1) {
      this.itxt_nextHeader.textContentVO.textId = "dialog_gloryTitles_currentTitle";
      this.itxt_nextTitle.textContentVO.textId = this.currentTitle.textID;
      this.itxt_nextPoints.textContentVO.numberValue = this.titleData.getPointsInSystem(this.sublayerProperties.titleSystem);
      this.itxt_currentHeader.textContentVO.textId = "";
      this.itxt_currentTitle.textContentVO.textId = "";
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this.itxt_currentPoints, "");
      this.itxt_currentPoints.visible = false;
      this.currentProgressBar.scaleX = 1;
      this.lastProgress = 1;
    } else {
      var __s42local0 = this.titleData.getProgressTo(this.nextTitle);
      this.itxt_nextHeader.textContentVO.textId = "dialog_gloryTitles_nextTitle";
      this.itxt_nextTitle.textContentVO.textId = this.nextTitle.textID;
      this.itxt_nextPoints.textContentVO.numberValue = this.nextTitle.threshold;
      this.itxt_currentHeader.textContentVO.textId = "dialog_gloryTitles_currentTitle";
      this.itxt_currentTitle.textContentVO.textId = this.currentTitle.textID;
      if (!this.titleOnLastOpen || this.currentTitle.orderInSystem > this.titleOnLastOpen.orderInSystem) {
        this.currentProgressBar.fromTo(0, __s42local0);
      } else if (this.currentTitle.orderInSystem < this.titleOnLastOpen.orderInSystem) {
        this.currentProgressBar.fromTo(1, __s42local0);
      } else {
        this.currentProgressBar.to(__s42local0);
      }
    }
    this.titleOnLastOpen = this.currentTitle;
  };
  CastleTitleSublayer.prototype.updateDecay = function () {
    if (this.subLayerDisp.mc_decay) {
      if (this.titleData.isDecaying(this.sublayerProperties.titleSystem)) {
        var __s49local0 = __dep_exact_f855840627e6e145.int(Math.max(0, this.titleData.getHighestTitleCurrentlyHeldByThisUser(this.sublayerProperties.titleSystem).decay + this.subscriptionBonus));
        this.subLayerDisp.mc_decay.gotoAndStop(this.isSubscriptionActive ? 2 : 1);
        this.textFieldManager.registerTextField(this.subLayerDisp.mc_decay.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.sublayerProperties.decayTextID, [__s49local0])).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
        this.subLayerDisp.mc_decay.visible = true;
      } else {
        this.subLayerDisp.mc_decay.visible = false;
      }
    }
  };
  Object.defineProperty(CastleTitleSublayer.prototype, "isSubscriptionActive", {
    get: function () {
      return this.sublayerProperties.titleSystem == __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE && __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GLORY_DECAY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "subscriptionBonus", {
    get: function () {
      if (this.isSubscriptionActive) {
        return __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GLORY_DECAY);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSublayer.prototype.updateTitleSelectionButton = function () {
    var __s60local0 = this.titleData.getDisplayableTitles(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX).length > 1 || this.titleData.getDisplayableTitles(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX).length > 1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_titleSelection, __s60local0);
    if (__s60local0) {
      this.subLayerDisp.btn_titleSelection.toolTipText = null;
    } else {
      this.subLayerDisp.btn_titleSelection.toolTipText = "dialog_gloryTitles_noTitlesSelect";
      this.subLayerDisp.btn_titleSelection.mouseChildren = false;
    }
  };
  CastleTitleSublayer.prototype.onProgressAnimationUpdate = function (__s64param0, __s64param1) {
    this.lastProgress = __s64param0.target[__s64param1];
    var __s64local0 = __dep_exact_f855840627e6e145.int(this.nextTitle.threshold - this.currentTitle.threshold);
    var __s64local1 = Math.round(this.currentTitle.threshold + __s64local0 * this.lastProgress);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_currentPoints, Math.max(0, __s64local1));
  };
  CastleTitleSublayer.prototype.onProgressAnimationComplete = function () {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_currentPoints, Math.max(0, this.titleData.getPointsInSystem(this.sublayerProperties.titleSystem)));
  };
  CastleTitleSublayer.prototype.getTimerText = function (__s68param0) {
    return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s68param0);
  };
  CastleTitleSublayer.prototype.onScrollItemClick = function (__s70param0) {
    this.selectTitle(__s70param0.scrollItem.titleScrollItemVO);
  };
  CastleTitleSublayer.prototype.selectTitle = function (__s72param0) {
    if (__s72param0.title.currentAssigneePID > -1) {
      __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s72param0.title.currentAssigneePID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
    this.currentlySelectedInList.selected = false;
    __s72param0.selected = true;
    this.currentlySelectedInList = __s72param0;
    this.titleList.initList(this.titleList.currentStartIndex);
    this.updateTitleInfo();
  };
  CastleTitleSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.hideList();
    this.nextRankTimer.stop();
    this.currentProgressBar.kill();
    this.currentProgressBar.removeMaskMC();
    this.selectedTitleProgressBar.removeMaskMC();
    this.titleOnLastOpen = this.currentTitle;
    this.titleData.removeEventListener(__dep_export_CastleTitleDataEvent.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitleDataUpdated));
  };
  CastleTitleSublayer.prototype.hideList = function () {
    if (this.titleList) {
      this.titleList.removeEventListener(__dep_exact_9e901e8e2483a22f_2.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this.titleList.clear();
      this.titleList.remove();
      this.titleList = null;
    }
  };
  CastleTitleSublayer.prototype.onClick = function (__s80param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s80param0.target)) {
      switch (__s80param0.target) {
        case this.subLayerDisp.btn_titleSelection:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleTitleSelectDialog.CastleTitleSelectDialog);
      }
    }
  };
  CastleTitleSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", this.sublayerProperties.helpText);
  };
  Object.defineProperty(CastleTitleSublayer.prototype, "shownTitle", {
    get: function () {
      if (this.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX) != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE) {
        return this.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_SUFFIX);
      } else {
        return this.titleData.getSelectedTitleByDisplayType(__dep_export_ClientConstTitle.ClientConstTitle.DISPLAYTYPE_PREFIX);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "currentTitle", {
    get: function () {
      return this.titleData.getHighestTitleCurrentlyHeldByThisUser(this.sublayerProperties.titleSystem);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "nextTitle", {
    get: function () {
      if (this.currentTitle != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE) {
        return this.titleData.getTitleByTitleID(this.currentTitle.nextTitleID);
      } else {
        return this.titleData.getTitlesFromSystem(this.sublayerProperties.titleSystem)[0];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "titles", {
    get: function () {
      return this.titleData.getTitlesFromSystem(this.sublayerProperties.titleSystem);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSublayer.prototype, "titleData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.titleData;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSublayer.__initialize_static_members = function () {
    CastleTitleSublayer.NUMER_LIST_ITEMS = 6;
  };
  return CastleTitleSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleTitleSublayer = __s0local1;
var __dep_export_CastleTitleData = require("gge-module:export_CastleTitleData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SliderItemScrollList = require("gge-module:export_SliderItemScrollList");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastleTitleSelectDialog = require("gge-module:export_CastleTitleSelectDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
__s0local1.__initialize_static_members();
