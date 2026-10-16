Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_NoneValueSignal = require("gge-module:class_NoneValueSignal");
var __dep_class_BasicButtonValueContainer = require("gge-module:class_BasicButtonValueContainer");
var __dep_class_BasicSliderValueContainer = require("gge-module:class_BasicSliderValueContainer");
var __dep_class_BasicTextfieldValueContainer = require("gge-module:class_BasicTextfieldValueContainer");
var __dep_class_InputTextfieldValueComponent = require("gge-module:class_InputTextfieldValueComponent");
var __dep_class_ButtonsValueComponent = require("gge-module:class_ButtonsValueComponent");
var __dep_class_SliderValueComponent = require("gge-module:class_SliderValueComponent");
var __s0local0 = function () {
  function ValueChangerController(__s3param0, __s3param1, __s3param2) {
    this._value = 15;
    this.valueUpdatedSignal = new __dep_class_NoneValueSignal.NoneValueSignal();
    this._elements = [];
    this._value = __s3param0;
    this._minValue = __s3param1;
    this._maxValue = __s3param2;
  }
  ValueChangerController.prototype.addValueComponent = function (__s5param0) {
    this._elements.push(__s5param0);
    __s5param0.updatedByUserSignal.add(this.bindFunction(this.userChangedData));
    __s5param0.updateValue(this._value);
  };
  ValueChangerController.prototype.userChangedData = function (__s7param0) {
    this.verifyInput(__s7param0);
    for (var __s7local0 = 0; __s7local0 < this._elements.length; __s7local0++) {
      this._elements[__s7local0].updateValue(this._value);
    }
    this.valueUpdatedSignal.signal();
  };
  ValueChangerController.prototype.verifyInput = function (__s11param0) {
    if (__s11param0 < this._minValue) {
      this._value = this._minValue;
    } else if (__s11param0 > this._maxValue) {
      this._value = this._maxValue;
    } else {
      this._value = __s11param0;
    }
  };
  ValueChangerController.prototype.addTextfield = function (__s16param0) {
    var __s16local0 = new __dep_class_BasicTextfieldValueContainer.BasicTextfieldValueContainer(__s16param0);
    var __s16local1 = new __dep_class_InputTextfieldValueComponent.InputTextfieldValueComponent(this, this._minValue, this._maxValue, __s16local0);
    this.addValueComponent(__s16local1);
  };
  ValueChangerController.prototype.addButtons = function (__s18param0, __s18param1) {
    var __s18local0 = new __dep_class_BasicButtonValueContainer.BasicButtonValueContainer(__s18param0);
    var __s18local1 = new __dep_class_ButtonsValueComponent.ButtonsValueComponent(this, this._minValue, this._maxValue, __s18local0, __s18param1);
    this.addValueComponent(__s18local1);
  };
  ValueChangerController.prototype.dispose = function () {
    for (var __s20local0 = 0; __s20local0 < this._elements.length; __s20local0++) {
      this._elements[__s20local0].dispose();
    }
    this.valueUpdatedSignal.removeAll();
  };
  ValueChangerController.prototype.addSlider = function (__s24param0) {
    var __s24local0 = new __dep_class_BasicSliderValueContainer.BasicSliderValueContainer(__s24param0);
    var __s24local1 = new __dep_class_SliderValueComponent.SliderValueComponent(this, this._minValue, this._maxValue, __s24local0);
    this.addValueComponent(__s24local1);
  };
  Object.defineProperty(ValueChangerController.prototype, "value", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  return ValueChangerController;
}();
exports.ValueChangerController = __s0local0;
