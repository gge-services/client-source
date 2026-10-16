Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleTitleAchievedDialogProperties(__s3param0, __s3param1 = false) {
    var __s3local0 = this;
    __s3local0._alreadyAchieved = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._title = __s3param0;
    __s3local0._alreadyAchieved = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleAchievedDialogProperties, __s1param0);
  Object.defineProperty(CastleTitleAchievedDialogProperties.prototype, "title", {
    get: function () {
      return this._title;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleAchievedDialogProperties.prototype, "alreadyAchieved", {
    get: function () {
      return this._alreadyAchieved;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleAchievedDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleTitleAchievedDialogProperties = __s0local0;
