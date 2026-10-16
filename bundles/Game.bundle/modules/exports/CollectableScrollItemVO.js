Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableScrollItemVO(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._collectable = __s3param0;
    __s3local0._collectableRenderOptions = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableScrollItemVO, __s1param0);
  Object.defineProperty(CollectableScrollItemVO.prototype, "collectable", {
    get: function () {
      return this._collectable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableScrollItemVO.prototype, "collectableRenderOptions", {
    get: function () {
      return this._collectableRenderOptions;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableScrollItemVO;
}(require("gge-module:exact_9e901e8e2483a22f").ScrollItemVO);
exports.CollectableScrollItemVO = __s0local0;
