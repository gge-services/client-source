Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_AResourcePanelToolTip = require("gge-module:export_AResourcePanelToolTip");
var __dep_export_ResourcePanelToolTipSingleLineText = require("gge-module:export_ResourcePanelToolTipSingleLineText");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipSpecialButton() {
    return __s1param0.call(this, __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_SPECIAL_CONTAINER_BUTTON) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipSpecialButton, __s1param0);
  ResourcePanelToolTipSpecialButton.prototype.createItems = function () {
    this._title = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._helperText = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._ironText = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._oilText = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._coalText = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._glassText = new __dep_export_ResourcePanelToolTipSingleLineText.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipSpecialButton.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._title.tf, "kingdomResource");
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(this._helperText.tf, "click_overview");
    this._items.push(this._title);
    this._items.push(this._helperText);
    this._items.push(this._divider);
    this.addResourceItem(this._coalText, __dep_export_CollectableEnum.CollectableEnum.COAL);
    this.addResourceItem(this._oilText, __dep_export_CollectableEnum.CollectableEnum.OIL);
    this.addResourceItem(this._glassText, __dep_export_CollectableEnum.CollectableEnum.GLASS);
    this.addResourceItem(this._ironText, __dep_export_CollectableEnum.CollectableEnum.IRON);
  };
  ResourcePanelToolTipSpecialButton.prototype.addResourceItem = function (__s9param0, __s9param1) {
    var __s9local0 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s9param1).amount;
    if (__s9local0 > 0) {
      var __s9local1 = new __s9param1.dataClass();
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetText(__s9param0.tf, "generic_amount_reward", [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s9local0, true, 0, false), __dep_exact_92d05af59ee2ff30.Localize.text(__s9local1.getTooltipTextId())]);
      this._items.push(__s9param0);
    }
  };
  return ResourcePanelToolTipSpecialButton;
}(__dep_export_AResourcePanelToolTip.AResourcePanelToolTip);
exports.ResourcePanelToolTipSpecialButton = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
