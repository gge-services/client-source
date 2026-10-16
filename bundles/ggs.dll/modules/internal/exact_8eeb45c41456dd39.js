Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ColorTransform = require("gge-module:class_ColorTransform");
var __s0local0 = function () {
  function Transform(__s3param0) {
    this._colorTransform = new __dep_class_ColorTransform.ColorTransform();
    this._colorTransform.displayObject = __s3param0;
    this._displayObject = __s3param0;
  }
  Object.defineProperty(Transform.prototype, "colorTransform", {
    get: function () {
      return this._colorTransform;
    },
    set: function (__s7param0) {
      this._colorTransform = __s7param0;
      this._colorTransform.displayObject = this._displayObject;
      this._colorTransform.updateColor();
      this._displayObject.doCache();
    },
    enumerable: true,
    configurable: true
  });
  return Transform;
}();
exports.Transform = __s0local0;
