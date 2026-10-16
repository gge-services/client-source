Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AInventoryList = require("gge-module:export_AInventoryList");
var __dep_export_CastleInventoryTooltipComponent = require("gge-module:export_CastleInventoryTooltipComponent");
var __s0local0 = function (__s1param0) {
  function CastleInventoryListComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInventoryListComponent, __s1param0);
  CastleInventoryListComponent.prototype.createTooltipComponent = function (__s5param0) {
    return new __dep_export_CastleInventoryTooltipComponent.CastleInventoryTooltipComponent(__s5param0);
  };
  CastleInventoryListComponent.prototype.createListItemComponent = function (__s7param0, __s7param1) {
    return new __dep_export_CastleInventoryListItemComponent.CastleInventoryListItemComponent(__s7param0, __s7param1);
  };
  return CastleInventoryListComponent;
}(__dep_export_AInventoryList.AInventoryList);
exports.CastleInventoryListComponent = __s0local0;
var __dep_export_CastleInventoryListItemComponent = require("gge-module:export_CastleInventoryListItemComponent");
