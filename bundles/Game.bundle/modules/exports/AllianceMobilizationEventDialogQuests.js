Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AllianceQuestEvent = require("gge-module:export_AllianceQuestEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_AllianceMobilizationEventDialog = require("gge-module:export_AllianceMobilizationEventDialog");
var __dep_export_AllianceMobilizationEventDialogQuestItem = require("gge-module:export_AllianceMobilizationEventDialogQuestItem");
var __dep_export_AllianceQuestTicketComponent = require("gge-module:export_AllianceQuestTicketComponent");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogQuests(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._eventID = 0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogQuests, __s1param0);
  AllianceMobilizationEventDialogQuests.prototype.init = function () {
    this._pointsText = this.textFieldManager.registerTextField(this.subLayerDisp.txt_pointsTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialogue_ame_questboard_alliance_points", [""]));
    this._participantsText = this.textFieldManager.registerTextField(this.subLayerDisp.txt_participantsTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialogue_ame_questboard_participants", [""]));
    var __s5local0 = new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.subLayerDisp.scrollList).addMouseWheelAreaMc(this.subLayerDisp.scrollList.mouseWheelArea).addMaskMc(this.subLayerDisp.scrollList.mask);
    var __s5local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AllianceMobilizationEventDialogQuestItem.AllianceMobilizationEventDialogQuestItem, AllianceMobilizationEventDialogQuests.QUESTS_ITEM_NAME, __dep_export_AllianceMobilizationEventDialog.AllianceMobilizationEventDialog.NAME);
    __s5local1.isMultiColumn = true;
    __s5local1.additionalHeight = 9;
    __s5local1.itemPaddingY = 4;
    __s5local1.itemPaddingX = 8;
    __s5local1.useSmoothScroll = true;
    __s5local1.sliderInvisibleWhenNotScrollable = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(__s5local0, __s5local1);
    this._allianceQuestTicketComponent = new __dep_export_AllianceQuestTicketComponent.AllianceQuestTicketComponent(this.subLayerDisp.mc_ticket);
  };
  AllianceMobilizationEventDialogQuests.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (__s7param0 && __s7param0.length > 0) {
      this._eventID = __s7param0[0];
    }
    this._scrollList.onShow();
    if (this.getQuestSlots().length > 0) {
      this._scrollList.updateWithNewData(this.getQuestSlots());
    }
    this._allianceQuestTicketComponent.setEventID(this._eventID);
    this._allianceQuestTicketComponent.onShow();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AllianceQuestEvent.AllianceQuestEvent.ALLIANCE_QUESTS_UPDATED, this.bindFunction(this.onAllianceQuestsUpdated));
    this.controller.addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.eventVO.requestAllianceQuestStatus();
    this.onUpdatePoints(null);
    this.updateEmptyText();
  };
  AllianceMobilizationEventDialogQuests.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._scrollList) {
      this._scrollList.onHide();
    }
    if (this._allianceQuestTicketComponent) {
      this._allianceQuestTicketComponent.onHide();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AllianceQuestEvent.AllianceQuestEvent.ALLIANCE_QUESTS_UPDATED, this.bindFunction(this.onAllianceQuestsUpdated));
    this.controller.removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceMobilizationEventDialogQuests.prototype.updateEmptyText = function () {
    if (this.getQuestSlots().length <= 0) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.eventVO.getEventSpecificTextID("dialogue_ame_questboard_empty"))).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
      this.subLayerDisp.txt_empty.visible = true;
    } else {
      this.subLayerDisp.txt_empty.visible = false;
    }
  };
  AllianceMobilizationEventDialogQuests.prototype.onAllianceQuestsUpdated = function (__s19param0) {
    this._scrollList.updateWithNewData(this.getQuestSlots(), false);
    this.updateEmptyText();
  };
  AllianceMobilizationEventDialogQuests.prototype.onUpdatePoints = function (__s21param0) {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.eventVO.allianceBarVO.ownPoints));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_participants, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.eventVO.participants));
    this.subLayerDisp.txt_points.x = this._pointsText.x + this._pointsText.textWidth + 5;
    this.subLayerDisp.txt_participants.x = this._participantsText.x + this._participantsText.textWidth + 5;
  };
  AllianceMobilizationEventDialogQuests.prototype.getQuestSlots = function () {
    var __s23local0 = this.eventVO;
    if (__s23local0) {
      return __s23local0.questSlots.filter(function (__s26param0) {
        return __s26param0.isValid;
      });
    } else {
      return [];
    }
  };
  Object.defineProperty(AllianceMobilizationEventDialogQuests.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventDialogQuests.QUESTS_ITEM_NAME = "AllianceMobilizationEventMainExt_QuestsItem";
  return AllianceMobilizationEventDialogQuests;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.AllianceMobilizationEventDialogQuests = __s0local0;
