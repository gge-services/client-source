Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function CastleTreasureFoundPieceDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTreasureFoundPieceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureFoundPieceDialog, __s1param0);
  CastleTreasureFoundPieceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_treasureMap_foundPiece_title")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_treasureMap_foundPiece_copy"));
  };
  CastleTreasureFoundPieceDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
  };
  CastleTreasureFoundPieceDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleTreasureFoundPieceDialog.__initialize_static_members = function () {
    CastleTreasureFoundPieceDialog.NAME = "CastleTreasureFoundPiece";
  };
  return CastleTreasureFoundPieceDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTreasureFoundPieceDialog = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
