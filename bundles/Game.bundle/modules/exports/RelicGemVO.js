Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_RelicBonusVO = require("gge-module:export_RelicBonusVO");
var __s0local0 = function (__s1param0) {
  function RelicGemVO(__s3param0 = -1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._relicInfoVO = new __dep_export_RelicItemInfoVO.RelicItemInfoVO();
    __s3local0._id = NaN;
    __s3local0._enchantmentLevel = 0;
    __s3local0.relicInfoVO.relicTypeId = -1;
    __s3local0.relicInfoVO.relicCategoryId = -1;
    __s3local0.relicInfoVO.mightValue = 0;
    __s3local0._enchantmentLevel = 0;
    if (__s3param0 >= 0) {
      __s3local0.relicInfoVO.bluePrintVO = __dep_export_CastleModel.CastleModel.equipData.relicXml.getBluePrint(__s3param0);
      __s3local0.relicInfoVO.relicTypeId = __s3local0.relicInfoVO.bluePrintVO.relicTypeId;
      var __s3local1 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicType(__s3local0.relicInfoVO.bluePrintVO.relicTypeId);
      __s3local0._slotType = __dep_export_BasicEquippableVO.BasicEquippableVO.getSlotType(__s3local1.slotId);
      __s3local0._slotTypeId = __s3local1.slotId;
      __s3local0._lordType = __dep_export_BasicEquippableVO.BasicEquippableVO.getLordType(__s3local1.wearerId);
      __s3local0._lordTypeId = __s3local1.wearerId;
    } else {
      __s3local0.relicInfoVO.relicTypeId = -1;
      __s3local0._slotType = __dep_export_BasicEquippableVO.BasicEquippableVO.getSlotType(__s3local0._slotTypeId = -1);
      __s3local0._lordType = __dep_export_BasicEquippableVO.BasicEquippableVO.getLordType(__s3local0._lordTypeId = -1);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicGemVO, __s1param0);
  RelicGemVO.prototype.parseServerObject = function (__s7param0) {
    var __s7local0 = __s7param0;
    if (__s7local0) {
      this._id = __s7local0[0];
      this.relicInfoVO.relicTypeId = __s7local0[1];
      this.relicInfoVO.relicCategoryId = __s7local0[2];
      this.relicInfoVO.mightValue = __s7local0[3];
      this._enchantmentLevel = __dep_exact_f855840627e6e145.int(__s7local0[5]);
      if (__s7local0.length > 4) {
        this.relicInfoVO.parseRelicBoni(__s7local0[4]);
      }
      var __s7local1 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicType(this.relicInfoVO.relicTypeId);
      this._slotType = __dep_export_BasicEquippableVO.BasicEquippableVO.getSlotType(__s7local1.slotId);
      this._slotTypeId = __s7local1.slotId;
      this._lordType = __dep_export_BasicEquippableVO.BasicEquippableVO.getLordType(__s7local1.wearerId);
      this._lordTypeId = __s7local1.wearerId;
    }
  };
  RelicGemVO.prototype.parseRelicBoni = function (__s11param0) {
    var __s11local0 = [];
    if (__s11param0) {
      if (__s11param0 != null) {
        for (var __s11local1 = 0, __s11local2 = __s11param0; __s11local1 < __s11local2.length; __s11local1++) {
          var __s11local3 = __s11local2[__s11local1];
          if (__s11local3 !== undefined) {
            var __s11local4 = new __dep_export_RelicBonusVO.RelicBonusVO();
            __s11local4.parseRelicFromValueArray(__s11local3);
            __s11local0.push(__s11local4);
          }
        }
      }
      __s11local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortRelicBoni);
    }
    return __s11local0;
  };
  Object.defineProperty(RelicGemVO.prototype, "nameString", {
    get: function () {
      if (this.relicInfoVO.isRelicDefined()) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_tier" + this.lordTypeId + "_slot" + (this.id % 4 + 7) + "_name");
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_gem_name_undefined");
      }
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "nameString").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  RelicGemVO.prototype.getDescriptionText = function () {
    var __s24local0 = [];
    __s24local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_category_relicGem"));
    __s24local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("equipment_itemType_" + __dep_export_ClientConstUtils.ClientConstUtils.lowercaseFirstLetter(this.lordType)));
    if (this.relicInfoVO.relicTypeId >= 0) {
      var __s24local1 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicType(this.relicInfoVO.relicTypeId).name;
      if (__s24local1 != "") {
        __s24local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_category_" + __s24local1));
      }
    } else {
      __s24local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_category_relic"));
    }
    __s24local0.push(__dep_exact_92d05af59ee2ff30.Localize.text(this.relicInfoVO.isRelicDefined() ? "relicequip_dialog_category_defined" : "relicequip_dialog_category_undefined"));
    return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_category_placeholder_" + __s24local0.length, __s24local0);
  };
  Object.defineProperty(RelicGemVO.prototype, "typeDescriptionText", {
    get: function () {
      return this.getDescriptionText();
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "typeDescriptionText").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicGemVO.prototype, "bonusDescriptionText", {
    get: function () {
      var __s33local0 = "";
      var __s33local1 = this.relicInfoVO.getCategorisedEffectsDefined();
      if (__s33local1 != null) {
        for (var __s33local2 = 0, __s33local3 = __s33local1; __s33local2 < __s33local3.length; __s33local2++) {
          var __s33local4 = __s33local3[__s33local2];
          if (__s33local4 !== undefined) {
            for (var __s33local5 = 0, __s33local6 = __s33local4.effects; __s33local5 < __s33local6.length; __s33local5++) {
              var __s33local7 = __s33local6[__s33local5];
              if (__s33local7 !== undefined) {
                __s33local0 += __s33local7.descriptionText + "\n";
              }
            }
          }
        }
      }
      return __s33local0;
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "bonusDescriptionText").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  RelicGemVO.prototype.getAssetClipName = function () {
    if (this.relicInfoVO.isRelicDefined()) {
      return "Relic_Gem_" + this.lordTypeId + "_" + (this.id % 4 + 7) + "_" + this.relicInfoVO.relicCategoryId;
    } else {
      return __dep_export_CollectableItemRelicVE.CollectableItemRelicVE.ASSET_PREFIX + "_" + __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM;
    }
  };
  Object.defineProperty(RelicGemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (__s50param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquippableVO.BasicEquippableVO.prototype, "id").set.call(this, __s50param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicGemVO.prototype, "relicInfoVO", {
    get: function () {
      return this._relicInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicGemVO.prototype, "enchantmentLevel", {
    get: function () {
      return this._enchantmentLevel;
    },
    enumerable: true,
    configurable: true
  });
  return RelicGemVO;
}(__dep_export_BasicEquippableVO.BasicEquippableVO);
exports.RelicGemVO = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CollectableItemRelicVE = require("gge-module:export_CollectableItemRelicVE");
var __dep_export_RelicItemInfoVO = require("gge-module:export_RelicItemInfoVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEquippableVO", "IRelicInfoVO");
