Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_AInteractiveIsoObjectVO = require("gge-module:export_AInteractiveIsoObjectVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ASurroundingBuildingVO() {
    var __s3local0 = this;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset = new __s0local0();
    __s3local0._minLevel = 0;
    __s3local0._maxLevel = 99;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._name = "";
    __s3local0._type = "";
    __s3local0._group = __dep_export_ClientConstCastle.ClientConstCastle.GROUP_SURROUNDINGS;
    __s3local0._width = 2;
    __s3local0._height = 2;
    __s3local0._rotation = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ASurroundingBuildingVO, __s1param0);
  ASurroundingBuildingVO.prototype.updateData = function () {
    this.updatePosition();
    __s1param0.prototype.updateData.call(this);
  };
  ASurroundingBuildingVO.prototype.updatePosition = function () {
    var __s7local0 = this.isoData.grid.origins.getOriginPos(this.posOrigin);
    this._x = __s7local0.x + this.posOffset.x;
    this._y = __s7local0.y + this.posOffset.y;
  };
  ASurroundingBuildingVO.prototype.isUserInLevelRange = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.userLevel);
    return __s9local0 >= this.minLevel && __s9local0 < this.maxLevel;
  };
  Object.defineProperty(ASurroundingBuildingVO.prototype, "canBeRotated", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "canBeRotated").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  ASurroundingBuildingVO.prototype.getInfoTooltipLine1 = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_name");
  };
  Object.defineProperty(ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return true;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isInfoTooltipAvailable").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isClickAvailable").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "posOrigin", {
    get: function () {
      return this._posOrigin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "posOffset", {
    get: function () {
      return this._posOffset;
    },
    enumerable: true,
    configurable: true
  });
  return ASurroundingBuildingVO;
}(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO);
exports.ASurroundingBuildingVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
