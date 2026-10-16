Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CraftingEvent = require("gge-module:export_CraftingEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleBuyTempProductionSlotDialog() {
    return __s1param0.call(this, CastleBuyTempProductionSlotDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyTempProductionSlotDialog, __s1param0);
  CastleBuyTempProductionSlotDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  CastleBuyTempProductionSlotDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    var __s7local0 = this.dialogProperties.slotVO.getUnlockCostC1();
    var __s7local1 = [this.dialogProperties.slotVO.slotIndex];
    for (var __s7local2 = this.dialogProperties.slotVO.previousSlot(); __s7local2 && __s7local2.isLocked();) {
      __s7local1.unshift(__s7local2.slotIndex);
      __s7local2 = __s7local2.previousSlot();
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_crafting_unlock_TempSlot_header")));
    if (this.dialogProperties.slotVO.isProductionSlot) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_crafting_unlock_tempProductionSlot_desc")).autoFitToBounds = true;
    } else if (__s7local1.length > 1) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_crafting_unlock_tempQueueSlotMultiple_desc")).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_crafting_unlock_tempQueueSlotNumber_desc", [__s7local1[0] + 1])).autoFitToBounds = true;
    }
    this.dialogDisp.mc_time.toolTipText = "rentduration";
    this.dialogDisp.mc_time.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.dialogProperties.slotVO.getUnlockDuration())));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("cost_simple"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s7local0));
    this.dialogDisp.icon_coin_gold.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.dialogDisp.mc_discount.visible = false;
    __dep_export_CostHelper.CostHelper.setCostColor(this.dialogDisp.txt_amount, __s7local0 > __dep_export_CastleModel.CastleModel.currencyData.c1Amount);
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1000);
  };
  CastleBuyTempProductionSlotDialog.prototype.hideLoaded = function (__s14param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s14param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CraftingEvent.CraftingEvent(__dep_export_CraftingEvent.CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON));
  };
  CastleBuyTempProductionSlotDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          if (this.dialogProperties.confirmCallback != null) {
            this.dialogProperties.confirmCallback();
          }
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleBuyTempProductionSlotDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuyTempProductionSlotDialog.NAME = "CastleBuyTempProductionSlot";
  return CastleBuyTempProductionSlotDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBuyTempProductionSlotDialog = __s0local0;
