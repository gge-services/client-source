Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleSliderValueComponent = require("gge-module:export_CastleSliderValueComponent");
var __s0local0 = function (__s1param0) {
  function CastleTributeValueChangerController(__s3param0, __s3param1, __s3param2, __s3param3 = "") {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
    __s3local0._sliderButtonTooltipID = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTributeValueChangerController, __s1param0);
  CastleTributeValueChangerController.prototype.addSlider = function (__s5param0) {
    var __s5local0 = new __dep_export_CastleSliderValueComponent.CastleSliderValueComponent(this, this._minValue, this._maxValue, __s5param0, this._sliderButtonTooltipID);
    this.addValueComponent(__s5local0);
  };
  CastleTributeValueChangerController.prototype.setValue = function (__s7param0) {
    this.userChangedData(__s7param0);
  };
  return CastleTributeValueChangerController;
}(__dep_exact_9e901e8e2483a22f.ValueChangerController);
exports.CastleTributeValueChangerController = __s0local0;
