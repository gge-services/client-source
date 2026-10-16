Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorActivationEvent = require("gge-module:export_AdvisorActivationEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AdvisorAttackActivationComponent = require("gge-module:export_AdvisorAttackActivationComponent");
var __dep_export_AdvisorAttackOverviewDialog = require("gge-module:export_AdvisorAttackOverviewDialog");
var __dep_export_AdvisorAttackOverviewDialogProperties = require("gge-module:export_AdvisorAttackOverviewDialogProperties");
var __s0local0 = function (__s1param0) {
  function AdvisorAttackActivationDialog() {
    return __s1param0.call(this, AdvisorAttackActivationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvisorAttackActivationDialog, __s1param0);
  AdvisorAttackActivationDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_faction.btn_goto], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._advisorActivationComponent = new __dep_export_AdvisorAttackActivationComponent.AdvisorAttackActivationComponent(this.dialogDisp, __dep_export_AdvisorAttackActivationComponent.AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE);
  };
  AdvisorAttackActivationDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._advisorActivationComponent.show(this.dialogProperties.advisorType);
    var __s7local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    var __s7local1 = this.dialogProperties.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND;
    var __s7local2 = this.dialogProperties.advisorType == __dep_exact_26a421b704832cff.AttackAdvisorConst.ADVISOR_TYPE_BARON;
    this.dialogDisp.mc_faction.visible = this.dialogDisp.btn_activate.visible && __s7local1 && !!__s7local0 && __s7local0.mainCampID <= 0;
    this.dialogDisp.mc_additionalInfo.visible = __s7local1 || __s7local2;
    if (__s7local1) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_additionalInfo.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("advisor_berimond_morale_banner"));
    }
    if (__s7local2) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_additionalInfo.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("advisor_baron_bonus_banner"));
    }
    this.dialogDisp.mc_additionalInfo.mc_icon.gotoAndStop(__s7local1 ? 1 : 2);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_faction.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("advisor_Berimond_JoinFirst")).autoFitToBounds = true;
    this.controller.addEventListener(__dep_export_AdvisorActivationEvent.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
  };
  AdvisorAttackActivationDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    if (this._advisorActivationComponent) {
      this._advisorActivationComponent.onHide();
    }
    this.controller.removeEventListener(__dep_export_AdvisorActivationEvent.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
  };
  AdvisorAttackActivationDialog.prototype.onActivationChanged = function (__s14param0) {
    var __s14local0 = this.dialogProperties.advisorType;
    if (__s14param0.advisorType == __s14local0) {
      this.hide();
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AdvisorAttackOverviewDialog.AdvisorAttackOverviewDialog, new __dep_export_AdvisorAttackOverviewDialogProperties.AdvisorAttackOverviewDialogProperties(__s14local0));
    }
  };
  AdvisorAttackActivationDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.mc_faction.btn_goto:
        this.hide();
        var __s17local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
        if (__s17local0) {
          __s17local0.openDialog();
        }
    }
  };
  Object.defineProperty(AdvisorAttackActivationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackActivationDialog.NAME = "AdvisorActivationExt_3";
  return AdvisorAttackActivationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AdvisorAttackActivationDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
