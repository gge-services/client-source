Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_EquipmentBonusVO = require("gge-module:export_EquipmentBonusVO");
var __s0local0 = function (__s1param0) {
  function AlienLordEquipmentVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AlienLordEquipmentVO, __s1param0);
  AlienLordEquipmentVO.prototype.parseAlienBoniData = function (__s5param0) {
    if (__s5param0 != null) {
      for (var __s5local0 = 0, __s5local1 = __s5param0; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = new __dep_export_EquipmentBonusVO.EquipmentBonusVO().parseEquipmentFromValueArray(__s5local2[0], __s5local2[1]);
          this._boni.push(__s5local3);
        }
      }
    }
  };
  AlienLordEquipmentVO.prototype.parseGemBoniData = function (__s11param0) {
    this._alienGems = [];
    if (__s11param0 != null) {
      for (var __s11local0 = 0, __s11local1 = __s11param0; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          var __s11local3 = __dep_export_CastleModel.CastleModel.gemData.getGemVO(__s11local2);
          this._alienGems.push(__s11local3);
        }
      }
    }
  };
  Object.defineProperty(AlienLordEquipmentVO.prototype, "alienGems", {
    get: function () {
      return this._alienGems;
    },
    enumerable: true,
    configurable: true
  });
  return AlienLordEquipmentVO;
}(__dep_export_BasicEquipmentVO.BasicEquipmentVO);
exports.AlienLordEquipmentVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEquippableVO");
