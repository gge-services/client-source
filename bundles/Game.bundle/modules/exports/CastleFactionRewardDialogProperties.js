Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleFactionRewardDialogProperties(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = this;
    __s3local0._faction = 0;
    __s3local0._isAlliance = false;
    __s3local0._isFactionInvasion = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this)._faction = __dep_exact_f855840627e6e145.int(__s3param1.FID);
    __s3local0._isFactionInvasion = __s3param3;
    __s3local0._isAlliance = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionRewardDialogProperties, __s1param0);
  Object.defineProperty(CastleFactionRewardDialogProperties.prototype, "faction", {
    get: function () {
      return this._faction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionRewardDialogProperties.prototype, "isAlliance", {
    get: function () {
      return this._isAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionRewardDialogProperties.prototype, "isFactionInvasion", {
    get: function () {
      return this._isFactionInvasion;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionRewardDialogProperties;
}(require("gge-module:export_CastleGenericRewardDialogProperties").CastleGenericRewardDialogProperties);
exports.CastleFactionRewardDialogProperties = __s0local0;
