Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelTicketSliderBuyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleLuckyWheelTicketSliderBuyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelTicketSliderBuyDialog, __s1param0);
  CastleLuckyWheelTicketSliderBuyDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.onChangePackageAmount();
  };
  CastleLuckyWheelTicketSliderBuyDialog.prototype.onChangePackageAmount = function (__s7param0 = null) {
    __s1param0.prototype.onChangePackageAmount.call(this, __s7param0);
    var __s7local0 = this.amountPicker.selectedValue + 1;
    this.setDescriptionText("dialog_luckyWheel_buyTicketsNumber", [this.dialogProperties.eventPackageVO.reward.amount * __s7local0]);
  };
  CastleLuckyWheelTicketSliderBuyDialog.__initialize_static_members = function () {
    CastleLuckyWheelTicketSliderBuyDialog.NAME = "CastleLuckyWheelTicketSliderBuy";
  };
  return CastleLuckyWheelTicketSliderBuyDialog;
}(require("gge-module:export_CastleGenericSliderBuyDialog").CastleGenericSliderBuyDialog);
exports.CastleLuckyWheelTicketSliderBuyDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
