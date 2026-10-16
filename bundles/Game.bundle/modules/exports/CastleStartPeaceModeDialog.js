Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SPeaceModeStartVO = require("gge-module:export_C2SPeaceModeStartVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __s0local0 = function (__s1param0) {
  function CastleStartPeaceModeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleStartPeaceModeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartPeaceModeDialog, __s1param0);
  CastleStartPeaceModeDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.dialogDisp.mc_castleSelector.gotoAndStop(1);
    this.dialogDisp.mc_castleSelector.visible = false;
    this.dialogDisp.info_time.mc_icon_more.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_startPeaceMode_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_startPeaceMode_decription", [String(__dep_exact_26a421b704832cff.PlayerConst.PEACE_MODE_HEAT_UP * __dep_export_ClientConstTime.ClientConstTime.SEC_2_HOURES), String(__dep_exact_26a421b704832cff.PlayerConst.PEACE_MODE_COOLDOWN * __dep_export_ClientConstTime.ClientConstTime.SEC_2_HOURES)])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("costs"));
    this.itxt_costValue ||= this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this._peaceTimeList ||= new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.info_time.mc_combobox, "", 1, 40, 45);
    this.dialogDisp.info_time.mc_icon.toolTipText = "runTime";
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleStartPeaceModeDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.fillPeaceTimeList();
    this._peaceTimeList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onComboboxChange));
    this.setPrice();
  };
  CastleStartPeaceModeDialog.prototype.fillPeaceTimeList = function () {
    var __s9local0;
    this._peaceTimeList.clearItems();
    for (var __s9local1 = 0; __s9local1 < __dep_exact_26a421b704832cff.PlayerConst.PEACE_MODE_DURATION.length; __s9local1++) {
      (__s9local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(__dep_exact_26a421b704832cff.PlayerConst.PEACE_MODE_DURATION[__s9local1], __dep_exact_92d05af59ee2ff30.Localize.text);
      __s9local0.data = __dep_exact_26a421b704832cff.PlayerConst.PEACE_MODE_C2[__s9local1];
      this._peaceTimeList.addItem(__s9local0);
    }
    this._peaceTimeList.selectItemIndex(0);
  };
  CastleStartPeaceModeDialog.prototype.onComboboxChange = function (__s13param0) {
    this.setPrice();
  };
  CastleStartPeaceModeDialog.prototype.setPrice = function () {
    var __s15local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(this._peaceTimeList.selectedData));
    __s15local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s15local0));
    this.itxt_costValue.textContentVO.numberValue = __s15local0;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.itxt_costValue, __s15local0);
  };
  CastleStartPeaceModeDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPeaceModeStartVO.C2SPeaceModeStartVO(this._peaceTimeList.selectedId));
        this.hide();
    }
  };
  CastleStartPeaceModeDialog.__initialize_static_members = function () {
    CastleStartPeaceModeDialog.NAME = "CastleBuyProtectionBoost";
  };
  return CastleStartPeaceModeDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleStartPeaceModeDialog = __s0local0;
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
