Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastlePlayerGiftSentDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePlayerGiftSentDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlayerGiftSentDialog, __s1param0);
  CastlePlayerGiftSentDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_giftTrader_sendGift_title"));
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastlePlayerGiftSentDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_giftSent_desc", [this.dialogProperties.playerName])));
  };
  CastlePlayerGiftSentDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePlayerGiftSentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSentDialog.__initialize_static_members = function () {
    CastlePlayerGiftSentDialog.NAME = "CastlePlayerGiftSent";
  };
  return CastlePlayerGiftSentDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePlayerGiftSentDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
