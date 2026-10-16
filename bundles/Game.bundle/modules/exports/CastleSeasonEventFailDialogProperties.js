Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSeasonEventFailDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.failedId = 0;
    __s3local0.failedId = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonEventFailDialogProperties, __s1param0);
  Object.defineProperty(CastleSeasonEventFailDialogProperties.prototype, "copyTextID", {
    get: function () {
      return "dialog_season_loose_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSeasonEventFailDialogProperties.prototype, "assetName", {
    get: function () {
      return "EventOver_" + this.failedId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSeasonEventFailDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleSeasonEventFailDialogProperties = __s0local0;
