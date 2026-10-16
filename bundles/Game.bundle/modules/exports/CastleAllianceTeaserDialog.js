Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAutoAllianceSearchVO = require("gge-module:export_C2SAutoAllianceSearchVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceTeaserDialog() {
    var __s3local0 = this;
    __s3local0.allianceStandardName = "dialog_alliance_name_default";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceTeaserDialog, __s1param0);
  CastleAllianceTeaserDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_join_alliance, this.dialogDisp.btn_found_alliance]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_teaser_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_promotion_3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_teaser_bullet_3")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_promotion_4, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_teaser_bullet_4")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_join_alliance.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_teaser_joinAlliance")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_found_alliance.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_teaser_createAlliance")).autoFitToBounds = true;
  };
  CastleAllianceTeaserDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.dialogProperties && this.dialogProperties.topLinesMerged) {
      this.dialogDisp.mc_toplines.gotoAndStop(2);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_toplines.txt_promotion_3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_teaser_bullet_constructionHelp"));
    } else {
      this.dialogDisp.mc_toplines.gotoAndStop(1);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_toplines.txt_promotion_1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_teaser_bullet_1")).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_toplines.txt_promotion_2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_teaser_bullet_2")).autoFitToBounds = true;
    }
  };
  CastleAllianceTeaserDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_join_alliance:
          this.hide();
          this.onJoinAlliance();
          break;
        case this.dialogDisp.btn_found_alliance:
          this.hide();
          this.onFoundAlliance();
      }
    }
  };
  CastleAllianceTeaserDialog.prototype.onFoundAlliance = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNewAllianceDialog.CastleNewAllianceDialog);
  };
  CastleAllianceTeaserDialog.prototype.onJoinAlliance = function () {
    var __s17local0 = __dep_exact_92d05af59ee2ff30.Localize.text(this.allianceStandardName);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAutoAllianceSearchVO.C2SAutoAllianceSearchVO(__s17local0));
  };
  Object.defineProperty(CastleAllianceTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTeaserDialog.__initialize_static_members = function () {
    CastleAllianceTeaserDialog.NAME = "CastleAllianceTeaser";
  };
  return CastleAllianceTeaserDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceTeaserDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleNewAllianceDialog = require("gge-module:export_CastleNewAllianceDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
