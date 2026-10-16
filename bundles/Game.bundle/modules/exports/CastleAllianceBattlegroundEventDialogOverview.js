Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceBattleGroundScoringVO = require("gge-module:export_AllianceBattleGroundScoringVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogOverview(__s3param0) {
    var __s3local0 = this;
    __s3local0._useAllianceRewards = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogOverview, __s1param0);
  CastleAllianceBattlegroundEventDialogOverview.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_enter, this.subLayerDisp.btn_left, this.subLayerDisp.btn_right], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.mc_joinBlock.mc_info], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.subLayerDisp.btn_left.mouseChildren = false;
    this.subLayerDisp.btn_right.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_overview_title")));
    this._textScrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.subLayerDisp.mc_descSlider), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0));
    if (this.subLayerDisp.mc_textScroll) {
      this.subLayerDisp.mc_textScroll.mouseEnabled = true;
      this._textScrollComponent.scrollVO.addMouseWheelElements([this.subLayerDisp.mc_textScroll, this.subLayerDisp.mc_descSlider]);
    } else {
      this.subLayerDisp.txt_desc.mouseEnabled = true;
      this._textScrollComponent.scrollVO.addMouseWheelElements([this.subLayerDisp.txt_desc, this.subLayerDisp.mc_descSlider]);
    }
    var __s5local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AllianceBattleGroundEventDialogOverviewRewardItem.AllianceBattleGroundEventDialogOverviewRewardItem, "AllianceBattlegroundOverview_ListItem", __dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME);
    __s5local0.itemPaddingY = 10;
    __s5local0.useSmoothScroll = true;
    this._rewardScrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.subLayerDisp.mc_items).addMaskMc(this.subLayerDisp.mc_mask).addSliderMc(this.subLayerDisp.mc_items.mc_slider), __s5local0);
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.updateCategory = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_category, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this._useAllianceRewards ? "allianceContest" : "singleplayerContest")));
    this._rewardScrollList.updateWithNewData(this.getRewardData());
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.show = function (__s11param0) {
    __s1param0.prototype.show.call(this, __s11param0);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_teaser);
    this.subLayerDisp.mc_teaser.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("AllianceBattleGroundScoringTeaserSmall_" + __dep_export_AllianceBattleGroundScoringVO.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR, __dep_exact_9e901e8e2483a22f_4.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME), null, 0, false));
    this.subLayerDisp.mc_joinBlock.visible = !__dep_export_ABGHelper.ABGHelper.isOnABGServer && !__dep_export_ABGHelper.ABGHelper.abgEvent.castleBought;
    this.itxt_lockCopy = this.textFieldManager.registerTextField(this.subLayerDisp.mc_joinBlock.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_lockTime = this.textFieldManager.registerTextField(this.subLayerDisp.mc_joinBlock.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    if (!__dep_export_ABGHelper.ABGHelper.isOnABGServer && __dep_export_ABGHelper.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock > 0) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    }
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.show();
    this._rewardScrollList.onShow();
    this.updateDescription();
    this.updateEnterButton();
    this.updateCategory();
    this.onTimer();
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.hide = function () {
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._textScrollComponent.hide();
    this._rewardScrollList.onHide();
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.onTimer = function (__s16param0 = null) {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      if (__dep_export_ABGHelper.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock > 0) {
        this.itxt_lockTime.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_ABGHelper.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock);
        this.itxt_lockCopy.textContentVO.textId = "dialog_beyondTheHorizon_main_eventParticipationBlocker_join";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_enter, true);
        this.subLayerDisp.btn_enter.toolTipText = null;
      } else {
        this.itxt_lockTime.textContentVO.stringValue = " ";
        this.itxt_lockCopy.textContentVO.textId = "dialog_beyondTheHorizon_main_eventParticipationBlocker_blocked";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_enter, __dep_export_ABGHelper.ABGHelper.abgEvent.castleBought);
        this.subLayerDisp.btn_enter.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_enter) ? null : "dialog_beyondTheHorizon_main_eventParticipationBlocker_blocked_tooltip";
      }
    } else {
      this.layoutManager.hideAllDialogsExcept([]);
    }
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.updateDescription = function () {
    this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_main_overview_desc_" + __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring));
    var __s22local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this._tfDesc.maxScrollV, __s22local0, __s22local0);
    this._textScrollComponent.setVisibility(this._tfDesc.maxScrollV > 1);
    this._textScrollComponent.scrollToPercent(0);
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.updateEnterButton = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_enter.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.castleEnv_0.isOnAllianceBattleGroundServer ? "btn_theGreatEmpire" : "btn_joinBeyondTheHorizon_" + __dep_export_ABGHelper.ABGHelper.skinName)));
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.getRewardData = function () {
    var __s26local0 = [];
    for (var __s26local1 = this._useAllianceRewards ? __dep_export_ABGHelper.ABGHelper.abgEvent.getAllianceRewardList() : __dep_export_ABGHelper.ABGHelper.abgEvent.getIndividualRewardList(), __s26local2 = 0; __s26local2 < __s26local1.length; __s26local2++) {
      __s26local1[__s26local2].listIndex = __s26local2;
      __s26local0.push([__s26local1[__s26local2], this._useAllianceRewards]);
    }
    return __s26local0;
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.onClick = function (__s30param0) {
    __s1param0.prototype.onClick.call(this, __s30param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target)) {
      switch (__s30param0.target) {
        case this.subLayerDisp.btn_enter:
          if (!__dep_export_ABGHelper.ABGHelper.abgEvent.castleBought) {
            __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.getInstance().registerDialogs(__dep_export_CastleAllianceBattleGroundBuyInfoDialog.CastleAllianceBattleGroundBuyInfoDialog);
            break;
          }
          if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
            __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGOUT);
          } else {
            __dep_exact_9e901e8e2483a22f_6.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER);
          }
          break;
        case this.subLayerDisp.btn_left:
        case this.subLayerDisp.btn_right:
          this._useAllianceRewards = !this._useAllianceRewards;
          this.updateCategory();
          break;
        case this.subLayerDisp.mc_joinBlock.mc_info:
          __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.getInstance().registerDialogs(__dep_export_CastleAllianceBattlegroundJoinBlockerDialog.CastleAllianceBattlegroundJoinBlockerDialog);
      }
    }
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.onDescriptionScroll = function () {
    this._tfDesc.scrollV = __dep_exact_9e901e8e2483a22f_3.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._tfDesc.maxScrollV);
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogOverview.prototype, "castleEnv_0", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_5.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogOverview;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogOverview = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_AllianceBattleGroundEventDialogOverviewRewardItem = require("gge-module:export_AllianceBattleGroundEventDialogOverviewRewardItem");
var __dep_export_CastleAllianceBattleGroundBuyInfoDialog = require("gge-module:export_CastleAllianceBattleGroundBuyInfoDialog");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_CastleAllianceBattlegroundJoinBlockerDialog = require("gge-module:export_CastleAllianceBattlegroundJoinBlockerDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
