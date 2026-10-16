Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialog = require("gge-module:export_CastleDialog");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function CastleTimerOkDialog(__s3param0 = null) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0 ?? new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleStandardOk"))()) || this).itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0.standardDialog.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.standardDialog.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_copy.autoFitToBounds = true;
    __s3local0.standardDialog.btn_label.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimerOkDialog, __s1param0);
  CastleTimerOkDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.itxt_title.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(this.standardDialogProperties.titleTextID);
    this.itxt_copy.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(this.getDialogMessage());
    this.timer = new __dep_exact_81dacdf05bd32292.Timer(1000, 0);
    this.timer.start();
    this.timer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onTimer));
  };
  CastleTimerOkDialog.prototype.onTimer = function (__s7param0) {
    this.itxt_copy.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(this.getDialogMessage());
    if (this.standardDialogProperties.remainingSeconds <= 0) {
      this.hide();
    }
  };
  CastleTimerOkDialog.prototype.getDialogMessage = function () {
    var __s10local0 = __dep_exact_92d05af59ee2ff30.Localize.text(this.standardDialogProperties.descTextID);
    __s10local0 += "\n\n";
    return __s10local0 += __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getFullTimeString(this.standardDialogProperties.remainingSeconds);
  };
  CastleTimerOkDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.standardDialog.btn_close:
      case this.standardDialog.btn_ok:
        this.hide();
    }
  };
  CastleTimerOkDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.timer.stop();
    this.timer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onTimer));
  };
  Object.defineProperty(CastleTimerOkDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimerOkDialog.prototype, "standardDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimerOkDialog.__initialize_static_members = function () {
    CastleTimerOkDialog.NAME = __dep_exact_9e901e8e2483a22f.CommonDialogNames.StandardOkDialog_NAME;
  };
  return CastleTimerOkDialog;
}(__dep_export_CastleDialog.CastleDialog);
exports.CastleTimerOkDialog = __s0local1;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
