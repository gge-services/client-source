Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_BasicPicker = require("gge-module:export_BasicPicker");
var __s0local0 = function (__s1param0) {
  function TextPicker(__s3param0) {
    var __s3local0 = this;
    __s3local0._preFix = "";
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).initTextField();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TextPicker, __s1param0);
  TextPicker.prototype.initTextField = function () {
    this._itxt_pick = this.textFieldManager.registerTextField(this._disp.txt_pick, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0));
    this._itxt_pick.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.CENTER;
    this._itxt_pick.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.enableTextfield(this._isEnabled);
  };
  TextPicker.prototype.updateInfo = function () {
    if (this.selectedValue > -1) {
      var __s7local0 = __dep_exact_f855840627e6e145.int((this.selectedValue + 1) * this.amountFactor);
      if (this._preFix && this._preFix != "") {
        this._itxt_pick.textContentVO.textReplacements = [this._preFix, __s7local0];
      } else {
        this._itxt_pick.textContentVO.numberValue = __s7local0;
      }
      this._itxt_pick.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
  };
  Object.defineProperty(TextPicker.prototype, "enabled", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicPicker.BasicPicker.prototype, "enabled").get.call(this);
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicPicker.BasicPicker.prototype, "enabled").set.call(this, __s14param0);
      this.enableTextfield(__s14param0);
    },
    enumerable: true,
    configurable: true
  });
  TextPicker.prototype.enableTextfield = function (__s16param0) {
    if (this._itxt_pick) {
      this._itxt_pick.tabEnabled = __s16param0;
      this._itxt_pick.mouseEnabled = __s16param0;
    }
  };
  Object.defineProperty(TextPicker.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextPicker.prototype, "itxt_pick", {
    get: function () {
      return this._itxt_pick;
    },
    enumerable: true,
    configurable: true
  });
  return TextPicker;
}(__dep_export_BasicPicker.BasicPicker);
exports.TextPicker = __s0local0;
