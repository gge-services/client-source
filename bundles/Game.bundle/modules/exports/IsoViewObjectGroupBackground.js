Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupBackground() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupBackground, __s1param0);
  IsoViewObjectGroupBackground.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.destroyBackground();
  };
  IsoViewObjectGroupBackground.prototype.destroyBackground = function () {
    this._ve = this.destroyObject(this.ve);
  };
  IsoViewObjectGroupBackground.prototype.initObjects = function () {
    this.destroyBackground();
    this._ve = this.createObjectAndAddToLayer(this.isoData.objects.background.vo);
  };
  IsoViewObjectGroupBackground.prototype.render = function (__s11param0 = false) {
    if (this.ve) {
      this.ve.updateDisp();
    }
    __dep_export_IsoHelper.IsoHelper.view.bgStage.color = __dep_exact_81dacdf05bd32292.ColorTransform.colorNumToString(__dep_export_IsoHelper.IsoHelper.view.getIsoColorsByActiveKingdom().backgroundColor);
  };
  IsoViewObjectGroupBackground.prototype.removeObjectByVE = function (__s14param0) {
    this.destroyBackground();
  };
  IsoViewObjectGroupBackground.prototype.containsObject = function (__s16param0) {
    return __s16param0 == this.ve;
  };
  IsoViewObjectGroupBackground.prototype.fillInCompleteList = function (__s18param0) {
    if (this.ve) {
      __s18param0.push(this.ve);
    }
  };
  Object.defineProperty(IsoViewObjectGroupBackground.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectGroupBackground;
}(require("gge-module:export_AIsoViewObjectGroup").AIsoViewObjectGroup);
exports.IsoViewObjectGroupBackground = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
