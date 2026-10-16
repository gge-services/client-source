Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleChangePlayerNameDialogProperties(__s3param0, __s3param1 = 0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._discount = 0;
    __s3local0._cost = 0;
    __s3local0._cost = __s3param0;
    __s3local0._discount = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangePlayerNameDialogProperties, __s1param0);
  Object.defineProperty(CastleChangePlayerNameDialogProperties.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChangePlayerNameDialogProperties.prototype, "cost", {
    get: function () {
      return this._cost;
    },
    set: function (__s9param0) {
      this._cost = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleChangePlayerNameDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleChangePlayerNameDialogProperties = __s0local0;
