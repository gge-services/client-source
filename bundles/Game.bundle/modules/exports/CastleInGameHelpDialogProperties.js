Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleInGameHelpDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._category = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInGameHelpDialogProperties, __s1param0);
  Object.defineProperty(CastleInGameHelpDialogProperties.prototype, "inGameHelpActiveID", {
    get: function () {
      return this._category.key;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInGameHelpDialogProperties.prototype, "category", {
    get: function () {
      return this._category;
    },
    enumerable: true,
    configurable: true
  });
  return CastleInGameHelpDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleInGameHelpDialogProperties = __s0local0;
