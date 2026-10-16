Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_AResearchVO = require("gge-module:export_AResearchVO");
var __s0local0 = function (__s1param0) {
  function ResearchVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResearchVO, __s1param0);
  ResearchVO.prototype.getBonusText = function (__s5param0) {
    switch (this.groupID) {
      case 21:
      case 31:
      case 43:
      case 45:
      case 46:
      case 47:
      case 50:
      case 85:
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      case 97:
      case 98:
      case 99:
      case 100:
      case 101:
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, __s5param0);
      case 22:
      case 23:
      case 44:
      case 36:
      case 34:
      case 104:
      case 105:
      case 106:
      case 107:
      case 108:
      case 109:
      case 110:
      case 111:
      case 112:
      case 113:
      case 114:
      case 115:
      case 116:
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, __s5param0);
      case 41:
      case 42:
      case 49:
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_SIMPLE_COMP, [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_SUBTRACT, __s5param0), __dep_exact_9e901e8e2483a22f_1.GenericTextIds.COMMON_SECOND_SHORT]);
      default:
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD, __s5param0);
    }
  };
  Object.defineProperty(ResearchVO.prototype, "effectText", {
    get: function () {
      if (this.boni[0].effectValue.strength != 0 && this.showEffectValue) {
        return __dep_exact_92d05af59ee2ff30.Localize.text(this.descriptionTextId) + "\n" + this.getBonusText(this.boni[0].effectValue.textReplacements);
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text(this.descriptionTextId);
      }
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "effectText").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchVO.prototype, "descriptionTextId", {
    get: function () {
      return "research_" + this.groupID + "_copy";
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "descriptionTextId").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchVO.prototype, "nameTextId", {
    get: function () {
      return "research_" + this.groupID + "_title";
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "nameTextId").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchVO.prototype, "fullNameText", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_SIMPLE_COMP, [__dep_exact_92d05af59ee2ff30.Localize.text(this.nameTextId), __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [this.level])]);
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "fullNameText").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  ResearchVO.prototype.icon = function () {
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(ResearchVO.ICON_PREFIX_CLASSNAME + this.groupID, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(ResearchVO.ICON_PREFIX_CLASSNAME + this.groupID), null, 0, false);
  };
  Object.defineProperty(ResearchVO.prototype, "showEffectValue", {
    get: function () {
      return !this.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STRONGER_PEASANT, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_NO_RUBIES, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE]);
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "showEffectValue").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchVO.prototype, "showInfoBtn", {
    get: function () {
      return this.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STRONGER_PEASANT, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE]);
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResearchVO.AResearchVO.prototype, "showInfoBtn").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  ResearchVO.__initialize_static_members = function () {
    ResearchVO.ICON_PREFIX_CLASSNAME = "Icon_Research_";
  };
  return ResearchVO;
}(__dep_export_AResearchVO.AResearchVO);
exports.ResearchVO = __s0local0;
__s0local0.__initialize_static_members();
