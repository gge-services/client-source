Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_TextFormat = require("gge-module:class_TextFormat");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER + ".StyleSheet");
var __s0local1 = function () {
  function StyleSheet() {
    this._styleNames = [];
  }
  Object.defineProperty(StyleSheet.prototype, "styleNames", {
    get: function () {
      return this._styleNames;
    },
    enumerable: true,
    configurable: true
  });
  StyleSheet.prototype.clear = function () {
    this._styleNames = [];
  };
  StyleSheet.prototype.getStyle = function (__s9param0) {
    for (var __s9local0 = 0, __s9local1 = Array.from(this._styleNames.keys()); __s9local0 < __s9local1.length; __s9local0++) {
      var __s9local2 = __s9local1[__s9local0];
      if (__s9local2.toString() == __s9param0) {
        return this._styles[__s9local2];
      }
    }
    return null;
  };
  StyleSheet.prototype.parseCSS = function (__s14param0) {
    __s0local0.debug("parseCSS  it's just mock-up function, if html text should be formatted in the textfield, this function has to be implemented");
  };
  StyleSheet.prototype.setStyle = function (__s16param0, __s16param1) {
    this._styleNames.push(__s16param0);
    this._styles.set(__s16param0, __s16param1);
  };
  StyleSheet.prototype.transform = function (__s18param0) {
    __s0local0.debug("for now it's just mock-up function, if html text should be formatted in the textfield, this function has to be implemented");
    return new __dep_class_TextFormat.TextFormat();
  };
  return StyleSheet;
}();
exports.StyleSheet = __s0local1;
