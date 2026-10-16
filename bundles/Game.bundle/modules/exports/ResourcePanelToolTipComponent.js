Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleSprite = require("gge-module:export_CastleSprite");
var __dep_export_AlignmentHelper = require("gge-module:export_AlignmentHelper");
var __s0local0 = function (__s1param0) {
  function ResourcePanelToolTipComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._textFields = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = __s3param0;
    __s3local0.addChild(__s3local0._disp);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourcePanelToolTipComponent, __s1param0);
  ResourcePanelToolTipComponent.prototype.updateTextFieldPositions = function (__s5param0 = null) {
    var __s5local0 = [];
    for (var __s5local1 = 0; __s5local1 < this._textFields.length; __s5local1++) {
      __s5local0.push(this._textFields[__s5local1].originalTextField);
    }
    if (__s5param0 == null) {
      __dep_export_AlignmentHelper.AlignmentHelper.alignSingleLine(__s5local0, __dep_export_AlignmentHelper.AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT, 15);
    } else {
      __dep_export_AlignmentHelper.AlignmentHelper.distributeHorizontally(__s5local0, __s5param0, 0);
    }
  };
  ResourcePanelToolTipComponent.prototype.updateTextFieldDimensions = function (__s11param0) {
    this._textFields.forEach(function (__s13param0) {
      __s13param0.width = __s11param0.width;
    });
  };
  ResourcePanelToolTipComponent.prototype.createTextFields = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(ResourcePanelToolTipComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipComponent.prototype, "textFields", {
    get: function () {
      return this._textFields;
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipComponent;
}(__dep_export_CastleSprite.CastleSprite);
exports.ResourcePanelToolTipComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "Container");
