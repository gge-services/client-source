Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericHighscoreDialog = require("gge-module:export_CastleGenericHighscoreDialog");
var __s0local0 = function (__s1param0) {
  function CastleBeggingKnightsHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBeggingKnightsHighscoreDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBeggingKnightsHighscoreDialog, __s1param0);
  CastleBeggingKnightsHighscoreDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mc_header.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_BeggingKnights_nobilityPoints";
  };
  CastleBeggingKnightsHighscoreDialog.prototype.showLoaded = function (__s7param0 = null) {
    this.updateEventVO();
    if (!this._eventVO) {
      this.hide();
    }
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  Object.defineProperty(CastleBeggingKnightsHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_BeggingKnights_highscore";
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericHighscoreDialog.CastleGenericHighscoreDialog.prototype, "helpTextId").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleBeggingKnightsHighscoreDialog.prototype.onGetHighscoreData = function (__s14param0) {
    this.updateEventVO();
    var __s14local0 = __dep_exact_f855840627e6e145.int(this._eventVO.leagueLevels(__s14param0.leagueId)[0]);
    var __s14local1 = __dep_exact_f855840627e6e145.int(this._eventVO.leagueLevels(__s14param0.leagueId)[1]);
    if (__s14local1 > __dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("level_placeholder", [__s14local0])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelrange_placeholder", [__s14local0, __s14local1])).autoFitToBounds = true;
    }
    __s1param0.prototype.onGetHighscoreData.call(this, __s14param0);
  };
  CastleBeggingKnightsHighscoreDialog.prototype.updateEventVO = function () {
    this._eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
  };
  CastleBeggingKnightsHighscoreDialog.__initialize_static_members = function () {
    CastleBeggingKnightsHighscoreDialog.NAME = "CastleBeggingKnightsHighscore";
    CastleBeggingKnightsHighscoreDialog.ASSET_NAME = "CastleGenericHighscore_D";
  };
  return CastleBeggingKnightsHighscoreDialog;
}(__dep_export_CastleGenericHighscoreDialog.CastleGenericHighscoreDialog);
exports.CastleBeggingKnightsHighscoreDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
