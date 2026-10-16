Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleStandardOkDialog(__s3param0 = null) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0 ?? new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleStandardOk"))()) || this).itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0.standardDialog.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.standardDialog.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_copy.autoFitToBounds = true;
    __s3local0.standardDialog.btn_label.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStandardOkDialog, __s1param0);
  CastleStandardOkDialog.prototype.applyProperties = function () {
    if (this.standardDialog && this.standardDialog.btn_ok && this.standardDialogProperties) {
      this.standardDialog.btn_ok.label = this.standardDialogProperties.buttonLabel_ok;
    }
    if (this.itxt_title && __dep_exact_81dacdf05bd32292_3.instanceOfClass(this.itxt_title.textContentVO, "TextVO") && this.standardDialogProperties) {
      this.itxt_title.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(this.standardDialogProperties.title);
    }
    if (this.itxt_copy && __dep_exact_81dacdf05bd32292_3.instanceOfClass(this.itxt_copy.textContentVO, "TextVO")) {
      this.itxt_copy.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(this.getDialogMessage());
    }
  };
  CastleStandardOkDialog.prototype.getDialogMessage = function () {
    if (this.standardDialogProperties) {
      return this.standardDialogProperties.copy;
    } else {
      return " ";
    }
  };
  CastleStandardOkDialog.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    switch (__s14param0.target) {
      case this.standardDialog.btn_close:
        if (this.standardDialogProperties && this.standardDialogProperties.functionCancel != null) {
          this.standardDialogProperties.functionCancel(null);
        }
        this.hide();
        break;
      case this.standardDialog.btn_ok:
        this.hide();
        if (this.standardDialogProperties && this.standardDialogProperties.functionOk != null) {
          this.standardDialogProperties.functionOk(null);
        }
    }
  };
  CastleStandardOkDialog.prototype.onKeyUp = function (__s19param0) {
    if ((__s19param0.key == __dep_exact_81dacdf05bd32292_1.Keyboard.ENTER || __s19param0.key == __dep_exact_81dacdf05bd32292_1.Keyboard.ESCAPE) && !!this.standardDialogProperties && this.standardDialogProperties.title == "SERVER MESSAGE") {
      this.hide();
    }
  };
  CastleStandardOkDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.userData.blockDialogs = false;
    __s1param0.prototype.hide.call(this);
  };
  Object.defineProperty(CastleStandardOkDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStandardOkDialog.prototype, "standardDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardOkDialog.__initialize_static_members = function () {
    CastleStandardOkDialog.NAME = __dep_exact_9e901e8e2483a22f.CommonDialogNames.StandardOkDialog_NAME;
  };
  return CastleStandardOkDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleStandardOkDialog = __s0local0;
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
