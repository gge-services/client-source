Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_31799b4faed13bdc = require("gge-module:exact_31799b4faed13bdc");
var __s0local0 = function () {
  function StringBuffer(__s3param0 = "") {
    this._string = __s3param0 ? [__s3param0] : [];
  }
  StringBuffer.prototype.append = function (__s5param0) {
    this._string.push(__s5param0);
    return this;
  };
  StringBuffer.prototype.removeEnd = function (__s7param0) {
    this._string = [__dep_exact_31799b4faed13bdc.StringUtils.removeEnd(this.toString(), "" + __s7param0)];
    return this;
  };
  StringBuffer.prototype.toString = function () {
    return this._string.join("");
  };
  return StringBuffer;
}();
exports.StringBuffer = __s0local0;
