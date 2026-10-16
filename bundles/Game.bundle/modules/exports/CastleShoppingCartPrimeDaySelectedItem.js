Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleShoppingCartPrimeDaySelectedItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, "select", __s3param1) || this;
    __s3local0.setPlaceholderVisibility(true);
    __s3local0.itemMc.blocker.visible = true;
    delete __s3local0.itemMc.blocker.toolTipText;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s3local0.itemMc.mc_item, true);
    __s3local0.showShadow();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleShoppingCartPrimeDaySelectedItem, __s1param0);
  CastleShoppingCartPrimeDaySelectedItem.prototype.clear = function () {
    __s1param0.prototype.clear.call(this);
    this.node = null;
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.showShadow = function () {
    var __s7local0 = castAs(this.itemMc.getChildByName("shadow"), "MovieClip");
    if (__s7local0) {
      __s7local0.visible = true;
      __s7local0.gotoAndStop(this.category.groupId);
    }
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.checkClick = function (__s10param0) {
    return !!this.selectedItem && __s10param0 == this.itemMc.mc_item && (this.selectedItem.unselect(), this.unselect(), true);
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.select = function (__s12param0) {
    return !!__dep_exact_81dacdf05bd32292.instanceOfClass(__s12param0, "CastleShoppingCartPrimeDayChoosableItem") && !!__s1param0.prototype.select.call(this, __s12param0) && (__s12param0.decreaseStock(), this.selectedItem = __s12param0, true);
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.unselect = function () {
    this.optionId = -1;
    this.selectedItem = null;
  };
  CastleShoppingCartPrimeDaySelectedItem.prototype.switchWith = function (__s16param0) {
    var __s16local0 = __dep_exact_f855840627e6e145.int(this.optionId);
    var __s16local1 = this.selectedItem;
    this.optionId = __s16param0.optionId;
    this.selectedItem = __s16param0.selectedItem;
    __s16param0.optionId = __s16local0;
    __s16param0.selectedItem = __s16local1;
  };
  return CastleShoppingCartPrimeDaySelectedItem;
}(require("gge-module:export_CastleShoppingCartPrimeDayAbstractItem").CastleShoppingCartPrimeDayAbstractItem);
exports.CastleShoppingCartPrimeDaySelectedItem = __s0local0;
