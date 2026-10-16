Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleMysteryBoxResultDialogProperties(__s3param0, __s3param1 = 0, __s3param2 = false) {
    var __s3local0 = this;
    __s3local0._skinId = 0;
    __s3local0.isTest = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).rewardList = __s3param0;
    __s3local0._skinId = __s3param1;
    __s3local0.isTest = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMysteryBoxResultDialogProperties, __s1param0);
  Object.defineProperty(CastleMysteryBoxResultDialogProperties.prototype, "skinId", {
    get: function () {
      return this._skinId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMysteryBoxResultDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleMysteryBoxResultDialogProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISkinnable");
