Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function OutpostSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OutpostSurroundingsVE, __s1param0);
  OutpostSurroundingsVE.prototype.onMouseClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_EVENTBUILDINGS)) {
      __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleOutpostTeaserDialog.CastleOutpostTeaserDialog);
    }
  };
  return OutpostSurroundingsVE;
}(require("gge-module:export_ASurroundingBuildingVE").ASurroundingBuildingVE);
exports.OutpostSurroundingsVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleOutpostTeaserDialog = require("gge-module:export_CastleOutpostTeaserDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
