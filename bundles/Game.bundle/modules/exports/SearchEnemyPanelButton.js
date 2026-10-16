Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SFindNextTowerVO = require("gge-module:export_C2SFindNextTowerVO");
var __dep_export_C2SFindNextEnemyCastleVO = require("gge-module:export_C2SFindNextEnemyCastleVO");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function SearchEnemyPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SearchEnemyPanelButton, __s1param0);
  SearchEnemyPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE, this.bindFunction(this.onSpecStatusChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSChanged));
    __dep_export_CastleModel.CastleModel.worldmapCameraData.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
  };
  SearchEnemyPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE, this.bindFunction(this.onSpecStatusChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSChanged));
    __dep_export_CastleModel.CastleModel.worldmapCameraData.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SearchEnemyPanelButton.prototype.updateOnVisible = function () {
    this.resetEnemySearchRadius();
  };
  SearchEnemyPanelButton.prototype.resetEnemySearchRadius = function () {
    this.iconMc.gotoAndStop(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID ? 3 : 1);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(this.iconMc);
  };
  Object.defineProperty(SearchEnemyPanelButton.prototype, "selectedWorldmapObjectVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel;
    },
    enumerable: true,
    configurable: true
  });
  SearchEnemyPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP == __dep_export_CastleComponent.CastleComponent.layoutManager.currentState || __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP == __dep_export_CastleComponent.CastleComponent.layoutManager.currentState;
  };
  SearchEnemyPanelButton.prototype.isButtonEnabled = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      var __s17local0 = this.getFactionEventVO();
      if (__s17local0 && (__s17local0.isSpectator || __s17local0.isOtherFactionInLMS)) {
        return false;
      }
    }
    return __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP == __dep_export_CastleComponent.CastleComponent.layoutManager.currentState && __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished();
  };
  SearchEnemyPanelButton.prototype.getButtonTooltip = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      var __s21local0 = this.getFactionEventVO();
      if (__s21local0) {
        if (__s21local0.isSpectator) {
          return "panel_action_castle_spectator";
        } else if (__s21local0.isOtherFactionInLMS) {
          return "questCondition_defeatedFactionCapitalOnMap";
        } else {
          return "panel_action_toFront";
        }
      }
    }
    return "panel_action_enemySearch";
  };
  SearchEnemyPanelButton.prototype.getFactionEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
  };
  Object.defineProperty(SearchEnemyPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_EnemySearch;
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  SearchEnemyPanelButton.prototype.onLMSChanged = function (__s34param0) {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      this.update();
    }
  };
  SearchEnemyPanelButton.prototype.onSpecStatusChanged = function (__s37param0) {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      this.update();
    }
  };
  SearchEnemyPanelButton.prototype.onChangeSelectedCastleListItem = function (__s40param0) {
    this.resetEnemySearchRadius();
  };
  SearchEnemyPanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextTowerVO.C2SFindNextTowerVO());
    } else {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextEnemyCastleVO.C2SFindNextEnemyCastleVO(this.selectedWorldmapObjectVO.absAreaPosX, this.selectedWorldmapObjectVO.absAreaPosY, __dep_export_CastleModel.CastleModel.questData.currentSearchEnemyCounter % __dep_export_ClientConstCastle.ClientConstCastle.MAX_FINDABLE_ENEMY_COUNTER));
    }
    __dep_export_CastleModel.CastleModel.questData.increaseCurrentSearchEnemyCounter();
    this.iconMc.gotoAndStop(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID ? 3 : 2);
  };
  return SearchEnemyPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.SearchEnemyPanelButton = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
