Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AAutoRecruitmentCopyDialog = require("gge-module:export_AAutoRecruitmentCopyDialog");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentCopyUnitsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, AutoRecruitmentCopyUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCopyUnitsDialog, __s1param0);
  AutoRecruitmentCopyUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_title.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_copyQueue_units_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_copyQueue_units_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_resource0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("costs")).autoFitToBounds = true;
    this.dialogDisp.mc_list.icon_food.toolTipText = "food";
    this.dialogDisp.mc_list.icon_foodProduction.toolTipText = "foodproduction";
    this.dialogDisp.mc_list.icon_foodCycle.toolTipText = "dialog_copyQueue_foodProductionFinal";
    this.dialogDisp.mc_list.icon_time.toolTipText = "dialog_copyQueue_recruitTime";
    this.dialogDisp.mc_list.icon_timeStarve.toolTipText = "dialog_copyQueue_starvationFinal";
    this.dialogDisp.mc_list.icon_units.toolTipText = "allUnits";
  };
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "listItemClass", {
    get: function () {
      return __dep_export_AutoRecruitmentCopyListItemUnitsVE.AutoRecruitmentCopyListItemUnitsVE;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "listItemClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "recruitmentAmountToolTip", {
    get: function () {
      return "dialog_copyQueue_units_total_tooltip";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "recruitmentAmountToolTip").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "overviewTabTextID", {
    get: function () {
      return "dialog_copyQueue_units_overview_title";
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "overviewTabTextID").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "costTabTextID", {
    get: function () {
      return "dialog_copyQueue_units_cost_title";
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "costTabTextID").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyUnitsDialog.prototype.onHelpButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", "help_copyQueue_units");
  };
  Object.defineProperty(AutoRecruitmentCopyUnitsDialog.prototype, "alertOnCloseTextID", {
    get: function () {
      return "dialog_copyQueue_units_queueEmpty";
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "alertOnCloseTextID").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyUnitsDialog.__initialize_static_members = function () {
    AutoRecruitmentCopyUnitsDialog.NAME = "AutoRecruitmentCopyUnits";
  };
  return AutoRecruitmentCopyUnitsDialog;
}(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog);
exports.AutoRecruitmentCopyUnitsDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AutoRecruitmentCopyListItemUnitsVE = require("gge-module:export_AutoRecruitmentCopyListItemUnitsVE");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
