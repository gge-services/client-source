Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_instanceOf_ISupportCapacityVO = require("gge-module:export_instanceOf_ISupportCapacityVO");
var __s0local0 = function (__s1param0) {
  function SupportOverviewDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.mapObjectVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SupportOverviewDialogProperties, __s1param0);
  Object.defineProperty(SupportOverviewDialogProperties.prototype, "capacity", {
    get: function () {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.mapObjectVO, "ABGAllianceTowerMapobjectVO")) {
        return -1;
      } else if (__dep_export_instanceOf_ISupportCapacityVO.instanceOf_ISupportCapacityVO(this.mapObjectVO)) {
        return this.mapObjectVO.supportCapacity;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  return SupportOverviewDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.SupportOverviewDialogProperties = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
