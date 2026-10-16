Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function LongTermPointEventEventInfoComponent(__s3param0, __s3param1) {
    this.boosterActive = false;
    this.disp = __s3param0;
    this._properties = __s3param1;
    this.teaserImages = new Map();
    this.itxt_time = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.mc_eventTime.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxtDescription = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.txt_description1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxtDescription_small = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.txt_description2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.eventIconButton = this.disp.event_details.icon_placeholder;
    this.eventIconButton.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.eventIconButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.btn_showMe], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.initConditionTexts();
    this.setupStaticTexts();
    this.setupSeasonSkin();
    this.setupPointEvents();
  }
  LongTermPointEventEventInfoComponent.prototype.reload = function () {
    var __s5local0 = __dep_exact_f855840627e6e145.int(this.tabButtonGroup.getSelectedButtonIndex());
    this.setupSeasonSkin();
    this.teaserImages = new Map();
    this.setupPointEvents();
    this.showEvent(__s5local0 >= 0 ? __s5local0 : 0);
  };
  LongTermPointEventEventInfoComponent.prototype.updateEventTimer = function () {
    var __s7local0 = this._properties.remainingSecondsForSelectedEvent;
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s7local0);
    this.disp.mc_eventTime.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(__s7local0);
  };
  LongTermPointEventEventInfoComponent.prototype.initConditionTexts = function () {
    this.conditionNameTextfields = [];
    this.conditionPointsTextfields = [];
    for (var __s9local0 = 0; __s9local0 < LongTermPointEventEventInfoComponent.MAX_CONDITIONS; __s9local0++) {
      var __s9local1 = this.disp.event_details["condition_" + __s9local0];
      var __s9local2 = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(__s9local1.txt_condition_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
      __s9local2.autoFitToBounds = true;
      __s9local2.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.conditionNameTextfields.push(__s9local2);
      var __s9local3 = LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(__s9local1.txt_condition_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
      this.conditionPointsTextfields.push(__s9local3);
    }
  };
  LongTermPointEventEventInfoComponent.prototype.setupStaticTexts = function () {
    LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.txt_coming_soon, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(LongTermPointEventEventInfoComponent.TEXTID_COMING_SOON));
    LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.event_details.txt_condition_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(LongTermPointEventEventInfoComponent.TEXT_CONDITIONS_TITLE));
    LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.event_details.txt_condition_title_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(LongTermPointEventEventInfoComponent.TEXT_CONDITIONS_POINTS));
  };
  LongTermPointEventEventInfoComponent.prototype.setupPointEvents = function () {
    var __s15local0;
    var __s15local1;
    var __s15local2;
    var __s15local3 = 0;
    var __s15local4 = [];
    for (var __s15local5 = 0; __s15local5 < __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.MAX_AMOUNT_OF_TABS; ++__s15local5) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp["btn_eventTabPlaceholder_" + __s15local5]);
    }
    while (this._properties.hasNextAssetVO() && __s15local3 < __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.MAX_AMOUNT_OF_TABS) {
      if (__s15local2 = this._properties.getNextAssetVO()) {
        __s15local0 = this.disp["btn_eventTabPlaceholder_" + __s15local3];
        (__s15local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s15local2.tabName))()).gotoAndStop(1);
        __s15local0.addChild(__s15local1);
        __s15local1.toolTipText = __s15local2.eventNameTextID;
        if (!__s15local0.basicButton) {
          __dep_export_ButtonHelper.ButtonHelper.initTwoStateButton(__s15local1);
        }
        __s15local4.push(__s15local1.basicButton);
      }
      __s15local3++;
    }
    this.tabButtonGroup = new __dep_exact_84d43d9c404bd4d8.BasicButtonGroup(__s15local4, false);
    this._properties.resetNextEvent();
  };
  LongTermPointEventEventInfoComponent.prototype.setupSeasonSkin = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.mc_evenSkinPlaceholder);
    var __s23local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(this._properties.seasonClassName))();
    this.disp.mc_evenSkinPlaceholder.addChild(__s23local0);
  };
  LongTermPointEventEventInfoComponent.prototype.handleClickedTab = function (__s25param0) {
    if (!__s25param0 || !__s25param0.basicButton || this.tabButtonGroup.buttons.indexOf(__s25param0.basicButton) == -1) {
      return false;
    }
    var __s25local0 = __dep_exact_f855840627e6e145.int(__s25param0.parent.name.split("_").pop());
    this.tabButtonGroup.selectButton(__s25param0.basicButton);
    this.showEventInfo(this._properties.getEventAssetAtPosition(__s25local0));
    return true;
  };
  LongTermPointEventEventInfoComponent.prototype.handleEventButtonClick = function (__s28param0) {
    return !!__s28param0 && !!__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s28param0) && __s28param0 == this.eventIconButton && LongTermPointEventEventInfoComponent.openEventDialog(this._properties.selectedEvent);
  };
  LongTermPointEventEventInfoComponent.openEventDialog = function (__s30param0) {
    var __s30local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s30param0);
    return !!__s30local0 && (__s30local0.openDialog(true), true);
  };
  LongTermPointEventEventInfoComponent.prototype.showEventInfo = function (__s32param0) {
    var __s32local0 = this._properties.isActiveEvent(__s32param0.eventID);
    LongTermPointEventEventInfoComponent.textFieldManager.registerTextField(this.disp.txt_event_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s32param0.eventNameTextID));
    this._properties.selectedEvent = __s32param0.eventID;
    this.showTeaser(__s32param0.eventID, __s32param0.teaserName);
    this.showTimerIcon(__s32param0, __s32local0);
    this.showConditions(__s32param0, __s32local0);
    this.showDescriptionText(__s32param0, __s32local0);
  };
  LongTermPointEventEventInfoComponent.prototype.showDescriptionText = function (__s34param0, __s34param1) {
    this.disp.txt_description1.visible = !__s34param1;
    this.disp.btn_showMe.visible = !__s34param1;
    if (__s34param1) {
      this.itxtDescription.textContentVO.textId = "";
      this.itxtDescription_small.textContentVO.textId = "";
    } else {
      this.itxtDescription.textContentVO.textId = __s34param0.eventDescriptionTextID;
      this.itxtDescription_small.textContentVO.textId = __s34param0.eventDescriptionTextID;
      if (this.getCurrencyForShowMeButton() != null) {
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.btn_showMe.mc_icon);
        var __s34local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local0(32, 32));
        __s34local0.icon.useDropShadowIcon = true;
        var __s34local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips();
        __s34local1.addIconMc(this.disp.btn_showMe.mc_icon);
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(__s34local1, this.getCurrencyForShowMeButton(), __s34local0);
        this.disp.btn_showMe.toolTipText = "dialog_longPointsEvent_eventcamp_desc_shopbutton";
        this.disp.btn_showMe.visible = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR) && __s34param0.eventID <= 0;
      } else {
        this.disp.btn_showMe.visible = false;
      }
    }
    this.updateTextPlacement(this.boosterActive);
  };
  LongTermPointEventEventInfoComponent.prototype.updateTextPlacement = function (__s40param0) {
    this.itxtDescription.visible = !__s40param0;
    this.itxtDescription_small.visible = __s40param0;
    this.boosterActive = __s40param0;
  };
  LongTermPointEventEventInfoComponent.prototype.getCurrencyForShowMeButton = function () {
    var __s42local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    if (!__s42local0) {
      return null;
    }
    var __s42local1 = __s42local0.rewardLists[0].getItemByIndex(0);
    var __s42local2 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
    if (!__s42local2) {
      return null;
    }
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s42local1, "CollectableItemGenericCurrencyVO")) {
      return null;
    }
    var __s42local3 = false;
    for (var __s42local4 = 0; __s42local4 < __s42local2.eventPackages.length; __s42local4++) {
      if (__s42local2.eventPackages[__s42local4].getCostList().getItemByIndex(0) && __s42local2.eventPackages[__s42local4].getCostList().getItemByIndex(0).itemType == __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY && __s42local2.eventPackages[__s42local4].getCostList().getItemByIndex(0).id == __s42local1.id) {
        __s42local3 = true;
        break;
      }
    }
    if (__s42local3) {
      return __s42local1;
    } else {
      return null;
    }
  };
  LongTermPointEventEventInfoComponent.prototype.showConditions = function (__s52param0, __s52param1) {
    this.disp.event_details.visible = __s52param1;
    this.disp.txt_coming_soon.visible = !__s52param1 && __s52param0.eventID != __dep_export_LongTermPointEventClientConst.LongTermPointEventClientConst.GENERAL_TAB_ID;
    if (__s52param1) {
      this.updateConditions(__s52param0);
      this.updateLinkButtonIcon(__s52param0.iconName);
    }
  };
  LongTermPointEventEventInfoComponent.prototype.showTimerIcon = function (__s55param0, __s55param1) {
    this.disp.mc_eventTime.visible = __s55param1;
    if (__s55param1) {
      var __s55local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s55param0.iconName))();
      __s55local0.scaleX = __s55local0.scaleY = 50 / __s55local0.height;
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.mc_eventTime.mc_currentTabEventIcon);
      this.disp.mc_eventTime.mc_currentTabEventIcon.addChild(__s55local0);
      this.updateEventTimer();
    }
  };
  LongTermPointEventEventInfoComponent.prototype.showTeaser = function (__s58param0, __s58param1) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.mc_eventTeaserPlaceholder);
    if (!this.teaserImages.get(__s58param0)) {
      var __s58local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s58param1))();
      this.teaserImages.set(__s58param0, __s58local0);
    }
    this.disp.mc_eventTeaserPlaceholder.addChild(this.teaserImages.get(__s58param0));
  };
  LongTermPointEventEventInfoComponent.prototype.updateConditions = function (__s61param0) {
    for (var __s61local0 = 0; __s61local0 < LongTermPointEventEventInfoComponent.MAX_CONDITIONS; __s61local0++) {
      var __s61local1 = __s61local0 < this._properties.eventVO.getConditionCount(__s61param0.eventID);
      this.disp.event_details["condition_" + __s61local0].visible = __s61local1;
      if (__s61local1) {
        var __s61local2 = this._properties.eventVO.getCondition(__s61param0.eventID, __s61local0);
        var __s61local3 = __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID);
        var __s61local4 = __s61local2.score;
        if (__s61local3.isActive) {
          __s61local4 += __dep_exact_f855840627e6e145.int(__s61local4 * (__s61local3.bonusPercentage / 100));
        }
        var __s61local5 = "pointsEvent_longPointsEvent_" + __s61param0.eventName.toLowerCase() + "Invasion_condition0" + (__s61local0 + 1);
        this.conditionNameTextfields[__s61local0].textContentVO.textId = __s61local5;
        this.conditionNameTextfields[__s61local0].textContentVO.textReplacements = __s61local2.textReplacements;
        this.conditionPointsTextfields[__s61local0].textContentVO.numberValue = __s61local4;
        this.conditionNameTextfields[__s61local0].verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      }
    }
  };
  LongTermPointEventEventInfoComponent.prototype.updateLinkButtonIcon = function (__s67param0) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.eventIconButton);
    var __s67local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s67param0))();
    this.eventIconButton.addChild(__s67local0);
  };
  LongTermPointEventEventInfoComponent.prototype.showEvent = function (__s69param0 = 0) {
    if (__s69param0 >= this._properties.eventIDs.length) {
      __s69param0 = 0;
    }
    var __s69local0 = this.disp["btn_eventTabPlaceholder_" + __s69param0].getChildAt(0);
    this.tabButtonGroup.selectButton(__s69local0.basicButton);
    this.showEventInfo(this._properties.getEventAssetAtPosition(__s69param0));
  };
  Object.defineProperty(LongTermPointEventEventInfoComponent, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventEventInfoComponent.prototype, "properties", {
    set: function (__s74param0) {
      this._properties = __s74param0;
      this.reload();
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventEventInfoComponent.__initialize_static_members = function () {
    LongTermPointEventEventInfoComponent.TEXTID_COMING_SOON = "dialog_longPointsEvent_comingSoon";
    LongTermPointEventEventInfoComponent.TEXT_CONDITIONS_TITLE = "judgement_requirements";
    LongTermPointEventEventInfoComponent.TEXT_CONDITIONS_POINTS = "generic_points";
    LongTermPointEventEventInfoComponent.MAX_CONDITIONS = 3;
  };
  return LongTermPointEventEventInfoComponent;
}();
exports.LongTermPointEventEventInfoComponent = __s0local1;
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_LongTermPointEventClientConst = require("gge-module:export_LongTermPointEventClientConst");
__s0local1.__initialize_static_members();
