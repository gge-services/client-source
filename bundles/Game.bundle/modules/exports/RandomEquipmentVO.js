Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __s0local0 = function (__s1param0) {
  function RandomEquipmentVO(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseEquipFromArray([0, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL, __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_ALL, __s3param0, "asdf", [], 0, -1, 0, 0, __dep_export_BasicEquipmentVO.BasicEquipmentVO.NO_GEM_ID]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RandomEquipmentVO, __s1param0);
  Object.defineProperty(RandomEquipmentVO.prototype, "nameString", {
    get: function () {
      return RandomEquipmentVO.ASSET_NAME.toLowerCase() + "_" + this.rarity.toLowerCase();
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "nameString").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomEquipmentVO.prototype, "visClassName", {
    get: function () {
      return RandomEquipmentVO.ASSET_NAME + "_" + this.visualRareID;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "visClassName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  RandomEquipmentVO.prototype.getFilePath = function () {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(RandomEquipmentVO.ASSET_NAME);
  };
  RandomEquipmentVO.__initialize_static_members = function () {
    RandomEquipmentVO.ASSET_NAME = "Random_Equipment";
  };
  return RandomEquipmentVO;
}(__dep_export_BasicEquipmentVO.BasicEquipmentVO);
exports.RandomEquipmentVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEquippableVO");
__s0local0.__initialize_static_members();
