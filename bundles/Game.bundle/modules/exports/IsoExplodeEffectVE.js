Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_AIsoEffectVE = require("gge-module:export_AIsoEffectVE");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function IsoExplodeEffectVE(__s3param0) {
    var __s3local0 = this;
    __s3local0._directions = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._screenPos = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoExplodeEffectVE, __s1param0);
  IsoExplodeEffectVE.prototype.createDisp = function () {
    for (var __s5local0 = 0; __s5local0 < IsoExplodeEffectVE.PART_AMOUNT; ++__s5local0) {
      var __s5local1 = new __s0local0();
      __s5local1.graphics.beginFill(16711680);
      __s5local1.graphics.drawRect(-4, -4, 4, 4);
      __s5local1.graphics.endFill();
      this.dispComponent.addDisp(__s5local1);
      __s5local1.x = __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(-5, 5);
      __s5local1.y = __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(0, -30);
      __s5local1.rotation = __dep_export_ClientConstUtils.ClientConstUtils.getRandomInt(0, 360);
      this.directions.push(new __s0local1(__dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(-6, 6), __dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(-0.5, -10)));
    }
  };
  IsoExplodeEffectVE.prototype.start = function () {
    __s1param0.prototype.start.call(this);
    this.updateDisp();
  };
  IsoExplodeEffectVE.prototype.update = function (__s11param0) {
    if (this.isRunning) {
      var __s11local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.getRandomFloat(30, 0));
      for (var __s11local1 = 0; __s11local1 < IsoExplodeEffectVE.PART_AMOUNT; ++__s11local1) {
        var __s11local2 = this.disp.getChildAt(__s11local1);
        var __s11local3 = this.directions[__s11local1];
        if (__s11local2.y > __s11local0) {
          __s11local2.visible = false;
        } else {
          __s11local2.x += __s11local3.x;
          __s11local2.y += __s11local3.y;
          __s11local3.x *= 0.99;
          __s11local3.y += 0.25;
          __s11local2.rotation += 1;
        }
      }
      var __s11local4 = true;
      for (var __s11local5 = 0; __s11local5 < IsoExplodeEffectVE.PART_AMOUNT; ++__s11local5) {
        if ((__s11local2 = this.disp.getChildAt(__s11local5)).visible) {
          __s11local4 = false;
        }
      }
      if (__s11local4) {
        this.onEffectDone();
      }
    }
  };
  IsoExplodeEffectVE.prototype.getScreenPos = function () {
    return this._screenPos;
  };
  Object.defineProperty(IsoExplodeEffectVE.prototype, "directions", {
    get: function () {
      return this._directions;
    },
    enumerable: true,
    configurable: true
  });
  IsoExplodeEffectVE.__initialize_static_members = function () {
    IsoExplodeEffectVE.PART_AMOUNT = 400;
  };
  return IsoExplodeEffectVE;
}(__dep_export_AIsoEffectVE.AIsoEffectVE);
exports.IsoExplodeEffectVE = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "IIngameUICapable");
__s0local2.__initialize_static_members();
