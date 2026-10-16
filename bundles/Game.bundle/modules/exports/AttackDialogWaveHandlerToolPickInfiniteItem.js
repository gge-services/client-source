Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_FightScreenHelper = require("gge-module:export_FightScreenHelper");
var __dep_export_ToolEffectView = require("gge-module:export_ToolEffectView");
var __s0local0 = function (__s1param0) {
  function AttackDialogWaveHandlerToolPickInfiniteItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerToolPickInfiniteItem, __s1param0);
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this.singleEffect = new __dep_export_ToolEffectView.ToolEffectView(this.itemMc.mc_tool_info, 0, 28, 22);
    this.effect1 = new __dep_export_ToolEffectView.ToolEffectView(this.itemMc.mc_tool_info_0, 0, 28, 18);
    this.effect2 = new __dep_export_ToolEffectView.ToolEffectView(this.itemMc.mc_tool_info_1, 1, 28, 18);
    this.itemMc.btn_instantBuy.toolTipText = "dialog_fight_instantBuy";
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.fillAdditionalComponents = function () {
    __dep_export_FightScreenHelper.FightScreenHelper.initInstantBuyButton(this.itemMc.btn_instantBuy, this.troopSelectionScrollItemVO.unitVO, this.troopSelectionScrollItemVO.sourceArea);
    var __s7local0 = this.troopSelectionScrollItemVO.unitVO;
    if (__s7local0.effectTypes.length > 1) {
      this.singleEffect.hide();
      this.effect1.update(__s7local0);
      this.effect2.update(__s7local0);
    } else {
      this.singleEffect.update(__s7local0);
      this.effect1.hide();
      this.effect2.hide();
    }
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.updateSelection = function () {
    __s1param0.prototype.updateSelection.call(this);
    if (this.troopSelectionScrollItemVO) {
      if (this.troopSelectionScrollItemVO.unitVO.inventoryAmount > 0) {
        this.itemMc.mc_selection.visible = true;
        this.itemMc.mc_empty.visible = false;
      } else {
        this.itemMc.mc_selection.visible = false;
        this.itemMc.mc_empty.visible = true;
      }
    }
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.onValueChange = function (__s16param0) {
    __s1param0.prototype.onValueChange.call(this, __s16param0);
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.fill = function () {
    __s1param0.prototype.fill.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.updateSlider = function () {
    if (this._amountComponent && this._amountComponent.numberOfItems > 0) {
      this.itemMc.mc_selection.mc_slider.mc_line.scaleX = this._amountComponent.getSelectedAmount() / this._amountComponent.numberOfItems;
    } else {
      var __s20local0 = this._amountComponent && this._amountComponent.numberOfItems == 0;
      if (__s20local0) {
        this._amountComponent.enableComponent(true);
      }
      this.itemMc.mc_selection.mc_slider.mc_line.scaleX = 0;
      if (__s20local0) {
        this._amountComponent.enableComponent(false);
      }
    }
  };
  return AttackDialogWaveHandlerToolPickInfiniteItem;
}(require("gge-module:export_ACastleAdvancedTroopSelectionInfiniteScrollItem").ACastleAdvancedTroopSelectionInfiniteScrollItem);
exports.AttackDialogWaveHandlerToolPickInfiniteItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
