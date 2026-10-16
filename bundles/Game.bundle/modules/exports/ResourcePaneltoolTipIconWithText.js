Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ResourcePaneltoolTipIconWithText(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._icon = __s3param1;
    __s3param0.mc_icon.addChild(__s3param1);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.centerMovieClip(__s3param1, 30, 30);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePaneltoolTipIconWithText, __s1param0);
  ResourcePaneltoolTipIconWithText.prototype.updateTextFieldDimensions = function (__s5param0) {
    var __s5local0 = this;
    this._textFields.forEach(function (__s7param0) {
      __s7param0.width = __s5param0.width - __s5local0._icon.width;
    });
  };
  return ResourcePaneltoolTipIconWithText;
}(require("gge-module:export_ResourcePanelToolTipSingleLineText").ResourcePanelToolTipSingleLineText);
exports.ResourcePaneltoolTipIconWithText = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
