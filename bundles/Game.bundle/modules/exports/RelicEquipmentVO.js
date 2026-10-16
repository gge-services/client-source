Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __s0local0 = function (__s1param0) {
  function RelicEquipmentVO(__s3param0 = -1) {
    var __s3local0 = this;
    __s3local0._relicInfoVO = new __dep_export_RelicItemInfoVO.RelicItemInfoVO();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._rarity = __dep_export_BasicEquipmentVO.BasicEquipmentVO.RARITY_RELIC;
    __s3local0._rareID = __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RELIC;
    __s3local0._visualRareID = __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RELIC;
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
    __s3local0._visClassName = __s3local0.setVisClassName();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicEquipmentVO, __s1param0);
  RelicEquipmentVO.prototype.setVisClassName = function () {
    if (this.relicInfoVO.isRelicDefined()) {
      return __dep_export_CollectableItemRelicVE.CollectableItemRelicVE.ASSET_PREFIX + "_" + this.lordTypeId + "_" + this.slotTypeId + "_" + this.relicInfoVO.relicCategoryId;
    } else {
      return __dep_export_CollectableItemRelicVE.CollectableItemRelicVE.ASSET_PREFIX + "_" + this.slotType;
    }
  };
  RelicEquipmentVO.prototype.parseEquipFromArray = function (__s11param0) {
    __s1param0.prototype.parseEquipFromArray.call(this, __s11param0);
    this.relicInfoVO.parseRelicBoni(__s11param0[5]);
    if (__s11param0.length >= 13) {
      var __s11local0 = __s11param0[12];
      this.relicInfoVO.relicTypeId = __s11local0[0];
      this.relicInfoVO.relicCategoryId = __s11local0[1];
      this.relicInfoVO.mightValue = __s11local0[2];
      if (__s11local0[3] && __s11local0[3].length > 0) {
        var __s11local1 = new __dep_export_RelicGemVO.RelicGemVO();
        this._gemVO = __s11local1;
        __s11local1.parseServerObject(__s11local0[3]);
      } else {
        this._gemVO = null;
      }
    }
    this._visClassName = this.setVisClassName();
  };
  RelicEquipmentVO.prototype.getFilePath = function () {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.relicInfoVO.isRelicDefined() ? this._visClassName : __dep_export_CollectableItemRelicVE.CollectableItemRelicVE.ASSET_FILE_NAME_UNDEFINED);
  };
  Object.defineProperty(RelicEquipmentVO.prototype, "nameString", {
    get: function () {
      if (this.relicInfoVO.isRelicDefined()) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_tier" + this.relicInfoVO.relicCategoryId + "_slot" + this.slotTypeId + "_name");
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_slot" + this.slotTypeId + "_name_undefined");
      }
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "nameString").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentVO.prototype.getDescriptionText = function () {
    var __s24local0 = [];
    __s24local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_category_relic" + this.slotType));
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
  Object.defineProperty(RelicEquipmentVO.prototype, "canSlotGem", {
    get: function () {
      return this.slotTypeId != __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HERO;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "canSlotGem").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentVO.prototype, "typeDescriptionText", {
    get: function () {
      return this.getDescriptionText();
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "typeDescriptionText").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentVO.prototype, "bonusDescriptionText", {
    get: function () {
      var __s37local0 = "";
      var __s37local1 = this.relicInfoVO.getCategorisedEffectsDefined();
      if (__s37local1 != null) {
        for (var __s37local2 = 0, __s37local3 = __s37local1; __s37local2 < __s37local3.length; __s37local2++) {
          var __s37local4 = __s37local3[__s37local2];
          if (__s37local4 !== undefined) {
            for (var __s37local5 = 0, __s37local6 = __s37local4.effects; __s37local5 < __s37local6.length; __s37local5++) {
              var __s37local7 = __s37local6[__s37local5];
              if (__s37local7 !== undefined) {
                __s37local0 += __s37local7.descriptionText + "\n";
              }
            }
          }
        }
      }
      return __s37local0;
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicEquipmentVO.BasicEquipmentVO.prototype, "bonusDescriptionText").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentVO.prototype.getSellPrice = function () {
    var __s48local0 = this.relicInfoVO.getSellPrice();
    var __s48local1 = this.gemVO;
    if (__s48local1) {
      __s48local0.amount += __dep_exact_f855840627e6e145.int(__s48local1.relicInfoVO.getSellPrice().amount);
    }
    return __s48local0;
  };
  Object.defineProperty(RelicEquipmentVO.prototype, "relicInfoVO", {
    get: function () {
      return this._relicInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEquipmentVO;
}(__dep_export_BasicEquipmentVO.BasicEquipmentVO);
exports.RelicEquipmentVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEquippableVO", "IRelicInfoVO");
var __dep_export_CollectableItemRelicVE = require("gge-module:export_CollectableItemRelicVE");
var __dep_export_RelicGemVO = require("gge-module:export_RelicGemVO");
var __dep_export_RelicItemInfoVO = require("gge-module:export_RelicItemInfoVO");
