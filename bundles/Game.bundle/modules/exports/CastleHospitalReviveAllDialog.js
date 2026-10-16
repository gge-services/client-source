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
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SReviveAllHospitalUnits = require("gge-module:export_C2SReviveAllHospitalUnits");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleHospitalReviveAllDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleHospitalReviveAllDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHospitalReviveAllDialog, __s1param0);
  CastleHospitalReviveAllDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_hospital_reviveAllButton")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_hospital_reviveAll_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_currency2.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.reviveAllProperties.currency2)).color = this.reviveAllProperties.currency2 > __dep_export_CastleModel.CastleModel.currencyData.c2Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    var __s5local0 = this.reviveAllProperties.foodConsumption * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodConsumptionReduction / 100;
    var __s5local1 = this.reviveAllProperties.meadConsumption * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadConsumptionReduction / 100;
    var __s5local2 = this.reviveAllProperties.beefConsumption * __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefConsumptionReduction / 100;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_food.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local0));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_mead.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local1));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_beef.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local2));
    var __s5local3 = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, 0));
    this.dialogDisp.mc_currency2.toolTipText = "gold";
    this.dialogDisp.mc_food.toolTipText = "foodwastage";
    this.dialogDisp.mc_currency2.mouseChildren = false;
    this.dialogDisp.mc_food.mouseChildren = false;
    this.dialogDisp.mc_discount.visible = false;
    this.dialogDisp.mc_mead.toolTipText = "meadwastage";
    this.dialogDisp.mc_mead.mouseChildren = false;
    this.dialogDisp.mc_beef.toolTipText = "beefwastage";
    this.dialogDisp.mc_beef.mouseChildren = false;
    var __s5local4 = __dep_exact_f855840627e6e145.int(this.reviveAllProperties.discount);
    if (__s5local4) {
      this.dialogDisp.mc_discount.visible = true;
      __s5local3.textContentVO.textReplacements = [__s5local4];
    } else {
      this.dialogDisp.mc_discount.visible = false;
    }
  };
  CastleHospitalReviveAllDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  CastleHospitalReviveAllDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  CastleHospitalReviveAllDialog.prototype.onClick = function (__s13param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.dialogDisp.btn_cancle:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.reviveAll();
      }
    }
  };
  CastleHospitalReviveAllDialog.prototype.onEventUpdated = function (__s17param0) {
    if (__s17param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_REVIVE_ALL) {
      this.hide();
    }
  };
  CastleHospitalReviveAllDialog.prototype.reviveAll = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReviveAllHospitalUnits.C2SReviveAllHospitalUnits(this.reviveAllProperties.currency2));
    this.hide();
  };
  Object.defineProperty(CastleHospitalReviveAllDialog.prototype, "reviveAllProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHospitalReviveAllDialog.__initialize_static_members = function () {
    CastleHospitalReviveAllDialog.NAME = "CastleHospitalReviveAllEx";
  };
  return CastleHospitalReviveAllDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleHospitalReviveAllDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
