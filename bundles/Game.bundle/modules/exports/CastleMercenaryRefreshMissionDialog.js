Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleMercenaryDataEvent = require("gge-module:export_CastleMercenaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleMercenaryRefreshMissionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleMercenaryRefreshMissionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMercenaryRefreshMissionDialog, __s1param0);
  CastleMercenaryRefreshMissionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mission_swap")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mission_swap_desc"));
    this.txt_c2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_c2.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_26a421b704832cff.MercenaryConst.REFRESH_MISSION_COST));
    this.dialogDisp.mc_c2.mouseChildren = false;
    this.dialogDisp.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_no, this.dialogDisp.btn_close, this.dialogDisp.btn_yes]);
  };
  CastleMercenaryRefreshMissionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_yes, true);
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.txt_c2, __dep_exact_26a421b704832cff.MercenaryConst.REFRESH_MISSION_COST);
    __dep_export_CastleModel.CastleModel.mercenaryData.addEventListener(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.NEW_MISSIONS_ARRIVED, this.bindFunction(this.onNewMissionsArrived));
  };
  CastleMercenaryRefreshMissionDialog.prototype.onNewMissionsArrived = function (__s9param0) {
    this.hide();
  };
  CastleMercenaryRefreshMissionDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    __dep_export_CastleModel.CastleModel.mercenaryData.removeEventListener(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.NEW_MISSIONS_ARRIVED, this.bindFunction(this.onNewMissionsArrived));
  };
  CastleMercenaryRefreshMissionDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.dialogDisp.btn_no:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.refreshMission();
      }
    }
  };
  CastleMercenaryRefreshMissionDialog.prototype.refreshMission = function () {
    this.dialogProperties.confirmRefreshCallback();
    this.hide();
  };
  Object.defineProperty(CastleMercenaryRefreshMissionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryRefreshMissionDialog.__initialize_static_members = function () {
    CastleMercenaryRefreshMissionDialog.NAME = "CastleMercenaryRefreshMissionExt";
  };
  return CastleMercenaryRefreshMissionDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleMercenaryRefreshMissionDialog = __s0local0;
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
