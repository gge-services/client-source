Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AEventHubItemStatusIcon = require("gge-module:export_AEventHubItemStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconEilandRanking() {
    return __s1param0.call(this, "Btn_EilandRanking", null, __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconEilandRanking, __s1param0);
  StatusIconEilandRanking.prototype.setVisibilityLoaded = function () {
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID || this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP || this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP || this.layoutManager.isInTreasureCamp) {
      this.hide();
    } else {
      this.setTooltip("eiland_ranking_tooltip");
      this.show();
    }
  };
  StatusIconEilandRanking.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog, new __dep_export_CastleStormIslandsMainDialogProperties.CastleStormIslandsMainDialogProperties());
  };
  StatusIconEilandRanking.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconEilandRanking.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconEilandRanking.prototype.onChangePosibilityToShowMe = function (__s15param0) {
    this.setVisibility();
  };
  Object.defineProperty(StatusIconEilandRanking.prototype, "eventEndTimestamp", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).kingdomResetTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconEilandRanking;
}(__dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon);
exports.StatusIconEilandRanking = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStormIslandsMainDialogProperties = require("gge-module:export_CastleStormIslandsMainDialogProperties");
var __dep_export_CastleStormIslandsMainDialog = require("gge-module:export_CastleStormIslandsMainDialog");
