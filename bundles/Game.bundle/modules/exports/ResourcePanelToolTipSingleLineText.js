Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipSingleLineText(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipSingleLineText, __s1param0);
  ResourcePanelToolTipSingleLineText.prototype.createTextFields = function () {
    this._tf = this.textFieldManager.registerTextField(this._disp.tf, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this._textFields.length = 0;
    this._textFields.push(this._tf);
  };
  Object.defineProperty(ResourcePanelToolTipSingleLineText.prototype, "tf", {
    get: function () {
      if (this._tf == null || this._tf.textContentVO == null) {
        this.createTextFields();
      }
      return this._tf;
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipSingleLineText;
}(require("gge-module:export_ResourcePanelToolTipComponent").ResourcePanelToolTipComponent);
exports.ResourcePanelToolTipSingleLineText = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
