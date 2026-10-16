Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function MaterialBagOpenedDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._rewards = __s3param0;
    __s3local0._rareness = __dep_export_CraftingMaterialBagVO.CraftingMaterialBagVO.RARENESS_NAMES[__s3param1 - 1];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MaterialBagOpenedDialogProperties, __s1param0);
  Object.defineProperty(MaterialBagOpenedDialogProperties.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MaterialBagOpenedDialogProperties.prototype, "rareness", {
    get: function () {
      return this._rareness;
    },
    enumerable: true,
    configurable: true
  });
  return MaterialBagOpenedDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.MaterialBagOpenedDialogProperties = __s0local0;
var __dep_export_CraftingMaterialBagVO = require("gge-module:export_CraftingMaterialBagVO");
