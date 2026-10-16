Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function PrivateResourceVillageActionDialogProperties(__s3param0, __s3param1 = -1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._uniqueVillageID = -1;
    __s3local0._villageInfoVO = __s3param0;
    __s3local0._uniqueVillageID = __dep_exact_f855840627e6e145.int(__s3param1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateResourceVillageActionDialogProperties, __s1param0);
  Object.defineProperty(PrivateResourceVillageActionDialogProperties.prototype, "villageInfoVO", {
    get: function () {
      return this._villageInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageActionDialogProperties.prototype, "uniqueVillageID", {
    get: function () {
      return this._uniqueVillageID;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateResourceVillageActionDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.PrivateResourceVillageActionDialogProperties = __s0local0;
