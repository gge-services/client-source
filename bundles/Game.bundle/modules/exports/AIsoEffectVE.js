Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __s0local0 = function (__s1param0) {
  function AIsoEffectVE() {
    var __s3local0 = this;
    __s3local0._isRunning = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoEffectVE, __s1param0);
  AIsoEffectVE.prototype.start = function () {
    this._isRunning = true;
  };
  AIsoEffectVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.EFFECT;
  };
  AIsoEffectVE.prototype.onEffectDone = function () {
    this._isRunning = false;
    if (this.effectObjects.containsObject(this)) {
      this.effectObjects.removeObjectByVE(this);
    }
  };
  Object.defineProperty(AIsoEffectVE.prototype, "effectObjects", {
    get: function () {
      return this.isoRenderer.objects.effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoEffectVE.prototype, "isRunning", {
    get: function () {
      return this._isRunning;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoEffectVE;
}(require("gge-module:export_AIsoObjectVE").AIsoObjectVE);
exports.AIsoEffectVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
