Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleStatusBarEvent = require("gge-module:export_CastleStatusBarEvent");
var __dep_export_StatusBarExpansionDirectionEnum = require("gge-module:export_StatusBarExpansionDirectionEnum");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function CastleStatusBar(__s3param0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = new __s0local0();
    __s3local0._icons = [];
    __s3local0._expandTo = __s3param0;
    __s3local0._disp.tickEnabled = __s3param1;
    __s3local0._positionResets = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStatusBar, __s1param0);
  Object.defineProperty(CastleStatusBar.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStatusBar.prototype, "anchorItem", {
    get: function () {
      return this._anchorItem;
    },
    enumerable: true,
    configurable: true
  });
  CastleStatusBar.prototype.clearPositionResets = function () {
    this._positionResets = [];
  };
  CastleStatusBar.prototype.addPositionReset = function (__s11param0, __s11param1, __s11param2, __s11param3) {
    if (__s11param3) {
      this.clearPositionResets();
    }
    this._positionResets.push([__s11param0, __s11param1, __s11param2]);
  };
  CastleStatusBar.prototype.addIcon = function (__s14param0) {
    this._icons.push(__s14param0);
    __s14param0.addToContainer(this._disp);
    __s14param0.changedVisibilityCallback = this.bindFunction(this.onIconChangeVisibility);
    this._icons.sort(this.bindFunction(this.compareIcons));
  };
  CastleStatusBar.prototype.removeIcon = function (__s16param0) {
    var __s16local0 = this._icons.indexOf(__s16param0);
    if (!(__s16local0 < 0)) {
      __s16param0.changedVisibilityCallback = null;
      this._icons.splice(__s16local0, 1);
      __s16param0.removeFromContainer(this._disp);
      this._icons.sort(this.bindFunction(this.compareIcons));
    }
  };
  CastleStatusBar.prototype.dispose = function () {
    if (this._icons != null) {
      for (var __s19local0 = 0, __s19local1 = this._icons; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          __s19local2.dispose();
        }
      }
    }
    if (this.disp) {
      while (this.disp.numChildren > 0) {
        this._disp.removeChildAt(0);
      }
      this._disp = null;
      this._icons = null;
    }
  };
  CastleStatusBar.prototype.onChangeLayoutState = function () {
    if (this._icons != null) {
      for (var __s28local0 = 0, __s28local1 = this._icons; __s28local0 < __s28local1.length; __s28local0++) {
        var __s28local2 = __s28local1[__s28local0];
        if (__s28local2 !== undefined) {
          __s28local2.onLayoutStateChanged();
        }
      }
    }
    this.repositioningIcons();
  };
  CastleStatusBar.prototype.onIconChangeVisibility = function () {
    this.repositioningIcons();
  };
  CastleStatusBar.prototype.compareIcons = function (__s36param0, __s36param1) {
    if (this._expandTo === __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_LEFT || this._expandTo === __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_UP) {
      return __s36param0.priority - __s36param1.priority;
    } else {
      return __s36param1.priority - __s36param0.priority;
    }
  };
  CastleStatusBar.prototype.repositioningIcons = function () {
    var __s40local0 = this._expandTo == __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_LEFT || this._expandTo == __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_RIGHT ? 15 : 0;
    var __s40local1 = 0;
    var __s40local2 = 0;
    var __s40local3 = 0;
    this._anchorItem = null;
    if (this._icons != null) {
      for (var __s40local4 = 0, __s40local5 = this._icons; __s40local4 < __s40local5.length; __s40local4++) {
        var __s40local6 = __s40local5[__s40local4];
        if (__s40local6 !== undefined && __s40local6.visible) {
          var __s40local7 = __dep_exact_f855840627e6e145.int(Math.min(__s40local6.width * 0.5, CastleStatusBar.ICON_HEIGHT * 0.5));
          var __s40local8 = __dep_exact_f855840627e6e145.int(Math.min(__s40local6.height * 0.5, CastleStatusBar.ICON_HEIGHT * 0.5));
          for (var __s40local9 = 0; __s40local9 < this._positionResets.length; __s40local9++) {
            if (this._positionResets[__s40local9][0] == __s40local2) {
              __s40local0 = this._positionResets[__s40local9][1];
              __s40local1 = this._positionResets[__s40local9][2];
              __s40local3 = __s40local2;
            }
          }
          if (__s40local2 == __s40local3) {
            __s40local7 = 0;
            __s40local8 = 0;
          }
          switch (this._expandTo) {
            case __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_LEFT:
              __s40local0 -= __s40local7;
              __s40local6.setPosition(__s40local0, __s40local1);
              __s40local0 -= __s40local6.width / 2 + CastleStatusBar.SPACE_X;
              break;
            case __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_RIGHT:
              __s40local0 += __s40local7;
              __s40local6.setPosition(__s40local0, __s40local1);
              __s40local0 += __s40local6.width / 2 + CastleStatusBar.SPACE_X;
              break;
            case __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_UP:
              __s40local1 -= __s40local8;
              __s40local6.setPosition(__s40local0, __s40local1);
              __s40local1 -= __s40local6.height / 2 + CastleStatusBar.SPACE_Y;
              break;
            case __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_DOWN:
              __s40local1 += __s40local8;
              __s40local6.setPosition(__s40local0, __s40local1);
              __s40local1 += __s40local6.height / 2 + CastleStatusBar.SPACE_Y;
          }
          this.checkAnchorItem(__s40local6);
          __s40local2++;
        }
      }
    }
    this.dispatchEvent(new __dep_export_CastleStatusBarEvent.CastleStatusBarEvent(__dep_export_CastleStatusBarEvent.CastleStatusBarEvent.ICONS_REPOSITIONED));
  };
  CastleStatusBar.prototype.checkAnchorItem = function (__s51param0) {
    if (this._anchorItem == null) {
      this._anchorItem = __s51param0;
    } else {
      switch (this._expandTo) {
        case __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_LEFT:
          this._anchorItem = __s51param0.iconDisp.x > this._anchorItem.iconDisp.x ? __s51param0 : this._anchorItem;
          break;
        case __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_RIGHT:
          this._anchorItem = __s51param0.iconDisp.x < this._anchorItem.iconDisp.x ? __s51param0 : this._anchorItem;
          break;
        case __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_UP:
          this._anchorItem = __s51param0.iconDisp.y > this._anchorItem.iconDisp.y ? __s51param0 : this._anchorItem;
          break;
        case __dep_export_StatusBarExpansionDirectionEnum.StatusBarExpansionDirectionEnum.EXPAND_DOWN:
          this._anchorItem = __s51param0.iconDisp.y < this._anchorItem.iconDisp.y ? __s51param0 : this._anchorItem;
      }
    }
  };
  CastleStatusBar.prototype.hasIcon = function (__s56param0) {
    return this._icons.indexOf(__s56param0) >= 0;
  };
  Object.defineProperty(CastleStatusBar.prototype, "expandTo", {
    get: function () {
      return this._expandTo;
    },
    set: function (__s60param0) {
      var __s60local0 = this._expandTo != __s60param0;
      this._expandTo = __s60param0;
      if (__s60local0) {
        this.repositioningIcons();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleStatusBar.prototype.getCountOfVisibleSlots = function () {
    var __s63local0 = 0;
    if (this._icons != null) {
      for (var __s63local1 = 0, __s63local2 = this._icons; __s63local1 < __s63local2.length; __s63local1++) {
        var __s63local3 = __s63local2[__s63local1];
        if (__s63local3 !== undefined && __s63local3.visible) {
          __s63local0++;
        }
      }
    }
    return __s63local0;
  };
  CastleStatusBar.SPACE_X = 15;
  CastleStatusBar.SPACE_Y = 15;
  CastleStatusBar.ICON_HEIGHT = 100;
  return CastleStatusBar;
}(createjs.EventDispatcher);
exports.CastleStatusBar = __s0local1;
