Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AMovementRenderStrategy = require("gge-module:export_AMovementRenderStrategy");
var __s0local0 = function (__s1param0) {
  function RenderArmyTravel() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RenderArmyTravel, __s1param0);
  RenderArmyTravel.prototype.renderData = function (__s5param0, __s5param1) {
    var __s5local0 = __s5param1;
    __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.setDecoFrame(__s5param0, __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_TRAVEL);
    __s5param0.btn_armyInfo.visible = true;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5local0.inventory.getSoldierCount());
    var __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0.inventory.getToolCount());
    __s5param0.fieldUnitCount = this.textFieldManager.registerTextField(__s5param0.btn_armyInfo.txt_units, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local1), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __s5param0.fieldToolCount = this.textFieldManager.registerTextField(__s5param0.btn_armyInfo.txt_tools, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local2), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    var __s5local3 = "";
    if (__s5param1.targetArea.isOwnMapobject) {
      __s5local3 = "dialog_moveOverview_wayHome";
      if (__s5param1.sourceArea.isOwnMapobject && !__s5param1.isReturnHome) {
        __s5local3 = "dialog_sendTroups_title";
      }
    }
    __s5param0.fieldAction = this.textFieldManager.registerTextField(__s5param0.txt_action, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s5local3), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  return RenderArmyTravel;
}(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy);
exports.RenderArmyTravel = __s0local0;
