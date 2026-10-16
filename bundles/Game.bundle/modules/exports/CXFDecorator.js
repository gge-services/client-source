Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardYesNoDialogProperties = require("gge-module:export_CastleStandardYesNoDialogProperties");
var __dep_export_CastleShoppingCartPrimeDayConfirmDialog = require("gge-module:export_CastleShoppingCartPrimeDayConfirmDialog");
var __dep_export_CastleShoppingCartPrimeDayDialog = require("gge-module:export_CastleShoppingCartPrimeDayDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = __dep_exact_c549e43d1112dfff.getLogger("CXFDecorator");
var __s0local2 = function () {
  function CXFDecorator(__s3param0, __s3param1 = null, __s3param2 = {}) {
    this.mc = __s3param0;
    this.name = __s3param1 || __s3param0.name;
    this.params = __s3param2;
    if (__dep_exact_81dacdf05bd32292.ExternalInterface.available) {
      __s0local1.info("decorating  button ", this.name + " with CXF functionalities");
      __s3param0.addEventListener(__s0local0.CLICK, this.bindFunction(this.notifyFunc));
    } else {
      __s3param0.addEventListener(__s0local0.CLICK, this.bindFunction(this.debugOnlyClickListener));
    }
  }
  CXFDecorator.prototype.notifyFunc = function (__s7param0) {
    var __s7local0 = this;
    var __s7local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
    if (__s7local1 && !(__s7local1.shoppingCartOptionIds.length >= 9) && __dep_export_CastleModel.CastleModel.localData.readShoppingCartWarning()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayConfirmDialog.CastleShoppingCartPrimeDayConfirmDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties("", "", function () {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayDialog.CastleShoppingCartPrimeDayDialog);
      }, function () {
        __s7local0.openCXFShop();
      }, null, "", "", [__s7local1.endTimestamp]));
      return;
    }
    this.openCXFShop();
  };
  CXFDecorator.prototype.openCXFShop = function () {
    __s0local1.info("BUTTON WAS CLICKED", this.name);
    __s0local1.info("CXFSourceTracking", this.params);
    __dep_exact_81dacdf05bd32292.ExternalInterface.call("UIButtonClicked", [this.name, this.params]);
  };
  CXFDecorator.prototype.openCXFShopDebug = function () {
    __s0local1.debug("ExternalInterface unavailable, button [" + this.name + "@{" + this.mc.id + "}] should trigger ExternalInterface UIButtonClicked");
  };
  CXFDecorator.prototype.debugOnlyClickListener = function (__s18param0) {
    var __s18local0 = this;
    var __s18local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
    if (__s18local1 && !(__s18local1.shoppingCartOptionIds.length >= 9) && __dep_export_CastleModel.CastleModel.localData.readShoppingCartWarning()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayConfirmDialog.CastleShoppingCartPrimeDayConfirmDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties("", "", function () {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayDialog.CastleShoppingCartPrimeDayDialog);
      }, function () {
        __s18local0.openCXFShopDebug();
      }, null, "", "", [__s18local1.endTimestamp]));
      return;
    }
    this.openCXFShopDebug();
  };
  CXFDecorator.prototype.undecorate = function () {
    if (__dep_exact_81dacdf05bd32292.ExternalInterface.available) {
      this.mc.removeEventListener(__s0local0.CLICK, this.bindFunction(this.notifyFunc));
    } else {
      this.mc.removeEventListener(__s0local0.CLICK, this.bindFunction(this.debugOnlyClickListener));
    }
    this.mc = null;
  };
  return CXFDecorator;
}();
exports.CXFDecorator = __s0local2;
