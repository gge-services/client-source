Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AIsoViewComponent = require("gge-module:export_AIsoViewComponent");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function IsoViewSettings() {
    var __s3local0 = this;
    __s3local0._scrollBounds = new __s0local0();
    __s3local0._minScrollBounds = new __s0local0();
    __s3local0._isDebugCrossVisible = false;
    __s3local0._isDebugPosVisible = false;
    __s3local0._isZSortChildIndexVisible = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewSettings, __s1param0);
  IsoViewSettings.prototype.setup = function () {
    __s1param0.prototype.setup.call(this);
    this._scrollBounds = this.createScrollBounds();
  };
  IsoViewSettings.prototype.createScrollBounds = function () {
    var __s7local0 = this.isoRenderer.isoData.areaData;
    var __s7local1 = new __s0local0();
    if (__dep_export_CastleModel.CastleModel.userData.level < 10) {
      __s7local1.bottom = 1200;
    } else {
      __s7local1.bottom = 1800;
    }
    __s7local1.left = -1000;
    __s7local1.right = 1000;
    __s7local1.top = -1400;
    this.minScrollBounds.right = 2000;
    if (__s7local0.areaInfo.kingdomID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID) {
      __s7local1.top = -1300;
      __s7local1.bottom = 1800;
    } else if (__s7local0.isKingdomCastle) {
      __s7local1.top = -1800;
      __s7local1.left = -1650;
    } else if (__s7local0.isTreasureCamp && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
      __s7local1.bottom = 1750;
    }
    return __s7local1;
  };
  Object.defineProperty(IsoViewSettings.prototype, "scrollBounds", {
    get: function () {
      return this._scrollBounds;
    },
    set: function (__s16param0) {
      this._scrollBounds = __s16param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewSettings.prototype, "isDebugCrossVisible", {
    get: function () {
      return this._isDebugCrossVisible;
    },
    set: function (__s20param0) {
      this._isDebugCrossVisible = __s20param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewSettings.prototype, "isDebugPosVisible", {
    get: function () {
      return this._isDebugPosVisible;
    },
    set: function (__s24param0) {
      this._isDebugPosVisible = __s24param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewSettings.prototype, "minScrollBounds", {
    get: function () {
      return this._minScrollBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewSettings.prototype, "isZSortChildIndexVisible", {
    get: function () {
      return this._isZSortChildIndexVisible;
    },
    set: function (__s30param0) {
      this._isZSortChildIndexVisible = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewSettings;
}(__dep_export_AIsoViewComponent.AIsoViewComponent);
exports.IsoViewSettings = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
