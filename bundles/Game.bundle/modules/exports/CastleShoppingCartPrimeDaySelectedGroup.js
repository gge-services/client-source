Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleShoppingCartPrimeDaySelectedGroup(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_export_CastleModel.CastleModel.shoppingCartPrimeDayData.optionCount) || this;
    for (var __s3local1 = 0; __s3local1 < __s3param1.length; __s3local1++) {
      var __s3local2 = __dep_exact_f855840627e6e145.int(__s3param1[__s3local1]);
      var __s3local3 = __s3param0.choosableGroup.getItemByOptionId(__s3local2);
      __s3local0.items[__s3local1].select(__s3local3);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleShoppingCartPrimeDaySelectedGroup, __s1param0);
  CastleShoppingCartPrimeDaySelectedGroup.prototype.createItem = function (__s7param0) {
    return new __dep_export_CastleShoppingCartPrimeDaySelectedItem.CastleShoppingCartPrimeDaySelectedItem(this._category, __s7param0);
  };
  CastleShoppingCartPrimeDaySelectedGroup.prototype.getSelectedOptions = function () {
    var __s9local0 = [];
    for (var __s9local1 = 0; __s9local1 < this._size; __s9local1++) {
      var __s9local2 = this.items[__s9local1];
      if (!__s9local2.isEmpty()) {
        __s9local0.push(__s9local2.optionId);
      }
    }
    return __s9local0;
  };
  CastleShoppingCartPrimeDaySelectedGroup.prototype.checkClick = function (__s14param0) {
    var __s14local0 = __s1param0.prototype.checkClick.call(this, __s14param0);
    if (__s14local0) {
      this.compact();
    }
    return __s14local0;
  };
  CastleShoppingCartPrimeDaySelectedGroup.prototype.compact = function () {
    for (var __s17local0 = 0; __s17local0 < this._size; __s17local0++) {
      var __s17local1 = this.items[__s17local0];
      if (__s17local1.isEmpty()) {
        for (var __s17local2 = __s17local0 + 1; __s17local2 < this._size; __s17local2++) {
          var __s17local3 = this.items[__s17local2];
          if (!__s17local3.isEmpty()) {
            __s17local1.switchWith(__s17local3);
            break;
          }
        }
      }
    }
  };
  CastleShoppingCartPrimeDaySelectedGroup.prototype.select = function (__s25param0) {
    for (var __s25local0 = 0; __s25local0 < this._size; __s25local0++) {
      if (this.items[__s25local0].select(__s25param0)) {
        return true;
      }
    }
    return false;
  };
  return CastleShoppingCartPrimeDaySelectedGroup;
}(require("gge-module:export_CastleShoppingCartPrimeDayAbstractGroup").CastleShoppingCartPrimeDayAbstractGroup);
exports.CastleShoppingCartPrimeDaySelectedGroup = __s0local0;
var __dep_export_CastleShoppingCartPrimeDaySelectedItem = require("gge-module:export_CastleShoppingCartPrimeDaySelectedItem");
