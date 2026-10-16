Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function (__s1param0) {
  function AllianceGiftTypeEnum(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._id = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._tooltipTextId = __s3param1;
    __s3local0._id = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceGiftTypeEnum, __s1param0);
  AllianceGiftTypeEnum.getTypeById = function (__s5param0) {
    return this.getByProperty(AllianceGiftTypeEnum, "id", __s5param0, AllianceGiftTypeEnum.TYPE_UNKNOWN);
  };
  AllianceGiftTypeEnum.getTypeByName = function (__s7param0) {
    return this.getByProperty(AllianceGiftTypeEnum, "name", __dep_export_ClientConstUtils.ClientConstUtils.lowercaseFirstLetter(__s7param0), AllianceGiftTypeEnum.TYPE_UNKNOWN);
  };
  Object.defineProperty(AllianceGiftTypeEnum.prototype, "tooltipTextId", {
    get: function () {
      return this._tooltipTextId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftTypeEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftTypeEnum.prototype, "iconName", {
    get: function () {
      return "Icon_AllianceGift_" + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(this.name);
    },
    enumerable: true,
    configurable: true
  });
  AllianceGiftTypeEnum.__initialize_static_members = function () {
    AllianceGiftTypeEnum.ID_WOOD = 0;
    AllianceGiftTypeEnum.ID_STONE = 1;
    AllianceGiftTypeEnum.ID_C1 = 2;
    AllianceGiftTypeEnum.ID_UNITS = 3;
    AllianceGiftTypeEnum.TYPE_UNKNOWN = new AllianceGiftTypeEnum("unknown", "UNKNOWN", AllianceGiftTypeEnum.ID_UNKNOWN);
    AllianceGiftTypeEnum.TYPE_WOOD = new AllianceGiftTypeEnum("wood", "allianceGift_wood", AllianceGiftTypeEnum.ID_WOOD);
    AllianceGiftTypeEnum.TYPE_STONE = new AllianceGiftTypeEnum("stone", "allianceGift_stone", AllianceGiftTypeEnum.ID_STONE);
    AllianceGiftTypeEnum.TYPE_C1 = new AllianceGiftTypeEnum("c1", "allianceGift_gold", AllianceGiftTypeEnum.ID_C1);
    AllianceGiftTypeEnum.TYPE_UNITS = new AllianceGiftTypeEnum("units", "allianceGift_units", AllianceGiftTypeEnum.ID_UNITS);
  };
  AllianceGiftTypeEnum.ID_UNKNOWN = -1;
  return AllianceGiftTypeEnum;
}(__dep_exact_9e901e8e2483a22f.BasicEnum);
exports.AllianceGiftTypeEnum = __s0local0;
__s0local0.__initialize_static_members();
