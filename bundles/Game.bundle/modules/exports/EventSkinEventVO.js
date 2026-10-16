Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __dep_export_EventSkinColorsDefault = require("gge-module:export_EventSkinColorsDefault");
var __dep_export_EventSkinColorsHalloween = require("gge-module:export_EventSkinColorsHalloween");
var __dep_export_EventSkinColorsWinter = require("gge-module:export_EventSkinColorsWinter");
var __dep_export_EventSkinColorsWinterOffensive = require("gge-module:export_EventSkinColorsWinterOffensive");
var __s0local0 = function (__s1param0) {
  function EventSkinEventVO() {
    var __s3local0 = this;
    __s3local0._theme = -1;
    __s3local0._hasIsoSkin = false;
    __s3local0._hasWorldMapSkin = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventSkinEventVO, __s1param0);
  EventSkinEventVO.prototype.parseBasicsFromParamObject = function (__s5param0) {
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s5param0);
    this._theme = __dep_exact_f855840627e6e145.int(__s5param0.T);
  };
  EventSkinEventVO.prototype.parseAdditionalXmlFromRoot = function (__s7param0) {
    if (!(this._theme < 0)) {
      var __s7local0 = EventSkinEventVO.getDestXmlNodeFromSkinId(__s7param0, this._theme);
      if (__s7local0) {
        var __s7local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("kIDs", __s7local0, "0").split(",");
        this._kingdomIDs = [];
        for (var __s7local2 = 0; __s7local2 < __s7local1.length; __s7local2++) {
          this._kingdomIDs[__s7local2] = parseInt(__s7local1[__s7local2]);
        }
        this._skinString = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventType", __s7local0, "");
        this._hasIsoSkin = __dep_export_ClientConstUtils.ClientConstUtils.getBooleanFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hasIsoSkin", __s7local0, "0"));
        this._hasWorldMapSkin = __dep_export_ClientConstUtils.ClientConstUtils.getBooleanFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hasWorldMapSkin", __s7local0, "0"));
        this._minLevel = 0;
        this.createEventColorScheme();
      }
    }
  };
  EventSkinEventVO.getDestXmlNodeFromSkinId = function (__s13param0, __s13param1) {
    var __s13local0 = __s13param0.eventSkins;
    if (__s13local0 != null) {
      for (var __s13local1 = 0, __s13local2 = __s13local0; __s13local1 < __s13local2.length; __s13local1++) {
        var __s13local3 = __s13local2[__s13local1];
        if (__s13local3 !== undefined && __s13param1 == parseInt(__s13local3.eventSkinID || "")) {
          return __s13local3;
        }
      }
    }
    return null;
  };
  EventSkinEventVO.prototype.createEventColorScheme = function () {
    switch (this._skinString) {
      case EventSkinEventVO.SKIN_TYPE_WINTER:
        this.skinEventColors = new __dep_export_EventSkinColorsWinter.EventSkinColorsWinter();
        break;
      case EventSkinEventVO.SKIN_TYPE_HALLOWEEN:
        this.skinEventColors = new __dep_export_EventSkinColorsHalloween.EventSkinColorsHalloween();
        break;
      case EventSkinEventVO.SKIN_TYPE_WINTER_OFFENSIVE:
        this.skinEventColors = new __dep_export_EventSkinColorsWinterOffensive.EventSkinColorsWinterOffensive();
        break;
      default:
        this.skinEventColors = new __dep_export_EventSkinColorsDefault.EventSkinColorsDefault();
    }
  };
  EventSkinEventVO.prototype.onDestroy = function () {
    this.refreshWorldMap();
  };
  Object.defineProperty(EventSkinEventVO.prototype, "theme", {
    get: function () {
      return this._theme;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventSkinEventVO.prototype, "skinString", {
    get: function () {
      return this._skinString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventSkinEventVO.prototype, "hasIsoSkin", {
    get: function () {
      return this._hasIsoSkin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventSkinEventVO.prototype, "hasWorldMapSkin", {
    get: function () {
      return this._hasWorldMapSkin;
    },
    enumerable: true,
    configurable: true
  });
  EventSkinEventVO.prototype.getBackgroundColor = function (__s32param0, __s32param1) {
    if (__s32param1) {
      return this.skinEventColors.getIsoBackgroundColor(__s32param0);
    } else {
      return this.skinEventColors.getWorldmapBackgroundColor(__s32param0);
    }
  };
  EventSkinEventVO.prototype.canUseIsoSkin = function () {
    return !!__dep_export_Iso.Iso.data && !!__dep_export_Iso.Iso.data.areaData && this.kingdomIDs.indexOf(__dep_export_Iso.Iso.data.areaData.areaInfo.kingdomID) >= 0 && this.hasIsoSkin && __dep_export_CastleModel.CastleModel.userData.userLevel >= this.minLevel && __dep_export_CastleModel.CastleModel.userData.userLevel <= this.maxLevel;
  };
  EventSkinEventVO.SKIN_TYPE_WINTER = "Winter";
  EventSkinEventVO.SKIN_TYPE_HALLOWEEN = "Halloween";
  EventSkinEventVO.SKIN_TYPE_CHRISTMAS = "Christmas";
  EventSkinEventVO.SKIN_TYPE_WINTER_OFFENSIVE = "WinterOffensive";
  return EventSkinEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.EventSkinEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
var __dep_export_Iso = require("gge-module:export_Iso");
