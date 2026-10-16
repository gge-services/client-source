Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonProduce() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonProduce, __s1param0);
  RingMenuButtonProduce.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_produce;
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5param2, "AUnitProductionBuildingVE")) {
      var __s5local0 = __dep_exact_81dacdf05bd32292.castAs(__s5param2, "AUnitProductionBuildingVE");
      this._disp.visible = __s5local0 && __s5local0.unitProductionBuildingVO.areValuesActive;
    } else {
      this._disp.visible = false;
    }
    switch (__s5param2.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        this._disp.visible = false;
    }
    this._disp.enableButton = true;
  };
  RingMenuButtonProduce.prototype.onClick = function (__s10param0, __s10param1) {
    var __s10local0 = this.targetBuilding;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__s10local0.unitProductionBuildingVO.recruitCategory, __s10local0.unitProductionBuildingVO.recruitFilter));
    this.parent.hide();
  };
  RingMenuButtonProduce.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("produce");
  };
  return RingMenuButtonProduce;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonProduce = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IRingMenuButton");
