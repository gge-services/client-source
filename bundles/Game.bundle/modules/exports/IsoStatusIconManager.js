Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoStatusIconManager() {
    var __s3local0 = this;
    __s3local0._iconList = [];
    __s3local0._posOffset = new __s0local0();
    __s3local0._isVisible = true;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoStatusIconManager, __s1param0);
  IsoStatusIconManager.prototype.init = function (__s5param0) {
    this._ve = __s5param0;
  };
  IsoStatusIconManager.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.removeAllIcons();
  };
  IsoStatusIconManager.prototype.reset = function () {
    this.removeAllIcons();
    this._isVisible = true;
  };
  IsoStatusIconManager.prototype.addIcon = function (__s11param0) {
    if (this.canShowStatusIcons()) {
      var __s11local0 = new __s11param0.veClass();
      __s11local0.init(this.ve, __s11param0);
      this.iconList.push(__s11local0);
      __s11local0.updateDisp();
      this.updatePosition();
    }
  };
  IsoStatusIconManager.prototype.removeIcon = function (__s14param0) {
    for (var __s14local0 = 0; __s14local0 < this.iconList.length; ++__s14local0) {
      var __s14local1 = this.iconList[__s14local0];
      if (__s14local1.iconType == __s14param0) {
        __s14local1.destroy();
        this.iconList.splice(__s14local0, 1);
      }
    }
  };
  IsoStatusIconManager.prototype.removeAllIcons = function () {
    if (this.iconList != null) {
      for (var __s19local0 = 0, __s19local1 = this.iconList; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          __s19local2.destroy();
        }
      }
    }
    this._iconList = [];
  };
  IsoStatusIconManager.prototype.update = function (__s25param0) {
    if (this.iconList != null) {
      for (var __s25local0 = 0, __s25local1 = this.iconList; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          __s25local2.update(__s25param0);
        }
      }
    }
  };
  IsoStatusIconManager.prototype.updatePosition = function () {
    var __s31local0 = 0;
    if (this.iconList != null) {
      for (var __s31local1 = 0, __s31local2 = this.iconList; __s31local1 < __s31local2.length; __s31local1++) {
        var __s31local3 = __s31local2[__s31local1];
        if (__s31local3 !== undefined) {
          __s31local3.dispComponent.dispContainer.y = __s31local0;
          __s31local0 -= __dep_exact_f855840627e6e145.int(__s31local3.getDispHeight() + 10);
        }
      }
    }
    this.ve.isoRenderer.camera.getCurrentZoomValue();
    var __s31local4 = this.ve.disp._cacheScale;
    var __s31local5 = 0;
    if (this.ve.disp && this.ve.disp.filters && this.ve.disp.filters.length > 0) {
      __s31local5 = -__s31local4;
    }
    var __s31local6 = this.ve.getLocalDispPosTopCenter();
    __s31local6.x += this.posOffset.x + __s31local5;
    __s31local6.y = __s31local6.y + this.posOffset.y - __s31local6.y * 0.1;
    var __s31local7 = this.getLayer();
    __s31local7.x = __s31local6.x;
    __s31local7.y = __s31local6.y;
  };
  IsoStatusIconManager.prototype.setVisibility = function (__s38param0) {
    this.getLayer().visible = this._isVisible = __s38param0;
  };
  IsoStatusIconManager.prototype.setNewOffset = function (__s40param0) {
    this._posOffset = __s40param0;
    this.updatePosition();
  };
  IsoStatusIconManager.prototype.getIcon = function (__s42param0) {
    if (this.iconList != null) {
      for (var __s42local0 = 0, __s42local1 = this.iconList; __s42local0 < __s42local1.length; __s42local0++) {
        var __s42local2 = __s42local1[__s42local0];
        if (__s42local2 !== undefined && __s42local2.iconType == __s42param0) {
          return __s42local2;
        }
      }
    }
    return null;
  };
  IsoStatusIconManager.prototype.canShowStatusIcons = function () {
    if (!this.getLayer()) {
      return false;
    }
    if (!this.ve.vo.isOwnArea) {
      return false;
    }
    var __s48local0 = this.ve;
    return !__s48local0 || __s48local0.buildingVO.buildingState != __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.INITIAL;
  };
  Object.defineProperty(IsoStatusIconManager.prototype, "hasIcon", {
    get: function () {
      return this.iconList.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoStatusIconManager.prototype, "isUpgradeIconActive", {
    get: function () {
      if (this.iconList != null) {
        for (var __s54local0 = 0, __s54local1 = this.iconList; __s54local0 < __s54local1.length; __s54local0++) {
          var __s54local2 = __s54local1[__s54local0];
          if (__s54local2 !== undefined && (__s54local2.iconType == __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UPGRADE || __s54local2.iconType == __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UPGRADE_PRIME_SALE)) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  IsoStatusIconManager.prototype.getLayer = function () {
    return this.ve.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.STATUS_ICONS);
  };
  Object.defineProperty(IsoStatusIconManager.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoStatusIconManager.prototype, "posOffset", {
    get: function () {
      return this._posOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoStatusIconManager.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoStatusIconManager.prototype, "iconList", {
    get: function () {
      return this._iconList;
    },
    enumerable: true,
    configurable: true
  });
  return IsoStatusIconManager;
}(__dep_export_CastleComponent.CastleComponent);
exports.IsoStatusIconManager = __s0local1;
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
