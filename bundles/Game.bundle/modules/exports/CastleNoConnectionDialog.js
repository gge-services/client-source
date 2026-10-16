Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SocialButtonTrackingEvent = require("gge-module:export_SocialButtonTrackingEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleNoConnectionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleNoConnection2"))()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNoConnectionDialog, __s1param0);
  CastleNoConnectionDialog.prototype.applyProperties = function () {
    this.initTexts();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_alert_connection_failed_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_alert_connection_failed_copy"));
    this.dialogDisp.btn_reconnect.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.mc_dc.btn_dc, 1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleNoConnectionDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.dialogDisp.mc_maintainance_freeze.x = 327;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_maintainance_freeze.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("maintenance_freeze_desc"));
  };
  CastleNoConnectionDialog.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_dc.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("maintenance_discord_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_dc.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("maintenance_discord_desc2"));
    this.dialogDisp.mc_dc.btn_dc.toolTipText = "panel_option_discord";
  };
  CastleNoConnectionDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    if (__s11param0.target == this.dialogDisp.mc_dc.btn_dc) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.OPEN_DISCORD, [__dep_export_SocialButtonTrackingEvent.SocialButtonTrackingEvent.BUTTON_NAME_DISCORD_MAINTENANCE]);
    }
  };
  Object.defineProperty(CastleNoConnectionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNoConnectionDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleNoConnectionDialog.__initialize_static_members = function () {
    CastleNoConnectionDialog.NAME = "CastleNoConnectionDialog";
  };
  return CastleNoConnectionDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleNoConnectionDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
