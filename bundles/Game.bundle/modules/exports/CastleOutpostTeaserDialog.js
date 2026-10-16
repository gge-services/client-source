Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleOutpostTeaserDialog() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, CastleOutpostTeaserDialog.NAME) || this).backgroundAlpha = 0.5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOutpostTeaserDialog, __s1param0);
  CastleOutpostTeaserDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_outpostTeaser_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_outpostTeaser_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_outpostTeaser_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_outpostTeaser_copy3"));
  };
  CastleOutpostTeaserDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastleOutpostTeaserDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleOutpostTeaserDialog.__initialize_static_members = function () {
    CastleOutpostTeaserDialog.NAME = "CastleOutpostTeaser";
  };
  return CastleOutpostTeaserDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleOutpostTeaserDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
