Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EquipmentBonusVO = require("gge-module:export_EquipmentBonusVO");
var __dep_export_LordVO = require("gge-module:export_LordVO");
var __s0local0 = function (__s1param0) {
  function DefaultLordVO() {
    var __s3local0 = this;
    __s3local0._effects = [];
    __s3local0._minLevel = 0;
    __s3local0._maxLevel = 0;
    __s3local0._shownLevel = 0;
    __s3local0._generalID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DefaultLordVO, __s1param0);
  DefaultLordVO.prototype.parseFromXml = function (__s5param0, __s5param1 = true) {
    var __s5local0 = __s5param0.effects || "";
    if (__s5local0 != "" && __s5param1) {
      for (var __s5local1 = __s5local0.split(","), __s5local2 = 0; __s5local2 < __s5local1.length; __s5local2++) {
        var __s5local3 = __s5local1[__s5local2].split("&");
        var __s5local4 = new __dep_export_EquipmentBonusVO.EquipmentBonusVO().parseEquipmentFromValueString(parseInt(__s5local3[0]), __s5local3[1]);
        this._effects.push(__s5local4);
      }
    }
    this._type = __s5param0.type || "";
    this._id = parseInt(__s5param0.lordID || "");
    this._minLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minLevel", __s5param0, "-1"));
    this._maxLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxLevel", __s5param0, "-1"));
    this._shownLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shownLevel", __s5param0, "-1"));
    this._generalID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("generalID", __s5param0, "-1"));
  };
  DefaultLordVO.prototype.parseLord = function (__s10param0, __s10param1 = false) {
    this._rawLordEffects = this.parseRawEffects(__s10param0 ? __s10param0.E : null);
    this._areaEffects = this.parseRawEffects(__s10param0 ? __s10param0.AE : null);
    this.parseGeneral(__s10param0, __s10param1);
  };
  DefaultLordVO.prototype.getUniqueBoni = function (__s12param0 = false, __s12param1 = null, __s12param2 = -1, __s12param3 = null) {
    var __s12local0 = [];
    if (this._effects != null) {
      for (var __s12local1 = 0, __s12local2 = this._effects; __s12local1 < __s12local2.length; __s12local1++) {
        var __s12local3 = __s12local2[__s12local1];
        if (__s12local3 !== undefined && __s12local3.matchesConditions(__s12param1, __s12param2)) {
          __s12local0.push(__s12local3);
        }
      }
    }
    return __s12local0 = (__s12local0 = __s12local0.concat(this.checkConditions(this._rawLordEffects, __s12param1, __s12param2, __s12param3))).concat(this.checkConditions(this._areaEffects, __s12param1, __s12param2, __s12param3));
  };
  DefaultLordVO.prototype.getCountOfSetId = function (__s18param0) {
    return 0;
  };
  DefaultLordVO.prototype.hasUniqueItemEquipped = function (__s20param0) {
    return false;
  };
  Object.defineProperty(DefaultLordVO.prototype, "isAvailableForMovement", {
    get: function () {
      return true;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "isAvailableForMovement").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "isAvailableForEquip", {
    get: function () {
      return false;
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "isAvailableForEquip").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  DefaultLordVO.prototype.getFeatherClassName = function () {
    return "LordFeather_" + this._type;
  };
  DefaultLordVO.prototype.getVisClassName = function () {
    return "LordPic_" + this._type;
  };
  DefaultLordVO.prototype.getVisAsset = function () {
    return "Lord_Icons";
  };
  Object.defineProperty(DefaultLordVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "canUseEquipmentWarningIcon", {
    get: function () {
      return !this._type;
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "canUseEquipmentWarningIcon").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "name", {
    get: function () {
      if (this._type == __dep_export_CastleLordData.CastleLordData.DEFAULT_LORD_TYPE_PREMIUM) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("lord_name_general_unnamed_extra");
      } else if (this._name && this._name != "") {
        return Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "name").get.call(this);
      } else {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("lord_name_general_unnamed");
      }
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "name").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "shownLevel", {
    get: function () {
      return this._shownLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "generalID", {
    get: function () {
      return this._generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefaultLordVO.prototype, "isBaron", {
    get: function () {
      return this._type.indexOf("baron") > -1;
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "isBaron").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  DefaultLordVO.prototype.copyFromLord = function (__s63param0) {
    __s1param0.prototype.copyFromLord.call(this, __s63param0);
    var __s63local0 = __dep_exact_81dacdf05bd32292.castAs(__s63param0, "DefaultLordVO");
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s63local0, "DefaultLordVO")) {
      this._effects = __s63local0.effects;
      this._type = __s63local0.type;
      this._minLevel = __s63local0.minLevel;
      this._maxLevel = __s63local0.maxLevel;
      this._shownLevel = __s63local0.shownLevel;
      this._generalID = __s63local0.generalID;
    }
  };
  Object.defineProperty(DefaultLordVO.prototype, "assignedGeneralVO", {
    get: function () {
      if (this._assignedGeneralVO) {
        return this._assignedGeneralVO;
      } else if (this._generalID > 0) {
        return __dep_export_CastleModel.CastleModel.generalsData.npcGenerals.get(this._generalID);
      } else {
        return null;
      }
    },
    set: function (__s71param0) {
      Object.getOwnPropertyDescriptor(__dep_export_LordVO.LordVO.prototype, "assignedGeneralVO").set.call(this, __s71param0);
    },
    enumerable: true,
    configurable: true
  });
  return DefaultLordVO;
}(__dep_export_LordVO.LordVO);
exports.DefaultLordVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleLordData = require("gge-module:export_CastleLordData");
