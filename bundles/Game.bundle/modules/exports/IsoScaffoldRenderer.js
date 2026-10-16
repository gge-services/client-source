Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function () {
  function IsoScaffoldRenderer() {}
  IsoScaffoldRenderer.prototype.init = function (__s5param0, __s5param1) {
    this._target = __s5param0;
    this._isoObjectVO = __s5param1;
  };
  IsoScaffoldRenderer.prototype.destroy = function () {
    if (this.disp && this.disp.parent) {
      this.disp.parent.removeChild(this.disp);
    }
    this._disp = null;
  };
  IsoScaffoldRenderer.prototype.createDisp = function () {
    if (this._disp) {
      this._disp.removeChildren();
    } else {
      this._target.addChild(this._disp = new __s0local0());
    }
  };
  IsoScaffoldRenderer.prototype.addToDisp = function (__s14param0) {
    this._disp.addChild(__s14param0);
  };
  IsoScaffoldRenderer.prototype.render = function () {
    this.createDisp();
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.isoObjectVO, "ATowerVO") && !__dep_exact_81dacdf05bd32292.instanceOfClass(this.isoObjectVO, "FactionLookoutTowerVO")) {
      this.renderByTower();
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.isoObjectVO, "BasicGateVO")) {
      this.renderByGate();
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.isoObjectVO, "AEffectBuildingVO")) {
      this.renderByInnerBuilding();
    }
  };
  IsoScaffoldRenderer.prototype.renderByGate = function () {
    var __s21local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetFileName);
    var __s21local1 = __dep_exact_9e901e8e2483a22f_2.GoodgameBitmapEngine.clipFactory.getExternalClipSource("Scaffold_Gate", __s21local0);
    var __s21local2 = new __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapClipExternal(__s21local1, 0, false);
    __s21local2.x = __s21local2.y = 0;
    this.addToDisp(__s21local2);
  };
  IsoScaffoldRenderer.prototype.renderByTower = function () {
    var __s23local0 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetFileName);
    var __s23local1 = __dep_exact_9e901e8e2483a22f_2.GoodgameBitmapEngine.clipFactory.getExternalClipSource("Scaffold_Tower", __s23local0);
    var __s23local2 = new __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapClipExternal(__s23local1, 0, false);
    __s23local2.x = __s23local2.y = 0;
    this.addToDisp(__s23local2);
  };
  IsoScaffoldRenderer.prototype.renderByInnerBuilding = function () {
    var __s25local0 = new __dep_exact_9e901e8e2483a22f_3.SimpleRandom(this.width * this.height);
    var __s25local1 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetFileName);
    for (var __s25local2 = Math.floor((this.width - 3) / 2) - 1; __s25local2 >= 0; __s25local2--) {
      var __s25local3 = this.width - 3 - (__s25local2 + 1) * 2;
      var __s25local4 = this.height - 2;
      var __s25local5 = IsoScaffoldRenderer.gridPosToPixelPos(new __s0local1(__s25local3, __s25local4), 40);
      var __s25local6 = "Scaffold_Left_" + __s25local0.nextInt(2);
      var __s25local7 = __dep_exact_9e901e8e2483a22f_2.GoodgameBitmapEngine.clipFactory.getExternalClipSource(__s25local6, __s25local1);
      var __s25local8 = new __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapClipExternal(__s25local7, 0, false);
      __s25local8.x = __s25local5.x;
      __s25local8.y = __s25local5.y;
      this.addToDisp(__s25local8);
    }
    for (var __s25local9 = Math.floor((this.height - 3) / 2) - 1; __s25local9 >= 0; __s25local9--) {
      var __s25local10 = this.width - 2;
      var __s25local11 = this.height - 3 - (__s25local9 + 1) * 2;
      var __s25local12 = IsoScaffoldRenderer.gridPosToPixelPos(new __s0local1(__s25local10, __s25local11), 40);
      var __s25local13 = "Scaffold_Right_" + __s25local0.nextInt(2);
      var __s25local14 = __dep_exact_9e901e8e2483a22f_2.GoodgameBitmapEngine.clipFactory.getExternalClipSource(__s25local13, __s25local1);
      var __s25local15 = new __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapClipExternal(__s25local14, 0, false);
      __s25local15.x = __s25local12.x;
      __s25local15.y = __s25local12.y;
      this.addToDisp(__s25local15);
    }
    var __s25local16 = IsoScaffoldRenderer.gridPosToPixelPos(new __s0local1(this.width - 3, this.height - 3), 40);
    var __s25local17 = __dep_exact_9e901e8e2483a22f_2.GoodgameBitmapEngine.clipFactory.getExternalClipSource("Scaffold_Front", __s25local1);
    var __s25local18 = new __dep_exact_9e901e8e2483a22f_1.GoodgameBitmapClipExternal(__s25local17, 0, false);
    __s25local18.x = __s25local16.x;
    __s25local18.y = __s25local16.y;
    this.addToDisp(__s25local18);
  };
  Object.defineProperty(IsoScaffoldRenderer.prototype, "assetFileName", {
    get: function () {
      return "Scaffold";
    },
    enumerable: true,
    configurable: true
  });
  IsoScaffoldRenderer.gridPosToPixelPos = function (__s33param0, __s33param1) {
    return new __s0local1((__s33param0.x - __s33param0.y) * __s33param1, (__s33param0.x + __s33param0.y) * __s33param1 / 2);
  };
  Object.defineProperty(IsoScaffoldRenderer.prototype, "target", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoScaffoldRenderer.prototype, "width", {
    get: function () {
      return this.isoObjectVO.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoScaffoldRenderer.prototype, "height", {
    get: function () {
      return this.isoObjectVO.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoScaffoldRenderer.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoScaffoldRenderer.prototype, "isoObjectVO", {
    get: function () {
      return this._isoObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  return IsoScaffoldRenderer;
}();
exports.IsoScaffoldRenderer = __s0local2;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
