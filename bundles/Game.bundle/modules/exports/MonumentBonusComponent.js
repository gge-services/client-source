Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function MonumentBonusComponent() {}
  MonumentBonusComponent.prototype.init = function (__s5param0, __s5param1) {
    this._disp = __s5param0;
    for (var __s5local0 = 0; __s5local0 < this._disp.numChildren; __s5local0++) {
      this._disp.getChildAt(__s5local0).visible = false;
    }
    this._disp.mc_honor.visible = true;
    this._disp.mc_honor.mouseChildren = false;
    this._disp.mc_honor.toolTipText = "dialog_monument_fameMonuments_tooltip";
    this._landmarkVO = __s5param1;
    this._itxt_bonus = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_honor.txt_honor, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage_add", []));
  };
  MonumentBonusComponent.prototype.update = function () {
    this._itxt_bonus.textContentVO.textReplacements = [this._landmarkVO.landmarkBonus];
  };
  return MonumentBonusComponent;
}();
exports.MonumentBonusComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpgradableLandmarkBonusComponent");
