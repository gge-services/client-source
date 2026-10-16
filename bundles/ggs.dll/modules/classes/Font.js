Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Font(__s3param0, __s3param1, __s3param2) {
    this.isLoaded = false;
    this._fontName = __s3param0;
    this._fontStyle = __s3param1;
    this._fontType = __s3param2;
  }
  Font.prototype.hasGlyphs = function (__s5param0) {
    return true;
  };
  Object.defineProperty(Font.prototype, "fontType", {
    get: function () {
      return this._fontType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Font.prototype, "fontStyle", {
    get: function () {
      return this._fontStyle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Font.prototype, "fontName", {
    get: function () {
      return this._fontName;
    },
    enumerable: true,
    configurable: true
  });
  return Font;
}();
exports.Font = __s0local0;
