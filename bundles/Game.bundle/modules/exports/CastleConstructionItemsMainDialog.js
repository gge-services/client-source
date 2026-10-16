Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsMainDialog() {
    return __s1param0.call(this, CastleConstructionItemsMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsMainDialog, __s1param0);
  CastleConstructionItemsMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.getSublayerProperties));
    this.sublayerSwitcher.add(CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN, this.dialogDisp.tab_assignItems, new __dep_export_CastleConstructionItemsAssignSublayer.CastleConstructionItemsAssignSublayer(this.dialogDisp.sublayer_assignItems));
    this.sublayerSwitcher.add(CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING, this.dialogDisp.tab_crafting, new __dep_export_CastleConstructionItemsCraftingSublayer.CastleConstructionItemsCraftingSublayer(this.dialogDisp.sublayer_crafting));
    this.sublayerSwitcher.add(CastleConstructionItemsMainDialog.SUBLAYER_BLUEPRINTS, this.dialogDisp.tab_blueprints, new __dep_export_CastleConstructionItemsBlueprintsSublayer.CastleConstructionItemsBlueprintsSublayer(this.dialogDisp.sublayer_blueprints));
    this.dialogDisp.tab_assignItems.toolTipText = "dialog_ci_tab_assign";
    this.dialogDisp.tab_crafting.toolTipText = "dialog_ci_tab_craft";
    this.dialogDisp.tab_blueprints.visible = false;
  };
  CastleConstructionItemsMainDialog.prototype.getSublayerProperties = function (__s7param0) {
    switch (__s7param0) {
      case CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN:
      default:
        return this.dialogProperties;
    }
  };
  CastleConstructionItemsMainDialog.prototype.showLoaded = function (__s10param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s10param0);
    this.sublayerSwitcher.switchTo(this.dialogProperties.sublayer);
    this.sublayerSwitcher.show();
  };
  CastleConstructionItemsMainDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.sublayerSwitcher.showHelp();
      }
    }
  };
  CastleConstructionItemsMainDialog.prototype.hideLoaded = function (__s16param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s16param0);
    this.sublayerSwitcher.hide();
  };
  Object.defineProperty(CastleConstructionItemsMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsMainDialog.NAME = "CastleConstructionItemsMain_Sep24";
  CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN = 0;
  CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING = 1;
  CastleConstructionItemsMainDialog.SUBLAYER_BLUEPRINTS = 2;
  return CastleConstructionItemsMainDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleConstructionItemsMainDialog = __s0local0;
var __dep_export_CastleConstructionItemsAssignSublayer = require("gge-module:export_CastleConstructionItemsAssignSublayer");
var __dep_export_CastleConstructionItemsBlueprintsSublayer = require("gge-module:export_CastleConstructionItemsBlueprintsSublayer");
var __dep_export_CastleConstructionItemsCraftingSublayer = require("gge-module:export_CastleConstructionItemsCraftingSublayer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
