Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleBuyTempCommanderDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyTempCommanderDialog, __s1param0);
  CastleBuyTempCommanderDialog.prototype.initLoaded = function (__s5param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_ok);
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleBuyTempCommanderDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.dialogDisp.info_costs.mc_discount.visible = false;
  };
  CastleBuyTempCommanderDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s9param0);
    this.dialogDisp.info_time.visible = false;
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
  };
  CastleBuyTempCommanderDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        this.dialogProperties.functionOk();
    }
  };
  Object.defineProperty(CastleBuyTempCommanderDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBuyTempCommanderDialog;
}(require("gge-module:export_CastleCostInfoDialog").CastleCostInfoDialog);
exports.CastleBuyTempCommanderDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
