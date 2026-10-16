Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function LaboratoryBonusComponent() {}
  LaboratoryBonusComponent.prototype.init = function (__s5param0, __s5param1) {
    this._landmarkVO = __s5param1;
    this._disp = __s5param0;
    for (var __s5local0 = 0; __s5local0 < this._disp.numChildren; __s5local0++) {
      this._disp.getChildAt(__s5local0).visible = false;
    }
    this._disp.mc_resource.visible = true;
    this._disp.mc_resource.mouseChildren = false;
    this._disp.mc_resource.resourceIcon.gotoAndStop(this._landmarkVO.kingdomID + 1);
    this._disp.mc_resource.toolTipText = {
      t: "dialog_laboratory_resourceBonus_tooltip",
      p: [this._landmarkVO.landmarkBonus]
    };
    this._itxt_bonus = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_resource.txt_bonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage_add", []));
  };
  LaboratoryBonusComponent.prototype.update = function () {
    var __s9local0;
    switch (this._landmarkVO.kingdomID) {
      case __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID:
        __s9local0 = "dialog_laboratory_EisenerzBonus_tooltip";
        break;
      case __dep_exact_26a421b704832cff_2.WorldIce.KINGDOM_ID:
        __s9local0 = "dialog_laboratory_coalBonus_tooltip";
        break;
      case __dep_exact_26a421b704832cff_1.WorldDessert.KINGDOM_ID:
        __s9local0 = "dialog_laboratory_oilBonus_tooltip";
        break;
      case __dep_exact_26a421b704832cff_3.WorldVolcano.KINGDOM_ID:
        __s9local0 = "dialog_laboratory_glasBonus_tooltip";
        break;
      default:
        __s9local0 = "dialog_laboratory_resourceBonus_tooltip";
    }
    this._itxt_bonus.textContentVO.textReplacements = [this._landmarkVO.landmarkBonus];
    this._disp.mc_resource.toolTipText = {
      t: __s9local0,
      p: [this._landmarkVO.landmarkBonus]
    };
  };
  return LaboratoryBonusComponent;
}();
exports.LaboratoryBonusComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpgradableLandmarkBonusComponent");
