Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleTutorialEvent = require("gge-module:export_CastleTutorialEvent");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleQuestBuyRewardProperties = require("gge-module:export_CastleQuestBuyRewardProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function QuestInfoComponent(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).disp = __s3param0;
    __s3local0.conditionComponents = [];
    for (var __s3local1 = 0; __s3local1 < QuestInfoComponent.MAX_CONDITIONS; __s3local1++) {
      __s3local0.conditionComponents[__s3local1] ||= new __dep_export_QuestConditionComponent.QuestConditionComponent(__s3param0["condition" + __s3local1]);
    }
    __s3local0.rewardComponent = new __dep_export_SimpleCollectableScrollComponent.SimpleCollectableScrollComponent(__s3param0.rewardList, new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3param0.rewardList).addMouseWheelElements([__s3param0.rewardList]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(), 3, 3);
    __s3local0.itxt_name = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxt_desc = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_desc_big = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_desc_big, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_time = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_campaignInfo.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_timeInfo = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_campaignInfo.txt_timeInfo, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_campaignDesc = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_campaignInfo.txt_campaignDesc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_name.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.itxt_desc_big.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_rewards, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("rewards"))));
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3param0.mc_campaignInfo.btn_buyRubies, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.rewardList.btn_minus, __s3param0.rewardList.btn_plus]);
    __s3param0.mc_campaignInfo.btn_buyRubies.toolTipText = "dialog_questbook_buyProgressButton_tt";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QuestInfoComponent, __s1param0);
  QuestInfoComponent.prototype.preRenderFunc = function (__s7param0) {
    if (__s7param0.itemVO) {
      var __s7local0 = __s7param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (__dep_export_ClientConstCollectable.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(__s7param0.itemVO.itemType) > -1) {
        __s7local0.transform.offset.y = 9;
        __s7local0.transform.scale = 1.4;
      }
    }
  };
  QuestInfoComponent.prototype.showQuest = function (__s11param0) {
    this.currentQuest = __s11param0;
    this.itxt_name.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(this.currentQuest.getQuestName());
    this.itxt_desc.textContentVO.textId = "";
    this.itxt_desc_big.textContentVO.textId = "";
    if (__s11param0.isCampaignQuest) {
      if (this.currentQuest.isCompleted) {
        this.disp.mc_campaignInfo.visible = false;
        this.itxt_desc_big.textContentVO.textId = "dialog_questbook_questfinishedInfo";
      } else if (__s11param0.isLocked) {
        this.disp.mc_campaignInfo.visible = false;
        this.itxt_desc_big.textContentVO.textId = "dialog_questbook_questStatusStartInfo";
      } else {
        this.disp.mc_campaignInfo.visible = true;
        this.disp.mc_campaignInfo.btn_buyRubies.visible = false;
        if (this.currentQuest.isFailed) {
          this.itxt_campaignDesc.textContentVO.textId = "dialog_questbook_questStatusFailedInfo";
          this.itxt_timeInfo.textContentVO.textId = "dialog_questbook_questFailedInfo";
          this.disp.mc_campaignInfo.btn_buyRubies.visible = true;
          this.disp.mc_campaignInfo.mc_timer.visible = false;
        } else {
          this.itxt_campaignDesc.textContentVO.textId = "dialog_questbook_questStatusActiveInfo";
          this.itxt_timeInfo.textContentVO.textId = "dialog_questbook_questActiveInfo";
          this.disp.mc_campaignInfo.mc_timer.visible = true;
          __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
          this.onTimer(null);
        }
      }
    } else {
      this.disp.mc_campaignInfo.visible = false;
      this.itxt_desc.textContentVO.textId = this.currentQuest.getQuestInfoTextId();
    }
    this.fillConditions();
    this.rewardComponent.show(__s11param0.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, QuestInfoComponent.REWARD_DIMENSIONS), this.bindFunction(this.preRenderFunc));
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_CastleTutorialEvent.CastleTutorialEvent(__dep_export_CastleTutorialEvent.CastleTutorialEvent.QUEST_INFO_SHOWN));
  };
  QuestInfoComponent.prototype.fillConditions = function () {
    for (var __s20local0 = 0; __s20local0 < QuestInfoComponent.MAX_CONDITIONS; __s20local0++) {
      if (__s20local0 < this.currentQuest.conditions.length) {
        var __s20local1 = this.currentQuest.conditions[__s20local0];
        this.conditionComponents[__s20local0].show(this.currentQuest, __s20local1);
        this.disp["conditionEmpty" + __s20local0].visible = false;
      } else {
        this.conditionComponents[__s20local0].hide();
        this.disp["conditionEmpty" + __s20local0].visible = true;
      }
    }
  };
  QuestInfoComponent.prototype.onClick = function (__s26param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      switch (__s26param0.target) {
        case this.disp.mc_campaignInfo.btn_buyRubies:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleQuestBuyRewardDialog.CastleQuestBuyRewardDialog, new __dep_export_CastleQuestBuyRewardProperties.CastleQuestBuyRewardProperties(this.currentQuest));
      }
    }
  };
  QuestInfoComponent.prototype.hide = function () {
    if (this.conditionComponents != null) {
      for (var __s30local0 = 0, __s30local1 = this.conditionComponents; __s30local0 < __s30local1.length; __s30local0++) {
        var __s30local2 = __s30local1[__s30local0];
        if (__s30local2 !== undefined) {
          __s30local2.hide();
        }
      }
    }
    this.rewardComponent.hide();
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  Object.defineProperty(QuestInfoComponent.prototype, "campaignQuestEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_QUEST_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  QuestInfoComponent.prototype.onTimer = function (__s38param0) {
    var __s38local0 = this.currentQuest.remainingSeconds;
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.disp.mc_campaignInfo.mc_timer.txt_time, __s38local0, null);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.disp.mc_campaignInfo.mc_timer, __s38local0);
  };
  QuestInfoComponent.__initialize_static_members = function () {
    QuestInfoComponent.MAX_CONDITIONS = 3;
    QuestInfoComponent.REWARD_DIMENSIONS = new __s0local1(52, 46);
  };
  return QuestInfoComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.QuestInfoComponent = __s0local2;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_SimpleCollectableScrollComponent = require("gge-module:export_SimpleCollectableScrollComponent");
var __dep_export_CastleQuestBuyRewardDialog = require("gge-module:export_CastleQuestBuyRewardDialog");
var __dep_export_QuestConditionComponent = require("gge-module:export_QuestConditionComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
