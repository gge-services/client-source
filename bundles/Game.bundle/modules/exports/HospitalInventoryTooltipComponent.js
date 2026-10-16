Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = function () {
  function HospitalInventoryTooltipComponent(__s3param0) {
    this.disp = __s3param0;
    this.tooltipInfoTextfield = HospitalInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.tooltipNameTextfield = HospitalInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.tooltipCostTextfield = HospitalInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    HospitalInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_status, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("hospital_unitInside"));
    this.tooltipNameTextfield.autoFitToBounds = true;
    this.disp.visible = false;
    this.disp.mouseChildren = false;
    this.disp.mouseEnabled = false;
  }
  HospitalInventoryTooltipComponent.prototype.show = function (__s5param0, __s5param1) {
    var __s5local0 = __s5param0;
    this.tooltipInfoTextfield.textContentVO.textId = __s5local0.getShortInfoString();
    this.tooltipNameTextfield.textContentVO.textId = __s5local0.getNameString();
    var __s5local1 = 0;
    var __s5local2 = 0;
    if (__s5local0.healingCostC2 > 0) {
      __s5local1 = __s5local0.healingCostC2;
      __s5local2 = 2;
    } else {
      __s5local1 = __s5local0.healingCostC1;
      __s5local2 = 1;
    }
    this.tooltipCostTextfield.textContentVO.numberValue = __s5local1;
    this.disp.cost_icon.gotoAndStop(__s5local2);
    this.disp.x = __s5param1.x;
    this.disp.visible = true;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.disp, 0.2, {
      y: __s5param1.y + 60
    }, {
      y: __s5param1.y + 40,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.disp, 0.2, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    });
  };
  HospitalInventoryTooltipComponent.prototype.hide = function () {
    this.disp.visible = false;
  };
  Object.defineProperty(HospitalInventoryTooltipComponent, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return HospitalInventoryTooltipComponent;
}();
exports.HospitalInventoryTooltipComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryTooltip");
