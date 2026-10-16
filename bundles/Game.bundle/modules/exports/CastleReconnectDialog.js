Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleReconnectDialog() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.CastleReconnect()) || this).itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleReconnectDialog, __s1param0);
  CastleReconnectDialog.prototype.applyProperties = function () {
    this.dialogDisp.btn_reconnect.label = this.dialogProperties.buttonLabel_reconnect;
    this.itxt_title.textContentVO.stringValue = this.dialogProperties.title;
    this.itxt_copy.textContentVO.stringValue = this.dialogProperties.copy;
  };
  CastleReconnectDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
  };
  CastleReconnectDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    switch (__s9param0.target) {
      case this.dialogDisp.btn_reconnect:
        this.hide();
        if (this.dialogProperties.functionReconnect != null) {
          this.dialogProperties.functionReconnect();
        }
        break;
      case this.dialogDisp.btn_hidden.children[0]:
        this.hide();
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleWorldSelectionDialog.CastleWorldSelectionDialog);
    }
  };
  Object.defineProperty(CastleReconnectDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReconnectDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleReconnectDialog.__initialize_static_members = function () {
    CastleReconnectDialog.NAME = __dep_exact_9e901e8e2483a22f.CommonDialogNames.ReconnectDialog_NAME;
  };
  return CastleReconnectDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleReconnectDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleWorldSelectionDialog = require("gge-module:export_CastleWorldSelectionDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
