Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleHeroVO = require("gge-module:export_CastleHeroVO");
var __dep_export_EquipmentBonusVO = require("gge-module:export_EquipmentBonusVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AlienLordHeroVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AlienLordHeroVO, __s1param0);
  AlienLordHeroVO.prototype.parseAlienBoniData = function (__s5param0) {
    var __s5local0 = "";
    if (__s5param0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5param0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          __s5local0 += __s5local0 ? "," : "";
          __s5local0 += __s5local3[0] + "&" + Math.round(__s5local3[1][0]);
          var __s5local4 = new __dep_export_EquipmentBonusVO.EquipmentBonusVO().parseEquipmentFromValueArray(__s5local3[0], __s5local3[1]);
          this._boni.push(__s5local4);
        }
      }
    }
    __dep_exact_9e901e8e2483a22f.debug(__s5local0);
    var __s5local5 = __dep_export_CastleModel.CastleModel.equipData.getUniqueHerosByAlienString(__s5local0);
    if (__s5local5.length > 0) {
      this._uniqueID = __s5local5[0].uniqueID;
      this.rareID = __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE;
    } else {
      this._itemGroupID = __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEffectGroupIdByEffectId(__s5param0[0][0]);
      if (this._itemGroupID > 0) {
        this._graphicString = "" + __dep_export_CastleModel.CastleModel.equipData.equipmentXml.getEquipmentGroup(this._itemGroupID).picId;
      }
      this.setRareIDFromEffectStrength(__s5param0[0][1]);
    }
  };
  AlienLordHeroVO.prototype.setRareIDFromEffectStrength = function (__s14param0) {
    if (__s14param0 >= AlienLordHeroVO.RARENESS_STRENGTHS_LEGEND.x) {
      this.rareID = __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_LEGENDARY;
    } else if (__s14param0 >= AlienLordHeroVO.RARENESS_STRENGTHS_EPIC.x) {
      this.rareID = __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_EPIC;
    } else if (__s14param0 >= AlienLordHeroVO.RARENESS_STRENGTHS_RARE.x) {
      this.rareID = __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_RARE;
    } else {
      this.rareID = __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON;
    }
  };
  Object.defineProperty(AlienLordHeroVO.prototype, "visClassName", {
    get: function () {
      return this.setVisClassName();
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroVO.CastleHeroVO.prototype, "visClassName").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  AlienLordHeroVO.__initialize_static_members = function () {
    AlienLordHeroVO.RARENESS_STRENGTHS_COMMON = new __s0local0(20, 40);
    AlienLordHeroVO.RARENESS_STRENGTHS_RARE = new __s0local0(41, 50);
    AlienLordHeroVO.RARENESS_STRENGTHS_EPIC = new __s0local0(51, 70);
    AlienLordHeroVO.RARENESS_STRENGTHS_LEGEND = new __s0local0(71, 100);
  };
  return AlienLordHeroVO;
}(__dep_export_CastleHeroVO.CastleHeroVO);
exports.AlienLordHeroVO = __s0local1;
__s0local1.__initialize_static_members();
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IEquippableVO");
