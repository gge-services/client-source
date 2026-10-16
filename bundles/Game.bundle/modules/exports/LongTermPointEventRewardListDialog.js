Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_LongTermPointEventRewardListScrollItemVO = require("gge-module:export_LongTermPointEventRewardListScrollItemVO");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function LongTermPointEventRewardListDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, LongTermPointEventRewardListDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventRewardListDialog, __s1param0);
  LongTermPointEventRewardListDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this._itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_longPointsEvent_rewardsList_header"));
    this._itxt_rewardsDesc = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._rewardScrollListComponent = new __dep_export_CastleBasicItemListScrollComponent.CastleBasicItemListScrollComponent(this.dialogDisp.btn_down, this.dialogDisp.btn_up, this.dialogDisp.txt_page_counter);
  };
  LongTermPointEventRewardListDialog.prototype.setupRewardScrollList = function () {
    this._rewardScrollListComponent.amountOfItems = this.dialogProperties.pointThreshholds.length;
    this._rewardScrollListComponent.startItemIndex = this.dialogProperties.rewardsReceived;
    this._rewardScrollListComponent.show(this._itemScrollList);
  };
  LongTermPointEventRewardListDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this.dialogDisp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  LongTermPointEventRewardListDialog.prototype.onEventRemoved = function (__s11param0) {
    if (__s11param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT) {
      this.hide();
    }
  };
  LongTermPointEventRewardListDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    this.dialogDisp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  LongTermPointEventRewardListDialog.prototype.showLoaded = function (__s16param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s16param0);
    this.updateSkin();
    this.initScrollList();
    this.updateRewardDesc();
    this.setupRewardScrollList();
  };
  LongTermPointEventRewardListDialog.prototype.hideLoaded = function (__s18param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s18param0);
    this._rewardScrollListComponent.hide();
    this.disposeScrollList();
  };
  LongTermPointEventRewardListDialog.prototype.updateSkin = function () {
    if (this.disp.mc_background) {
      this.disp.mc_background.gotoAndStop(this.dialogProperties.skin.id);
    }
    this._itxt_title.color = this.dialogProperties.skin.id == __dep_export_LongTermPointEventSkin.LongTermPointEventSkin.XMAS.id ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
  };
  LongTermPointEventRewardListDialog.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.dialogDisp);
    this._itemScrollList.scrollInstanceName = "reward_";
    this._itemScrollList.scrollStep = LongTermPointEventRewardListDialog.SCROLL_STEP;
    this._itemScrollList.scrollItemClass = __dep_export_LongTermPointEventRewardScrollItem.LongTermPointEventRewardScrollItem;
    this.populateScrollList(this._itemScrollList);
  };
  LongTermPointEventRewardListDialog.prototype.populateScrollList = function (__s25param0) {
    for (var __s25local0 = 0; __s25local0 < this.dialogProperties.pointThreshholds.length; __s25local0++) {
      var __s25local1 = new __dep_export_LongTermPointEventRewardListScrollItemVO.LongTermPointEventRewardListScrollItemVO();
      __s25local1.collectableList = this.dialogProperties.rewardList[__s25local0];
      __s25local1.received = __s25local0 < this.dialogProperties.rewardsReceived;
      __s25local1.thresholdPoints = __dep_exact_f855840627e6e145.int(this.dialogProperties.pointThreshholds[__s25local0]);
      __s25local1.skin = this.dialogProperties.skin;
      if (__s25param0) {
        __s25param0.pushContent(__s25local1);
      }
    }
  };
  LongTermPointEventRewardListDialog.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  LongTermPointEventRewardListDialog.prototype.onClick = function (__s33param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s33param0.target)) {
      __s1param0.prototype.onClick.call(this, __s33param0);
      switch (__s33param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
    }
  };
  LongTermPointEventRewardListDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_longPointsEvent_rewardsList"));
  };
  Object.defineProperty(LongTermPointEventRewardListDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventRewardListDialog.prototype.updateRewardDesc = function () {
    if (this.dialogProperties.rewardsReceived < this.dialogProperties.rewardList.length) {
      this._itxt_rewardsDesc.textContentVO.textId = "dialog_longPointsEvent_rewardsList_rewards";
      this._itxt_rewardsDesc.textContentVO.textReplacements = [this.dialogProperties.rewardsReceived, this.dialogProperties.pointThreshholds.length];
    } else {
      this._itxt_rewardsDesc.textContentVO.textId = "dialog_longPointsEvent_rewardsList_rewards_all";
    }
  };
  LongTermPointEventRewardListDialog.__initialize_static_members = function () {
    LongTermPointEventRewardListDialog.NAME = "LongTermPointEventRewardsList";
    LongTermPointEventRewardListDialog.SCROLL_STEP = 9;
  };
  return LongTermPointEventRewardListDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.LongTermPointEventRewardListDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBasicItemListScrollComponent = require("gge-module:export_CastleBasicItemListScrollComponent");
var __dep_export_LongTermPointEventRewardScrollItem = require("gge-module:export_LongTermPointEventRewardScrollItem");
var __dep_export_LongTermPointEventSkin = require("gge-module:export_LongTermPointEventSkin");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
