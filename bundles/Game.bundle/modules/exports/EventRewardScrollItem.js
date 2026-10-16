Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_EventIconHelper = require("gge-module:export_EventIconHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function EventRewardScrollItem(__s3param0) {
    var __s3local0 = this;
    __s3local0.iconSize = new __s0local0(44, 41);
    __s3local0.rewardFramePlayer = 1;
    __s3local0.rewardFrameAlliance = 2;
    __s3local0.frameEmptySlot = 3;
    __s3local0._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventRewardScrollItem, __s1param0);
  EventRewardScrollItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.eventStarted));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.eventEnded));
  };
  EventRewardScrollItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEverySecond));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.eventStarted));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.eventEnded));
    this.destroyRewardList();
  };
  EventRewardScrollItem.prototype.eventEnded = function (__s9param0) {
    if (__s9param0.specialEventVO.eventId == this.vo.eventID) {
      this.icon.basicButton = null;
    }
  };
  EventRewardScrollItem.prototype.eventStarted = function (__s12param0) {
    if (__s12param0.specialEventVO.eventId == this.vo.eventID) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.icon);
    }
  };
  EventRewardScrollItem.prototype.destroyRewardList = function () {
    if (this.rewardComp) {
      this.rewardComp.removeEventListener(__dep_exact_9e901e8e2483a22f_3.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onRewardScroll));
      this.rewardComp.destroy();
    }
    this.rewardComp = null;
  };
  Object.defineProperty(EventRewardScrollItem.prototype, "icon", {
    get: function () {
      return this.disp.icon_placeholder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventRewardScrollItem.prototype, "iconContainer", {
    get: function () {
      return this.disp.icon_placeholder.icon_container;
    },
    enumerable: true,
    configurable: true
  });
  EventRewardScrollItem.prototype.customFillItem = function () {
    this.setupEventIcon();
    this.updateEventState();
    this.setupRewards();
    this.textfieldManager.registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.vo.eventTitle)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  EventRewardScrollItem.prototype.setupEventIcon = function () {
    var __s24local0 = __dep_export_EventIconHelper.EventIconHelper.createEventIconByEventID(this.vo.eventID, new __s0local0(this.icon.width, this.icon.height));
    if (__s24local0) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.iconContainer);
      this.iconContainer.addChild(__s24local0);
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.icon);
      this.icon.mouseChildren = false;
    }
  };
  EventRewardScrollItem.prototype.updateEventState = function () {
    var __s27local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.vo.eventID);
    this.eventRunningInfoMc.visible = __s27local0 != null;
    this.eventEndedInfoMc.visible = __s27local0 == null;
    if (__s27local0) {
      this.setupRunningEvent();
    } else {
      this.setupEndedEvent();
    }
  };
  EventRewardScrollItem.prototype.setupRewards = function () {
    this.destroyRewardList();
    this.rewardComp = new __dep_export_PaginatedCollectableRenderListWrapper.PaginatedCollectableRenderListWrapper(this.disp, this.vo.rewards, this._collectableRenderList, EventRewardScrollItem.numVisibleItems, this.disp.btn_left, this.disp.btn_right, "item_", "mc_item", "parent.btn_info", "icon_container", "parent.txt_text", "parent.mc_textBackground", __dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, this.iconSize);
    this.rewardComp.addEventListener(__dep_exact_9e901e8e2483a22f_3.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onRewardScroll));
    this.setBackgroundForRewards();
  };
  EventRewardScrollItem.prototype.onRewardScroll = function (__s33param0) {
    this.setBackgroundForRewards();
  };
  EventRewardScrollItem.prototype.setBackgroundForRewards = function () {
    var __s35local0;
    var __s35local1;
    var __s35local2 = 0;
    for (var __s35local3 = this.rewardComp.currentPage * EventRewardScrollItem.numVisibleItems, __s35local4 = 0, __s35local5 = __s35local3; __s35local5 < __s35local3 + EventRewardScrollItem.numVisibleItems; __s35local5++) {
      (__s35local0 = this.disp.getChildByName("item_" + __s35local4)).visible = true;
      if (__s35local5 >= this.vo.rewards.length) {
        this.showEmptySlot(__s35local0);
        __s35local4++;
      } else {
        this.resetSlot(__s35local0);
        __s35local1 = this.vo.rewards.getItemByIndex(__s35local5);
        __s35local2 = __dep_exact_f855840627e6e145.int(__s35local1.grantType == __dep_exact_26a421b704832cff.RewardConst.ALLIANCE ? this.rewardFrameAlliance : this.rewardFramePlayer);
        __s35local0.frame.gotoAndStop(__s35local2);
        __s35local4++;
      }
    }
  };
  EventRewardScrollItem.prototype.resetSlot = function (__s41param0) {
    __s41param0.btn_info.visible = true;
  };
  EventRewardScrollItem.prototype.showEmptySlot = function (__s43param0) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s43param0.mc_item.icon_container);
    __s43param0.txt_text.text = "";
    __s43param0.btn_info.visible = false;
    __s43param0.mc_textBackground.visible = false;
    __s43param0.frame.gotoAndStop(this.frameEmptySlot);
  };
  EventRewardScrollItem.prototype.setupEndedEvent = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.icon, false);
    this.icon.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    this.icon.toolTipText = "dialog_combinedReward_eventOver";
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_event_ended, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_combinedReward_eventOver"));
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_rank_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("rank"));
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_points_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_points"));
    var __s45local0 = __dep_exact_f855840627e6e145.int(this.vo.topXCount > 0 ? this.vo.topXCount : this.vo.rank);
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s45local0));
    this.textfieldManager.registerTextField(this.eventEndedInfoMc.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.vo.score));
  };
  EventRewardScrollItem.prototype.setupRunningEvent = function () {
    this.textfieldManager.registerTextField(this.eventRunningInfoMc.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_combinedReward_eventInProgress")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.icon.toolTipText = "panel_action_event";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.icon, true);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEverySecond));
    this.updateRemainingEventTime();
  };
  EventRewardScrollItem.prototype.onTickEverySecond = function (__s49param0) {
    this.updateRemainingEventTime();
  };
  EventRewardScrollItem.prototype.updateRemainingEventTime = function () {
    var __s51local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.vo.eventID);
    if (!__s51local0) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEverySecond));
      this.setupEndedEvent();
      return;
    }
    var __s51local1 = __s51local0.remainingEventTimeInSeconds;
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.eventRunningInfoMc.txt_remaining_time, __s51local1);
  };
  EventRewardScrollItem.prototype.onMouseClick = function (__s54param0) {
    __s1param0.prototype.onMouseClick.call(this, __s54param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s54param0.target) && __s54param0.target == this.icon) {
      var __s54local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.vo.eventID), "ASpecialEventVO");
      if (__s54local0) {
        __s54local0.openDialog();
      }
    }
  };
  Object.defineProperty(EventRewardScrollItem.prototype, "eventEndedInfoMc", {
    get: function () {
      return this.disp.mc_event_complete_infos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventRewardScrollItem.prototype, "eventRunningInfoMc", {
    get: function () {
      return this.disp.mc_running_event_infos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventRewardScrollItem.prototype, "vo", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventRewardScrollItem.prototype, "textfieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  EventRewardScrollItem.__initialize_static_members = function () {
    EventRewardScrollItem.numVisibleItems = 5;
  };
  return EventRewardScrollItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.EventRewardScrollItem = __s0local1;
var __dep_export_PaginatedCollectableRenderListWrapper = require("gge-module:export_PaginatedCollectableRenderListWrapper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "MovieClip");
__s0local1.__initialize_static_members();
