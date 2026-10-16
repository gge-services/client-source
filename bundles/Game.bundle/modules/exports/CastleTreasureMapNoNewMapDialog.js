Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapNoNewMapDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTreasureMapNoNewMapDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapNoNewMapDialog, __s1param0);
  CastleTreasureMapNoNewMapDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastleTreasureMapNoNewMapDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_treasureMap_noMoreMaps"));
  };
  CastleTreasureMapNoNewMapDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleTreasureMapNoNewMapDialog.__initialize_static_members = function () {
    CastleTreasureMapNoNewMapDialog.NAME = "CastleTreasureMapNoNewMap";
  };
  return CastleTreasureMapNoNewMapDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTreasureMapNoNewMapDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
