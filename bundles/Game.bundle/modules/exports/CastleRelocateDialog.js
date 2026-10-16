Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SStartRelocationVO = require("gge-module:export_C2SStartRelocationVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleRelocateDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRelocateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRelocateDialog, __s1param0);
  CastleRelocateDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.i_txt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_relocate_desc_01", []));
    this.i_costs_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_cost0.txt_cost, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
  };
  CastleRelocateDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.txt_cost0.mc_icon.gotoAndStop(5);
    this.dialogDisp.txt_cost0.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
    this.i_txt_desc.textContentVO.textReplacements = [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.userData.nextRelocationDuration, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_HOURS_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)];
  };
  CastleRelocateDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s9param0);
    this.i_costs_txt_value.textContentVO.numberValue = this.getCost();
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.i_costs_txt_value, this.getCost());
  };
  CastleRelocateDialog.prototype.getCost = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.RelocationConst.getRelocationCost(__dep_export_CastleModel.CastleModel.userData.relocationCount)));
  };
  CastleRelocateDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SStartRelocationVO.C2SStartRelocationVO(this.dialogProperties.posX, this.dialogProperties.posY));
        __dep_export_CastleModel.CastleModel.worldmapCameraData.savedMapPosition = new __s0local0(this.dialogProperties.posX, this.dialogProperties.posY);
        this.hide();
        break;
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
    }
  };
  Object.defineProperty(CastleRelocateDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocateDialog.__initialize_static_members = function () {
    CastleRelocateDialog.NAME = "CastleRelocate";
  };
  return CastleRelocateDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleRelocateDialog = __s0local1;
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
