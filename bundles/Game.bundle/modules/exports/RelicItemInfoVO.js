Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_RelicEquipmentInfoEffectCategoryVO = require("gge-module:export_RelicEquipmentInfoEffectCategoryVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_RelicBonusVO = require("gge-module:export_RelicBonusVO");
var __dep_export_XmlRelicEffectVO = require("gge-module:export_XmlRelicEffectVO");
var __s0local0 = function () {
  function RelicItemInfoVO() {
    this.relicTypeId = 0;
    this.relicCategoryId = 0;
    this.mightValue = 0;
    this.relicBoni = [];
    this.predefinedEffectIds = [];
    this._predefinedMinRating = -1;
    this._predefinedMaxRating = -1;
  }
  RelicItemInfoVO.prototype.parseRelicBoni = function (__s5param0) {
    this.relicBoni = [];
    if (__s5param0) {
      if (__s5param0 != null) {
        for (var __s5local0 = 0, __s5local1 = __s5param0; __s5local0 < __s5local1.length; __s5local0++) {
          var __s5local2 = __s5local1[__s5local0];
          if (__s5local2 !== undefined) {
            var __s5local3 = new __dep_export_RelicBonusVO.RelicBonusVO();
            __s5local3.parseRelicFromValueArray(__s5local2);
            this.relicBoni.push(__s5local3);
          }
        }
      }
      this.relicBoni.sort(__dep_export_ClientConstSort.ClientConstSort.sortRelicBoni);
    }
  };
  RelicItemInfoVO.prototype.getCategoryEffects = function (__s12param0, __s12param1, __s12param2) {
    var __s12local0;
    var __s12local1;
    if (__s12param2 === undefined) {
      __s12param2 = false;
    }
    if (__s12param1 != null) {
      for (var __s12local2 = 0, __s12local3 = __s12param1; __s12local2 < __s12local3.length; __s12local2++) {
        var __s12local4 = __s12local3[__s12local2];
        if (__s12local4 !== undefined && __s12local4.relicEffectVO.effectType == __s12param0) {
          __s12local0 ||= [];
          __s12local0.push(__s12local4);
        }
      }
    }
    if (__s12local0 && __s12local0.length > 0 || __s12param2) {
      (__s12local1 = new __dep_export_RelicEquipmentInfoEffectCategoryVO.RelicEquipmentInfoEffectCategoryVO()).categoryType = __s12param0;
      __s12local1.effects = __s12local0 || [];
    }
    return __s12local1;
  };
  RelicItemInfoVO.prototype.getCategorisedEffectsDefined = function () {
    var __s20local0 = [];
    for (var __s20local1 = 0, __s20local2 = __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_SORT_ORDER; __s20local1 < __s20local2.length; __s20local1++) {
      var __s20local3 = __s20local2[__s20local1];
      if (__s20local3 !== undefined) {
        var __s20local4 = this.getCategoryEffects(__s20local3, this.relicBoni);
        if (__s20local4) {
          __s20local0.push(__s20local4);
        }
      }
    }
    return __s20local0;
  };
  RelicItemInfoVO.prototype.getCategorisedEffectsUndefined = function () {
    var __s26local0 = [];
    for (var __s26local1 = 0, __s26local2 = this.bluePrintVO.baseRelicEffectIds; __s26local1 < __s26local2.length; __s26local1++) {
      var __s26local3 = __s26local2[__s26local1];
      if (__s26local3 !== undefined) {
        var __s26local4 = new __dep_export_RelicBonusVO.RelicBonusVO();
        __s26local4.parseRelicFromValueArray([__s26local3, 0, 0]);
        __s26local4.predefinedMinRating = this._predefinedMinRating;
        __s26local4.predefinedMaxRating = this._predefinedMaxRating;
        __s26local0.push(__s26local4);
      }
    }
    for (var __s26local5 = 0, __s26local6 = this.predefinedEffectIds; __s26local5 < __s26local6.length; __s26local5++) {
      __s26local3 = __s26local6[__s26local5];
      (__s26local4 = new __dep_export_RelicBonusVO.RelicBonusVO()).parseRelicFromValueArray([__s26local3, 0, 0]);
      __s26local4.predefinedMinRating = this._predefinedMinRating;
      __s26local4.predefinedMaxRating = this._predefinedMaxRating;
      __s26local0.push(__s26local4);
    }
    if (this.bluePrintVO.specialAmount > 0) {
      var __s26local7;
      if (this.bluePrintVO.specialRelicEffectListId >= 0) {
        if (__dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicEffectList(this.bluePrintVO.specialRelicEffectListId)) {
          var __s26local8 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicEffectList(this.bluePrintVO.specialRelicEffectListId).relicEffectIds;
          if (__s26local8 && __s26local8.length > 0) {
            __s26local7 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicEffect(__s26local8[0]).effectType;
          }
        }
      }
      if (!__s26local7 || __s26local7 == "") {
        __s26local7 = __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_UNIT_TOOL;
      }
    }
    var __s26local9 = [];
    __s26local9.push(__dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_NORMAL);
    if (__s26local7 != null && __s26local7 != "") {
      __s26local9.push(__s26local7);
    }
    var __s26local10 = [];
    if (__s26local9 != null) {
      for (var __s26local11 = 0, __s26local12 = __s26local9; __s26local11 < __s26local12.length; __s26local11++) {
        var __s26local13 = __s26local12[__s26local11];
        if (__s26local13 !== undefined) {
          var __s26local14 = this.getCategoryEffects(__s26local13, __s26local0, true);
          if (__s26local14) {
            __s26local14.numberOfUnknownEffects = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.max((__s26local13 == __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_NORMAL ? this.bluePrintVO.normalAmount : this.bluePrintVO.specialAmount) - __s26local14.effects.length, 0));
            __s26local10.push(__s26local14);
          }
        }
      }
    }
    return __s26local10;
  };
  RelicItemInfoVO.getSellPriceTextByInfoVO = function (__s44param0, __s44param1) {
    if (__s44param0.isRelicDefined()) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_sellValue_name", [__s44param1]);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_sellValue_range_name", [__dep_exact_26a421b704832cff.RelicItemConst.calculateFragmentSellMinValue(), __s44param0.bluePrintVO ? __dep_exact_26a421b704832cff.RelicItemConst.calculateFragmentSellMaxValue(__s44param0.bluePrintVO.normalAmount) : __s44param0.predefinedEffectIds.length]);
    }
  };
  RelicItemInfoVO.prototype.getSellPriceText = function () {
    return RelicItemInfoVO.getSellPriceTextByInfoVO(this, this.getSellPrice().amount);
  };
  RelicItemInfoVO.prototype.isRelicDefined = function () {
    return this.bluePrintVO == null && this.relicTypeId >= 0 && this.relicCategoryId >= 0;
  };
  RelicItemInfoVO.prototype.getSellPrice = function () {
    return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_exact_26a421b704832cff.EffectConst.applyBoostToValueRoundingWithCeil(__dep_export_CastleModel.CastleModel.equipData.relicFragmentBoost, __dep_exact_26a421b704832cff.RelicItemConst.calculateFragmentSellValue(this.mightValue)), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS);
  };
  Object.defineProperty(RelicItemInfoVO.prototype, "predefinedMinRating", {
    set: function (__s54param0) {
      this._predefinedMinRating = __s54param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicItemInfoVO.prototype, "predefinedMaxRating", {
    set: function (__s56param0) {
      this._predefinedMaxRating = __s56param0;
    },
    enumerable: true,
    configurable: true
  });
  return RelicItemInfoVO;
}();
exports.RelicItemInfoVO = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
