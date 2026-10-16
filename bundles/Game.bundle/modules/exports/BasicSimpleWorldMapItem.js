Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function BasicSimpleWorldMapItem(__s3param0, __s3param1) {
    this._isActive = false;
    this._line1Content = "";
    this._line2Content = "";
    this._line3Content = "";
    this._disp = __s3param0;
    this._tMapNodeVO = __s3param1;
    this.updateVO(this._tMapNodeVO);
  }
  BasicSimpleWorldMapItem.prototype.updateVO = function (__s5param0) {
    this._tMapNodeVO = __s5param0;
    this.setItem();
    this.setToolTip();
    this.removeEventListeners();
    this.addEventListeners();
    if (this.tMapNodeVO.isHighlighted) {
      this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
    } else {
      this.disp.useFilters(null, false);
    }
  };
  BasicSimpleWorldMapItem.prototype.setItem = function () {};
  BasicSimpleWorldMapItem.prototype.setToolTip = function () {};
  BasicSimpleWorldMapItem.prototype.onClickMapItem = function (__s13param0) {
    __dep_export_CastleModel.CastleModel.treasureMapData.clearMapHighlights(this.tMapNodeVO.mapID);
  };
  BasicSimpleWorldMapItem.prototype.isMouseInteractive = function () {
    return !this._tMapNodeVO.isDefeated && this._tMapNodeVO.isUnlocked && this._isActive;
  };
  BasicSimpleWorldMapItem.prototype.addEventListeners = function () {
    if (this.isMouseInteractive()) {
      this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClickMapItem));
    }
    this._disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  BasicSimpleWorldMapItem.prototype.removeEventListeners = function () {
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickMapItem));
    this._disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  BasicSimpleWorldMapItem.prototype.onMouseOver = function (__s22param0) {
    this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    this.layoutManager.showIngameUIComponent(__dep_export_WorldmapInfoTooltip.WorldmapInfoTooltip, this);
  };
  BasicSimpleWorldMapItem.prototype.onMouseOut = function (__s24param0) {
    if (this.tMapNodeVO.isHighlighted) {
      this._disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
    } else {
      this._disp.useFilters(null, false);
    }
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    this.layoutManager.hideIngameUIComponent(__dep_export_WorldmapInfoTooltip.WorldmapInfoTooltip);
  };
  BasicSimpleWorldMapItem.prototype.dispose = function () {
    this._tMapNodeVO = null;
    if (this._disp) {
      this.removeEventListeners();
    }
  };
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (__s33param0) {
      if (this._isActive != __s33param0) {
        this._isActive = __s33param0;
        this.updateVO(this._tMapNodeVO);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  BasicSimpleWorldMapItem.prototype.getAdditionalTooltipInfos = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "tMapNodeVO", {
    get: function () {
      return this._tMapNodeVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "uiBounds", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "uiPos", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "uiDisp", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "hasRingMenu", {
    get: function () {
      return false;
    },
    set: function (__s52param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "line1Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "line2Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "line3Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "isTimerToolTip", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "toolTipPosition", {
    get: function () {
      var __s62local0 = this._disp.parent.localToGlobal(new __s0local1(this._disp.x, this._disp.y));
      return new __s0local1(__s62local0.x, __s62local0.y);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSimpleWorldMapItem.prototype, "clampToViewport", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSimpleWorldMapItem;
}();
exports.BasicSimpleWorldMapItem = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WorldmapInfoTooltip = require("gge-module:export_WorldmapInfoTooltip");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");
