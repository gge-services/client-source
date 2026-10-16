Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_ADecoBuildingVO = require("gge-module:export_ADecoBuildingVO");
var __s0local0 = function (__s1param0) {
  function CustomDecoBuildingVO() {
    var __s3local0 = this;
    __s3local0._customDecoPoints = 0;
    __s3local0._customId = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CustomDecoBuildingVO, __s1param0);
  CustomDecoBuildingVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this._customDecoPoints = __dep_exact_f855840627e6e145.int(__s5param0.length > 0 ? __s5param0.shift() : 0);
  };
  CustomDecoBuildingVO.prototype.parseServerInfoShort = function (__s7param0) {
    __s1param0.prototype.parseServerInfoShort.call(this, __s7param0);
    this._customDecoPoints = __dep_exact_f855840627e6e145.int(__s7param0.DP);
  };
  CustomDecoBuildingVO.prototype.cloneFrom = function (__s9param0) {
    __s1param0.prototype.cloneFrom.call(this, __s9param0);
    var __s9local0 = __s9param0;
    if (__s9local0) {
      this._customDecoPoints = __s9local0._customDecoPoints;
      this._customId = __s9local0._customId;
    }
  };
  CustomDecoBuildingVO.prototype.getNameString = function () {
    var __s12local0 = this.isoData ? this.isoData.areaData.areaInfo.ownerInfo.playerName : __dep_export_Iso.Iso.data.areaData.areaInfo.ownerInfo.playerName;
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.name.toLowerCase() + "_" + this.type.toLowerCase() + "_name", [__s12local0]);
  };
  CustomDecoBuildingVO.prototype.getShortInfoString = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("deco_short_info");
  };
  CustomDecoBuildingVO.prototype.getVisualClassName = function () {
    var __s16local0 = this.name + "_" + this.group + "_" + this.type;
    if (this.type == "Colossus" || this.type == "ColossusRider" || this.type == "CoinColossus") {
      return __s16local0 + "_Size" + String(__dep_export_ClientConstEvent.ClientConstEvent.getColossusSize(this.decoPoints, this.wodId));
    } else {
      return __s16local0;
    }
  };
  Object.defineProperty(CustomDecoBuildingVO.prototype, "decoPoints", {
    get: function () {
      return this._customDecoPoints;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADecoBuildingVO.ADecoBuildingVO.prototype, "decoPoints").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  CustomDecoBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return "";
  };
  CustomDecoBuildingVO.prototype.isFusionRelevant = function () {
    return false;
  };
  Object.defineProperty(CustomDecoBuildingVO.prototype, "uniqueBuildingId", {
    get: function () {
      return this._customId;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ADecoBuildingVO.ADecoBuildingVO.prototype, "uniqueBuildingId").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  CustomDecoBuildingVO.prototype.isUnique = function () {
    return true;
  };
  CustomDecoBuildingVO.prototype.createInfoPanelItems = function (__s34param0) {
    if (this.morality > 0) {
      __s34param0.addInfoItem(Library.CastleInterfaceElements.Icon_Morality, "morality", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.morality), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    } else {
      __s34param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  Object.defineProperty(CustomDecoBuildingVO.prototype, "customDecoPoints", {
    set: function (__s38param0) {
      this._customDecoPoints = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CustomDecoBuildingVO.prototype, "customId", {
    set: function (__s40param0) {
      this._customId = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  return CustomDecoBuildingVO;
}(__dep_export_ADecoBuildingVO.ADecoBuildingVO);
exports.CustomDecoBuildingVO = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");
