Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleExpansionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleExpansionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExpansionDialog, __s1param0);
  CastleExpansionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
  };
  CastleExpansionDialog.prototype.showLoaded = function (__s7param0) {
    var __s7local0;
    if (__s7param0 === undefined) {
      __s7param0 = null;
    }
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("expansion_title"));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_help, this.isOutOfTutorial());
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    if (this.expansionDialogProperties.isPremium) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("expansion_buyPremium"));
      (__s7local0 = new __dep_export_CollectableList.CollectableList()).addItem(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_export_CastleModel.CastleModel.expansionCostsData.getExpandCostC2())));
      __dep_export_CostHelper.CostHelper.initAsCosts(__s7local0, this.dialogDisp);
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("expansion_buy"));
      __s7local0 = __dep_export_CastleModel.CastleModel.expansionCostsData.getExpandCostNormal();
      __dep_export_CostHelper.CostHelper.initAsCosts(__s7local0, this.dialogDisp);
    }
  };
  CastleExpansionDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
          if (this.expansionDialogProperties.functionOk != null) {
            this.expansionDialogProperties.functionOk();
          }
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_expand"));
      }
    }
  };
  Object.defineProperty(CastleExpansionDialog.prototype, "expansionDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleExpansionDialog.__initialize_static_members = function () {
    CastleExpansionDialog.NAME = "CastleExpansionExt";
  };
  return CastleExpansionDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleExpansionDialog = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
