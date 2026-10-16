Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleFactionUnitLimitDialog() {
    var __s3local0 = this;
    __s3local0._canUpgrade = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleStandardOk"))()) || this).textFieldManager.registerTextField(__s3local0.standardDialog.btn_label.txt_field, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_questInfo_showMe"));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionUnitLimitDialog, __s1param0);
  CastleFactionUnitLimitDialog.prototype.applyProperties = function () {
    this._factionUnitCampBuildingVO = __dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_UNIT_CAMP);
    this._canUpgrade = this._factionUnitCampBuildingVO.canUpgrade();
    __s1param0.prototype.applyProperties.call(this);
  };
  CastleFactionUnitLimitDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.standardDialog.btn_label.visible = this._canUpgrade;
    this.standardDialog.btn_ok.visible = !this._canUpgrade;
  };
  CastleFactionUnitLimitDialog.prototype.getDialogMessage = function () {
    if (this._canUpgrade) {
      return "dialog_factionRecruit_alert_Upgrade_copy";
    } else {
      return "dialog_factionRecruit_alert_NoUpgrade_copy";
    }
  };
  CastleFactionUnitLimitDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.standardDialog.btn_label:
        __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__dep_export_Iso.Iso.renderer.objects.provider.getObjectByVO(this._factionUnitCampBuildingVO));
        this.layoutManager.hideAllDialogs();
    }
  };
  CastleFactionUnitLimitDialog.__initialize_static_members = function () {
    CastleFactionUnitLimitDialog.NAME = "CastleFactionUnitLimitDialog";
  };
  return CastleFactionUnitLimitDialog;
}(require("gge-module:export_CastleStandardOkDialog").CastleStandardOkDialog);
exports.CastleFactionUnitLimitDialog = __s0local0;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
