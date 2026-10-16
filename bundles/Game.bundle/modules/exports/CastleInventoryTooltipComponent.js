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
  function CastleInventoryTooltipComponent(__s3param0) {
    this.disp = __s3param0;
    this.i_iselect_txt_name = CastleInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.i_iselect_txt_info = CastleInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.i_iselect_txt_status = CastleInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_status, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.i_uTooltip_txt_food = CastleInventoryTooltipComponent.textFieldManager.registerTextField(this.disp.txt_food, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.disp.visible = false;
    this.disp.mouseChildren = false;
    this.disp.mouseEnabled = false;
  }
  CastleInventoryTooltipComponent.prototype.show = function (__s5param0, __s5param1) {
    this.i_iselect_txt_name.textContentVO.textId = __s5param0.getNameString();
    this.i_iselect_txt_info.textContentVO.textId = __s5param0.getShortInfoString();
    this.i_iselect_txt_name.autoFitToBounds = true;
    if (__s5param0.isAuxiliary) {
      this.i_iselect_txt_status.textContentVO.textId = "auxiliaries";
    } else if (__s5param0.isStronghold) {
      this.i_iselect_txt_status.textContentVO.textId = "stronghold_UnitInside";
    } else {
      this.i_iselect_txt_status.textContentVO.textId = "";
    }
    if (__s5param0.foodSupply > 0 || __s5param0.meadSupply > 0 || __s5param0.beefSupply > 0) {
      this.i_uTooltip_txt_food.textContentVO.stringValue = String(Math.max(__s5param0.meadSupply, __s5param0.foodSupply, __s5param0.beefSupply));
      this.disp.mc_mead.visible = __s5param0.meadSupply > 0;
      this.disp.mc_food.visible = __s5param0.foodSupply > 0;
      this.disp.mc_beef.visible = __s5param0.beefSupply > 0;
    } else {
      this.disp.mc_mead.visible = false;
      this.disp.mc_beef.visible = false;
      this.disp.mc_food.visible = true;
      this.i_uTooltip_txt_food.textContentVO.stringValue = "-";
    }
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
  CastleInventoryTooltipComponent.prototype.hide = function () {
    this.disp.visible = false;
  };
  Object.defineProperty(CastleInventoryTooltipComponent, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleInventoryTooltipComponent;
}();
exports.CastleInventoryTooltipComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryTooltip");
