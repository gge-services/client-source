Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleSliderValueComponent = require("gge-module:export_CastleSliderValueComponent");
var __s0local0 = function (__s1param0) {
  function CastleHunterValueChangerController(__s3param0, __s3param1, __s3param2) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHunterValueChangerController, __s1param0);
  CastleHunterValueChangerController.prototype.addSlider = function (__s5param0, __s5param1 = 0) {
    var __s5local0 = new __dep_export_CastleSliderValueComponent.CastleSliderValueComponent(this, this._minValue, this._maxValue, __s5param0, "", __s5param1);
    this.addValueComponent(__s5local0);
  };
  return CastleHunterValueChangerController;
}(__dep_exact_9e901e8e2483a22f.ValueChangerController);
exports.CastleHunterValueChangerController = __s0local0;
