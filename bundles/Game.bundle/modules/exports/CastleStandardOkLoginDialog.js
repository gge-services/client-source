Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleStandardOkLoginDialog() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleStandardOkLogin"))()) || this).itxt_btn_label = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.btn_login.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_login_login"));
    __s3local0.itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStandardOkLoginDialog, __s1param0);
  CastleStandardOkLoginDialog.prototype.applyProperties = function () {
    this.itxt_title.textContentVO.textId = this.standardDialogProperties.title;
    this.itxt_copy.textContentVO.textId = this.standardDialogProperties.copy;
    this.dialogDisp.btn_login.mouseChildren = false;
    this.dialogDisp.btn_login.mc_hoverState.visible = false;
    this.dialogDisp.btn_login.mc_pressedState.visible = false;
    this.dialogDisp.btn_login.actLikeButton = true;
    this.dialogDisp.btn_login.mouseChildren = false;
  };
  CastleStandardOkLoginDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_login:
        this.hide();
        if (this.standardDialogProperties.functionOk != null) {
          this.standardDialogProperties.functionOk();
        }
    }
  };
  CastleStandardOkLoginDialog.prototype.onMouseOver = function (__s11param0) {
    __s1param0.prototype.onMouseOver.call(this, __s11param0);
    if (__s11param0.target == this.dialogDisp.btn_login) {
      this.dialogDisp.btn_login.mc_hoverState.visible = true;
    }
  };
  CastleStandardOkLoginDialog.prototype.onMouseOut = function (__s14param0) {
    __s1param0.prototype.onMouseOut.call(this, __s14param0);
    if (__s14param0.target == this.dialogDisp.btn_login) {
      this.dialogDisp.btn_login.mc_hoverState.visible = false;
      this.dialogDisp.btn_login.mc_pressedState.visible = false;
    }
  };
  CastleStandardOkLoginDialog.prototype.onMouseDown = function (__s17param0) {
    __s1param0.prototype.onMouseDown.call(this, __s17param0);
    if (__s17param0.target == this.dialogDisp.btn_login) {
      this.dialogDisp.btn_login.mc_pressedState.visible = true;
      this.dialogDisp.btn_login.mc_hoverState.visible = true;
    }
  };
  CastleStandardOkLoginDialog.prototype.onMouseUp = function (__s20param0) {
    __s1param0.prototype.onMouseUp.call(this, __s20param0);
    if (__s20param0.target == this.dialogDisp.btn_login) {
      this.dialogDisp.btn_login.mc_pressedState.visible = false;
    }
  };
  CastleStandardOkLoginDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.userData.blockDialogs = false;
    __s1param0.prototype.hide.call(this);
  };
  Object.defineProperty(CastleStandardOkLoginDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStandardOkLoginDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardOkLoginDialog.__initialize_static_members = function () {
    CastleStandardOkLoginDialog.NAME = "StandardOkLoginDialog";
  };
  return CastleStandardOkLoginDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleStandardOkLoginDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
