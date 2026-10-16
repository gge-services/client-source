Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_AIsoFloorMarkVE = require("gge-module:export_AIsoFloorMarkVE");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function IsoDebugPosVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDebugPosVE, __s1param0);
  IsoDebugPosVE.prototype.updatePosition = function () {
    __s1param0.prototype.updatePosition.call(this);
    this.updateText();
  };
  IsoDebugPosVE.prototype.updateText = function () {
    if (this._text) {
      var __s7local0 = this.isoRenderer.mouse.getMouseGridPos();
      var __s7local1 = this.isoRenderer.mouse.getMouseScreenPos();
      this._text.text = "g:" + __s7local0.x + "|" + __s7local0.y + " # s:" + __s7local1.x + "|" + __s7local1.y;
    }
  };
  IsoDebugPosVE.prototype.createDisp = function () {
    var __s10local0 = new __s0local0();
    var __s10local1 = __dep_export_IsoHelper.IsoHelper.view.createFloorDisp(new __s0local1(1, 1), 16711680, 0.5);
    __s10local1.mouseEnabled = false;
    __s10local0.addChild(__s10local1);
    this._text = new __dep_exact_81dacdf05bd32292.TextField();
    this._text.textColor = 16711935;
    this._text.x = 35;
    this._text.y = -40;
    this._text.scaleX = this._text.scaleY = 4;
    this._text.autoSize = __dep_exact_81dacdf05bd32292_1.TextFieldAutoSize.LEFT;
    __s10local0.addChild(this._text);
    this.dispComponent.addDisp(__s10local0);
  };
  IsoDebugPosVE.prototype.getScreenPos = function () {
    return this.isoRenderer.camera.getScreenPosByGridPos(this.isoRenderer.mouse.getMouseGridPos());
  };
  Object.defineProperty(IsoDebugPosVE.prototype, "dispOffset", {
    get: function () {
      return new __s0local1();
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoFloorMarkVE.AIsoFloorMarkVE.prototype, "dispOffset").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  IsoDebugPosVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.DEBUG;
  };
  return IsoDebugPosVE;
}(__dep_export_AIsoFloorMarkVE.AIsoFloorMarkVE);
exports.IsoDebugPosVE = __s0local2;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "IIngameUICapable");
