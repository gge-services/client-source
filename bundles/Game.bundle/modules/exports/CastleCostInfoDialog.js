Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleCostInfoDialog(__s3param0 = null) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0 || CastleCostInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCostInfoDialog, __s1param0);
  CastleCostInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_cancle);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_close);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleCostInfoDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("costs"));
    var __s7local0 = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.costProperties.amount));
    if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < this.costProperties.amount) {
      __s7local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      __s7local0.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.costProperties.copy));
    this.dialogDisp.info_bonus.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.costProperties.timestring));
  };
  CastleCostInfoDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleCostInfoDialog.prototype, "costProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCostInfoDialog.__initialize_static_members = function () {
    CastleCostInfoDialog.NAME = "CastleCostInfoEx";
  };
  return CastleCostInfoDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleCostInfoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
