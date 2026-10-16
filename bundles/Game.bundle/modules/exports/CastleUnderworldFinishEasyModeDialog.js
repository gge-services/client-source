Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleUnderworldFinishEasyModeDialog(__s3param0 = CastleUnderworldFinishEasyModeDialog.NAME) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnderworldFinishEasyModeDialog, __s1param0);
  CastleUnderworldFinishEasyModeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
  };
  CastleUnderworldFinishEasyModeDialog.prototype.setToolTips = function () {
    __s1param0.prototype.setToolTips.call(this);
  };
  CastleUnderworldFinishEasyModeDialog.prototype.setCopyTexts = function () {
    __s1param0.prototype.setCopyTexts.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.copy));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.title));
  };
  CastleUnderworldFinishEasyModeDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_ok:
        if (__s11param0.target.basicButton.enabled) {
          if (this.dialogProperties.functionYes) {
            this.dialogProperties.functionYes();
          }
          this.hide();
        }
        break;
      case this.dialogDisp.btn_close:
        if (this.dialogProperties.functionClose) {
          this.dialogProperties.functionClose();
        }
        this.hide();
        break;
      case this.dialogDisp.btn_cancel:
        if (this.dialogProperties.functionNo) {
          this.dialogProperties.functionNo();
        }
        this.hide();
    }
  };
  Object.defineProperty(CastleUnderworldFinishEasyModeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnderworldFinishEasyModeDialog.__initialize_static_members = function () {
    CastleUnderworldFinishEasyModeDialog.NAME = "CastleUnderworldFinishEasy";
  };
  return CastleUnderworldFinishEasyModeDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleUnderworldFinishEasyModeDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
