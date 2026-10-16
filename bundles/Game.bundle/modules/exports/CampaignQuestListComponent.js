Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleQuestBuyRewardProperties = require("gge-module:export_CastleQuestBuyRewardProperties");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CampaignQuestListComponent(__s3param0, __s3param1 = null) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this).rewardComponent = new __dep_export_SimpleCollectableScrollComponent.SimpleCollectableScrollComponent(__s3param0.rewardList, new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3param0.rewardList).addMouseWheelElements([__s3param0.rewardList]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(), 4, 4);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.txt_rewards, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_categoryCampaignRewardTeaser"))));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.txt_gotReward, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_questbook_campaignFinishedInfo"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._disp.txt_resttime, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_questbook_questActiveInfo"));
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3local0._disp.btn_buyRubies, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0._disp.rewardList.btn_minus, __s3local0._disp.rewardList.btn_plus]);
    __s3local0._disp.btn_buyRubies.toolTipText = "dialog_questbook_buyRewardButton_tt";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CampaignQuestListComponent, __s1param0);
  CampaignQuestListComponent.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.txt_name, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_TimeLimitedCampaign"))));
    this.rewardComponent.show(this.campaignEventVO.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, CampaignQuestListComponent.REWARD_DIMENSIONS), this.bindFunction(this.preRenderFunc));
    if (this.campaignEventVO.receivedReward) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.txt_gotReward, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_questbook_campaignFinishedInfo"));
      this._disp.btn_buyRubies.visible = false;
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.txt_gotReward, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      this._disp.btn_buyRubies.visible = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.btn_buyRubies.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.campaignEventVO.buyCost));
    }
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CampaignQuestListComponent.prototype.preRenderFunc = function (__s9param0) {
    if (__s9param0.itemVO) {
      var __s9local0 = __s9param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (__dep_export_ClientConstCollectable.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(__s9param0.itemVO.itemType) > -1) {
        __s9local0.transform.offset.y = 5;
        __s9local0.transform.scale = 1.4;
        if (__s9param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.BUILDING) {
          __s9local0.transform.scale = 1.1;
        }
      }
    }
  };
  CampaignQuestListComponent.prototype.onClick = function (__s14param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      switch (__s14param0.target) {
        case this._disp.btn_buyRubies:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleQuestBuyRewardDialog.CastleQuestBuyRewardDialog, new __dep_export_CastleQuestBuyRewardProperties.CastleQuestBuyRewardProperties(null));
      }
    }
  };
  CampaignQuestListComponent.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.rewardComponent.hide();
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  Object.defineProperty(CampaignQuestListComponent.prototype, "campaignEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  CampaignQuestListComponent.prototype.onTimer = function (__s22param0) {
    var __s22local0 = __dep_exact_f855840627e6e145.int(this.campaignEventVO.remainingEventTimeInSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this._disp.mc_timer.txt_time, __s22local0, null);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this._disp.mc_timer, __s22local0);
  };
  CampaignQuestListComponent.__initialize_static_members = function () {
    CampaignQuestListComponent.REWARD_DIMENSIONS = new __s0local1(45, 36);
  };
  return CampaignQuestListComponent;
}(__dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent);
exports.CampaignQuestListComponent = __s0local2;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleCollectableScrollComponent = require("gge-module:export_SimpleCollectableScrollComponent");
var __dep_export_CastleQuestBuyRewardDialog = require("gge-module:export_CastleQuestBuyRewardDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
