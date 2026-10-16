Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function HospitalBuildingVO() {
    var __s3local0 = this;
    __s3local0._hospitalCapacity = 0;
    __s3local0._hospitalSlots = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HospitalBuildingVO, __s1param0);
  HospitalBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._hospitalCapacity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hospitalCapacity", __s5param0, "0"));
    this._hospitalSlots = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hospitalSlots", __s5param0, "0"));
  };
  Object.defineProperty(HospitalBuildingVO.prototype, "healCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL;
    },
    enumerable: true,
    configurable: true
  });
  HospitalBuildingVO.prototype.isReviving = function () {
    return __dep_export_CastleModel.CastleModel.militaryData.getPackageListByCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL).slotsInUse != 0;
  };
  HospitalBuildingVO.prototype.hasFreeSlots = function () {
    return __dep_export_CastleModel.CastleModel.militaryData.getPackageListByCategory(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL).hasFreeSlots();
  };
  HospitalBuildingVO.prototype.createInfoPanelItems = function (__s13param0) {
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Hospital, "hospital_info_capacity", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.hospitalCapacity), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.HOSPITALCAPACITY), true);
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HospitalSlots, "hospital_info_slots", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.hospitalSlots), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.HOSPITALSLOTS), true);
    for (var __s13local0 = 0, __s13local1 = this.allShowableBuildingEffects; __s13local0 < __s13local1.length; __s13local0++) {
      var __s13local2 = __s13local1[__s13local0];
      if (__s13local2.effect.effectType.id == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SURVIVAL_BOOST.id) {
        __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_SurviveBoost, "hospital_info_defSurvivors", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s13local2.strength]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.SURVIVEBOOST), true);
      }
    }
    if (this.decoPoints > 0) {
      __s13param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  Object.defineProperty(HospitalBuildingVO.prototype, "hospitalCapacity", {
    get: function () {
      var __s19local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType, __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId).strength);
      var __s19local1 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleMapObjectVO(this.isoData.areaData.areaInfo);
      var __s19local2 = __dep_exact_f855840627e6e145.int(__s19local1 ? __s19local1.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HOSPITAL_CAPACITY_BONUS) : 0);
      return this._hospitalCapacity + this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.HOSPITALCAPACITY) + __s19local0 + __s19local2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HospitalBuildingVO.prototype, "baseHospitalCapacity", {
    get: function () {
      return this._hospitalCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HospitalBuildingVO.prototype, "hospitalSlots", {
    get: function () {
      return this._hospitalSlots;
    },
    enumerable: true,
    configurable: true
  });
  return HospitalBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.HospitalBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
