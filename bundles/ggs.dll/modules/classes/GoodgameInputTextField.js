Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_opaque_c83528567256175cfb346d7d_1 = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_class_TextValide = require("gge-module:class_TextValide");
var __s0local0 = function (__s1param0) {
  function GoodgameInputTextField(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._userWroteSomething = false;
    __s3local0.updateStrategyListeners();
    __s3local0.selectable = true;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GoodgameInputTextField, __s1param0);
  GoodgameInputTextField.prototype.updateStrategyListeners = function () {
    this.focusOut.add(this.bindFunction(this.restoreDefaultTextContentForEmptyTextFields));
    this.focusIn.add(this.bindFunction(this.removeDefaultTextContent));
  };
  GoodgameInputTextField.prototype.resolveTextContent = function (__s7param0) {
    if (__s7param0 instanceof __dep_opaque_c83528567256175cfb346d7d.HTMLTextVO) {
      throw new Error(GoodgameInputTextField.NAME + ", resolveTextContent() -> Input TextFields doesn't support HTMLTextVOs.");
    }
    if (this.text == "" || !this._userWroteSomething) {
      __s1param0.prototype.resolveTextContent.call(this, __s7param0);
    }
  };
  GoodgameInputTextField.prototype.removeDefaultTextContent = function (__s11param0) {
    var __s11local0 = this._model.text;
    if (this.displayAsPassword) {
      __s11local0 = __dep_class_TextValide.TextValide.trimPassword(__s11local0);
    }
    if (__s11local0 == this._model.textDefault) {
      this.text = "";
      this._userWroteSomething = true;
    }
  };
  GoodgameInputTextField.prototype.restoreDefaultTextContentForEmptyTextFields = function (__s15param0) {
    if (this._textContentDefaultVO) {
      var __s15local0 = this.text;
      if (this.displayAsPassword) {
        __s15local0 = __dep_class_TextValide.TextValide.trimPassword(__s15local0);
      }
      if (__s15local0 == "") {
        this.text = this._textContentDefaultVO.compose();
        this._userWroteSomething = false;
      }
    }
  };
  GoodgameInputTextField.prototype.displayText = function () {
    if (!(this._textContentVO instanceof __dep_opaque_c83528567256175cfb346d7d.HTMLTextVO)) {
      var __s20local0 = this._model.text;
      if (!isNaN(this._model.maxChars) && this._model.maxChars > 0 && !this.containsDefaultTextContent) {
        __s20local0 = this._model.text.slice(0, this._model.maxChars);
      }
      if (__s20local0 === null) {
        __s20local0 = "";
        this.printOutDebugInfos();
      }
      if (this._textContentDefaultVO instanceof __dep_opaque_c83528567256175cfb346d7d_1.LocalizedTextVO) {
        this._model.textDefault = this._textContentDefaultVO.compose();
      }
      if (this._displayAsPassword) {
        if (this.text != this._model.textDefault || this._model.textDefault == "") {
          this._model.displayAsPassword = true;
        } else {
          this._model.displayAsPassword = false;
        }
      }
      this._textStrategy.displayText(__s20local0);
    }
  };
  Object.defineProperty(GoodgameInputTextField.prototype, "textContentDefaultVO", {
    get: function () {
      return this._textContentDefaultVO;
    },
    set: function (__s31param0) {
      if (__s31param0 instanceof __dep_opaque_c83528567256175cfb346d7d.HTMLTextVO) {
        throw new Error(GoodgameInputTextField.NAME + "textContentDefaultVO() -> Input TextFields doesn't support HTMLTextVOs.");
      }
      this._textContentDefaultVO = __s31param0;
      this._model.textDefault = __s31param0.compose();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameInputTextField.prototype, "containsDefaultTextContent", {
    get: function () {
      return this._textStrategy.containsDefaultTextContent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameInputTextField.prototype, "displayAsPassword", {
    get: function () {
      return this._displayAsPassword;
    },
    set: function (__s38param0) {
      this._displayAsPassword = __s38param0;
      if (this._originalTextField) {
        this._originalTextField.displayAsPassword = __s38param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  GoodgameInputTextField.NAME = "GoodgameInputTextField";
  return GoodgameInputTextField;
}(require("gge-module:class_GoodgameTextField").GoodgameTextField);
exports.GoodgameInputTextField = __s0local0;
