Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleFactionEventLMSDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionEventLMSDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionEventLMSDialog, __s1param0);
  CastleFactionEventLMSDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_lms_title"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  };
  CastleFactionEventLMSDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.dialogDisp.mc_image.gotoAndStop(this.dialogProperties.lmsFaction + 1);
    if (this.dialogProperties.ownFaction == this.dialogProperties.lmsFaction) {
      this.itxt_copy.textContentVO.textId = "faction_lms_own";
    } else {
      this.itxt_copy.textContentVO.textId = "faction_lms_enemy";
    }
  };
  CastleFactionEventLMSDialog.prototype.onClick = function (__s11param0) {
    switch (__s11param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleFactionEventLMSDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionEventLMSDialog.__initialize_static_members = function () {
    CastleFactionEventLMSDialog.NAME = "CastleFactionEventLMS";
  };
  return CastleFactionEventLMSDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleFactionEventLMSDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
