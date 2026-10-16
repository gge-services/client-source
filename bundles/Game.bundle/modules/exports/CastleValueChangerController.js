Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleBasicButtonValueContainer = require("gge-module:export_CastleBasicButtonValueContainer");
var __dep_export_CastleSliderValueComponent = require("gge-module:export_CastleSliderValueComponent");
var __s0local0 = function (__s1param0) {
  function CastleValueChangerController(__s3param0, __s3param1, __s3param2) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleValueChangerController, __s1param0);
  CastleValueChangerController.prototype.addButtons = function (__s5param0, __s5param1) {
    var __s5local0 = new __dep_export_CastleBasicButtonValueContainer.CastleBasicButtonValueContainer(__s5param0);
    var __s5local1 = new __dep_exact_9e901e8e2483a22f.ButtonsValueComponent(this, this._minValue, this._maxValue, __s5local0, __s5param1);
    this.addValueComponent(__s5local1);
  };
  CastleValueChangerController.prototype.addSlider = function (__s7param0, __s7param1 = 0) {
    var __s7local0 = new __dep_export_CastleSliderValueComponent.CastleSliderValueComponent(this, this._minValue, this._maxValue, __s7param0, "", __s7param1);
    this.addValueComponent(__s7local0);
  };
  Object.defineProperty(CastleValueChangerController.prototype, "value", {
    get: function () {
      return this._value;
    },
    set: function (__s11param0) {
      this.userChangedData(__s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleValueChangerController;
}(__dep_exact_9e901e8e2483a22f_1.ValueChangerController);
exports.CastleValueChangerController = __s0local0;
