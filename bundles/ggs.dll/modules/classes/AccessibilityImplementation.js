Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = function () {
  function AccessibilityImplementation() {
    this.errno = 0;
    this.stub = false;
    this.logger = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER + ".AccessibilityImplementation");
  }
  AccessibilityImplementation.prototype.accDoDefaultAction = function (__s5param0) {
    this.logger.warn("AccessibilityImplementation.accDoDefaultAction is not implemented");
  };
  AccessibilityImplementation.prototype.accLocation = function (__s7param0) {
    this.logger.warn("AccessibilityImplementation.accLocation is not implemented");
    return null;
  };
  AccessibilityImplementation.prototype.accSelect = function (__s9param0, __s9param1) {
    this.logger.warn("AccessibilityImplementation.accSelect is not implemented");
  };
  AccessibilityImplementation.prototype.get_accDefaultAction = function (__s11param0) {
    this.logger.warn("AccessibilityImplementation.get_accDefaultAction is not implemented");
    return "";
  };
  AccessibilityImplementation.prototype.get_accFocus = function () {
    this.logger.warn("AccessibilityImplementation.get_accFocus is not implemented");
    return 0;
  };
  AccessibilityImplementation.prototype.get_accName = function (__s15param0) {
    this.logger.warn("AccessibilityImplementation.get_accName is not implemented");
    return "";
  };
  AccessibilityImplementation.prototype.get_accRole = function (__s17param0) {
    this.logger.warn("AccessibilityImplementation.get_accRole is not implemented");
    return 0;
  };
  AccessibilityImplementation.prototype.get_accSelection = function () {
    this.logger.warn("AccessibilityImplementation.get_accSelection is not implemented");
    return [];
  };
  AccessibilityImplementation.prototype.get_accState = function (__s21param0) {
    this.logger.warn("AccessibilityImplementation.get_accState is not implemented");
    return 0;
  };
  AccessibilityImplementation.prototype.get_accValue = function (__s23param0) {
    this.logger.warn("AccessibilityImplementation.get_accValue is not implemented");
    return "";
  };
  AccessibilityImplementation.prototype.get_selectionActiveIndex = function () {
    this.logger.warn("AccessibilityImplementation.get_selectionActiveIndex is not implemented");
    return null;
  };
  AccessibilityImplementation.prototype.get_selectionAnchorIndex = function () {
    this.logger.warn("AccessibilityImplementation.get_selectionAnchorIndex is not implemented");
    return null;
  };
  AccessibilityImplementation.prototype.getChildIDArray = function () {
    this.logger.warn("AccessibilityImplementation.getChildIDArray is not implemented");
    return Array(0);
  };
  AccessibilityImplementation.prototype.isLabeledBy = function (__s31param0) {
    this.logger.warn("AccessibilityImplementation.isLabeledBy is not implemented");
    return false;
  };
  return AccessibilityImplementation;
}();
exports.AccessibilityImplementation = __s0local0;
