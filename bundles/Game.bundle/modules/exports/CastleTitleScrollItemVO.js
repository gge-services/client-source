Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleTitleScrollItemVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._selected = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._title = __s3param0;
    __s3local0._selected = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleScrollItemVO, __s1param0);
  Object.defineProperty(CastleTitleScrollItemVO.prototype, "title", {
    get: function () {
      return this._title;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleScrollItemVO.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    set: function (__s9param0) {
      this._selected = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleScrollItemVO;
}(require("gge-module:exact_9e901e8e2483a22f").ScrollItemVO);
exports.CastleTitleScrollItemVO = __s0local0;
