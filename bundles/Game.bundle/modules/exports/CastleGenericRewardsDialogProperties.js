Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleGenericRewardsDialogProperties(__s3param0, __s3param1, __s3param2 = -1, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._txtTitle = __s3param0;
    __s3local0._txtCopy = __s3param1;
    __s3local0._rewardID = __s3param2;
    __s3local0._rewards = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericRewardsDialogProperties, __s1param0);
  Object.defineProperty(CastleGenericRewardsDialogProperties.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardsDialogProperties.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardsDialogProperties.prototype, "txtTitle", {
    get: function () {
      return this._txtTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardsDialogProperties.prototype, "txtCopy", {
    get: function () {
      return this._txtCopy;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericRewardsDialogProperties;
}(require("gge-module:exact_dc21bc5945239ede").BasicProperties);
exports.CastleGenericRewardsDialogProperties = __s0local0;
