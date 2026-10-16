Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleRedAllianceAlienInvasionEventTeaserDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRedAllianceAlienInvasionEventTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRedAllianceAlienInvasionEventTeaserDialog, __s1param0);
  CastleRedAllianceAlienInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(CastleRedAllianceAlienInvasionEventTeaserDialog.TEXT_ID_HEADER));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(CastleRedAllianceAlienInvasionEventTeaserDialog.TEXT_ID_DESCRIPTION));
  };
  CastleRedAllianceAlienInvasionEventTeaserDialog.prototype.getEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE);
  };
  CastleRedAllianceAlienInvasionEventTeaserDialog.__initialize_static_members = function () {
    CastleRedAllianceAlienInvasionEventTeaserDialog.NAME = "CastleRedAllianceAlienInvasionEventTeaser";
    CastleRedAllianceAlienInvasionEventTeaserDialog.TEXT_ID_HEADER = "dialog_redAlienInvasion_message_header";
    CastleRedAllianceAlienInvasionEventTeaserDialog.TEXT_ID_DESCRIPTION = "dialog_redAlienInvasionAlliance_message_copy";
  };
  return CastleRedAllianceAlienInvasionEventTeaserDialog;
}(require("gge-module:export_CastleBasicSpecialEventTeaserDialog").CastleBasicSpecialEventTeaserDialog);
exports.CastleRedAllianceAlienInvasionEventTeaserDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
