Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonResearch() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonResearch, __s1param0);
  RingMenuButtonResearch.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_research;
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "ResearchBuildingVE") && __dep_export_CastleModel.CastleModel.researchData.isResearchTowerBuilt;
  };
  RingMenuButtonResearch.prototype.onClick = function (__s7param0, __s7param1) {
    this.parent.hide();
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResearchDialog.CastleResearchDialog);
  };
  RingMenuButtonResearch.prototype.getInfoText = function () {
    return "research";
  };
  RingMenuButtonResearch.prototype.timerUpdate = function (__s11param0) {
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "ResearchBuildingVE") && __dep_export_CastleModel.CastleModel.researchData.isResearchTowerBuilt;
  };
  return RingMenuButtonResearch;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonResearch = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleResearchDialog = require("gge-module:export_CastleResearchDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
