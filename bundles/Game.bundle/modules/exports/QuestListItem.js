Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function QuestListItem(__s3param0, __s3param1, __s3param2, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0.selected = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("QuestListItemMC" + (__s3param3 ? "_Recommended" : "")))(), __s3param2) || this)._questVO = __s3param0;
    __s3local0.questSelectCallBack = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0._headerMC, __s3param3 ? 1.015 : 1.02);
    __s3local0._headerMC.mouseChildren = true;
    __s3local0.itxt_regular = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_regular, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s3param0.getQuestName()), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_regular.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.itxt_regular.autoFitToBounds = true;
    __s3local0.itxt_regular.mouseEnabled = false;
    __s3local0.itxt_bold = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_bold, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s3param0.getQuestName()), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_bold.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.itxt_bold.autoFitToBounds = true;
    __s3local0.itxt_bold.visible = false;
    __s3local0.itxt_bold.mouseEnabled = false;
    if (__s3param3) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.mc_recommended.txt_recommended, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("recommended_quest"))), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      __s3local0._headerMC.mc_recommended.mouseChildren = false;
      __s3local0._headerMC.mc_recommended.actLikeButton = true;
    }
    __s3local0._headerMC.bg.gotoAndStop(1);
    __s3local0._headerMC.bg.actLikeButton = true;
    __s3local0._headerMC.bg.mouseChildren = false;
    __s3local0.updateStateIcon();
    __s3local0.setQuestItemIcon();
    __s3local0._headerMC.doCache(0, 2);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QuestListItem, __s1param0);
  QuestListItem.prototype.updateStateIcon = function () {
    var __s6local0 = 0;
    if (this._questVO.isLocked) {
      __s6local0 = QuestListItem.QUEST_STATE_LOCKED;
      this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusFuture";
    } else if (this._questVO.isFailed) {
      __s6local0 = QuestListItem.QUEST_STATE_FAILED;
      this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusFailed";
    } else if (this._questVO.isCompleted) {
      __s6local0 = QuestListItem.QUEST_STATE_COMPLETED;
      this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusFinished";
    } else if (this._questVO.isInProgress()) {
      __s6local0 = QuestListItem.QUEST_STATE_PROGRESS;
      if (this._questVO.isCampaignQuest || this._questVO.isEpicQuest) {
        this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusActive";
      } else {
        this._headerMC.stateIcon.toolTipText = "dialog_questbook_questStatusInProgress";
      }
    } else {
      __s6local0 = QuestListItem.QUEST_STATE_NEW;
      this._headerMC.stateIcon.toolTipText = "";
    }
    if (__s6local0) {
      this._headerMC.stateIcon.gotoAndStop(__s6local0);
    }
    this._headerMC.stateIcon.actLikeButton = true;
  };
  QuestListItem.prototype.setQuestItemIcon = function () {
    if (this._questVO.isCampaignQuest) {
      this._headerMC.mc_icon.gotoAndStop(6);
      this._headerMC.mc_icon.toolTipText = null;
    } else if (this._questVO.isEpicQuest) {
      this._headerMC.mc_icon.gotoAndStop(7);
      this._headerMC.mc_icon.toolTipText = null;
    } else if (this._questVO.eventID > 0) {
      this._headerMC.mc_icon.gotoAndStop(2);
      switch (this._questVO.eventID) {
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_thornKing";
          this._headerMC.mc_icon.icon_event.gotoAndStop(2);
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_bladeCoast";
          this._headerMC.mc_icon.icon_event.gotoAndStop(4);
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_underworld";
          this._headerMC.mc_icon.icon_event.gotoAndStop(6);
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION:
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_Berimond";
          this._headerMC.mc_icon.icon_event.gotoAndStop(3);
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
          this._headerMC.mc_icon.icon_event.gotoAndStop(5);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_nomadInvasion";
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION:
          this._headerMC.mc_icon.icon_event.gotoAndStop(7);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_samuraiInvasion";
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION:
          this._headerMC.mc_icon.icon_event.gotoAndStop(8);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_factionInvasion";
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS:
          this._headerMC.mc_icon.gotoAndStop(5);
          this._headerMC.mc_icon.toolTipText = {
            t: "dialog_questbook_countdownIcon_tooltip",
            p: [__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._questVO.duration)]
          };
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
          this._headerMC.mc_icon.icon_event.gotoAndStop(9);
          this._headerMC.mc_icon.toolTipText = null;
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TEMPSERVER:
          this._headerMC.mc_icon.icon_event.gotoAndStop(10);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_tempServer";
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
          this._headerMC.mc_icon.icon_event.gotoAndStop(11);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_redAlienInvasion";
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
          this._headerMC.mc_icon.icon_event.gotoAndStop(12);
          this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_alienInvasion";
      }
    } else if (this._questVO.mapID > 0) {
      this._headerMC.mc_icon.gotoAndStop(2);
    } else if (this._questVO.isGettingXpFromThisQuest) {
      this._headerMC.mc_icon.gotoAndStop(__dep_export_CastleModel.CastleModel.userData.isLegend ? 4 : 1);
      this._headerMC.mc_icon.toolTipText = __dep_export_CastleModel.CastleModel.userData.isLegend ? "dialog_questReward_tooltip_XP_legend" : "dialog_questReward_tooltip_XP";
    } else if (this._questVO.isC2RewardQuest) {
      this._headerMC.mc_icon.gotoAndStop(3);
      this._headerMC.mc_icon.toolTipText = "dialog_questReward_tooltip_Ruby";
    } else {
      this._headerMC.mc_icon.gotoAndStop(8);
    }
    this._headerMC.mc_icon.mouseChildren = false;
    this._headerMC.mc_icon.actLikeButton = true;
  };
  Object.defineProperty(QuestListItem.prototype, "questVO", {
    get: function () {
      return this._questVO;
    },
    enumerable: true,
    configurable: true
  });
  QuestListItem.prototype.onClick = function (__s28param0) {
    this.select(!this.selected, true);
  };
  QuestListItem.prototype.select = function (__s30param0, __s30param1) {
    this.selected = __s30param0;
    this._headerMC.bg.gotoAndStop(this.selected ? 2 : 1);
    if (this.itxt_regular.model) {
      this.itxt_regular.visible = !this.selected;
    }
    if (this.itxt_bold && this.itxt_bold.model) {
      this.itxt_bold.visible = this.selected;
    }
    if (__s30param1) {
      this.questSelectCallBack(this, this.selected);
    }
    this._headerMC.doCache(0, 1.5);
  };
  QuestListItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._headerMC.removeAllEventListeners();
  };
  Object.defineProperty(QuestListItem.prototype, "campaignEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QuestListItem.prototype, "height", {
    get: function () {
      return this._headerMC.y + this._headerMC.bg.height + (this._headerMC.mc_recommended ? this._headerMC.mc_recommended.height : 0);
    },
    enumerable: true,
    configurable: true
  });
  QuestListItem.QUEST_STATE_NEW = 4;
  QuestListItem.QUEST_STATE_COMPLETED = 1;
  QuestListItem.QUEST_STATE_FAILED = 3;
  QuestListItem.QUEST_STATE_PROGRESS = 2;
  QuestListItem.QUEST_STATE_LOCKED = 5;
  return QuestListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.QuestListItem = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
