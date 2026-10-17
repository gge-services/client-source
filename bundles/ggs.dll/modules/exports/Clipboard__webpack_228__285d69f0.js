// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 228
// Export: Clipboard; preserved source: modules/internal/exact_73c19e878e972046.js
// Original canonical SHA-256: 176d379714b160940bcf64a1d84fa27405003b2c81543e8abdf60e1feaccca23
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
