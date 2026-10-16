Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CastleShoppingCartPrimeDayFinishDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, {
      RC: __dep_exact_26a421b704832cff.ShoppingCartConst.SHOPPING_CART_SIZE
    }) || this;
    __s3local0.finalRewardList = __s3param0;
    __s3local0._shoppingCartEventVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleShoppingCartPrimeDayFinishDialogProperties, __s1param0);
  Object.defineProperty(CastleShoppingCartPrimeDayFinishDialogProperties.prototype, "shoppingCartEventVO", {
    get: function () {
      return this._shoppingCartEventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleShoppingCartPrimeDayFinishDialogProperties;
}(require("gge-module:export_CastlePaymentRewardSpecialOfferFinishDialogProperties").CastlePaymentRewardSpecialOfferFinishDialogProperties);
exports.CastleShoppingCartPrimeDayFinishDialogProperties = __s0local0;
