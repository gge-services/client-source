Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_AUnitProductionBuildingVO = require("gge-module:export_AUnitProductionBuildingVO");
var __s0local0 = function (__s1param0) {
  function BarracksBuildingVO() {
    var __s3local0 = this;
    __s3local0._stackSize = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BarracksBuildingVO, __s1param0);
  BarracksBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._stackSize = __dep_exact_f855840627e6e145.int(__s5param0.stackSize || "");
  };
  Object.defineProperty(BarracksBuildingVO.prototype, "unitCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO.prototype, "unitCategory").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BarracksBuildingVO.prototype, "isProductive", {
    get: function () {
      return __dep_export_RecruitmentHelper.RecruitmentHelper.isRecruitingUnits();
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO.prototype, "isProductive").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BarracksBuildingVO.prototype, "recruitCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO.prototype, "recruitCategory").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  BarracksBuildingVO.prototype.createInfoPanelItems = function (__s19param0) {
    __s19param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    var __s19local0 = __dep_exact_f855840627e6e145.int(this.stackSize + __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.STACKSIZE));
    var __s19local1 = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS);
    if (__s19local1) {
      __s19local0 += __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS));
    }
    __s19param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Max_Recruitment_Amount, "dialog_barracks_slotCapacity_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s19local0), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.STACKSIZE), true, __s19local1);
    var __s19local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.instructorVO.isActive ? __dep_export_CastleModel.CastleModel.boostData.instructorVO.bonusValue : 0);
    __s19param0.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "dialog_recuit_recruitSpeed_feastActive", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_CastleModel.CastleModel.militaryData.getBuildingProductionSpeed(this.name) + __s19local2]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.RECRUITSPEEDBOOST));
    if (this.decoPoints > 0) {
      __s19param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  BarracksBuildingVO.prototype.createInfoDialogItems = function (__s23param0) {
    __s23param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    var __s23local0;
    __s23local0 = __dep_exact_f855840627e6e145.int(this.stackSize);
    __s23param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Max_Recruitment_Amount, "dialog_barracks_slotCapacity_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s23local0), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(BarracksBuildingVO.prototype, "stackSize", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.level < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.TUTORIAL_END) {
        return 5;
      } else {
        return this._stackSize;
      }
    },
    enumerable: true,
    configurable: true
  });
  return BarracksBuildingVO;
}(__dep_export_AUnitProductionBuildingVO.AUnitProductionBuildingVO);
exports.BarracksBuildingVO = __s0local0;
var __dep_export_RecruitmentHelper = require("gge-module:export_RecruitmentHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
