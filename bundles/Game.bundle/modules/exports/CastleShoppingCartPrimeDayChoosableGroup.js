Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CastleShoppingCartPrimeDayChoosableGroup(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_26a421b704832cff.ShoppingCartConst.OPTIONS_PER_GROUP) || this;
    for (var __s3local1 = 0; __s3local1 < __s3param1.length; __s3local1++) {
      __s3local0.items[__s3local1].typeId = __s3param1[__s3local1];
    }
    if (!__s3local0.full()) {
      throw new Error("Couldn't fill choosable group! " + __dep_exact_26a421b704832cff.ShoppingCartConst.OPTIONS_PER_GROUP + " valid items are needed! Category " + (__s3param0 ? __s3param0.groupId : "none"));
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleShoppingCartPrimeDayChoosableGroup, __s1param0);
  CastleShoppingCartPrimeDayChoosableGroup.prototype.createItem = function (__s8param0) {
    return new __dep_export_CastleShoppingCartPrimeDayChoosableItem.CastleShoppingCartPrimeDayChoosableItem(this._category, __s8param0);
  };
  CastleShoppingCartPrimeDayChoosableGroup.prototype.reset = function () {
    for (var __s10local0 = 0; __s10local0 < this.items.length; __s10local0++) {
      this.items[__s10local0].reset();
    }
  };
  CastleShoppingCartPrimeDayChoosableGroup.prototype.enable = function () {
    for (var __s14local0 = 0; __s14local0 < this._size; __s14local0++) {
      this.items[__s14local0].enable();
    }
  };
  CastleShoppingCartPrimeDayChoosableGroup.prototype.disable = function () {
    for (var __s18local0 = 0; __s18local0 < this._size; __s18local0++) {
      this.items[__s18local0].disable();
    }
  };
  CastleShoppingCartPrimeDayChoosableGroup.prototype.getItemByOptionId = function (__s22param0) {
    for (var __s22local0 = 0; __s22local0 < this._size; __s22local0++) {
      var __s22local1 = this.items[__s22local0];
      if (__s22local1.optionId == __s22param0) {
        return __s22local1;
      }
    }
    return null;
  };
  return CastleShoppingCartPrimeDayChoosableGroup;
}(require("gge-module:export_CastleShoppingCartPrimeDayAbstractGroup").CastleShoppingCartPrimeDayAbstractGroup);
exports.CastleShoppingCartPrimeDayChoosableGroup = __s0local0;
var __dep_export_CastleShoppingCartPrimeDayChoosableItem = require("gge-module:export_CastleShoppingCartPrimeDayChoosableItem");
