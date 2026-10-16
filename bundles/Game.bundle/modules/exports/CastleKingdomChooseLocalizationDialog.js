Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleKingdomChooseLocalizationDialog() {
    var __s3local0 = this;
    __s3local0._currentLocationID = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleKingdomChooseLocalizationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKingdomChooseLocalizationDialog, __s1param0);
  CastleKingdomChooseLocalizationDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.cbx_Random, this.dialogDisp.cbx_North, this.dialogDisp.cbx_West, this.dialogDisp.cbx_East, this.dialogDisp.cbx_South]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_initial_East, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_direction_initial_east")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_initial_West, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_direction_initial_west")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_initial_South, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_direction_initial_south")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_initial_North, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_direction_initial_north")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_kingdom_direction_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_kingdom_direction_copy"));
    this.dialogDisp.cbx_Random.toolTipText = "kingdom_direction_random";
    this.dialogDisp.cbx_East.toolTipText = "kingdom_direction_east";
    this.dialogDisp.cbx_North.toolTipText = "kingdom_direction_north";
    this.dialogDisp.cbx_South.toolTipText = "kingdom_direction_south";
    this.dialogDisp.cbx_West.toolTipText = "kingdom_direction_west";
    this.resetAllCheckboxButtons();
    this.selectCheckboxButton(this.dialogDisp.cbx_Random);
  };
  CastleKingdomChooseLocalizationDialog.prototype.onClick = function (__s7param0) {
    if (CastleKingdomChooseLocalizationDialog.isCheckboxButton(__s7param0.target)) {
      if (__s7param0.target.currentFrame == 0) {
        this.selectCheckboxButton(__s7param0.target);
      } else {
        this.selectCheckboxButton();
      }
    }
    switch (__s7param0.target) {
      case this.dialogDisp.btn_ok:
        this.onClickOK();
    }
  };
  CastleKingdomChooseLocalizationDialog.prototype.onClickOK = function () {
    if (this._currentLocationID != -1) {
      this.hide();
      this.dialogProperties.onDirectionSelected(this._currentLocationID);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_kingdom_direction_nothingSelectet")));
    }
  };
  CastleKingdomChooseLocalizationDialog.prototype.selectCheckboxButton = function (__s17param0 = null) {
    this.resetAllCheckboxButtons();
    switch (__s17param0 ? __s17param0.name.substr(CastleKingdomChooseLocalizationDialog.CHECKBOX_PREFIX.length) : "") {
      case "North":
        this._currentLocationID = 1;
        break;
      case "West":
        this._currentLocationID = 2;
        break;
      case "East":
        this._currentLocationID = 3;
        break;
      case "South":
        this._currentLocationID = 4;
        break;
      case "Random":
        this._currentLocationID = 0;
        break;
      default:
        this._currentLocationID = -1;
    }
    if (__s17param0) {
      __s17param0.gotoAndStop(2);
    }
  };
  CastleKingdomChooseLocalizationDialog.prototype.resetAllCheckboxButtons = function () {
    for (var __s21local0 = 0; __s21local0 < this.dialogDisp.numChildren; __s21local0++) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.dialogDisp.getChildAt(__s21local0), "MovieClip") && CastleKingdomChooseLocalizationDialog.isCheckboxButton(this.dialogDisp.getChildAt(__s21local0))) {
        this.dialogDisp.getChildAt(__s21local0).gotoAndStop(1);
      }
    }
  };
  CastleKingdomChooseLocalizationDialog.isCheckboxButton = function (__s26param0) {
    return !!__s26param0 && __s26param0.name !== undefined && __s26param0.name !== null && __s26param0.name.indexOf(CastleKingdomChooseLocalizationDialog.CHECKBOX_PREFIX) >= 0;
  };
  Object.defineProperty(CastleKingdomChooseLocalizationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomChooseLocalizationDialog.__initialize_static_members = function () {
    CastleKingdomChooseLocalizationDialog.NAME = "CastleKingdomChooseLocalEx";
    CastleKingdomChooseLocalizationDialog.CHECKBOX_PREFIX = "cbx_";
  };
  return CastleKingdomChooseLocalizationDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleKingdomChooseLocalizationDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
