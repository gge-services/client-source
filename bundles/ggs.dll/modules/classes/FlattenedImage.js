Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function FlattenedImage(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0 <= 0 ? 1 : __s3param0, __s3param1 <= 0 ? 1 : __s3param1, __s3param5, __s3param4) || this;
    __s3local0._registrationPointX = 0;
    __s3local0._registrationPointY = 0;
    if (__s3param4 == 0) {
      __s3param4 = 16777215;
      __s3param5 = true;
    }
    __s3local0._registrationPointX = __s3param2;
    __s3local0._registrationPointY = __s3param3;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(FlattenedImage, __s1param0);
  Object.defineProperty(FlattenedImage.prototype, "registrationPointX", {
    get: function () {
      return this._registrationPointX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FlattenedImage.prototype, "registrationPointY", {
    get: function () {
      return this._registrationPointY;
    },
    enumerable: true,
    configurable: true
  });
  FlattenedImage.prototype.setRegistrationPointX = function (__s10param0) {
    this._registrationPointX = __s10param0;
  };
  FlattenedImage.prototype.setRegistrationPointY = function (__s12param0) {
    this._registrationPointY = __s12param0;
  };
  return FlattenedImage;
}(createjs.BitmapData);
exports.FlattenedImage = __s0local0;
