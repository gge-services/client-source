Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AInventoryList = require("gge-module:export_AInventoryList");
var __dep_export_HospitalInventoryTooltipComponent = require("gge-module:export_HospitalInventoryTooltipComponent");
var __s0local0 = function (__s1param0) {
  function HospitalInventoryListComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.selectCallback = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HospitalInventoryListComponent, __s1param0);
  HospitalInventoryListComponent.prototype.createTooltipComponent = function (__s5param0) {
    return new __dep_export_HospitalInventoryTooltipComponent.HospitalInventoryTooltipComponent(__s5param0);
  };
  HospitalInventoryListComponent.prototype.createListItemComponent = function (__s7param0, __s7param1) {
    return new __dep_export_HospitalInventoryListItemComponent.HospitalInventoryListItemComponent(__s7param0, __s7param1, this.selectCallback);
  };
  return HospitalInventoryListComponent;
}(__dep_export_AInventoryList.AInventoryList);
exports.HospitalInventoryListComponent = __s0local0;
var __dep_export_HospitalInventoryListItemComponent = require("gge-module:export_HospitalInventoryListItemComponent");
