Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function CastleGGSTextFieldDefaultStrategy(__s3param0) {
    var __s3local0 = this;
    __s3local0.originalTextSize = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGGSTextFieldDefaultStrategy, __s1param0);
  CastleGGSTextFieldDefaultStrategy.prototype.fitTextSizeToBounds = function (__s5param0 = null) {
    __s5param0 ||= new __s0local0(0, 0, this._textField.model.width, this._textField.model.height);
    if (this.textWidth != 0 && this.textHeight != 0 && this._textField.text != "") {
      this.originalTextSize ||= __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(this._textField.model.size));
      var __s5local0 = __dep_exact_f855840627e6e145.int(this.originalTextSize);
      if (!(__s5param0.width >= this.textWidth) || !(__s5param0.height >= this.textHeight) || !(this._textField.model.size >= __s5local0)) {
        var __s5local1 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().minimumAutoFitFontSize);
        var __s5local2 = __s5local0 + 1;
        var __s5local3 = __s5param0.height > this.originalTextSize * 2;
        do {
          __s5local2--;
          this.updateSize(__s5local2);
        } while (__s5local2 >= __s5local1 && (__s5param0.width + (__s5local3 ? __s5local2 : 0) < this.textWidth || __s5param0.height < this.textHeight));
        this._textField.model.size = __s5local2;
      }
    }
  };
  Object.defineProperty(CastleGGSTextFieldDefaultStrategy.prototype, "textWidth", {
    get: function () {
      return this._textField.originalTextField.textWidth + 4;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.GGSTextFieldDefaultStrategy.prototype, "textWidth").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGGSTextFieldDefaultStrategy.prototype, "textHeight", {
    get: function () {
      return this._textField.originalTextField.textHeight + 4;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.GGSTextFieldDefaultStrategy.prototype, "textHeight").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleGGSTextFieldDefaultStrategy.prototype.dispose = function () {
    this._textField.originalTextField.y = this._originalPosY;
    __s1param0.prototype.dispose.call(this);
  };
  CastleGGSTextFieldDefaultStrategy.prototype.setFocus = function () {
    this._textField.originalTextField.focus();
  };
  return CastleGGSTextFieldDefaultStrategy;
}(__dep_exact_9e901e8e2483a22f.GGSTextFieldDefaultStrategy);
exports.CastleGGSTextFieldDefaultStrategy = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ITextFieldStrategy");
