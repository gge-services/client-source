Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleAdvancedUnitSelectionScrollItem = require("gge-module:export_CastleAdvancedUnitSelectionScrollItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AttackDialogWaveHandlerSoldierPickItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerSoldierPickItem, __s1param0);
  AttackDialogWaveHandlerSoldierPickItem.prototype.onValueChange = function (__s5param0) {
    __s1param0.prototype.onValueChange.call(this, __s5param0);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickItem.prototype.updateSlider = function () {
    if (this._amountComponent && this._amountComponent.numberOfItems > 0) {
      this.disp.mc_selection.mc_slider.mc_line.scaleX = this._amountComponent.getSelectedAmount() / this._amountComponent.numberOfItems;
    } else {
      var __s9local0 = this._amountComponent && this._amountComponent.numberOfItems == 0;
      if (__s9local0) {
        this._amountComponent.enableComponent(true);
      }
      this.disp.mc_selection.mc_slider.mc_line.scaleX = 0;
      if (__s9local0) {
        this._amountComponent.enableComponent(false);
      }
    }
  };
  AttackDialogWaveHandlerSoldierPickItem.prototype.updateSelection = function () {
    __s1param0.prototype.updateSelection.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickItem.prototype.onTouchDown = function (__s17param0) {
    __s1param0.prototype.onTouchDown.call(this, __s17param0);
    __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target);
  };
  return AttackDialogWaveHandlerSoldierPickItem;
}(__dep_export_CastleAdvancedUnitSelectionScrollItem.CastleAdvancedUnitSelectionScrollItem);
exports.AttackDialogWaveHandlerSoldierPickItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
