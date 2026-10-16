Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_ASurroundingBuildingVO = require("gge-module:export_ASurroundingBuildingVO");
var __s0local0 = function (__s1param0) {
  function SlumSurroundingsVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._slumParts = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._name = "Slum";
    __s3local0._slumParts = __s3param1;
    if (__s3param1 != null) {
      for (var __s3local1 = 0, __s3local2 = __s3param1; __s3local1 < __s3local2.length; __s3local1++) {
        var __s3local3 = __s3local2[__s3local1];
        if (__s3local3 !== undefined) {
          __s3local3.parentVO = __s3local0;
        }
      }
    }
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER;
    __s3local0._posOffset = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SlumSurroundingsVO, __s1param0);
  SlumSurroundingsVO.prototype.init = function (__s9param0 = null) {
    __s1param0.prototype.init.call(this, __s9param0);
    if (this.slumParts != null) {
      for (var __s9local0 = 0, __s9local1 = this.slumParts; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          __s9local2.init(__s9param0);
        }
      }
    }
  };
  SlumSurroundingsVO.prototype.updateData = function () {
    if (this.slumParts != null) {
      for (var __s15local0 = 0, __s15local1 = this.slumParts; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.updateData();
        }
      }
    }
    __s1param0.prototype.updateData.call(this);
  };
  SlumSurroundingsVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_village_iso");
  };
  SlumSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    if (this.isClickAvailable) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this.slumLevel > 0 && this.slumLevel < 4 ? "clickToUpgrade" : "clickToOpen");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [__dep_export_CastleModel.CastleModel.areaData.activeArea.slum.slumLevel]);
    }
  };
  SlumSurroundingsVO.prototype.getInfoTooltipLine3 = function () {
    if (this.isClickAvailable) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("building_level", [__dep_export_CastleModel.CastleModel.areaData.activeArea.slum.slumLevel]);
    } else {
      return "";
    }
  };
  Object.defineProperty(SlumSurroundingsVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVO.prototype, "slumLevel", {
    get: function () {
      return this.slumData.slumLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVO.prototype, "kingdomId", {
    get: function () {
      return this.isoData.areaData.areaInfo.kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVO.prototype, "slumParts", {
    get: function () {
      return this._slumParts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVO.prototype, "slumData", {
    get: function () {
      return this.isoData.areaData.slum;
    },
    enumerable: true,
    configurable: true
  });
  return SlumSurroundingsVO;
}(__dep_export_ASurroundingBuildingVO.ASurroundingBuildingVO);
exports.SlumSurroundingsVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
