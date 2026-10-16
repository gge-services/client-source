Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function RelicEquipmentInfoElementEnum(__s3param0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._isNewCategory = false;
    __s3local0._isNewCategory = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicEquipmentInfoElementEnum, __s1param0);
  Object.defineProperty(RelicEquipmentInfoElementEnum.prototype, "isNewCategory", {
    get: function () {
      return this._isNewCategory;
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentInfoElementEnum.__initialize_static_members = function () {
    RelicEquipmentInfoElementEnum.TITLE = new RelicEquipmentInfoElementEnum("title", true);
    RelicEquipmentInfoElementEnum.TITLE_UNDEFINED = new RelicEquipmentInfoElementEnum("titleUndefined", true);
    RelicEquipmentInfoElementEnum.HEADER = new RelicEquipmentInfoElementEnum("header", true);
    RelicEquipmentInfoElementEnum.HEADER_SUB = new RelicEquipmentInfoElementEnum("headerSub", true);
    RelicEquipmentInfoElementEnum.EFFECT_ITEM = new RelicEquipmentInfoElementEnum("effectItem");
    RelicEquipmentInfoElementEnum.EFFECT_ITEM_UNDEFINED = new RelicEquipmentInfoElementEnum("effectItemUndefined");
    RelicEquipmentInfoElementEnum.EFFECT_ITEM_UPGRADE = new RelicEquipmentInfoElementEnum("effectItemUpgrade");
    RelicEquipmentInfoElementEnum.LOCKED = new RelicEquipmentInfoElementEnum("locked", true);
    RelicEquipmentInfoElementEnum.GEM_SOCKET = new RelicEquipmentInfoElementEnum("gemSocket");
    RelicEquipmentInfoElementEnum.TEXT = new RelicEquipmentInfoElementEnum("text");
    RelicEquipmentInfoElementEnum.END = new RelicEquipmentInfoElementEnum("end");
  };
  return RelicEquipmentInfoElementEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.RelicEquipmentInfoElementEnum = __s0local0;
__s0local0.__initialize_static_members();
