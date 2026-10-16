Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleEilandTitleErrorDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleEilandTitleErrorDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandTitleErrorDialog, __s1param0);
  CastleEilandTitleErrorDialog.prototype.onClick = function (__s5param0) {
    switch (__s5param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleEilandTitleErrorDialog.prototype.showLoaded = function (__s8param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s8param0);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.descTextID)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.title_txt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.titleTextID)).autoFitToBounds = true;
  };
  Object.defineProperty(CastleEilandTitleErrorDialog.prototype, "dialogProperties", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "CastleEilandTitleErrorProperties")) {
        return this.properties;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleErrorDialog.prototype, "errorDialog", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.disp, "CastleEilandTitleErrorDialog")) {
        return castAs(this.disp, "CastleEilandTitleErrorDialog");
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandTitleErrorDialog.__initialize_static_members = function () {
    CastleEilandTitleErrorDialog.NAME = "CastleEilandTitleErrorExternal";
  };
  return CastleEilandTitleErrorDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleEilandTitleErrorDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
