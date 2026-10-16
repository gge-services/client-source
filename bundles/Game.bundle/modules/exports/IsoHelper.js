Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  return function IsoHelperClass() {
    this.view = new __dep_export_IsoHelperView.IsoHelperView();
    this.data = new __dep_export_IsoHelperData.IsoHelperData();
    this.zSort = new __dep_export_IsoHelperZSort.IsoHelperZSort();
    this.walkmap = new __dep_export_IsoHelperWalkmap.IsoHelperWalkmap();
  };
}();
var __dep_export_IsoHelperWalkmap = require("gge-module:export_IsoHelperWalkmap");
var __dep_export_IsoHelperData = require("gge-module:export_IsoHelperData");
var __dep_export_IsoHelperView = require("gge-module:export_IsoHelperView");
var __dep_export_IsoHelperZSort = require("gge-module:export_IsoHelperZSort");
exports.IsoHelper = new __s0local0();
