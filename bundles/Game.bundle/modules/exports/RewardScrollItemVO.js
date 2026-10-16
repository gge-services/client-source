Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function RewardScrollItemVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._collectableItem = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardScrollItemVO, __s1param0);
  Object.defineProperty(RewardScrollItemVO.prototype, "collectableItem", {
    get: function () {
      return this._collectableItem;
    },
    enumerable: true,
    configurable: true
  });
  return RewardScrollItemVO;
}(require("gge-module:exact_9e901e8e2483a22f").ScrollItemVO);
exports.RewardScrollItemVO = __s0local0;
