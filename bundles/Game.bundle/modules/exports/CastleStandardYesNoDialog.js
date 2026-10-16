Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleStandardYesNoDialog(__s3param0 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0 ?? new Library.CastleInterfaceElements.CastleStandardYesNo()) || this;
    __s3local0.itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0.standardDialog.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_title.autoFitToBounds = true;
    __s3local0.itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.standardDialog.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_copy.autoFitToBounds = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStandardYesNoDialog, __s1param0);
  CastleStandardYesNoDialog.prototype.applyProperties = function () {
    this.standardDialog.btn_yes.label = this.standardDialogProperties.buttonLabel_yes;
    this.standardDialog.btn_no.label = this.standardDialogProperties.buttonLabel_no;
    this.itxt_title.textContentVO.stringValue = this.standardDialogProperties.title;
    this.itxt_copy.textContentVO.stringValue = this.standardDialogProperties.copy;
    this.itxt_title.verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
  };
  CastleStandardYesNoDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.standardDialog.btn_yes:
        this.hide();
        if (this.standardDialogProperties.functionYes != null) {
          this.standardDialogProperties.functionYes(this.getCallbackParams());
        }
        break;
      case this.standardDialog.btn_close:
        this.hide();
        if (this.standardDialogProperties.functionClose != null) {
          this.standardDialogProperties.functionClose(null);
        }
        break;
      case this.standardDialog.btn_no:
        this.hide();
        if (this.standardDialogProperties.functionNo != null) {
          this.standardDialogProperties.functionNo(null);
        }
    }
  };
  CastleStandardYesNoDialog.prototype.getCallbackParams = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "CastleStandardYesNoDialogProperties")) {
      return this.properties.params;
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleStandardYesNoDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStandardYesNoDialog.prototype, "standardDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardYesNoDialog.__initialize_static_members = function () {
    CastleStandardYesNoDialog.NAME = __dep_exact_9e901e8e2483a22f.CommonDialogNames.StandardYesNoDialog_NAME;
  };
  return CastleStandardYesNoDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleStandardYesNoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
