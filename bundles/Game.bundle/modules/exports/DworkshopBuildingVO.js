Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_AUnitProductionBuildingVO = require("gge-module:export_AUnitProductionBuildingVO");
var __s0local0 = function (__s1param0) {
  function DworkshopBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DworkshopBuildingVO, __s1param0);
  Object.defineProperty(DworkshopBuildingVO.prototype, "unitCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO.prototype, "unitCategory").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DworkshopBuildingVO.prototype, "recruitCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO.prototype, "recruitCategory").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DworkshopBuildingVO.prototype, "recruitFilter", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO.prototype, "recruitFilter").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DworkshopBuildingVO.prototype, "isProductive", {
    get: function () {
      return __dep_export_RecruitmentHelper.RecruitmentHelper.isProducingTools(this.recruitFilter);
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO.prototype, "isProductive").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  DworkshopBuildingVO.prototype.createInfoPanelItems = function (__s21param0) {
    __s21param0.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_CastleModel.CastleModel.militaryData.getBuildingProductionSpeed(this.name)]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.REDUCEDEFENSIVETOOLSTIME));
    if (this.decoPoints > 0) {
      __s21param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS));
    }
  };
  DworkshopBuildingVO.prototype.createInfoDialogItems = function (__s24param0) {
    __s24param0.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productionspeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_exact_26a421b704832cff.ConstructionConst.UPGRADE_RECRUITSPEED_BOOST * (this.level - 1)]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return DworkshopBuildingVO;
}(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO);
exports.DworkshopBuildingVO = __s0local0;
var __dep_export_RecruitmentHelper = require("gge-module:export_RecruitmentHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
