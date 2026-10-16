Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ClipboardFormats = require("gge-module:class_ClipboardFormats");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __dep_class_BrowserInfo = require("gge-module:class_BrowserInfo");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER + ".Clipboard");
var __s0local1 = function () {
  function Clipboard() {
    this._textElement = document.createElement("textarea");
    this._textElement.id = Clipboard.SURROGATE;
    this._textElement.style.fontSize = "12pt";
    this._textElement.style.border = "0";
    this._textElement.style.padding = "0";
    this._textElement.style.margin = "0";
    this._textElement.style.position = "absolute";
    this._textElement.style.right = "-9999px";
    this._textElement.style.display = "none";
    var __s3local0 = window.pageYOffset || document.documentElement.scrollTop;
    this._textElement.style.top = __s3local0 + "px";
    this._textElementInitStyle = __dep_class_BrowserInfo.currentBrowserInfo.isIE ? "inline" : "initial";
    this._textElement.setAttribute("readonly", "");
    document.body.appendChild(this._textElement);
  }
  Object.defineProperty(Clipboard, "generalClipboard", {
    get: function () {
      this._clipboard ||= new Clipboard();
      return this._clipboard;
    },
    set: function (__s7param0) {
      throw new TypeError("generalClipboard is readonly");
    },
    enumerable: true,
    configurable: true
  });
  Clipboard.prototype.setData = function (__s9param0, __s9param1, __s9param2 = true) {
    this._textElement.style.display = this._textElementInitStyle;
    this._data = __s9param1;
    this._textElement.value = __s9param1;
    this._textElement.select();
    var __s9local0 = this.execCopy();
    this._textElement.style.display = "none";
    return __s9local0;
  };
  Clipboard.prototype.getData = function (__s11param0) {
    return this._data;
  };
  Clipboard.prototype.clear = function () {
    this.setData(__dep_class_ClipboardFormats.ClipboardFormats.TEXT_FORMAT, "");
  };
  Clipboard.prototype.execCopy = function () {
    try {
      return document.execCommand("copy");
    } catch (__s18local0) {
      __s0local0.error("execCommand copy failed", __s18local0.message);
      return false;
    }
  };
  Clipboard.SURROGATE = "clipboardSurrogateTextArea";
  return Clipboard;
}();
exports.Clipboard = __s0local1;
