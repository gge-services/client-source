Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function OptionsDialogProperties(__s3param0 = 0, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.tabID = __s3param0;
    __s3local0._shownewsletter = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogProperties, __s1param0);
  Object.defineProperty(OptionsDialogProperties.prototype, "shownewsletter", {
    get: function () {
      var __s5local0 = this._shownewsletter;
      this._shownewsletter = false;
      return __s5local0;
    },
    enumerable: true,
    configurable: true
  });
  return OptionsDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.OptionsDialogProperties = __s0local0;
