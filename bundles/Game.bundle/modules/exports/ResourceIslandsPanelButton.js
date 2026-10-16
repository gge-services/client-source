Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_APanelButton = require("gge-module:export_APanelButton");
var __s0local0 = function (__s1param0) {
  function ResourceIslandsPanelButton() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceIslandsPanelButton, __s1param0);
  Object.defineProperty(ResourceIslandsPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_ResorceIslands;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APanelButton.APanelButton.prototype, "iconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  ResourceIslandsPanelButton.prototype.isButtonEnabled = function () {
    return __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID;
  };
  ResourceIslandsPanelButton.prototype.getButtonTooltip = function () {
    return "dialog_islandListOverview_title";
  };
  ResourceIslandsPanelButton.prototype.isButtonVisible = function () {
    return __dep_export_CastleComponent.CastleComponent.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID;
  };
  ResourceIslandsPanelButton.prototype.onButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleListVillagesOverviewDialog.CastleListVillagesOverviewDialog);
  };
  return ResourceIslandsPanelButton;
}(__dep_export_APanelButton.APanelButton);
exports.ResourceIslandsPanelButton = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleListVillagesOverviewDialog = require("gge-module:export_CastleListVillagesOverviewDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
