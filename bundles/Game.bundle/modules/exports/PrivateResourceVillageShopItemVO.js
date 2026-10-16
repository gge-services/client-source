Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function PrivateResourceVillageShopItemVO(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isAbleToBuy = false;
    __s3local0._villageVO = __s3param0;
    __s3local0._isAbleToBuy = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateResourceVillageShopItemVO, __s1param0);
  Object.defineProperty(PrivateResourceVillageShopItemVO.prototype, "villageVO", {
    get: function () {
      return this._villageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageShopItemVO.prototype, "isAbleToBuy", {
    get: function () {
      return this._isAbleToBuy;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateResourceVillageShopItemVO;
}(require("gge-module:exact_9e901e8e2483a22f").ScrollItemVO);
exports.PrivateResourceVillageShopItemVO = __s0local0;
