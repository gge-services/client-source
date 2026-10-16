Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function AttackDialogWaveHandlerToolPickItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerToolPickItem, __s1param0);
  AttackDialogWaveHandlerToolPickItem.prototype.updateSelection = function () {
    __s1param0.prototype.updateSelection.call(this);
    if (this.troopSelectionScrollItemVO) {
      if (this.troopSelectionScrollItemVO.unitVO.inventoryAmount > 0) {
        this.disp.mc_selection.visible = true;
        this.disp.mc_empty.visible = false;
      } else {
        this.disp.mc_selection.visible = false;
        this.disp.mc_empty.visible = true;
      }
    }
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickItem.prototype.onValueChange = function (__s10param0) {
    __s1param0.prototype.onValueChange.call(this, __s10param0);
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickItem.prototype.updateSlider = function () {
    if (this._amountComponent && this._amountComponent.numberOfItems > 0) {
      this.disp.mc_selection.mc_slider.mc_line.scaleX = this._amountComponent.getSelectedAmount() / this._amountComponent.numberOfItems;
    } else {
      var __s14local0 = this._amountComponent && this._amountComponent.numberOfItems == 0;
      if (__s14local0) {
        this._amountComponent.enableComponent(true);
      }
      this.disp.mc_selection.mc_slider.mc_line.scaleX = 0;
      if (__s14local0) {
        this._amountComponent.enableComponent(false);
      }
    }
  };
  return AttackDialogWaveHandlerToolPickItem;
}(require("gge-module:export_CastleAdvancedToolsSelectionScrollItem").CastleAdvancedToolsSelectionScrollItem);
exports.AttackDialogWaveHandlerToolPickItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
