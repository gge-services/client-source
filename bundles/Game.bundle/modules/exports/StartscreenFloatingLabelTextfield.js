Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function StartscreenFloatingLabelTextfield(__s3param0, __s3param1, __s3param2 = false, __s3param3 = "off") {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._floatingScale = 0.75;
    __s3local0._selectedColor = 3367856;
    __s3local0._isFloating = false;
    __s3local0._needsValidation = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.disp.icon_showPw);
    __s3local0._itxt_label = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s3param1));
    __s3local0._itxt_error = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.mc_error.txt_error, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0._itxt_input = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.txt_input, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0._itxt_input.displayAsPassword = __s3param2;
    __s3local0._isPasswordTextField = __s3param2;
    __s3local0.disp.txt_input.getTextFieldHTMLElement().autocomplete = __s3param3;
    __s3local0._onInputChangeSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._originalLabelPos = new __s0local0(__s3local0._itxt_label.x, __s3local0._itxt_label.y);
    __s3local0._originalInputPos = new __s0local0(__s3local0._itxt_input.x, __s3local0._itxt_input.y);
    __s3local0._originalColor = __s3local0._itxt_label.color;
    __s3local0._itxt_input.x = __s3local0._originalLabelPos.x;
    __s3local0._itxt_input.y = __s3local0._originalLabelPos.y;
    __s3local0._floatingOffset = new __s0local0(0, -10);
    __s3local0.disp.txt_label.alpha = 0.7;
    __s3local0.disp.bg_selected.visible = false;
    __s3local0.disp.bg_filled.visible = false;
    __s3local0.disp.bg_error.visible = false;
    __s3local0.disp.mc_error.visible = false;
    __s3local0.disp.icon_showPw.visible = false;
    if (__s3param2) {
      __s3local0.showPassword(false);
    }
    __s3local0.addEventListener();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StartscreenFloatingLabelTextfield, __s1param0);
  StartscreenFloatingLabelTextfield.prototype.reset = function () {
    this._itxt_label.scaleX = this._itxt_label.scaleY = 1;
    this._itxt_label.x = this._originalLabelPos.x;
    this._itxt_label.y = this._originalLabelPos.y;
    this._itxt_label.color = this._originalColor;
    this._itxt_input.x = this._originalInputPos.x;
    this._itxt_input.y = this._originalInputPos.y;
    this._itxt_input.clearText();
    this.showPassword(false);
    this.disp.bg_selected.visible = false;
    this.disp.bg_filled.visible = false;
    this.disp.bg_error.visible = false;
    this.disp.mc_error.visible = false;
  };
  StartscreenFloatingLabelTextfield.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.reset();
  };
  StartscreenFloatingLabelTextfield.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._itxt_input.focusIn.add(this.bindFunction(this.onFocusIn));
    this._itxt_input.focusOut.add(this.bindFunction(this.onFocusOut));
    this._itxt_input.change.add(this.bindFunction(this.onInputChange));
  };
  StartscreenFloatingLabelTextfield.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    this._itxt_input.focusIn.remove(this.bindFunction(this.onFocusIn));
    this._itxt_input.focusOut.remove(this.bindFunction(this.onFocusOut));
    this._itxt_input.change.remove(this.bindFunction(this.onInputChange));
  };
  StartscreenFloatingLabelTextfield.prototype.onFocusIn = function () {
    this.disp.bg_selected.visible = true;
    this.updateLabel();
  };
  StartscreenFloatingLabelTextfield.prototype.onFocusOut = function () {
    this.disp.bg_selected.visible = false;
    this.updateLabel();
    if (this._needsValidation) {
      this._onInputChangeSignal.dispatch();
      this._needsValidation = false;
    }
  };
  StartscreenFloatingLabelTextfield.prototype.onInputChange = function () {
    this._needsValidation = !!this.inputText;
    this.disp.icon_showPw.visible = this._isPasswordTextField && this.inputText;
  };
  StartscreenFloatingLabelTextfield.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.disp.icon_showPw:
        this.toggleShowPassword();
        break;
      default:
        this._itxt_input.setFocus();
    }
  };
  StartscreenFloatingLabelTextfield.prototype.updateLabel = function () {
    if (this.isSelected || this._itxt_input.text) {
      if (!this._isFloating) {
        var __s24local0 = this._itxt_label.x + this._floatingOffset.x;
        var __s24local1 = this._itxt_label.y + this._floatingOffset.y;
        __dep_exact_608de47b6498f9b0.TweenLite.to(this._itxt_label, 0.3, {
          x: __s24local0,
          y: __s24local1,
          scaleX: this._floatingScale,
          scaleY: this._floatingScale
        });
        this._itxt_input.x = this._originalInputPos.x;
        this._itxt_input.y = this._originalInputPos.y;
        this._isFloating = true;
      }
    } else if (this._isFloating) {
      __dep_exact_608de47b6498f9b0.TweenLite.to(this._itxt_label, 0.3, {
        x: this._originalLabelPos.x,
        y: this._originalLabelPos.y,
        scaleX: 1,
        scaleY: 1
      });
      this._itxt_input.x = this._originalLabelPos.x;
      this._itxt_input.y = this._originalLabelPos.y;
      this._isFloating = false;
      this.disp.bg_filled.visible = false;
      this.disp.bg_error.visible = false;
      this.disp.mc_error.visible = false;
    }
    this.updateColor();
  };
  StartscreenFloatingLabelTextfield.prototype.updateColor = function () {
    this.disp.bg_selected.visible = this.isSelected;
    if (this.isSelected) {
      this._itxt_label.color = this._selectedColor;
      this.disp.txt_label.alpha = 1;
    } else {
      this._itxt_label.color = this._originalColor;
      this.disp.txt_label.alpha = 0.7;
    }
  };
  Object.defineProperty(StartscreenFloatingLabelTextfield.prototype, "isSelected", {
    get: function () {
      return this.disp.bg_selected.visible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartscreenFloatingLabelTextfield.prototype, "inputText", {
    get: function () {
      if (this._itxt_input) {
        return this._itxt_input.text;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartscreenFloatingLabelTextfield.prototype, "inputTextField", {
    get: function () {
      return this._itxt_input;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StartscreenFloatingLabelTextfield.prototype, "onInputChangeSignal", {
    get: function () {
      return this._onInputChangeSignal;
    },
    enumerable: true,
    configurable: true
  });
  StartscreenFloatingLabelTextfield.prototype.showPassword = function (__s43param0) {
    this.disp.icon_showPw.gotoAndStop(__s43param0 ? 1 : 2);
    this.disp.icon_showPw.toolTipText = __s43param0 ? "hide" : "show";
    this._itxt_input.displayAsPassword = !__s43param0;
  };
  StartscreenFloatingLabelTextfield.prototype.showValidated = function () {
    this.disp.bg_filled.visible = true;
    this.disp.bg_error.visible = false;
    this.disp.mc_error.visible = false;
  };
  StartscreenFloatingLabelTextfield.prototype.showError = function (__s47param0, __s47param1 = null) {
    this.disp.bg_filled.visible = false;
    this.disp.bg_error.visible = true;
    this.disp.mc_error.visible = true;
    this._itxt_error.textContentVO.textId = __s47param0;
    this._itxt_error.textContentVO.textReplacements = __s47param1;
    var __s47local0 = this._itxt_error.x;
    __dep_exact_608de47b6498f9b0.TweenLite.fromTo(this._itxt_error, 0.3, {
      x: __s47local0
    }, {
      x: __s47local0,
      ease: __dep_exact_608de47b6498f9b0_1.Bounce.easeOut
    });
  };
  StartscreenFloatingLabelTextfield.prototype.hideError = function () {
    this.disp.bg_error.visible = false;
    this.disp.mc_error.visible = false;
  };
  StartscreenFloatingLabelTextfield.prototype.toggleShowPassword = function () {
    if (this._itxt_input) {
      this.showPassword(this._itxt_input.displayAsPassword);
    }
  };
  StartscreenFloatingLabelTextfield.prototype.fillFromHtmlText = function () {
    var __s54local0 = this.disp.txt_input.getTextFieldHTMLElement().value;
    if (__s54local0) {
      if (this._isPasswordTextField) {
        this.disp.txt_input.text = "";
        this._itxt_input.textContentVO.stringValue = __s54local0;
        this.disp.txt_input.text = __s54local0;
      } else {
        this._itxt_input.textContentVO.stringValue = __s54local0;
      }
      this.onInputChange();
      this.updateLabel();
    }
  };
  return StartscreenFloatingLabelTextfield;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.StartscreenFloatingLabelTextfield = __s0local1;
