Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoEventDialogContractsSelection(__s3param0, __s3param1 = null) {
    var __s3local0 = this;
    __s3local0._currentSelectedItemIndices = [0, 0];
    __s3local0._onSelection = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this).scrollComponent.strategy.visibleValue = __s3local0._itemContainer.mask.height;
    __s3local0.scrollComponent.strategy.disableButtons = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEventDialogContractsSelection, __s1param0);
  SamuraiDaimyoEventDialogContractsSelection.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    if (this._items != null) {
      for (var __s5local0 = 0, __s5local1 = this._items; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.onContractSelected.add(this.bindFunction(this.onContractSelected));
        }
      }
    }
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.hide = function () {
    if (this._items != null) {
      for (var __s11local0 = 0, __s11local1 = this._items; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          __s11local2.onContractSelected.remove(this.bindFunction(this.onContractSelected));
        }
      }
    }
    __s1param0.prototype.hide.call(this);
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.addItem = function (__s17param0, __s17param1 = -1, __s17param2 = false) {
    __s1param0.prototype.addItem.call(this, __s17param0, __s17param1, __s17param2);
    __s17param0.onContractSelected.add(this.bindFunction(this.onContractSelected));
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.reselectPreviousContract = function () {
    if (this._items != null) {
      for (var __s19local0 = 0, __s19local1 = this._items; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          __s19local2.resetSelection();
        }
      }
    }
    this.getSelectedContract().setSelection(true);
    this._onSelection.dispatch();
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.getSelectedContract = function () {
    return this._items[this._currentSelectedItemIndices[0]].contractItems[this._currentSelectedItemIndices[1]];
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.onContractSelected = function (__s27param0) {
    this._currentSelectedItemIndices[0] = this._items.indexOf(__s27param0);
    this._currentSelectedItemIndices[1] = __s27param0.currentSelectedIndex;
    if (this._items != null) {
      for (var __s27local0 = 0, __s27local1 = this._items; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined && __s27local2 != __s27param0) {
          __s27local2.resetSelection();
        }
      }
    }
    this._onSelection.dispatch();
  };
  Object.defineProperty(SamuraiDaimyoEventDialogContractsSelection.prototype, "onSelection", {
    get: function () {
      return this._onSelection;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoEventDialogContractsSelection;
}(require("gge-module:export_DynamicSliderAccordionComponent").DynamicSliderAccordionComponent);
exports.SamuraiDaimyoEventDialogContractsSelection = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
