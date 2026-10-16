Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SSaveShoppingCartVO(__s3param0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.IGC = 0;
    if (__s3param0.length != Math.min(3, __dep_exact_26a421b704832cff.ShoppingCartConst.SHOPPING_CART_SIZE)) {
      throw new Error("Insufficient info to save!");
    }
    __s3local0.SCA = __s3param0[0];
    __s3local0.SCB = __s3param0[1];
    __s3local0.SCC = __s3param0[2];
    __s3local0.IGC = __s3param1 ? 1 : 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SSaveShoppingCartVO, __s1param0);
  C2SSaveShoppingCartVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_SAVE_SHOPPING_CART;
  };
  return C2SSaveShoppingCartVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SSaveShoppingCartVO = __s0local0;
