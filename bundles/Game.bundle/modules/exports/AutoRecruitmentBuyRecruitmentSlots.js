Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SUnlockPackageSlotVO = require("gge-module:export_C2SUnlockPackageSlotVO");
var __dep_export_AutoRecruitmentEvent = require("gge-module:export_AutoRecruitmentEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentBuyRecruitmentSlots() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, AutoRecruitmentBuyRecruitmentSlots.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentBuyRecruitmentSlots, __s1param0);
  AutoRecruitmentBuyRecruitmentSlots.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
  };
  AutoRecruitmentBuyRecruitmentSlots.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.dialogProperties) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.listId == __dep_exact_26a421b704832cff.UnitProductionConst.TOOLS_LIST ? "dialog_copyQueue_tools_slotsNeeded" : "dialog_copyQueue_units_slotsNeeded"));
      this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.dialogProperties.unlockDurationStr));
      var __s7local0 = this.dialogProperties.slotCount == 1 ? "dialog_copyQueue_slots_singular" : "dialog_copyQueue_slots";
      this.textFieldManager.registerTextField(this.dialogDisp.info_slots_amount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0, [this.dialogProperties.slotCount]));
      this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
      this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.c2Costs));
      this.dialogDisp.info_costs.mc_discount.visible = __dep_export_CastleModel.CastleModel.boosterSaleData.hideDiscount();
    }
  };
  AutoRecruitmentBuyRecruitmentSlots.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s10param0.target)) {
      switch (__s10param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.controller.dispatchEvent(new __dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent(__dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent.ON_PURCHASE_DENY));
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.buySlots();
          this.hide();
      }
    }
  };
  AutoRecruitmentBuyRecruitmentSlots.prototype.buySlots = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockPackageSlotVO.C2SUnlockPackageSlotVO(this.dialogProperties.listId));
  };
  AutoRecruitmentBuyRecruitmentSlots.prototype.hideLoaded = function (__s16param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s16param0);
  };
  Object.defineProperty(AutoRecruitmentBuyRecruitmentSlots.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentBuyRecruitmentSlots.__initialize_static_members = function () {
    AutoRecruitmentBuyRecruitmentSlots.NAME = "AutoRecruitmentUnlockSlots";
  };
  return AutoRecruitmentBuyRecruitmentSlots;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AutoRecruitmentBuyRecruitmentSlots = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
