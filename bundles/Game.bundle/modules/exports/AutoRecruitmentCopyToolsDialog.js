Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AAutoRecruitmentCopyDialog = require("gge-module:export_AAutoRecruitmentCopyDialog");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentCopyToolsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, AutoRecruitmentCopyToolsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCopyToolsDialog, __s1param0);
  AutoRecruitmentCopyToolsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_title.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_copyQueue_tools_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_copyQueue_tools_desc")).autoFitToBounds = true;
    this.dialogDisp.mc_list.icon_production.toolTipText = "productionspeed";
    this.dialogDisp.mc_list.icon_toolAmount.toolTipText = "dialog_recuit_toolsavailable";
    this.dialogDisp.mc_list.icon_wood.toolTipText = "wood";
    this.dialogDisp.mc_list.icon_stone.toolTipText = "stone";
  };
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "listItemClass", {
    get: function () {
      return __dep_export_AutoRecruitmentCopyListItemToolsVE.AutoRecruitmentCopyListItemToolsVE;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "listItemClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "recruitmentAmountToolTip", {
    get: function () {
      return "dialog_copyQueue_tools_total_tooltip";
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "recruitmentAmountToolTip").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "overviewTabTextID", {
    get: function () {
      return "dialog_copyQueue_tools_overview_title";
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "overviewTabTextID").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "costTabTextID", {
    get: function () {
      return "dialog_copyQueue_tools_cost_title";
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "costTabTextID").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyToolsDialog.prototype.onHelpButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", "help_copyQueue_tools");
  };
  Object.defineProperty(AutoRecruitmentCopyToolsDialog.prototype, "alertOnCloseTextID", {
    get: function () {
      return "dialog_copyQueue_tools_queueEmpty";
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog.prototype, "alertOnCloseTextID").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyToolsDialog.__initialize_static_members = function () {
    AutoRecruitmentCopyToolsDialog.NAME = "AutoRecruitmentCopyTools";
  };
  return AutoRecruitmentCopyToolsDialog;
}(__dep_export_AAutoRecruitmentCopyDialog.AAutoRecruitmentCopyDialog);
exports.AutoRecruitmentCopyToolsDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AutoRecruitmentCopyListItemToolsVE = require("gge-module:export_AutoRecruitmentCopyListItemToolsVE");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
