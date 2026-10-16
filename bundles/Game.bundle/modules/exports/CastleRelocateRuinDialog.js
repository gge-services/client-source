Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SRememberRuinVO = require("gge-module:export_C2SRememberRuinVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleRelocateRuinDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRelocateRuinDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRelocateRuinDialog, __s1param0);
  CastleRelocateRuinDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.itxt_position ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_position, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COORDS, [this.dialogProperties.posX, this.dialogProperties.posY]));
    this.itxt_position.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COORDS;
    this.itxt_position.textContentVO.textReplacements = [this.dialogProperties.posX, this.dialogProperties.posY];
    this.itxt_time ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(this.dialogProperties.remainingTime, __dep_exact_92d05af59ee2ff30.Localize.text)));
    if (this.dialogProperties.remainingTime > 0) {
      this.itxt_time.textContentVO = new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(this.dialogProperties.remainingTime, __dep_exact_92d05af59ee2ff30.Localize.text));
    } else {
      this.itxt_time.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_relocateRuin_waiting");
    }
  };
  CastleRelocateRuinDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("panel_relocate_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_relocateRuin_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_free, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_relocateRuin_freeIn"));
    this.dialogDisp.btn_reminder.toolTipText = "dialog_relocateRuin_reminder";
    this.dialogDisp.btn_reminder.visible = this.dialogProperties.showButton;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(this.dialogProperties.remainingTime, __dep_exact_92d05af59ee2ff30.Localize.text)));
    this.itxt_position = this.textFieldManager.registerTextField(this.dialogDisp.txt_position, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COORDS, [this.dialogProperties.posX, this.dialogProperties.posY]));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_reminder, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_reminder.visible = this.dialogProperties.showButton;
  };
  CastleRelocateRuinDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_reminder:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRememberRuinVO.C2SRememberRuinVO(this.dialogProperties.posX, this.dialogProperties.posY));
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleRelocateRuinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocateRuinDialog.__initialize_static_members = function () {
    CastleRelocateRuinDialog.NAME = "CastleRelocateRuin";
  };
  return CastleRelocateRuinDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleRelocateRuinDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
