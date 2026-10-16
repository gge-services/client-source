Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleShoppingCartPrimeDayAbstractItem = require("gge-module:export_CastleShoppingCartPrimeDayAbstractItem");
var __s0local0 = function (__s1param0) {
  function CastleShoppingCartPrimeDayChoosableItem(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.stock = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, "item", __s3param1) || this).stock = CastleShoppingCartPrimeDayChoosableItem.DEFAULT_STOCK;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleShoppingCartPrimeDayChoosableItem, __s1param0);
  Object.defineProperty(CastleShoppingCartPrimeDayChoosableItem.prototype, "node", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_CastleShoppingCartPrimeDayAbstractItem.CastleShoppingCartPrimeDayAbstractItem.prototype, "node").get.call(this);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleShoppingCartPrimeDayAbstractItem.CastleShoppingCartPrimeDayAbstractItem.prototype, "node").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleShoppingCartPrimeDayChoosableItem.prototype.isEmpty = function () {
    return this.stock < 1 || __s1param0.prototype.isEmpty.call(this);
  };
  CastleShoppingCartPrimeDayChoosableItem.prototype.checkClick = function (__s11param0) {
    return __s11param0 == this.itemMc.mc_item && !!(this.stock > 0) && !!this.category.selectedGroup.select(this);
  };
  CastleShoppingCartPrimeDayChoosableItem.prototype.decreaseStock = function () {
    this.stock--;
    if (this.stock == 0) {
      this.renderNode();
    }
  };
  CastleShoppingCartPrimeDayChoosableItem.prototype.unselect = function () {
    this.stock++;
    if (this.stock == 1) {
      this.renderNode();
    }
  };
  CastleShoppingCartPrimeDayChoosableItem.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this.stock = CastleShoppingCartPrimeDayChoosableItem.DEFAULT_STOCK;
  };
  CastleShoppingCartPrimeDayChoosableItem.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayChoosableItem.DEFAULT_STOCK = 3;
  };
  return CastleShoppingCartPrimeDayChoosableItem;
}(__dep_export_CastleShoppingCartPrimeDayAbstractItem.CastleShoppingCartPrimeDayAbstractItem);
exports.CastleShoppingCartPrimeDayChoosableItem = __s0local0;
__s0local0.__initialize_static_members();
