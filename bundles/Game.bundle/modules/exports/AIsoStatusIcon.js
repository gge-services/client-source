Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_DispCreatorComponent = require("gge-module:export_DispCreatorComponent");
var __dep_export_IsoMovementDispCreatorCacheBehaviour = require("gge-module:export_IsoMovementDispCreatorCacheBehaviour");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __s0local0 = function (__s1param0) {
  function AIsoStatusIcon() {
    var __s3local0 = this;
    __s3local0._dispComponent = new __dep_export_DispCreatorComponent.DispCreatorComponent();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoStatusIcon, __s1param0);
  AIsoStatusIcon.prototype.init = function (__s5param0, __s5param1) {
    this._ve = __s5param0;
    this._iconType = __s5param1;
    this._dispComponent.init(__s5param0.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.STATUS_ICONS));
    this._dispComponent.cacheBehaviour = new __dep_export_IsoMovementDispCreatorCacheBehaviour.IsoMovementDispCreatorCacheBehaviour();
  };
  AIsoStatusIcon.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.destroyDisp();
    this.dispComponent.destroy();
  };
  AIsoStatusIcon.prototype.updateDisp = function () {
    this.destroyDisp();
    this.dispComponent.onLoadedSignal.add(this.bindFunction(this.onAllDispClipsLoaded));
    this.dispComponent.switchCreationState(true);
    this.createDisp();
    this.dispComponent.switchCreationState(false);
  };
  AIsoStatusIcon.prototype.createDisp = function () {};
  AIsoStatusIcon.prototype.destroyDisp = function () {
    this.dispComponent.reset();
  };
  AIsoStatusIcon.prototype.update = function (__s15param0) {};
  AIsoStatusIcon.prototype.getDispHeight = function () {
    return this.dispComponent.dispContainer.getBounds(null).height;
  };
  AIsoStatusIcon.prototype.onAllDispClipsLoaded = function () {
    this.dispComponent.onLoadedSignal.remove(this.bindFunction(this.onAllDispClipsLoaded));
  };
  Object.defineProperty(AIsoStatusIcon.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoStatusIcon.prototype, "dispComponent", {
    get: function () {
      return this._dispComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoStatusIcon.prototype, "iconType", {
    get: function () {
      return this._iconType;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoStatusIcon;
}(__dep_export_CastleComponent.CastleComponent);
exports.AIsoStatusIcon = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
