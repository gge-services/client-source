Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_instantiationKey = require("gge-module:export_instantiationKey");
var __s0local0 = function (__s1param0) {
  function DownloadedContentSourceLocationEnum(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(DownloadedContentSourceLocationEnum, __s1param0);
  Object.defineProperty(DownloadedContentSourceLocationEnum, "values", {
    get: function () {
      return DownloadedContentSourceLocationEnum._values.concat();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DownloadedContentSourceLocationEnum, "External", {
    get: function () {
      return DownloadedContentSourceLocationEnum._external;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DownloadedContentSourceLocationEnum, "Local", {
    get: function () {
      return DownloadedContentSourceLocationEnum._local;
    },
    enumerable: true,
    configurable: true
  });
  DownloadedContentSourceLocationEnum._values = [];
  DownloadedContentSourceLocationEnum._external = new DownloadedContentSourceLocationEnum("External", __dep_export_instantiationKey.instantiationKey);
  DownloadedContentSourceLocationEnum._local = new DownloadedContentSourceLocationEnum("Local", __dep_export_instantiationKey.instantiationKey);
  return DownloadedContentSourceLocationEnum;
}(__dep_export_instantiationKey.BasicEnum);
exports.DownloadedContentSourceLocationEnum = __s0local0;
