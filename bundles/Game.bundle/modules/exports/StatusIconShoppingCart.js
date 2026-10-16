Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleShoppingCartPrimeDayEvent = require("gge-module:export_CastleShoppingCartPrimeDayEvent");
var __s0local0 = function (__s1param0) {
  function StatusIconShoppingCart() {
    var __s3local0 = __s1param0.call(this, "Btn_ShoppingCart", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_SHOPPINGCART) || this;
    __s3local0.setTooltip("dialog_specialOfferBrand_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconShoppingCart, __s1param0);
  StatusIconShoppingCart.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent.SOLD_OUT, this.bindFunction(this.onSoldOut));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  StatusIconShoppingCart.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleShoppingCartPrimeDayEvent.CastleShoppingCartPrimeDayEvent.SOLD_OUT, this.bindFunction(this.onSoldOut));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  StatusIconShoppingCart.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconShoppingCart.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconShoppingCart.prototype.onTimerUpdate = function (__s13param0 = null) {
    if (this.icon && this.icon.txt_label) {
      var __s13local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
      this.itxt_label.textContentVO.stringValue = __s13local0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s13local0.remainingEventTimeInSeconds) : "-";
    }
  };
  StatusIconShoppingCart.prototype.onSoldOut = function (__s16param0) {
    this.hide();
  };
  StatusIconShoppingCart.prototype.onEventUpdate = function (__s18param0) {
    this.setVisibilityLoaded();
  };
  StatusIconShoppingCart.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayDialog.CastleShoppingCartPrimeDayDialog);
  };
  StatusIconShoppingCart.prototype.setVisibilityLoaded = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY)) {
      this.show();
    } else {
      this.hide();
    }
  };
  return StatusIconShoppingCart;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconShoppingCart = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleShoppingCartPrimeDayDialog = require("gge-module:export_CastleShoppingCartPrimeDayDialog");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
