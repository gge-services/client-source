Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleKingdomSelectCastle(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.buttonBackgroundDisp = __s3local0.buttonBackgroundDisp;
    __s3local0.onCastleSelected = __s3param1;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_selectCastle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_header"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.btn_select.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_selectButton")).autoFitToBounds = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.subLayerDisp.btn_select);
    __s3local0.castleSelection = new __dep_export_PrebuiltCastleSelector.PrebuiltCastleSelector(__s3param0.mc_castles, "mc_castle", 3);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKingdomSelectCastle, __s1param0);
  CastleKingdomSelectCastle.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.props = __s5param0;
    this.castleSelection.show(this.props.spaceId);
    this.castleSelection.selectionIndex = this.props.castleSelectionIndex;
  };
  CastleKingdomSelectCastle.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.castleSelection.hide();
  };
  CastleKingdomSelectCastle.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_prebuiltCastle_chooseCastle_" + this.props.name));
  };
  CastleKingdomSelectCastle.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target) && __s11param0.target == this.subLayerDisp.btn_select) {
      this.onCastleSelected(this.castleSelection.selectionIndex);
    }
  };
  return CastleKingdomSelectCastle;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleKingdomSelectCastle = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_PrebuiltCastleSelector = require("gge-module:export_PrebuiltCastleSelector");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
