// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 225
// Export: Transform; preserved source: modules/internal/exact_8eeb45c41456dd39.js
// Original canonical SHA-256: 6ec74bb1bd82f740c52a0db0644ee7f5fab2caacd15351ecb4664e3e617c5e96
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
