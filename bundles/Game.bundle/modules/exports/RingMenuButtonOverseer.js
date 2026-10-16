Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleRessourcesBoostDialogProperties = require("gge-module:export_CastleRessourcesBoostDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonOverseer() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonOverseer, __s1param0);
  RingMenuButtonOverseer.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_overseer;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "AProductionBuildingVE")) {
      var __s5local0 = __s5param2;
      this._disp.visible = __s5local0.productionBuildingVO.isBoostableBuilding && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_OVERSEER;
    } else {
      this._disp.visible = false;
    }
    this._disp.enableButton = this.isOutOfTutorial();
    var __s5local1 = __s5param2 instanceof __dep_export_RelicBreweryBuildingVE.RelicBreweryBuildingVE ? RingMenuButtonOverseer.POS_BREWERY : RingMenuButtonOverseer.POS_DEFAULT;
    this._disp.x = __s5local1[0];
    this._disp.y = __s5local1[1];
  };
  RingMenuButtonOverseer.prototype.onClick = function (__s9param0, __s9param1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResourceBoostDialog.CastleResourceBoostDialog, new __dep_export_CastleRessourcesBoostDialogProperties.CastleRessourcesBoostDialogProperties());
  };
  RingMenuButtonOverseer.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("overseer");
  };
  RingMenuButtonOverseer.POS_DEFAULT = [0, 95];
  RingMenuButtonOverseer.POS_BREWERY = [60, 78];
  return RingMenuButtonOverseer;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonOverseer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleResourceBoostDialog = require("gge-module:export_CastleResourceBoostDialog");
var __dep_export_RelicBreweryBuildingVE = require("gge-module:export_RelicBreweryBuildingVE");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
