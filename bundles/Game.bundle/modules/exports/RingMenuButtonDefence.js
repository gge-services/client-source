Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SDefenceCompleteVO = require("gge-module:export_C2SDefenceCompleteVO");
var __dep_export_CastleDefenceDataEvent = require("gge-module:export_CastleDefenceDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDefenceDialogProperties = require("gge-module:export_CastleDefenceDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonDefence() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonDefence, __s1param0);
  RingMenuButtonDefence.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_defence;
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "ADefenceBuildingVE") && __dep_export_CastleModel.CastleModel.userData.userCanOpenDefenceScreen;
    this._disp.enableButton = this.enableButton();
  };
  RingMenuButtonDefence.prototype.onGetDefenceInfos = function (__s7param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
    this._disp.enableButton = __dep_export_CastleModel.CastleModel.defenceData.areaInfo.moatLevel >= 1;
  };
  RingMenuButtonDefence.prototype.onClick = function (__s9param0, __s9param1) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DefenseConst.TOOL_TYPE_WALL);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "GuardTowerVE")) {
      __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DefenseConst.TOOL_TYPE_WALL);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "BasicGateVE")) {
      __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DefenseConst.TOOL_TYPE_GATE);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "BasicMoatVE")) {
      __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DefenseConst.TOOL_TYPE_MOAT);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "KeepBuildingVE")) {
      __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DefenseConst.TOOL_TYPE_KEEP);
    }
    this.parent.hide();
    var __s9local1 = require("gge-module:export_CastleDefenceDialog").CastleDefenceDialog;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s9local1, new __dep_export_CastleDefenceDialogProperties.CastleDefenceDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo, __s9local0));
  };
  RingMenuButtonDefence.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("ringmenu_defence");
  };
  RingMenuButtonDefence.prototype.enableButton = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "BasicMoatVE") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "PremiumMoatVE") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "FactionMoatMoatVE")) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleDefenceDataEvent.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDefenceCompleteVO.C2SDefenceCompleteVO(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.absAreaPos, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId));
      return false;
    } else {
      return this.targetBuilding.buildingVO.buildingState.isFunctionally;
    }
  };
  return RingMenuButtonDefence;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonDefence = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
