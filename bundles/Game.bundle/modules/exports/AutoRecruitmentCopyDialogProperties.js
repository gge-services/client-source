Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentCopyDialogProperties() {
    var __s3local0 = this;
    __s3local0._listId = 0;
    __s3local0._listData = [];
    __s3local0._loopFeeCosts = new __dep_export_CollectableItemC2VO.CollectableItemC2VO(0);
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCopyDialogProperties, __s1param0);
  AutoRecruitmentCopyDialogProperties.prototype.parseServerInformation = function (__s5param0) {
    var __s5local0 = __s5param0.A;
    this._listData = [];
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          this._listData.push(__s5local3);
          this._listId = __dep_exact_f855840627e6e145.int(__s5local3.LID);
        }
      }
    }
  };
  Object.defineProperty(AutoRecruitmentCopyDialogProperties.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyDialogProperties.prototype, "listData", {
    get: function () {
      return this._listData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyDialogProperties.prototype, "loopFeeCosts", {
    get: function () {
      return this._loopFeeCosts;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopyDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.AutoRecruitmentCopyDialogProperties = __s0local0;
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
