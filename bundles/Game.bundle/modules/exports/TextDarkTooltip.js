Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_7e3e67aee786bc23 = require("gge-module:exact_7e3e67aee786bc23");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function TextDarkTooltip() {}
  Object.defineProperty(TextDarkTooltip, "textDarkTooltip", {
    get: function () {
      if (__dep_exact_7e3e67aee786bc23.isUndefined(this._textDarkTooltip)) {
        this._textDarkTooltip = new Library.CastleInterfaceElements.TextDark_Tooltip();
      }
      return this._textDarkTooltip;
    },
    enumerable: true,
    configurable: true
  });
  TextDarkTooltip.prototype.showTooltip = function (__s8param0, __s8param1) {
    this._itxt_text = TextDarkTooltip.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s8param1));
    var __s8local0 = this._itxt_text.textHeight;
    this.disp.bg.height = __s8local0 + TextDarkTooltip.TEXT_MARGIN * 2;
    this._itxt_text.y = -(__s8local0 + TextDarkTooltip.TEXT_MARGIN);
    var __s8local1 = __s8param0.localToGlobal(new __s0local0(0, 0));
    this.disp.x = __s8local1.x;
    this.disp.y = Math.max(this.disp.bg.height, __s8local1.y) - __s8param0.height / 2;
    if (this.disp.y - this.disp.bg.height < 0) {
      this.disp.y = __s8local1.y + __s8param0.height / 2 + this.disp.bg.height;
    }
    this.disp.visible = true;
  };
  TextDarkTooltip.prototype.hideTooltip = function () {
    this.disp.visible = false;
  };
  Object.defineProperty(TextDarkTooltip, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextDarkTooltip.prototype, "disp", {
    get: function () {
      return TextDarkTooltip.textDarkTooltip;
    },
    enumerable: true,
    configurable: true
  });
  TextDarkTooltip.getInstance = function () {
    this._instance ||= new TextDarkTooltip();
    return this._instance;
  };
  TextDarkTooltip.TEXT_MARGIN = 5;
  return TextDarkTooltip;
}();
exports.TextDarkTooltip = __s0local1;
