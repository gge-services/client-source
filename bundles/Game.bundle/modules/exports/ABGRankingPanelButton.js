Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleAllianceBattleGroundEventDialogProperties = require("gge-module:export_CastleAllianceBattleGroundEventDialogProperties");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function ABGRankingPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGRankingPanelButton, __s1param0);
  Object.defineProperty(ABGRankingPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Ranking2;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  ABGRankingPanelButton.prototype.getButtonTooltip = function () {
    return "panel_multiinfo_ranking";
  };
  ABGRankingPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog, new __dep_export_CastleAllianceBattleGroundEventDialogProperties.CastleAllianceBattleGroundEventDialogProperties(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE));
  };
  ABGRankingPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_ABGHelper.ABGHelper.isOnABGServer;
  };
  return ABGRankingPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.ABGRankingPanelButton = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
