Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function InfoCatalogTopicEnum(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this;
    __s3local0._pageName = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InfoCatalogTopicEnum, __s1param0);
  Object.defineProperty(InfoCatalogTopicEnum.prototype, "pageName", {
    get: function () {
      return this._pageName;
    },
    enumerable: true,
    configurable: true
  });
  return InfoCatalogTopicEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.InfoCatalogTopicEnum = __s0local0;
