Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __s0local0 = function (__s1param0) {
  function CollectableItemRelicVO() {
    var __s3local0 = this;
    __s3local0._type = CollectableItemRelicVO.TYPE_ALL;
    __s3local0.predefinedMinRating = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemRelicVO, __s1param0);
  CollectableItemRelicVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    if (Array.isArray(__s5param0)) {
      var __s5local0 = __s5param0;
      this.parseBluePrintId(__s5local0[0]);
      if (__s5local0.length > 3 && __s5local0[3].length > 0) {
        this.parsePredefinedEffectIds(__s5local0[3]);
      }
      this.parseMinMaxValue(__s5local0[1], __s5local0[2]);
      this.predefinedMinRating = __dep_exact_f855840627e6e145.int(__s5local0[1]);
    } else if (__s5param0.GEM) {
      var __s5local1 = new __dep_export_RelicGemVO.RelicGemVO();
      __s5local1.parseServerObject(__s5param0.GEM);
      this._vo = __s5local1;
      this._type = CollectableItemRelicVO.TYPE_GEM;
    } else if (__s5param0.EQ) {
      var __s5local2 = new __dep_export_RelicEquipmentVO.RelicEquipmentVO();
      __s5local2.parseEquipFromArray(__s5param0.EQ);
      this._vo = __s5local2;
      this._type = CollectableItemRelicVO.TYPE_EQUIPMENT;
    }
  };
  CollectableItemRelicVO.prototype.parseXmlObject = function (__s11param0) {
    var __s11local0 = __s11param0.split("@");
    this.parseBluePrintId(parseInt(__s11local0[0]));
    if (__s11local0.length > 2) {
      this.parsePredefinedEffectIds(__s11local0[2].split(","));
    }
    var __s11local1 = __s11local0[1].split(",");
    var __s11local2 = parseInt(__s11local1[0]);
    this.predefinedMinRating = __s11local2;
    var __s11local3 = parseInt(__s11local1[1]);
    this.parseMinMaxValue(__s11local2, __s11local3);
  };
  CollectableItemRelicVO.prototype.parseMinMaxValue = function (__s14param0, __s14param1) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._vo, "RelicEquipmentVO")) {
      this.vo.relicInfoVO.predefinedMinRating = __s14param0;
      this.vo.relicInfoVO.predefinedMaxRating = __s14param1;
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._vo, "RelicGemVO")) {
      this.vo.relicInfoVO.predefinedMinRating = __s14param0;
      this.vo.relicInfoVO.predefinedMaxRating = __s14param1;
    }
  };
  CollectableItemRelicVO.prototype.parseBluePrintId = function (__s18param0) {
    if (__s18param0 >= 0) {
      var __s18local0 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getBluePrint(__s18param0);
      var __s18local1 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicType(__s18local0.relicTypeId);
      this._type = __s18local1.isGem ? CollectableItemRelicVO.TYPE_GEM : CollectableItemRelicVO.TYPE_EQUIPMENT;
      if (this.type == CollectableItemRelicVO.TYPE_EQUIPMENT) {
        this.vo = new __dep_export_RelicEquipmentVO.RelicEquipmentVO(__s18param0);
      } else if (this.type == CollectableItemRelicVO.TYPE_GEM) {
        this.vo = new __dep_export_RelicGemVO.RelicGemVO(__s18param0);
      }
    } else {
      this._type = CollectableItemRelicVO.TYPE_ALL;
      this._vo = null;
    }
  };
  CollectableItemRelicVO.prototype.parsePredefinedEffectIds = function (__s24param0) {
    if (this.vo && __s24param0 != null) {
      for (var __s24local0 = 0, __s24local1 = __s24param0; __s24local0 < __s24local1.length; __s24local0++) {
        var __s24local2 = __s24local1[__s24local0];
        if (__s24local2 !== undefined) {
          var __s24local3 = parseInt(__s24local2);
          if (this.type == CollectableItemRelicVO.TYPE_EQUIPMENT) {
            this.vo.relicInfoVO.predefinedEffectIds.push(__s24local3);
          } else if (this.type == CollectableItemRelicVO.TYPE_GEM) {
            this.vo.relicInfoVO.predefinedEffectIds.push(__s24local3);
          }
        }
      }
    }
  };
  CollectableItemRelicVO.prototype.clone = function () {
    var __s32local0 = __s1param0.prototype.clone.call(this);
    __s32local0.vo = this.vo;
    __s32local0.predefinedMinRating = this.predefinedMinRating;
    return __s32local0;
  };
  CollectableItemRelicVO.prototype.equals = function (__s34param0) {
    return __s1param0.prototype.equals.call(this, __s34param0) && this.vo == __s34param0.vo;
  };
  CollectableItemRelicVO.prototype.isRelicDefined = function () {
    if (this.vo) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.vo, "RelicEquipmentVO")) {
        return this.vo.relicInfoVO.isRelicDefined();
      }
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.vo, "RelicGemVO")) {
        return this.vo.relicInfoVO.isRelicDefined();
      }
    }
    return false;
  };
  CollectableItemRelicVO.prototype.getBluePrintVO = function () {
    if (this.vo) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.vo, "RelicEquipmentVO")) {
        return this.vo.relicInfoVO.bluePrintVO;
      }
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.vo, "RelicGemVO")) {
        return this.vo.relicInfoVO.bluePrintVO;
      }
    }
    return null;
  };
  CollectableItemRelicVO.prototype.getTooltipTextId = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.vo, "BasicEquippableVO")) {
      return this.vo.nameString;
    } else {
      return "relicequip_dialog_randomRelic_name";
    }
  };
  CollectableItemRelicVO.prototype.getDescriptionTextId = function () {
    var __s50local0 = "";
    if (this.vo) {
      __s50local0 = (__dep_exact_81dacdf05bd32292.instanceOfClass(this.vo, "RelicGemVO") ? __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_" + __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(this.vo.lordType) + "_desc") : __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_dialog_" + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(this.vo.slotType) + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(this.vo.lordType) + "_desc")) + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text((this.isRelicDefined(), "relicequip_undefined_short_info"));
    } else {
      __s50local0 = __dep_exact_92d05af59ee2ff30.Localize.text("relicequip_random_short_info");
    }
    return __s50local0;
  };
  CollectableItemRelicVO.prototype.isCombineAbleWith = function (__s54param0) {
    return false;
  };
  CollectableItemRelicVO.prototype.getSlotType = function () {
    if (this.vo) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.vo, "RelicGemVO")) {
        return __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM;
      } else {
        return this.vo.slotType;
      }
    }
    var __s56local0 = this.getBluePrintVO();
    if (__s56local0) {
      var __s56local1 = __dep_export_CastleModel.CastleModel.equipData.relicXml.getRelicType(__s56local0.relicTypeId);
      if (__s56local1) {
        if (__s56local1.isGem) {
          return __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM;
        } else {
          return __dep_export_BasicEquippableVO.BasicEquippableVO.getSlotType(__s56local1.slotId);
        }
      }
    }
    return __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ALL;
  };
  CollectableItemRelicVO.prototype.getId = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._vo, "RelicEquipmentVO")) {
      return __dep_exact_f855840627e6e145.int(this._vo.id);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._vo, "RelicGemVO")) {
      return __dep_exact_f855840627e6e145.int(this._vo.id);
    } else {
      return -1;
    }
  };
  CollectableItemRelicVO.prototype.getEnchantmentLevel = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._vo, "RelicEquipmentVO")) {
      return __dep_exact_f855840627e6e145.int(this._vo.enchantmentLevel);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._vo, "RelicGemVO")) {
      return __dep_exact_f855840627e6e145.int(this._vo.enchantmentLevel);
    } else {
      return 0;
    }
  };
  Object.defineProperty(CollectableItemRelicVO.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    set: function (__s77param0) {
      this._vo = __s77param0;
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._vo, "RelicEquipmentVO")) {
        this._type = CollectableItemRelicVO.TYPE_EQUIPMENT;
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this._vo, "RelicGemVO")) {
        this._type = CollectableItemRelicVO.TYPE_GEM;
      } else {
        this._type = CollectableItemRelicVO.TYPE_ALL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemRelicVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemRelicVO.prototype.getSearchString = function () {
    var __s84local0 = "";
    if (this.vo) {
      __s84local0 += this.vo.nameString;
      __s84local0 += this.vo.typeDescriptionText;
      __s84local0 += this.vo.bonusDescriptionText;
      if (this.vo instanceof __dep_export_RelicEquipmentVO.RelicEquipmentVO && this.vo.gemVO) {
        __s84local0 += this.vo.gemVO.bonusDescriptionText;
      }
      if (this.vo.setVO) {
        __s84local0 += this.vo.setVO.name;
      }
    }
    return __s84local0;
  };
  CollectableItemRelicVO.SERVER_KEY = "RI";
  CollectableItemRelicVO.XML_KEY = "relicEquipments";
  CollectableItemRelicVO.TYPE_ALL = "all";
  CollectableItemRelicVO.TYPE_EQUIPMENT = "equipment";
  CollectableItemRelicVO.TYPE_GEM = "gem";
  return CollectableItemRelicVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemRelicVO = __s0local0;
var __dep_export_RelicEquipmentVO = require("gge-module:export_RelicEquipmentVO");
var __dep_export_RelicGemVO = require("gge-module:export_RelicGemVO");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
