Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function RelicUpgradeDialogSelectorCheckbox(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._filterType = RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS;
    __s3local0._onStateChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._filterType = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicUpgradeDialogSelectorCheckbox, __s1param0);
  RelicUpgradeDialogSelectorCheckbox.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp.mc_check);
    this.disp.mc_icon.gotoAndStop(RelicUpgradeDialogSelectorCheckbox.ORDER.indexOf(this._filterType) + 1);
    this.disp.mc_icon.toolTipText = this.getTooltipTextId();
  };
  RelicUpgradeDialogSelectorCheckbox.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setState(RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED);
  };
  RelicUpgradeDialogSelectorCheckbox.prototype.setState = function (__s9param0) {
    this._currentState = __s9param0;
    this.disp.mc_check.gotoAndStop(this.currentState == RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED ? 2 : 1);
    this.onStateChanged.dispatch();
  };
  RelicUpgradeDialogSelectorCheckbox.prototype.getTooltipTextId = function () {
    switch (this.filterType) {
      case RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS:
        return "dialog_relicEnchanter_relicEnchanterUpgrade_generalItems_tooltip";
      case RelicUpgradeDialogSelectorCheckbox.TYPE_BARONS:
        return "dialog_relicEnchanter_relicEnchanterUpgrade_baronItems_tooltip";
      case RelicUpgradeDialogSelectorCheckbox.TYPE_INVENTORY:
        return "dialog_relicEnchanter_relicEnchanterUpgrade_inventoryItems_tooltip";
      default:
        return "";
    }
  };
  RelicUpgradeDialogSelectorCheckbox.prototype.onClick = function (__s14param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      __s1param0.prototype.onClick.call(this, __s14param0);
      this.setState(this.currentState == RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED ? RelicUpgradeDialogSelectorCheckbox.STATE_UNCHECKED : RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED);
    }
  };
  Object.defineProperty(RelicUpgradeDialogSelectorCheckbox.prototype, "filterType", {
    get: function () {
      return this._filterType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorCheckbox.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorCheckbox.prototype, "onStateChanged", {
    get: function () {
      return this._onStateChanged;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS = "lords";
  RelicUpgradeDialogSelectorCheckbox.TYPE_BARONS = "barons";
  RelicUpgradeDialogSelectorCheckbox.TYPE_INVENTORY = "inventory";
  RelicUpgradeDialogSelectorCheckbox.ORDER = [RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS, RelicUpgradeDialogSelectorCheckbox.TYPE_BARONS, RelicUpgradeDialogSelectorCheckbox.TYPE_INVENTORY];
  RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED = "checked";
  RelicUpgradeDialogSelectorCheckbox.STATE_UNCHECKED = "unchecked";
  return RelicUpgradeDialogSelectorCheckbox;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.RelicUpgradeDialogSelectorCheckbox = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
