Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function QuestListEventItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("QuestListEventItemMC"))(), __s3param0, __s3param1) || this;
    __s3local0._isExpanded = true;
    __s3local0._contentMC.alpha = 1;
    __s3local0._contentMC.visible = true;
    __s3local0._headerMC.mc_arrow.gotoAndStop(2);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QuestListEventItem, __s1param0);
  QuestListEventItem.prototype.addQuestItem = function (__s5param0, __s5param1 = true) {
    if (!this.itxt_name) {
      this.eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s5param0.questVO.eventID);
      this.eventVO ||= new __dep_export_FakeIslandKingdomEvent.FakeIslandKingdomEvent();
      var __s5local0 = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.eventVO.eventBuildingNameId));
      this.itxt_name = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s5local0), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
      this.itxt_name.autoFitToBounds = true;
      this._headerMC.icon_event.gotoAndStop(this.getEventIconFrame(this.eventVO.eventId));
    }
    __s1param0.prototype.addQuestItem.call(this, __s5param0, __s5param1);
  };
  QuestListEventItem.prototype.getEventIconFrame = function (__s8param0) {
    switch (__s8param0) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return 1;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return 2;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION:
        return 3;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ISLAND_KINGDOM:
        return 4;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        return 5;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        return 6;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
        return 7;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return 8;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION:
        return 9;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        return 10;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
        return 11;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TEMPSERVER:
        return 12;
    }
    return 1;
  };
  QuestListEventItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.onTimer(null);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  QuestListEventItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  QuestListEventItem.prototype.onTimer = function (__s15param0) {
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this._headerMC.mc_timer.txt_time, this.getRemainingTime(), null, new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  QuestListEventItem.prototype.getRemainingTime = function () {
    return __dep_exact_f855840627e6e145.int(this.eventVO ? this.eventVO.remainingEventTimeInSeconds : __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID).resetTime);
  };
  return QuestListEventItem;
}(require("gge-module:export_AQuestCollapsibleItem").AQuestCollapsibleItem);
exports.QuestListEventItem = __s0local0;
var __dep_export_FakeIslandKingdomEvent = require("gge-module:export_FakeIslandKingdomEvent");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
