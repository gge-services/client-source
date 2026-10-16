Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventTeaserDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionInvasionEventTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventTeaserDialog, __s1param0);
  CastleFactionInvasionEventTeaserDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.btn_gotoCamp.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.dialogDisp.btn_gotoCamp, true);
    this.buttonArray.push(this.dialogDisp.btn_gotoCamp.basicButton);
  };
  CastleFactionInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("message_header_berimondInvasion_start"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("message_berimondInvasion_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_gotoCamp.txt_gotoCamp, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("panel_action_event")).autoFitToBounds = true;
  };
  CastleFactionInvasionEventTeaserDialog.prototype.getEventVO = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION)) {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION);
    } else {
      return null;
    }
  };
  CastleFactionInvasionEventTeaserDialog.prototype.onClick = function (__s13param0) {
    if (__s13param0.target == this.dialogDisp.btn_gotoCamp) {
      this.gotoCamp();
    }
    __s1param0.prototype.onClick.call(this, __s13param0);
  };
  CastleFactionInvasionEventTeaserDialog.prototype.gotoCamp = function () {
    this.hide();
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION)) {
      this.openMainDialog(this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO || __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_eventendet")));
    }
  };
  CastleFactionInvasionEventTeaserDialog.prototype.openMainDialog = function (__s20param0) {
    if (__s20param0) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, function waitForJAA(__s23param0) {
        __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, waitForJAA);
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_INVASION_EVENT_MAIN_DIALOG);
      });
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID));
    } else {
      __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_INVASION_EVENT_MAIN_DIALOG);
    }
  };
  CastleFactionInvasionEventTeaserDialog.__initialize_static_members = function () {
    CastleFactionInvasionEventTeaserDialog.NAME = "CastleFactionInvasionEventTeaser";
  };
  return CastleFactionInvasionEventTeaserDialog;
}(require("gge-module:export_CastleBasicSpecialEventTeaserDialog").CastleBasicSpecialEventTeaserDialog);
exports.CastleFactionInvasionEventTeaserDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
