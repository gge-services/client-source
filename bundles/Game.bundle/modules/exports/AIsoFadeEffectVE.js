Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_AIsoEffectVE = require("gge-module:export_AIsoEffectVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AIsoFadeEffectVE(__s3param0) {
    var __s3local0 = this;
    __s3local0._startScreenPos = new __s0local0();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._startScreenPos = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoFadeEffectVE, __s1param0);
  AIsoFadeEffectVE.prototype.updateDisp = function () {
    this.destroyDisp();
    this.createDisp();
  };
  AIsoFadeEffectVE.prototype.start = function () {
    __s1param0.prototype.start.call(this);
    this.updateDisp();
    this.elementContainer.x = this.startScreenPos.x - 75;
    this.elementContainer.y = this.startScreenPos.y;
    __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.elementContainer, 3, {
      alpha: 1,
      y: this.startScreenPos.y
    }, {
      alpha: 0,
      y: this.startScreenPos.y - 150,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut,
      onComplete: this.bindFunction(this.onEffectDone)
    });
  };
  Object.defineProperty(AIsoFadeEffectVE.prototype, "startScreenPos", {
    get: function () {
      return this._startScreenPos;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoFadeEffectVE;
}(__dep_export_AIsoEffectVE.AIsoEffectVE);
exports.AIsoFadeEffectVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
