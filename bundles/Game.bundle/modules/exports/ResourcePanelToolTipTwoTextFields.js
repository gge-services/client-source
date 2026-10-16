Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipTwoTextFields(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipTwoTextFields, __s1param0);
  ResourcePanelToolTipTwoTextFields.prototype.createTextFields = function () {
    this._tf1 = this.textFieldManager.registerTextField(this._disp.tf_1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this._tf2 = this.textFieldManager.registerTextField(this._disp.tf_2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this._textFields.length = 0;
    this._textFields.push(this._tf1);
    this._textFields.push(this._tf2);
  };
  Object.defineProperty(ResourcePanelToolTipTwoTextFields.prototype, "tf1", {
    get: function () {
      if (this._tf1 == null || this._tf1.textContentVO == null) {
        this.createTextFields();
      }
      return this._tf1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipTwoTextFields.prototype, "tf2", {
    get: function () {
      if (this._tf2 == null || this._tf2.textContentVO == null) {
        this.createTextFields();
      }
      return this._tf2;
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipTwoTextFields;
}(require("gge-module:export_ResourcePanelToolTipComponent").ResourcePanelToolTipComponent);
exports.ResourcePanelToolTipTwoTextFields = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
