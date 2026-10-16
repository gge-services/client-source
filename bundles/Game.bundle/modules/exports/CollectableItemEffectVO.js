Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemEffectVO(__s3param0, __s3param1 = false) {
    var __s3local0 = this;
    __s3local0._effectId = -1;
    __s3local0._isTemporary = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, 0) || this)._effectId = __s3param0;
    __s3local0._isTemporary = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemEffectVO, __s1param0);
  Object.defineProperty(CollectableItemEffectVO.prototype, "effectId", {
    get: function () {
      return this._effectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemEffectVO.prototype, "isTemporary", {
    get: function () {
      return this._isTemporary;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemEffectVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemEffectVO = __s0local0;
