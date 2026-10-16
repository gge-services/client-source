Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function ADecorationForgeSelectionListItemVE(__s3param0) {
    var __s3local0 = this;
    __s3local0._onClicked = new __dep_exact_5c7bc328fca9e4de.Signal(ADecorationForgeSelectionListItemVE);
    __s3local0._isMouseDown = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADecorationForgeSelectionListItemVE, __s1param0);
  ADecorationForgeSelectionListItemVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  ADecorationForgeSelectionListItemVE.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ADecorationForgeSelectionListItemVE.prototype.updateWithNewData = function (__s9param0) {
    this._itemVO = __s9param0;
    this.update();
  };
  ADecorationForgeSelectionListItemVE.prototype.update = function () {
    this.updateSelection();
  };
  ADecorationForgeSelectionListItemVE.prototype.updateSelection = function () {
    this.disp.mc_background.gotoAndStop(__dep_exact_f855840627e6e145.int(this.itemVO && this.itemVO.isSelected ? 2 : 1));
  };
  ADecorationForgeSelectionListItemVE.prototype.isMouseOverItem = function (__s15param0) {
    var __s15local0 = __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(new __s0local1(__s15param0.target.mouseX, __s15param0.target.mouseY), __s15param0.target, this.disp);
    var __s15local1 = this.disp.getBounds(null);
    return __s15local0.x >= __s15local1.left && __s15local0.x <= __s15local1.right && __s15local0.y >= __s15local1.top && __s15local0.y <= __s15local1.bottom;
  };
  ADecorationForgeSelectionListItemVE.prototype.isSelectable = function () {
    return true;
  };
  ADecorationForgeSelectionListItemVE.prototype.onMouseOver = function (__s19param0) {
    __s1param0.prototype.onMouseOver.call(this, __s19param0);
    if (this.isMouseOverItem(__s19param0)) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  ADecorationForgeSelectionListItemVE.prototype.onMouseOut = function (__s22param0) {
    __s1param0.prototype.onMouseOut.call(this, __s22param0);
    if (!this.isMouseOverItem(__s22param0)) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  ADecorationForgeSelectionListItemVE.prototype.onMouseDown = function (__s25param0) {
    this._isMouseDown = true;
  };
  ADecorationForgeSelectionListItemVE.prototype.onMouseUp = function (__s27param0) {
    if (this._isMouseDown && this.isShown && this.isSelectable() && this._onClicked) {
      this._onClicked.dispatch(this);
    }
    this._isMouseDown = false;
  };
  Object.defineProperty(ADecorationForgeSelectionListItemVE.prototype, "itemVO", {
    get: function () {
      return this._itemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADecorationForgeSelectionListItemVE.prototype, "onClicked", {
    get: function () {
      return this._onClicked;
    },
    enumerable: true,
    configurable: true
  });
  return ADecorationForgeSelectionListItemVE;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ADecorationForgeSelectionListItemVE = __s0local2;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
