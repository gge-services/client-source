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
var __dep_export_CastleGenericAllianceHighscoreDialog = require("gge-module:export_CastleGenericAllianceHighscoreDialog");
var __s0local0 = function (__s1param0) {
  function CastleAllianceNomadInvasionHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceNomadInvasionHighscoreDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceNomadInvasionHighscoreDialog, __s1param0);
  CastleAllianceNomadInvasionHighscoreDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mc_header.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.gotoAndStop(4);
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_nomadInvasion_nomadPoints";
  };
  CastleAllianceNomadInvasionHighscoreDialog.prototype.showLoaded = function (__s7param0 = null) {
    if (!CastleAllianceNomadInvasionHighscoreDialog.eventVO) {
      this.hide();
    }
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  Object.defineProperty(CastleAllianceNomadInvasionHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_nomadInvasionAlliance_allianceScore";
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericAllianceHighscoreDialog.CastleGenericAllianceHighscoreDialog.prototype, "helpTextId").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionHighscoreDialog.prototype.onGetHighscoreData = function (__s14param0) {
    var __s14local0 = __dep_exact_f855840627e6e145.int(CastleAllianceNomadInvasionHighscoreDialog.eventVO.leagueLevels(__s14param0.leagueId)[0]);
    var __s14local1 = __dep_exact_f855840627e6e145.int(CastleAllianceNomadInvasionHighscoreDialog.eventVO.leagueLevels(__s14param0.leagueId)[1]);
    if (this.dialogProperties.highscoreType == __dep_exact_26a421b704832cff_1.HighscoreConst.ALLIANCE_NOMADINVASION_ALLIANCE) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_searchAlliance", [__s14local0])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelrange_placeholder", [__s14local0, __s14local1])).autoFitToBounds = true;
    }
    __s1param0.prototype.onGetHighscoreData.call(this, __s14param0);
  };
  CastleAllianceNomadInvasionHighscoreDialog.prototype.onRemoveSpecialEvent = function (__s18param0) {
    if (__s18param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
      this.hide();
      this.destroy();
    }
  };
  Object.defineProperty(CastleAllianceNomadInvasionHighscoreDialog, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionHighscoreDialog.__initialize_static_members = function () {
    CastleAllianceNomadInvasionHighscoreDialog.NAME = "CastleAllianceNomadInvasionEventHighscore";
    CastleAllianceNomadInvasionHighscoreDialog.ASSET_NAME = "CastleGenericAllianceHighscore_D";
  };
  return CastleAllianceNomadInvasionHighscoreDialog;
}(__dep_export_CastleGenericAllianceHighscoreDialog.CastleGenericAllianceHighscoreDialog);
exports.CastleAllianceNomadInvasionHighscoreDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
