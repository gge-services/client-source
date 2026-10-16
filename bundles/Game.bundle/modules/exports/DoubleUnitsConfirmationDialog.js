Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function DoubleUnitsConfirmationDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, DoubleUnitsConfirmationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DoubleUnitsConfirmationDialog, __s1param0);
  DoubleUnitsConfirmationDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    var __s5local0 = this.dialogProperties.isSoldiers ? "dialog_recruit_doubleUnits_title" : "dialog_recruit_doubleTools_title";
    var __s5local1 = this.dialogProperties.isSoldiers ? "dialog_recruit_doubleUnits_copy" : "dialog_recruit_doubleTools_copy";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s5local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s5local1, [this.dialogProperties.amount, this.dialogProperties.name]));
    this.textFieldManager.registerTextField(this.dialogDisp.costContainer.txt_titleCost, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("cost"));
    var __s5local2 = this.textFieldManager.registerTextField(this.dialogDisp.costContainer.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.cost));
    __dep_export_CostHelper.CostHelper.setCurrencyTextFieldColor(__s5local2, new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2), this.dialogProperties.cost);
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.btn_close]);
    this.dialogDisp.costContainer.rubies.toolTipText = "gold";
  };
  DoubleUnitsConfirmationDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
  };
  DoubleUnitsConfirmationDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageListUpdated));
  };
  DoubleUnitsConfirmationDialog.prototype.onPackageListUpdated = function (__s11param0) {
    if (__s11param0.params && __s11param0.params.length > 0 && __dep_exact_f855840627e6e145.int(__s11param0.params[0]) == this.dialogProperties.listID) {
      this.hide();
    }
  };
  DoubleUnitsConfirmationDialog.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      switch (__s14param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.confirmAction();
          this.hide();
      }
    }
  };
  DoubleUnitsConfirmationDialog.prototype.confirmAction = function () {
    this.dialogProperties.onDoubleUnitsConfirmed();
  };
  Object.defineProperty(DoubleUnitsConfirmationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DoubleUnitsConfirmationDialog.__initialize_static_members = function () {
    DoubleUnitsConfirmationDialog.NAME = "DoubleUnitsConfirmation";
  };
  return DoubleUnitsConfirmationDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.DoubleUnitsConfirmationDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
