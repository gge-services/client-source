Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_BasicPicker = require("gge-module:export_BasicPicker");
var __s0local0 = function (__s1param0) {
  function InputMaxPicker(__s3param0) {
    var __s3local0 = this;
    __s3local0._minAmount = 1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).initTextField();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InputMaxPicker, __s1param0);
  InputMaxPicker.prototype.initTextField = function () {
    this._disp.txt_pick.type = __dep_exact_81dacdf05bd32292_1.TextFieldType.INPUT;
    this._itxt_pick = this.textFieldManager.registerTextField(this._disp.txt_pick, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("textMaxPicker_value", ["", 0, 0]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    this._itxt_pick.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.CENTER;
    this.enableTextfield(this._isEnabled);
    this.itxt_pick.focusIn.add(this.bindFunction(this.onPickerFocusIn));
    this.itxt_pick.focusOut.add(this.bindFunction(this.onPickerFocusOut));
    this.itxt_pick.click.add(this.bindFunction(this.onClickInPicker));
    this.itxt_pick.keyDown.add(this.bindFunction(this.onPickerKeyDown));
  };
  InputMaxPicker.prototype.onClickInPicker = function (__s7param0 = null) {
    this.itxt_pick.setSelection(0, this.itxt_pick.text.length);
    this.itxt_pick.restrict = "0-9";
    this.itxt_pick.maxChars = 3;
    this.itxt_pick.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._selectedValue + 1);
  };
  InputMaxPicker.prototype.onPickerKeyDown = function (__s9param0) {
    __s9param0.stopPropagation();
    if (__s9param0.keyCode == __dep_exact_81dacdf05bd32292.Keyboard.ENTER) {
      this.disp.stage.focus = null;
    }
  };
  InputMaxPicker.prototype.onPickerFocusIn = function (__s12param0) {
    this.onClickInPicker();
  };
  InputMaxPicker.prototype.onPickerFocusOut = function (__s14param0) {
    this.setFromInput();
  };
  InputMaxPicker.prototype.setFromInput = function () {
    this.selectedValue = Math.max(0, Math.min(this._maxNumItems - 1, __dep_exact_f855840627e6e145.int(this._itxt_pick.text) - 1));
    this.updateInfo();
  };
  InputMaxPicker.prototype.updateInfo = function () {
    this.initTextField();
    this.itxt_pick.restrict = null;
    this.itxt_pick.maxChars = 20;
    if (this._numItems == 0) {
      this._itxt_pick.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("textMaxPicker_value", ["", 0, 0]);
    } else if (this.selectedValue > -1) {
      this._itxt_pick.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("textMaxPicker_value", ["", this.selectedValue + 1, this._maxNumItems]);
    }
  };
  Object.defineProperty(InputMaxPicker.prototype, "enabled", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicPicker.BasicPicker.prototype, "enabled").get.call(this);
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicPicker.BasicPicker.prototype, "enabled").set.call(this, __s24param0);
      this.enableTextfield(__s24param0);
    },
    enumerable: true,
    configurable: true
  });
  InputMaxPicker.prototype.enableTextfield = function (__s26param0) {
    if (this._itxt_pick) {
      this._itxt_pick.tabEnabled = __s26param0;
      this._itxt_pick.mouseEnabled = __s26param0;
    }
  };
  Object.defineProperty(InputMaxPicker.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InputMaxPicker.prototype, "itxt_pick", {
    get: function () {
      return this._itxt_pick;
    },
    enumerable: true,
    configurable: true
  });
  InputMaxPicker.prototype.dispose = function () {
    __s1param0.prototype.dispose.call(this);
    this.textFieldManager.unregisterTextFieldByReference(this._itxt_pick);
  };
  Object.defineProperty(InputMaxPicker.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    set: function (__s37param0) {
      this._minAmount = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  return InputMaxPicker;
}(__dep_export_BasicPicker.BasicPicker);
exports.InputMaxPicker = __s0local0;
