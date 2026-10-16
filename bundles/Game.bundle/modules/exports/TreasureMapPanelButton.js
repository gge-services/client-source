Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleToolTipManager = require("gge-module:export_CastleToolTipManager");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function TreasureMapPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TreasureMapPanelButton, __s1param0);
  TreasureMapPanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    this.listenOnXPChanged();
  };
  TreasureMapPanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  TreasureMapPanelButton.prototype.updateOnVisible = function () {
    this.setHighlight(__dep_export_APanelButton.APanelButton.HIGHLIGHT_TYPE_YELLOW, __dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO && __dep_export_CastleModel.CastleModel.treasureHuntData.hasMapsAvailable && __dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.hasAllPieces);
  };
  Object.defineProperty(TreasureMapPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_TreasureMap;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ADVENTURE_MAP;
  };
  TreasureMapPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP || __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == 0;
  };
  TreasureMapPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_action_treasureMap";
    } else if (__dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ADVENTURE_MAP)) {
      return "dialog_treasureMap_comingsoon";
    } else {
      return __dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED + __dep_export_CastleToolTipManager.CastleToolTipManager.ID_PARAM_SEPERATOR + __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_ADVENTURE_MAP;
    }
  };
  TreasureMapPanelButton.prototype.onButtonClicked = function () {
    if (__dep_export_CastleModel.CastleModel.treasureHuntData.hasMapsAvailable) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleTreasureMapDialog.CastleTreasureMapDialog);
    } else {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleTreasureMapNoNewMapDialog.CastleTreasureMapNoNewMapDialog);
    }
  };
  TreasureMapPanelButton.prototype.onTreasureMapDataUpdated = function (__s28param0) {
    this.update();
  };
  return TreasureMapPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.TreasureMapPanelButton = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleTreasureMapDialog = require("gge-module:export_CastleTreasureMapDialog");
var __dep_export_CastleTreasureMapNoNewMapDialog = require("gge-module:export_CastleTreasureMapNoNewMapDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
