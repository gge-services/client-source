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
var __dep_export_C2SBuyCampaignQuestVO = require("gge-module:export_C2SBuyCampaignQuestVO");
var __dep_export_C2SBuyCampaignRewardVO = require("gge-module:export_C2SBuyCampaignRewardVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleQuestBuyRewardDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleQuestBuyRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleQuestBuyRewardDialog, __s1param0);
  CastleQuestBuyRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal());
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buy], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleQuestBuyRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.shownRewards = this.dialogProperties.quest ? this.dialogProperties.quest.getActualRewardList() : this.campaignEventVO.rewards;
    this.updateText();
    this.updateScrollComponent();
    this.showRewardlist();
    this.dialogDisp.mc_category.gotoAndStop(6);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleQuestBuyRewardDialog.prototype.updateText = function () {
    if (this.dialogProperties.quest) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_buyProgress_header"))));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_buyProgress_desc"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_confirmation, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_buyProgress_confirmation"));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.dialogProperties.quest.buyCost));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_buyEndReward_header"))));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_buyEndReward_desc"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_confirmation, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_buyEndReward_confirmation"));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.campaignEventVO.buyCost));
    }
  };
  CastleQuestBuyRewardDialog.prototype.updateScrollComponent = function () {
    var __s13local0 = __dep_exact_f855840627e6e145.int(this.shownRewards ? this.shownRewards.length : 0);
    var __s13local1 = __dep_exact_f855840627e6e145.int(Math.max(0, __s13local0 - CastleQuestBuyRewardDialog.MAX_REWARDS));
    this.scrollComponent.init(0, __s13local1);
    this.scrollComponent.scrollToValue(0);
    if (__s13local1 > 0) {
      this.scrollComponent.setVisibility(true);
      this.scrollComponent.show();
      this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    } else {
      this.scrollComponent.setVisibility(false);
    }
  };
  CastleQuestBuyRewardDialog.prototype.showRewardlist = function () {
    var __s17local0 = new __dep_export_CollectableList.CollectableList();
    if (this.shownRewards) {
      for (var __s17local1 = 0; __s17local1 < CastleQuestBuyRewardDialog.MAX_REWARDS; __s17local1++) {
        if (__s17local1 + this.scrollComponent.currentValue < this.shownRewards.length) {
          __s17local0.addItem(this.shownRewards.getItemByIndex(__s17local1 + this.scrollComponent.currentValue));
        }
      }
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), __s17local0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(88, 82)), this.bindFunction(this.preRenderFunc));
  };
  CastleQuestBuyRewardDialog.prototype.preRenderFunc = function (__s23param0) {
    if (__s23param0.itemVO) {
      var __s23local0 = __s23param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (__dep_export_ClientConstCollectable.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(__s23param0.itemVO.itemType) > -1) {
        __s23local0.transform.offset.y = 12;
      }
    }
  };
  CastleQuestBuyRewardDialog.prototype.hideLoaded = function (__s27param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s27param0);
    this.scrollComponent.hide();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleQuestBuyRewardDialog.prototype.onEventEnd = function (__s29param0) {
    if (__s29param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT) {
      this.hide();
    }
  };
  CastleQuestBuyRewardDialog.prototype.onScrollValueChange = function () {
    this.showRewardlist();
  };
  CastleQuestBuyRewardDialog.prototype.onClick = function (__s34param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      __s1param0.prototype.onClick.call(this, __s34param0);
      switch (__s34param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_buy:
          if (this.dialogProperties.quest) {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyCampaignQuestVO.C2SBuyCampaignQuestVO(this.dialogProperties.quest.campaignQuestID));
          } else {
            __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyCampaignRewardVO.C2SBuyCampaignRewardVO());
          }
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleQuestBuyRewardDialog.prototype, "campaignEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestBuyRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestBuyRewardDialog.__initialize_static_members = function () {
    CastleQuestBuyRewardDialog.NAME = "CastleQuestBuyRewardDialogEx";
    CastleQuestBuyRewardDialog.MAX_REWARDS = 4;
  };
  return CastleQuestBuyRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleQuestBuyRewardDialog = __s0local1;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
