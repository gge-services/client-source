Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SStartFactionProtectionVO = require("gge-module:export_C2SStartFactionProtectionVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __s0local0 = function (__s1param0) {
  function CastleFactionProtectionModeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionProtectionModeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionProtectionModeDialog, __s1param0);
  CastleFactionProtectionModeDialog.prototype.initLoaded = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FactionConst.getPeaceHeatup(false) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_HOURES);
    var __s5local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.FactionConst.getPeaceDuration(false) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_HOURES / 24);
    this.dialogDisp.mc_castleSelector.gotoAndStop(1);
    this.dialogDisp.mc_castleSelector.visible = false;
    this.dialogDisp.info_time.mc_icon_more.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("factionProtection_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("factionProtection_copy", [__s5local0, __s5local1]));
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("costs"));
    this.itxt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this._peaceTimeList ||= new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.info_time.mc_combobox, "", 1, 40, 45);
    this.dialogDisp.info_time.mc_icon.toolTipText = "runTime";
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close]);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleFactionProtectionModeDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.fillPeaceTimeList();
    this._peaceTimeList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onComboboxChange));
    this.setPrice();
  };
  CastleFactionProtectionModeDialog.prototype.fillPeaceTimeList = function () {
    this._peaceTimeList.clearItems();
    var __s9local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s9local0.itemLabel = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getCommaTimeStringFromSeconds(__dep_exact_26a421b704832cff.FactionConst.getPeaceDuration(__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isTest), __dep_exact_92d05af59ee2ff30.Localize.text);
    __s9local0.data = __dep_exact_26a421b704832cff.FactionConst.getPeaceC2Cost();
    this._peaceTimeList.addItem(__s9local0);
    this._peaceTimeList.selectItemIndex(0);
  };
  CastleFactionProtectionModeDialog.prototype.onComboboxChange = function (__s11param0) {
    this.setPrice();
  };
  CastleFactionProtectionModeDialog.prototype.setPrice = function () {
    var __s13local0 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(this._peaceTimeList.selectedData));
    __s13local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__s13local0));
    this.itxt_value.textContentVO.numberValue = __s13local0;
  };
  CastleFactionProtectionModeDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SStartFactionProtectionVO.C2SStartFactionProtectionVO(this._peaceTimeList.selectedId));
        this.hide();
    }
  };
  CastleFactionProtectionModeDialog.__initialize_static_members = function () {
    CastleFactionProtectionModeDialog.NAME = "CastleBuyProtectionBoost";
  };
  return CastleFactionProtectionModeDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleFactionProtectionModeDialog = __s0local0;
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
