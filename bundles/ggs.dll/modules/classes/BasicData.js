Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __s0local0 = function (__s1param0) {
  function BasicData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._updateData = true;
    __s3local0._nextUpdateInterval = 0;
    __s3local0._updateInterval = 1000;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicData, __s1param0);
  Object.defineProperty(BasicData.prototype, "controller", {
    get: function () {
      return __dep_class_BasicController.BasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicData.prototype, "updateInterval", {
    get: function () {
      return this._updateInterval;
    },
    set: function (__s9param0) {
      this._updateInterval = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicData.prototype, "updateData", {
    get: function () {
      return this._updateData;
    },
    set: function (__s13param0) {
      this._updateData = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicData.prototype.update = function (__s15param0) {
    if (__s15param0 > this._nextUpdateInterval) {
      this._nextUpdateInterval = __s15param0 + this._updateInterval;
      this.executeUpdate(__s15param0);
    }
  };
  BasicData.prototype.executeUpdate = function (__s18param0) {};
  BasicData.prototype.destroy = function () {};
  return BasicData;
}(createjs.EventDispatcher);
exports.BasicData = __s0local0;
