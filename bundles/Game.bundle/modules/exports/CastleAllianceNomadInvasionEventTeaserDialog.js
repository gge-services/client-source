Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceNomadInvasionEventTeaserDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceNomadInvasionEventTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceNomadInvasionEventTeaserDialog, __s1param0);
  CastleAllianceNomadInvasionEventTeaserDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_eventDialog);
  };
  CastleAllianceNomadInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("message_header_invasion_start"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_eventDialog.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("panel_action_event"));
    if (this.getEventVO().khanCampBarVO && __dep_export_CastleModel.CastleModel.userData.isLegend) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_nomadinvasion_messageKhanContent"));
      this.dialogDisp.mc_khan.visible = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_nomadinvasion_message"));
      this.dialogDisp.mc_khan.visible = false;
    }
  };
  CastleAllianceNomadInvasionEventTeaserDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_eventDialog:
        this.layoutManager.hideAllDialogs();
        this.getEventVO().openDialog();
    }
  };
  CastleAllianceNomadInvasionEventTeaserDialog.prototype.getEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
  };
  CastleAllianceNomadInvasionEventTeaserDialog.__initialize_static_members = function () {
    CastleAllianceNomadInvasionEventTeaserDialog.NAME = "CastleAllianceNomadInvasionEventTeaser";
  };
  return CastleAllianceNomadInvasionEventTeaserDialog;
}(require("gge-module:export_CastleBasicSpecialEventTeaserDialog").CastleBasicSpecialEventTeaserDialog);
exports.CastleAllianceNomadInvasionEventTeaserDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
