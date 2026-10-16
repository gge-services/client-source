Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CraftingMaterialData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.parseFromXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CraftingMaterialData, __s1param0);
  CraftingMaterialData.prototype.parseFromXML = function (__s5param0) {
    this._craftingMaterialBags = new Map();
    for (var __s5local0 = 0, __s5local1 = __s5param0.rewardBags; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2) {
        var __s5local3 = new __dep_export_CraftingMaterialBagVO.CraftingMaterialBagVO(__s5local2);
        this._craftingMaterialBags.set(__s5local3.bagID, __s5local3);
      }
    }
  };
  Object.defineProperty(CraftingMaterialData.prototype, "craftingMaterialBags", {
    get: function () {
      return this._craftingMaterialBags;
    },
    enumerable: true,
    configurable: true
  });
  return CraftingMaterialData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CraftingMaterialData = __s0local0;
var __dep_export_CraftingMaterialBagVO = require("gge-module:export_CraftingMaterialBagVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
