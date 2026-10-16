Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleCancelCraftingDialog() {
    return __s1param0.call(this, CastleCancelCraftingDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCancelCraftingDialog, __s1param0);
  CastleCancelCraftingDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.btn_close]);
  };
  CastleCancelCraftingDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.dialogProperties.slotVO.isProductionSlot ? "dialog_crafting_cancel_productionSlot_desc" : "dialog_crafting_cancel_queueSlot_desc";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_crafting_cancel_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local0));
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_yes, true, 1000);
  };
  CastleCancelCraftingDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.confirmAction();
          this.hide();
      }
    }
  };
  CastleCancelCraftingDialog.prototype.confirmAction = function () {
    this.dialogProperties.slotVO.cancel();
  };
  Object.defineProperty(CastleCancelCraftingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCancelCraftingDialog.NAME = "CancelRecruitment";
  return CastleCancelCraftingDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleCancelCraftingDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
