Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleShoppingCartPrimeDayAbstractGroup(__s3param0, __s3param1) {
    this._size = 0;
    this.items = [];
    this._category = __s3param0;
    this._size = __s3param1;
    for (var __s3local0 = 0; __s3local0 < __s3param1; __s3local0++) {
      this.items.push(this.createItem(__s3local0));
    }
  }
  CastleShoppingCartPrimeDayAbstractGroup.prototype.createItem = function (__s7param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  CastleShoppingCartPrimeDayAbstractGroup.prototype.checkClick = function (__s9param0) {
    for (var __s9local0 = __dep_exact_f855840627e6e145.int(this.items.length - 1); __s9local0 >= 0; __s9local0--) {
      if (this.items[__s9local0].checkClick(__s9param0)) {
        return true;
      }
    }
    return false;
  };
  CastleShoppingCartPrimeDayAbstractGroup.prototype.full = function () {
    for (var __s14local0 = 0; __s14local0 < this._size; __s14local0++) {
      if (this.items[__s14local0].isEmpty()) {
        return false;
      }
    }
    return true;
  };
  CastleShoppingCartPrimeDayAbstractGroup.prototype.empty = function () {
    for (var __s19local0 = 0; __s19local0 < this._size; __s19local0++) {
      if (!this.items[__s19local0].isEmpty()) {
        return false;
      }
    }
    return true;
  };
  CastleShoppingCartPrimeDayAbstractGroup.prototype.clear = function () {
    for (var __s24local0 = 0; __s24local0 < this._size; __s24local0++) {
      this.items[__s24local0].clear();
    }
  };
  return CastleShoppingCartPrimeDayAbstractGroup;
}();
exports.CastleShoppingCartPrimeDayAbstractGroup = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
