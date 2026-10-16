Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleFactionEventLostLastCampDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionEventLostLastCampDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionEventLostLastCampDialog, __s1param0);
  CastleFactionEventLostLastCampDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("faction_message_lostlastCamp_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("faction_message_lostlastCamp_copy"));
  };
  CastleFactionEventLostLastCampDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.dialogDisp.mc_camp.gotoAndStop(this.dialogProperties.factionID);
  };
  CastleFactionEventLostLastCampDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__s9param0.target == this.dialogDisp.btn_close || __s9param0.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  Object.defineProperty(CastleFactionEventLostLastCampDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionEventLostLastCampDialog.__initialize_static_members = function () {
    CastleFactionEventLostLastCampDialog.NAME = "CastleFactionEventLostLastCamp";
  };
  return CastleFactionEventLostLastCampDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleFactionEventLostLastCampDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
