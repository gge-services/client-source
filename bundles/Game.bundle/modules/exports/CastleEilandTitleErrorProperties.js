Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleEilandTitleErrorProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    CastleEilandTitleErrorProperties._titleTextID = __s3param0;
    CastleEilandTitleErrorProperties._descTextID = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandTitleErrorProperties, __s1param0);
  Object.defineProperty(CastleEilandTitleErrorProperties.prototype, "titleTextID", {
    get: function () {
      return CastleEilandTitleErrorProperties._titleTextID;
    },
    set: function (__s7param0) {
      CastleEilandTitleErrorProperties._titleTextID = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleErrorProperties.prototype, "descTextID", {
    get: function () {
      return CastleEilandTitleErrorProperties._descTextID;
    },
    set: function (__s11param0) {
      CastleEilandTitleErrorProperties._descTextID = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandTitleErrorProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleEilandTitleErrorProperties = __s0local0;
