Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __s0local0 = function () {
  function RelicEquipmentInfoShutterConfig(__s3param0 = "", __s3param1 = "") {
    this._category = "";
    this._effectsType = "";
    this._category = __s3param0;
    this._effectsType = __s3param1;
  }
  RelicEquipmentInfoShutterConfig.prototype.slotTypeMatchesCategory = function (__s5param0) {
    if (this.category != "") {
      if (this.category == RelicEquipmentInfoShutterConfig.CATEGORY_GEM && __s5param0 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM) {
        return true;
      }
      if (this.category == RelicEquipmentInfoShutterConfig.CATEGORY_EQUIPMENT && __s5param0 != __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(RelicEquipmentInfoShutterConfig.prototype, "category", {
    get: function () {
      return this._category;
    },
    set: function (__s12param0) {
      this._category = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoShutterConfig.prototype, "effectsType", {
    get: function () {
      return this._effectsType;
    },
    set: function (__s16param0) {
      this._effectsType = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentInfoShutterConfig.CATEGORY_EQUIPMENT = "equipment";
  RelicEquipmentInfoShutterConfig.CATEGORY_GEM = "gem";
  return RelicEquipmentInfoShutterConfig;
}();
exports.RelicEquipmentInfoShutterConfig = __s0local0;
