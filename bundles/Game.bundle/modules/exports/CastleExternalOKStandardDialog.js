Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleExternalStandardOKDialogProperties = require("gge-module:export_CastleExternalStandardOKDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleExternalOKStandardDialog() {
    var __s3local0 = this;
    __s3local0._initialHeight = -1;
    __s3local0._initialY = -1;
    __s3local0._initialButtonY = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleExternalOKStandardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExternalOKStandardDialog, __s1param0);
  CastleExternalOKStandardDialog.prototype.showLoaded = function (__s5param0 = null) {
    this.properties ||= new __dep_export_CastleExternalStandardOKDialogProperties.CastleExternalStandardOKDialogProperties();
    this._txt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.titleTextID));
    this._txt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.descTextID, this.dialogProperties.descTextIDParams));
    switch (this.dialogProperties.decorationState) {
      case __dep_export_CastleExternalStandardOKDialogProperties.CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION:
        this.showGreenDecoration();
        break;
      case __dep_export_CastleExternalStandardOKDialogProperties.CastleExternalStandardOKDialogProperties.ERROR_RED_DECORATION:
        this.showRedDecoration();
    }
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.resize();
  };
  CastleExternalOKStandardDialog.prototype.showGreenDecoration = function () {
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_exit]);
    this.dialogDisp.dec_red.visible = false;
    this.dialogDisp.btn_close.visible = false;
    this.dialogDisp.dec_green.visible = true;
    this.dialogDisp.btn_ok.visible = true;
    this._txt_title.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastleExternalOKStandardDialog.prototype.showRedDecoration = function () {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_exit]);
    this.dialogDisp.dec_green.visible = false;
    this.dialogDisp.btn_ok.visible = false;
    this.dialogDisp.dec_red.visible = true;
    this.dialogDisp.btn_close.visible = true;
    this._txt_title.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE;
  };
  CastleExternalOKStandardDialog.prototype.resize = function () {
    if (this._initialHeight < 0) {
      this._initialHeight = __dep_exact_f855840627e6e145.int(this.dialogDisp.bg.height);
      this._initialY = __dep_exact_f855840627e6e145.int(this.dialogDisp.bg.y);
      this._initialButtonY = __dep_exact_f855840627e6e145.int(this.dialogDisp.btn_close.y);
    }
    var __s12local0 = Math.max(this._txt_desc.textHeight + CastleExternalOKStandardDialog.MIN_HEIGHT, CastleExternalOKStandardDialog.MIN_HEIGHT);
    var __s12local1 = __dep_exact_f855840627e6e145.int(this._initialHeight - __s12local0);
    this._txt_desc.height = this._txt_desc.textHeight;
    this.dialogDisp.bg.height = __s12local0;
    this.dialogDisp.bg.y = this._initialY - (__s12local1 >> 1);
    this.dialogDisp.btn_close.y = this._initialButtonY - __s12local1;
    this.dialogDisp.btn_ok.y = this._initialButtonY - __s12local1;
  };
  CastleExternalOKStandardDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_ok:
        if (this.dialogProperties.okBtnCallback) {
          this.dialogProperties.okBtnCallback();
        }
      case this.dialogDisp.btn_exit:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleExternalOKStandardDialog.prototype, "dialogProperties", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties")) {
        this.properties = new __dep_export_CastleExternalStandardOKDialogProperties.CastleExternalStandardOKDialogProperties();
      }
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalOKStandardDialog.__initialize_static_members = function () {
    CastleExternalOKStandardDialog.NAME = "CastleStandardOKExternal";
    CastleExternalOKStandardDialog.MIN_HEIGHT = 150;
  };
  return CastleExternalOKStandardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleExternalOKStandardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
