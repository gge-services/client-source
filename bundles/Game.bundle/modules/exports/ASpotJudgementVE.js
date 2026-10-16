Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function (__s1param0) {
  function ASpotJudgementVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ASpotJudgementVE, __s1param0);
  ASpotJudgementVE.prototype.destroy = function () {
    this.spotVO.destroy();
    __s1param0.prototype.destroy.call(this);
  };
  ASpotJudgementVE.prototype.init = function (__s7param0) {
    __s1param0.prototype.init.call(this, __s7param0);
    this._spotType = __dep_export_JudgementSpotEnum.JudgementSpotEnum.getTypeFromVEClass(__dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(this));
    this.elementContainer.mouseChildren = true;
  };
  ASpotJudgementVE.prototype.updateSpot = function () {};
  Object.defineProperty(ASpotJudgementVE.prototype, "spotType", {
    get: function () {
      return this._spotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpotJudgementVE.prototype, "spotVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ASpotJudgementVE;
}(require("gge-module:export_AIsoObjectVE").AIsoObjectVE);
exports.ASpotJudgementVE = __s0local0;
var __dep_export_JudgementSpotEnum = require("gge-module:export_JudgementSpotEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
