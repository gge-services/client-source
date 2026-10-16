Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonGeneralsHub() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonGeneralsHub, __s1param0);
  RingMenuButtonGeneralsHub.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0;
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_generalsHub;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._disp);
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "EstateBuildingVE") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "MilitarycampBuildingVE") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "TavernBuildingVE");
    this._disp.basicButton.enableButton = __dep_export_CastleModel.CastleModel.generalsIntroductionData.canAccessGenerals();
    __s5local0 = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this._disp) ? null : __dep_export_CastleModel.CastleModel.userData.level < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ClientConstTextIds.ClientConstTextIds.LEVEL_NEEDED, [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS]) : "panel_action_generals_notAvailable_quest";
    this._disp.toolTipText = __s5local0;
  };
  RingMenuButtonGeneralsHub.prototype.onClick = function (__s7param0, __s7param1) {
    __dep_export_GeneralsHelper.GeneralsHelper.showGeneralsHubDialog();
    this.parent.hide();
  };
  RingMenuButtonGeneralsHub.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("ringmenu_building_generals_inn");
  };
  return RingMenuButtonGeneralsHub;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonGeneralsHub = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
