Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleTieredPrimeDayRewardProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._rewards = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTieredPrimeDayRewardProperties, __s1param0);
  Object.defineProperty(CastleTieredPrimeDayRewardProperties.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTieredPrimeDayRewardProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleTieredPrimeDayRewardProperties = __s0local0;
