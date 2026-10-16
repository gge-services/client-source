Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralsHubQuestVO = require("gge-module:export_GeneralsHubQuestVO");
var __dep_export_CharactersAnimationsHandler = require("gge-module:export_CharactersAnimationsHandler");
var __dep_export_GeneralsHubQuestComponent = require("gge-module:export_GeneralsHubQuestComponent");
var __s0local0 = function () {
  function GeneralsHubQuestsComponent(__s3param0) {
    this._disp = __s3param0;
  }
  GeneralsHubQuestsComponent.prototype.show = function () {
    this._kingQuestComponent = new __dep_export_GeneralsHubQuestComponent.GeneralsHubQuestComponent(this.dispClip.king_bounds.mc_quest_king, __dep_export_GeneralsHubQuestVO.GeneralsHubQuestVO.ID_FAT_KING);
    this._knightQuestComponent = new __dep_export_GeneralsHubQuestComponent.GeneralsHubQuestComponent(this.dispClip.knight_bounds.mc_quest_knight, __dep_export_GeneralsHubQuestVO.GeneralsHubQuestVO.ID_KNIGHT);
    this._princessQuestComponent = new __dep_export_GeneralsHubQuestComponent.GeneralsHubQuestComponent(this.dispClip.princess_bounds.mc_quest_princess, __dep_export_GeneralsHubQuestVO.GeneralsHubQuestVO.ID_PRINCESS);
    this.hideQuestBoxes();
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onQuestsUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onQuestsUpdated));
    this.onQuestsUpdated();
  };
  GeneralsHubQuestsComponent.prototype.hideQuestBoxes = function () {
    this._kingQuestComponent.hide();
    this._knightQuestComponent.hide();
    this._princessQuestComponent.hide();
  };
  GeneralsHubQuestsComponent.prototype.toggleShowHideElement = function (__s9param0, __s9param1) {
    var __s9local0;
    if (__s9param1) {
      this.hideQuestBoxes();
    }
    switch (__s9param0) {
      case __dep_export_CharactersAnimationsHandler.CharactersAnimationsHandler.KING_ANIMATION:
        __s9local0 = this._kingQuestComponent;
        break;
      case __dep_export_CharactersAnimationsHandler.CharactersAnimationsHandler.KNIGHT_ANIMATION:
        __s9local0 = this._knightQuestComponent;
        break;
      case __dep_export_CharactersAnimationsHandler.CharactersAnimationsHandler.PRINCESS_ANIMATION:
        __s9local0 = this._princessQuestComponent;
    }
    if (__s9local0) {
      if (__s9param1) {
        __s9local0.show();
      } else {
        __s9local0.hide();
      }
    }
  };
  GeneralsHubQuestsComponent.prototype.onQuestsUpdated = function (__s16param0 = null) {
    this.dispClip.mc_quests.info_king.visible = this._kingQuestComponent.questVO.availableQuests > 0;
    this.dispClip.mc_quests.info_knight.visible = this._knightQuestComponent.questVO.availableQuests > 0;
    this.dispClip.mc_quests.info_princess.visible = this._princessQuestComponent.questVO.availableQuests > 0;
    this._kingQuestComponent.updateDisp();
    this._knightQuestComponent.updateDisp();
    this._princessQuestComponent.updateDisp();
  };
  GeneralsHubQuestsComponent.prototype.hide = function () {
    this.hideQuestBoxes();
    this.dispClip.mc_quests.info_king.visible = false;
    this.dispClip.mc_quests.info_knight.visible = false;
    this.dispClip.mc_quests.info_princess.visible = false;
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onQuestsUpdated));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onQuestsUpdated));
  };
  Object.defineProperty(GeneralsHubQuestsComponent.prototype, "dispClip", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubQuestsComponent.prototype.performIntroductionDraw = function () {
    this._kingQuestComponent.onFreeQuest();
  };
  return GeneralsHubQuestsComponent;
}();
exports.GeneralsHubQuestsComponent = __s0local0;
